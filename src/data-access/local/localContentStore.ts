// Content is static bundled data at this scale (3 topics) — no I/O needed.
// FR-A17 (load content on demand, split by group) applies once the content
// bank grows in Giai đoạn 9; ContentStore's interface already isolates
// callers from that change.

import { ALL_EXERCISES, ALL_TOPICS } from "@/content";
import { TEST_CONFIGS } from "@/content/test-configs";
import type { ContentStore, QuestionLevel } from "@/data-access/types";

export function createLocalContentStore(): ContentStore {
  const topicsById = new Map(ALL_TOPICS.map((t) => [t.id, t]));
  const exercisesById = new Map(ALL_EXERCISES.map((e) => [e.id, e]));
  const testConfigsById = new Map(TEST_CONFIGS.map((c) => [c.id, c]));

  return {
    getTopics() {
      return ALL_TOPICS;
    },
    getTopic(id) {
      return topicsById.get(id);
    },
    getExercises() {
      return ALL_EXERCISES;
    },
    getExercise(id) {
      return exercisesById.get(id);
    },
    getExercisesByTopics(topicIds: string[], level?: QuestionLevel) {
      const wanted = new Set(topicIds);
      return ALL_EXERCISES.filter(
        (e) =>
          e.topicIds.some((t) => wanted.has(t)) && (level === undefined || e.level === level),
      );
    },
    getTestConfigs() {
      return TEST_CONFIGS;
    },
    getTestConfig(id) {
      return testConfigsById.get(id);
    },
  };
}
