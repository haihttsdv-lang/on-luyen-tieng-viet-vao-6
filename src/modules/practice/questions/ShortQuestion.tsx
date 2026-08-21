import { useState } from "react";
import { suggestShortAnswerCheck, type KeywordSuggestion } from "@/core/answer-checker";
import type { Exercise } from "@/data-access/types";

interface Props {
  exercise: Extract<Exercise, { questionType: "short" }>;
  onGraded: (correct: boolean) => void;
}

// Mục 10.2 — chấm bán tự động: đối chiếu từ khóa → gợi ý → học sinh tự xác
// nhận. This component never asserts a verdict itself; only the student's
// own Đúng/Sai tap does (`onGraded`).
export default function ShortQuestion({ exercise, onGraded }: Props) {
  const [answer, setAnswer] = useState("");
  const [suggestion, setSuggestion] = useState<KeywordSuggestion | null>(null);
  const [confirmed, setConfirmed] = useState<boolean | null>(null);

  function checkSuggestion() {
    if (answer.trim().length === 0) return;
    setSuggestion(suggestShortAnswerCheck(answer, exercise.short));
  }

  function confirm(correct: boolean) {
    setConfirmed(correct);
    onGraded(correct);
  }

  return (
    <div>
      <p className="text-base text-slate-800">{exercise.prompt}</p>
      <textarea
        rows={3}
        disabled={confirmed !== null}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
        placeholder="Viết câu trả lời của em..."
      />

      {!suggestion && confirmed === null && (
        <button
          type="button"
          disabled={answer.trim().length === 0}
          onClick={checkSuggestion}
          className="mt-3 min-h-12 rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          Kiểm tra gợi ý
        </button>
      )}

      {suggestion && (
        <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
          {suggestion.matchedKeywords.length > 0 && (
            <p className="text-emerald-700">Đã có: {suggestion.matchedKeywords.join(", ")}</p>
          )}
          {suggestion.missingKeywords.length > 0 && (
            <p className="text-amber-700">Còn thiếu: {suggestion.missingKeywords.join(", ")}</p>
          )}
          <p className="mt-2 text-slate-600">Câu trả lời mẫu: {exercise.short.sampleAnswer}</p>

          {confirmed === null ? (
            <div className="mt-3">
              <p className="mb-2 font-medium text-slate-700">So với bài mẫu, câu trả lời của em:</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => confirm(true)}
                  className="min-h-12 flex-1 rounded-lg border border-emerald-500 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
                >
                  Đúng
                </button>
                <button
                  type="button"
                  onClick={() => confirm(false)}
                  className="min-h-12 flex-1 rounded-lg border border-rose-500 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700"
                >
                  Sai
                </button>
              </div>
            </div>
          ) : (
            <p className={`mt-3 font-medium ${confirmed ? "text-emerald-700" : "text-rose-700"}`}>
              Em đã tự chấm: {confirmed ? "Đúng" : "Sai"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
