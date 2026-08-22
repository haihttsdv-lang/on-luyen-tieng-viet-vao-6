import type { Exercise } from "@/data-access/types";

// CA-05 — Câu đơn và câu ghép. Câu ví dụ tự biên soạn (Mục 10.1 hướng B).
export const CA05_EXERCISES: Exercise[] = [
  {
    id: "ca-05-mcq-1",
    topicIds: ["CA-05"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu "Em học bài." là câu đơn hay câu ghép?',
    explanation: "Câu chỉ có một cụm chủ ngữ – vị ngữ (\"Em\" / \"học bài\") nên là câu đơn.",
    mcq: {
      options: ["Câu đơn", "Câu ghép", "Không xác định được", "Cả hai đều đúng"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — câu chỉ có một cụm chủ ngữ – vị ngữ.",
        "Câu ghép cần có từ hai cụm chủ ngữ – vị ngữ trở lên, câu này chỉ có một.",
        "Có thể xác định được dựa vào số cụm chủ ngữ – vị ngữ.",
        "Một câu chỉ có thể là câu đơn hoặc câu ghép, không thể là cả hai.",
      ],
    },
  },
  {
    id: "ca-05-mcq-2",
    topicIds: ["CA-05"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu "Trời mưa to nên đường phố ngập nước." là câu đơn hay câu ghép?',
    explanation: "Câu có hai cụm chủ ngữ – vị ngữ (\"trời mưa to\" và \"đường phố ngập nước\"), nối bằng \"nên\" — đây là câu ghép.",
    mcq: {
      options: ["Câu đơn", "Câu ghép", "Câu thiếu chủ ngữ", "Câu thiếu vị ngữ"],
      answerIndex: 1,
      distractorNotes: [
        "Câu có hai cụm chủ ngữ – vị ngữ, không phải câu đơn.",
        "Đúng — hai cụm chủ ngữ – vị ngữ được nối với nhau bằng \"nên\".",
        "Câu có đủ chủ ngữ ở cả hai vế.",
        "Câu có đủ vị ngữ ở cả hai vế.",
      ],
    },
  },
  {
    id: "ca-05-fill-1",
    topicIds: ["CA-05"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Câu ghép có từ hai cụm chủ ngữ – vị ngữ trở lên, các cụm không ___ nhau.",
    explanation: "Các cụm chủ ngữ – vị ngữ trong câu ghép không bao chứa nhau (khác với câu đơn có thành phần mở rộng).",
    fill: { acceptedAnswers: ["bao chứa"], strictMode: false, isSet: false },
  },
];
