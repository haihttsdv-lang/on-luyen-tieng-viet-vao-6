import type { Exercise } from "@/data-access/types";

// DH-passage-05 — "Món quà đặc biệt". Văn bản tự biên soạn (Mục 10.1
// hướng B).
export const DH_PASSAGE_05_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-05-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-05",
    prompt: "Vì sao Hà không thể mua quà sinh nhật cho mẹ ở cửa hàng?",
    explanation: "Văn bản nêu trực tiếp: Hà chỉ có năm nghìn đồng tiền tiết kiệm, không đủ để mua quà.",
    mcq: {
      options: [
        "Vì Hà không thích đi mua sắm",
        "Vì Hà chỉ có năm nghìn đồng, không đủ tiền mua quà",
        "Vì cửa hàng đã đóng cửa",
        "Vì mẹ không thích quà mua ở cửa hàng",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói về sở thích mua sắm của Hà.",
        "Đúng — đây là lý do được nêu trực tiếp trong bài.",
        "Văn bản không nhắc đến việc cửa hàng đóng cửa.",
        "Văn bản không nói về sở thích của mẹ đối với quà mua sẵn.",
      ],
    },
  },
  {
    id: "dh-passage-05-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-05",
    prompt: "Ai đã dạy Hà cách gấp hoa giấy? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: bà ngoại đã dạy Hà gấp hoa giấy hồi hè trước.",
    fill: { acceptedAnswers: ["bà ngoại"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-05-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-05",
    prompt: "Sự việc nào xảy ra TRƯỚC TIÊN trong câu chuyện?",
    explanation: "Theo trình tự: đầu tiên Hà nhận ra mình không đủ tiền mua quà, sau đó mới nghĩ đến việc gấp hoa giấy, rồi tặng mẹ.",
    mcq: {
      options: [
        "Hà tặng bó hoa giấy cho mẹ",
        "Hà nhận ra mình không đủ tiền mua quà ở cửa hàng",
        "Hà cặm cụi gấp hoa suốt hai buổi tối",
        "Mẹ ôm chầm lấy Hà",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là sự việc xảy ra cuối truyện.",
        "Đúng — đây là sự việc mở đầu câu chuyện.",
        "Việc này xảy ra sau khi Hà nghĩ ra ý tưởng làm hoa giấy.",
        "Đây là phản ứng của mẹ, xảy ra sau khi nhận quà.",
      ],
    },
  },
  {
    id: "dh-passage-05-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-05",
    prompt: "Chi tiết nào cho thấy Hà là người kiên trì, chịu khó?",
    explanation: "Chi tiết Hà cặm cụi gấp hoa suốt hai buổi tối, dù vài lần bị giấy cứa tay vẫn kiên nhẫn hoàn thành, thể hiện rõ đức tính này.",
    mcq: {
      options: [
        "Hà buồn bã ngồi trong phòng",
        "Hà cặm cụi gấp hoa suốt hai buổi tối dù vài lần bị giấy cứa tay",
        "Hà có năm nghìn đồng tiền tiết kiệm",
        "Hà rụt rè đưa quà cho mẹ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là cảm xúc ban đầu, chưa thể hiện sự kiên trì.",
        "Đúng — kiên nhẫn hoàn thành công việc dù gặp khó khăn nhỏ thể hiện rõ tính kiên trì.",
        "Chi tiết này không liên quan đến tính kiên trì.",
        "Đây là cảm xúc lúc tặng quà, không thể hiện sự kiên trì.",
      ],
    },
  },
  {
    id: "dh-passage-05-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-05",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện cho thấy món quà chứa đựng tấm lòng, công sức luôn quý giá hơn giá trị vật chất.",
    mcq: {
      options: [
        "Nên tiết kiệm tiền để mua quà đắt tiền",
        "Món quà chứa đựng tấm lòng và công sức luôn quý giá, dù không đắt tiền",
        "Trẻ em không nên tự làm đồ thủ công vì dễ bị đứt tay",
        "Nên mua quà ở cửa hàng lớn để đảm bảo chất lượng",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là ý ngược lại với thông điệp mà câu chuyện muốn truyền tải.",
        "Đúng — đây là bài học chính được thể hiện qua phản ứng xúc động của mẹ.",
        "Văn bản không đưa ra lời khuyên né tránh làm đồ thủ công.",
        "Văn bản không đưa ra lời khuyên này.",
      ],
    },
  },
  {
    id: "dh-passage-05-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-05",
    prompt: 'Vì sao mẹ "mắt rưng rưng xúc động" khi nhận được bó hoa giấy?',
    explanation: "Có thể suy luận: mẹ xúc động vì cảm nhận được tình cảm chân thành và công sức Hà bỏ ra, chứ không phải vì giá trị vật chất của món quà.",
    mcq: {
      options: [
        "Vì bó hoa giấy có giá trị vật chất rất cao",
        "Vì mẹ cảm nhận được tình cảm chân thành và công sức của Hà",
        "Vì mẹ không thích hoa giấy",
        "Vì mẹ bất ngờ vì được tặng quà đúng ngày",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Hoa giấy không có giá trị vật chất cao, điều khiến mẹ xúc động là tấm lòng của Hà.",
        "Đúng — đây là suy luận hợp lý dựa trên lời mẹ nói và bối cảnh câu chuyện.",
        "Phản ứng của mẹ cho thấy ngược lại — mẹ rất trân trọng món quà.",
        "Mẹ xúc động vì tình cảm chứa trong món quà, không chỉ vì bất ngờ về thời điểm.",
      ],
    },
  },
];
