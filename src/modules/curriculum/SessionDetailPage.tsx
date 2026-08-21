import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { progressStore } from "@/data-access";
import type { SessionOutcome } from "@/data-access/types";
import { computeSessionCoins } from "@/core/rewards";
import { notifyProgressChanged } from "@/data-access/cloud/syncMeta";
import { playCoinSound } from "@/modules/shared/sound";
import { destinationFor } from "@/modules/curriculum/sessionRoute";
import { SESSION_TYPE_LABELS } from "@/modules/curriculum/sessionLabels";

const OUTCOME_OPTIONS: Array<{ value: SessionOutcome; label: string }> = [
  { value: "xuat-sac", label: "Xuất sắc" },
  { value: "on", label: "Ổn" },
  { value: "can-on-lai", label: "Cần ôn lại" },
];

// FR-C03 (khối nội dung → đi thẳng tới đúng chỗ) + FR-C04 (tự đánh giá cuối
// buổi) + FR-C08 (banner "đang dở" trỏ về đúng trang này).
export default function SessionDetailPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const [outcome, setOutcome] = useState<SessionOutcome | null>(null);
  const [coinsAwarded, setCoinsAwarded] = useState<number | null>(null);

  const session = progressStore.getSchedule().find((s) => s.id === sessionId);

  useEffect(() => {
    if (session) progressStore.setLastOpenedSessionId(session.id);
  }, [session]);

  useEffect(() => {
    if (!session) return;
    const existing = progressStore.getSessionOutcomes()[session.id];
    if (existing) setOutcome(existing.outcome);
  }, [session]);

  if (!session) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Buổi học</h1>
        <p className="mt-2 text-slate-600">Không tìm thấy buổi học này.</p>
      </section>
    );
  }

  function goToContent() {
    const dest = destinationFor(session!);
    navigate(dest.to, dest.state ? { state: dest.state } : undefined);
  }

  function recordOutcome(value: SessionOutcome) {
    progressStore.setSessionOutcome(session!.id, value);
    progressStore.setLastOpenedSessionId(undefined);
    setOutcome(value);

    // GM-01/02/04: coins for finishing the session, scaled by self-assessment.
    const delta = computeSessionCoins(session!.type, value);
    progressStore.addCoins(delta);
    notifyProgressChanged();
    if (delta > 0) playCoinSound();
    setCoinsAwarded(delta);
  }

  return (
    <section>
      <button
        type="button"
        onClick={() => navigate("/lo-trinh")}
        className="mb-2 min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
      >
        ← Lộ trình học
      </button>
      <p className="text-xs font-medium uppercase text-slate-400">
        Giai đoạn {session.phase} · {new Date(session.date).toLocaleDateString("vi-VN")}
      </p>
      <h1 className="mt-1 text-xl font-semibold text-slate-900">{session.label}</h1>
      <p className="mt-1 text-sm text-slate-500">{SESSION_TYPE_LABELS[session.type]}</p>

      <button
        type="button"
        onClick={goToContent}
        className="mt-6 min-h-12 w-full rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
      >
        Bắt đầu buổi học
      </button>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">Sau khi học xong, em thấy buổi học này thế nào?</p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          {OUTCOME_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => recordOutcome(opt.value)}
              className={`min-h-12 flex-1 rounded-lg border px-4 py-2 text-sm font-semibold ${
                outcome === opt.value
                  ? "border-brand-600 bg-brand-100 text-brand-700"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {outcome && coinsAwarded !== null && (
          <p className={`mt-3 text-sm font-medium ${coinsAwarded >= 0 ? "text-emerald-700" : "text-amber-700"}`}>
            Đã ghi nhận — {coinsAwarded >= 0 ? `+${coinsAwarded}` : coinsAwarded} 🪙
          </p>
        )}
      </div>
    </section>
  );
}
