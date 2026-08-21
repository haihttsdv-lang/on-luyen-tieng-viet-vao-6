import type { ErrorType } from "@/data-access/types";

// FR-P07: labels for the optional self-diagnosis chips shown after a wrong
// answer.
export const ERROR_TYPE_LABELS: Record<ErrorType, string> = {
  "nham-khai-niem": "Nhầm khái niệm",
  "sai-chinh-ta": "Sai chính tả",
  "khong-doc-ky-de": "Không đọc kỹ đề",
  "dien-dat-chua-ro": "Diễn đạt chưa rõ",
  "thieu-y": "Thiếu ý",
};

export const ERROR_TYPES = Object.keys(ERROR_TYPE_LABELS) as ErrorType[];
