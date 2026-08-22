import type { Exercise } from "@/data-access/types";

// DH-passage-07 — "Cuộc thi vẽ tranh". Văn bản tự biên soạn (Mục 10.1
// hướng B).
export const DH_PASSAGE_07_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-07-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-07",
    prompt: "Chủ đề của cuộc thi vẽ tranh mà Tâm tham gia là gì?",
    explanation: "Văn bản nêu trực tiếp: chủ đề cuộc thi là \"Ngôi nhà mơ ước\".",
    mcq: {
      options: ["Ngôi nhà mơ ước", "Mùa hè của em", "Trường học thân yêu", "Gia đình em"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chủ đề được nêu trực tiếp trong bài.",
        "Văn bản không nhắc đến chủ đề này.",
        "Văn bản không nhắc đến chủ đề này.",
        "Văn bản không nhắc đến chủ đề này.",
      ],
    },
  },
  {
    id: "dh-passage-07-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-07",
    prompt: "Ai đã vô tình làm đổ nước lên bức tranh của Tâm? (trả lời bằng tên riêng có trong bài)",
    explanation: "Văn bản nêu trực tiếp: Tâm va phải Đức khiến ly nước của Đức đổ lên bức tranh.",
    fill: { acceptedAnswers: ["Đức"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-07-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-07",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI bức tranh bị đổ nước lên?",
    explanation: "Theo trình tự: sau khi tranh bị đổ nước, Đức xin lỗi và Tâm nói không sao, sau đó tối đó Tâm mới nghĩ cách sửa tranh.",
    mcq: {
      options: [
        "Tâm giành giải Nhất",
        "Đức xin lỗi rối rít, Tâm nói không sao và sẽ sửa lại",
        "Tâm bắt đầu phác thảo bức tranh",
        "Tâm biến vết nhoè thành đám mây",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là kết quả cuối truyện, không phải ngay sau sự cố.",
        "Đúng — đây là phản ứng ngay sau khi sự cố xảy ra.",
        "Đây là việc xảy ra trước sự cố, khi bắt đầu vẽ tranh.",
        "Việc này xảy ra tối hôm đó, sau khi Đức đã xin lỗi.",
      ],
    },
  },
  {
    id: "dh-passage-07-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-07",
    prompt: "Chi tiết nào cho thấy Tâm là người bao dung, không giận dữ với bạn?",
    explanation: "Chi tiết Tâm không trách móc Đức mà chỉ nói \"Không sao đâu, để tớ sửa lại\" thể hiện rõ sự bao dung.",
    mcq: {
      options: [
        "Tâm miệt mài vẽ tranh suốt một tuần",
        "Tâm không trách móc Đức mà nói \"Không sao đâu, để tớ sửa lại\"",
        "Tâm giành giải Nhất cuộc thi",
        "Tâm phác thảo ngôi nhà bên sườn đồi",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây thể hiện sự chăm chỉ, không phải sự bao dung.",
        "Đúng — phản ứng nhẹ nhàng, không trách móc bạn thể hiện rõ sự bao dung.",
        "Đây là kết quả, không phải chi tiết thể hiện tính cách trực tiếp.",
        "Đây chỉ là mô tả nội dung bức tranh, không thể hiện tính cách.",
      ],
    },
  },
  {
    id: "dh-passage-07-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-07",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu cuối văn bản nêu rõ: một sự cố tưởng chừng tồi tệ có thể trở thành cơ hội sáng tạo nếu biết bình tĩnh đối mặt.",
    mcq: {
      options: [
        "Không nên mang nước đến gần tranh vẽ",
        "Một sự cố tưởng chừng tồi tệ có thể trở thành cơ hội sáng tạo nếu biết bình tĩnh đối mặt",
        "Nên vẽ tranh thật nhanh để tránh sự cố",
        "Chỉ nên tham gia thi vẽ khi chắc chắn thắng",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là chi tiết bề mặt, không phải bài học chính.",
        "Đúng — đây là bài học được nêu rõ ở cuối văn bản.",
        "Văn bản không đưa ra lời khuyên này.",
        "Văn bản không đưa ra lời khuyên này.",
      ],
    },
  },
  {
    id: "dh-passage-07-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-07",
    prompt: "Vì sao bức tranh của Tâm giành giải Nhất dù từng bị hỏng?",
    explanation: "Có thể suy luận: nhờ Tâm biến vết nhoè thành sáng tạo mới (đám mây), bức tranh trở nên độc đáo, sinh động hơn trong mắt ban giám khảo.",
    mcq: {
      options: [
        "Vì Tâm là bạn thân của ban giám khảo",
        "Vì Tâm đã biến vết nhoè thành một chi tiết sáng tạo khiến tranh sinh động hơn",
        "Vì các bạn khác không nộp tranh kịp",
        "Vì tranh của Tâm là bức duy nhất được nộp",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nhắc đến mối quan hệ này.",
        "Đúng — đây là suy luận hợp lý dựa trên diễn biến câu chuyện.",
        "Văn bản không đề cập đến việc này.",
        "Văn bản không nói đây là bức tranh duy nhất.",
      ],
    },
  },
];
