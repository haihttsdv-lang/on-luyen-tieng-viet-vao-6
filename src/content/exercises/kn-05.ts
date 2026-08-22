import type { Exercise } from "@/data-access/types";

// KN-05 — Kỹ năng soát lỗi trước khi nộp. Câu hỏi tự biên soạn (Mục 10.1
// hướng B).
export const KN05_EXERCISES: Exercise[] = [
  {
    id: "kn-05-mcq-1",
    topicIds: ["KN-05"],
    level: "M1",
    questionType: "mcq",
    prompt: "Khi soát lỗi chính tả, em nên đặc biệt chú ý đến cặp âm nào?",
    explanation: "Các cặp âm l/n, ch/tr, s/x, r/d/gi và dấu hỏi/dấu ngã là những lỗi chính tả dễ mắc nhất.",
    mcq: {
      options: [
        "l/n, ch/tr, s/x, r/d/gi và dấu hỏi/dấu ngã",
        "Các chữ số 0-9",
        "Dấu chấm than và dấu chấm hỏi",
        "Chữ in hoa và chữ in thường trong mọi trường hợp",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là các cặp âm/dấu dễ nhầm lẫn nhất trong chính tả tiếng Việt.",
        "Chữ số không liên quan đến lỗi chính tả thường gặp trong bài văn.",
        "Đây là lỗi dấu câu, không phải trọng tâm khi soát lỗi chính tả.",
        "Chỉ cần chú ý viết hoa đúng quy tắc (tên riêng, đầu câu), không phải mọi trường hợp.",
      ],
    },
  },
  {
    id: "kn-05-mcq-2",
    topicIds: ["KN-05"],
    level: "M2",
    questionType: "mcq",
    prompt: "Câu \"Em rất là thích con mèo nhà em\" có lỗi gì cần sửa khi soát lại?",
    explanation: "Từ \"là\" trong câu này là thừa, không cần thiết — nên bỏ để câu gọn hơn: \"Em rất thích con mèo nhà em.\"",
    mcq: {
      options: [
        "Thiếu chủ ngữ",
        "Thừa từ \"là\", nên bỏ đi cho câu gọn hơn",
        "Sai chính tả từ \"mèo\"",
        "Thiếu dấu chấm cuối câu",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Câu đã có chủ ngữ \"Em\", không thiếu.",
        "Đúng — từ \"là\" ở đây thừa, làm câu lủng củng.",
        "Từ \"mèo\" viết đúng chính tả.",
        "Không có thông tin cho thấy câu thiếu dấu chấm.",
      ],
    },
  },
  {
    id: "kn-05-fill-1",
    topicIds: ["KN-05"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Khi soát lỗi, nên sửa trực tiếp bằng cách gạch một gạch ngang lên chỗ sai, không nên ___ nhiều lần khiến bài mất gọn gàng.",
    explanation: "Tẩy xoá nhiều lần khiến bài làm không gọn gàng, sạch đẹp — nên gạch một gạch ngang rồi viết lại bên cạnh.",
    fill: { acceptedAnswers: ["tẩy xoá", "tẩy xóa"], strictMode: false, isSet: false },
  },
  {
    id: "kn-05-mcq-3",
    topicIds: ["KN-05"],
    level: "M3",
    questionType: "mcq",
    prompt: "Vì sao học sinh thường bỏ qua bước soát lỗi dù biết bước này quan trọng?",
    explanation:
      "Nguyên nhân phổ biến nhất là không phân bổ thời gian tốt từ đầu (xem thêm KN-04), dẫn đến hết giờ trước khi kịp soát lại bài.",
    mcq: {
      options: [
        "Vì bài làm không bao giờ có lỗi",
        "Vì không phân bổ thời gian tốt từ đầu nên hết giờ trước khi soát lại được",
        "Vì soát lỗi không ảnh hưởng đến điểm số",
        "Vì đề thi không cho phép soát lại bài",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Bài làm luôn có thể có lỗi, đây không phải lý do hợp lý.",
        "Đúng — thiếu thời gian do phân bổ chưa hợp lý là nguyên nhân phổ biến nhất.",
        "Soát lỗi giúp tránh mất điểm oan, có ảnh hưởng trực tiếp đến điểm số.",
        "Đề thi luôn cho phép học sinh soát lại bài trong thời gian làm bài.",
      ],
    },
  },
];
