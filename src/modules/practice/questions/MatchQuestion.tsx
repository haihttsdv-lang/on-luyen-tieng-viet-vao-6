import { useState } from "react";
import { checkMatchAnswer } from "@/core/answer-checker";
import type { Exercise } from "@/data-access/types";

interface Props {
  exercise: Extract<Exercise, { questionType: "match" }>;
  onGraded: (correct: boolean) => void;
}

// Tap a left item to select it, then tap a right item to pair them —
// avoids drag-and-drop, which is unreliable on Android touchscreens.
export default function MatchQuestion({ exercise, onGraded }: Props) {
  const [activeLeftId, setActiveLeftId] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const { leftItems, rightItems } = exercise.match;
  const allPaired = leftItems.every((item) => pairs[item.id] !== undefined);
  const pairedRightIds = new Set(Object.values(pairs));

  function pairWith(rightId: string) {
    if (submitted || !activeLeftId) return;
    setPairs((prev) => ({ ...prev, [activeLeftId]: rightId }));
    setActiveLeftId(null);
  }

  function handleSubmit() {
    setSubmitted(true);
    const status = checkMatchAnswer(pairs, { pairs: exercise.match.correctPairs }).status;
    onGraded(status === "correct");
  }

  return (
    <div>
      <p className="text-base text-slate-800">{exercise.prompt}</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <ul className="flex flex-col gap-2" role="list" aria-label="Cột trái">
          {leftItems.map((item) => {
            const pairedRightId = pairs[item.id];
            const pairedLabel = rightItems.find((r) => r.id === pairedRightId)?.label;
            const isCorrect =
              submitted &&
              exercise.match.correctPairs.some(
                (p) => p.leftId === item.id && p.rightId === pairedRightId,
              );
            let stateClasses = "border-slate-300 bg-white";
            if (submitted) stateClasses = isCorrect ? "border-emerald-500 bg-emerald-50" : "border-rose-500 bg-rose-50";
            else if (activeLeftId === item.id) stateClasses = "border-brand-500 bg-brand-50";

            return (
              <li key={item.id}>
                <button
                  type="button"
                  disabled={submitted}
                  onClick={() => setActiveLeftId(item.id)}
                  className={`min-h-12 w-full rounded-lg border px-3 py-2 text-left text-sm font-medium text-slate-800 ${stateClasses}`}
                >
                  {item.label}
                  {pairedLabel && <span className="block text-xs text-slate-500">→ {pairedLabel}</span>}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-2" role="list" aria-label="Cột phải">
          {rightItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                disabled={submitted}
                onClick={() => pairWith(item.id)}
                className={`min-h-12 w-full rounded-lg border px-3 py-2 text-left text-sm font-medium text-slate-800 ${
                  pairedRightIds.has(item.id) ? "border-slate-400 bg-slate-100 text-slate-500" : "border-slate-300 bg-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {!submitted && (
        <button
          type="button"
          disabled={!allPaired}
          onClick={handleSubmit}
          className="mt-4 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          Nộp bài
        </button>
      )}
    </div>
  );
}
