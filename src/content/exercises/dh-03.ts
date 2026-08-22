import type { Exercise } from "@/data-access/types";

// DH-03 — Nhân vật: hành động, đặc điểm, tính cách. Đoạn văn ngắn tự biên
// soạn (Mục 10.1 hướng B).
export const DH03_EXERCISES: Exercise[] = [
  {
    id: "dh-03-mcq-1",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Tuy trời rất lạnh, Hùng vẫn nhường chiếc áo ấm duy nhất cho em gái. Cậu chỉ mặc thêm một chiếc áo mỏng rồi tiếp tục đi học."\nChi tiết trên cho thấy Hùng là người như thế nào?',
    explanation: "Hành động nhường áo ấm cho em dù trời lạnh cho thấy Hùng biết yêu thương, nhường nhịn người khác.",
    mcq: {
      options: ["Ích kỷ", "Biết yêu thương, nhường nhịn", "Nhút nhát", "Lười biếng"],
      answerIndex: 1,
      distractorNotes: [
        "Hành động nhường nhịn hoàn toàn ngược lại với ích kỷ.",
        "Đúng — nhường áo ấm cho em dù bản thân lạnh thể hiện sự yêu thương, nhường nhịn.",
        "Hành động này không liên quan đến sự nhút nhát.",
        "Hành động này không liên quan đến sự lười biếng.",
      ],
    },
  },
  {
    id: "dh-03-mcq-2",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Đọc đoạn văn sau và trả lời câu hỏi:\n"Mai luôn giơ tay phát biểu đầu tiên trong giờ học, dù câu trả lời đôi khi chưa đúng. Bạn không ngại khi bị cô giáo sửa lỗi."\nChi tiết trên cho thấy Mai là người như thế nào?',
    explanation: "Việc chủ động phát biểu và không ngại bị sửa lỗi cho thấy Mai là người tự tin, mạnh dạn.",
    mcq: {
      options: ["Tự tin, mạnh dạn", "Rụt rè, sợ sai", "Kiêu ngạo", "Không chịu học bài"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — chủ động phát biểu và không ngại sai cho thấy sự tự tin, mạnh dạn.",
        "Đây là biểu hiện ngược lại — Mai không hề rụt rè hay sợ sai.",
        "Đoạn văn không có chi tiết nào cho thấy Mai kiêu ngạo.",
        "Việc chủ động phát biểu cho thấy Mai có tham gia bài học, không phải không chịu học.",
      ],
    },
  },
  {
    id: "dh-03-fill-1",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "fill",
    prompt: "Điền từ còn thiếu: Để nhận biết tính cách nhân vật, ngoài lời miêu tả trực tiếp, ta còn có thể dựa vào ___ và lời nói của nhân vật.",
    explanation: "Hành động và lời nói của nhân vật là căn cứ gián tiếp quan trọng để suy ra tính cách.",
    fill: { acceptedAnswers: ["hành động"], strictMode: false, isSet: false },
  },
];
