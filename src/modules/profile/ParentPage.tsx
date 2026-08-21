import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentStore, progressStore, writingStore } from "@/data-access";
import type { StudentWriting } from "@/data-access/types";
import { computeAllTopicSnapshots } from "@/modules/profile/profileService";

function daysAgo(n: number): number {
  return Date.now() - n * 24 * 60 * 60 * 1000;
}

// FR-H09 (trang phụ huynh, ngôn ngữ dễ hiểu, in được) + FR-H10 (hộp nhận
// xét bài viết).
export default function ParentPage() {
  const navigate = useNavigate();
  const [writings, setWritings] = useState<StudentWriting[]>([]);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    writingStore.getSubmittedWritings().then(setWritings);
  }, []);

  const sessionsThisWeek = progressStore
    .getSchedule()
    .filter((s) => progressStore.getSessionOutcomes()[s.id]?.completedAt >= daysAgo(7)).length;

  const testResults = [...progressStore.getTestResults()].sort((a, b) => a.date - b.date);

  const snapshots = computeAllTopicSnapshots()
    .filter((s) => s.practiced)
    .map((s) => ({ ...s, value: s.isActivityBased ? s.activity!.ratio : (s.mastery!.score ?? 1) }))
    .sort((a, b) => a.value - b.value)
    .slice(0, 3);

  async function saveComment(writingId: string) {
    const comment = drafts[writingId] ?? "";
    if (comment.trim().length === 0) return;
    await writingStore.setParentComment(writingId, comment);
    setWritings(await writingStore.getSubmittedWritings());
    setSavedIds((prev) => new Set(prev).add(writingId));
  }

  return (
    <section>
      <button
        type="button"
        onClick={() => navigate("/ho-so")}
        className="no-print mb-2 min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
      >
        ← Hồ sơ
      </button>
      <h1 className="text-xl font-semibold text-slate-900">Trang phụ huynh</h1>
      <p className="mt-1 text-sm text-slate-600">Tổng quan quá trình học của con, cập nhật tự động.</p>

      <button
        type="button"
        onClick={() => window.print()}
        className="no-print mt-3 min-h-12 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
      >
        In trang này
      </button>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
          <p className="text-2xl font-bold text-brand-700">{sessionsThisWeek}</p>
          <p className="text-xs text-slate-500">buổi học trong 7 ngày qua</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
          <p className="text-2xl font-bold text-brand-700">{testResults.length}</p>
          <p className="text-xs text-slate-500">lần thi thử đã làm</p>
        </div>
      </div>

      {testResults.length > 0 && (
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-sm font-semibold text-slate-800">Điểm các lần thi thử gần đây</p>
          <ul className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
            {testResults.slice(-5).map((r) => (
              <li key={r.id} className="flex justify-between">
                <span>{new Date(r.date).toLocaleDateString("vi-VN")}</span>
                <span>
                  {r.autoScore}/{r.autoScoreMax} tự động
                  {r.selfScoreMax > 0 && ` · ${r.selfScore}/${r.selfScoreMax} tự chấm`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="text-sm font-semibold text-slate-800">Chuyên đề con cần chú ý</p>
        {snapshots.length === 0 ? (
          <p className="mt-1 text-sm text-slate-500">Con chưa luyện đủ để xác định — vẫn ổn ở giai đoạn đầu.</p>
        ) : (
          <ul className="mt-2 flex flex-col gap-1 text-sm text-slate-600" role="list">
            {snapshots.map((s) => (
              <li key={s.topicId}>{contentStore.getTopic(s.topicId)?.title}</li>
            ))}
          </ul>
        )}
      </div>

      <h2 className="mt-6 text-base font-semibold text-slate-900">Bài viết của con</h2>
      {writings.length === 0 ? (
        <p className="mt-2 text-sm text-slate-500">Con chưa nộp bài viết nào.</p>
      ) : (
        <ul className="mt-2 flex flex-col gap-3" role="list">
          {writings.map((w) => {
            const exercise = contentStore.getExercise(w.exerciseId);
            return (
              <li key={w.id} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                <p className="text-xs text-slate-400">{new Date(w.submittedAt ?? w.savedAt).toLocaleDateString("vi-VN")}</p>
                <p className="font-medium text-slate-800">{exercise?.prompt}</p>
                <p className="mt-1 whitespace-pre-wrap text-slate-700">{w.content}</p>

                {w.parentComment && (
                  <p className="mt-2 rounded-lg bg-brand-50 px-2 py-1 text-brand-800">
                    Nhận xét đã lưu: {w.parentComment}
                  </p>
                )}

                <textarea
                  rows={2}
                  value={drafts[w.id] ?? w.parentComment ?? ""}
                  onChange={(e) => setDrafts((prev) => ({ ...prev, [w.id]: e.target.value }))}
                  placeholder="Viết nhận xét cho con..."
                  className="no-print mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={() => saveComment(w.id)}
                  className="no-print mt-2 min-h-12 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
                >
                  Lưu nhận xét
                </button>
                {savedIds.has(w.id) && <span className="no-print ml-2 text-sm text-emerald-700">Đã lưu</span>}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
