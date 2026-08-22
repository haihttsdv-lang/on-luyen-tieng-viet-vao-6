import type { Exercise } from "@/data-access/types";

// VA-09 — Trình bày ý kiến/nghị luận đơn giản. `[BỔ SUNG]` theo xu hướng
// đề mới 2025-2026 (Mục 4.1). Bài văn mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA09_EXERCISES: Exercise[] = [
  {
    id: "va-09-essay-1",
    topicIds: ["VA-09"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Em có nghĩ học sinh nên đọc sách mỗi ngày không? Hãy nêu ý kiến và lý do của em.",
    explanation:
      "Bài trình bày ý kiến cần nêu rõ quan điểm ngay từ đầu, sau đó đưa ra lý do và dẫn chứng cụ thể để thuyết phục, khác với văn miêu tả hay kể chuyện.",
    essay: {
      outline: [
        "Mở bài: nêu rõ ý kiến của em (đồng ý/không đồng ý với việc đọc sách mỗi ngày)",
        "Thân bài: lý do thứ nhất kèm dẫn chứng cụ thể",
        "Thân bài: lý do thứ hai kèm dẫn chứng cụ thể",
        "Thân bài: (có thể nêu thêm) một khó khăn và cách khắc phục",
        "Kết bài: khẳng định lại ý kiến",
      ],
      openingStyles: [
        "Nêu thẳng ý kiến ngay câu đầu tiên",
        "Dẫn vào từ một câu hỏi rồi trả lời bằng chính ý kiến của em",
        "Dẫn vào từ một câu chuyện/trải nghiệm ngắn liên quan đến việc đọc sách",
      ],
      rubric: [
        { criterion: "Nêu rõ ý kiến ngay từ đầu bài", points: 2 },
        { criterion: "Có ít nhất 2 lý do hợp lý", points: 2 },
        { criterion: "Mỗi lý do có dẫn chứng hoặc ví dụ cụ thể", points: 3 },
        { criterion: "Kết bài khẳng định lại ý kiến rõ ràng", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Em nghĩ rằng học sinh nên đọc sách mỗi ngày, dù chỉ là một khoảng thời gian ngắn. Trước hết, đọc sách giúp em mở rộng vốn từ và hiểu biết về nhiều lĩnh vực khác nhau, từ đó viết văn cũng hay và mạch lạc hơn. Chẳng hạn, từ khi em đọc thêm truyện cổ tích và sách khoa học mỗi tối, bài văn của em được cô giáo nhận xét là có nhiều hình ảnh sinh động hơn trước. Thứ hai, đọc sách còn giúp em rèn luyện khả năng tập trung và tư duy. Có những lúc gặp bài toán khó, nhờ thói quen đọc sách mà em kiên nhẫn suy nghĩ kỹ hơn thay vì bỏ cuộc ngay. Tất nhiên, nhiều bạn cho rằng việc học đã chiếm hết thời gian nên khó có thể đọc sách thêm. Nhưng em nghĩ chỉ cần dành ra 15–20 phút mỗi tối trước khi ngủ là đã đủ để tạo thành thói quen tốt. Vì những lý do trên, em tin rằng đọc sách mỗi ngày là một thói quen rất đáng để mỗi học sinh rèn luyện.",
    },
  },
];
