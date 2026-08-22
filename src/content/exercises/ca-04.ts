import type { Exercise } from "@/data-access/types";

// CA-04 — Các kiểu câu chia theo mục đích nói. Câu ví dụ tự biên soạn (Mục
// 10.1 hướng B).
export const CA04_EXERCISES: Exercise[] = [
  {
    id: "ca-04-mcq-1",
    topicIds: ["CA-04"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu "Ôi, cảnh đẹp quá!" thuộc kiểu câu nào?',
    explanation: "Câu bộc lộ cảm xúc (từ \"Ôi\", \"quá\", dấu chấm than) là câu cảm.",
    mcq: {
      options: ["Câu kể", "Câu hỏi", "Câu khiến", "Câu cảm"],
      answerIndex: 3,
      distractorNotes: [
        "Câu kể dùng để kể, tả, thông báo, không bộc lộ cảm xúc mạnh như câu này.",
        "Câu hỏi cần có từ nghi vấn và dấu chấm hỏi, câu này không có.",
        "Câu khiến dùng để yêu cầu, đề nghị, câu này không yêu cầu điều gì.",
        "Đúng — từ \"Ôi\" và \"quá\" cùng dấu chấm than thể hiện đây là câu cảm.",
      ],
    },
  },
  {
    id: "ca-04-mcq-2",
    topicIds: ["CA-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây là câu khiến?',
    explanation: "\"Hãy giữ trật tự!\" có từ \"hãy\" dùng để yêu cầu, đề nghị — đây là câu khiến.",
    mcq: {
      options: [
        "Hôm nay trời rất đẹp.",
        "Hãy giữ trật tự!",
        "Bạn có đi học không?",
        "Ôi, đẹp quá!",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là câu kể, thông báo về thời tiết.",
        "Đúng — từ \"hãy\" thể hiện lời yêu cầu, đề nghị.",
        "Đây là câu hỏi, có từ nghi vấn \"có...không\".",
        "Đây là câu cảm, bộc lộ cảm xúc.",
      ],
    },
  },
  {
    id: "ca-04-fill-1",
    topicIds: ["CA-04"],
    level: "M1",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Câu dùng để nêu yêu cầu, đề nghị hoặc ra lệnh được gọi là câu ___.",
    explanation: "Câu khiến dùng để nêu yêu cầu, đề nghị hoặc ra lệnh, thường có từ \"hãy, đừng, chớ, nên\".",
    fill: { acceptedAnswers: ["khiến"], strictMode: false, isSet: false },
  },
];
