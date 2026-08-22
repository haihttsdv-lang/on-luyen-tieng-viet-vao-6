// FR-D04: words with cross-textbook classification disputes (Mục 10.6).
// Giai đoạn 9 — TC-03/TC-04 (từ ghép/từ láy) is the first content to touch
// this: words like "chôm chôm", "cào cào" get called từ láy by traditional
// primary-school convention (dựa vào hình thức âm thanh lặp lại) but not by
// stricter linguistic accounts (không xác định được tiếng gốc có nghĩa, nên
// gọi là từ đơn đa âm tiết) — see disputedNote on TC-03/TC-04 in
// src/content/topics/index.ts. Kept out of every mcq's correct answer
// (FR-D03), enforced by tests/unit/content-schema.test.ts.
export const DISPUTED_WORDS: readonly string[] = [
  "chôm chôm",
  "cào cào",
  "ba ba",
  "đu đủ",
  "thằn lằn",
  "chuồn chuồn",
];
