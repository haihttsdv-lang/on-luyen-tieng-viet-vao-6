import { describe, expect, it } from "vitest";
import {
  applyAttemptToErrorLog,
  summarizeErrorsByTopic,
  summarizeErrorsByType,
} from "@/core/error-analysis";
import type { Attempt, ErrorLogEntry } from "@/data-access/types";

function attempt(overrides: Partial<Attempt> = {}): Attempt {
  return {
    id: "a1",
    exerciseId: "ex-1",
    topicIds: ["NT-01"],
    correct: false,
    timestamp: 1000,
    ...overrides,
  };
}

describe("applyAttemptToErrorLog (FR-P05, FR-P06)", () => {
  it("adds a new entry on a wrong answer", () => {
    const log = applyAttemptToErrorLog([], attempt({ correct: false }));
    expect(log).toEqual([
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 0, errorType: undefined },
    ]);
  });

  it("does nothing for a correct answer with no prior error-log entry", () => {
    expect(applyAttemptToErrorLog([], attempt({ correct: true }))).toEqual([]);
  });

  it("does nothing for attempts with no verdict (e.g. ungraded short answer)", () => {
    expect(applyAttemptToErrorLog([], attempt({ correct: undefined }))).toEqual([]);
  });

  it("increments the streak on the first correct redo but keeps the entry", () => {
    const initial: ErrorLogEntry[] = [
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 0 },
    ];
    const log = applyAttemptToErrorLog(initial, attempt({ correct: true, timestamp: 2000 }));
    expect(log).toEqual([{ exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 1 }]);
  });

  it("removes the entry after 2 consecutive correct redos", () => {
    const afterOneCorrect: ErrorLogEntry[] = [
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 1 },
    ];
    const log = applyAttemptToErrorLog(afterOneCorrect, attempt({ correct: true, timestamp: 3000 }));
    expect(log).toEqual([]);
  });

  it("resets the streak to 0 if the student gets it wrong again", () => {
    const afterOneCorrect: ErrorLogEntry[] = [
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 1, errorType: "sai-chinh-ta" },
    ];
    const log = applyAttemptToErrorLog(
      afterOneCorrect,
      attempt({ correct: false, timestamp: 4000, errorType: "thieu-y" }),
    );
    expect(log).toEqual([
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 0, errorType: "thieu-y" },
    ]);
  });

  it("keeps other entries untouched", () => {
    const initial: ErrorLogEntry[] = [
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 0 },
      { exerciseId: "ex-2", addedAt: 1500, consecutiveCorrect: 1 },
    ];
    const log = applyAttemptToErrorLog(
      initial,
      attempt({ exerciseId: "ex-1", correct: true, timestamp: 2000 }),
    );
    expect(log).toEqual([
      { exerciseId: "ex-1", addedAt: 1000, consecutiveCorrect: 1 },
      { exerciseId: "ex-2", addedAt: 1500, consecutiveCorrect: 1 },
    ]);
  });
});

describe("summarizeErrorsByTopic / summarizeErrorsByType (FR-P07)", () => {
  const attempts: Attempt[] = [
    attempt({ id: "1", exerciseId: "e1", topicIds: ["NT-01"], correct: false, errorType: "sai-chinh-ta" }),
    attempt({ id: "2", exerciseId: "e2", topicIds: ["NT-01"], correct: false, errorType: "sai-chinh-ta" }),
    attempt({ id: "3", exerciseId: "e3", topicIds: ["CA-03"], correct: false, errorType: "thieu-y" }),
    attempt({ id: "4", exerciseId: "e4", topicIds: ["CA-03"], correct: true }),
  ];

  it("counts wrong attempts per topic, descending", () => {
    expect(summarizeErrorsByTopic(attempts)).toEqual([
      { topicId: "NT-01", count: 2 },
      { topicId: "CA-03", count: 1 },
    ]);
  });

  it("counts wrong attempts per self-reported error type, descending", () => {
    expect(summarizeErrorsByType(attempts)).toEqual([
      { errorType: "sai-chinh-ta", count: 2 },
      { errorType: "thieu-y", count: 1 },
    ]);
  });

  it("ignores correct attempts and wrong attempts with no chosen error type", () => {
    const onlyCorrect: Attempt[] = [attempt({ correct: true })];
    expect(summarizeErrorsByTopic(onlyCorrect)).toEqual([]);
    expect(summarizeErrorsByType(onlyCorrect)).toEqual([]);
  });
});
