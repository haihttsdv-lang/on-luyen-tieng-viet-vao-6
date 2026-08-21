// Pure logic for the sổ lỗi (error log): FR-P05 (auto-add on wrong answer),
// FR-P06 (remove after 2 consecutive correct redos), FR-P07 (aggregate by
// topic and by error type). No storage access — the caller persists the
// returned log via ProgressStore.

import type { Attempt, ErrorLogEntry, ErrorType } from "@/data-access/types";

const CONSECUTIVE_CORRECT_TO_CLEAR = 2; // FR-P06

/**
 * Given the current sổ lỗi and a freshly-graded attempt, returns the sổ lỗi
 * that should be persisted next. Only meaningful for attempts with a known
 * `correct` verdict (mcq/match/order/fill) — short/essay attempts (no
 * automatic verdict) should not be passed here.
 */
export function applyAttemptToErrorLog(
  errorLog: ErrorLogEntry[],
  attempt: Attempt,
): ErrorLogEntry[] {
  if (attempt.correct === undefined) return errorLog;

  const existingIndex = errorLog.findIndex((e) => e.exerciseId === attempt.exerciseId);
  const existing = existingIndex >= 0 ? errorLog[existingIndex] : undefined;

  if (!attempt.correct) {
    // Wrong answer: (re-)add to the log, reset the streak, remember why.
    const entry: ErrorLogEntry = {
      exerciseId: attempt.exerciseId,
      addedAt: existing?.addedAt ?? attempt.timestamp,
      consecutiveCorrect: 0,
      errorType: attempt.errorType ?? existing?.errorType,
    };
    return replaceOrAppend(errorLog, existingIndex, entry);
  }

  if (!existing) {
    // Correct, and it was never wrong — nothing to track.
    return errorLog;
  }

  const consecutiveCorrect = existing.consecutiveCorrect + 1;
  if (consecutiveCorrect >= CONSECUTIVE_CORRECT_TO_CLEAR) {
    return errorLog.filter((_, i) => i !== existingIndex);
  }
  return replaceOrAppend(errorLog, existingIndex, { ...existing, consecutiveCorrect });
}

function replaceOrAppend(
  log: ErrorLogEntry[],
  index: number,
  entry: ErrorLogEntry,
): ErrorLogEntry[] {
  if (index < 0) return [...log, entry];
  const next = [...log];
  next[index] = entry;
  return next;
}

export interface TopicErrorCount {
  topicId: string;
  count: number;
}

export interface ErrorTypeCount {
  errorType: ErrorType;
  count: number;
}

/** FR-P07: wrong attempts grouped by chuyên đề. */
export function summarizeErrorsByTopic(attempts: Attempt[]): TopicErrorCount[] {
  const counts = new Map<string, number>();
  for (const attempt of attempts) {
    if (attempt.correct !== false) continue;
    for (const topicId of attempt.topicIds) {
      counts.set(topicId, (counts.get(topicId) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([topicId, count]) => ({ topicId, count }))
    .sort((a, b) => b.count - a.count);
}

/** FR-P07: wrong attempts grouped by self-reported error type. */
export function summarizeErrorsByType(attempts: Attempt[]): ErrorTypeCount[] {
  const counts = new Map<ErrorType, number>();
  for (const attempt of attempts) {
    if (attempt.correct !== false || !attempt.errorType) continue;
    counts.set(attempt.errorType, (counts.get(attempt.errorType) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([errorType, count]) => ({ errorType, count }))
    .sort((a, b) => b.count - a.count);
}
