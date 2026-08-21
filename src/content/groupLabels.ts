import type { TopicGroup } from "@/data-access/types";

// Mục 5 — tên đầy đủ của 9 nhóm chuyên đề.
export const GROUP_LABELS: Record<TopicGroup, string> = {
  TC: "Tiếng, từ và cấu tạo từ",
  TL: "Từ loại",
  NT: "Nghĩa của từ và vốn từ",
  CA: "Câu",
  CD: "Chính tả và dấu câu",
  DH: "Đọc hiểu",
  CT: "Cảm thụ văn học",
  KN: "Kỹ năng làm bài",
  VA: "Tập làm văn",
};

export const GROUP_ORDER: TopicGroup[] = ["TC", "TL", "NT", "CA", "CD", "DH", "CT", "KN", "VA"];
