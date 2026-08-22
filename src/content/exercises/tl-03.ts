import type { Exercise } from "@/data-access/types";

// TL-03 — Tính từ và các loại tính từ. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const TL03_EXERCISES: Exercise[] = [
  {
    id: "tl-03-mcq-1",
    topicIds: ["TL-03"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trong câu "Bông hoa đỏ rực.", từ nào là tính từ?',
    explanation: "\"Đỏ rực\" chỉ đặc điểm màu sắc của bông hoa — là tính từ.",
    mcq: {
      options: ["Bông", "hoa", "đỏ rực", "Không có tính từ"],
      answerIndex: 2,
      distractorNotes: [
        "\"Bông\" là danh từ chỉ đơn vị, không phải tính từ.",
        "\"Hoa\" là danh từ, không phải tính từ.",
        "Đúng — \"đỏ rực\" chỉ đặc điểm màu sắc, là tính từ.",
        "Câu này có tính từ \"đỏ rực\".",
      ],
    },
  },
  {
    id: "tl-03-mcq-2",
    topicIds: ["TL-03"],
    level: "M2",
    questionType: "mcq",
    prompt: "Tính từ thường có thể kết hợp với những từ chỉ mức độ nào?",
    explanation: "Tính từ thường kết hợp được với các từ chỉ mức độ như rất, hơi, quá, lắm.",
    mcq: {
      options: ["đã, đang, sẽ", "rất, hơi, quá, lắm", "và, hoặc, nhưng", "vì, nên, nếu, thì"],
      answerIndex: 1,
      distractorNotes: [
        "Đây là các từ chỉ thời gian thường đi kèm động từ, không phải tính từ.",
        "Đúng — tính từ thường kết hợp với các từ chỉ mức độ như rất, hơi, quá, lắm.",
        "Đây là các từ nối, không phải từ chỉ mức độ cho tính từ.",
        "Đây là quan hệ từ/cặp quan hệ từ (TL-05), không phải từ chỉ mức độ.",
      ],
    },
  },
  {
    id: "tl-03-fill-1",
    topicIds: ["TL-03"],
    level: "M2",
    questionType: "fill",
    prompt: 'Điền từ còn thiếu: "Bạn ấy rất chăm chỉ." — "chăm chỉ" là tính từ chỉ ___.',
    explanation: "\"Chăm chỉ\" chỉ tính cách của bạn ấy.",
    fill: { acceptedAnswers: ["tính cách"], strictMode: false, isSet: false },
  },
];
