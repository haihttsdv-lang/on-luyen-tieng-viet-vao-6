import { describe, expect, it } from "vitest";
import {
  computeActivityScore,
  computeMasteryScore,
  recommendNextActions,
  type GradedAttemptLike,
} from "@/core/mastery-engine";

function attempt(correct: boolean, timestamp: number): GradedAttemptLike {
  return { correct, timestamp };
}

describe("computeMasteryScore (FR-H03a, Mục 22 §1/§2)", () => {
  it("returns no-data below the minimum attempt threshold (3)", () => {
    const result = computeMasteryScore([attempt(true, 1), attempt(true, 2)]);
    expect(result.level).toBe("no-data");
    expect(result.score).toBeNull();
  });

  it("scores 100% correct as mastered once the minimum is reached", () => {
    const result = computeMasteryScore([attempt(true, 1), attempt(true, 2), attempt(true, 3)]);
    expect(result.score).toBe(1);
    expect(result.level).toBe("mastered");
  });

  it("buckets exactly 50% (weighted) as 'improving', not 'weak' — lower bound is inclusive", () => {
    // Window of 4, weights 1..4 (sum 10). Correct at weights 1 and 4 (sum 5)
    // → weighted score = 5/10 = exactly 0.5.
    const result = computeMasteryScore([
      attempt(true, 1), // weight 1
      attempt(false, 2), // weight 2
      attempt(false, 3), // weight 3
      attempt(true, 4), // weight 4
    ]);
    expect(result.score).toBe(0.5);
    expect(result.level).toBe("improving");
  });

  it("buckets exactly 80% (weighted) as 'improving', not 'mastered' — upper bound is inclusive", () => {
    // Window of 5, weights 1..5 (sum 15). Correct at weights 3, 4, 5 (sum 12)
    // → weighted score = 12/15 = exactly 0.8.
    const result = computeMasteryScore([
      attempt(false, 1), // weight 1
      attempt(false, 2), // weight 2
      attempt(true, 3), // weight 3
      attempt(true, 4), // weight 4
      attempt(true, 5), // weight 5
    ]);
    expect(result.score).toBe(0.8);
    expect(result.level).toBe("improving");
  });

  it("buckets just above 80% (weighted) as 'mastered'", () => {
    // Same window as the exact-80% case above, but swap the weight-2 wrong
    // answer to correct: weighted = (0+2+3+4+5)/15 = 14/15 ≈ 0.933 > 0.8.
    const result = computeMasteryScore([
      attempt(false, 1),
      attempt(true, 2),
      attempt(true, 3),
      attempt(true, 4),
      attempt(true, 5),
    ]);
    expect(result.score).toBeCloseTo(0.933, 2);
    expect(result.level).toBe("mastered");
  });

  it("weighs recent attempts more heavily than older ones", () => {
    // Same 2-right/2-wrong composition in both cases, only the order differs.
    const recentWrong = computeMasteryScore([
      attempt(true, 1),
      attempt(true, 2),
      attempt(false, 3),
      attempt(false, 4), // most recent
    ]);
    const recentRight = computeMasteryScore([
      attempt(false, 1),
      attempt(false, 2),
      attempt(true, 3),
      attempt(true, 4), // most recent
    ]);
    expect(recentRight.score).toBeGreaterThan(recentWrong.score!);
  });

  it("only considers the most recent 10 attempts (RECENCY_WINDOW)", () => {
    // 10 wrong attempts, then 3 correct — should score purely on the last 10,
    // which after the window slides is: 7 wrong (from the old batch, since
    // 13 total - 10 window = drop the 3 oldest) + 3 correct... construct
    // precisely: 13 attempts, first 3 wrong (dropped), next 7 wrong, last 3 correct.
    const attempts: GradedAttemptLike[] = [];
    for (let i = 1; i <= 3; i++) attempts.push(attempt(true, i)); // will be dropped
    for (let i = 4; i <= 10; i++) attempts.push(attempt(false, i)); // 7 wrong, kept
    for (let i = 11; i <= 13; i++) attempts.push(attempt(true, i)); // 3 correct, kept
    const result = computeMasteryScore(attempts);
    expect(result.attemptsUsed).toBe(10);
    expect(result.totalAttempts).toBe(13);
    // If the 3 dropped "true" attempts had counted, score would be higher.
    // With them excluded, only 3/10 weighted-recent attempts are correct.
    expect(result.score).toBeLessThan(0.5);
  });
});

describe("computeActivityScore (FR-H03b, Mục 22 §3)", () => {
  const DAY = 24 * 60 * 60 * 1000;

  it("returns no-data when nothing has been completed", () => {
    const result = computeActivityScore(0, 5, null);
    expect(result.level).toBe("no-data");
  });

  it("caps the ratio at 1 even past the target", () => {
    const result = computeActivityScore(8, 5, Date.now());
    expect(result.ratio).toBe(1);
    expect(result.level).toBe("mastered");
  });

  it("computes a partial ratio below target", () => {
    const result = computeActivityScore(2, 5, Date.now());
    expect(result.ratio).toBeCloseTo(0.4, 5);
    expect(result.level).toBe("weak");
  });

  it("applies decay when the last activity is more than 4 weeks ago", () => {
    const now = Date.now();
    const staleTimestamp = now - 29 * DAY;
    const result = computeActivityScore(5, 5, staleTimestamp, now);
    expect(result.decayApplied).toBe(true);
    expect(result.ratio).toBeCloseTo(0.5, 5); // 1.0 * 0.5 decay factor
  });

  it("does not decay when the last activity is within 4 weeks", () => {
    const now = Date.now();
    const recentTimestamp = now - 27 * DAY;
    const result = computeActivityScore(5, 5, recentTimestamp, now);
    expect(result.decayApplied).toBe(false);
    expect(result.ratio).toBe(1);
  });
});

describe("recommendNextActions (FR-H06→H08/H11)", () => {
  it("puts the error-log recommendation first once the threshold is reached", () => {
    const recs = recommendNextActions({
      snapshots: [{ topicId: "NT-01", score: 0.3, practiced: true, recentCorrect: 3, recentTotal: 10 }],
      errorLogSize: 10,
      foundationOrder: [],
    });
    expect(recs[0].kind).toBe("error-log");
    expect(recs[0].reason).toContain("10");
  });

  it("does not recommend the error log below the threshold", () => {
    const recs = recommendNextActions({ snapshots: [], errorLogSize: 9, foundationOrder: [] });
    expect(recs.some((r) => r.kind === "error-log")).toBe(false);
  });

  it("recommends the weakest practiced topics first, with a reason (FR-H11)", () => {
    const recs = recommendNextActions({
      snapshots: [
        { topicId: "strong", score: 0.9, practiced: true, recentCorrect: 9, recentTotal: 10 },
        { topicId: "weakest", score: 0.2, practiced: true, recentCorrect: 2, recentTotal: 10 },
        { topicId: "middle", score: 0.6, practiced: true, recentCorrect: 6, recentTotal: 10 },
      ],
      errorLogSize: 0,
      foundationOrder: [],
    });
    expect(recs.map((r) => r.topicId)).toEqual(["weakest", "middle", "strong"]);
    expect(recs[0].reason).toContain("2/10");
  });

  it("FR-H07: never-practiced topics are not treated as weak, but fill remaining slots from foundationOrder", () => {
    const recs = recommendNextActions({
      snapshots: [{ topicId: "practiced-one", score: 0.9, practiced: true, recentCorrect: 9, recentTotal: 10 }],
      errorLogSize: 0,
      foundationOrder: ["never-practiced-a", "never-practiced-b"],
    });
    expect(recs.map((r) => r.kind)).toEqual(["weak-topic", "foundation", "foundation"]);
  });

  it("respects the max recommendation count (default 3)", () => {
    const recs = recommendNextActions({
      snapshots: Array.from({ length: 10 }, (_, i) => ({
        topicId: `t${i}`,
        score: i / 10,
        practiced: true,
        recentCorrect: i,
        recentTotal: 10,
      })),
      errorLogSize: 0,
      foundationOrder: [],
    });
    expect(recs).toHaveLength(3);
  });

  it("ignores topics with practiced=true but score=null (not enough attempts yet)", () => {
    const recs = recommendNextActions({
      snapshots: [{ topicId: "too-few-attempts", score: null, practiced: true, recentCorrect: 1, recentTotal: 2 }],
      errorLogSize: 0,
      foundationOrder: ["fallback"],
    });
    expect(recs.map((r) => r.topicId)).toEqual(["fallback"]);
  });
});
