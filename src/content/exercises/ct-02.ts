import type { Exercise } from "@/data-access/types";

// CT-02 — Biện pháp tu từ: Nhân hoá. Câu văn tự biên soạn (Mục 10.1 hướng
// B), không trích từ tác phẩm nào.
export const CT02_EXERCISES: Exercise[] = [
  {
    id: "ct-02-mcq-1",
    topicIds: ["CT-02"],
    level: "M1",
    questionType: "mcq",
    prompt: 'Câu văn "Ông mặt trời thức dậy sau đám mây" sử dụng biện pháp tu từ nào?',
    explanation: "Mặt trời được gọi là \"ông\" và có hành động \"thức dậy\" như con người — đây là biện pháp nhân hoá.",
    mcq: {
      options: ["So sánh", "Nhân hoá", "Điệp từ", "Đảo ngữ"],
      answerIndex: 1,
      distractorNotes: [
        "Câu không dùng từ so sánh (như, tựa, là...).",
        "Đúng — mặt trời được gán đặc điểm và hành động của con người.",
        "Câu không có từ ngữ nào được lặp lại.",
        "Trật tự câu vẫn theo cấu trúc thông thường, không đảo ngữ.",
      ],
    },
  },
  {
    id: "ct-02-mcq-2",
    topicIds: ["CT-02"],
    level: "M2",
    questionType: "mcq",
    prompt: "Dấu hiệu nào giúp nhận biết một câu văn có sử dụng biện pháp nhân hoá?",
    explanation: "Nhân hoá thể hiện qua việc sự vật được gọi bằng từ xưng hô của người, hoặc có hành động/cảm xúc như người.",
    mcq: {
      options: [
        "Có từ \"như\", \"tựa\", \"giống như\"",
        "Sự vật được gọi bằng từ xưng hô của người hoặc có hành động/cảm xúc như người",
        "Câu có nhiều tính từ",
        "Câu được viết theo thể thơ lục bát",
      ],
      answerIndex: 1,
      distractorNotes: [
        "Đây là dấu hiệu của biện pháp so sánh, không phải nhân hoá.",
        "Đúng — đây chính là dấu hiệu nhận biết nhân hoá.",
        "Nhiều tính từ không phải dấu hiệu riêng của nhân hoá.",
        "Thể thơ không liên quan đến việc có dùng nhân hoá hay không.",
      ],
    },
  },
  {
    id: "ct-02-mcq-3",
    topicIds: ["CT-02"],
    level: "M2",
    questionType: "mcq",
    prompt: 'Từ ngữ nào trong câu "Hàng cây đứng im lặng, buồn bã tiễn mùa thu đi" thể hiện phép nhân hoá?',
    explanation: "\"Buồn bã\" và \"tiễn\" là cảm xúc và hành động vốn chỉ có ở con người, được gán cho hàng cây.",
    mcq: {
      options: ["hàng cây", "mùa thu", "buồn bã, tiễn", "đứng im lặng"],
      answerIndex: 2,
      distractorNotes: [
        "\"Hàng cây\" là chủ thể được nhân hoá, không phải từ ngữ thể hiện phép nhân hoá.",
        "\"Mùa thu\" là đối tượng được tiễn, không thể hiện phép nhân hoá.",
        "Đúng — \"buồn bã\" (cảm xúc) và \"tiễn\" (hành động) là đặc điểm của con người được gán cho hàng cây.",
        "\"Đứng im lặng\" có thể là trạng thái tự nhiên của cây, không rõ rệt là nhân hoá bằng \"buồn bã, tiễn\".",
      ],
    },
  },
  {
    id: "ct-02-essay-1",
    topicIds: ["CT-02"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Chú chim non đứng trên cành, cất tiếng hót chào buổi sáng như đang gửi lời chào tới cả khu vườn." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp nhân hoá trong câu văn trên.',
    explanation:
      "Biện pháp nhân hoá \"chim non gửi lời chào\" khiến hình ảnh chú chim trở nên gần gũi, đáng yêu như một người bạn nhỏ.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp nhân hoá được sử dụng trong câu",
        "Nêu tác dụng của biện pháp nhân hoá đó (gợi hình, gợi cảm như thế nào)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp nhân hoá", points: 2 },
        { criterion: "Nêu đúng tác dụng gợi hình, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Chú chim non đứng trên cành, cất tiếng hót chào buổi sáng như đang gửi lời chào tới cả khu vườn" đã khiến em rất thích thú. Tác giả nhân hoá chú chim non bằng hành động "gửi lời chào" — vốn chỉ có ở con người. Nhờ biện pháp nhân hoá này, chú chim không còn là một con vật vô tri mà trở nên gần gũi, đáng yêu như một người bạn nhỏ đang chào hỏi mọi người. Khu vườn buổi sáng vì thế cũng trở nên sinh động, ấm áp hơn. Em cảm thấy như chính mình cũng được chú chim chào đón. Câu văn khiến em nhớ đến những buổi sáng nghe tiếng chim hót trước hiên nhà.',
    },
  },
];
