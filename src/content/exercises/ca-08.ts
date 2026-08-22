import type { Exercise } from "@/data-access/types";

// CA-08 — Chữa lỗi câu. `[BỔ SUNG]`. Câu tự biên soạn (Mục 10.1 hướng B).
export const CA08_EXERCISES: Exercise[] = [
  {
    id: "ca-08-mcq-1",
    topicIds: ["CA-08"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu "Qua bài văn cho thấy bạn Nam là người chăm chỉ." mắc lỗi gì?',
    explanation: "\"Qua bài văn\" chỉ là trạng ngữ, câu này thiếu chủ ngữ (ai \"cho thấy\"?).",
    mcq: {
      options: ["Thiếu chủ ngữ", "Thiếu vị ngữ", "Lặp từ", "Câu này đúng, không mắc lỗi"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — \"qua bài văn\" là trạng ngữ, câu thiếu chủ ngữ đứng sau trạng ngữ.",
        "Câu có vị ngữ \"cho thấy bạn Nam là người chăm chỉ\", không thiếu vị ngữ.",
        "Câu này không có từ nào bị lặp lại.",
        "Câu này thiếu chủ ngữ, cần sửa lại.",
      ],
    },
  },
  {
    id: "ca-08-mcq-2",
    topicIds: ["CA-08"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây đã được sửa ĐÚNG từ câu sai "Qua bài văn cho thấy bạn Nam là người chăm chỉ."?',
    explanation: "Thêm chủ ngữ \"em\" vào sau trạng ngữ \"qua bài văn\" giúp câu có đủ chủ ngữ, vị ngữ.",
    mcq: {
      options: [
        "Qua bài văn cho thấy bạn Nam là người chăm chỉ.",
        "Qua bài văn, em thấy bạn Nam là người chăm chỉ.",
        "Bài văn cho thấy cho thấy bạn Nam chăm chỉ.",
        "Bạn Nam.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chính là câu sai ban đầu, chưa được sửa.",
        "Đúng — thêm chủ ngữ \"em\" sau trạng ngữ giúp câu đủ thành phần.",
        "Câu này bị lặp từ \"cho thấy\" hai lần, vẫn còn lỗi.",
        "Câu này quá ngắn, không diễn đạt đủ ý.",
      ],
    },
  },
  {
    id: "ca-08-mcq-3",
    topicIds: ["CA-08"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Câu "Vì bạn ấy chăm chỉ nên bạn ấy chăm chỉ nên đạt điểm cao." mắc lỗi gì?',
    explanation: "Cụm \"bạn ấy chăm chỉ nên\" bị lặp lại không cần thiết, khiến câu rườm rà.",
    mcq: {
      options: ["Thiếu chủ ngữ", "Sai quan hệ từ", "Lặp từ không cần thiết", "Thiếu vị ngữ"],
      answerIndex: 2,
      distractorNotes: [
        "Câu này có đủ chủ ngữ \"bạn ấy\".",
        "Cặp quan hệ từ \"vì...nên\" dùng đúng, chỉ là bị lặp lại một lần không cần thiết.",
        "Đúng — cụm \"bạn ấy chăm chỉ nên\" bị lặp lại, cần bỏ bớt.",
        "Câu này có đủ vị ngữ.",
      ],
    },
  },
  {
    id: "ca-08-fill-1",
    topicIds: ["CA-08"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Một câu đúng ngữ pháp cần có đủ ___ và vị ngữ.",
    explanation: "Câu đúng ngữ pháp cần có đủ chủ ngữ và vị ngữ.",
    fill: { acceptedAnswers: ["chủ ngữ"], strictMode: false, isSet: false },
  },
];
