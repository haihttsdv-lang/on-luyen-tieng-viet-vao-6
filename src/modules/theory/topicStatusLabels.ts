import type { TopicStatus } from "@/data-access/types";

// FR-L01: 3 trạng thái hiển thị cho mỗi chuyên đề.
export const TOPIC_STATUS_LABELS: Record<TopicStatus, string> = {
  "chua-hoc": "Chưa học",
  "dang-hoc": "Đang học",
  "da-nam": "Đã nắm",
};

export const TOPIC_STATUS_CLASSES: Record<TopicStatus, string> = {
  "chua-hoc": "bg-slate-100 text-slate-500",
  "dang-hoc": "bg-amber-100 text-amber-700",
  "da-nam": "bg-emerald-100 text-emerald-700",
};
