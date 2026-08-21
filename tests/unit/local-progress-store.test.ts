import { beforeEach, describe, expect, it } from "vitest";
import { createLocalProgressStore } from "@/data-access/local/localProgressStore";
import type { Attempt, ErrorLogEntry } from "@/data-access/types";

describe("createLocalProgressStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("persists attempts under the ol6v.* namespace", () => {
    const store = createLocalProgressStore();
    const attempt: Attempt = {
      id: "a1",
      exerciseId: "ex-1",
      topicIds: ["NT-01"],
      correct: true,
      timestamp: 123,
    };
    store.addAttempt(attempt);

    expect(store.getAttempts()).toEqual([attempt]);
    expect(localStorage.getItem("ol6v.progress.attempts")).toContain("ex-1");
  });

  it("round-trips the error log", () => {
    const store = createLocalProgressStore();
    const entries: ErrorLogEntry[] = [{ exerciseId: "ex-1", addedAt: 1, consecutiveCorrect: 0 }];
    store.setErrorLog(entries);
    expect(store.getErrorLog()).toEqual(entries);
  });

  it("returns empty defaults when nothing is stored yet", () => {
    const store = createLocalProgressStore();
    expect(store.getAttempts()).toEqual([]);
    expect(store.getErrorLog()).toEqual([]);
    expect(store.getTopicStatuses()).toEqual({});
  });

  it("FR-L01: tracks per-topic status without clobbering other topics", () => {
    const store = createLocalProgressStore();
    store.setTopicStatus("KN-01", "dang-hoc");
    store.setTopicStatus("NT-01", "da-nam");
    expect(store.getTopicStatuses()).toEqual({ "KN-01": "dang-hoc", "NT-01": "da-nam" });

    store.setTopicStatus("KN-01", "da-nam");
    expect(store.getTopicStatuses()).toEqual({ "KN-01": "da-nam", "NT-01": "da-nam" });
  });

  it("FR-T08: records test result history", () => {
    const store = createLocalProgressStore();
    expect(store.getTestResults()).toEqual([]);

    const result = {
      id: "r1",
      configId: "ARCH60",
      configLabel: "Archimedes (60 phút)",
      date: 1,
      autoScore: 8,
      autoScoreMax: 10,
      selfScore: 4,
      selfScoreMax: 5,
      byTopicGroup: {},
      byLevel: {},
      durationUsedSeconds: 100,
    };
    store.addTestResult(result);
    expect(store.getTestResults()).toEqual([result]);
  });

  it("exportAll/importAll round-trip (FR-H12, reused later for sync per SY-02)", () => {
    const store = createLocalProgressStore();
    store.addAttempt({ id: "a1", exerciseId: "ex-1", topicIds: [], correct: true, timestamp: 1 });
    store.setErrorLog([{ exerciseId: "ex-2", addedAt: 1, consecutiveCorrect: 1 }]);

    const exported = store.exportAll();
    localStorage.clear();
    expect(createLocalProgressStore().getAttempts()).toEqual([]);

    createLocalProgressStore().importAll(exported);
    const restored = createLocalProgressStore();
    expect(restored.getAttempts()).toHaveLength(1);
    expect(restored.getErrorLog()).toHaveLength(1);
  });

  it("importAll ignores keys outside the known namespace", () => {
    const store = createLocalProgressStore();
    store.importAll({ "some.other.key": "malicious", "ol6v.progress.attempts": "[]" });
    expect(localStorage.getItem("some.other.key")).toBeNull();
  });

  it("FR-C01/C06: round-trips schedule settings and the generated schedule", () => {
    const store = createLocalProgressStore();
    expect(store.getScheduleSettings()).toBeUndefined();
    expect(store.getSchedule()).toEqual([]);

    const settings = { startDate: "2026-01-05", daysOfWeek: [1, 3, 5], testConfigId: "BALANCED" };
    store.setScheduleSettings(settings);
    expect(store.getScheduleSettings()).toEqual(settings);

    const sessions = [
      { id: "s0", index: 0, date: "2026-01-05", phase: 1 as const, type: "lesson" as const, label: "Học: x" },
    ];
    store.setSchedule(sessions);
    expect(store.getSchedule()).toEqual(sessions);
  });

  it("FR-C04: records a session outcome", () => {
    const store = createLocalProgressStore();
    expect(store.getSessionOutcomes()).toEqual({});
    store.setSessionOutcome("s0", "xuat-sac");
    const outcomes = store.getSessionOutcomes();
    expect(outcomes.s0.outcome).toBe("xuat-sac");
    expect(outcomes.s0.sessionId).toBe("s0");
  });

  it("FR-C08: tracks and clears the last-opened (unfinished) session", () => {
    const store = createLocalProgressStore();
    expect(store.getLastOpenedSessionId()).toBeUndefined();
    store.setLastOpenedSessionId("s3");
    expect(store.getLastOpenedSessionId()).toBe("s3");
    store.setLastOpenedSessionId(undefined);
    expect(store.getLastOpenedSessionId()).toBeUndefined();
  });
});
