import { useState } from "react";
import { checkMcqAnswer } from "@/core/answer-checker";
import type { Exercise } from "@/data-access/types";

interface Props {
  exercise: Extract<Exercise, { questionType: "mcq" }>;
  onGraded: (correct: boolean) => void;
}

// FR-P04: explanation shown for the correct option AND every wrong option
// the student could have picked.
export default function McqQuestion({ exercise, onGraded }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  function handleSelect(index: number) {
    if (answered) return;
    setSelected(index);
    onGraded(checkMcqAnswer(index, exercise.mcq).status === "correct");
  }

  return (
    <div>
      <p className="text-base text-slate-800">{exercise.prompt}</p>
      <ul className="mt-4 flex flex-col gap-2" role="list">
        {exercise.mcq.options.map((option, index) => {
          const isCorrect = index === exercise.mcq.answerIndex;
          const isChosen = index === selected;
          let stateClasses = "border-slate-300 bg-white hover:bg-slate-50";
          if (answered && isCorrect) stateClasses = "border-emerald-500 bg-emerald-50";
          else if (answered && isChosen) stateClasses = "border-rose-500 bg-rose-50";

          return (
            <li key={option}>
              <button
                type="button"
                disabled={answered}
                onClick={() => handleSelect(index)}
                className={`min-h-12 w-full rounded-lg border px-4 py-3 text-left text-sm font-medium text-slate-800 transition-colors ${stateClasses}`}
              >
                <span className="mr-2 hidden text-slate-400 sm:inline">{index + 1}.</span>
                {option}
              </button>
              {answered && (isChosen || isCorrect) && (
                <p className="mt-1 px-1 text-xs text-slate-600">
                  {exercise.mcq.distractorNotes[index]}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
