import type { Exercise } from "@/data-access/types";

// DH-06 — Giải nghĩa từ theo ngữ cảnh. Đoạn văn ngắn tự biên soạn (Mục
// 10.1 hướng B).
export const DH06_EXERCISES: Exercise[] = [
  {
    id: "dh-06-mcq-1",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Đọc câu sau và trả lời câu hỏi:\n"Cỗ máy chạy suốt đêm không nghỉ để kịp sản xuất hàng cho khách."\nTừ "chạy" trong câu trên có nghĩa là gì?',
    explanation: "Chủ ngữ là \"cỗ máy\" (không phải người/động vật) nên \"chạy\" ở đây mang nghĩa \"hoạt động, vận hành\", không phải nghĩa \"di chuyển bằng chân\".",
    mcq: {
      options: [
        "Di chuyển nhanh bằng chân",
        "Hoạt động, vận hành",
        "Trốn chạy",
        "Chạy đua thể thao",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là nghĩa gốc quen thuộc, nhưng không phù hợp với chủ ngữ \"cỗ máy\" trong câu này.",
        "Đúng — với chủ ngữ là máy móc, \"chạy\" mang nghĩa hoạt động, vận hành.",
        "Không có ngữ cảnh nào cho thấy nghĩa trốn chạy trong câu này.",
        "Câu này không nói về thể thao.",
      ],
    },
  },
  {
    id: "dh-06-mcq-2",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Đọc câu sau và trả lời câu hỏi:\n"Sau trận mưa, con đường làng trở nên lầy lội, mỗi bước đi đều rất chật vật."\nTừ "chật vật" trong câu trên gần nghĩa nhất với từ nào?',
    explanation: "\"Chật vật\" trong ngữ cảnh này (đi trên đường lầy lội) mang nghĩa khó khăn, vất vả khi di chuyển.",
    mcq: {
      options: ["Khó khăn, vất vả", "Nhanh chóng", "Thoải mái", "Chật hẹp về không gian"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"chật vật\" ở đây nghĩa là khó khăn, vất vả khi bước đi trên đường lầy lội.",
        "Ngữ cảnh cho thấy việc đi lại khó khăn, không phải nhanh chóng.",
        "Ngữ cảnh cho thấy sự vất vả, không phải thoải mái.",
        "Ở đây \"chật vật\" không nói về không gian chật hẹp mà nói về sự khó khăn khi di chuyển.",
      ],
    },
  },
  {
    id: "dh-06-fill-1",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Muốn giải nghĩa đúng một từ có nhiều nghĩa, cần dựa vào ___ xung quanh từ đó trong bài.",
    explanation: "Cần dựa vào ngữ cảnh (câu trước, câu sau) để xác định đúng nghĩa của từ trong bài đọc cụ thể.",
    fill: { acceptedAnswers: ["ngữ cảnh"], strictMode: false, isSet: false },
  },
];
