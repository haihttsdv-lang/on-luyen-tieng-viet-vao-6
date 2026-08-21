import { useNavigate } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import { summarizeErrorsByTopic, summarizeErrorsByType } from "@/core/error-analysis";
import { ERROR_TYPE_LABELS } from "@/modules/practice/errorTypeLabels";

// FR-P05→P07: sổ lỗi — danh sách câu sai + phân tích theo chuyên đề/loại lỗi.
export default function ErrorLogPage() {
  const navigate = useNavigate();
  const errorLog = progressStore.getErrorLog();
  const attempts = progressStore.getAttempts();

  const entries = errorLog
    .map((entry) => ({ entry, exercise: contentStore.getExercise(entry.exerciseId) }))
    .filter((e) => e.exercise !== undefined);

  const byTopic = summarizeErrorsByTopic(attempts);
  const byType = summarizeErrorsByType(attempts);

  function retryErrorLog() {
    if (entries.length === 0) return;
    navigate("/luyen-tap/lam-bai", { state: { exerciseIds: entries.map((e) => e.entry.exerciseId) } });
  }

  return (
    <section>
      <h1 className="text-xl font-semibold text-slate-900">Sổ lỗi</h1>
      <p className="mt-1 text-sm text-slate-600">
        Các câu làm sai được tự động lưu ở đây. Làm đúng 2 lần liên tiếp sẽ được xoá khỏi sổ lỗi.
      </p>

      {entries.length === 0 ? (
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          Sổ lỗi đang trống — chưa có câu nào cần luyện lại.
        </p>
      ) : (
        <>
          <button
            type="button"
            onClick={retryErrorLog}
            className="mt-4 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Luyện lại {entries.length} câu trong sổ lỗi
          </button>

          <ul className="mt-4 flex flex-col gap-2" role="list">
            {entries.map(({ entry, exercise }) => (
              <li key={entry.exerciseId} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                <p className="text-slate-800">{exercise?.prompt}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {exercise?.topicIds.join(", ")} · đúng liên tiếp: {entry.consecutiveCorrect}/2
                  {entry.errorType && ` · ${ERROR_TYPE_LABELS[entry.errorType]}`}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}

      {(byTopic.length > 0 || byType.length > 0) && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {byTopic.length > 0 && (
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-sm font-semibold text-slate-800">Sai nhiều theo chuyên đề</p>
              <ul className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
                {byTopic.map((t) => (
                  <li key={t.topicId} className="flex justify-between">
                    <span>{t.topicId}</span>
                    <span className="font-medium">{t.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {byType.length > 0 && (
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="text-sm font-semibold text-slate-800">Sai nhiều theo loại lỗi</p>
              <ul className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
                {byType.map((t) => (
                  <li key={t.errorType} className="flex justify-between">
                    <span>{ERROR_TYPE_LABELS[t.errorType]}</span>
                    <span className="font-medium">{t.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
