import { describe, expect, it } from "vitest";
import {
  computeEarnedBadges,
  computePhaseProgress,
  computeSessionCoins,
  computeStreakCoins,
} from "@/core/rewards";
import type { ScheduledSession, SessionOutcomeRecord } from "@/data-access/types";

function session(id: string, index: number, phase: 1 | 2 | 3, type: ScheduledSession["type"]): ScheduledSession {
  return { id, index, date: "2026-01-01", phase, type, label: id };
}
function outcome(id: string, value: SessionOutcomeRecord["outcome"] = "on"): [string, SessionOutcomeRecord] {
  return [id, { sessionId: id, outcome: value, completedAt: 1 }];
}

describe("computeSessionCoins (GM-01/02/04)", () => {
  it("awards full coins for 'xuất sắc'", () => {
    expect(computeSessionCoins("lesson", "xuat-sac")).toBe(5);
  });
  it("awards half coins for 'ổn'", () => {
    expect(computeSessionCoins("lesson", "on")).toBe(3); // round(5*0.5)=3 (round-half-up)
  });
  it("deducts half coins for 'cần ôn lại' (GM-02, deliberate negative)", () => {
    // Math.round(-2.5) is -2 in JS (rounds toward +Infinity, not away from 0).
    expect(computeSessionCoins("lesson", "can-on-lai")).toBe(-2);
  });
  it("heavier session types award more coins (GM-04)", () => {
    expect(computeSessionCoins("monthly-check", "xuat-sac")).toBeGreaterThan(
      computeSessionCoins("lesson", "xuat-sac"),
    );
  });
});

describe("computeStreakCoins (GM-09)", () => {
  it("matches the reference formula: 2 + min(streak, 3)", () => {
    expect(computeStreakCoins(0)).toBe(2);
    expect(computeStreakCoins(1)).toBe(3);
    expect(computeStreakCoins(3)).toBe(5);
    expect(computeStreakCoins(10)).toBe(5); // capped
  });
});

describe("computeEarnedBadges (GM-05)", () => {
  const phaseBoundaries = [{ phase: 1 as const, startIndex: 0, endIndex: 1 }];
  const sessions = [session("s0", 0, 1, "lesson"), session("s1", 1, 1, "practice")];

  it("awards a phase badge only when every session in the phase has an outcome", () => {
    const partial = computeEarnedBadges({
      phaseBoundaries,
      sessions,
      outcomes: Object.fromEntries([outcome("s0")]),
      testResults: [],
      writingsSubmittedCount: 0,
      passagesReadCount: 0,
    });
    expect(partial.some((b) => b.id === "phase-1")).toBe(false);

    const complete = computeEarnedBadges({
      phaseBoundaries,
      sessions,
      outcomes: Object.fromEntries([outcome("s0"), outcome("s1")]),
      testResults: [],
      writingsSubmittedCount: 0,
      passagesReadCount: 0,
    });
    expect(complete.some((b) => b.id === "phase-1")).toBe(true);
  });

  it("awards the streak badge at 5 consecutive completed sessions, ignoring checks", () => {
    const withCheck = [
      session("a", 0, 1, "lesson"),
      session("b", 1, 1, "practice"),
      session("check", 2, 1, "weekly-check"), // no outcome, but shouldn't break the streak
      session("c", 3, 1, "practice"),
      session("d", 4, 1, "lesson"),
      session("e", 5, 1, "mock-test"),
    ];
    const outcomes = Object.fromEntries(["a", "b", "c", "d", "e"].map((id) => outcome(id)));
    const badges = computeEarnedBadges({
      phaseBoundaries: [],
      sessions: withCheck,
      outcomes,
      testResults: [],
      writingsSubmittedCount: 0,
      passagesReadCount: 0,
    });
    expect(badges.some((b) => b.id === "streak-5")).toBe(true);
  });

  it("does not award the streak badge below 5, and a real gap breaks it", () => {
    const withGap = [
      session("a", 0, 1, "lesson"),
      session("b", 1, 1, "practice"),
      session("gap", 2, 1, "lesson"), // no outcome — real gap, breaks streak
      session("c", 3, 1, "practice"),
      session("d", 4, 1, "lesson"),
      session("e", 5, 1, "mock-test"),
    ];
    const outcomes = Object.fromEntries(["a", "b", "c", "d", "e"].map((id) => outcome(id)));
    const badges = computeEarnedBadges({
      phaseBoundaries: [],
      sessions: withGap,
      outcomes,
      testResults: [],
      writingsSubmittedCount: 0,
      passagesReadCount: 0,
    });
    expect(badges.some((b) => b.id === "streak-5")).toBe(false);
  });

  it("awards the mock-test badge only above 80%, not at exactly 80%", () => {
    const at80 = computeEarnedBadges({
      phaseBoundaries: [],
      sessions: [],
      outcomes: {},
      testResults: [{ autoScore: 8, autoScoreMax: 10 }],
      writingsSubmittedCount: 0,
      passagesReadCount: 0,
    });
    expect(at80.some((b) => b.id === "mock-test-80")).toBe(false);

    const above80 = computeEarnedBadges({
      phaseBoundaries: [],
      sessions: [],
      outcomes: {},
      testResults: [{ autoScore: 9, autoScoreMax: 10 }],
      writingsSubmittedCount: 0,
      passagesReadCount: 0,
    });
    expect(above80.some((b) => b.id === "mock-test-80")).toBe(true);
  });

  it("awards writing and reading badges at their targets (10 and 20)", () => {
    const badges = computeEarnedBadges({
      phaseBoundaries: [],
      sessions: [],
      outcomes: {},
      testResults: [],
      writingsSubmittedCount: 10,
      passagesReadCount: 20,
    });
    expect(badges.map((b) => b.id).sort()).toEqual(["reading-20", "writing-10"]);
  });
});

describe("computePhaseProgress (GM-07)", () => {
  it("computes % completion per phase", () => {
    const boundaries = [{ phase: 1 as const, startIndex: 0, endIndex: 3 }];
    const sessions = [
      session("s0", 0, 1, "lesson"),
      session("s1", 1, 1, "lesson"),
      session("s2", 2, 1, "lesson"),
      session("s3", 3, 1, "lesson"),
    ];
    const outcomes = Object.fromEntries([outcome("s0"), outcome("s1")]);
    const result = computePhaseProgress(boundaries, sessions, outcomes);
    expect(result).toEqual([{ phase: 1, percent: 50 }]);
  });
});
