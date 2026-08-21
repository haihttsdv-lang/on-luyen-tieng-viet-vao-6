import { describe, expect, it } from "vitest";
import { buildCustomTestConfig, generateTest } from "@/core/test-generator";
import type { Exercise, QuestionLevel, QuestionType, TestConfig, TopicGroup } from "@/data-access/types";

function mcq(id: string, topicId: string, level: QuestionLevel = "M1"): Exercise {
  return {
    id,
    topicIds: [topicId],
    level,
    questionType: "mcq",
    prompt: id,
    explanation: "x",
    mcq: { options: ["a", "b"], answerIndex: 0, distractorNotes: ["", ""] },
  };
}

function fill(id: string, topicId: string, level: QuestionLevel = "M1"): Exercise {
  return {
    id,
    topicIds: [topicId],
    level,
    questionType: "fill",
    prompt: id,
    explanation: "x",
    fill: { acceptedAnswers: ["a"], strictMode: false, isSet: false },
  };
}

function essay(id: string, topicId: string, type: Extract<QuestionType, "essay-short" | "essay-long">): Exercise {
  return {
    id,
    topicIds: [topicId],
    level: "M4",
    questionType: type,
    prompt: id,
    explanation: "x",
    essay: { outline: ["a"], rubric: [{ criterion: "a", points: 1 }], sampleAnswer: "a" },
  };
}

// topic ids double as their own group for simplicity: "NT" topic -> group NT.
const topicGroupOf = (topicId: string): TopicGroup | undefined => topicId as TopicGroup;

function baseConfig(overrides: Partial<TestConfig> = {}): TestConfig {
  return {
    id: "TEST",
    label: "Test",
    durationMinutes: 30,
    topicGroupWeights: { NT: 1, CA: 1 },
    levelRatio: { M1: 1, M2: 1, M3: 1, M4: 1 },
    questionTypeWeights: { mcq: 1, fill: 1 },
    totalQuestions: 5,
    includeEssay: false,
    autoScoreMax: 5,
    essayScoreMax: 0,
    ...overrides,
  };
}

describe("generateTest — filtering", () => {
  const pool: Exercise[] = [
    mcq("nt-1", "NT"),
    mcq("nt-2", "NT"),
    mcq("ca-1", "CA"),
    mcq("cd-1", "CD"), // CD not in topicGroupWeights below
    fill("nt-fill-1", "NT"),
  ];

  it("excludes exercises from topic groups not in topicGroupWeights", () => {
    const result = generateTest(pool, baseConfig({ totalQuestions: 10 }), { topicGroupOf, random: () => 0.5 });
    expect(result.exerciseIds).not.toContain("cd-1");
  });

  it("excludes a question type with weight 0", () => {
    const result = generateTest(
      pool,
      baseConfig({ totalQuestions: 10, questionTypeWeights: { mcq: 1, fill: 0 } }),
      { topicGroupOf, random: () => 0.5 },
    );
    expect(result.exerciseIds).not.toContain("nt-fill-1");
  });

  it("excludes a level with weight 0", () => {
    const withLevels: Exercise[] = [mcq("m1-q", "NT", "M1"), mcq("m4-q", "NT", "M4")];
    const result = generateTest(
      withLevels,
      baseConfig({ totalQuestions: 10, levelRatio: { M1: 1, M2: 0, M3: 0, M4: 0 } }),
      { topicGroupOf, random: () => 0.5 },
    );
    expect(result.exerciseIds).toEqual(["m1-q"]);
  });

  it("never returns essay exercises in exerciseIds", () => {
    const withEssay: Exercise[] = [mcq("nt-1", "NT"), essay("nt-essay", "NT", "essay-long")];
    const result = generateTest(withEssay, baseConfig({ totalQuestions: 10 }), {
      topicGroupOf,
      random: () => 0.5,
    });
    expect(result.exerciseIds).toEqual(["nt-1"]);
  });
});

describe("generateTest — sizing", () => {
  it("caps the selection at config.totalQuestions", () => {
    const bigPool = Array.from({ length: 20 }, (_, i) => mcq(`nt-${i}`, "NT"));
    const result = generateTest(bigPool, baseConfig({ totalQuestions: 5 }), {
      topicGroupOf,
      random: Math.random,
    });
    expect(result.exerciseIds).toHaveLength(5);
  });

  it("degrades gracefully when fewer candidates exist than requested (small content pool)", () => {
    const smallPool = [mcq("nt-1", "NT"), mcq("nt-2", "NT")];
    const result = generateTest(smallPool, baseConfig({ totalQuestions: 40 }), {
      topicGroupOf,
      random: () => 0.5,
    });
    expect(result.exerciseIds).toHaveLength(2);
  });

  it("returns no exerciseIds when nothing matches the config at all", () => {
    const result = generateTest([mcq("cd-1", "CD")], baseConfig({ totalQuestions: 5 }), {
      topicGroupOf,
      random: () => 0.5,
    });
    expect(result.exerciseIds).toEqual([]);
  });
});

describe("generateTest — essay slot", () => {
  const pool: Exercise[] = [
    mcq("nt-1", "NT"),
    essay("nt-essay", "NT", "essay-short"),
    essay("ca-essay", "CA", "essay-long"),
  ];

  it("includes exactly one essay when includeEssay is true and matches exist", () => {
    const result = generateTest(pool, baseConfig({ includeEssay: true }), {
      topicGroupOf,
      random: () => 0.5,
    });
    expect(["nt-essay", "ca-essay"]).toContain(result.essayExerciseId);
  });

  it("omits the essay slot when includeEssay is false", () => {
    const result = generateTest(pool, baseConfig({ includeEssay: false }), {
      topicGroupOf,
      random: () => 0.5,
    });
    expect(result.essayExerciseId).toBeUndefined();
  });

  it("leaves essayExerciseId undefined instead of crashing when no essay matches", () => {
    const noMatchingEssay: Exercise[] = [mcq("nt-1", "NT"), essay("cd-essay", "CD", "essay-long")];
    const result = generateTest(noMatchingEssay, baseConfig({ includeEssay: true }), {
      topicGroupOf,
      random: () => 0.5,
    });
    expect(result.essayExerciseId).toBeUndefined();
  });
});

describe("generateTest — variety (NFR-10 spirit)", () => {
  it("is deterministic given the same random source", () => {
    const pool = Array.from({ length: 10 }, (_, i) => mcq(`nt-${i}`, "NT"));
    const config = baseConfig({ totalQuestions: 3 });
    const a = generateTest(pool, config, { topicGroupOf, random: () => 0.42 });
    const b = generateTest(pool, config, { topicGroupOf, random: () => 0.42 });
    expect(a.exerciseIds).toEqual(b.exerciseIds);
  });

  it("can produce different selections with a different random source", () => {
    const pool = Array.from({ length: 20 }, (_, i) => mcq(`nt-${i}`, "NT"));
    const config = baseConfig({ totalQuestions: 3 });
    let seed = 1;
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const a = generateTest(pool, config, { topicGroupOf, random: seededRandom });
    const b = generateTest(pool, config, { topicGroupOf, random: Math.random });
    // Not a strict guarantee for tiny pools, but with 20 candidates picking
    // 3, an identical draw across two independent random sources would be
    // a suspicious coincidence worth investigating.
    expect(a.exerciseIds).not.toEqual(b.exerciseIds);
  });
});

describe("buildCustomTestConfig (FR-T09)", () => {
  it("builds a config that generateTest can use directly", () => {
    const config = buildCustomTestConfig({ topicGroups: ["NT", "CA"], totalQuestions: 4, durationMinutes: 20 });
    const pool = [mcq("nt-1", "NT"), mcq("ca-1", "CA"), mcq("cd-1", "CD")];
    const result = generateTest(pool, config, { topicGroupOf, random: () => 0.5 });
    expect(result.exerciseIds.sort()).toEqual(["ca-1", "nt-1"]);
    expect(config.durationMinutes).toBe(20);
  });
});
