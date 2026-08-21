import type { SessionType } from "@/data-access/types";

export const SESSION_TYPE_LABELS: Record<SessionType, string> = {
  lesson: "Bài học lý thuyết",
  practice: "Luyện tập",
  "mock-test": "Luyện đề",
  "error-review": "Phân tích lỗi sai",
  "weekly-check": "Kiểm tra tuần",
  "monthly-check": "Kiểm tra tháng",
};

export const SESSION_TYPE_ICONS: Record<SessionType, string> = {
  lesson: "📘",
  practice: "✏️",
  "mock-test": "⏱️",
  "error-review": "🔍",
  "weekly-check": "📋",
  "monthly-check": "🎯",
};
