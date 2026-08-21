// localStorage-backed ProgressStore. All keys namespaced under `ol6v.` per
// Mục 13 (kept independent from the sibling English/Toán apps' `ol6.`/other
// prefixes — QĐ-3). No React, no network — pure storage I/O.

import type {
  Attempt,
  ErrorLogEntry,
  ProgressStore,
  ScheduledSession,
  ScheduleSettings,
  SessionOutcome,
  SessionOutcomeRecord,
  TestResult,
  TopicStatus,
} from "@/data-access/types";

const KEYS = {
  attempts: "ol6v.progress.attempts",
  errorLog: "ol6v.progress.errorLog",
  topicStatuses: "ol6v.progress.topicStatuses",
  testResults: "ol6v.progress.testResults",
  scheduleSettings: "ol6v.progress.scheduleSettings",
  schedule: "ol6v.progress.schedule",
  sessionOutcomes: "ol6v.progress.sessionOutcomes",
  lastOpenedSessionId: "ol6v.progress.lastOpenedSessionId",
  coins: "ol6v.progress.coins",
  soundEnabled: "ol6v.progress.soundEnabled",
} as const;

function readJson<T>(key: string, fallback: T): T {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function createLocalProgressStore(): ProgressStore {
  return {
    getAttempts() {
      return readJson<Attempt[]>(KEYS.attempts, []);
    },
    addAttempt(attempt) {
      const attempts = readJson<Attempt[]>(KEYS.attempts, []);
      attempts.push(attempt);
      writeJson(KEYS.attempts, attempts);
    },

    getErrorLog() {
      return readJson<ErrorLogEntry[]>(KEYS.errorLog, []);
    },
    setErrorLog(entries) {
      writeJson(KEYS.errorLog, entries);
    },

    getTopicStatuses() {
      return readJson<Record<string, TopicStatus>>(KEYS.topicStatuses, {});
    },
    setTopicStatus(topicId, status) {
      const statuses = readJson<Record<string, TopicStatus>>(KEYS.topicStatuses, {});
      statuses[topicId] = status;
      writeJson(KEYS.topicStatuses, statuses);
    },

    // FR-T08: full history, newest first.
    getTestResults() {
      return readJson<TestResult[]>(KEYS.testResults, []);
    },
    addTestResult(result) {
      const results = readJson<TestResult[]>(KEYS.testResults, []);
      results.push(result);
      writeJson(KEYS.testResults, results);
    },

    // FR-C01/C06.
    getScheduleSettings() {
      return readJson<ScheduleSettings | undefined>(KEYS.scheduleSettings, undefined);
    },
    setScheduleSettings(settings) {
      writeJson(KEYS.scheduleSettings, settings);
    },
    getSchedule() {
      return readJson<ScheduledSession[]>(KEYS.schedule, []);
    },
    setSchedule(sessions) {
      writeJson(KEYS.schedule, sessions);
    },

    // FR-C04.
    getSessionOutcomes() {
      return readJson<Record<string, SessionOutcomeRecord>>(KEYS.sessionOutcomes, {});
    },
    setSessionOutcome(sessionId: string, outcome: SessionOutcome) {
      const outcomes = readJson<Record<string, SessionOutcomeRecord>>(KEYS.sessionOutcomes, {});
      outcomes[sessionId] = { sessionId, outcome, completedAt: Date.now() };
      writeJson(KEYS.sessionOutcomes, outcomes);
    },

    // FR-C08.
    getLastOpenedSessionId() {
      return readJson<string | undefined>(KEYS.lastOpenedSessionId, undefined);
    },
    setLastOpenedSessionId(sessionId) {
      if (sessionId === undefined) {
        localStorage.removeItem(KEYS.lastOpenedSessionId);
      } else {
        writeJson(KEYS.lastOpenedSessionId, sessionId);
      }
    },

    // GM-01→04: never goes below 0 (a big "cần ôn lại" deduction streak
    // shouldn't put the student in coin debt).
    getCoins() {
      return readJson<number>(KEYS.coins, 0);
    },
    addCoins(delta) {
      const next = Math.max(0, readJson<number>(KEYS.coins, 0) + delta);
      writeJson(KEYS.coins, next);
      return next;
    },

    // GM-08.
    getSoundEnabled() {
      return readJson<boolean>(KEYS.soundEnabled, true);
    },
    setSoundEnabled(enabled) {
      writeJson(KEYS.soundEnabled, enabled);
    },

    // FR-H12 / SY-02: single JSON export/import, reused later for both
    // manual backup and cloud sync — no separate API per data type.
    exportAll() {
      const data: Record<string, string> = {};
      for (const key of Object.values(KEYS)) {
        const raw = localStorage.getItem(key);
        if (raw !== null) data[key] = raw;
      }
      return data;
    },
    importAll(data) {
      const validKeys = new Set<string>(Object.values(KEYS));
      for (const [key, value] of Object.entries(data)) {
        if (validKeys.has(key)) localStorage.setItem(key, value);
      }
    },
  };
}
