// Pure grading logic for all 5 question types (Mục 10.2, FR-P02). No DOM, no
// network, no React (Mục 16.2). Depends only on core/text-normalize.

import { normalizeForComparison, textsEqual } from "../text-normalize";

export type CheckStatus = "correct" | "incorrect" | "invalid-format";

export interface CheckResult {
  status: CheckStatus;
  /** FR-M08: guidance shown for invalid-format results — never counted as a
   * wrong answer. */
  message?: string;
}

// ---------------------------------------------------------------------------
// fill — chấm tự động có điều kiện (FR-M01→M09)
// ---------------------------------------------------------------------------

export interface FillAnswerSpec {
  acceptedAnswers: string[];
  /** FR-M05/FR-M06: exact-match mode, used for the CD (chính tả) group. */
  strictMode: boolean;
  /** FR-M07: answer is a set of words rather than a single value. */
  isSet: boolean;
  /** Required for isSet answers, e.g. "tìm 3 từ láy trong đoạn". */
  expectedCount?: number;
}

export type FillUserAnswer = string | string[];

export function checkFillAnswer(
  userAnswer: FillUserAnswer,
  spec: FillAnswerSpec,
): CheckResult {
  if (spec.isSet) {
    return checkSetAnswer(
      Array.isArray(userAnswer) ? userAnswer : [userAnswer],
      spec,
    );
  }

  const raw = Array.isArray(userAnswer) ? userAnswer.join(" ") : userAnswer;
  if (raw.trim().length === 0) {
    return { status: "invalid-format", message: "Hãy nhập câu trả lời trước khi nộp." };
  }

  const isMatch = spec.acceptedAnswers.some((accepted) =>
    textsEqual(raw, accepted, { strictMode: spec.strictMode }),
  );
  return { status: isMatch ? "correct" : "incorrect" };
}

function checkSetAnswer(rawAnswers: string[], spec: FillAnswerSpec): CheckResult {
  const expected = spec.expectedCount ?? spec.acceptedAnswers.length;

  const trimmed = rawAnswers.map((a) => a.trim());
  if (trimmed.some((a) => a.length === 0)) {
    return { status: "invalid-format", message: "Bạn còn để trống một số ô, hãy điền đủ." };
  }
  if (trimmed.length !== expected) {
    return { status: "invalid-format", message: `Cần nhập đúng ${expected} từ.` };
  }

  const normalized = trimmed.map((a) => normalizeForComparison(a, { strictMode: spec.strictMode }));
  const distinct = new Set(normalized);
  if (distinct.size !== expected) {
    return { status: "invalid-format", message: "Các từ bạn nhập bị trùng nhau, hãy nhập từ khác nhau." };
  }

  const acceptedSet = new Set(
    spec.acceptedAnswers.map((a) => normalizeForComparison(a, { strictMode: spec.strictMode })),
  );
  const allValid = [...distinct].every((word) => acceptedSet.has(word));
  return { status: allValid ? "correct" : "incorrect" };
}

// ---------------------------------------------------------------------------
// short — chấm bán tự động: đối chiếu từ khóa, học sinh tự xác nhận (Mục 10.2)
// ---------------------------------------------------------------------------

export interface ShortAnswerSpec {
  requiredKeywords: string[];
}

export interface KeywordSuggestion {
  matchedKeywords: string[];
  missingKeywords: string[];
  /** A hint for the UI, not a verdict — the student always confirms
   * themselves (Mục 10.2). */
  suggestion: "looks-complete" | "looks-incomplete";
}

export function suggestShortAnswerCheck(
  userAnswer: string,
  spec: ShortAnswerSpec,
): KeywordSuggestion {
  const normalizedAnswer = normalizeForComparison(userAnswer);
  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const keyword of spec.requiredKeywords) {
    const normalizedKeyword = normalizeForComparison(keyword);
    if (normalizedAnswer.includes(normalizedKeyword)) {
      matchedKeywords.push(keyword);
    } else {
      missingKeywords.push(keyword);
    }
  }

  return {
    matchedKeywords,
    missingKeywords,
    suggestion: missingKeywords.length === 0 ? "looks-complete" : "looks-incomplete",
  };
}

// ---------------------------------------------------------------------------
// mcq / match / order — chấm tự động tuyệt đối (Mục 10.2)
// ---------------------------------------------------------------------------

export interface McqSpec {
  answerIndex: number;
}

export function checkMcqAnswer(userIndex: number, spec: McqSpec): CheckResult {
  return { status: userIndex === spec.answerIndex ? "correct" : "incorrect" };
}

export interface MatchSpec {
  pairs: Array<{ leftId: string; rightId: string }>;
}

export function checkMatchAnswer(
  userPairs: Record<string, string>,
  spec: MatchSpec,
): CheckResult {
  if (Object.keys(userPairs).length !== spec.pairs.length) {
    return { status: "invalid-format", message: "Bạn chưa nối đủ các cặp." };
  }
  const allCorrect = spec.pairs.every((p) => userPairs[p.leftId] === p.rightId);
  return { status: allCorrect ? "correct" : "incorrect" };
}

export interface OrderSpec {
  correctOrder: string[];
}

export function checkOrderAnswer(userOrder: string[], spec: OrderSpec): CheckResult {
  if (userOrder.length !== spec.correctOrder.length) {
    return { status: "invalid-format", message: "Bạn chưa sắp xếp đủ các phần." };
  }
  const allCorrect = userOrder.every((id, i) => id === spec.correctOrder[i]);
  return { status: allCorrect ? "correct" : "incorrect" };
}
