import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentStore, progressStore } from "@/data-access";
import type { Exercise, QuestionLevel, QuestionType, TopicGroup } from "@/data-access/types";
import { checkFillAnswer, checkMcqAnswer } from "@/core/answer-checker";
import { computeStreakCoins } from "@/core/rewards";
import { notifyProgressChanged } from "@/data-access/cloud/syncMeta";
import { playCoinSound, playCorrectSound, playIncorrectSound } from "@/modules/shared/sound";

// GM-09: trả lời nhanh nhiều câu M1–M2 nhóm TC/TL/NT/CA trong thời gian
// giới hạn. Coins theo streak, dùng đúng công thức đã kiểm chứng ở app
// tham chiếu (core/rewards.computeStreakCoins).
const DURATION_SECONDS = 60;
const SPEED_GROUPS: TopicGroup[] = ["TC", "TL", "NT", "CA"];
const SPEED_LEVELS: QuestionLevel[] = ["M1", "M2"];
const SPEED_TYPES: QuestionType[] = ["mcq", "fill"];

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SpeedChallengePage() {
  const navigate = useNavigate();
  const pool = useMemo(() => {
    const eligible = contentStore
      .getExercises()
      .filter(
        (e) =>
          SPEED_TYPES.includes(e.questionType) &&
          SPEED_LEVELS.includes(e.level) &&
          e.topicIds.some((id) => SPEED_GROUPS.includes(contentStore.getTopic(id)?.group as TopicGroup)),
      );
    return shuffled(eligible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(DURATION_SECONDS);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [finished, setFinished] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [flash, setFlash] = useState<"correct" | "incorrect" | null>(null);
  const coinsSaved = useRef(false);

  useEffect(() => {
    if (!started || finished) return;
    const interval = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(interval);
          setFinished(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, finished]);

  // Guard against double-save from effect re-invocation (StrictMode) —
  // known sharp edge documented in docs/reference-app-notes.md §8.
  useEffect(() => {
    if (finished && !coinsSaved.current) {
      coinsSaved.current = true;
      progressStore.addCoins(totalCoins);
      notifyProgressChanged();
    }
  }, [finished, totalCoins]);

  if (pool.length === 0) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">Thử thách tốc độ</h1>
        <p className="mt-2 text-slate-600">Chưa đủ câu hỏi phù hợp để bắt đầu chế độ này.</p>
      </section>
    );
  }

  if (!started) {
    return (
      <section>
        <h1 className="text-xl font-semibold text-slate-900">⚡ Thử thách tốc độ</h1>
        <p className="mt-2 text-slate-600">
          Trả lời càng nhiều câu càng tốt trong {DURATION_SECONDS} giây. Trả lời đúng liên tiếp để nhận thêm xu!
        </p>
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
    return (
      <section className="text-center">
        <h1 className="text-xl font-semibold text-slate-900">Hết giờ!</h1>
        <p className="mt-4 text-4xl font-bold text-brand-700">{correctCount} câu đúng</p>
        <p className="mt-2 text-lg font-semibold text-amber-700">+{totalCoins} 🪙</p>
        <button
          type="button"
          onClick={() => navigate("/luyen-tap")}
          className="mt-6 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Về Luyện tập
        </button>
      </section>
    );
  }

  const exercise: Exercise | undefined = pool[index % pool.length];

  function handleGraded(correct: boolean) {
    setFlash(correct ? "correct" : "incorrect");
    setTimeout(() => setFlash(null), 250);
    if (correct) {
      playCorrectSound();
      // Coins escalate with each consecutive correct answer, so use the
      // streak count *including this one* (1st correct = streak 1).
      const nextStreak = streak + 1;
      const coins = computeStreakCoins(nextStreak);
      setStreak(nextStreak);
      setCorrectCount((c) => c + 1);
      setTotalCoins((c) => c + coins);
      playCoinSound();
    } else {
      playIncorrectSound();
      setStreak(0);
    }
    setInputValue("");
    setIndex((i) => i + 1);
  }

  function submitMcq(optionIndex: number) {
    if (exercise?.questionType !== "mcq") return;
    handleGraded(checkMcqAnswer(optionIndex, exercise.mcq).status === "correct");
  }

  function submitFill() {
    if (exercise?.questionType !== "fill") return;
    handleGraded(checkFillAnswer(inputValue, exercise.fill).status === "correct");
  }

  return (
    <section>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold tabular-nums text-rose-600">{remaining}s</span>
        <span className="text-sm text-slate-600">
          Đúng: {correctCount} · Chuỗi: {streak}
        </span>
      </div>

      {exercise && (
        <div
          className={`mt-4 rounded-xl border p-4 transition-colors ${
            flash === "correct" ? "border-emerald-400 bg-emerald-50" : flash === "incorrect" ? "border-rose-400 bg-rose-50" : "border-slate-200 bg-white"
          }`}
        >
          <p className="text-base text-slate-800">{exercise.prompt}</p>
          {exercise.questionType === "mcq" && (
            <div className="mt-4 flex flex-col gap-2">
              {exercise.mcq.options.map((option, i) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => submitMcq(i)}
                  className="min-h-12 rounded-lg border border-slate-300 bg-white px-4 py-2 text-left text-sm font-medium"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          {exercise.questionType === "fill" && (
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitFill()}
                enterKeyHint="done"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                className="min-h-12 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-base"
              />
              <button
                type="button"
                onClick={submitFill}
                className="min-h-12 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Nộp
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
