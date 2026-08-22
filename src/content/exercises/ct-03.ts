import type { Exercise } from "@/data-access/types";

// CT-03 — Biện pháp tu từ: Điệp từ, điệp ngữ. Câu văn tự biên soạn (Mục
// 10.1 hướng B), không trích từ tác phẩm nào.
export const CT03_EXERCISES: Exercise[] = [
  {
    id: "ct-03-mcq-1",
    topicIds: ["CT-03"],
    level: "M1",
    questionType: "mcq",
    prompt:
      'Câu văn "Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín." sử dụng biện pháp tu từ nào?',
    explanation: "Từ \"giữ\" được lặp lại 4 lần trong câu — đây là biện pháp điệp từ.",
    mcq: {
      options: ["So sánh", "Nhân hoá", "Điệp từ", "Đảo ngữ"],
      answerIndex: 2,
      distractorNotes: [
        "Câu không có từ so sánh (như, tựa, là...).",
        "Câu không gán đặc điểm của người cho tre.",
        "Đúng — từ \"giữ\" được lặp lại nhiều lần có chủ ý.",
        "Trật tự câu vẫn theo cấu trúc chủ ngữ đứng trước, không đảo ngữ.",
      ],
    },
  },
  {
    id: "ct-03-mcq-2",
    topicIds: ["CT-03"],
    level: "M2",
    questionType: "mcq",
    prompt: "Dấu hiệu nào giúp phân biệt điệp từ với việc một từ chỉ tình cờ xuất hiện nhiều lần trong bài?",
    explanation: "Điệp từ, điệp ngữ có dụng ý nhấn mạnh, tạo nhịp điệu — khác với việc lặp từ tự nhiên không có chủ đích nghệ thuật.",
    mcq: {
      options: [
        "Từ đó có nhiều nét nghĩa",
        "Việc lặp lại có chủ ý nhấn mạnh ý, tạo nhịp điệu hoặc cảm xúc",
        "Từ đó đứng ở đầu câu",
        "Từ đó là danh từ",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Số lượng nét nghĩa không liên quan đến điệp từ.",
        "Đúng — đây là điểm khác biệt cốt lõi giữa điệp từ có chủ ý và lặp từ ngẫu nhiên.",
        "Điệp từ có thể lặp ở bất kỳ vị trí nào trong câu, không nhất thiết đầu câu.",
        "Điệp từ có thể là bất kỳ từ loại nào (động từ, danh từ, tính từ...).",
      ],
    },
  },
  {
    id: "ct-03-mcq-3",
    topicIds: ["CT-03"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.", từ ngữ nào được điệp lại?',
    explanation: "\"Đoàn kết\" và \"thành công\" được lặp lại nhiều lần để nhấn mạnh sức mạnh của sự đoàn kết.",
    mcq: {
      options: ["đại", "đoàn kết, thành công", "và", "chỉ có một từ được lặp"],
      answerIndex: 1,
      distractorNotes: [
        "\"Đại\" chỉ xuất hiện trước mỗi cụm từ được điệp, không phải từ được điệp chính.",
        "Đúng — cả hai cụm \"đoàn kết\" và \"thành công\" đều được lặp lại 3 lần.",
        "Câu này không có từ \"và\".",
        "Có hai cụm từ được điệp, không phải chỉ một.",
      ],
    },
  },
  {
    id: "ct-03-essay-1",
    topicIds: ["CT-03"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Mưa rơi trên mái nhà, mưa rơi trên con đường, mưa rơi trên cả cánh đồng xa." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp điệp từ trong câu văn trên.',
    explanation:
      "Điệp từ \"mưa rơi\" nhấn mạnh cơn mưa bao trùm khắp mọi nơi, tạo cảm giác mưa rộng khắp, liên tục.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp điệp từ được sử dụng trong câu (từ/cụm từ nào, lặp mấy lần)",
        "Nêu tác dụng của biện pháp điệp từ đó (nhấn mạnh điều gì, gợi cảm giác gì)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp điệp từ", points: 2 },
        { criterion: "Nêu đúng tác dụng nhấn mạnh, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Mưa rơi trên mái nhà, mưa rơi trên con đường, mưa rơi trên cả cánh đồng xa" đã để lại trong em ấn tượng sâu sắc. Tác giả sử dụng biện pháp điệp từ "mưa rơi", lặp lại 3 lần liên tiếp trong câu. Nhờ đó, người đọc cảm nhận được cơn mưa không chỉ rơi ở một chỗ mà bao trùm khắp mọi nơi — từ mái nhà, con đường cho đến cánh đồng xa. Nhịp điệu câu văn vì thế cũng trở nên đều đặn, gợi cảm giác mưa rơi liên tục, dai dẳng. Em như hình dung được cả một không gian rộng lớn chìm trong màn mưa. Câu văn khiến em nhớ đến những buổi chiều mưa ở quê ngoại.',
    },
  },
  {
    id: "ct-03-essay-2",
    topicIds: ["CT-03"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Em yêu mái trường, em yêu thầy cô, em yêu cả những giờ ra chơi rộn rã tiếng cười." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp điệp từ trong câu văn trên.',
    explanation:
      "Điệp từ \"em yêu\" nhấn mạnh tình cảm sâu đậm, tha thiết của người viết dành cho ngôi trường, thầy cô và bạn bè.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp điệp từ được sử dụng trong câu (từ nào, lặp mấy lần)",
        "Nêu tác dụng của biện pháp điệp từ đó (nhấn mạnh điều gì)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp điệp từ", points: 2 },
        { criterion: "Nêu đúng tác dụng nhấn mạnh, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Em yêu mái trường, em yêu thầy cô, em yêu cả những giờ ra chơi rộn rã tiếng cười" đã khiến em vô cùng xúc động. Tác giả sử dụng biện pháp điệp từ "em yêu", lặp lại 3 lần liên tiếp trong câu. Nhờ đó, tình cảm yêu mến của người viết dành cho trường lớp được nhấn mạnh rõ nét, không chỉ dừng lại ở một đối tượng mà lan toả đến mọi thứ gắn bó với ngôi trường — từ mái trường, thầy cô cho đến những giờ ra chơi vui vẻ. Nhịp điệu câu văn vì thế cũng trở nên tha thiết, dồn dập như chính cảm xúc của người viết. Em cảm thấy rất đồng cảm vì bản thân cũng có những tình cảm tương tự với ngôi trường của mình. Câu văn khiến em càng thêm trân trọng những năm tháng học trò.',
    },
  },
];
