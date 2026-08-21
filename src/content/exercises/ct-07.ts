import type { Exercise } from "@/data-access/types";

// CT-07 — Viết đoạn văn cảm thụ. Câu văn dùng để phân tích do tự biên soạn
// (Mục 10.1 hướng B), không trích từ tác phẩm nào.
export const CT07_EXERCISES: Exercise[] = [
  {
    id: "ct-07-essay-1",
    topicIds: ["CT-07"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Cánh diều no gió, no cả tiếng sáo vi vu như một khúc nhạc đồng quê." Hãy viết một đoạn văn ngắn (5–7 câu) nêu cảm nhận của em về biện pháp so sánh trong câu văn trên.',
    explanation:
      "Biện pháp so sánh \"tiếng sáo vi vu như một khúc nhạc đồng quê\" giúp âm thanh trở nên cụ thể, gợi cảm, gắn với không khí thanh bình của làng quê.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp so sánh được sử dụng trong câu",
        "Nêu tác dụng của biện pháp so sánh đó (gợi hình, gợi cảm như thế nào)",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp so sánh", points: 2 },
        { criterion: "Nêu đúng tác dụng gợi hình, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Cánh diều no gió, no cả tiếng sáo vi vu như một khúc nhạc đồng quê" đã để lại trong em nhiều ấn tượng. Tác giả so sánh tiếng sáo diều với một khúc nhạc đồng quê. Nhờ hình ảnh so sánh này, âm thanh vốn vô hình của tiếng sáo trở nên cụ thể, du dương như một bản nhạc thực sự. Người đọc như nghe thấy tiếng sáo ngân nga giữa bầu trời rộng lớn. Em cảm thấy rất yêu thích khung cảnh làng quê thanh bình được gợi ra từ câu văn. Đọc câu văn, em nhớ đến những buổi chiều thả diều cùng bạn bè ở quê ngoại.',
    },
  },
];
