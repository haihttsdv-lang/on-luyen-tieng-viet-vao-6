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
  {
    id: "ca-03-mcq-3",
    topicIds: ["CA-03"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu "Bông hoa này rất thơm." thuộc kiểu câu kể nào?',
    explanation: "Vị ngữ \"rất thơm\" nêu đặc điểm của bông hoa — thuộc kiểu \"Ai thế nào?\".",
    mcq: {
      options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Câu cảm"],
      answerIndex: 1,
      distractorNotes: [
        "Kiểu này nêu hoạt động, còn câu trên nêu đặc điểm.",
        "Đúng — vị ngữ \"rất thơm\" nêu đặc điểm, tính chất.",
        "Kiểu này dùng để giới thiệu, nhận định, không phải nêu đặc điểm bằng tính từ.",
        "Đây là câu kể, không phải câu cảm thán.",
      ],
    },
  },
  {
    id: "ca-03-mcq-4",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "mcq",
    prompt: "Câu kể kiểu \"Ai làm gì?\" có vị ngữ nêu điều gì?",
    explanation: "Vị ngữ của kiểu câu \"Ai làm gì?\" nêu hoạt động của người/vật được nói đến ở chủ ngữ.",
    mcq: {
      options: ["Đặc điểm, tính chất", "Hoạt động", "Sự giới thiệu, nhận định", "Nơi chốn"],
      answerIndex: 1,
      distractorNotes: [
        "Đây là đặc trưng của kiểu \"Ai thế nào?\".",
        "Đúng — vị ngữ của kiểu \"Ai làm gì?\" nêu hoạt động.",
        "Đây là đặc trưng của kiểu \"Ai là gì?\".",
        "Nơi chốn thường do trạng ngữ đảm nhiệm, không phải đặc trưng của vị ngữ kiểu này.",
      ],
    },
  },
  {
    id: "ca-03-mcq-5",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu "Hà Nội là thủ đô của Việt Nam." thuộc kiểu câu kể nào?',
    explanation: "Từ \"là\" dùng để giới thiệu, nhận định Hà Nội — thuộc kiểu \"Ai là gì?\".",
    mcq: {
      options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Câu hỏi"],
      answerIndex: 2,
      distractorNotes: [
        "Câu này không nêu hoạt động.",
        "Câu này không nêu đặc điểm bằng tính từ.",
        "Đúng — từ \"là\" dùng để giới thiệu, nhận định.",
        "Đây là câu kể, không phải câu hỏi.",
      ],
    },
  },
  {
    id: "ca-03-mcq-6",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây thuộc kiểu câu kể "Ai thế nào?"',
    explanation: "\"Bầu trời hôm nay trong xanh.\" — vị ngữ \"trong xanh\" là tính từ nêu đặc điểm.",
    mcq: {
      options: [
        "Bầu trời hôm nay trong xanh.",
        "Em đang tưới cây.",
        "Bố em là bác sĩ.",
        "Chúng em đang học bài.",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"trong xanh\" là tính từ nêu đặc điểm của bầu trời.",
        "Đây là kiểu \"Ai làm gì?\" — nêu hoạt động.",
        "Đây là kiểu \"Ai là gì?\" — có từ \"là\".",
        "Đây là kiểu \"Ai làm gì?\" — nêu hoạt động.",
      ],
    },
  },
  {
    id: "ca-03-fill-1",
    topicIds: ["CA-03"],
    level: "M1",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Câu kể kiểu \"Ai là gì?\" thường có từ ___ trong vị ngữ để giới thiệu, nhận định.",
    explanation: "Kiểu câu \"Ai là gì?\" thường dùng từ \"là\" để giới thiệu, nhận định.",
    fill: { acceptedAnswers: ["là"], strictMode: false, isSet: false },
  },
  {
    id: "ca-03-mcq-7",
    topicIds: ["CA-03"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Câu "Chú mèo nhà em rất tinh nghịch, suốt ngày chạy nhảy khắp nhà." kết hợp mấy kiểu câu kể?',
    explanation: "Câu có 2 vế: \"rất tinh nghịch\" (Ai thế nào?) và \"suốt ngày chạy nhảy khắp nhà\" (Ai làm gì?) — kết hợp 2 kiểu câu kể trong cùng một câu.",
    mcq: {
      options: ["Chỉ 1 kiểu: Ai thế nào?", "Chỉ 1 kiểu: Ai làm gì?", "Kết hợp 2 kiểu: Ai thế nào? và Ai làm gì?", "Không thuộc kiểu câu kể nào"],
      answerIndex: 2,
      distractorNotes: [
        "Câu còn có phần nêu hoạt động \"chạy nhảy khắp nhà\".",
        "Câu còn có phần nêu đặc điểm \"rất tinh nghịch\".",
        "Đúng — câu kết hợp cả hai kiểu trong hai vế khác nhau.",
        "Đây vẫn là câu kể, chỉ là kết hợp hai kiểu.",
      ],
    },
  },
  {
    id: "ca-03-match-1",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "match",
    prompt: "Nối mỗi câu ở cột trái với đúng kiểu câu kể ở cột phải.",
    explanation: "\"Em đang đọc sách.\" — Ai làm gì?; \"Bạn ấy rất hiền lành.\" — Ai thế nào?; \"Đây là cuốn sách của em.\" — Ai là gì?",
    match: {
      leftItems: [
        { id: "l1", label: "Em đang đọc sách." },
        { id: "l2", label: "Bạn ấy rất hiền lành." },
        { id: "l3", label: "Đây là cuốn sách của em." },
      ],
      rightItems: [
        { id: "r1", label: "Ai là gì?" },
        { id: "r2", label: "Ai làm gì?" },
        { id: "r3", label: "Ai thế nào?" },
      ],
      correctPairs: [
        { leftId: "l1", rightId: "r2" },
        { leftId: "l2", rightId: "r3" },
        { leftId: "l3", rightId: "r1" },
      ],
    },
  },
  {
    id: "ca-03-mcq-8",
    topicIds: ["CA-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu "Con đường làng quanh co, uốn lượn." thuộc kiểu câu kể nào?',
    explanation: "\"Quanh co, uốn lượn\" là các tính từ nêu đặc điểm của con đường — thuộc kiểu \"Ai thế nào?\".",
    mcq: {
      options: ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Không phải câu kể"],
      answerIndex: 1,
      distractorNotes: [
        "Câu này không nêu hoạt động.",
        "Đúng — \"quanh co, uốn lượn\" là tính từ nêu đặc điểm.",
        "Câu này không dùng từ \"là\" để giới thiệu, nhận định.",
        "Đây vẫn là câu kể.",
      ],
    },
  },
];
