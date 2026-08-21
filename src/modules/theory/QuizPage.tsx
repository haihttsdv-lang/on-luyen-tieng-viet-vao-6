import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import type { Attempt, Exercise, QuestionType } from "@/data-access/types";
import { applyAttemptToErrorLog } from "@/core/error-analysis";
import { isQuizPassed, requiredCorrectCount } from "@/core/quiz-threshold";
import { playCorrectSound, playIncorrectSound } from "@/modules/shared/sound";
import McqQuestion from "@/modules/practice/questions/McqQuestion";
import MatchQuestion from "@/modules/practice/questions/MatchQuestion";
import OrderQuestion from "@/modules/practice/questions/OrderQuestion";
import FillQuestion from "@/modules/practice/questions/FillQuestion";

const QUIZ_ELIGIBLE_TYPES: QuestionType[] = ["mcq", "match", "order", "fill"];
const MAX_QUIZ_QUESTIONS = 5; // FR-L04: quiz cuối bài 3–5 câu

export default function QuizPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = topicId ? contentStore.getTopic(topicId) : undefined;

  const exercises = useMemo<Exercise[]>(() => {
    if (!topicId) return [];
    return contentStore
      .getExercisesByTopics([topicId])
      .filter((e) => QUIZ_ELIGIBLE_TYPES.includes(e.questionType))
      .slice(0, MAX_QUIZ_QUESTIONS);
  }, [topicId]);

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase] = useState<"answering" | "graded">("answering");
  const [lastCorrect, setLastCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!topic) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Quiz</h1>
        <p className="mt-2 text-slate-600">Không tìm thấy chuyên đề này.</p>
      </section>
    );
  }

  if (exercises.length === 0) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Quiz — {topic.title}</h1>
        <p className="mt-2 text-slate-600">Chuyên đề này chưa có câu hỏi để làm quiz.</p>
      </section>
    );
  }

  // Rebound so nested closures below (finalizeAndAdvance) see a
  // non-undefined type — TS doesn't carry the `if (!topic) return` narrowing
  // into function declarations created later in the same scope.
  const currentTopic = topic;
  const required = requiredCorrectCount(exercises.length);

  if (!started) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Quiz — {topic.title}</h1>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p>Bài quiz có {exercises.length} câu.</p>
          <p className="mt-1 font-medium text-brand-700">
            Cần trả lời đúng ít nhất {required}/{exercises.length} câu để đạt trạng thái "Đã nắm".
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-4 min-h-12 w-full rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Bắt đầu
        </button>
      </section>
    );
  }

  if (finished) {
    const passed = isQuizPassed(correctCount, exercises.length);
    return (
      <section className="text-center">
        <h1 className="text-xl font-semibold text-slate-900">Kết quả quiz</h1>
        <p className="mt-4 text-4xl font-bold text-brand-700">
          {correctCount}/{exercises.length}
        </p>
        <p className={`mt-2 font-semibold ${passed ? "text-emerald-700" : "text-amber-700"}`}>
          {passed ? "Đạt — chuyên đề đã chuyển sang \"Đã nắm\"!" : "Chưa đạt ngưỡng — hãy ôn lại bài học và thử lại."}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Link
            to={`/ly-thuyet/${topic.id}`}
            className="min-h-12 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700"
          >
            Về bài học
          </Link>
          <Link
            to="/ly-thuyet"
            className="min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            Danh sách chuyên đề
          </Link>
        </div>
      </section>
    );
  }

  const exercise = exercises[index];

  function handleGraded(correct: boolean) {
    setLastCorrect(correct);
    setPhase("graded");
    if (correct) playCorrectSound();
    else playIncorrectSound();
  }

  function finalizeAndAdvance() {
    const attempt: Attempt = {
      id: `${exercise.id}-${Date.now()}`,
      exerciseId: exercise.id,
      topicIds: exercise.topicIds,
      correct: lastCorrect,
      timestamp: Date.now(),
    };
    progressStore.addAttempt(attempt);
    progressStore.setErrorLog(applyAttemptToErrorLog(progressStore.getErrorLog(), attempt));

    const nextCorrectCount = correctCount + (lastCorrect ? 1 : 0);
    setCorrectCount(nextCorrectCount);
    setPhase("answering");

    if (index + 1 < exercises.length) {
      setIndex(index + 1);
    } else {
      if (isQuizPassed(nextCorrectCount, exercises.length)) {
        progressStore.setTopicStatus(currentTopic.id, "da-nam");
      }
      setFinished(true);
    }
  }

  return (
    <section>
      <p className="text-sm text-slate-500">
        Câu {index + 1}/{exercises.length}
      </p>

      <div className="mt-2 rounded-xl border border-slate-200 bg-white p-4">
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
      </div>

      {phase === "graded" && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className={`font-semibold ${lastCorrect ? "text-emerald-700" : "text-rose-700"}`}>
            {lastCorrect ? "Chính xác!" : "Chưa đúng."}
          </p>
          <p className="mt-1 text-sm text-slate-700">{exercise.explanation}</p>
          {!lastCorrect && (
            <button
              type="button"
              onClick={() => navigate(`/ly-thuyet/${topic.id}`)}
              className="mt-2 text-sm font-medium text-brand-700 underline"
            >
              Xem lại bài học
            </button>
          )}
          <button
            type="button"
            onClick={finalizeAndAdvance}
            className="mt-4 block min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
          >
            {index + 1 < exercises.length ? "Câu tiếp theo" : "Xem kết quả"}
          </button>
        </div>
      )}
    </section>
  );
}
