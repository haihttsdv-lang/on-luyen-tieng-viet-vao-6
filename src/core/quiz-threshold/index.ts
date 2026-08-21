// Pure pass/fail rule for the end-of-lesson quiz (FR-L04). No DOM, no
// storage — the caller (QuizPage) persists the resulting topic status.
//
// Rule: 80% correct to pass, except quizzes under 5 questions always allow
// missing exactly 1 (so a 3-question quiz needs 2/3, not a rounded-up 3/3).
// FR-L04 itself guarantees quizzes are 3–5 questions, so this is never
// exercised much below that in practice — the formula still behaves sanely
// at the extremes (never negative, never above the total).

export function requiredCorrectCount(totalQuestions: number): number {
  if (totalQuestions <= 0) return 0;
  if (totalQuestions < 5) return Math.max(totalQuestions - 1, 0);
  return Math.ceil(totalQuestions * 0.8);
}

export function isQuizPassed(correctCount: number, totalQuestions: number): boolean {
  return correctCount >= requiredCorrectCount(totalQuestions);
}
