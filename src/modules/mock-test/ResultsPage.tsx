import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import type { Exercise, TestConfig, TopicGroup } from "@/data-access/types";
import { scoreExam } from "@/core/test-generator";
import { GROUP_LABELS } from "@/content/groupLabels";

interface LocationState {
  config: TestConfig;
  exercises: Exercise[];
  essayExercise?: Exercise;
  answers: Record<string, unknown>;
  durationUsedSeconds: number;
}

const topicGroupOf = (topicId: string): TopicGroup | undefined => contentStore.getTopic(topicId)?.group;

// FR-T06/T07: chấm tự động ngay; câu mở (short/essay) hiển thị đáp án mẫu +
// tiêu chí để học sinh tự chấm; điểm tự động và điểm tự chấm tách riêng.
export default function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [essayChecked, setEssayChecked] = useState<Set<number>>(new Set());
  const [shortVerdicts, setShortVerdicts] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(false);

  const score = useMemo(() => {
    if (!state) return null;
    return scoreExam(state.exercises, state.answers, topicGroupOf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state || !score) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Kết quả thi thử</h1>
        <p className="mt-2 text-slate-600">Không có dữ liệu bài thi. Hãy làm một đề thi thử trước.</p>
      </section>
    );
  }

  const { config, exercises, essayExercise, answers, durationUsedSeconds } = state;
  const shortExercises = exercises.filter((e) => e.questionType === "short");
  const essayContent =
    essayExercise?.questionType === "essay-short" || essayExercise?.questionType === "essay-long"
      ? essayExercise.essay
      : undefined;
  const essayRubric = essayContent?.rubric;
  const essayScoreMax = essayRubric?.reduce((sum, r) => sum + r.points, 0) ?? 0;
  const essaySelfScore = essayRubric
    ? essayRubric.reduce((sum, r, i) => sum + (essayChecked.has(i) ? r.points : 0), 0)
    : 0;
  const shortSelfScore = shortExercises.filter((e) => shortVerdicts[e.id]).length;
  const selfScore = essaySelfScore + shortSelfScore;
  const selfScoreMax = essayScoreMax + shortExercises.length;

  function saveToHistory() {
    if (!score) return;
    progressStore.addTestResult({
      id: `result-${Date.now()}`,
      configId: config.id,
      configLabel: config.label,
      date: Date.now(),
      autoScore: score.autoScore,
      autoScoreMax: score.autoScoreMax,
      selfScore,
      selfScoreMax,
      byTopicGroup: score.byTopicGroup,
      byLevel: score.byLevel,
      durationUsedSeconds,
    });
    setSaved(true);
  }

  const minutesUsed = Math.floor(durationUsedSeconds / 60);
  const secondsUsed = durationUsedSeconds % 60;

  return (
    <section>
      <h1 className="text-xl font-semibold text-slate-900">Kết quả — {config.label}</h1>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <ScoreTile label="Điểm tự động" value={`${score.autoScore}/${score.autoScoreMax}`} />
        <ScoreTile label="Điểm tự chấm" value={`${selfScore}/${selfScoreMax}`} />
        <ScoreTile label="Tổng" value={`${score.autoScore + selfScore}/${score.autoScoreMax + selfScoreMax}`} />
        <ScoreTile label="Thời gian dùng" value={`${minutesUsed}p${secondsUsed}s`} />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-sm font-semibold text-slate-800">Theo nhóm chuyên đề</p>
          <ul className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
            {Object.entries(score.byTopicGroup).map(([group, s]) => (
              <li key={group} className="flex justify-between">
                <span>{GROUP_LABELS[group as TopicGroup] ?? group}</span>
                <span className="font-medium">
                  {s.correct}/{s.total}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-sm font-semibold text-slate-800">Theo mức độ</p>
          <ul className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
            {Object.entries(score.byLevel).map(([level, s]) => (
              <li key={level} className="flex justify-between">
                <span>{level}</span>
                <span className="font-medium">
                  {s.correct}/{s.total}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FR-T07: bảng xem lại từng câu. */}
      <h2 className="mt-6 text-base font-semibold text-slate-900">Xem lại từng câu</h2>
      <ul className="mt-2 flex flex-col gap-2" role="list">
        {exercises
          .filter((e) => e.questionType !== "short")
          .map((exercise) => {
            const graded = score.graded.find((g) => g.exerciseId === exercise.id);
            if (!graded) return null;
            return (
              <li
                key={exercise.id}
                className={`rounded-lg border p-3 text-sm ${graded.correct ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}
              >
                <p className="text-slate-800">{exercise.prompt}</p>
                <p className={`mt-1 font-medium ${graded.correct ? "text-emerald-700" : "text-rose-700"}`}>
                  {graded.correct ? "Đúng" : "Sai"}
                </p>
                <p className="mt-1 text-slate-600">{exercise.explanation}</p>
              </li>
            );
          })}
      </ul>

      {shortExercises.length > 0 && (
        <>
          <h2 className="mt-6 text-base font-semibold text-slate-900">Câu trả lời ngắn — em tự chấm</h2>
          <ul className="mt-2 flex flex-col gap-2" role="list">
            {shortExercises.map((exercise) => (
              <li key={exercise.id} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                <p className="text-slate-800">{exercise.prompt}</p>
                <p className="mt-1 text-slate-600">Bài làm của em: {String(answers[exercise.id] ?? "(bỏ trống)")}</p>
                <p className="mt-1 text-slate-600">Đáp án mẫu: {exercise.short.sampleAnswer}</p>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShortVerdicts((prev) => ({ ...prev, [exercise.id]: true }))}
                    className={`min-h-12 flex-1 rounded-lg border px-4 py-2 text-sm font-semibold ${shortVerdicts[exercise.id] === true ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-300 text-slate-600"}`}
                  >
                    Đúng
                  </button>
                  <button
                    type="button"
                    onClick={() => setShortVerdicts((prev) => ({ ...prev, [exercise.id]: false }))}
                    className={`min-h-12 flex-1 rounded-lg border px-4 py-2 text-sm font-semibold ${shortVerdicts[exercise.id] === false ? "border-rose-500 bg-rose-50 text-rose-700" : "border-slate-300 text-slate-600"}`}
                  >
                    Sai
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {essayExercise && essayContent && essayRubric && (
        <>
          <h2 className="mt-6 text-base font-semibold text-slate-900">Bài viết — em tự chấm theo tiêu chí</h2>
          <div className="mt-2 rounded-lg border border-slate-200 bg-white p-3 text-sm">
            <p className="whitespace-pre-wrap text-slate-800">{String(answers[essayExercise.id] ?? "(bỏ trống)")}</p>
            <p className="mt-3 font-semibold text-slate-800">Bài mẫu</p>
            <p className="mt-1 whitespace-pre-wrap text-slate-600">{essayContent.sampleAnswer}</p>
            <ul className="mt-3 flex flex-col gap-1" role="list">
              {essayRubric.map((r, i) => (
                <li key={r.criterion}>
                  <label className="flex min-h-12 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      checked={essayChecked.has(i)}
                      onChange={() =>
                        setEssayChecked((prev) => {
                          const next = new Set(prev);
                          if (next.has(i)) next.delete(i);
                          else next.add(i);
                          return next;
                        })
                      }
                    />
                    <span className="flex-1">{r.criterion}</span>
                    <span className="font-medium text-slate-500">{r.points} điểm</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {saved ? (
        <p className="mt-6 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
          Đã lưu vào lịch sử thi thử.
        </p>
      ) : (
        <button
          type="button"
          onClick={saveToHistory}
          className="mt-6 min-h-12 w-full rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Lưu kết quả vào lịch sử
        </button>
      )}

      <button
        type="button"
        onClick={() => navigate("/thi-thu")}
        className="mt-3 min-h-12 w-full rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
      >
        Về trang Thi thử
      </button>
    </section>
  );
}

function ScoreTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
      <p className="text-lg font-bold text-brand-700">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
