import type { Exercise } from "@/data-access/types";

// DH-passage-24 — "Cụ già bán bánh mì". Văn bản tự biên soạn (Mục 10.1
// hướng B).
export const DH_PASSAGE_24_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-24-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-24",
    prompt: "Cụ già bán bánh mì ngồi bán ở đâu?",
    explanation: "Văn bản nêu trực tiếp: cụ già bán bánh mì ngồi ở góc phố gần trường.",
    mcq: {
      options: ["Ở góc phố gần trường", "Trước cổng chợ", "Trong sân trường", "Ở bến xe buýt"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản không nói cụ bán ở chợ.",
        "Văn bản không nói cụ bán trong sân trường.",
        "Văn bản không nhắc đến bến xe buýt.",
      ],
    },
  },
  {
    id: "dh-passage-24-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-24",
    prompt: "Cụ đã bán bánh mì suốt bao nhiêu năm để nuôi các con ăn học? (trả lời bằng số/cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: cụ đã bán bánh mì suốt hơn ba mươi năm.",
    fill: { acceptedAnswers: ["hơn ba mươi năm", "ba mươi năm", "30 năm", "hơn 30 năm"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-24-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-24",
    prompt: "Sự việc nào xảy ra NGAY SAU KHI Nghĩa nghe được câu chuyện của cụ già?",
    explanation: "Theo trình tự: Nghĩa nghe chuyện, cảm thấy khâm phục, sau đó mỗi lần mua bánh đều lễ phép chào hỏi và trò chuyện với cụ.",
    mcq: {
      options: [
        "Nghĩa cảm thấy vô cùng khâm phục nghị lực và tình yêu lao động của cụ",
        "Cụ khuyên các con để cụ tiếp tục bán hàng",
        "Nghĩa còn học lớp một",
        "Các con của cụ có công việc ổn định",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là cảm xúc của Nghĩa ngay sau khi nghe câu chuyện của cụ.",
        "Đây là một phần nội dung câu chuyện cụ kể, xảy ra trước đó.",
        "Đây là bối cảnh thời gian, xảy ra từ trước.",
        "Đây là chi tiết trong câu chuyện cụ kể, xảy ra trước khi Nghĩa nghe được.",
      ],
    },
  },
  {
    id: "dh-passage-24-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-24",
    prompt: "Chi tiết nào cho thấy cụ già là người yêu lao động, cần cù?",
    explanation: "Chi tiết cụ vẫn kiên trì ngồi bán bánh mì dù trời nắng hay mưa, và muốn tiếp tục làm việc dù các con đã trưởng thành, ổn định thể hiện rõ tình yêu lao động, sự cần cù.",
    mcq: {
      options: [
        "Cụ đã bán bánh mì được hơn ba mươi năm",
        "Dù trời nắng hay mưa, cụ vẫn kiên trì ngồi bán và muốn tiếp tục làm việc dù các con đã ổn định",
        "Chiếc xe bánh mì của cụ luôn được lau chùi sạch sẽ",
        "Bánh mì của cụ tuy giản dị nhưng nóng hổi, đậm đà",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là thông tin thời gian, chưa thể hiện rõ tính cách.",
        "Đúng — sự kiên trì bất kể thời tiết và mong muốn tiếp tục làm việc thể hiện rõ tình yêu lao động.",
        "Đây thể hiện sự cẩn thận, chưa phải là tình yêu lao động.",
        "Đây là nhận xét về chất lượng bánh, không phải về tính cách của cụ.",
      ],
    },
  },
  {
    id: "dh-passage-24-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-24",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu cuối văn bản nêu rõ: dù công việc giản dị đến đâu, nếu được làm với sự cần cù và tình yêu, nó vẫn mang lại ý nghĩa và niềm vui to lớn.",
    mcq: {
      options: [
        "Người già không nên tiếp tục làm việc",
        "Dù công việc giản dị đến đâu, nếu làm với sự cần cù và tình yêu, nó vẫn mang lại ý nghĩa và niềm vui",
        "Chỉ những công việc lớn lao mới đáng được khâm phục",
        "Học sinh không nên trò chuyện với người lạ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Đúng — đây là bài học được nêu rõ ở câu cuối văn bản.",
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Văn bản không đưa ra lời khuyên này; cụ là người quen của Nghĩa.",
      ],
    },
  },
  {
    id: "dh-passage-24-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-24",
    prompt: "Vì sao cụ già vẫn muốn tiếp tục bán bánh mì dù các con đã khuyên cụ nghỉ ngơi?",
    explanation: "Văn bản gợi ý: cụ đã quen với công việc, thấy mình còn khoẻ, và ngồi ở nhà mới thấy buồn chán — công việc mang lại niềm vui, ý nghĩa cho cụ hơn là gánh nặng.",
    mcq: {
      options: [
        "Vì cụ cần thêm tiền để trang trải cuộc sống",
        "Vì cụ đã quen với công việc, thấy mình còn khoẻ và cảm thấy buồn chán nếu chỉ ngồi ở nhà",
        "Vì các con của cụ không đủ khả năng chu cấp",
        "Vì cụ muốn dạy nghề bán bánh mì cho các con",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói lý do là vì thiếu tiền — các con đã ổn định và khuyên cụ nghỉ.",
        "Đúng — đây là lý do được nêu trực tiếp trong lời cụ kể.",
        "Văn bản nói các con đã trưởng thành, có công việc ổn định.",
        "Văn bản không nhắc đến việc dạy nghề.",
      ],
    },
  },
];
