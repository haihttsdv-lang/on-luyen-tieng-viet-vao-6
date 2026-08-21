import { describe, expect, it } from "vitest";
import { isQuizPassed, requiredCorrectCount } from "@/core/quiz-threshold";

describe("requiredCorrectCount (FR-L04)", () => {
  it("allows missing exactly 1 for quizzes under 5 questions", () => {
    expect(requiredCorrectCount(3)).toBe(2);
    expect(requiredCorrectCount(4)).toBe(3);
  });

  it("uses a straight 80% (rounded up) threshold from 5 questions up", () => {
    expect(requiredCorrectCount(5)).toBe(4);
    expect(requiredCorrectCount(10)).toBe(8);
  });

  it("never goes negative or above the total", () => {
    expect(requiredCorrectCount(0)).toBe(0);
    expect(requiredCorrectCount(1)).toBeLessThanOrEqual(1);
  });
});

describe("isQuizPassed", () => {
  it("passes a 3-question quiz with 2 correct", () => {
    expect(isQuizPassed(2, 3)).toBe(true);
    expect(isQuizPassed(1, 3)).toBe(false);
  });

  it("passes a 5-question quiz only with 4 or 5 correct", () => {
    expect(isQuizPassed(4, 5)).toBe(true);
    expect(isQuizPassed(3, 5)).toBe(false);
  });
});
