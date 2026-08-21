import { describe, expect, it } from "vitest";
import { ALL_EXERCISES, ALL_TOPICS, DISPUTED_WORDS } from "@/content";

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
});
