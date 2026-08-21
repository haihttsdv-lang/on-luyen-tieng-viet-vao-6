import { describe, expect, it } from "vitest";
import {
  buildPhase1Units,
  buildPhase2Units,
  buildPhase3Units,
  compressUnits,
  countAvailableSlots,
  determineTodayCard,
  generateSchedule,
  generateSessionDates,
  insertPeriodicChecks,
  type ContentUnit,
} from "@/core/schedule";
import type { ScheduledSession, SessionOutcomeRecord } from "@/data-access/types";

const topicLabelOf = (id: string) => id; // fixture: label == id

describe("generateSessionDates", () => {
  it("generates dates only on the given weekdays (Mon/Wed/Fri)", () => {
    // 2026-01-05 is a Monday.
    const dates = generateSessionDates("2026-01-05", [1, 3, 5], 6);
    expect(dates).toEqual(["2026-01-05", "2026-01-07", "2026-01-09", "2026-01-12", "2026-01-14", "2026-01-16"]);
  });

  it("returns an empty array when no weekdays are selected", () => {
    expect(generateSessionDates("2026-01-05", [], 5)).toEqual([]);
  });

  it("stops early at maxDate even if count isn't reached", () => {
    const dates = generateSessionDates("2026-01-05", [1, 3, 5], 100, "2026-01-09");
    expect(dates).toEqual(["2026-01-05", "2026-01-07", "2026-01-09"]);
  });

  it("includes startDate itself when it falls on a selected weekday", () => {
    const dates = generateSessionDates("2026-01-05", [1], 1); // Monday
    expect(dates).toEqual(["2026-01-05"]);
  });
});

describe("countAvailableSlots", () => {
  it("matches the length generateSessionDates would produce for that window", () => {
    expect(countAvailableSlots("2026-01-05", [1, 3, 5], "2026-01-16")).toBe(6);
  });
});

describe("buildPhase1Units — KN interleaving (Mục 7)", () => {
  it("includes every main-group topic and every KN topic exactly once", () => {
    const units = buildPhase1Units(
      { TC: ["tc-1"], TL: ["tl-1"], NT: ["nt-1"], CA: ["ca-1", "ca-2"], CD: ["cd-1"] },
      ["kn-1", "kn-2"],
      topicLabelOf,
    );
    const ids = units.flatMap((u) => u.topicIds ?? []);
    expect(ids.sort()).toEqual(["ca-1", "ca-2", "cd-1", "kn-1", "kn-2", "nt-1", "tc-1", "tl-1"].sort());
  });

  it("spreads KN topics roughly evenly rather than clustering them together", () => {
    const units = buildPhase1Units(
      { CA: ["ca-1", "ca-2", "ca-3", "ca-4", "ca-5", "ca-6"] },
      ["kn-1", "kn-2"],
      topicLabelOf,
    );
    const knPositions = units.map((u, i) => (u.topicIds?.[0] === "kn-1" || u.topicIds?.[0] === "kn-2" ? i : -1)).filter((i) => i >= 0);
    expect(knPositions.length).toBe(2);
    // 6 main topics / 2 KN topics ≈ one KN every 3-4 slots, not both adjacent.
    expect(knPositions[1] - knPositions[0]).toBeGreaterThanOrEqual(3);
  });

  it("returns nothing when there is no content at all", () => {
    expect(buildPhase1Units({}, [], topicLabelOf)).toEqual([]);
  });
});

describe("buildPhase2Units — luyện đề áp đảo (Mục 4.3)", () => {
  it("inserts a practice session (mock-test or error-review) after every topic", () => {
    const units = buildPhase2Units({ DH: ["dh-1", "dh-2"] }, ["va-1"], topicLabelOf, "BALANCED");
    const lessonCount = units.filter((u) => u.type === "lesson").length;
    const practiceCount = units.filter((u) => u.type === "mock-test" || u.type === "error-review").length;
    expect(lessonCount).toBe(3);
    expect(practiceCount).toBe(3); // 1 per lesson
  });
});

describe("buildPhase3Units", () => {
  it("alternates mock-test and practice, all phase 3", () => {
    const units = buildPhase3Units(4, "BALANCED");
    expect(units.map((u) => u.type)).toEqual(["mock-test", "practice", "mock-test", "practice"]);
    expect(units.every((u) => u.phase === 3)).toBe(true);
  });
});

describe("insertPeriodicChecks (FR-C05)", () => {
  function lesson(id: string): ContentUnit {
    return { type: "lesson", label: id, phase: 1, priority: 1 };
  }

  it("inserts a weekly-check every `sessionsPerWeek` units", () => {
    const units = Array.from({ length: 6 }, (_, i) => lesson(`u${i}`));
    const result = insertPeriodicChecks(units, 3, "CFG");
    expect(result.filter((u) => u.type === "weekly-check")).toHaveLength(2);
    expect(result[3].type).toBe("weekly-check");
    expect(result[7].type).toBe("weekly-check");
  });

  it("substitutes a monthly-check for the 4th weekly checkpoint instead of stacking both", () => {
    const units = Array.from({ length: 12 }, (_, i) => lesson(`u${i}`));
    const result = insertPeriodicChecks(units, 3, "CFG");
    const checkTypes = result.filter((u) => u.type === "weekly-check" || u.type === "monthly-check").map((u) => u.type);
    expect(checkTypes).toEqual(["weekly-check", "weekly-check", "weekly-check", "monthly-check"]);
  });

  it("is a no-op when sessionsPerWeek is 0", () => {
    const units = [lesson("u0")];
    expect(insertPeriodicChecks(units, 0, "CFG")).toEqual(units);
  });
});

describe("compressUnits (FR-C06)", () => {
  it("keeps priority-0 units first when trimming", () => {
    const units: ContentUnit[] = [
      { type: "lesson", label: "a", phase: 1, priority: 1 },
      { type: "lesson", label: "kn", phase: 1, priority: 0 },
      { type: "lesson", label: "b", phase: 1, priority: 1 },
      { type: "weekly-check", label: "check", phase: 1, priority: 0 },
    ];
    const result = compressUnits(units, 2);
    expect(result.map((u) => u.label)).toEqual(["kn", "check"]);
  });

  it("preserves original relative order among kept units", () => {
    const units: ContentUnit[] = [
      { type: "lesson", label: "kn-1", phase: 1, priority: 0 },
      { type: "lesson", label: "other", phase: 1, priority: 1 },
      { type: "lesson", label: "kn-2", phase: 1, priority: 0 },
    ];
    const result = compressUnits(units, 2);
    expect(result.map((u) => u.label)).toEqual(["kn-1", "kn-2"]);
  });

  it("returns the input unchanged when already within target", () => {
    const units: ContentUnit[] = [{ type: "lesson", label: "a", phase: 1, priority: 1 }];
    expect(compressUnits(units, 5)).toEqual(units);
  });
});

describe("generateSchedule — integration (FR-C01)", () => {
  const baseParams = {
    startDate: "2026-01-05", // Monday
    daysOfWeek: [1, 3, 5],
    testConfigId: "BALANCED",
    phase1TopicsByGroup: { TC: ["tc-1"], CA: ["ca-1", "ca-2"] },
    knTopics: ["kn-1"],
    phase2TopicsByGroup: { DH: ["dh-1"] },
    vaTopics: ["va-1"],
    topicLabelOf,
  };

  it("starts on the given startDate", () => {
    const result = generateSchedule(baseParams);
    expect(result.sessions[0].date).toBe("2026-01-05");
  });

  it("produces sessions in all 3 phases, in ascending phase order", () => {
    const result = generateSchedule({ ...baseParams, phase3WeeksIfNoExamDate: 2 });
    const phases = result.sessions.map((s) => s.phase);
    expect(new Set(phases)).toEqual(new Set([1, 2, 3]));
    expect(phases).toEqual([...phases].sort());
    expect(result.phaseBoundaries.map((b) => b.phase)).toEqual([1, 2, 3]);
  });

  it("does not compress when the exam date is comfortably far away", () => {
    const result = generateSchedule({ ...baseParams, examDate: "2027-01-01" });
    expect(result.compressed).toBe(false);
    expect(result.warning).toBeUndefined();
  });

  it("compresses and warns when the exam date is too close for the full content (FR-C06)", () => {
    const result = generateSchedule({ ...baseParams, examDate: "2026-01-14" }); // ~1.5 weeks away
    expect(result.compressed).toBe(true);
    expect(result.warning).toBeTruthy();
  });

  it("still generates a schedule that ends by the exam date when compressed", () => {
    const examDate = "2026-01-14";
    const result = generateSchedule({ ...baseParams, examDate });
    const lastDate = result.sessions[result.sessions.length - 1].date;
    expect(lastDate <= examDate).toBe(true);
  });

  it("keeps KN topics even when compression trims phase 1/2 content", () => {
    const result = generateSchedule({ ...baseParams, examDate: "2026-01-09" }); // very tight
    const hasKn = result.sessions.some((s) => s.topicIds?.includes("kn-1"));
    expect(hasKn).toBe(true);
  });
});

describe("determineTodayCard (FR-C02)", () => {
  const sessions: ScheduledSession[] = [
    { id: "s0", index: 0, date: "2026-01-05", phase: 1, type: "lesson", label: "A" },
    { id: "s1", index: 1, date: "2026-01-07", phase: 1, type: "lesson", label: "B" },
    { id: "s2", index: 2, date: "2026-01-09", phase: 1, type: "lesson", label: "C" },
  ];

  it("returns 'today' when the next session's date is today", () => {
    const card = determineTodayCard(sessions, {}, "2026-01-05");
    expect(card.state).toBe("today");
    expect(card.session?.id).toBe("s0");
    expect(card.progress).toEqual({ completed: 0, total: 3 });
  });

  it("returns 'overdue' when the next session's date is in the past", () => {
    const card = determineTodayCard(sessions, {}, "2026-01-08");
    expect(card.state).toBe("overdue");
    expect(card.session?.id).toBe("s0");
  });

  it("returns 'upcoming' when ahead of schedule (next session is in the future)", () => {
    const outcomes: Record<string, SessionOutcomeRecord> = {
      s0: { sessionId: "s0", outcome: "on", completedAt: 1 },
    };
    const card = determineTodayCard(sessions, outcomes, "2026-01-05");
    expect(card.state).toBe("upcoming");
    expect(card.session?.id).toBe("s1");
    expect(card.progress).toEqual({ completed: 1, total: 3 });
  });

  it("returns 'done' when every session has an outcome", () => {
    const outcomes: Record<string, SessionOutcomeRecord> = Object.fromEntries(
      sessions.map((s) => [s.id, { sessionId: s.id, outcome: "on", completedAt: 1 }]),
    );
    const card = determineTodayCard(sessions, outcomes, "2026-01-10");
    expect(card.state).toBe("done");
    expect(card.session).toBeUndefined();
  });
});
