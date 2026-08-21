import { useState } from "react";
import { Link } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import { computePhaseProgress } from "@/core/rewards";
import { ensureSchedule, updateScheduleSettings } from "@/modules/curriculum/scheduleService";
import { SESSION_TYPE_ICONS, SESSION_TYPE_LABELS } from "@/modules/curriculum/sessionLabels";
import RingProgress from "@/modules/curriculum/RingProgress";

const WEEKDAY_LABELS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const PHASE_LABELS: Record<1 | 2 | 3, string> = {
  1: "🧱 Nền tảng — chủ điểm trọng tâm",
  2: "📖 Đọc hiểu, cảm thụ và viết văn",
  3: "🎯 Luyện đề trường mục tiêu",
};

// FR-C06 (cài đặt lộ trình) + FR-C07 (bản đồ hành trình) + danh sách buổi học.
export default function JourneyOverview() {
  const [{ settings, result }, setState] = useState(() => ensureSchedule());
  const outcomes = progressStore.getSessionOutcomes();
  const testConfigs = contentStore.getTestConfigs();

  function apply(partial: Parameters<typeof updateScheduleSettings>[0]) {
    setState(updateScheduleSettings(partial));
  }

  function toggleDay(day: number) {
    const next = settings.daysOfWeek.includes(day)
      ? settings.daysOfWeek.filter((d) => d !== day)
      : [...settings.daysOfWeek, day].sort();
    if (next.length === 0) return; // must keep at least 1 day/week
    apply({ daysOfWeek: next });
  }

  const currentIndex = result.sessions.findIndex((s) => outcomes[s.id] === undefined);
  const lastIndex = currentIndex >= 0 ? currentIndex : result.sessions.length;
  const phaseProgress = computePhaseProgress(result.phaseBoundaries, result.sessions, outcomes);

  return (
    <section>
      <h1 className="text-xl font-semibold text-slate-900">Lộ trình học</h1>

      {result.warning && (
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">{result.warning}</p>
      )}

      {/* FR-C07: bản đồ hành trình. GM-07: vòng tiến độ theo giai đoạn. */}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        {result.phaseBoundaries.map((b) => {
          const totalInPhase = b.endIndex - b.startIndex + 1;
          const isCurrent = lastIndex >= b.startIndex && lastIndex <= b.endIndex;
          const percent = phaseProgress.find((p) => p.phase === b.phase)?.percent ?? 0;
          return (
            <div
              key={b.phase}
              className={`flex flex-1 items-center gap-3 rounded-xl border p-3 ${isCurrent ? "border-brand-500 bg-brand-50" : "border-slate-200 bg-white"}`}
            >
              <RingProgress percent={percent} />
              <div>
                <p className="text-sm font-semibold text-slate-800">{PHASE_LABELS[b.phase]}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {totalInPhase} buổi {isCurrent && "· đang ở đây"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <details className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
        <summary className="cursor-pointer text-sm font-semibold text-slate-800">Cài đặt lộ trình</summary>
        <div className="mt-3 flex flex-col gap-4">
          <div>
            <p className="mb-1 text-sm font-medium text-slate-700">Buổi học trong tuần</p>
            <div className="flex flex-wrap gap-1.5">
              {WEEKDAY_LABELS.map((label, day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`min-h-12 rounded-lg border px-3 py-2 text-xs font-medium ${
                    settings.daysOfWeek.includes(day) ? "border-brand-600 bg-brand-100 text-brand-700" : "border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <label className="text-sm text-slate-700">
            Ngày thi dự kiến
            <input
              type="date"
              value={settings.examDate ?? ""}
              onChange={(e) => apply({ examDate: e.target.value || undefined })}
              className="mt-1 min-h-12 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>

          <label className="text-sm text-slate-700">
            Trường mục tiêu (cấu hình đề mặc định)
            <select
              value={settings.testConfigId ?? ""}
              onChange={(e) => apply({ testConfigId: e.target.value || undefined })}
              className="mt-1 min-h-12 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              {testConfigs.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </details>

      <h2 className="mt-6 text-base font-semibold text-slate-900">Các buổi học</h2>
      <ul className="mt-2 flex max-h-[480px] flex-col gap-1.5 overflow-y-auto" role="list">
        {result.sessions.map((session) => {
          const done = outcomes[session.id] !== undefined;
          return (
            <li key={session.id}>
              <Link
                to={`/lo-trinh/${session.id}`}
                className={`flex min-h-12 items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                  session.index === lastIndex ? "border-brand-500 bg-brand-50" : "border-slate-200 bg-white"
                }`}
              >
                <span aria-hidden="true">{SESSION_TYPE_ICONS[session.type]}</span>
                <span className="flex-1">
                  <span className="block font-medium text-slate-800">{session.label}</span>
                  <span className="block text-xs text-slate-500">
                    {new Date(session.date).toLocaleDateString("vi-VN")} · {SESSION_TYPE_LABELS[session.type]}
                  </span>
                </span>
                {done && <span className="text-emerald-600">✓</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
