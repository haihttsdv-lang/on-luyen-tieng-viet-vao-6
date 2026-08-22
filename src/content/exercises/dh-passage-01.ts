import type { Exercise } from "@/data-access/types";

// DH-passage-01 — "Chiếc ô của bà Tư". 6 câu hỏi dùng chung một văn bản đọc
// hiểu dài (Mục 5.11: ≥25 văn bản, mỗi văn bản 5–7 câu hỏi), mỗi câu gắn
// đúng chuyên đề kỹ năng DH-01→06 mà nó kiểm tra. Văn bản tự biên soạn
// (Mục 10.1 hướng B).
export const DH_PASSAGE_01_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-01-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-01",
    prompt: "Minh gặp bà Tư trong hoàn cảnh nào?",
    explanation: "Văn bản nêu trực tiếp: trời đổ mưa, bà Tư đứng nép dưới mái hiên vì không mang ô.",
    mcq: {
      options: [
        "Bà Tư đứng nép dưới mái hiên vì trời mưa mà không mang ô",
        "Bà Tư bị ngã trên đường",
        "Bà Tư đang mua đồ ở cửa hàng",
        "Bà Tư đang đợi xe buýt",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp trong đoạn đầu văn bản.",
        "Văn bản không nhắc đến việc bà Tư bị ngã.",
        "Văn bản không nói bà Tư đang mua đồ, chỉ nói bà đứng nép dưới mái hiên một cửa hàng.",
        "Văn bản không nhắc đến xe buýt.",
      ],
    },
  },
  {
    id: "dh-passage-01-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-01",
    prompt: "Bà Tư tặng Minh món quà gì để cảm ơn? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: bà Tư lấy trong túi ra một gói kẹo lạc tặng Minh.",
    fill: { acceptedAnswers: ["kẹo lạc", "gói kẹo lạc"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-01-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-01",
    prompt: "Sự việc nào xảy ra ĐẦU TIÊN trong câu chuyện?",
    explanation: "Theo trình tự văn bản: trời mưa và Minh nhìn thấy bà Tư trước, sau đó mới che ô đưa bà về, cuối cùng mới nhận kẹo.",
    mcq: {
      options: [
        "Bà Tư tặng Minh kẹo lạc",
        "Minh nhìn thấy bà Tư đứng nép dưới mái hiên",
        "Minh nghiêng ô về phía bà Tư",
        "Bà Tư nắm tay Minh",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là sự việc cuối cùng, sau khi về đến nhà bà.",
        "Đúng — đây là sự việc mở đầu câu chuyện.",
        "Việc này xảy ra sau khi Minh đã chạy đến và che ô cho bà.",
        "Việc này xảy ra sau khi Minh đề nghị đưa bà về nhà.",
      ],
    },
  },
  {
    id: "dh-passage-01-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-01",
    prompt: "Chi tiết nào cho thấy Minh sẵn sàng chịu thiệt về mình để giúp đỡ bà Tư?",
    explanation: "Chi tiết \"nghiêng về phía bà để bà không bị ướt, còn một bên vai áo của cậu thì ướt sũng\" thể hiện rõ điều này.",
    mcq: {
      options: [
        "Minh chạy đến bên bà Tư",
        "Minh nghiêng ô về phía bà khiến vai áo mình bị ướt sũng",
        "Minh nói \"Bà ơi, cháu đưa bà về nhà nhé!\"",
        "Minh cười tươi khi về đến nhà",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là hành động ban đầu, chưa thể hiện rõ sự hy sinh.",
        "Đúng — Minh chịu ướt phần mình để bà Tư được che chắn tốt hơn.",
        "Đây là lời đề nghị giúp đỡ, chưa phải chi tiết thể hiện sự hy sinh cụ thể.",
        "Đây là cảm xúc của Minh sau khi về nhà, không thể hiện sự hy sinh.",
      ],
    },
  },
  {
    id: "dh-passage-01-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-01",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu cuối văn bản nêu rõ suy nghĩ của Minh: giúp đỡ người khác dù là việc nhỏ cũng mang lại hạnh phúc.",
    mcq: {
      options: [
        "Nên mang theo ô mỗi khi ra ngoài",
        "Giúp đỡ người khác, dù là việc nhỏ, cũng mang lại niềm hạnh phúc cho bản thân",
        "Trẻ em không nên đi một mình dưới trời mưa",
        "Người già cần được chăm sóc trong bệnh viện",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là chi tiết bề mặt, không phải thông điệp chính của câu chuyện.",
        "Đúng — đây là bài học được nêu rõ ở câu kết của văn bản.",
        "Văn bản không đề cập đến việc an toàn khi đi dưới mưa.",
        "Văn bản không nhắc đến bệnh viện.",
      ],
    },
  },
  {
    id: "dh-passage-01-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-01",
    prompt: 'Vì sao bà Tư "mỉm cười cảm động" khi Minh đề nghị đưa bà về nhà?',
    explanation: "Dù văn bản không nói thẳng, có thể suy luận bà Tư cảm động vì được một cậu bé xa lạ quan tâm, giúp đỡ chân thành lúc khó khăn.",
    mcq: {
      options: [
        "Vì bà Tư bất ngờ khi thấy trời mưa",
        "Vì bà Tư cảm nhận được sự quan tâm, tốt bụng chân thành của Minh",
        "Vì bà Tư vừa mua được món đồ ưng ý",
        "Vì bà Tư không thích đi bộ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Trời mưa không phải lý do khiến bà cảm động.",
        "Đúng — đây là suy luận hợp lý dựa trên hành động quan tâm của Minh.",
        "Văn bản không nhắc đến việc mua đồ.",
        "Không có chi tiết nào cho thấy điều này.",
      ],
    },
  },
  {
    id: "dh-passage-01-q7",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-01",
    prompt: 'Trong câu "tay run run vì lạnh", từ "run run" gợi tả điều gì?',
    explanation: "\"Run run\" là từ láy gợi tả trạng thái cơ thể rung nhẹ, run lên vì lạnh — phù hợp với ngữ cảnh trời mưa, bà Tư không có ô che.",
    mcq: {
      options: [
        "Sự tức giận",
        "Trạng thái run rẩy nhẹ vì lạnh",
        "Sự vui mừng",
        "Hành động vẫy tay chào",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Không có chi tiết nào cho thấy bà Tư tức giận.",
        "Đúng — \"run run\" gợi tả trạng thái rung nhẹ do lạnh, phù hợp với ngữ cảnh trời mưa.",
        "Ngữ cảnh (đứng nép dưới mưa, không có ô) không phù hợp với sự vui mừng.",
        "\"Run run\" ở đây không liên quan đến việc vẫy tay.",
      ],
    },
  },
];
