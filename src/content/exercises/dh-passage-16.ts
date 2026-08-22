import type { Exercise } from "@/data-access/types";

// DH-passage-16 — "Người lái đò trên sông". Văn bản tự biên soạn (Mục
// 10.1 hướng B).
export const DH_PASSAGE_16_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-16-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-16",
    prompt: "Bác Tám đã làm nghề chèo đò được bao lâu?",
    explanation: "Văn bản nêu trực tiếp: bác Tám đã chèo đò hơn hai mươi năm nay.",
    mcq: {
      options: ["Hơn hai mươi năm", "Mới bắt đầu năm nay", "Khoảng một năm", "Hơn năm năm"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp ở đầu văn bản.",
        "Văn bản nói bác đã làm nghề này rất lâu, không phải mới bắt đầu.",
        "Văn bản nói con số lớn hơn nhiều.",
        "Văn bản nói con số lớn hơn nhiều.",
      ],
    },
  },
  {
    id: "dh-passage-16-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-16",
    prompt: "Ai đã gọi bác Tám chèo đò gấp trong đêm mưa gió? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: chú Sáu đã gọi bác Tám chèo đò gấp.",
    fill: { acceptedAnswers: ["chú Sáu"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-16-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-16",
    prompt: "Sự việc nào xảy ra SAU CÙNG trong câu chuyện?",
    explanation: "Theo trình tự: chú Sáu gọi đò, bác Tám chèo đò vượt sông, con trai chú Sáu được cứu, cuối cùng bác Tám từ chối nhận tiền cảm ơn.",
    mcq: {
      options: [
        "Bác Tám nghe tiếng gọi thất thanh từ bờ bên kia",
        "Bác Tám khoác áo mưa, chèo đò vượt sông",
        "Bác Tám từ chối nhận tiền cảm ơn của chú Sáu",
        "Con trai chú Sáu bị sốt cao",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Đây là sự việc mở đầu câu chuyện.",
        "Việc này xảy ra sau khi nghe tiếng gọi, trước khi đến trạm y tế.",
        "Đúng — đây là sự việc diễn ra cuối truyện.",
        "Đây là nguyên nhân dẫn đến sự việc, xảy ra trước khi chú Sáu gọi đò.",
      ],
    },
  },
  {
    id: "dh-passage-16-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-16",
    prompt: "Chi tiết nào cho thấy bác Tám là người tốt bụng, không vụ lợi?",
    explanation: "Chi tiết bác Tám từ chối nhận tiền cảm ơn, nói cứu người là chuyện nên làm, thể hiện rõ sự tốt bụng, không vụ lợi.",
    mcq: {
      options: [
        "Bác Tám chèo đò đã hơn hai mươi năm",
        "Bác Tám từ chối nhận tiền cảm ơn, nói cứu người là chuyện nên làm",
        "Bác Tám giữ gìn chiếc đò sạch sẽ",
        "Bác Tám sống ở bến sông đầu làng",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là thời gian làm nghề, chưa thể hiện rõ tính cách.",
        "Đúng — hành động từ chối tiền cảm ơn thể hiện rõ sự tốt bụng, không vụ lợi.",
        "Đây thể hiện sự cẩn thận, không phải sự tốt bụng, không vụ lợi.",
        "Đây chỉ là thông tin về nơi ở, không thể hiện tính cách.",
      ],
    },
  },
  {
    id: "dh-passage-16-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-16",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện ca ngợi tấm lòng nhân hậu, sẵn sàng giúp đỡ người khác lúc hoạn nạn mà không mong đền đáp.",
    mcq: {
      options: [
        "Không nên chèo đò khi trời mưa gió",
        "Cần có tấm lòng nhân hậu, sẵn sàng giúp đỡ người khác lúc hoạn nạn mà không mong đền đáp",
        "Nên thu tiền cao khi giúp đỡ người khác trong tình huống khẩn cấp",
        "Chỉ nên giúp đỡ người quen biết",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Đúng — đây là bài học chính được thể hiện qua hành động của bác Tám.",
        "Đây là ý ngược lại với thông điệp câu chuyện.",
        "Bác Tám giúp đỡ chú Sáu dù không rõ có phải người quen thân hay không, thể hiện lòng tốt không phân biệt.",
      ],
    },
  },
  {
    id: "dh-passage-16-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-16",
    prompt: "Vì sao bác Tám không ngần ngại chèo đò dù trời đang mưa gió, nước chảy xiết?",
    explanation: "Có thể suy luận: vì tính mạng con trai chú Sáu đang gặp nguy hiểm, bác Tám đặt việc cứu người lên trên sự an toàn, tiện lợi của bản thân.",
    mcq: {
      options: [
        "Vì bác Tám muốn được trả nhiều tiền hơn",
        "Vì bác Tám đặt việc cứu người lên trên sự an toàn, tiện lợi của bản thân",
        "Vì bác Tám không sợ nước sông",
        "Vì bác Tám không có việc gì khác để làm",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Bác Tám sau đó còn từ chối nhận tiền, cho thấy đây không phải động cơ.",
        "Đúng — đây là suy luận hợp lý dựa trên tình huống khẩn cấp và phản ứng của bác Tám.",
        "Văn bản không nói về việc bác Tám không sợ nước.",
        "Văn bản không gợi ý lý do này.",
      ],
    },
  },
];
