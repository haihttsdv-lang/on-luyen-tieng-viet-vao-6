import type { Exercise } from "@/data-access/types";

// KN-02 — Kỹ năng làm bài cảm thụ. Câu hỏi tự biên soạn, minh hoạ đúng quy
// trình dạy ở phần lesson (Mục 10.1 hướng B).
export const KN02_EXERCISES: Exercise[] = [
  {
    id: "kn-02-mcq-1",
    topicIds: ["KN-02"],
    level: "M1",
    questionType: "mcq",
    prompt: "Bước nào sau đây nên làm ĐẦU TIÊN khi làm bài cảm thụ?",
    explanation:
      "Trước khi gọi tên biện pháp hay nêu tác dụng, cần đọc kỹ và gạch chân từ ngữ, hình ảnh đặc biệt trong câu/đoạn văn.",
    mcq: {
      options: [
        "Đọc kỹ câu văn, gạch chân từ ngữ/hình ảnh đặc biệt",
        "Viết ngay cảm xúc của bản thân",
        "Nêu tác dụng của biện pháp tu từ",
        "Viết kết đoạn",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là bước đầu tiên trong quy trình làm bài cảm thụ.",
        "Liên hệ cảm xúc là bước cuối, sau khi đã xác định biện pháp và tác dụng.",
        "Cần xác định đúng biện pháp tu từ trước khi nêu tác dụng.",
        "Kết đoạn là phần viết sau cùng khi hoàn thiện cả đoạn văn.",
      ],
    },
  },
  {
    id: "kn-02-mcq-2",
    topicIds: ["KN-02"],
    level: "M2",
    questionType: "mcq",
    prompt:
      "Một bài cảm thụ chỉ gọi đúng tên biện pháp tu từ nhưng KHÔNG nêu tác dụng của biện pháp đó. Bài làm này sẽ như thế nào?",
    explanation:
      "Bài làm đạt điểm cao cần đủ cả hai phần: gọi đúng tên biện pháp và nêu đúng tác dụng — thiếu tác dụng vẫn bị trừ điểm nặng dù gọi tên đúng.",
    mcq: {
      options: [
        "Vẫn đạt điểm tối đa vì đã xác định đúng biện pháp",
        "Bị trừ điểm nặng vì thiếu phần nêu tác dụng",
        "Không liên quan, chỉ cần đúng chính tả là đủ",
        "Được cộng điểm khuyến khích vì trả lời ngắn gọn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Gọi đúng tên biện pháp mới chỉ là một nửa yêu cầu của bài cảm thụ.",
        "Đúng — thiếu phần nêu tác dụng là lỗi thường gặp và bị trừ điểm nặng.",
        "Cảm thụ không chỉ chấm chính tả mà chấm cả nội dung phân tích.",
        "Bài làm thiếu ý không được cộng điểm khuyến khích.",
      ],
    },
  },
  {
    id: "kn-02-fill-1",
    topicIds: ["KN-02"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Sau khi nêu tác dụng của biện pháp tu từ, bước cuối cùng trong quy trình làm bài cảm thụ là ___ cảm xúc, suy nghĩ của bản thân.",
    explanation: "Bước cuối cùng của quy trình là liên hệ cảm xúc, suy nghĩ cá nhân với hình ảnh/nội dung câu văn.",
    fill: { acceptedAnswers: ["liên hệ"], strictMode: false, isSet: false },
  },
  {
    id: "kn-02-mcq-3",
    topicIds: ["KN-02"],
    level: "M3",
    questionType: "mcq",
    prompt:
      "Câu văn \"Hàng cau đứng thẳng như những người lính canh gác khu vườn\" sử dụng biện pháp tu từ nào?",
    explanation: "Câu văn so sánh hàng cau với người lính canh gác — đây là biện pháp so sánh.",
    mcq: {
      options: ["Nhân hoá", "So sánh", "Điệp từ", "Đảo ngữ"],
      answerIndex: 1,
      distractorNotes: [
        "Nhân hoá là gán đặc điểm con người cho vật mà không dùng từ so sánh (như/là/tựa...).",
        "Đúng — câu văn dùng từ \"như\" để so sánh hàng cau với người lính.",
        "Điệp từ là lặp lại một từ/cụm từ nhiều lần, câu này không có.",
        "Đảo ngữ là thay đổi trật tự thông thường của câu, câu này không có.",
      ],
    },
  },
];
