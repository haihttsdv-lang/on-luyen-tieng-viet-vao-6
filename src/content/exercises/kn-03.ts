import type { Exercise } from "@/data-access/types";

// KN-03 — Kỹ năng viết mở bài gián tiếp. Câu hỏi tự biên soạn (Mục 10.1
// hướng B), theo 4 cách mở bài từ Mục 4.4.
export const KN03_EXERCISES: Exercise[] = [
  {
    id: "kn-03-mcq-1",
    topicIds: ["KN-03"],
    level: "M1",
    questionType: "mcq",
    prompt: "Điểm khác biệt chính giữa mở bài trực tiếp và mở bài gián tiếp là gì?",
    explanation:
      "Mở bài trực tiếp nêu ngay đối tượng ở câu đầu; mở bài gián tiếp dẫn dắt qua 1-2 câu trước khi nêu đối tượng.",
    mcq: {
      options: [
        "Mở bài gián tiếp dài hơn mở bài trực tiếp ít nhất 10 câu",
        "Mở bài gián tiếp không nêu ngay đối tượng ở câu đầu mà dẫn dắt trước",
        "Mở bài trực tiếp chỉ dùng cho văn kể chuyện",
        "Hai cách mở bài không có gì khác nhau",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Không có quy định cụ thể về số câu, chỉ cần dẫn dắt hợp lý.",
        "Đúng — đây là điểm khác biệt cốt lõi giữa hai cách mở bài.",
        "Mở bài trực tiếp dùng được cho mọi kiểu bài, không riêng văn kể chuyện.",
        "Hai cách mở bài khác nhau rõ rệt về cách vào đề.",
      ],
    },
  },
  {
    id: "kn-03-mcq-2",
    topicIds: ["KN-03"],
    level: "M2",
    questionType: "mcq",
    prompt:
      "Câu mở bài \"Mỗi độ hè về, tiếng ve lại râm ran khắp sân trường. Đó cũng là lúc cây phượng già ở góc sân bắt đầu khoác lên mình chiếc áo đỏ rực.\" dùng cách mở bài gián tiếp nào?",
    explanation: "Câu mở bài bắt đầu từ một thời điểm đặc biệt (mùa hè) rồi mới dẫn tới đối tượng (cây phượng).",
    mcq: {
      options: [
        "Bắt đầu từ một thời điểm đặc biệt",
        "Dẫn vào từ một âm thanh gắn với đối tượng",
        "Bắt đầu bằng một câu thơ, câu hát",
        "Giới thiệu vị trí hoặc lý do có đối tượng",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — mở bài bắt đầu từ thời điểm \"mỗi độ hè về\".",
        "Tiếng ve chỉ là chi tiết đi kèm thời điểm, không phải điểm xuất phát chính của cách mở bài này.",
        "Câu mở bài không trích dẫn thơ hay câu hát.",
        "Câu mở bài không nói về vị trí hay lý do có cây phượng.",
      ],
    },
  },
  {
    id: "kn-03-fill-1",
    topicIds: ["KN-03"],
    level: "M1",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Dù chọn cách mở bài nào, câu cuối đoạn mở bài luôn phải ___ rõ ràng đối tượng cụ thể sắp được tả hoặc kể.",
    explanation: "Câu cuối đoạn mở bài cần chốt lại rõ ràng đối tượng, để người đọc biết bài sắp viết về ai/cái gì.",
    fill: { acceptedAnswers: ["chốt lại", "chốt"], strictMode: false, isSet: false },
  },
  {
    id: "kn-03-mcq-3",
    topicIds: ["KN-03"],
    level: "M3",
    questionType: "mcq",
    prompt: "Lỗi nào sau đây HAY GẶP nhất khi học sinh viết mở bài gián tiếp?",
    explanation:
      "Lỗi thường gặp nhất là dẫn dắt lan man, kể chuyện không liên quan tới đề, khiến người chấm không hiểu bài sắp viết về gì.",
    mcq: {
      options: [
        "Viết mở bài quá ngắn, chỉ có một câu",
        "Dẫn dắt lan man, không liên quan tới đề và quên chốt lại đối tượng",
        "Dùng quá nhiều từ Hán Việt",
        "Không viết hoa chữ cái đầu câu",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Mở bài ngắn không phải lỗi phổ biến nhất, miễn đủ dẫn dắt và chốt đối tượng.",
        "Đúng — đây là lỗi phổ biến nhất, khiến mở bài lạc đề.",
        "Đây không phải lỗi thường gặp liên quan đến kỹ năng mở bài gián tiếp.",
        "Đây là lỗi chính tả cơ bản, không liên quan đến kỹ năng mở bài gián tiếp.",
      ],
    },
  },
];
