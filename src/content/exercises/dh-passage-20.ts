import type { Exercise } from "@/data-access/types";

// DH-passage-20 — "Bạn đồng hành trên đường đến trường". Văn bản tự biên
// soạn (Mục 10.1 hướng B).
export const DH_PASSAGE_20_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-20-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-20",
    prompt: "Vì sao xe đạp của Tân bị sa lầy giữa đường?",
    explanation: "Văn bản nêu trực tiếp: trời mưa to khiến con đường đất ngập nước, bùn lầy trơn trượt.",
    mcq: {
      options: [
        "Vì xe đạp của Tân bị hỏng phanh",
        "Vì trời mưa to khiến con đường đất ngập nước, bùn lầy",
        "Vì Tân đạp xe quá nhanh",
        "Vì đường có nhiều đá sỏi",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói xe bị hỏng phanh.",
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản không nói Tân đạp quá nhanh.",
        "Văn bản không nhắc đến đá sỏi.",
      ],
    },
  },
  {
    id: "dh-passage-20-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-20",
    prompt: "Ai đã dừng lại giúp đỡ Tân khi xe bị sa lầy? (trả lời bằng tên riêng có trong bài)",
    explanation: "Văn bản nêu trực tiếp: Hải, bạn cùng xóm học chung lớp, đã dừng lại giúp đỡ Tân.",
    fill: { acceptedAnswers: ["Hải"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-20-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-20",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI Hải dừng lại giúp đỡ Tân?",
    explanation: "Theo trình tự: Hải dừng lại, hai bạn cùng đẩy xe qua đoạn lầy, sau đó cùng đạp xe đến trường.",
    mcq: {
      options: [
        "Xe đạp của Tân bị sa lầy giữa đường",
        "Hai bạn cùng xắn quần lội xuống bùn, đẩy xe qua đoạn lầy",
        "Tân bị cô giáo nhắc nhở vì đến lớp trễ",
        "Tân và Hải trở thành bạn thân thiết hơn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là sự việc xảy ra trước khi Hải xuất hiện.",
        "Đúng — đây là hành động hai bạn cùng làm ngay sau khi Hải dừng lại.",
        "Đây là sự việc xảy ra sau khi đã đến lớp.",
        "Đây là kết quả lâu dài, xảy ra sau toàn bộ câu chuyện.",
      ],
    },
  },
  {
    id: "dh-passage-20-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-20",
    prompt: "Chi tiết nào cho thấy Hải là người sẵn sàng giúp đỡ bạn bè lúc khó khăn?",
    explanation: "Chi tiết Hải dừng xe lại, xắn quần lội xuống bùn cùng đẩy xe cho Tân dù việc này khiến mình bị lấm bẩn thể hiện rõ tinh thần sẵn sàng giúp đỡ.",
    mcq: {
      options: [
        "Hải học chung lớp với Tân",
        "Hải dừng xe, xắn quần lội xuống bùn cùng đẩy xe giúp Tân dù bị lấm bẩn",
        "Hải sống cùng xóm với Tân",
        "Hải đạp xe đến trường mỗi ngày",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là thông tin về mối quan hệ, chưa thể hiện hành động cụ thể.",
        "Đúng — hành động sẵn sàng chịu bẩn để giúp bạn thể hiện rõ tinh thần này.",
        "Đây chỉ là thông tin nơi ở, không thể hiện hành động.",
        "Đây là hoạt động thường ngày, không thể hiện rõ sự giúp đỡ đặc biệt.",
      ],
    },
  },
  {
    id: "dh-passage-20-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-20",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện đề cao tình bạn đẹp, sự giúp đỡ lẫn nhau lúc khó khăn khiến tình bạn thêm gắn bó.",
    mcq: {
      options: [
        "Không nên đi học vào ngày trời mưa",
        "Tình bạn đẹp thể hiện qua sự giúp đỡ lẫn nhau lúc khó khăn",
        "Nên đi học một mình để tránh phiền bạn bè",
        "Chỉ nên chơi với bạn cùng xóm",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Đúng — đây là bài học chính thể hiện qua hành động của Hải và cảm xúc của Tân.",
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Văn bản không đưa ra giới hạn này.",
      ],
    },
  },
  {
    id: "dh-passage-20-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-20",
    prompt: "Vì sao Tân \"không hề buồn\" dù bị cô giáo nhắc nhở vì đến lớp trễ?",
    explanation: "Có thể suy luận: dù bị nhắc nhở, Tân cảm thấy vui vì nhận ra mình có một người bạn tốt luôn sẵn sàng giúp đỡ, điều đó quan trọng hơn việc bị nhắc nhở nhẹ.",
    mcq: {
      options: [
        "Vì Tân không quan tâm đến việc học",
        "Vì Tân cảm thấy vui vì có người bạn tốt luôn sẵn sàng giúp đỡ mình",
        "Vì cô giáo không thực sự nhắc nhở Tân",
        "Vì Tân đã quen bị nhắc nhở nhiều lần",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không cho thấy Tân không quan tâm đến việc học.",
        "Đúng — đây là suy luận hợp lý dựa trên cảm xúc được nêu trong bài.",
        "Văn bản nói rõ Tân bị nhắc nhở.",
        "Văn bản không gợi ý điều này.",
      ],
    },
  },
];
