import type { Exercise } from "@/data-access/types";

// DH-05 — Hàm ý, ẩn ý; suy luận từ văn bản. Đoạn văn ngắn tự biên soạn
// (Mục 10.1 hướng B).
export const DH05_EXERCISES: Exercise[] = [
  {
    id: "dh-05-mcq-1",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Cậu bé cúi đầu, hai tay siết chặt vạt áo, không dám nhìn mẹ khi được hỏi về chiếc bình hoa vỡ."\nQua chi tiết trên, em hiểu cậu bé đang cảm thấy như thế nào?',
    explanation: "Dù văn bản không nói thẳng, các chi tiết \"cúi đầu\", \"siết chặt vạt áo\", \"không dám nhìn mẹ\" cho thấy cậu bé đang cảm thấy có lỗi, lo lắng.",
    mcq: {
      options: ["Vui vẻ", "Có lỗi, lo lắng", "Tự hào", "Ngạc nhiên"],
      answerIndex: 1,
      distractorNotes: [
        "Các chi tiết trong bài không cho thấy sự vui vẻ.",
        "Đúng — các chi tiết cúi đầu, siết chặt vạt áo, không dám nhìn mẹ cho thấy cậu bé cảm thấy có lỗi, lo lắng.",
        "Không có chi tiết nào cho thấy sự tự hào.",
        "Đây không phải là biểu hiện của sự ngạc nhiên.",
      ],
    },
  },
  {
    id: "dh-05-mcq-2",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Trời đã tối mịt mà bé Na vẫn ngồi bên cửa sổ, thỉnh thoảng lại ngó ra con đường vắng."\nChi tiết trên gợi ý điều gì về bé Na?',
    explanation: "Việc ngồi bên cửa sổ, ngó ra đường lúc trời tối gợi ý bé Na đang chờ đợi ai đó (có thể là bố mẹ đi làm về).",
    mcq: {
      options: [
        "Bé Na đang chờ đợi ai đó",
        "Bé Na không thích ở trong nhà",
        "Bé Na sợ bóng tối",
        "Bé Na đang chơi trò trốn tìm",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — hành động ngồi ngó ra đường vắng vào lúc tối gợi ý bé đang chờ đợi ai đó.",
        "Đoạn văn không có chi tiết nào cho thấy bé không thích ở trong nhà.",
        "Đoạn văn không nhắc đến việc bé sợ bóng tối.",
        "Không có chi tiết nào cho thấy đây là trò chơi.",
      ],
    },
  },
  {
    id: "dh-05-fill-1",
    topicIds: ["DH-05"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Suy luận từ văn bản phải dựa trên các ___ có trong bài, không được đoán mò tuỳ tiện.",
    explanation: "Suy luận hợp lý luôn phải có căn cứ từ các chi tiết cụ thể trong bài đọc.",
    fill: { acceptedAnswers: ["chi tiết"], strictMode: false, isSet: false },
  },
];
