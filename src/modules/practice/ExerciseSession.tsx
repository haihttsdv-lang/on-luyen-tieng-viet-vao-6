import { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import type { Attempt, ErrorType, Exercise, QuestionLevel } from "@/data-access/types";
import { applyAttemptToErrorLog } from "@/core/error-analysis";
import { playCorrectSound, playIncorrectSound } from "@/modules/shared/sound";
import { ERROR_TYPES, ERROR_TYPE_LABELS } from "@/modules/practice/errorTypeLabels";
import McqQuestion from "@/modules/practice/questions/McqQuestion";
import MatchQuestion from "@/modules/practice/questions/MatchQuestion";
import OrderQuestion from "@/modules/practice/questions/OrderQuestion";
import FillQuestion from "@/modules/practice/questions/FillQuestion";
import ShortQuestion from "@/modules/practice/questions/ShortQuestion";

type ResultDot = "correct" | "incorrect" | "pending";

interface SessionLocationState {
  exerciseIds?: string[];
}

function useSessionExercises(): Exercise[] {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const state = location.state as SessionLocationState | null;

  return useMemo(() => {
    if (state?.exerciseIds) {
      return state.exerciseIds
        .map((id) => contentStore.getExercise(id))
        .filter((e): e is Exercise => e !== undefined);
    }
    const topicIds = (searchParams.get("topics") ?? "").split(",").filter(Boolean);
    const level = (searchParams.get("level") ?? undefined) as QuestionLevel | undefined;
    if (topicIds.length === 0) return [];
    return contentStore.getExercisesByTopics(topicIds, level);
    // Intentionally resolved once on mount — the exercise set for a session
    // shouldn't reshuffle if the URL/location changes mid-session.
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export default function ExerciseSession() {
  const navigate = useNavigate();
  const exercises = useSessionExercises();

  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<ResultDot[]>(() => exercises.map(() => "pending"));
  const [phase, setPhase] = useState<"answering" | "graded">("answering");
  const [lastCorrect, setLastCorrect] = useState(false);
  const [selectedErrorType, setSelectedErrorType] = useState<ErrorType | undefined>(undefined);
  const [exitConfirmOpen, setExitConfirmOpen] = useState(false);

  if (exercises.length === 0) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Luyện tập</h1>
        <p className="mt-2 text-slate-600">
          Chưa chọn chuyên đề nào. Quay lại{" "}
          <button className="text-brand-700 underline" onClick={() => navigate("/luyen-tap")}>
            trang chọn chuyên đề
          </button>
          .
        </p>
      </section>
    );
  }

  const exercise = exercises[index];
  const doneCount = results.filter((r) => r !== "pending").length;

  function handleGraded(correct: boolean) {
    setLastCorrect(correct);
    setSelectedErrorType(undefined);
    setPhase("graded");
    if (correct) playCorrectSound();
    else playIncorrectSound();
    setResults((prev) => {
      const next = [...prev];
      next[index] = correct ? "correct" : "incorrect";
      return next;
    });
  }

  function finalizeAndAdvance() {
    const attempt: Attempt = {
      id: `${exercise.id}-${Date.now()}`,
      exerciseId: exercise.id,
      topicIds: exercise.topicIds,
      correct: lastCorrect,
      timestamp: Date.now(),
      errorType: selectedErrorType,
    };
    progressStore.addAttempt(attempt);
    const nextErrorLog = applyAttemptToErrorLog(progressStore.getErrorLog(), attempt);
    progressStore.setErrorLog(nextErrorLog);

    setPhase("answering");
    if (index + 1 < exercises.length) {
      setIndex(index + 1);
    } else {
      navigate("/luyen-tap/ket-qua", {
        state: { total: exercises.length, correct: results.filter((r) => r === "correct").length + (lastCorrect ? 1 : 0) },
        replace: true,
      });
    }
  }

  return (
    <section>
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1" aria-label="Tiến trình làm bài">
          {results.map((r, i) => (
            <span
              key={i}
              className={`h-2 w-6 rounded-full ${
                r === "correct" ? "bg-emerald-500" : r === "incorrect" ? "bg-rose-500" : "bg-slate-200"
              } ${i === index ? "ring-2 ring-offset-1 ring-brand-400" : ""}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setExitConfirmOpen(true)}
          className="min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
        >
          Thoát
        </button>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Câu {index + 1}/{exercises.length} · Đã làm {doneCount}
      </p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
        {exercise.questionType === "mcq" && (
          <McqQuestion key={exercise.id} exercise={exercise} onGraded={handleGraded} />
        )}
        {exercise.questionType === "match" && (
          <MatchQuestion key={exercise.id} exercise={exercise} onGraded={handleGraded} />
        )}
        {exercise.questionType === "order" && (
          <OrderQuestion key={exercise.id} exercise={exercise} onGraded={handleGraded} />
        )}
        {exercise.questionType === "fill" && (
          <FillQuestion key={exercise.id} exercise={exercise} onGraded={handleGraded} />
        )}
        {exercise.questionType === "short" && (
          <ShortQuestion key={exercise.id} exercise={exercise} onGraded={handleGraded} />
        )}
      </div>

      {phase === "graded" && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className={`font-semibold ${lastCorrect ? "text-emerald-700" : "text-rose-700"}`}>
            {lastCorrect ? "Chính xác!" : "Chưa đúng."}
          </p>
          <p className="mt-1 text-sm text-slate-700">{exercise.explanation}</p>

          {!lastCorrect && (
            <div className="mt-3">
              <p className="mb-2 text-sm text-slate-600">Vì sao em nghĩ mình làm sai? (không bắt buộc)</p>
              <div className="flex flex-wrap gap-2">
                {ERROR_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedErrorType(type)}
                    className={`min-h-12 rounded-full border px-3 py-1.5 text-xs font-medium ${
                      selectedErrorType === type
                        ? "border-brand-600 bg-brand-100 text-brand-700"
                        : "border-slate-300 bg-white text-slate-600"
                    }`}
                  >
                    {ERROR_TYPE_LABELS[type]}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={finalizeAndAdvance}
            className="mt-4 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            {index + 1 < exercises.length ? "Câu tiếp theo" : "Xem kết quả"}
          </button>
        </div>
      )}

      {exitConfirmOpen && (
        <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/40 sm:items-center">
          <div className="w-full max-w-sm rounded-t-2xl bg-white p-5 sm:rounded-2xl">
            <p className="font-semibold text-slate-900">Thoát bài luyện tập?</p>
            <p className="mt-1 text-sm text-slate-600">
              Em đã làm {doneCount}/{exercises.length} câu. Kết quả các câu đã làm vẫn được lưu lại.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setExitConfirmOpen(false)}
                className="min-h-12 flex-1 rounded-lg border border-slate-300 text-sm font-medium text-slate-700"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                onClick={() => navigate("/luyen-tap")}
                className="min-h-12 flex-1 rounded-lg bg-rose-600 text-sm font-semibold text-white"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
