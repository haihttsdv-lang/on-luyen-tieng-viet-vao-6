// Pure gamification logic (GM-01→GM-07). No DOM, no storage.

import type { ScheduledSession, SessionOutcome, SessionOutcomeRecord, SessionType } from "@/data-access/types";

// ---------------------------------------------------------------------------
// Coins (GM-01→GM-04)
// ---------------------------------------------------------------------------

// GM-04: buổi càng nặng thì mức xu càng cao — not specified numerically in
// the URD, so weighted by session type (lesson/practice/error-review are
// lightest, monthly-check heaviest).
const SESSION_BASE_COINS: Record<SessionType, number> = {
  lesson: 5,
  practice: 5,
  "error-review": 5,
  "mock-test": 10,
  "weekly-check": 10,
  "monthly-check": 15,
};

// GM-02: Xuất sắc cộng đủ, Ổn cộng một nửa, Cần ôn lại trừ một nửa — deliberate,
// to reward honest self-assessment.
const OUTCOME_MULTIPLIER: Record<SessionOutcome, number> = {
  "xuat-sac": 1,
  on: 0.5,
  "can-on-lai": -0.5,
};

/** GM-01/02/04: coins for finishing a session, positive or negative
 * depending on self-assessment. GM-03: essay sessions are rewarded the same
 * way — by session completion, never by the (self-assigned) essay score. */
export function computeSessionCoins(sessionType: SessionType, outcome: SessionOutcome): number {
  return Math.round(SESSION_BASE_COINS[sessionType] * OUTCOME_MULTIPLIER[outcome]);
}

// GM-09 Thử thách tốc độ: reuses the reference app's production-validated
// streak formula (2–5 coins per correct answer, capped).
export function computeStreakCoins(streak: number): number {
  return 2 + Math.min(streak, 3);
}

// ---------------------------------------------------------------------------
// Badges (GM-05/06) — derived on every read, never stored. Storing "earned"
// state would need its own sync/consistency handling; deriving from data
// that's already synced (schedule, outcomes, test results) is automatically
// consistent across devices for free (reference app's ADR 0006 lesson).
// ---------------------------------------------------------------------------

export interface Badge {
  id: string;
  icon: string;
  label: string;
}

const STREAK_TARGET = 5;
const MOCK_TEST_GREAT_RATIO = 0.8;
const WRITING_TARGET = 10;
const READING_TARGET = 20;

// Checks don't count toward, or break, the "consecutive sessions" streak.
const STREAK_ELIGIBLE_TYPES: SessionType[] = ["lesson", "practice", "error-review", "mock-test"];

export function computeEarnedBadges(input: {
  phaseBoundaries: Array<{ phase: 1 | 2 | 3; startIndex: number; endIndex: number }>;
  sessions: ScheduledSession[];
  outcomes: Record<string, SessionOutcomeRecord>;
  testResults: Array<{ autoScore: number; autoScoreMax: number }>;
  writingsSubmittedCount: number;
  passagesReadCount: number;
}): Badge[] {
  const badges: Badge[] = [];

  // Hoàn thành mỗi giai đoạn.
  for (const boundary of input.phaseBoundaries) {
    const phaseSessions = input.sessions.slice(boundary.startIndex, boundary.endIndex + 1);
    if (phaseSessions.length > 0 && phaseSessions.every((s) => input.outcomes[s.id] !== undefined)) {
      badges.push({
        id: `phase-${boundary.phase}`,
        icon: "🏅",
        label: `Hoàn thành Giai đoạn ${boundary.phase}`,
      });
    }
  }

  // Chuỗi 5 buổi liên tiếp (không tính kiểm tra tuần/tháng).
  const streakEligible = input.sessions.filter((s) => STREAK_ELIGIBLE_TYPES.includes(s.type));
  let maxStreak = 0;
  let current = 0;
  for (const s of streakEligible) {
    if (input.outcomes[s.id] !== undefined) {
      current += 1;
      maxStreak = Math.max(maxStreak, current);
    } else {
      current = 0;
    }
  }
  if (maxStreak >= STREAK_TARGET) {
    badges.push({ id: "streak-5", icon: "🔥", label: "5 buổi liên tiếp" });
  }

  // Thi thử đạt trên 80%.
  if (input.testResults.some((r) => r.autoScoreMax > 0 && r.autoScore / r.autoScoreMax > MOCK_TEST_GREAT_RATIO)) {
    badges.push({ id: "mock-test-80", icon: "🎯", label: "Thi thử đạt trên 80%" });
  }

  // Viết đủ 10 bài văn.
  if (input.writingsSubmittedCount >= WRITING_TARGET) {
    badges.push({ id: "writing-10", icon: "✍️", label: `Viết đủ ${WRITING_TARGET} bài văn` });
  }

  // Đọc hiểu 20 văn bản.
  if (input.passagesReadCount >= READING_TARGET) {
    badges.push({ id: "reading-20", icon: "📖", label: `Đọc hiểu ${READING_TARGET} văn bản` });
  }

  return badges;
}

// ---------------------------------------------------------------------------
// Progress rings (GM-07)
// ---------------------------------------------------------------------------

export function computePhaseProgress(
  phaseBoundaries: Array<{ phase: 1 | 2 | 3; startIndex: number; endIndex: number }>,
  sessions: ScheduledSession[],
  outcomes: Record<string, SessionOutcomeRecord>,
): Array<{ phase: 1 | 2 | 3; percent: number }> {
  return phaseBoundaries.map((b) => {
    const phaseSessions = sessions.slice(b.startIndex, b.endIndex + 1);
    const done = phaseSessions.filter((s) => outcomes[s.id] !== undefined).length;
    const percent = phaseSessions.length > 0 ? Math.round((done / phaseSessions.length) * 100) : 0;
    return { phase: b.phase, percent };
  });
}
