import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { contentStore } from "@/data-access";
import type { Exercise, PresetExam, TestConfig, TopicGroup } from "@/data-access/types";
import { generateTest } from "@/core/test-generator";
import ExamAnswerInput from "@/modules/mock-test/ExamAnswerInput";
import ReadingPassage from "@/modules/shared/ReadingPassage";

interface LocationState {
  config: TestConfig;
  /** Mục 5.11: nếu có, dùng đúng danh sách câu hỏi cố định này thay vì sinh ngẫu nhiên. */
  presetExam?: PresetExam;
}

const topicGroupOf = (topicId: string): TopicGroup | undefined => contentStore.getTopic(topicId)?.group;

export default function ExamSession() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const config = state?.config;
  const presetExam = state?.presetExam;

  const generated = useMemo(() => {
    if (!config) return null;
    if (presetExam) return { exerciseIds: presetExam.exerciseIds, essayExerciseId: presetExam.essayExerciseId };
    return generateTest(contentStore.getExercises(), config, { topicGroupOf });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exercises = useMemo<Exercise[]>(() => {
    if (!generated) return [];
    return generated.exerciseIds
      .map((id) => contentStore.getExercise(id))
      .filter((e): e is Exercise => e !== undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const essayExercise = generated?.essayExerciseId ? contentStore.getExercise(generated.essayExerciseId) : undefined;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set());
  const [remainingSeconds, setRemainingSeconds] = useState((config?.durationMinutes ?? 0) * 60);
  const [warning, setWarning] = useState<string | null>(null);
  const [exitConfirmOpen, setExitConfirmOpen] = useState(false);
  const warnedRef = useRef<Set<number>>(new Set());
  const startedAtRef = useRef(Date.now());
  const submittedRef = useRef(false);
  // The countdown interval is set up once at mount (see the effect below)
  // and its closure would otherwise see `answers` frozen at that render —
  // reading through a ref instead means auto-submit-on-timeout always sees
  // the latest answers, not an empty object from mount.
  const answersRef = useRef<Record<string, unknown>>({});
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const allQuestionIds = useMemo(
    () => [...exercises.map((e) => e.id), ...(essayExercise ? [essayExercise.id] : [])],
    [exercises, essayExercise],
  );

  function submit() {
    if (submittedRef.current || !config) return;
    submittedRef.current = true;
    const durationUsedSeconds = Math.round((Date.now() - startedAtRef.current) / 1000);
    navigate("/thi-thu/ket-qua", {
      replace: true,
      state: { config, exercises, essayExercise, answers: answersRef.current, durationUsedSeconds },
    });
  }

  // FR-T03: countdown with 10-min/5-min warnings, auto-submit at zero.
  useEffect(() => {
    if (!config) return;
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => {
        const next = prev - 1;
        if (next === 600 && !warnedRef.current.has(600)) {
          warnedRef.current.add(600);
          setWarning("Còn 10 phút.");
        }
        if (next === 300 && !warnedRef.current.has(300)) {
          warnedRef.current.add(300);
          setWarning("Còn 5 phút.");
        }
        if (next <= 0) {
          clearInterval(interval);
          submit();
          return 0;
        }
        return next;
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  if (!config || exercises.length === 0) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Thi thử</h1>
        <p className="mt-2 text-slate-600">
          Không có đề để làm — hãy{" "}
          <button className="text-brand-700 underline" onClick={() => navigate("/thi-thu")}>
            chọn lại cấu hình
          </button>
          .
        </p>
      </section>
    );
  }

  const totalQuestions = allQuestionIds.length;
  const currentId = index < exercises.length ? exercises[index].id : essayExercise?.id;
  const currentExercise = index < exercises.length ? exercises[index] : essayExercise;
  const answeredCount = allQuestionIds.filter((id) => isAnswered(answers[id])).length;
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const seconds = String(remainingSeconds % 60).padStart(2, "0");
  const timeLow = remainingSeconds <= 300;

  return (
    <section>
      <div className="sticky top-14 z-10 flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
        <span className={`text-lg font-bold tabular-nums ${timeLow ? "text-rose-600" : "text-slate-800"}`}>
          {minutes}:{seconds}
        </span>
        <span className="text-xs text-slate-500">
          Đã làm {answeredCount}/{totalQuestions}
        </span>
        <button
          type="button"
          onClick={() => setExitConfirmOpen(true)}
          className="min-h-12 rounded-lg px-3 text-sm font-medium text-slate-500 hover:bg-slate-100"
        >
          Nộp bài
        </button>
      </div>

      {warning && (
        <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">{warning}</p>
      )}

      {/* FR-T04: bảng số thứ tự câu — đã làm / chưa làm / đánh dấu xem lại. */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {allQuestionIds.map((id, i) => {
          const answered = isAnswered(answers[id]);
          const marked = markedForReview.has(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => setIndex(i)}
              className={`flex h-9 w-9 items-center justify-center rounded-md border text-xs font-semibold ${
                i === index
                  ? "border-brand-600 ring-2 ring-brand-300"
                  : marked
                    ? "border-amber-400 bg-amber-50"
                    : answered
                      ? "border-emerald-400 bg-emerald-50"
                      : "border-slate-300 bg-white"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {currentExercise && currentId && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          {currentExercise.passageId && <ReadingPassage passageId={currentExercise.passageId} />}
          <div className="flex items-start justify-between gap-3">
            <p className="text-base text-slate-800">{currentExercise.prompt}</p>
            <button
              type="button"
              onClick={() =>
                setMarkedForReview((prev) => {
                  const next = new Set(prev);
                  if (next.has(currentId)) next.delete(currentId);
                  else next.add(currentId);
                  return next;
                })
              }
              className={`shrink-0 min-h-12 rounded-lg border px-2 py-1 text-xs font-medium ${
                markedForReview.has(currentId) ? "border-amber-400 bg-amber-50 text-amber-700" : "border-slate-300 text-slate-500"
              }`}
            >
              Đánh dấu
            </button>
          </div>
          <div data-testid="exam-answer-input">
            <ExamAnswerInput
              exercise={currentExercise}
              value={answers[currentId]}
              onChange={(value) => setAnswers((prev) => ({ ...prev, [currentId]: value }))}
            />
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-between gap-2">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
          className="min-h-12 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 disabled:opacity-40"
        >
          Câu trước
        </button>
        <button
          type="button"
          disabled={index >= totalQuestions - 1}
          onClick={() => setIndex((i) => i + 1)}
          className="min-h-12 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 disabled:opacity-40"
        >
          Câu sau
        </button>
      </div>

      {exitConfirmOpen && (
        <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/40 sm:items-center">
          <div className="w-full max-w-sm rounded-t-2xl bg-white p-5 sm:rounded-2xl">
            <p className="font-semibold text-slate-900">Nộp bài thi?</p>
            <p className="mt-1 text-sm text-slate-600">
              Em đã làm {answeredCount}/{totalQuestions} câu. Sau khi nộp sẽ không sửa được nữa.
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
                onClick={submit}
                className="min-h-12 flex-1 rounded-lg bg-brand-600 text-sm font-semibold text-white"
              >
                Nộp bài
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function isAnswered(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.some((v) => (typeof v === "string" ? v.trim().length > 0 : true));
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true; // e.g. mcq index 0 is falsy-looking but IS an answer
}
