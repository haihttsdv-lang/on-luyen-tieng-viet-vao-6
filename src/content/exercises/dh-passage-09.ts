import type { Exercise } from "@/data-access/types";

// DH-passage-09 — "Chiếc thuyền giấy". Văn bản tự biên soạn (Mục 10.1
// hướng B).
export const DH_PASSAGE_09_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-09-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-09",
    prompt: "Ai là người đã dạy Bống và Tùng gấp thuyền giấy?",
    explanation: "Văn bản nêu trực tiếp: ông nội đã dạy hai anh em trò chơi gấp thuyền giấy trước khi mất.",
    mcq: {
      options: ["Ông nội", "Bố", "Mẹ", "Cô giáo"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp trong bài.",
        "Văn bản không nói bố là người dạy.",
        "Văn bản không nói mẹ là người dạy.",
        "Văn bản không nhắc đến cô giáo trong câu chuyện này.",
      ],
    },
  },
  {
    id: "dh-passage-09-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-09",
    prompt: "Bống thường thả thuyền giấy ở đâu? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: Bống thả thuyền giấy xuống rãnh nước trước sân.",
    fill: { acceptedAnswers: ["rãnh nước trước sân", "rãnh nước"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-09-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-09",
    prompt: "Sự việc nào xảy ra SAU KHI chiếc thuyền của Bống bị mắc vào cành cây?",
    explanation: "Theo trình tự: thuyền mắc vào cành cây, Bống buồn, sau đó Tùng lội xuống gỡ thuyền, cuối cùng Bống cười vui vẻ.",
    mcq: {
      options: [
        "Tùng lội xuống nước gỡ chiếc thuyền cho em",
        "Ông nội dạy hai anh em gấp thuyền",
        "Bống và Tùng ngồi gấp thuyền bên hiên nhà",
        "Trời bắt đầu mưa to",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là hành động xảy ra ngay sau khi thuyền bị mắc kẹt.",
        "Đây là sự việc xảy ra từ trước, làm nền cho câu chuyện.",
        "Đây là hoạt động thường lệ trước khi thuyền bị mắc kẹt.",
        "Đây là điều kiện khiến hai anh em chơi trò này, xảy ra trước sự việc thuyền mắc kẹt.",
      ],
    },
  },
  {
    id: "dh-passage-09-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-09",
    prompt: "Chi tiết nào cho thấy Tùng là người anh trai biết yêu thương, chăm sóc em gái?",
    explanation: "Chi tiết Tùng nhường em thả thuyền và xắn quần lội xuống gỡ thuyền giúp em thể hiện rõ tình yêu thương này.",
    mcq: {
      options: [
        "Tùng thích chơi thuyền giấy",
        "Tùng nhường em thả thuyền và lội xuống nước gỡ thuyền giúp em",
        "Tùng nhớ lời ông nội kể chuyện",
        "Tùng ngồi bên hiên nhà khi trời mưa",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là sở thích chung, chưa thể hiện sự quan tâm đến em.",
        "Đúng — hành động nhường nhịn và giúp đỡ em thể hiện rõ tình yêu thương.",
        "Đây là chi tiết chung của cả hai anh em, không riêng thể hiện tính cách Tùng.",
        "Đây chỉ là bối cảnh, không thể hiện tính cách.",
      ],
    },
  },
  {
    id: "dh-passage-09-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-09",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện cho thấy những trò chơi giản dị có thể mang theo tình yêu thương và kỷ niệm quý giá của người thân đã khuất.",
    mcq: {
      options: [
        "Không nên chơi thuyền giấy khi trời mưa",
        "Những trò chơi giản dị có thể mang theo tình yêu thương, kỷ niệm quý giá của người thân",
        "Anh chị em không nên chơi cùng nhau",
        "Thuyền giấy dễ bị hỏng nên không nên chơi",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Đúng — đây là thông điệp thể hiện qua tình cảm hai anh em dành cho kỷ niệm về ông.",
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Văn bản không đưa ra lời khuyên né tránh này.",
      ],
    },
  },
  {
    id: "dh-passage-09-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-09",
    prompt: "Vì sao mỗi lần gấp thuyền giấy, Bống lại nhớ đến ông nội?",
    explanation: "Suy luận từ văn bản: vì trò chơi này gắn liền với kỷ niệm ông nội dạy hai anh em trước khi ông mất, nên mỗi lần chơi lại gợi nhớ về ông.",
    mcq: {
      options: [
        "Vì thuyền giấy có hình dáng giống ông nội",
        "Vì trò chơi này gắn liền với kỷ niệm được ông nội dạy trước khi ông mất",
        "Vì ông nội thích màu giấy trắng",
        "Vì Bống không có trò chơi nào khác",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây không phải lý do hợp lý, không liên quan đến nội dung bài.",
        "Đúng — đây là suy luận hợp lý dựa trên bối cảnh câu chuyện.",
        "Văn bản không nhắc đến chi tiết này.",
        "Văn bản không nói đây là trò chơi duy nhất của Bống.",
      ],
    },
  },
];
