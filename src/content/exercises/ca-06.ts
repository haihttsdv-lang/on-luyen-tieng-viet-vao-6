import type { Exercise } from "@/data-access/types";

// CA-06 — Cách nối các vế câu ghép. Câu ví dụ tự biên soạn (Mục 10.1 hướng B).
export const CA06_EXERCISES: Exercise[] = [
  {
    id: "ca-06-mcq-1",
    topicIds: ["CA-06"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Cặp quan hệ từ "Vì...nên..." thể hiện mối quan hệ gì giữa hai vế câu ghép?',
    explanation: "Cặp quan hệ từ \"vì...nên\" thể hiện quan hệ nguyên nhân – kết quả.",
    mcq: {
      options: ["Nguyên nhân – kết quả", "Tương phản", "Giả thiết – kết quả", "Tăng tiến"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"vì\" nêu nguyên nhân, \"nên\" nêu kết quả.",
        "Quan hệ tương phản dùng cặp \"tuy...nhưng\".",
        "Quan hệ giả thiết – kết quả dùng cặp \"nếu...thì\".",
        "Quan hệ tăng tiến dùng cặp \"không những...mà còn\".",
      ],
    },
  },
  {
    id: "ca-06-mcq-2",
    topicIds: ["CA-06"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu "Tuy nhà nghèo nhưng bạn ấy học rất giỏi." thể hiện mối quan hệ gì giữa hai vế?',
    explanation: "Cặp quan hệ từ \"tuy...nhưng\" thể hiện quan hệ tương phản giữa hai vế câu.",
    mcq: {
      options: ["Nguyên nhân – kết quả", "Tương phản", "Giả thiết – kết quả", "Đồng thời"],
      answerIndex: 1,
      distractorNotes: [
        "Quan hệ nguyên nhân – kết quả dùng cặp \"vì...nên\".",
        "Đúng — \"tuy...nhưng\" thể hiện sự đối lập, tương phản giữa hai vế.",
        "Quan hệ giả thiết – kết quả dùng cặp \"nếu...thì\".",
        "Hai vế câu không diễn ra đồng thời mà mang tính đối lập.",
      ],
    },
  },
  {
    id: "ca-06-fill-1",
    topicIds: ["CA-06"],
    level: "M1",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Cặp quan hệ từ \"Nếu...thì...\" thể hiện quan hệ giả thiết – ___.",
    explanation: "Cặp quan hệ từ \"nếu...thì\" thể hiện quan hệ giả thiết – kết quả.",
    fill: { acceptedAnswers: ["kết quả"], strictMode: false, isSet: false },
  },
];
