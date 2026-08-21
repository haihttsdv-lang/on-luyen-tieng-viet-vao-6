import { describe, expect, it } from "vitest";
import { scoreExam } from "@/core/test-generator";
import type { Exercise, TopicGroup } from "@/data-access/types";

const topicGroupOf = (topicId: string): TopicGroup | undefined => topicId as TopicGroup;

const mcqExercise: Exercise = {
  id: "mcq-1",
  topicIds: ["NT"],
  level: "M1",
  questionType: "mcq",
  prompt: "p",
  explanation: "e",
  mcq: { options: ["a", "b"], answerIndex: 0, distractorNotes: ["", ""] },
};

const fillExercise: Exercise = {
  id: "fill-1",
  topicIds: ["CD"],
  level: "M2",
  questionType: "fill",
  prompt: "p",
  explanation: "e",
  fill: { acceptedAnswers: ["long lanh"], strictMode: true, isSet: false },
};

const shortExercise: Exercise = {
  id: "short-1",
  topicIds: ["CA"],
  level: "M3",
  questionType: "short",
  prompt: "p",
  explanation: "e",
  short: { requiredKeywords: ["a"], sampleAnswer: "a" },
};

describe("scoreExam (FR-T06/T07)", () => {
  it("grades mcq/fill correctly and computes autoScore", () => {
    const result = scoreExam(
      [mcqExercise, fillExercise],
      { "mcq-1": 0, "fill-1": "long lanh" },
      topicGroupOf,
    );
    expect(result.autoScore).toBe(2);
    expect(result.autoScoreMax).toBe(2);
    expect(result.graded).toEqual([
      { exerciseId: "mcq-1", correct: true },
      { exerciseId: "fill-1", correct: true },
    ]);
  });

  it("treats a missing/undefined answer as incorrect, not a crash", () => {
    const result = scoreExam([mcqExercise], {}, topicGroupOf);
    expect(result.autoScore).toBe(0);
    expect(result.graded).toEqual([{ exerciseId: "mcq-1", correct: false }]);
  });

  it("FR-M05: strict-mode fill (CD group) still enforces exact spelling during scoring", () => {
    const result = scoreExam([fillExercise], { "fill-1": "Long Lanh" }, topicGroupOf);
    expect(result.autoScore).toBe(0); // case differs — strict mode rejects it
  });

  it("excludes short/essay from autoScore entirely (Mục 10.2: those are self-scored)", () => {
    const result = scoreExam([mcqExercise, shortExercise], { "mcq-1": 0 }, topicGroupOf);
    expect(result.autoScoreMax).toBe(1);
    expect(result.graded.map((g) => g.exerciseId)).toEqual(["mcq-1"]);
  });

  it("aggregates correctness by topic group and by level", () => {
    const result = scoreExam(
      [mcqExercise, fillExercise],
      { "mcq-1": 0, "fill-1": "sai" },
      topicGroupOf,
    );
    expect(result.byTopicGroup).toEqual({
      NT: { correct: 1, total: 1 },
      CD: { correct: 0, total: 1 },
    });
    expect(result.byLevel).toEqual({
      M1: { correct: 1, total: 1 },
      M2: { correct: 0, total: 1 },
    });
  });
});
