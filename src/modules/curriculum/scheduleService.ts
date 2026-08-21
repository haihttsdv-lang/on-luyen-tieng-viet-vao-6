// Glue between core/schedule (pure) and the data-access stores — not itself
// pure, so it lives in modules/ rather than core/ (Mục 16.2).

import { contentStore, progressStore } from "@/data-access";
import { generateSchedule, type GeneratedSchedule } from "@/core/schedule";
import type { ScheduleSettings, TopicGroup } from "@/data-access/types";

const DEFAULT_DAYS_OF_WEEK = [1, 3, 5]; // Mục 7: mặc định 3 buổi/tuần (T2/T4/T6)
const DEFAULT_TEST_CONFIG_ID = "BALANCED";

export function todayISO(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function topicIdsByGroup(groups: TopicGroup[]): Partial<Record<TopicGroup, string[]>> {
  const topics = contentStore.getTopics();
  const result: Partial<Record<TopicGroup, string[]>> = {};
  for (const g of groups) result[g] = topics.filter((t) => t.group === g).map((t) => t.id);
  return result;
}

function runGenerator(settings: ScheduleSettings): GeneratedSchedule {
  return generateSchedule({
    startDate: settings.startDate,
    daysOfWeek: settings.daysOfWeek,
    examDate: settings.examDate,
    testConfigId: settings.testConfigId ?? DEFAULT_TEST_CONFIG_ID,
    phase1TopicsByGroup: topicIdsByGroup(["TC", "TL", "NT", "CA", "CD"]),
    knTopics: topicIdsByGroup(["KN"]).KN ?? [],
    phase2TopicsByGroup: topicIdsByGroup(["DH", "CT"]),
    vaTopics: topicIdsByGroup(["VA"]).VA ?? [],
    topicLabelOf: (id) => contentStore.getTopic(id)?.title ?? id,
  });
}

/** FR-C01: creates default settings + generates the schedule on first use;
 * afterwards just returns what's already stored. */
export function ensureSchedule(): { settings: ScheduleSettings; result: GeneratedSchedule } {
  let settings = progressStore.getScheduleSettings();
  if (!settings) {
    settings = { startDate: todayISO(), daysOfWeek: DEFAULT_DAYS_OF_WEEK, testConfigId: DEFAULT_TEST_CONFIG_ID };
    progressStore.setScheduleSettings(settings);
  }
  const stored = progressStore.getSchedule();
  if (stored.length > 0) {
    return { settings, result: { sessions: stored, phaseBoundaries: computeBoundaries(stored), compressed: false } };
  }
  const result = runGenerator(settings);
  progressStore.setSchedule(result.sessions);
  return { settings, result };
}

/** FR-C06: student changes exam date/target school/cadence — regenerates
 * and overwrites the stored schedule. startDate never changes after first
 * open. */
export function updateScheduleSettings(
  partial: Partial<Omit<ScheduleSettings, "startDate">>,
): { settings: ScheduleSettings; result: GeneratedSchedule } {
  const current = progressStore.getScheduleSettings() ?? {
    startDate: todayISO(),
    daysOfWeek: DEFAULT_DAYS_OF_WEEK,
    testConfigId: DEFAULT_TEST_CONFIG_ID,
  };
  const next: ScheduleSettings = { ...current, ...partial };
  progressStore.setScheduleSettings(next);
  const result = runGenerator(next);
  progressStore.setSchedule(result.sessions);
  return { settings: next, result };
}

function computeBoundaries(sessions: ReturnType<typeof progressStore.getSchedule>) {
  const boundaries: GeneratedSchedule["phaseBoundaries"] = [];
  for (const phase of [1, 2, 3] as const) {
    const indices = sessions.map((s, i) => (s.phase === phase ? i : -1)).filter((i) => i >= 0);
    if (indices.length > 0) boundaries.push({ phase, startIndex: indices[0], endIndex: indices[indices.length - 1] });
  }
  return boundaries;
}
