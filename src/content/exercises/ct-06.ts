import type { Exercise } from "@/data-access/types";

// CT-06 — Cảm thụ nhân vật. Đoạn văn/câu chuyện tự biên soạn (Mục 10.1
// hướng B), không trích từ tác phẩm nào.
export const CT06_EXERCISES: Exercise[] = [
  {
    id: "ct-06-mcq-1",
    topicIds: ["CT-06"],
    level: "M1",
    questionType: "mcq",
    prompt:
      "Để cảm thụ một nhân vật trong tác phẩm, em cần dựa vào những chi tiết nào?",
    explanation: "Cảm thụ nhân vật cần dựa vào ngoại hình, hành động, lời nói, suy nghĩ của nhân vật được miêu tả trong bài.",
    mcq: {
      options: [
        "Chỉ dựa vào tên của nhân vật",
        "Ngoại hình, hành động, lời nói, suy nghĩ của nhân vật",
        "Chỉ dựa vào số lần nhân vật xuất hiện trong bài",
        "Chỉ dựa vào cảm nhận riêng của em, không cần chi tiết trong bài",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Tên nhân vật không đủ để cảm thụ tính cách, phẩm chất.",
        "Đúng — đây là các chi tiết cơ bản để rút ra tính cách, phẩm chất của nhân vật.",
        "Số lần xuất hiện không phản ánh tính cách nhân vật.",
        "Cảm nhận cần dựa trên chi tiết cụ thể trong bài, không phải suy diễn tuỳ ý.",
      ],
    },
  },
  {
    id: "ct-06-mcq-2",
    topicIds: ["CT-06"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Một cậu bé trong câu chuyện luôn nhường phần ăn cho em nhỏ dù bản thân cũng đói. Chi tiết này cho thấy cậu bé có phẩm chất gì?',
    explanation: "Hành động nhường nhịn dù bản thân thiếu thốn thể hiện tình yêu thương, đức hy sinh vì người khác.",
    mcq: {
      options: ["Nhút nhát", "Giàu tình yêu thương, biết hy sinh vì người khác", "Lười biếng", "Kiêu ngạo"],
      answerIndex: 1,
      distractorNotes: [
        "Hành động nhường nhịn không liên quan đến tính nhút nhát.",
        "Đúng — nhường phần ăn dù bản thân đói thể hiện sự yêu thương, sẵn sàng hy sinh.",
        "Hành động này hoàn toàn ngược lại với sự lười biếng.",
        "Nhường nhịn người khác là biểu hiện ngược lại với kiêu ngạo.",
      ],
    },
  },
  {
    id: "ct-06-mcq-3",
    topicIds: ["CT-06"],
    level: "M2",
    questionType: "mcq",
    prompt: "Câu trả lời nào dưới đây nêu cảm nhận về nhân vật ĐẦY ĐỦ nhất (có chi tiết cụ thể kèm lý do)?",
    explanation: "Cảm nhận đầy đủ cần nêu rõ chi tiết trong bài và lý do vì sao chi tiết đó khiến em có cảm xúc/đánh giá như vậy.",
    mcq: {
      options: [
        "Em thích nhân vật này.",
        "Nhân vật này tốt.",
        "Em khâm phục cậu bé vì dù đói cậu vẫn nhường phần ăn cho em nhỏ, điều đó cho thấy cậu rất giàu tình yêu thương.",
        "Nhân vật này xuất hiện nhiều lần trong bài.",
      ],
      answerIndex: 2,
      distractorNotes: [
        "Câu này nêu cảm xúc nhưng không có lý do hay chi tiết cụ thể.",
        "Câu này chỉ đánh giá chung chung, không có dẫn chứng.",
        "Đúng — câu này có chi tiết cụ thể (nhường phần ăn dù đói) và lý do rõ ràng (giàu tình yêu thương).",
        "Số lần xuất hiện không phải là cảm nhận về tính cách nhân vật.",
      ],
    },
  },
  {
    id: "ct-06-essay-1",
    topicIds: ["CT-06"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      "Trong một câu chuyện, có một bạn học sinh dù chân bị đau vẫn cố gắng đi bộ thật xa để mang sách vở đến tặng cho một em nhỏ ở vùng khó khăn. Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về nhân vật bạn học sinh đó.",
    explanation:
      "Chi tiết \"chân đau vẫn cố gắng đi bộ xa để tặng sách vở\" thể hiện lòng tốt, ý chí và sự quan tâm đến người khác của nhân vật.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu nhân vật và chi tiết em ấn tượng",
        "Chỉ ra hành động cụ thể của nhân vật (chân đau vẫn cố gắng đi bộ xa để tặng sách vở)",
        "Rút ra tính cách, phẩm chất của nhân vật từ hành động đó",
        "Nêu cảm xúc, đánh giá của em về nhân vật",
      ],
      rubric: [
        { criterion: "Nêu đúng chi tiết hành động của nhân vật", points: 2 },
        { criterion: "Rút ra đúng tính cách, phẩm chất từ chi tiết", points: 3 },
        { criterion: "Có cảm xúc/đánh giá cá nhân rõ ràng", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        "Nhân vật bạn học sinh trong câu chuyện đã để lại cho em ấn tượng sâu sắc. Dù chân bị đau, bạn vẫn cố gắng đi bộ một quãng đường thật xa chỉ để mang sách vở đến tặng cho một em nhỏ ở vùng khó khăn. Hành động ấy cho thấy bạn là người giàu lòng nhân ái, biết quan tâm và sẵn sàng vượt qua khó khăn của bản thân để giúp đỡ người khác. Em rất khâm phục ý chí và tấm lòng của bạn. Nếu ai cũng có tinh thần như vậy, cuộc sống xung quanh chúng ta chắc chắn sẽ ấm áp hơn rất nhiều. Câu chuyện khiến em muốn học tập theo tấm gương của bạn học sinh đó.",
    },
  },
  {
    id: "ct-06-mcq-4",
    topicIds: ["CT-06"],
    level: "M2",
    questionType: "mcq",
    prompt:
      'Một bạn nhỏ trong câu chuyện, dù bị các bạn trêu chọc vì nói lắp, vẫn kiên trì luyện tập mỗi ngày cho đến khi nói rõ ràng. Chi tiết này cho thấy bạn nhỏ có phẩm chất gì?',
    explanation: "Việc kiên trì luyện tập dù bị trêu chọc thể hiện nghị lực, sự bền bỉ và không dễ nản lòng trước khó khăn.",
    mcq: {
      options: ["Kiêu ngạo", "Kiên trì, có nghị lực vượt khó", "Nhút nhát, dễ bỏ cuộc", "Ích kỷ"],
      answerIndex: 1,
      distractorNotes: [
        "Hành động kiên trì luyện tập không liên quan đến kiêu ngạo.",
        "Đúng — kiên trì luyện tập dù bị trêu chọc thể hiện nghị lực, sự bền bỉ.",
        "Đây là biểu hiện ngược lại — bạn nhỏ không hề bỏ cuộc dù gặp khó khăn.",
        "Hành động này không liên quan gì đến sự ích kỷ.",
      ],
    },
  },
];
