import { useState } from "react";
import { checkOrderAnswer } from "@/core/answer-checker";
import type { Exercise } from "@/data-access/types";

interface Props {
  exercise: Extract<Exercise, { questionType: "order" }>;
  onGraded: (correct: boolean) => void;
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Tap items in sequence to build the order — no drag-and-drop, which is
// unreliable on Android touchscreens.
export default function OrderQuestion({ exercise, onGraded }: Props) {
  const [pool] = useState(() => shuffled(exercise.order.items));
  const [chosenIds, setChosenIds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const itemsById = new Map(exercise.order.items.map((i) => [i.id, i]));
  const remaining = pool.filter((item) => !chosenIds.includes(item.id));
  const complete = chosenIds.length === exercise.order.items.length;

  function addItem(id: string) {
    if (submitted || chosenIds.includes(id)) return;
    setChosenIds((prev) => [...prev, id]);
  }

  function removeLast() {
    if (submitted) return;
    setChosenIds((prev) => prev.slice(0, -1));
  }

  function handleSubmit() {
    setSubmitted(true);
    onGraded(checkOrderAnswer(chosenIds, exercise.order).status === "correct");
  }

  return (
    <div>
      <p className="text-base text-slate-800">{exercise.prompt}</p>

      <div className="mt-4 min-h-14 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-2">
        {chosenIds.length === 0 && (
          <p className="px-1 py-1 text-sm text-slate-400">Chạm vào các phần bên dưới theo đúng thứ tự.</p>
        )}
        <div className="flex flex-wrap gap-2">
          {chosenIds.map((id, i) => {
            const isCorrect = submitted && exercise.order.correctOrder[i] === id;
            return (
              <span
                key={id}
                className={`min-h-12 rounded-lg border px-3 py-2 text-sm font-medium ${
                  submitted
                    ? isCorrect
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-rose-500 bg-rose-50"
                    : "border-brand-400 bg-brand-50"
                }`}
              >
                {itemsById.get(id)?.label}
              </span>
            );
          })}
        </div>
      </div>

      {!submitted && (
        <>
          <div className="mt-3 flex flex-wrap gap-2" data-testid="order-pool">
            {remaining.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => addItem(item.id)}
                className="min-h-12 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              disabled={chosenIds.length === 0}
              onClick={removeLast}
              className="min-h-12 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 disabled:opacity-40"
            >
              Xoá phần cuối
            </button>
            <button
              type="button"
              disabled={!complete}
              onClick={handleSubmit}
              className="min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
            >
              Nộp bài
            </button>
          </div>
        </>
      )}
    </div>
  );
}
