import { useState, type KeyboardEvent } from "react";
import { checkFillAnswer, type CheckStatus } from "@/core/answer-checker";
import type { Exercise } from "@/data-access/types";

interface Props {
  exercise: Extract<Exercise, { questionType: "fill" }>;
  onGraded: (correct: boolean) => void;
}

// UX-08: Enter submits, no need to reach for a button. FR-A06: no browser
// autocapitalize/autocorrect/spellcheck — they actively corrupt Vietnamese
// diacritics and chính tả answers (FR-M05 needs exact spelling).
const NO_BROWSER_TEXT_ASSIST = {
  autoCapitalize: "off",
  autoCorrect: "off",
  spellCheck: false,
} as const;

export default function FillQuestion({ exercise, onGraded }: Props) {
  const expectedCount = exercise.fill.isSet ? (exercise.fill.expectedCount ?? 1) : 1;
  const [values, setValues] = useState<string[]>(() => Array(expectedCount).fill(""));
  const [status, setStatus] = useState<CheckStatus | null>(null);
  const [formatMessage, setFormatMessage] = useState<string | null>(null);

  function submit() {
    const userAnswer = exercise.fill.isSet ? values : values[0];
    const result = checkFillAnswer(userAnswer, exercise.fill);
    if (result.status === "invalid-format") {
      setFormatMessage(result.message ?? "Câu trả lời chưa hợp lệ.");
      return;
    }
    setFormatMessage(null);
    setStatus(result.status);
    onGraded(result.status === "correct");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") submit();
  }

  const answered = status !== null;

  return (
    <div>
      <p className="text-base text-slate-800">{exercise.prompt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {values.map((value, i) => (
          <input
            key={i}
            type="text"
            inputMode="text"
            enterKeyHint="done"
            disabled={answered}
            value={value}
            onChange={(e) => {
              const next = [...values];
              next[i] = e.target.value;
              setValues(next);
            }}
            onKeyDown={handleKeyDown}
            {...NO_BROWSER_TEXT_ASSIST}
            className={`min-h-12 flex-1 rounded-lg border px-3 py-2 text-base ${
              answered
                ? status === "correct"
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-rose-500 bg-rose-50"
                : "border-slate-300 bg-white"
            }`}
            placeholder={exercise.fill.isSet ? `Từ ${i + 1}` : "Nhập câu trả lời"}
          />
        ))}
      </div>
      {formatMessage && <p className="mt-2 text-sm text-amber-600">{formatMessage}</p>}
      {!answered && (
        <button
          type="button"
          onClick={submit}
          className="mt-3 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white"
        >
          Nộp câu trả lời
        </button>
      )}
    </div>
  );
}
