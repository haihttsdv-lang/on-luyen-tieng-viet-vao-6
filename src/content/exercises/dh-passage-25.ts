import type { Exercise } from "@/data-access/types";

// DH-passage-25 — "Vì sao có sấm sét" (văn bản thông tin, khoa học tự
// nhiên). Tự biên soạn (Mục 10.1 hướng B). Không có cốt truyện/nhân vật
// nên không gắn câu hỏi DH-02/DH-03 ở đây.
export const DH_PASSAGE_25_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-25-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-25",
    prompt: "Điện tích trong đám mây giông được tạo ra do đâu?",
    explanation: "Văn bản nêu trực tiếp: do sự va chạm mạnh giữa các hạt nước, hạt băng nhỏ bên trong đám mây giông.",
    mcq: {
      options: [
        "Sự va chạm mạnh giữa các hạt nước, hạt băng nhỏ trong đám mây",
        "Ánh sáng mặt trời chiếu vào đám mây",
        "Gió thổi mạnh làm mây di chuyển nhanh",
        "Nhiệt độ mặt đất tăng cao",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp trong bài.",
        "Văn bản không nói nguyên nhân là ánh sáng mặt trời.",
        "Văn bản không nói nguyên nhân là gió thổi mạnh.",
        "Văn bản không nói nguyên nhân là nhiệt độ mặt đất.",
      ],
    },
  },
  {
    id: "dh-passage-25-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-25",
    prompt: "Cứ khoảng bao nhiêu giây giữa lúc thấy chớp và nghe sấm tương ứng với một ki-lô-mét? (trả lời bằng số có trong bài)",
    explanation: "Văn bản nêu trực tiếp: cứ khoảng ba giây tương ứng với một ki-lô-mét.",
    fill: { acceptedAnswers: ["ba giây", "3 giây", "3"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-25-q3",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-25",
    prompt: "Theo văn bản, tiếng sấm được tạo ra như thế nào?",
    explanation: "Văn bản nêu trực tiếp: luồng điện cực mạnh khiến không khí xung quanh bị nung nóng đột ngột, giãn nở cực nhanh tạo ra tiếng nổ lớn gọi là sấm.",
    mcq: {
      options: [
        "Do mây va chạm với nhau tạo ra tiếng động",
        "Do luồng điện cực mạnh nung nóng và làm không khí giãn nở đột ngột, tạo tiếng nổ",
        "Do gió thổi qua các đám mây",
        "Do mưa rơi mạnh xuống mặt đất",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói mây va chạm tạo tiếng động trực tiếp.",
        "Đúng — đây là cơ chế tạo ra tiếng sấm được nêu trực tiếp trong bài.",
        "Văn bản không nói nguyên nhân là gió.",
        "Văn bản không nói nguyên nhân là mưa rơi.",
      ],
    },
  },
  {
    id: "dh-passage-25-q4",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-25",
    prompt: "Nội dung chính của văn bản trên là gì?",
    explanation: "Toàn bộ văn bản giải thích nguyên nhân hình thành sấm sét và cách ước tính khoảng cách đến nơi sét đánh, kèm lời khuyên an toàn.",
    mcq: {
      options: [
        "Kể chuyện về một cơn mưa giông lớn",
        "Giải thích nguyên nhân hình thành sấm sét và cách phòng tránh nguy hiểm",
        "Hướng dẫn cách dự báo thời tiết",
        "So sánh sấm sét ở các vùng miền khác nhau",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là văn bản thông tin khoa học, không phải truyện kể.",
        "Đúng — đây là nội dung chính xuyên suốt văn bản.",
        "Văn bản không hướng dẫn dự báo thời tiết.",
        "Văn bản không so sánh giữa các vùng miền.",
      ],
    },
  },
  {
    id: "dh-passage-25-q5",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-25",
    prompt: "Dựa vào văn bản, vì sao chúng ta luôn nhìn thấy chớp trước rồi mới nghe thấy sấm?",
    explanation: "Văn bản nêu rõ nguyên nhân: ánh sáng truyền đi nhanh hơn âm thanh rất nhiều lần, nên tia chớp (ánh sáng) đến mắt ta trước tiếng sấm (âm thanh).",
    mcq: {
      options: [
        "Vì sấm được tạo ra sau khi chớp xuất hiện vài giây",
        "Vì ánh sáng truyền đi nhanh hơn âm thanh rất nhiều lần",
        "Vì mắt người nhạy hơn tai người",
        "Vì chớp xảy ra ở gần còn sấm xảy ra ở xa",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Chớp và sấm thực ra xảy ra gần như đồng thời tại nơi sét đánh, chỉ là ta cảm nhận khác thời điểm.",
        "Đúng — đây là nguyên nhân được nêu trực tiếp trong bài.",
        "Văn bản không so sánh độ nhạy giữa mắt và tai.",
        "Văn bản không nói chớp và sấm xảy ra ở hai vị trí khác nhau.",
      ],
    },
  },
  {
    id: "dh-passage-25-q6",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-25",
    prompt: "Theo văn bản, khi trời có giông sét, các em nên tránh làm gì?",
    explanation: "Văn bản nêu trực tiếp: nên tránh đứng dưới cây cao hoặc cầm đồ vật kim loại khi trời có giông sét.",
    mcq: {
      options: [
        "Đứng dưới cây cao hoặc cầm đồ vật kim loại",
        "Ở trong nhà đóng kín cửa",
        "Mặc áo mưa màu sáng",
        "Đội mũ bảo hiểm khi ra đường",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là lời khuyên được nêu trực tiếp ở cuối văn bản.",
        "Văn bản không đề cập việc này như một điều cần tránh.",
        "Văn bản không nhắc đến màu áo mưa.",
        "Văn bản không nhắc đến mũ bảo hiểm.",
      ],
    },
  },
];
