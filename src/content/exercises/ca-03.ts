import type { Exercise } from "@/data-access/types";

// CA-03 — Các kiểu câu kể: Ai làm gì? / Ai thế nào? / Ai là gì?
// Câu ví dụ tự biên soạn (Mục 10.1 hướng B).
export const CA03_EXERCISES: Exercise[] = [
  {
    id: "ca-03-mcq-1",
    topicIds: ["CA-03"],
    level: "M1",
    questionType: "mcq",
    prompt: "Câu \"Bạn Lan đang quét sân.\" thuộc kiểu câu kể nào?",
    explanation:
      "Câu nêu hoạt động của người (Bạn Lan) nên thuộc kiểu \"Ai làm gì?\". Vị ngữ trả lời cho câu hỏi \"làm gì?\".",
    mcq: {
      options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Câu hỏi"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — vị ngữ nêu hoạt động (quét sân).",
        "Kiểu này nêu đặc điểm, tính chất, không phải hoạt động.",
        "Kiểu này giới thiệu, nhận định về ai/cái gì đó, không phải hoạt động.",
        "Đây là câu kể, không phải câu hỏi (không có dấu chấm hỏi).",
      ],
    },
  },
  {
    id: "ca-03-mcq-2",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "mcq",
    prompt: "Câu nào dưới đây thuộc kiểu câu kể \"Ai là gì?\"",
    explanation:
      "\"Bạn Nam là học sinh giỏi.\" dùng từ \"là\" để giới thiệu, nhận định về Bạn Nam — đặc trưng của kiểu \"Ai là gì?\".",
    mcq: {
      options: [
        "Bạn Nam là học sinh giỏi.",
        "Bạn Nam đang làm bài tập.",
        "Bạn Nam rất chăm chỉ.",
        "Bạn Nam chạy rất nhanh.",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — có từ \"là\", giới thiệu/nhận định về Bạn Nam.",
        "Đây là kiểu \"Ai làm gì?\" — nêu hoạt động.",
        "Đây là kiểu \"Ai thế nào?\" — nêu đặc điểm, tính chất.",
        "Đây là kiểu \"Ai làm gì?\" — nêu hoạt động.",
      ],
    },
  },
  {
    id: "ca-03-order-1",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "order",
    prompt:
      "Sắp xếp các phần dưới đây thành một câu kể đúng kiểu \"Ai làm gì?\".",
    explanation:
      "Câu đúng: \"Em chăm chỉ học bài.\" — chủ ngữ (Em) đứng trước, vị ngữ nêu hoạt động (chăm chỉ học bài) đứng sau.",
    order: {
      items: [
        { id: "o1", label: "Em" },
        { id: "o2", label: "chăm chỉ" },
        { id: "o3", label: "học bài" },
      ],
      correctOrder: ["o1", "o2", "o3"],
    },
  },
  {
    id: "ca-03-short-1",
    topicIds: ["CA-03"],
    level: "M3",
    questionType: "short",
    prompt:
      "Đặt một câu kể theo kiểu \"Ai thế nào?\", trong câu có dùng từ \"trời\".",
    explanation:
      "Câu cần có từ \"trời\" và một tính từ/cụm tính từ nêu đặc điểm (ví dụ: trong xanh, mát mẻ, âm u...).",
    short: {
      requiredKeywords: ["trời"],
      sampleAnswer: "Bầu trời hôm nay trong xanh và mát mẻ.",
    },
  },
];
