import type { Exercise } from "@/data-access/types";

// CA-01 — Câu và các thành phần chính (chủ ngữ, vị ngữ). Câu ví dụ tự biên
// soạn (Mục 10.1 hướng B).
export const CA01_EXERCISES: Exercise[] = [
  {
    id: "ca-01-mcq-1",
    topicIds: ["CA-01"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Trong câu "Bạn Lan học bài rất chăm chỉ.", đâu là chủ ngữ?',
    explanation: "\"Bạn Lan\" trả lời câu hỏi \"Ai?\" và là chủ ngữ của câu.",
    mcq: {
      options: ["Bạn Lan", "học bài", "rất chăm chỉ", "chăm chỉ"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"Bạn Lan\" là chủ ngữ, trả lời câu hỏi \"Ai?\".",
        "\"Học bài\" là một phần của vị ngữ, không phải chủ ngữ.",
        "\"Rất chăm chỉ\" là một phần của vị ngữ, không phải chủ ngữ.",
        "\"Chăm chỉ\" chỉ là một từ trong vị ngữ, không phải chủ ngữ đầy đủ.",
      ],
    },
  },
  {
    id: "ca-01-mcq-2",
    topicIds: ["CA-01"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Sáng nay, em đi học sớm.", "Sáng nay" đóng vai trò gì?',
    explanation: "\"Sáng nay\" là trạng ngữ chỉ thời gian, không phải chủ ngữ — chủ ngữ của câu là \"em\".",
    mcq: {
      options: ["Chủ ngữ", "Vị ngữ", "Trạng ngữ", "Không có vai trò gì"],
      answerIndex: 2,
      distractorNotes: [
        "\"Sáng nay\" không trả lời câu hỏi \"Ai?\" nên không phải chủ ngữ — chủ ngữ thực sự là \"em\".",
        "Trạng ngữ không phải vị ngữ.",
        "Đúng — \"Sáng nay\" bổ sung ý nghĩa thời gian cho câu, là trạng ngữ.",
        "\"Sáng nai\" có vai trò trạng ngữ, không phải là thành phần thừa.",
      ],
    },
  },
  {
    id: "ca-01-fill-1",
    topicIds: ["CA-01"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Trong một câu đơn, hai thành phần chính là chủ ngữ và ___.",
    explanation: "Câu đơn có hai thành phần chính: chủ ngữ và vị ngữ.",
    fill: { acceptedAnswers: ["vị ngữ"], strictMode: false, isSet: false },
  },
  {
    id: "ca-01-order-1",
    topicIds: ["CA-01"],
    level: "M2",
    questionType: "order",
    prompt: "Sắp xếp các phần dưới đây thành một câu có đủ chủ ngữ và vị ngữ.",
    explanation: "Câu đúng: \"Con mèo nhà em đang ngủ trên ghế.\" — chủ ngữ \"Con mèo nhà em\" đứng trước, vị ngữ \"đang ngủ trên ghế\" đứng sau.",
    order: {
      items: [
        { id: "o1", label: "Con mèo nhà em" },
        { id: "o2", label: "đang ngủ" },
        { id: "o3", label: "trên ghế" },
      ],
      correctOrder: ["o1", "o2", "o3"],
    },
  },
];
