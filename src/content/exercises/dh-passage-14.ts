import type { Exercise } from "@/data-access/types";

// DH-passage-14 — "Cây bàng cuối sân trường". Văn bản tự biên soạn (Mục
// 10.1 hướng B).
export const DH_PASSAGE_14_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-14-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-14",
    prompt: "Thảo và các bạn thường làm gì dưới gốc cây bàng vào giờ ra chơi?",
    explanation: "Văn bản nêu trực tiếp: các bạn chơi ô ăn quan, kể chuyện cười dưới gốc bàng.",
    mcq: {
      options: [
        "Chơi ô ăn quan, kể chuyện cười",
        "Học bài nhóm",
        "Trồng thêm cây mới",
        "Vẽ tranh lên thân cây",
      ],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — đây là chi tiết được nêu trực tiếp trong bài.",
        "Văn bản không nói các bạn học nhóm ở đây.",
        "Văn bản không nhắc đến việc trồng cây.",
        "Văn bản không nhắc đến việc vẽ tranh lên cây.",
      ],
    },
  },
  {
    id: "dh-passage-14-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-14",
    prompt: "Ai đã núp sau gốc cây mãi không ai tìm ra khi chơi trốn tìm? (trả lời bằng tên riêng có trong bài)",
    explanation: "Văn bản nêu trực tiếp: Hùng núp sau gốc cây mãi không ai tìm ra.",
    fill: { acceptedAnswers: ["Hùng"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-14-q3",
    topicIds: ["DH-02"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-14",
    prompt: "Sự việc nào xảy ra SAU CÙNG trong câu chuyện?",
    explanation: "Theo trình tự: những kỷ niệm dưới gốc bàng suốt 5 năm học, Thảo ngồi nhớ lại vào những ngày cuối, cuối cùng cả lớp chụp ảnh kỷ niệm chia tay dưới gốc bàng.",
    mcq: {
      options: [
        "Thảo oà khóc vì bị điểm kém và được các bạn an ủi",
        "Cả lớp chụp một tấm ảnh kỷ niệm cuối cùng dưới gốc bàng",
        "Nhóm bạn xếp lá bàng khô thành hình trái tim",
        "Cả nhóm chơi trốn tìm dưới gốc bàng",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là một kỷ niệm cũ được nhắc lại, xảy ra từ trước.",
        "Đúng — đây là sự việc diễn ra cuối truyện, vào ngày chia tay.",
        "Đây là một kỷ niệm cũ được nhắc lại, xảy ra từ trước.",
        "Đây là một kỷ niệm cũ được nhắc lại, xảy ra từ trước.",
      ],
    },
  },
  {
    id: "dh-passage-14-q4",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-14",
    prompt: "Câu chuyện trên muốn gửi đến người đọc thông điệp gì?",
    explanation: "Câu chuyện thể hiện tình cảm gắn bó với mái trường, bạn bè qua những kỷ niệm tuổi thơ và cảm xúc khi phải chia tay.",
    mcq: {
      options: [
        "Không nên trồng cây bàng ở sân trường",
        "Những kỷ niệm tuổi thơ dưới mái trường, bên bạn bè là những ký ức đẹp đẽ, đáng trân trọng",
        "Nên chuyển trường thường xuyên để có nhiều kỷ niệm",
        "Chơi ô ăn quan là trò chơi duy nhất đáng nhớ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đưa ra lời khuyên này.",
        "Đúng — đây là bài học/cảm xúc chính được thể hiện xuyên suốt văn bản.",
        "Văn bản không đưa ra lời khuyên này.",
        "Văn bản nhắc đến nhiều trò chơi, không chỉ ô ăn quan.",
      ],
    },
  },
  {
    id: "dh-passage-14-q5",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-14",
    prompt: 'Vì sao Thảo "đưa tay chạm nhẹ vào thân cây sần sùi" trong ngày chia tay?',
    explanation: "Có thể suy luận: đây là hành động thể hiện sự lưu luyến, muốn ghi nhớ và cảm ơn cây bàng đã gắn bó với những kỷ niệm tuổi thơ của mình.",
    mcq: {
      options: [
        "Vì Thảo muốn kiểm tra cây có bị sâu bệnh không",
        "Vì đây là hành động thể hiện sự lưu luyến, biết ơn cây bàng đã gắn bó với kỷ niệm tuổi thơ",
        "Vì Thảo muốn hái lá bàng mang về",
        "Vì Thảo bị ngã và phải bám vào cây",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không đề cập đến việc kiểm tra sâu bệnh.",
        "Đúng — đây là suy luận hợp lý dựa trên cảm xúc lưu luyến được thể hiện trong đoạn văn.",
        "Văn bản không nói Thảo hái lá mang về.",
        "Văn bản không đề cập đến việc bị ngã.",
      ],
    },
  },
  {
    id: "dh-passage-14-q6",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-14",
    prompt: 'Trong câu "cây bàng đã âm thầm chứng kiến suốt những năm tháng tuổi thơ", từ "âm thầm" gợi tả điều gì?',
    explanation: "\"Âm thầm\" gợi tả sự lặng lẽ, không phô trương — cây bàng cứ lặng lẽ ở đó, chứng kiến mọi chuyện mà không lên tiếng.",
    mcq: {
      options: [
        "Sự ồn ào, náo nhiệt",
        "Sự lặng lẽ, không phô trương",
        "Hành động chạy nhanh",
        "Cảm giác tức giận",
      ],
      answerIndex: 1,
      distractorNotes: [
        "\"Âm thầm\" mang nghĩa ngược lại với sự ồn ào.",
        "Đúng — \"âm thầm\" gợi tả sự lặng lẽ, âm thầm dõi theo mà không phô trương.",
        "\"Âm thầm\" không liên quan đến việc di chuyển.",
        "\"Âm thầm\" không liên quan đến cảm xúc tức giận.",
      ],
    },
  },
];
