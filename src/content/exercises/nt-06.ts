import type { Exercise } from "@/data-access/types";

// NT-06 — Thành ngữ, tục ngữ, ca dao. Dùng các câu quen thuộc, thuộc phạm
// vi công cộng (Mục 10.1 hướng A).
export const NT06_EXERCISES: Exercise[] = [
  {
    id: "nt-06-mcq-1",
    topicIds: ["NT-06"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu "Có công mài sắt, có ngày nên kim" khuyên chúng ta điều gì?',
    explanation: "Câu tục ngữ khuyên con người phải kiên trì, chăm chỉ thì mới đạt được thành công.",
    mcq: {
      options: [
        "Phải kiên trì, chăm chỉ thì mới đạt được thành công",
        "Nên đi mua kim ở chợ",
        "Sắt quý hơn kim",
        "Không nên làm việc vất vả",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là bài học (nghĩa bóng) của câu tục ngữ.",
        "Đây là hiểu theo nghĩa đen, không phải bài học câu tục ngữ muốn truyền tải.",
        "Câu tục ngữ không so sánh giá trị giữa sắt và kim.",
        "Câu tục ngữ khuyến khích sự chăm chỉ, kiên trì, không phải né tránh vất vả.",
      ],
    },
  },
  {
    id: "nt-06-mcq-2",
    topicIds: ["NT-06"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Thành ngữ "nước đổ lá khoai" dùng để chỉ điều gì?',
    explanation: "Nước đổ lên lá khoai (lá trơn) sẽ trôi hết ngay, không đọng lại — thành ngữ chỉ việc làm vô ích, không có kết quả hoặc lời khuyên không được tiếp thu.",
    mcq: {
      options: [
        "Việc làm vô ích, không có kết quả (hoặc lời khuyên không được tiếp thu)",
        "Một cách tưới cây hiệu quả",
        "Trời đang mưa to",
        "Một món ăn từ lá khoai",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là nghĩa bóng của thành ngữ, không phải nghĩa đen về việc tưới nước.",
        "Thành ngữ không nói về kỹ thuật tưới cây.",
        "Thành ngữ mang nghĩa bóng, không tả hiện tượng thời tiết.",
        "Thành ngữ không liên quan đến việc ăn uống.",
      ],
    },
  },
  {
    id: "nt-06-mcq-3",
    topicIds: ["NT-06"],
    level: "M2",
    questionType: "mcq",
    prompt: "Điểm khác biệt chính giữa thành ngữ và tục ngữ là gì?",
    explanation: "Thành ngữ là cụm từ cố định (không phải câu hoàn chỉnh), còn tục ngữ là một câu hoàn chỉnh đúc kết kinh nghiệm sống.",
    mcq: {
      options: [
        "Thành ngữ là cụm từ cố định, tục ngữ là câu hoàn chỉnh đúc kết kinh nghiệm",
        "Thành ngữ dài hơn tục ngữ",
        "Tục ngữ luôn có vần, thành ngữ thì không bao giờ có vần",
        "Không có sự khác biệt nào",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là điểm khác biệt cơ bản nhất giữa hai loại.",
        "Độ dài không phải là tiêu chí phân biệt chính.",
        "Một số thành ngữ vẫn có yếu tố vần điệu, đây không phải tiêu chí tuyệt đối.",
        "Hai khái niệm này khác nhau rõ rệt về cấu trúc.",
      ],
    },
  },
  {
    id: "nt-06-fill-1",
    topicIds: ["NT-06"],
    level: "M1",
    questionType: "fill",
    prompt: 'Điền từ còn thiếu: "Có công mài sắt, có ngày nên ___".',
    explanation: "Đây là câu tục ngữ quen thuộc \"Có công mài sắt, có ngày nên kim\".",
    fill: { acceptedAnswers: ["kim"], strictMode: false, isSet: false },
  },
];
