import type { Exercise } from "@/data-access/types";

// DH-01 — Xác định chi tiết, sự việc trong văn bản. Đoạn văn ngắn tự biên
// soạn (Mục 10.1 hướng B), không trích từ tác phẩm nào.
export const DH01_EXERCISES: Exercise[] = [
  {
    id: "dh-01-mcq-1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Sáng chủ nhật, Lan cùng mẹ ra vườn hái rau. Hái xong, hai mẹ con mang rau vào bếp rửa sạch để nấu canh."\nLan ra vườn để làm gì?',
    explanation: "Câu \"Lan cùng mẹ ra vườn hái rau\" nêu trực tiếp việc Lan làm — hái rau.",
    mcq: {
      options: ["Hái hoa", "Hái rau", "Nhổ cỏ", "Tưới cây"],
      answerIndex: 1,
      distractorNotes: [
        "Đoạn văn không nhắc đến việc hái hoa.",
        "Đúng — đoạn văn nêu trực tiếp \"Lan cùng mẹ ra vườn hái rau\".",
        "Đoạn văn không nhắc đến việc nhổ cỏ.",
        "Đoạn văn không nhắc đến việc tưới cây.",
      ],
    },
  },
  {
    id: "dh-01-mcq-2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Buổi chiều, Hùng và Minh cùng nhau đá bóng ở sân trường. Đá xong, hai bạn về nhà Minh để cùng làm bài tập."\nHai bạn Hùng và Minh chơi gì ở sân trường?',
    explanation: "Đoạn văn nêu trực tiếp \"Hùng và Minh cùng nhau đá bóng ở sân trường\".",
    mcq: {
      options: ["Đá cầu", "Đá bóng", "Chơi cờ", "Nhảy dây"],
      answerIndex: 1,
      distractorNotes: [
        "Đoạn văn không nhắc đến đá cầu.",
        "Đúng — đoạn văn nêu trực tiếp \"đá bóng ở sân trường\".",
        "Đoạn văn không nhắc đến chơi cờ.",
        "Đoạn văn không nhắc đến nhảy dây.",
      ],
    },
  },
  {
    id: "dh-01-fill-1",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "fill",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Mỗi buổi sáng, ông em đều dậy sớm tập thể dục rồi mới ăn sáng."\nÔng em dậy sớm để làm gì? (trả lời bằng cụm từ có trong bài)',
    explanation: "Đoạn văn nêu trực tiếp việc ông dậy sớm để \"tập thể dục\".",
    fill: { acceptedAnswers: ["tập thể dục"], strictMode: false, isSet: false },
  },
];
