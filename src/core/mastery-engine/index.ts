// Pure mastery/activity/recommendation logic (Mục 10.5, FR-H03→H08). No
// DOM, no storage — topic↔group/attempt lookups are all pre-resolved by the
// caller before hitting this module (Mục 16.2).

export type MasteryLevel = "no-data" | "weak" | "improving" | "mastered";

// Mục 22 §1/§2 — matches the reference app's production-validated values.
const RECENCY_WINDOW = 10;
const MIN_ATTEMPTS_FOR_SCORE = 3;
const WEAK_THRESHOLD = 0.5;
const MASTERED_THRESHOLD = 0.8;

function levelForScore(score: number): MasteryLevel {
  if (score < WEAK_THRESHOLD) return "weak";
  if (score <= MASTERED_THRESHOLD) return "improving";
  return "mastered";
}

// ---------------------------------------------------------------------------
// FR-H03a: masteryScore — TC/TL/NT/CA/CD/DH. Caller has already filtered to
// only mcq/match/order/fill attempts (self-scored short/essay never reach
// here — FR-H03d).
// ---------------------------------------------------------------------------

export interface GradedAttemptLike {
  correct: boolean;
  timestamp: number;
}

export interface MasteryResult {
  score: number | null; // 0–1, null when there isn't enough data yet
  level: MasteryLevel;
  attemptsUsed: number;
  totalAttempts: number;
}

export function computeMasteryScore(attempts: GradedAttemptLike[]): MasteryResult {
  const totalAttempts = attempts.length;
  const windowed = [...attempts].sort((a, b) => a.timestamp - b.timestamp).slice(-RECENCY_WINDOW);
  const attemptsUsed = windowed.length;

  if (attemptsUsed < MIN_ATTEMPTS_FOR_SCORE) {
    return { score: null, level: "no-data", attemptsUsed, totalAttempts };
  }

  let weightedSum = 0;
  let weightTotal = 0;
  windowed.forEach((a, i) => {
    const weight = i + 1; // oldest in window = 1, most recent = attemptsUsed
    weightedSum += (a.correct ? 1 : 0) * weight;
    weightTotal += weight;
  });
  const score = weightedSum / weightTotal;
  return { score, level: levelForScore(score), attemptsUsed, totalAttempts };
}

// ---------------------------------------------------------------------------
// FR-H03b: activityScore — CT/VA/KN, hầu hết câu mở nên đo theo hoạt động,
// không theo độ chính xác.
// ---------------------------------------------------------------------------

const STALE_AFTER_DAYS = 28; // "> 4 tuần không luyện" (Mục 22 §3)
const STALE_DECAY_FACTOR = 0.5;
const DAY_MS = 24 * 60 * 60 * 1000;

export interface ActivityResult {
  ratio: number; // 0–1, completedCount/targetCount capped, decayed if stale
  level: MasteryLevel;
  completedCount: number;
  targetCount: number;
  decayApplied: boolean;
}

export function computeActivityScore(
  completedCount: number,
  targetCount: number,
  lastActivityTimestamp: number | null,
  now: number = Date.now(),
): ActivityResult {
  if (completedCount === 0) {
    return { ratio: 0, level: "no-data", completedCount, targetCount, decayApplied: false };
  }
  const rawRatio = targetCount > 0 ? Math.min(completedCount / targetCount, 1) : 0;
  const daysSinceActivity = lastActivityTimestamp === null ? null : (now - lastActivityTimestamp) / DAY_MS;
  const decayApplied = daysSinceActivity !== null && daysSinceActivity > STALE_AFTER_DAYS;
  const ratio = decayApplied ? rawRatio * STALE_DECAY_FACTOR : rawRatio;
  return { ratio, level: levelForScore(ratio), completedCount, targetCount, decayApplied };
}

// ---------------------------------------------------------------------------
// FR-H06→H08/H11: gợi ý tối đa 3 hành động, kèm lý do.
// ---------------------------------------------------------------------------

export interface TopicMasterySnapshot {
  topicId: string;
  score: number | null;
  practiced: boolean; // FR-H07: chưa luyện lần nào ≠ yếu
  recentCorrect: number;
  recentTotal: number;
}

export type RecommendationKind = "error-log" | "weak-topic" | "foundation";

export interface Recommendation {
  topicId?: string; // absent for the error-log recommendation
  kind: RecommendationKind;
  reason: string;
}

const DEFAULT_ERROR_LOG_THRESHOLD = 10; // Mục 22 §4
const DEFAULT_MAX_RECOMMENDATIONS = 3; // FR-H06

export function recommendNextActions(params: {
  snapshots: TopicMasterySnapshot[];
  errorLogSize: number;
  /** Topics never practiced, in the curriculum's own priority order. */
  foundationOrder: string[];
  errorLogThreshold?: number;
  maxRecommendations?: number;
}): Recommendation[] {
  const max = params.maxRecommendations ?? DEFAULT_MAX_RECOMMENDATIONS;
  const errorThreshold = params.errorLogThreshold ?? DEFAULT_ERROR_LOG_THRESHOLD;
  const recs: Recommendation[] = [];

  // FR-H08: sổ lỗi vượt ngưỡng → lên đầu.
  if (params.errorLogSize >= errorThreshold) {
    recs.push({
      kind: "error-log",
      reason: `Sổ lỗi có ${params.errorLogSize} câu cần luyện lại`,
    });
  }

  // FR-H06: chuyên đề đã luyện ≥1 lần, thành thạo thấp nhất trước.
  const weakPracticed = params.snapshots
    .filter((s) => s.practiced && s.score !== null)
    .sort((a, b) => (a.score ?? 0) - (b.score ?? 0));
  for (const s of weakPracticed) {
    if (recs.length >= max) break;
    recs.push({
      topicId: s.topicId,
      kind: "weak-topic",
      reason: `vì con đúng ${s.recentCorrect}/${s.recentTotal} câu gần nhất ở chuyên đề này`,
    });
  }

  // FR-H07: chưa luyện lần nào → gợi ý theo lộ trình nền tảng, không phải vì "yếu".
  for (const topicId of params.foundationOrder) {
    if (recs.length >= max) break;
    recs.push({
      topicId,
      kind: "foundation",
      reason: "Chuyên đề nền tảng theo lộ trình, chưa luyện lần nào",
    });
  }

  return recs.slice(0, max);
}
