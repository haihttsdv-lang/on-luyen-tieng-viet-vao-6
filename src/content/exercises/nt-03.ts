import type { Exercise } from "@/data-access/types";

// NT-03 — Từ đồng âm. Ví dụ tự biên soạn (Mục 10.1 hướng B).
export const NT03_EXERCISES: Exercise[] = [
  {
    id: "nt-03-mcq-1",
    topicIds: ["NT-03"],
    level: "M1",
    questionType: "mcq",
    prompt: "Từ đồng âm là gì?",
    explanation: "Từ đồng âm là những từ giống nhau về âm thanh nhưng khác nhau hoàn toàn về nghĩa, không có liên hệ gì với nhau.",
    mcq: {
      options: [
        "Những từ giống nhau về âm nhưng nghĩa không liên quan gì đến nhau",
        "Những từ có nghĩa giống nhau nhưng âm khác nhau",
        "Những từ có nghĩa gốc và nghĩa chuyển liên quan đến nhau",
        "Những từ trái nghĩa nhau",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là định nghĩa của từ đồng âm.",
        "Đây là định nghĩa của từ đồng nghĩa (NT-01), không phải từ đồng âm.",
        "Đây là định nghĩa của từ nhiều nghĩa (NT-04), không phải từ đồng âm.",
        "Đây là định nghĩa của từ trái nghĩa (NT-02), không phải từ đồng âm.",
      ],
    },
  },
  {
    id: "nt-03-mcq-2",
    topicIds: ["NT-03"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Trong câu "Con ngựa đá con ngựa đá.", hai từ "đá" có quan hệ gì với nhau?',
    explanation: "\"Đá\" thứ nhất là động từ (hành động đá), \"đá\" thứ hai là danh từ (chất liệu đá) — hai từ giống âm nhưng nghĩa hoàn toàn không liên quan, đây là từ đồng âm.",
    mcq: {
      options: ["Đồng nghĩa", "Trái nghĩa", "Đồng âm", "Nhiều nghĩa (cùng gốc)"],
      answerIndex: 2,
      distractorNotes: [
        "Hai từ \"đá\" không cùng nghĩa.",
        "Hai từ \"đá\" không trái nghĩa nhau, chúng chỉ giống âm mà nghĩa không liên quan.",
        "Đúng — hai từ \"đá\" giống âm nhưng nghĩa hoàn toàn khác nhau, không liên hệ.",
        "Từ nhiều nghĩa cần các nghĩa có liên hệ với nhau, ở đây hai nghĩa \"đá\" không liên quan.",
      ],
    },
  },
  {
    id: "nt-03-fill-1",
    topicIds: ["NT-03"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Muốn biết một từ đồng âm đang mang nghĩa nào, cần dựa vào ___ của câu.",
    explanation: "Phải dựa vào ngữ cảnh của câu mới xác định được từ đồng âm đang mang nghĩa nào.",
    fill: { acceptedAnswers: ["ngữ cảnh"], strictMode: false, isSet: false },
  },
];
