// Glue between core/mastery-engine (pure) and the data-access stores — not
// itself pure, so it lives in modules/ rather than core/ (Mục 16.2).

import { contentStore, progressStore } from "@/data-access";
import {
  computeActivityScore,
  computeMasteryScore,
  recommendNextActions,
  type ActivityResult,
  type MasteryResult,
  type Recommendation,
} from "@/core/mastery-engine";
import type { QuestionType, TopicGroup } from "@/data-access/types";

// FR-H03a/b — which groups use which metric.
export const MASTERY_GROUPS: TopicGroup[] = ["TC", "TL", "NT", "CA", "CD", "DH"];
export const ACTIVITY_GROUPS: TopicGroup[] = ["CT", "VA", "KN"];

const GRADABLE_TYPES: QuestionType[] = ["mcq", "match", "order", "fill"];
const ACTIVITY_TARGET_PER_TOPIC = 5; // Mục 5.11's "≥5 bài/chuyên đề CT" as a working default

export interface TopicSnapshot {
  topicId: string;
  group: TopicGroup;
  isActivityBased: boolean;
  mastery?: MasteryResult; // groups in MASTERY_GROUPS
  activity?: ActivityResult; // groups in ACTIVITY_GROUPS
  practiced: boolean;
}

/** Computes every topic's mastery/activity snapshot from raw attempts. Runs
 * synchronously — fine at this content scale (Mục 16.1's per-topic caching
 * note applies once the content bank reaches full size in Giai đoạn 9). */
export function computeAllTopicSnapshots(): TopicSnapshot[] {
  const attempts = progressStore.getAttempts();
  const exerciseTypeById = new Map(contentStore.getExercises().map((e) => [e.id, e.questionType]));

  return contentStore.getTopics().map((topic) => {
    const topicAttempts = attempts.filter((a) => a.topicIds.includes(topic.id));
    const isActivityBased = ACTIVITY_GROUPS.includes(topic.group);

    if (isActivityBased) {
      const completedCount = new Set(topicAttempts.map((a) => a.exerciseId)).size;
      const lastActivityTimestamp =
        topicAttempts.length > 0 ? Math.max(...topicAttempts.map((a) => a.timestamp)) : null;
      const activity = computeActivityScore(completedCount, ACTIVITY_TARGET_PER_TOPIC, lastActivityTimestamp);
      return { topicId: topic.id, group: topic.group, isActivityBased, activity, practiced: completedCount > 0 };
    }

    // FR-H03a/FR-H03d: only mcq/match/order/fill, only attempts with a
    // definite verdict — self-scored types never reach masteryScore.
    const gradable = topicAttempts.filter(
      (a) => a.correct !== undefined && GRADABLE_TYPES.includes(exerciseTypeById.get(a.exerciseId) as QuestionType),
    );
    const mastery = computeMasteryScore(gradable.map((a) => ({ correct: a.correct!, timestamp: a.timestamp })));
    return { topicId: topic.id, group: topic.group, isActivityBased, mastery, practiced: gradable.length > 0 };
  });
}

/** FR-H06→H08/H11. Ranks activity-based topics by their ratio alongside
 * mastery-based topics by their score — both are "how well is this going,
 * 0–1" signals for ranking purposes, even though they're displayed very
 * differently (FR-H03c). */
export function computeRecommendations(snapshots: TopicSnapshot[]): Recommendation[] {
  const errorLogSize = progressStore.getErrorLog().length;
  const foundationOrder = snapshots.filter((s) => !s.practiced).map((s) => s.topicId);

  const scored = snapshots
    .filter((s) => s.practiced)
    .map((s) => {
      if (s.isActivityBased) {
        return {
          topicId: s.topicId,
          score: s.activity!.ratio,
          practiced: true,
          recentCorrect: s.activity!.completedCount,
          recentTotal: ACTIVITY_TARGET_PER_TOPIC,
        };
      }
      return {
        topicId: s.topicId,
        score: s.mastery!.score,
        practiced: true,
        recentCorrect: Math.round((s.mastery!.score ?? 0) * s.mastery!.attemptsUsed),
        recentTotal: s.mastery!.attemptsUsed,
      };
    });

  return recommendNextActions({ snapshots: scored, errorLogSize, foundationOrder });
}
