import type { TestConfig } from "@/data-access/types";

// Mục 6 — 4 cấu hình đề thi thử, khai báo bằng dữ liệu (FR-T01). Mức độ mặc
// định theo thang Mục 5.10 (M1 25% · M2 35% · M3 30% · M4 10%) trừ khi Mục 6
// nêu khác. Một vài con số (totalQuestions/điểm tối đa cho NTT45, BALANCED)
// không được Mục 6 nêu rõ số cụ thể — xem docs/open-questions.md.
const DEFAULT_LEVEL_RATIO = { M1: 0.25, M2: 0.35, M3: 0.3, M4: 0.1 } as const;

export const TEST_CONFIGS: TestConfig[] = [
  {
    id: "ARCH60",
    label: "Archimedes (60 phút)",
    durationMinutes: 60,
    topicGroupWeights: { TC: 1, TL: 1, NT: 1, CA: 1, CD: 1, DH: 1, CT: 1, KN: 1, VA: 1 },
    levelRatio: DEFAULT_LEVEL_RATIO,
    questionTypeWeights: { mcq: 0.6, fill: 0.4 },
    totalQuestions: 40,
    includeEssay: true,
    autoScoreMax: 80,
    essayScoreMax: 20,
  },
  {
    id: "NTT45",
    label: "Nguyễn Tất Thành (45 phút)",
    durationMinutes: 45,
    topicGroupWeights: { TC: 2, TL: 2, NT: 2, CA: 2, CD: 1, KN: 0.5, DH: 0.3, CT: 0.3, VA: 2 },
    levelRatio: DEFAULT_LEVEL_RATIO,
    questionTypeWeights: { mcq: 0.4, fill: 0.3, match: 0.15, order: 0.15 },
    totalQuestions: 30,
    includeEssay: true,
    autoScoreMax: 30,
    essayScoreMax: 15,
  },
  {
    id: "BALANCED",
    label: "Cầu Giấy · Ams · Ngôi Sao · Marie Curie (60 phút)",
    durationMinutes: 60,
    // 3 phần xấp xỉ đều: từ&câu (5 nhóm × 1), đọc hiểu-cảm thụ (2 nhóm × 2.5) → cùng tổng trọng số 5.
    topicGroupWeights: { TC: 1, TL: 1, NT: 1, CA: 1, CD: 1, DH: 2.5, CT: 2.5, KN: 0.5, VA: 3 },
    levelRatio: DEFAULT_LEVEL_RATIO,
    questionTypeWeights: { mcq: 0.4, fill: 0.3, match: 0.15, order: 0.15 },
    totalQuestions: 30,
    includeEssay: true,
    autoScoreMax: 30,
    essayScoreMax: 15,
  },
  {
    id: "LTV_MCQ25",
    label: "Lương Thế Vinh — ĐGNL (25 phút)",
    durationMinutes: 25,
    topicGroupWeights: { TC: 1, TL: 1, NT: 1, CA: 1, CD: 1 },
    levelRatio: DEFAULT_LEVEL_RATIO,
    questionTypeWeights: { mcq: 1 },
    totalQuestions: 25,
    includeEssay: false,
    autoScoreMax: 25,
    essayScoreMax: 0,
  },
];
