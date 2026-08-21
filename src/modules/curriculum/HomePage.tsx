import { Link } from "react-router-dom";
import { progressStore } from "@/data-access";
import { determineTodayCard, type TodayCard } from "@/core/schedule";
import { ensureSchedule, todayISO } from "@/modules/curriculum/scheduleService";
import { SESSION_TYPE_ICONS, SESSION_TYPE_LABELS } from "@/modules/curriculum/sessionLabels";

const CARD_COPY: Record<TodayCard["state"], { title: string; tone: string }> = {
  today: { title: "Buổi học hôm nay", tone: "border-brand-500 bg-brand-50" },
  overdue: { title: "Đang trễ lịch", tone: "border-rose-400 bg-rose-50" },
  upcoming: { title: "Buổi học tiếp theo", tone: "border-slate-300 bg-white" },
  done: { title: "Đã hoàn thành lộ trình!", tone: "border-emerald-400 bg-emerald-50" },
};

// FR-C02 (thẻ buổi học hôm nay, 3 trạng thái) + FR-C08 (banner buổi đang dở).
export default function HomePage() {
  const { result } = ensureSchedule();
  const outcomes = progressStore.getSessionOutcomes();
  const card = determineTodayCard(result.sessions, outcomes, todayISO());
  const lastOpenedId = progressStore.getLastOpenedSessionId();
  const lastOpenedSession = lastOpenedId ? result.sessions.find((s) => s.id === lastOpenedId) : undefined;
  const copy = CARD_COPY[card.state];
  const progressPct = card.progress.total > 0 ? Math.round((card.progress.completed / card.progress.total) * 100) : 0;

  return (
    <section>
      <h1 className="text-xl font-semibold text-slate-900">Trang chủ</h1>

      {lastOpenedSession && lastOpenedSession.id !== card.session?.id && (
        <Link
          to={`/lo-trinh/${lastOpenedSession.id}`}
          className="mt-3 flex min-h-12 items-center rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800"
        >
          ↩ Quay lại buổi học đang dở: {lastOpenedSession.label}
        </Link>
      )}

      <div className={`mt-4 rounded-xl border p-4 ${copy.tone}`}>
        <p className="text-sm font-semibold text-slate-700">{copy.title}</p>

        {card.session ? (
          <>
            <p className="mt-2 flex items-center gap-2 text-base font-semibold text-slate-900">
              <span aria-hidden="true">{SESSION_TYPE_ICONS[card.session.type]}</span>
              {card.session.label}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {SESSION_TYPE_LABELS[card.session.type]} ·{" "}
              {new Date(card.session.date).toLocaleDateString("vi-VN")}
            </p>
            <Link
              to={`/lo-trinh/${card.session.id}`}
              className="mt-3 inline-flex min-h-12 items-center rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
            >
              Vào buổi học
            </Link>
          </>
        ) : (
          <p className="mt-2 text-sm text-slate-600">Em đã hoàn thành toàn bộ lộ trình đã lên kế hoạch!</p>
        )}

        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-brand-600" style={{ width: `${progressPct}%` }} />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Tiến độ toàn khóa: {card.progress.completed}/{card.progress.total} buổi ({progressPct}%)
          </p>
        </div>
      </div>

      <Link
        to="/lo-trinh"
        className="mt-3 flex min-h-12 items-center justify-center rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
      >
        Xem toàn bộ lộ trình
      </Link>
    </section>
  );
}
