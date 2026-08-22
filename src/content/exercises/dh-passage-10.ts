import type { Exercise } from "@/data-access/types";

// DH-passage-10 — "Bài học từ chú kiến nhỏ". Văn bản tự biên soạn (Mục
// 10.1 hướng B) — không phải bản dịch/phóng tác từ bất kỳ truyện ngụ ngôn
// cụ thể nào.
export const DH_PASSAGE_10_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-10-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-10",
    prompt: "Chú kiến trong câu chuyện đang cố gắng làm gì?",
    explanation: "Văn bản nêu trực tiếp: chú kiến đang cố gắng tha một hạt đậu to gấp nhiều lần cơ thể mình.",
    mcq: {
      options: [
        "Xây tổ mới",
        "Tha một hạt đậu to gấp nhiều lần cơ thể mình",
        "Tìm đường về tổ",
        "Chiến đấu với một con kiến khác",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nhắc đến việc xây tổ.",
        "Đúng — đây là chi tiết nêu trực tiếp ở đầu văn bản.",
        "Văn bản không nói kiến đang tìm đường về tổ.",
        "Văn bản không nhắc đến việc chiến đấu.",
      ],
    },
  },
  {
    id: "dh-passage-10-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-10",
    prompt: "Chú kiến đã dùng vật gì làm cầu để vượt qua rãnh nứt? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: chú kiến dùng một chiếc lá khô nhỏ làm cầu.",
    fill: { acceptedAnswers: ["chiếc lá khô", "lá khô"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-10-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-10",
    prompt: "Sự việc nào xảy ra SAU CÙNG trong câu chuyện?",
    explanation: "Theo trình tự: Bảo quan sát kiến, kiến vượt qua rãnh nứt, Bảo nhớ lại bài toán bỏ dở, cuối cùng Bảo giải được bài toán vào tối đó.",
    mcq: {
      options: [
        "Bảo nhìn thấy chú kiến tha hạt đậu",
        "Chú kiến dùng lá khô làm cầu vượt qua rãnh nứt",
        "Bảo tìm ra đáp án đúng cho bài toán",
        "Bảo định giúp kiến nhưng rồi tò mò quan sát tiếp",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Đây là sự việc mở đầu câu chuyện.",
        "Việc này xảy ra ở giữa câu chuyện, trước khi Bảo hành động.",
        "Đúng — đây là sự việc diễn ra cuối truyện, vào tối hôm đó.",
        "Việc này xảy ra trước khi kiến tìm được chiếc lá khô.",
      ],
    },
  },
  {
    id: "dh-passage-10-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-10",
    prompt: "Chi tiết nào cho thấy Bảo là người biết nhìn nhận, sửa đổi bản thân?",
    explanation: "Chi tiết Bảo cảm thấy xấu hổ vì bỏ cuộc sớm và quyết tâm thử lại bài toán bằng cách khác cho thấy Bảo biết tự nhìn nhận và sửa đổi.",
    mcq: {
      options: [
        "Bảo ngồi nghỉ dưới gốc cây",
        "Bảo cảm thấy xấu hổ vì bỏ cuộc sớm và quyết tâm thử lại bài toán bằng cách khác",
        "Bảo tò mò quan sát chú kiến",
        "Bảo định nhặt hạt đậu giúp kiến",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là hành động thông thường, chưa thể hiện tính cách.",
        "Đúng — nhận ra thiếu sót và quyết tâm sửa đổi thể hiện rõ khả năng tự nhìn nhận bản thân.",
        "Đây là hành động ban đầu, chưa thể hiện sự thay đổi.",
        "Đây là suy nghĩ thoáng qua, không thể hiện rõ sự thay đổi của Bảo.",
      ],
    },
  },
  {
    id: "dh-passage-10-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-10",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện qua hình ảnh chú kiến kiên trì thử nhiều cách để vượt khó khăn, khuyên con người không nên bỏ cuộc sớm khi gặp trở ngại.",
    mcq: {
      options: [
        "Không nên nuôi kiến trong nhà",
        "Cần kiên trì thử nhiều cách để vượt qua khó khăn, không nên bỏ cuộc sớm",
        "Kiến là loài vật thông minh nhất",
        "Nên nhờ người khác giúp đỡ ngay khi gặp khó khăn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên này.",
        "Đúng — đây là bài học chính được rút ra qua sự thay đổi của Bảo.",
        "Văn bản không so sánh trí thông minh giữa các loài vật.",
        "Đây là ý ngược lại — câu chuyện đề cao việc tự mình kiên trì tìm cách.",
      ],
    },
  },
  {
    id: "dh-passage-10-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-10",
    prompt: "Vì sao Bảo quyết định không giúp chú kiến ngay từ đầu mà chỉ quan sát?",
    explanation: "Suy luận từ văn bản: Bảo tò mò muốn xem chú kiến sẽ tự xoay xở, giải quyết vấn đề như thế nào.",
    mcq: {
      options: [
        "Vì Bảo sợ chạm vào kiến",
        "Vì Bảo tò mò muốn xem chú kiến sẽ tự xoay xở ra sao",
        "Vì Bảo không thích loài kiến",
        "Vì Bảo không có thời gian giúp đỡ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói Bảo sợ kiến.",
        "Đúng — văn bản nêu rõ Bảo \"tò mò muốn xem chú kiến sẽ xoay xở ra sao\".",
        "Văn bản không cho thấy điều này.",
        "Văn bản không nói Bảo bận rộn, ngược lại cậu đang ngồi nghỉ.",
      ],
    },
  },
];
