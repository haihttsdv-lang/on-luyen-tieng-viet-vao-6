// Pure schedule-generation logic (FR-C01, FR-C05, FR-C06). No DOM, no
// storage — labels/lookups are injected so this has zero dependency beyond
// shared type definitions (Mục 16.2).

import type { ScheduledSession, SessionOutcomeRecord, SessionType, TopicGroup } from "@/data-access/types";

export interface ContentUnit {
  type: SessionType;
  label: string;
  topicIds?: string[];
  testConfigId?: string;
  phase: 1 | 2 | 3;
  /** Lower = kept first when compressing (FR-C06): 0 = KN (Mục 7's explicit
   * priority), 1 = regular topic content and practice/error-review, 2 =
   * periodic checkpoints (dropped first when time is critically short). */
  priority: number;
}

// ---------------------------------------------------------------------------
// Dates
// ---------------------------------------------------------------------------

function parseISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Generates up to `count` dates on the given weekdays, starting from (and
 * possibly including) startDate, stopping early at maxDate if given. */
export function generateSessionDates(
  startDate: string,
  daysOfWeek: number[],
  count: number,
  maxDate?: string,
): string[] {
  if (daysOfWeek.length === 0 || count <= 0) return [];
  const weekdaySet = new Set(daysOfWeek);
  const max = maxDate ? parseISODate(maxDate) : undefined;
  const dates: string[] = [];
  const cursor = parseISODate(startDate);

  while (dates.length < count) {
    if (weekdaySet.has(cursor.getDay())) {
      if (max && cursor > max) break;
      dates.push(toISODate(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
    // Safety valve: never scan more than ~5.5 years of days.
    if (cursor.getTime() - parseISODate(startDate).getTime() > 2000 * 24 * 60 * 60 * 1000) break;
  }
  return dates;
}

/** How many session slots exist between startDate and maxDate at this cadence. */
export function countAvailableSlots(startDate: string, daysOfWeek: number[], maxDate: string): number {
  return generateSessionDates(startDate, daysOfWeek, Number.MAX_SAFE_INTEGER, maxDate).length;
}

// ---------------------------------------------------------------------------
// Content units
// ---------------------------------------------------------------------------

/** FR-C01/Mục 7: phase 1 — nền tảng. KN interleaved evenly among the other
 * groups, per Mục 7 ("29 chuyên đề ... xen 5 chuyên đề KN"). */
export function buildPhase1Units(
  topicsByGroup: Partial<Record<TopicGroup, string[]>>,
  knTopics: string[],
  topicLabelOf: (id: string) => string,
): ContentUnit[] {
  const groupOrder: TopicGroup[] = ["TC", "TL", "NT", "CA", "CD"];
  const main = groupOrder.flatMap((g) => topicsByGroup[g] ?? []);
  return interleave(
    main.map((id) => lessonUnit(id, 1, 1, topicLabelOf)),
    knTopics.map((id) => lessonUnit(id, 1, 0, topicLabelOf)),
  );
}

/** Phase 2 — đọc hiểu, cảm thụ, viết văn. Mục 4.3: luyện đề áp đảo so với
 * bài kiến thức, nên chèn 1 buổi luyện đề sau mỗi buổi học chuyên đề. */
export function buildPhase2Units(
  topicsByGroup: Partial<Record<TopicGroup, string[]>>,
  vaTopics: string[],
  topicLabelOf: (id: string) => string,
  mockTestConfigId: string,
): ContentUnit[] {
  const groupOrder: TopicGroup[] = ["DH", "CT"];
  const topicIds = [...groupOrder.flatMap((g) => topicsByGroup[g] ?? []), ...vaTopics];
  const units: ContentUnit[] = [];
  topicIds.forEach((id, i) => {
    units.push(lessonUnit(id, 2, 1, topicLabelOf));
    if (i % 2 === 1) {
      units.push({
        type: "error-review",
        label: "Buổi phân tích lỗi sai",
        phase: 2,
        priority: 1,
      });
    } else {
      units.push({
        type: "mock-test",
        label: "Luyện đề (theo cấu hình đã chọn)",
        testConfigId: mockTestConfigId,
        phase: 2,
        priority: 1,
      });
    }
  });
  return units;
}

/** Phase 3 — luyện đề trường mục tiêu, hàng tuần đến ngày thi. Sessions
 * beyond the exam-date budget aren't generated here — the caller decides how
 * many to ask for, based on remaining slots (naturally "giãn" to fill
 * whatever time is left before the exam). */
export function buildPhase3Units(count: number, testConfigId: string): ContentUnit[] {
  const units: ContentUnit[] = [];
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      units.push({
        type: "mock-test",
        label: "Luyện đề theo cấu hình trường mục tiêu",
        testConfigId,
        phase: 3,
        priority: 0,
      });
    } else {
      units.push({
        type: "practice",
        label: "Luyện chuyên sâu chuyên đề yếu nhất",
        phase: 3,
        priority: 0,
      });
    }
  }
  return units;
}

function lessonUnit(topicId: string, phase: 1 | 2, priority: number, topicLabelOf: (id: string) => string): ContentUnit {
  return { type: "lesson", label: `Học: ${topicLabelOf(topicId)}`, topicIds: [topicId], phase, priority };
}

/** Spreads `minor` items evenly among `major`, preserving both orders. */
function interleave(major: ContentUnit[], minor: ContentUnit[]): ContentUnit[] {
  if (minor.length === 0) return major;
  if (major.length === 0) return minor;
  const result: ContentUnit[] = [];
  const step = major.length / minor.length;
  let minorIdx = 0;
  let nextInsertAt = step;
  major.forEach((unit, i) => {
    result.push(unit);
    if (minorIdx < minor.length && i + 1 >= nextInsertAt) {
      result.push(minor[minorIdx]);
      minorIdx++;
      nextInsertAt += step;
    }
  });
  while (minorIdx < minor.length) result.push(minor[minorIdx++]);
  return result;
}

/** FR-C05: kiểm tra tuần/tháng, chèn theo vị trí (mỗi "tuần" ≈ số buổi/tuần
 * đã chọn), tránh chồng kiểm tra tuần và tháng cùng một tuần.
 *
 * Priority 2 (lower than KN's 0 and regular content's 1): under severe
 * FR-C06 compression, an already-tight schedule drops check-ins before it
 * drops actual content. */
export function insertPeriodicChecks(units: ContentUnit[], sessionsPerWeek: number, testConfigId: string): ContentUnit[] {
  if (sessionsPerWeek <= 0) return units;
  const weeksPerMonth = 4;
  const result: ContentUnit[] = [];
  let sinceWeekly = 0;
  let weeksElapsed = 0;

  for (const unit of units) {
    result.push(unit);
    sinceWeekly++;
    if (sinceWeekly >= sessionsPerWeek) {
      sinceWeekly = 0;
      weeksElapsed++;
      const isMonthly = weeksElapsed % weeksPerMonth === 0;
      result.push({
        type: isMonthly ? "monthly-check" : "weekly-check",
        label: isMonthly ? "Kiểm tra tháng" : "Kiểm tra tuần",
        testConfigId,
        phase: unit.phase,
        priority: 2,
      });
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// Compression (FR-C06)
// ---------------------------------------------------------------------------

/** Trims lowest-priority units first (stable within a priority tier) until
 * `target` remain, or everything priority-0 if that's already over target. */
export function compressUnits(units: ContentUnit[], target: number): ContentUnit[] {
  if (units.length <= target) return units;
  const sorted = [...units]
    .map((unit, originalIndex) => ({ unit, originalIndex }))
    .sort((a, b) => a.unit.priority - b.unit.priority || a.originalIndex - b.originalIndex);
  const kept = sorted.slice(0, Math.max(target, 0));
  return kept.sort((a, b) => a.originalIndex - b.originalIndex).map((k) => k.unit);
}

// ---------------------------------------------------------------------------
// Orchestration
// ---------------------------------------------------------------------------

export interface GenerateScheduleParams {
  startDate: string;
  daysOfWeek: number[];
  examDate?: string;
  testConfigId: string; // default cấu hình đề cho GĐ3 + các bài kiểm tra định kỳ
  phase1TopicsByGroup: Partial<Record<TopicGroup, string[]>>;
  knTopics: string[];
  phase2TopicsByGroup: Partial<Record<TopicGroup, string[]>>;
  vaTopics: string[];
  topicLabelOf: (id: string) => string;
  /** How many phase-3 sessions to generate when there's no examDate to bound it. */
  phase3WeeksIfNoExamDate?: number;
}

export interface GeneratedSchedule {
  sessions: ScheduledSession[];
  phaseBoundaries: Array<{ phase: 1 | 2 | 3; startIndex: number; endIndex: number }>;
  compressed: boolean;
  warning?: string;
}

const MIN_PHASE3_SESSIONS = 2;

export function generateSchedule(params: GenerateScheduleParams): GeneratedSchedule {
  const sessionsPerWeek = params.daysOfWeek.length;

  const phase1 = insertPeriodicChecks(
    buildPhase1Units(params.phase1TopicsByGroup, params.knTopics, params.topicLabelOf),
    sessionsPerWeek,
    params.testConfigId,
  );
  const phase2 = insertPeriodicChecks(
    buildPhase2Units(params.phase2TopicsByGroup, params.vaTopics, params.topicLabelOf, params.testConfigId),
    sessionsPerWeek,
    params.testConfigId,
  );

  let coreUnits = [...phase1, ...phase2];
  let compressed = false;
  let warning: string | undefined;

  let phase3Count: number;
  if (params.examDate) {
    const totalAvailable = countAvailableSlots(params.startDate, params.daysOfWeek, params.examDate);
    const desiredCore = coreUnits.length;
    const budgetForCore = Math.max(totalAvailable - MIN_PHASE3_SESSIONS, 0);

    if (desiredCore > budgetForCore) {
      compressed = true;
      coreUnits = compressUnits(coreUnits, budgetForCore);
      warning =
        "Ngày thi khá gần — lộ trình đã được rút gọn, ưu tiên giữ nhóm Kỹ năng làm bài và các bài kiểm tra định kỳ.";
    }
    phase3Count = Math.max(totalAvailable - coreUnits.length, 0);
    if (totalAvailable < coreUnits.length + MIN_PHASE3_SESSIONS) {
      warning =
        "Thời gian còn lại trước ngày thi rất ngắn, có thể không đủ để ôn đầy đủ dù đã rút gọn lộ trình. Hãy cân nhắc tăng số buổi học mỗi tuần.";
    }
  } else {
    phase3Count = (params.phase3WeeksIfNoExamDate ?? 8) * sessionsPerWeek;
  }

  const phase3 = buildPhase3Units(phase3Count, params.testConfigId);
  const allUnits = [...coreUnits, ...phase3];

  const dates = generateSessionDates(params.startDate, params.daysOfWeek, allUnits.length, params.examDate);
  const sessions: ScheduledSession[] = allUnits.slice(0, dates.length).map((unit, i) => ({
    id: `session-${i}`,
    index: i,
    date: dates[i],
    phase: unit.phase,
    type: unit.type,
    label: unit.label,
    topicIds: unit.topicIds,
    testConfigId: unit.testConfigId,
  }));

  const phaseBoundaries: GeneratedSchedule["phaseBoundaries"] = [];
  for (const phase of [1, 2, 3] as const) {
    const indices = sessions.map((s, i) => (s.phase === phase ? i : -1)).filter((i) => i >= 0);
    if (indices.length > 0) {
      phaseBoundaries.push({ phase, startIndex: indices[0], endIndex: indices[indices.length - 1] });
    }
  }

  return { sessions, phaseBoundaries, compressed, warning };
}

// ---------------------------------------------------------------------------
// "Buổi học hôm nay" (FR-C02)
// ---------------------------------------------------------------------------

export interface TodayCard {
  state: "today" | "overdue" | "upcoming" | "done";
  session?: ScheduledSession;
  progress: { completed: number; total: number };
}

/** The next not-yet-self-assessed session determines the card: today's date
 * → "today"; a past date → "overdue" (behind schedule); a future date →
 * "upcoming" (ahead of/on schedule). No sessions left at all → "done". */
export function determineTodayCard(
  sessions: ScheduledSession[],
  outcomes: Record<string, SessionOutcomeRecord>,
  todayISO: string,
): TodayCard {
  const total = sessions.length;
  const completed = sessions.filter((s) => outcomes[s.id] !== undefined).length;
  const next = [...sessions].sort((a, b) => a.index - b.index).find((s) => outcomes[s.id] === undefined);

  if (!next) return { state: "done", progress: { completed, total } };
  if (next.date === todayISO) return { state: "today", session: next, progress: { completed, total } };
  if (next.date < todayISO) return { state: "overdue", session: next, progress: { completed, total } };
  return { state: "upcoming", session: next, progress: { completed, total } };
}
