import type { Exercise } from "@/data-access/types";

// DH-passage-08 — "Loài voi và trí nhớ đáng kinh ngạc" (văn bản thông tin,
// khoa học thường thức). Tự biên soạn (Mục 10.1 hướng B). Không có cốt
// truyện/nhân vật nên không gắn câu hỏi DH-02/DH-03 ở đây.
export const DH_PASSAGE_08_EXERCISES: Exercise[] = [
  {
    id: "dh-passage-08-q1",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "mcq",
    passageId: "dh-passage-08",
    prompt: "Bộ não của voi có đặc điểm gì nổi bật so với các loài động vật khác trên cạn?",
    explanation: "Văn bản nêu trực tiếp: bộ não voi có kích thước lớn nhất trong các loài động vật sống trên cạn.",
    mcq: {
      options: [
        "Nhỏ nhất trong các loài động vật trên cạn",
        "Lớn nhất trong các loài động vật sống trên cạn",
        "Không có tế bào thần kinh",
        "Nhẹ hơn não người",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản nói ngược lại — não voi lớn nhất, không phải nhỏ nhất.",
        "Đúng — đây là chi tiết được nêu trực tiếp trong bài.",
        "Văn bản nói não voi chứa hàng tỷ tế bào thần kinh.",
        "Văn bản không so sánh với não người.",
      ],
    },
  },
  {
    id: "dh-passage-08-q2",
    topicIds: ["DH-01"],
    level: "M1",
    questionType: "fill",
    passageId: "dh-passage-08",
    prompt: "Con voi nào thường đóng vai trò dẫn dắt cả đàn? (trả lời bằng cụm từ có trong bài)",
    explanation: "Văn bản nêu trực tiếp: voi đầu đàn, thường là voi cái lớn tuổi nhất, đóng vai trò dẫn dắt.",
    fill: { acceptedAnswers: ["voi đầu đàn"], strictMode: false, isSet: false },
  },
  {
    id: "dh-passage-08-q3",
    topicIds: ["DH-04"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-08",
    prompt: "Nội dung chính của văn bản trên là gì?",
    explanation: "Toàn bộ văn bản tập trung giải thích và minh hoạ về trí nhớ đáng kinh ngạc của loài voi.",
    mcq: {
      options: [
        "Cách chăm sóc voi trong sở thú",
        "Trí nhớ đáng kinh ngạc của loài voi và vai trò của nó trong đời sống bầy đàn",
        "Kể chuyện về một chú voi con",
        "Hướng dẫn huấn luyện voi làm xiếc",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không hướng dẫn cách chăm sóc voi.",
        "Đúng — đây là nội dung chính xuyên suốt văn bản.",
        "Đây là văn bản thông tin khoa học, không phải truyện kể.",
        "Văn bản không đề cập đến việc huấn luyện xiếc.",
      ],
    },
  },
  {
    id: "dh-passage-08-q4",
    topicIds: ["DH-05"],
    level: "M3",
    questionType: "mcq",
    passageId: "dh-passage-08",
    prompt: "Vì sao trí nhớ của voi đầu đàn lại đặc biệt quan trọng đối với sự sống còn của cả đàn?",
    explanation: "Suy luận từ văn bản: nhờ trí nhớ về vị trí nguồn nước, thức ăn, voi đầu đàn có thể dẫn cả đàn vượt qua mùa khô hạn khan hiếm.",
    mcq: {
      options: [
        "Vì voi đầu đàn to lớn nhất nên có sức mạnh bảo vệ đàn",
        "Vì trí nhớ giúp voi đầu đàn dẫn cả đàn đến nguồn nước, thức ăn, đặc biệt khi khan hiếm",
        "Vì voi đầu đàn biết nói chuyện với con người",
        "Vì voi đầu đàn luôn được ưu tiên thức ăn ngon nhất",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói vai trò này liên quan đến sức mạnh thể chất.",
        "Đúng — đây là suy luận hợp lý dựa trên vai trò trí nhớ được nêu trong bài.",
        "Văn bản không nhắc đến khả năng này.",
        "Văn bản không đề cập đến việc ưu tiên thức ăn.",
      ],
    },
  },
  {
    id: "dh-passage-08-q5",
    topicIds: ["DH-06"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-08",
    prompt: 'Trong câu "voi đầu đàn đóng vai trò như một \'bản đồ sống\' của cả đàn", cụm từ "bản đồ sống" ở đây có nghĩa là gì?',
    explanation: "\"Bản đồ sống\" là cách nói hình ảnh, chỉ việc voi đầu đàn ghi nhớ đường đi, vị trí như một tấm bản đồ để dẫn đường cho cả đàn.",
    mcq: {
      options: [
        "Một tấm bản đồ giấy thật mà voi mang theo",
        "Cách nói hình ảnh chỉ việc voi đầu đàn ghi nhớ đường đi để dẫn dắt cả đàn",
        "Một loài thực vật mà voi ăn",
        "Tên một khu vực sinh sống của voi",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây không phải nghĩa đen, mà là cách diễn đạt hình ảnh.",
        "Đúng — đây là nghĩa bóng của cụm từ, chỉ vai trò dẫn đường của voi đầu đàn.",
        "Cụm từ này không liên quan đến thực vật.",
        "Cụm từ này không phải tên địa danh.",
      ],
    },
  },
  {
    id: "dh-passage-08-q6",
    topicIds: ["DH-01"],
    level: "M2",
    questionType: "mcq",
    passageId: "dh-passage-08",
    prompt: "Theo văn bản, voi có thể ghi nhớ những gì về những cá thể từng gặp?",
    explanation: "Văn bản nêu trực tiếp: voi có thể nhận ra và ghi nhớ hình dáng, mùi hương của những cá thể voi hay con người từng gặp.",
    mcq: {
      options: [
        "Chỉ ghi nhớ màu sắc",
        "Hình dáng và mùi hương",
        "Chỉ ghi nhớ âm thanh",
        "Voi không thể ghi nhớ cá thể nào",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Văn bản không nói cụ thể về màu sắc.",
        "Đúng — văn bản nêu trực tiếp voi ghi nhớ hình dáng và mùi hương.",
        "Văn bản không nói cụ thể về âm thanh.",
        "Văn bản khẳng định ngược lại — voi có khả năng ghi nhớ rất tốt.",
      ],
    },
  },
];
