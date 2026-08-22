import type { Exercise } from "@/data-access/types";

// TC-01 — Tiếng và cấu tạo của tiếng. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TC01_EXERCISES: Exercise[] = [
  {
    id: "tc-01-mcq-1",
    topicIds: ["TC-01"],
    level: "M1",
    questionType: "mcq",
    prompt: "Mỗi tiếng trong tiếng Việt có cấu tạo gồm mấy phần?",
    explanation: "Mỗi tiếng gồm 3 phần: âm đầu (có thể vắng), vần và thanh điệu.",
    mcq: {
      options: ["2 phần: âm đầu và vần", "3 phần: âm đầu, vần và thanh điệu", "4 phần", "Chỉ có vần"],
      answerIndex: 1,
      distractorNotes: [
        "Thiếu thanh điệu — mỗi tiếng đều mang một thanh điệu nhất định.",
        "Đúng — tiếng gồm âm đầu (có thể vắng), vần và thanh điệu.",
        "Tiếng chỉ có 3 phần, không phải 4.",
        "Ngoài vần, tiếng còn có âm đầu (có thể vắng) và thanh điệu.",
      ],
    },
  },
  {
    id: "tc-01-mcq-2",
    topicIds: ["TC-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Tiếng "ăn" có âm đầu là gì?',
    explanation: "Tiếng \"ăn\" không có phụ âm đầu — chỉ gồm vần \"ăn\" và thanh ngang.",
    mcq: {
      options: ["â", "ă", "n", "Không có âm đầu"],
      answerIndex: 3,
      distractorNotes: [
        "\"â\" không xuất hiện trong tiếng \"ăn\".",
        "\"ă\" là một phần của âm chính trong vần, không phải âm đầu.",
        "\"n\" là âm cuối của vần, không phải âm đầu.",
        "Đúng — tiếng \"ăn\" bắt đầu ngay bằng vần, không có phụ âm đầu.",
      ],
    },
  },
  {
    id: "tc-01-fill-1",
    topicIds: ["TC-01"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền từ còn thiếu: Tiếng "toán" có âm đầu là "t", vần là "oán" và mang thanh ___.',
    explanation: "Dấu sắc trên chữ \"a\" trong \"oán\" cho biết tiếng \"toán\" mang thanh sắc.",
    fill: { acceptedAnswers: ["sắc"], strictMode: false, isSet: false },
  },
];
