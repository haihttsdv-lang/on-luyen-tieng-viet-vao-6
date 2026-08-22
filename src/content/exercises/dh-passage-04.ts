import type { Exercise } from "@/data-access/types";

// DH-passage-04 — "Vì sao lá cây có màu xanh" (văn bản thông tin, khoa học
// thường thức). Tự biên soạn (Mục 10.1 hướng B). Văn bản thông tin không có
// cốt truyện/nhân vật nên không gắn câu hỏi DH-02/DH-03 ở đây — các văn
// bản khác trong bộ đã bù đắp đủ cho hai kỹ năng này.
export const DH_PASSAGE_04_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-04-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-04",
    prompt: "Chất nào trong lá cây giúp cây thực hiện quá trình quang hợp?",
    explanation: "Văn bản nêu trực tiếp: chất diệp lục (diệp lục tố) giúp cây quang hợp.",
    mcq: {
      options: ["Diệp lục", "Nước", "Đường", "Khí ô-xi"],
      answerIndex: 0,
      distractorNotes: [
        "Đúng — văn bản nêu trực tiếp đây là chất diệp lục.",
        "Nước không phải là chất được nhắc đến trong bài với vai trò này.",
        "Đường là sản phẩm của quang hợp, không phải chất giúp thực hiện quá trình này.",
        "Khí ô-xi không được nhắc đến trong bài với vai trò này.",
      ],
    },
  },
  {
    id: "dh-passage-04-q2",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "fill",
    passageId: "dh-passage-04",
    prompt: "Vào mùa nào lá cây thường chuyển sang màu vàng, cam? (trả lời bằng từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: đến mùa thu, khi trời trở lạnh, lá cây chuyển sang màu vàng, cam.",
    fill: { acceptedAnswers: ["mùa thu", "thu"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-04-q3",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-04",
    prompt: "Nội dung chính của văn bản trên là gì?",
    explanation: "Toàn bộ văn bản giải thích nguyên nhân khoa học khiến lá cây có màu xanh và vì sao lá đổi màu vào mùa thu.",
    mcq: {
      options: [
        "Cách chăm sóc cây xanh trong nhà",
        "Giải thích nguyên nhân khoa học khiến lá cây có màu xanh và đổi màu vào mùa thu",
        "Kể chuyện về một khu rừng",
        "Hướng dẫn cách trồng cây ăn quả",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không hướng dẫn cách chăm sóc cây.",
        "Đúng — đây là nội dung chính xuyên suốt cả văn bản.",
        "Đây là văn bản thông tin khoa học, không phải truyện kể.",
        "Văn bản không hướng dẫn cách trồng cây.",
      ],
    },
  },
  {
    id: "dh-passage-04-q4",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-04",
    prompt: "Dựa vào văn bản, vì sao các sắc tố vàng, cam trong lá không được nhìn thấy vào mùa hè?",
    explanation: "Suy luận từ văn bản: vào mùa hè, lượng diệp lục trong lá nhiều, che lấp mất các sắc tố vàng, cam vốn luôn tồn tại trong lá.",
    mcq: {
      options: [
        "Vì mùa hè lá cây không có các sắc tố đó",
        "Vì lượng diệp lục nhiều vào mùa hè đã che lấp các sắc tố này",
        "Vì mùa hè trời quá nắng nên sắc tố bị cháy",
        "Vì các sắc tố đó chỉ xuất hiện vào mùa thu",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản nói các sắc tố này vẫn luôn tồn tại trong lá, chỉ là bị che lấp.",
        "Đúng — đây là suy luận hợp lý dựa trên thông tin về diệp lục trong bài.",
        "Văn bản không đề cập đến việc sắc tố bị cháy do nắng.",
        "Văn bản cho biết các sắc tố này luôn có trong lá, không phải chỉ xuất hiện vào mùa thu.",
      ],
    },
  },
  {
    id: "dh-passage-04-q5",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-04",
    prompt: 'Trong văn bản, từ "quang hợp" được dùng để chỉ điều gì?',
    explanation: "Văn bản giải thích rõ: quang hợp là quá trình cây tự tạo ra chất dinh dưỡng nuôi sống bản thân nhờ ánh sáng mặt trời.",
    mcq: {
      options: [
        "Quá trình cây hút nước từ đất",
        "Quá trình cây tự tạo ra chất dinh dưỡng nhờ ánh sáng mặt trời",
        "Quá trình cây rụng lá vào mùa đông",
        "Quá trình cây ra hoa kết quả",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không định nghĩa quang hợp là quá trình hút nước.",
        "Đúng — đây là định nghĩa được nêu rõ trong văn bản.",
        "Văn bản không định nghĩa quang hợp là quá trình rụng lá.",
        "Văn bản không định nghĩa quang hợp là quá trình ra hoa kết quả.",
      ],
    },
  },
  {
    id: "dh-passage-04-q6",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-04",
    prompt: "Theo văn bản, ánh sáng mặt trời gồm những gì?",
    explanation: "Văn bản nêu trực tiếp: ánh sáng mặt trời gồm nhiều màu sắc khác nhau.",
    mcq: {
      options: ["Chỉ một màu duy nhất", "Nhiều màu sắc khác nhau", "Chỉ hai màu xanh và vàng", "Không có màu sắc"],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản nói ánh sáng mặt trời gồm nhiều màu, không phải một màu.",
        "Đúng — văn bản nêu trực tiếp ánh sáng mặt trời gồm nhiều màu sắc.",
        "Văn bản không giới hạn chỉ hai màu này.",
        "Văn bản khẳng định ánh sáng mặt trời có nhiều màu sắc.",
      ],
    },
  },
];
