import type { Exercise } from "@/data-access/types";

// CT-04 — Biện pháp tu từ: Đảo ngữ; từ láy gợi tả, gợi cảm. Câu văn tự
// biên soạn (Mục 10.1 hướng B), không trích từ tác phẩm nào.
export const CT04_EXERCISES: Exercise[] = [
  {
    id: "ct-04-mcq-1",
    topicIds: ["CT-04"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu "Lom khom dưới núi, tiều vài chú." đã đảo vị trí của thành phần nào lên đầu câu?',
    explanation: "Từ láy \"lom khom\" (vốn là vị ngữ miêu tả dáng vẻ) được đưa lên trước chủ ngữ \"tiều vài chú\" — đây là đảo ngữ.",
    mcq: {
      options: ["Chủ ngữ", "Vị ngữ (từ miêu tả)", "Trạng ngữ chỉ thời gian", "Không có gì bị đảo"],
      answerIndex: 1,
      distractorNotes: [
        "Chủ ngữ \"tiều vài chú\" vẫn đứng sau, không phải phần bị đảo lên trước.",
        "Đúng — từ láy \"lom khom\" miêu tả dáng vẻ (vốn thường đứng sau chủ ngữ) được đảo lên đầu câu.",
        "Câu này không có trạng ngữ chỉ thời gian.",
        "Trật tự câu rõ ràng khác với cấu trúc thông thường.",
      ],
    },
  },
  {
    id: "ct-04-mcq-2",
    topicIds: ["CT-04"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Trong câu "Rì rào gió thổi, xào xạc lá rơi.", các từ láy "rì rào", "xào xạc" gợi tả điều gì?',
    explanation: "Cả hai từ láy đều mô phỏng âm thanh — \"rì rào\" là âm thanh của gió, \"xào xạc\" là âm thanh của lá rơi.",
    mcq: {
      options: ["Hình dáng", "Màu sắc", "Âm thanh", "Cảm xúc"],
      answerIndex: 2,
      distractorNotes: [
        "Hai từ láy này không miêu tả hình dáng.",
        "Hai từ láy này không miêu tả màu sắc.",
        "Đúng — cả hai từ láy đều mô phỏng âm thanh của gió và lá.",
        "Đây là từ láy gợi tả âm thanh, không phải gợi cảm xúc trực tiếp.",
      ],
    },
  },
  {
    id: "ct-04-fill-1",
    topicIds: ["CT-04"],
    level: "M2",
    questionType: "fill",
    prompt:
      "Điền từ còn thiếu: Đảo ngữ là thay đổi ___ thông thường của các thành phần câu để nhấn mạnh, tạo ấn tượng.",
    explanation: "Đảo ngữ là thay đổi trật tự thông thường của câu, thường đưa vị ngữ lên trước chủ ngữ.",
    fill: { acceptedAnswers: ["trật tự"], strictMode: false, isSet: false },
  },
  {
    id: "ct-04-mcq-3",
    topicIds: ["CT-04"],
    level: "M3",
    questionType: "mcq",
    prompt: 'Câu nào dưới đây KHÔNG phải là ví dụ về đảo ngữ?',
    explanation: "\"Con mèo đang ngủ trên ghế\" đi theo trật tự chủ ngữ - vị ngữ thông thường, không có sự đảo trật tự.",
    mcq: {
      options: [
        "Lom khom dưới núi, tiều vài chú.",
        "Con mèo đang ngủ trên ghế.",
        "Xa xa, thấp thoáng những mái nhà tranh.",
        "Chót vót trên đỉnh núi, một cây thông già đứng đó.",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Câu này đưa từ láy \"lom khom\" lên đầu câu — có đảo ngữ.",
        "Đúng — câu này theo đúng trật tự chủ ngữ trước, vị ngữ sau, không đảo ngữ.",
        "Câu này đưa \"thấp thoáng\" lên trước chủ ngữ — có đảo ngữ.",
        "Câu này đưa \"chót vót\" lên đầu câu trước chủ ngữ — có đảo ngữ.",
      ],
    },
  },
  {
    id: "ct-04-essay-1",
    topicIds: ["CT-04"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Xa xa, thấp thoáng những mái nhà tranh nép mình bên rặng tre xanh." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp đảo ngữ trong câu văn trên.',
    explanation:
      "Đảo ngữ đưa từ láy \"thấp thoáng\" lên trước chủ ngữ \"những mái nhà tranh\", giúp nhấn mạnh cảm giác mờ ảo, ẩn hiện của khung cảnh nhìn từ xa.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp đảo ngữ được sử dụng trong câu (thành phần nào bị đảo lên trước)",
        "Nêu tác dụng của biện pháp đảo ngữ đó (nhấn mạnh điều gì, gợi cảm giác gì)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp đảo ngữ", points: 2 },
        { criterion: "Nêu đúng tác dụng nhấn mạnh, gợi hình", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Xa xa, thấp thoáng những mái nhà tranh nép mình bên rặng tre xanh" đã vẽ nên một khung cảnh làng quê thật yên bình. Tác giả sử dụng biện pháp đảo ngữ, đưa từ láy "thấp thoáng" lên trước chủ ngữ "những mái nhà tranh" thay vì viết theo trật tự thông thường. Nhờ cách đảo ngữ này, cảm giác mờ ảo, ẩn hiện của những mái nhà khi nhìn từ xa được nhấn mạnh rõ nét ngay từ đầu câu, khiến người đọc hình dung được ngay ấn tượng ban đầu về khung cảnh. Nếu viết theo trật tự thông thường, câu văn sẽ không còn giữ được cảm giác mơ hồ, xa xăm ấy. Em cảm thấy khung cảnh này rất gần gũi, giống như những lần về quê ngoại vào buổi chiều tà. Câu văn thật giàu chất thơ và gợi hình.',
    },
  },
];
