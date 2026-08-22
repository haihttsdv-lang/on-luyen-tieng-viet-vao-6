import type { Exercise } from "@/data-access/types";

// DH-passage-18 — "Vì sao chúng ta cần uống đủ nước" (văn bản thông tin,
// khoa học sức khoẻ). Tự biên soạn (Mục 10.1 hướng B). Không có cốt
// truyện/nhân vật nên không gắn câu hỏi DH-02/DH-03 ở đây.
export const DH_PASSAGE_18_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-18-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-18",
    prompt: "Nước chiếm khoảng bao nhiêu phần trăm trọng lượng cơ thể con người?",
    explanation: "Văn bản nêu trực tiếp: nước chiếm khoảng 70% trọng lượng cơ thể.",
    mcq: {
      options: ["30%", "50%", "70%", "90%"],
      answerIndex: 2,
      distractorNotes: [
        "Văn bản không đưa ra con số này.",
        "Văn bản không đưa ra con số này.",
        "Đúng — đây là con số được nêu trực tiếp trong bài.",
        "Văn bản không đưa ra con số này.",
      ],
    },
  },
  {
    id: "dh-passage-18-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-18",
    prompt: "Nước giúp vận chuyển chất dinh dưỡng và gì đến các tế bào? (trả lời bằng từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: nước giúp vận chuyển chất dinh dưỡng và ô-xi đến các tế bào.",
    fill: { acceptedAnswers: ["ô-xi", "oxi"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-18-q3",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-18",
    prompt: "Nội dung chính của văn bản trên là gì?",
    explanation: "Toàn bộ văn bản giải thích vai trò của nước đối với cơ thể và khuyên nên uống nước đều đặn.",
    mcq: {
      options: [
        "Cách chọn loại nước uống ngon nhất",
        "Vai trò của nước đối với cơ thể và lời khuyên nên uống nước đều đặn",
        "Kể chuyện về một chuyến đi biển",
        "Hướng dẫn cách lọc nước sạch",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không so sánh các loại nước uống.",
        "Đúng — đây là nội dung chính xuyên suốt văn bản.",
        "Đây là văn bản thông tin khoa học, không phải truyện kể.",
        "Văn bản không hướng dẫn cách lọc nước.",
      ],
    },
  },
  {
    id: "dh-passage-18-q4",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-18",
    prompt: "Dựa vào văn bản, vì sao nên uống nước đều đặn thay vì đợi đến khi khát mới uống?",
    explanation: "Suy luận từ văn bản: cảm giác khát là dấu hiệu cơ thể đã bắt đầu thiếu nước, nên uống đều đặn giúp tránh tình trạng mất nước với các biểu hiện mệt mỏi, khó tập trung.",
    mcq: {
      options: [
        "Vì nước có mùi vị ngon hơn khi uống đều đặn",
        "Vì khi cảm thấy khát, cơ thể có thể đã bắt đầu thiếu nước, gây mệt mỏi, khó tập trung",
        "Vì uống nước đều đặn giúp tiết kiệm tiền",
        "Vì bác sĩ yêu cầu uống nước theo giờ cố định",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đề cập đến mùi vị nước.",
        "Đúng — đây là suy luận hợp lý dựa trên các biểu hiện thiếu nước được nêu trong bài.",
        "Văn bản không đề cập đến vấn đề tiền bạc.",
        "Văn bản không nói bác sĩ yêu cầu giờ giấc cố định.",
      ],
    },
  },
  {
    id: "dh-passage-18-q5",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-18",
    prompt: 'Trong văn bản, cụm từ "điều hoà thân nhiệt" có nghĩa gần nhất với điều gì?',
    explanation: "Dựa vào ngữ cảnh, \"điều hoà thân nhiệt\" nghĩa là giữ cho nhiệt độ cơ thể luôn ổn định, không quá nóng hay quá lạnh.",
    mcq: {
      options: [
        "Giữ cho nhiệt độ cơ thể luôn ổn định",
        "Làm cho cơ thể mạnh khoẻ hơn",
        "Giúp cơ thể cao lớn hơn",
        "Giúp da mịn màng hơn",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là nghĩa của cụm từ \"điều hoà thân nhiệt\" dựa trên ngữ cảnh bài viết.",
        "Đây không phải nghĩa chính xác của cụm từ này.",
        "Văn bản không nói về chiều cao.",
        "Văn bản không nói về làn da ở đoạn này.",
      ],
    },
  },
  {
    id: "dh-passage-18-q6",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-18",
    prompt: "Theo văn bản, khi nào cơ thể đặc biệt cần bổ sung thêm nước?",
    explanation: "Văn bản nêu trực tiếp: sau khi vận động hoặc chơi thể thao, cơ thể ra nhiều mồ hôi nên cần bổ sung nước.",
    mcq: {
      options: [
        "Khi vừa ngủ dậy",
        "Sau khi vận động hoặc chơi thể thao",
        "Khi đang xem ti vi",
        "Khi đang ngồi học trong lớp",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nhấn mạnh thời điểm này.",
        "Đúng — văn bản nêu rõ đây là thời điểm cần bổ sung nước đặc biệt.",
        "Văn bản không nhấn mạnh thời điểm này.",
        "Văn bản không nhấn mạnh thời điểm này.",
      ],
    },
  },
];
