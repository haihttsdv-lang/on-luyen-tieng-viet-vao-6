import type { Exercise } from "@/data-access/types";

// DH-passage-12 — "Buổi biểu diễn văn nghệ". Văn bản tự biên soạn (Mục
// 10.1 hướng B).
export const DH_PASSAGE_12_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-12-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-12",
    prompt: "An được cô giáo chọn biểu diễn tiết mục gì?",
    explanation: "Văn bản nêu trực tiếp: An được chọn biểu diễn một tiết mục hát đơn ca.",
    mcq: {
      options: ["Múa", "Hát đơn ca", "Kể chuyện", "Đóng kịch"],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói An biểu diễn múa.",
        "Đúng — đây là chi tiết nêu trực tiếp trong bài.",
        "Văn bản không nói An kể chuyện.",
        "Văn bản không nói An đóng kịch.",
      ],
    },
  },
  {
    id: "dh-passage-12-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-12",
    prompt: "An làm gì trước khi bắt đầu hát để lấy bình tĩnh? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: An nhắm mắt hít một hơi thật sâu.",
    fill: { acceptedAnswers: ["hít một hơi thật sâu", "hít một hơi sâu"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-12-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-12",
    prompt: "Sự việc nào xảy ra TRƯỚC TIÊN trong câu chuyện?",
    explanation: "Theo trình tự: đầu tiên An được chọn biểu diễn, sau đó lo lắng, mẹ động viên, cuối cùng biểu diễn thành công.",
    mcq: {
      options: [
        "An được cô giáo chọn biểu diễn tiết mục hát đơn ca",
        "Mẹ kể chuyện hồi nhỏ mẹ cũng từng sợ nói trước lớp",
        "An hát trên sân khấu và nhận được tràng vỗ tay",
        "An định xin cô đổi tiết mục khác",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là sự việc mở đầu câu chuyện.",
        "Việc này xảy ra sau khi An lo lắng, trước đêm diễn.",
        "Đây là sự việc xảy ra cuối truyện.",
        "Việc này xảy ra sau khi An được chọn, trước khi mẹ động viên.",
      ],
    },
  },
  {
    id: "dh-passage-12-q4",
    topicIds: ["DH-03"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-12",
    prompt: "Chi tiết nào cho thấy mẹ của An là người khéo léo trong cách động viên con?",
    explanation: "Chi tiết mẹ chia sẻ trải nghiệm của chính mình thay vì chỉ trách móc hay ép buộc cho thấy sự khéo léo, thấu hiểu tâm lý con.",
    mcq: {
      options: [
        "Mẹ ngồi xuống bên An",
        "Mẹ kể lại trải nghiệm của chính mình khi còn nhỏ để giúp An hiểu và tự tin hơn",
        "Mẹ đến xem An biểu diễn",
        "Mẹ dặn An hát cho thật hay",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây chỉ là hành động mở đầu, chưa thể hiện rõ sự khéo léo.",
        "Đúng — cách chia sẻ trải nghiệm cá nhân để đồng cảm và động viên thể hiện sự khéo léo, thấu hiểu.",
        "Đây không phải chi tiết chính trong bài kể về mẹ.",
        "Đây chỉ là lời dặn ngắn gọn, chưa thể hiện đầy đủ sự khéo léo.",
      ],
    },
  },
  {
    id: "dh-passage-12-q5",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-12",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện khuyến khích việc dũng cảm đối mặt và vượt qua nỗi sợ hãi của bản thân để đạt được thành công.",
    mcq: {
      options: [
        "Không nên tham gia biểu diễn văn nghệ",
        "Cần dũng cảm đối mặt và vượt qua nỗi sợ hãi của bản thân",
        "Chỉ nên hát khi chắc chắn hát hay",
        "Nên nhờ người khác biểu diễn thay mình",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên né tránh này.",
        "Đúng — đây là bài học chính thể hiện qua hành trình vượt qua nỗi sợ của An.",
        "Văn bản không đưa ra điều kiện này.",
        "Đây là ý ngược lại với thông điệp câu chuyện (tự mình vượt qua nỗi sợ).",
      ],
    },
  },
  {
    id: "dh-passage-12-q6",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-12",
    prompt: "Vì sao An dần quên đi nỗi sợ khi đang hát trên sân khấu?",
    explanation: "Có thể suy luận: khi tập trung vào giai điệu bài hát, An không còn để ý đến ánh mắt khán giả xung quanh nữa, nên nỗi sợ giảm dần.",
    mcq: {
      options: [
        "Vì khán giả đã rời khỏi khán phòng",
        "Vì An tập trung vào giai điệu bài hát thay vì để ý đến xung quanh",
        "Vì đèn sân khấu bị tắt",
        "Vì An quên mất mình đang biểu diễn",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói khán giả rời đi.",
        "Đúng — đây là suy luận hợp lý dựa trên diễn biến tâm lý của An trong bài.",
        "Văn bản không nhắc đến sự cố về đèn.",
        "An vẫn ý thức được mình đang biểu diễn, chỉ là không còn sợ hãi nữa.",
      ],
    },
  },
];
