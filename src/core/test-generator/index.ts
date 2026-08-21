// Pure exam-assembly logic (FR-T02). No DOM, no storage — takes a candidate
// pool + a TestConfig and returns which exercises to use. Topic→group
// lookup is injected rather than imported from data-access, so this module
// has zero dependency beyond shared type definitions (Mục 16.2).

import type { Exercise, QuestionLevel, QuestionType, TestConfig, TopicGroup } from "@/data-access/types";
import {
  checkFillAnswer,
  checkMatchAnswer,
  checkMcqAnswer,
  checkOrderAnswer,
} from "@/core/answer-checker";

export interface GeneratedTest {
  exerciseIds: string[];
  essayExerciseId?: string;
}

export interface GenerateTestOptions {
  topicGroupOf: (topicId: string) => TopicGroup | undefined;
  random?: () => number;
}

const isEssay = (t: QuestionType) => t === "essay-short" || t === "essay-long";

function sumTopicGroupWeight(
  exercise: Exercise,
  topicGroupWeights: Partial<Record<TopicGroup, number>>,
  topicGroupOf: (topicId: string) => TopicGroup | undefined,
): number {
  const groups = new Set(exercise.topicIds.map(topicGroupOf).filter((g): g is TopicGroup => g !== undefined));
  let weight = 0;
  for (const g of groups) weight += topicGroupWeights[g] ?? 0;
  return weight;
}

function objectiveWeight(
  exercise: Exercise,
  config: TestConfig,
  topicGroupOf: (topicId: string) => TopicGroup | undefined,
): number {
  const groupWeight = sumTopicGroupWeight(exercise, config.topicGroupWeights, topicGroupOf);
  if (groupWeight <= 0) return 0;
  const levelWeight = config.levelRatio[exercise.level] ?? 0;
  if (levelWeight <= 0) return 0;
  const typeWeight = config.questionTypeWeights[exercise.questionType] ?? 0;
  if (typeWeight <= 0) return 0;
  return groupWeight * levelWeight * typeWeight;
}

// Efraimidis–Spirakis weighted random sampling without replacement: give
// each candidate a key = random()^(1/weight), take the top N by key. This
// is what makes repeated generations vary (NFR-10) while still favoring
// higher-weight candidates.
function weightedSample<T>(
  candidates: Array<{ item: T; weight: number }>,
  count: number,
  random: () => number,
): T[] {
  const keyed = candidates
    .filter((c) => c.weight > 0)
    .map((c) => ({ item: c.item, key: Math.pow(random(), 1 / c.weight) }));
  keyed.sort((a, b) => b.key - a.key);
  return keyed.slice(0, Math.max(count, 0)).map((k) => k.item);
}

export function generateTest(
  pool: Exercise[],
  config: TestConfig,
  { topicGroupOf, random = Math.random }: GenerateTestOptions,
): GeneratedTest {
  const objectivePool = pool.filter((e) => !isEssay(e.questionType));
  const objectiveCandidates = objectivePool.map((e) => ({
    item: e,
    weight: objectiveWeight(e, config, topicGroupOf),
  }));
  const chosen = weightedSample(objectiveCandidates, config.totalQuestions, random);

  let essayExerciseId: string | undefined;
  if (config.includeEssay) {
    const essayPool = pool.filter((e) => isEssay(e.questionType));
    const essayCandidates = essayPool.map((e) => ({
      item: e,
      weight: sumTopicGroupWeight(e, config.topicGroupWeights, topicGroupOf),
    }));
    essayExerciseId = weightedSample(essayCandidates, 1, random)[0]?.id;
  }

  return { exerciseIds: chosen.map((e) => e.id), essayExerciseId };
}

// ---------------------------------------------------------------------------
// Scoring a completed exam (FR-T06/T07)
// ---------------------------------------------------------------------------

// Mục 10.2's own split: mcq/match/order/fill are "chấm tự động hoàn toàn"
// (70% target) → autoScore. short/essay need student self-confirmation →
// selfScore, handled separately by the results screen (not this function).
const AUTO_GRADED_TYPES: QuestionType[] = ["mcq", "match", "order", "fill"];

export interface GradedQuestion {
  exerciseId: string;
  correct: boolean;
}

export interface ExamScore {
  autoScore: number;
  autoScoreMax: number;
  byTopicGroup: Record<string, { correct: number; total: number }>;
  byLevel: Record<string, { correct: number; total: number }>;
  graded: GradedQuestion[];
}

function checkExerciseAnswer(exercise: Exercise, answer: unknown): boolean {
  switch (exercise.questionType) {
    case "mcq":
      return checkMcqAnswer(answer as number, exercise.mcq).status === "correct";
    case "match":
      return checkMatchAnswer((answer as Record<string, string>) ?? {}, { pairs: exercise.match.correctPairs })
        .status === "correct";
    case "order":
      return checkOrderAnswer((answer as string[]) ?? [], exercise.order).status === "correct";
    case "fill":
      return checkFillAnswer((answer as string | string[]) ?? "", exercise.fill).status === "correct";
    default:
      return false;
  }
}

export function scoreExam(
  exercises: Exercise[],
  answers: Record<string, unknown>,
  topicGroupOf: (topicId: string) => TopicGroup | undefined,
): ExamScore {
  const gradable = exercises.filter((e) => AUTO_GRADED_TYPES.includes(e.questionType));
  const byTopicGroup: Record<string, { correct: number; total: number }> = {};
  const byLevel: Record<string, { correct: number; total: number }> = {};
  const graded: GradedQuestion[] = [];
  let autoScore = 0;

  for (const exercise of gradable) {
    const correct = checkExerciseAnswer(exercise, answers[exercise.id]);
    if (correct) autoScore += 1;
    graded.push({ exerciseId: exercise.id, correct });

    const groups = new Set(
      exercise.topicIds.map(topicGroupOf).filter((g): g is TopicGroup => g !== undefined),
    );
    for (const g of groups) {
      byTopicGroup[g] ??= { correct: 0, total: 0 };
      byTopicGroup[g].total += 1;
      if (correct) byTopicGroup[g].correct += 1;
    }

    byLevel[exercise.level] ??= { correct: 0, total: 0 };
    byLevel[exercise.level].total += 1;
    if (correct) byLevel[exercise.level].correct += 1;
  }

  return { autoScore, autoScoreMax: gradable.length, byTopicGroup, byLevel, graded };
}

/** FR-T09: assemble a config on the fly from a student's own topic/level/duration picks. */
export function buildCustomTestConfig(params: {
  topicGroups: TopicGroup[];
  totalQuestions: number;
  durationMinutes: number;
}): TestConfig {
  const topicGroupWeights = Object.fromEntries(params.topicGroups.map((g) => [g, 1])) as Partial<
    Record<TopicGroup, number>
  >;
  const levelRatio: Partial<Record<QuestionLevel, number>> = { M1: 1, M2: 1, M3: 1, M4: 1 };
  const questionTypeWeights: Partial<Record<QuestionType, number>> = {
    mcq: 1,
    match: 1,
    order: 1,
    fill: 1,
    short: 1,
  };
  return {
    id: "CUSTOM",
    label: "Đề tùy chỉnh",
    durationMinutes: params.durationMinutes,
    topicGroupWeights,
    levelRatio,
    questionTypeWeights,
    totalQuestions: params.totalQuestions,
    includeEssay: false,
    autoScoreMax: params.totalQuestions,
    essayScoreMax: 0,
  };
}
