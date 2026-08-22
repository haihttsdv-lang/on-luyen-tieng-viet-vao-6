import { describe, expect, it } from "vitest";
import { ALL_EXERCISES, ALL_PASSAGES, ALL_TOPICS, DISPUTED_WORDS } from "@/content";
import { ALL_PRESET_EXAMS } from "@/content/preset-exams";
import { TEST_CONFIGS } from "@/content/test-configs";

// Regression guardrails for content correctness (Mục 18.3 kiểm tra tự động),
// run continuously rather than only in Giai đoạn 9.

describe("content schema", () => {
  const topicIds = new Set(ALL_TOPICS.map((t) => t.id));

  it("every exercise references only existing topics", () => {
    for (const exercise of ALL_EXERCISES) {
      for (const topicId of exercise.topicIds) {
        expect(topicIds.has(topicId), `${exercise.id} references unknown topic ${topicId}`).toBe(true);
      }
    }
  });

  it("every exercise has a non-empty explanation (FR-P04)", () => {
    for (const exercise of ALL_EXERCISES) {
      expect(exercise.explanation.trim().length, `${exercise.id} has no explanation`).toBeGreaterThan(0);
    }
  });

  it("mcq: answerIndex is valid and distractorNotes covers every option (FR-P04)", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "mcq")) {
      const { options, answerIndex, distractorNotes } = exercise.mcq;
      expect(answerIndex, exercise.id).toBeGreaterThanOrEqual(0);
      expect(answerIndex, exercise.id).toBeLessThan(options.length);
      expect(distractorNotes.length, exercise.id).toBe(options.length);
      expect(distractorNotes.every((n) => n.trim().length > 0), exercise.id).toBe(true);
    }
  });

  it("mcq: the correct answer is never a disputed word (FR-D04)", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "mcq")) {
      const correctOption = exercise.mcq.options[exercise.mcq.answerIndex];
      expect(DISPUTED_WORDS.includes(correctOption), exercise.id).toBe(false);
    }
  });

  it("fill: has at least one accepted answer", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "fill")) {
      expect(exercise.fill.acceptedAnswers.length, exercise.id).toBeGreaterThan(0);
    }
  });

  it("fill: CD-group exercises use strictMode (FR-M05)", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "fill")) {
      const isCdGroup = exercise.topicIds.some((id) => id.startsWith("CD-"));
      if (isCdGroup) {
        expect(exercise.fill.strictMode, `${exercise.id} is in the CD group but strictMode is false`).toBe(true);
      }
    }
  });

  it("match: every left item has exactly one correct pairing to a valid right item", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "match")) {
      const { leftItems, rightItems, correctPairs } = exercise.match;
      const rightIds = new Set(rightItems.map((r) => r.id));
      for (const left of leftItems) {
        const matches = correctPairs.filter((p) => p.leftId === left.id);
        expect(matches.length, `${exercise.id}: ${left.id} should have exactly one correct pair`).toBe(1);
        expect(rightIds.has(matches[0].rightId), exercise.id).toBe(true);
      }
    }
  });

  it("order: correctOrder is a permutation of the item ids", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "order")) {
      const itemIds = exercise.order.items.map((i) => i.id).sort();
      const orderIds = [...exercise.order.correctOrder].sort();
      expect(orderIds, exercise.id).toEqual(itemIds);
    }
  });

  it("short: has required keywords and a sample answer", () => {
    for (const exercise of ALL_EXERCISES.filter((e) => e.questionType === "short")) {
      expect(exercise.short.requiredKeywords.length, exercise.id).toBeGreaterThan(0);
      expect(exercise.short.sampleAnswer.trim().length, exercise.id).toBeGreaterThan(0);
    }
  });

  it("essay: has a non-empty outline, rubric, and sample answer (FR-W02→W04)", () => {
    for (const exercise of ALL_EXERCISES.filter(
      (e) => e.questionType === "essay-short" || e.questionType === "essay-long",
    )) {
      expect(exercise.essay.outline.length, exercise.id).toBeGreaterThan(0);
      expect(exercise.essay.rubric.length, exercise.id).toBeGreaterThan(0);
      expect(exercise.essay.rubric.every((r) => r.points > 0), exercise.id).toBe(true);
      expect(exercise.essay.sampleAnswer.trim().length, exercise.id).toBeGreaterThan(0);
    }
  });

  it("exercise ids are unique", () => {
    const ids = ALL_EXERCISES.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every exercise.passageId references an existing passage (Mục 5.11)", () => {
    const passageIds = new Set(ALL_PASSAGES.map((p) => p.id));
    for (const exercise of ALL_EXERCISES) {
      if (exercise.passageId) {
        expect(passageIds.has(exercise.passageId), `${exercise.id} references unknown passage ${exercise.passageId}`).toBe(true);
      }
    }
  });

  it("passages: have a non-empty title/text and are each used by 5-7 exercises", () => {
    const usageCount = new Map<string, number>();
    for (const exercise of ALL_EXERCISES) {
      if (exercise.passageId) {
        usageCount.set(exercise.passageId, (usageCount.get(exercise.passageId) ?? 0) + 1);
      }
    }
    for (const passage of ALL_PASSAGES) {
      expect(passage.title.trim().length, passage.id).toBeGreaterThan(0);
      expect(passage.text.trim().length, passage.id).toBeGreaterThan(0);
      const count = usageCount.get(passage.id) ?? 0;
      expect(count, `${passage.id} is used by ${count} exercises, expected 5-7`).toBeGreaterThanOrEqual(5);
      expect(count, `${passage.id} is used by ${count} exercises, expected 5-7`).toBeLessThanOrEqual(7);
    }
  });

  it("passage ids are unique", () => {
    const ids = ALL_PASSAGES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every passage has a valid sourceType and non-empty sourceNote (FR-N01→N04, NFR-07)", () => {
    const validSourceTypes = new Set(["public-domain", "original", "quoted"]);
    for (const passage of ALL_PASSAGES) {
      expect(validSourceTypes.has(passage.sourceType), `${passage.id} has invalid sourceType`).toBe(true);
      expect(passage.sourceNote.trim().length, `${passage.id} has no sourceNote`).toBeGreaterThan(0);
    }
  });

  it("no passage uses sourceType 'quoted' (QĐ-2 chưa chọn hướng C — FR-N02)", () => {
    for (const passage of ALL_PASSAGES) {
      expect(passage.sourceType, `${passage.id} must not be 'quoted'`).not.toBe("quoted");
    }
  });

  it("preset exams: ≥ 2 đề/cấu hình, đúng 8 đề tổng (Mục 5.11)", () => {
    expect(ALL_PRESET_EXAMS.length).toBeGreaterThanOrEqual(8);
    const configIds = new Set(TEST_CONFIGS.map((c) => c.id));
    for (const config of TEST_CONFIGS) {
      const count = ALL_PRESET_EXAMS.filter((p) => p.configId === config.id).length;
      expect(count, `${config.id} has ${count} preset exams, expected ≥ 2`).toBeGreaterThanOrEqual(2);
    }
    for (const preset of ALL_PRESET_EXAMS) {
      expect(configIds.has(preset.configId), `${preset.id} references unknown config ${preset.configId}`).toBe(
        true,
      );
    }
  });

  it("preset exams: exerciseIds and essayExerciseId reference existing exercises, no duplicates", () => {
    const exerciseIds = new Set(ALL_EXERCISES.map((e) => e.id));
    for (const preset of ALL_PRESET_EXAMS) {
      expect(preset.exerciseIds.length, preset.id).toBeGreaterThan(0);
      expect(new Set(preset.exerciseIds).size, `${preset.id} has duplicate exerciseIds`).toBe(
        preset.exerciseIds.length,
      );
      for (const id of preset.exerciseIds) {
        expect(exerciseIds.has(id), `${preset.id} references unknown exercise ${id}`).toBe(true);
      }
      if (preset.essayExerciseId) {
        expect(exerciseIds.has(preset.essayExerciseId), `${preset.id} references unknown essay ${preset.essayExerciseId}`).toBe(true);
      }
    }
  });

  it("preset exams: exerciseIds count matches the config's totalQuestions, essay presence matches includeEssay", () => {
    const configsById = new Map(TEST_CONFIGS.map((c) => [c.id, c]));
    for (const preset of ALL_PRESET_EXAMS) {
      const config = configsById.get(preset.configId);
      if (!config) continue;
      expect(preset.exerciseIds.length, preset.id).toBe(config.totalQuestions);
      expect(Boolean(preset.essayExerciseId), `${preset.id} essay presence should match config.includeEssay`).toBe(
        config.includeEssay,
      );
    }
  });

  it("preset exam ids are unique", () => {
    const ids = ALL_PRESET_EXAMS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
