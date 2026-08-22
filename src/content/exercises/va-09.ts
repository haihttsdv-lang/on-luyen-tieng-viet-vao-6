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
  {
    id: "va-09-essay-2",
    topicIds: ["VA-09"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Theo em, học sinh tiểu học có nên tự mình sử dụng điện thoại thông minh không? Hãy nêu ý kiến và lý do của em.",
    explanation:
      "Đây là dạng đề nghị luận mở, có thể đồng ý hoặc không đồng ý — quan trọng là lập luận chặt chẽ, có dẫn chứng, không cần đưa ra một đáp án \"đúng\" tuyệt đối.",
    essay: {
      outline: [
        "Mở bài: nêu rõ ý kiến của em (nên/không nên, hoặc nên có điều kiện)",
        "Thân bài: lý do thứ nhất kèm dẫn chứng cụ thể",
        "Thân bài: lý do thứ hai kèm dẫn chứng cụ thể",
        "Thân bài: (có thể nêu) một mặt trái cần lưu ý và cách khắc phục",
        "Kết bài: khẳng định lại ý kiến",
      ],
      openingStyles: [
        "Nêu thẳng ý kiến ngay câu đầu tiên",
        "Dẫn vào từ một tình huống thực tế em từng thấy",
        "Dẫn vào từ một câu hỏi rồi trả lời bằng chính ý kiến của em",
      ],
      rubric: [
        { criterion: "Nêu rõ ý kiến ngay từ đầu bài", points: 2 },
        { criterion: "Có ít nhất 2 lý do hợp lý", points: 2 },
        { criterion: "Mỗi lý do có dẫn chứng hoặc ví dụ cụ thể", points: 3 },
        { criterion: "Kết bài khẳng định lại ý kiến rõ ràng", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Theo em, học sinh tiểu học chỉ nên sử dụng điện thoại thông minh có giới hạn thời gian và dưới sự giám sát của bố mẹ, chứ không nên dùng tự do. Trước hết, việc dùng điện thoại quá nhiều có thể ảnh hưởng đến thị lực và sức khoẻ của học sinh. Em từng thấy một bạn trong lớp bị cận thị nặng hơn chỉ sau một kỳ nghỉ hè dùng điện thoại chơi game liên tục. Thứ hai, nếu không kiểm soát, học sinh dễ xao nhãng việc học vì mải mê xem video hoặc chơi trò chơi điện tử. Tuy nhiên, em cũng nhận thấy điện thoại có nhiều lợi ích nếu dùng đúng cách, ví dụ như tra cứu bài học, liên lạc với bố mẹ khi cần thiết. Vì vậy, em nghĩ giải pháp hợp lý là bố mẹ nên đặt ra thời gian sử dụng cụ thể mỗi ngày và cùng con lựa chọn những ứng dụng bổ ích. Tóm lại, học sinh tiểu học không nên dùng điện thoại tự do mà cần có sự hướng dẫn và giới hạn hợp lý từ người lớn.",
    },
  },
  {
    id: "va-09-essay-3",
    topicIds: ["VA-09"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Em có đồng ý với ý kiến \"Học sinh nên tích cực tham gia các hoạt động ngoại khoá\" không? Hãy nêu ý kiến và lý do của em.",
    explanation:
      "Bài trình bày ý kiến cần nêu rõ quan điểm (đồng ý/không đồng ý/đồng ý một phần), sau đó thuyết phục bằng lý lẽ và dẫn chứng cụ thể từ trải nghiệm hoặc quan sát thực tế.",
    essay: {
      outline: [
        "Mở bài: nêu rõ ý kiến của em về việc tham gia hoạt động ngoại khoá",
        "Thân bài: lý do thứ nhất kèm dẫn chứng cụ thể",
        "Thân bài: lý do thứ hai kèm dẫn chứng cụ thể",
        "Thân bài: (có thể nêu) lưu ý để cân bằng giữa học tập và hoạt động ngoại khoá",
        "Kết bài: khẳng định lại ý kiến",
      ],
      openingStyles: [
        "Nêu thẳng ý kiến ngay câu đầu tiên",
        "Dẫn vào từ một hoạt động ngoại khoá em từng tham gia",
        "Dẫn vào từ một câu hỏi rồi trả lời bằng chính ý kiến của em",
      ],
      rubric: [
        { criterion: "Nêu rõ ý kiến ngay từ đầu bài", points: 2 },
        { criterion: "Có ít nhất 2 lý do hợp lý", points: 2 },
        { criterion: "Mỗi lý do có dẫn chứng hoặc ví dụ cụ thể", points: 3 },
        { criterion: "Kết bài khẳng định lại ý kiến rõ ràng", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Em hoàn toàn đồng ý với ý kiến học sinh nên tích cực tham gia các hoạt động ngoại khoá. Trước hết, hoạt động ngoại khoá giúp em rèn luyện những kỹ năng mà sách vở không dạy được, như làm việc nhóm, giao tiếp và tự tin trước đám đông. Năm ngoái, khi tham gia câu lạc bộ kịch của trường, em đã học được cách phối hợp với bạn bè và mạnh dạn thể hiện bản thân trên sân khấu. Thứ hai, các hoạt động như thể thao, cắm trại còn giúp học sinh giải toả căng thẳng sau những giờ học tập trung, từ đó tinh thần thoải mái hơn để tiếp thu bài mới. Tất nhiên, em nghĩ cần biết sắp xếp thời gian hợp lý để hoạt động ngoại khoá không ảnh hưởng đến việc học chính, chẳng hạn chỉ nên tham gia một đến hai câu lạc bộ phù hợp với sở thích. Nhìn chung, em tin rằng hoạt động ngoại khoá mang lại nhiều lợi ích thiết thực và học sinh nên chủ động tham gia khi có điều kiện.",
    },
  },
  {
    id: "va-09-essay-4",
    topicIds: ["VA-09"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Em có nghĩ học sinh nên chủ động giúp đỡ bạn bè trong học tập không? Hãy nêu ý kiến và lý do của em.",
    explanation:
      "Bài trình bày ý kiến cần nêu rõ quan điểm ngay từ đầu và có lý lẽ, dẫn chứng thuyết phục cho từng luận điểm.",
    essay: {
      outline: [
        "Mở bài: nêu rõ ý kiến của em",
        "Thân bài: lý do thứ nhất kèm dẫn chứng cụ thể",
        "Thân bài: lý do thứ hai kèm dẫn chứng cụ thể",
        "Thân bài: (có thể nêu) cách giúp đỡ bạn sao cho phù hợp",
        "Kết bài: khẳng định lại ý kiến",
      ],
      openingStyles: [
        "Nêu thẳng ý kiến ngay câu đầu tiên",
        "Dẫn vào từ một trải nghiệm em từng giúp đỡ hoặc được bạn giúp đỡ",
        "Dẫn vào từ một câu hỏi rồi trả lời bằng chính ý kiến của em",
      ],
      rubric: [
        { criterion: "Nêu rõ ý kiến ngay từ đầu bài", points: 2 },
        { criterion: "Có ít nhất 2 lý do hợp lý", points: 2 },
        { criterion: "Mỗi lý do có dẫn chứng hoặc ví dụ cụ thể", points: 3 },
        { criterion: "Kết bài khẳng định lại ý kiến rõ ràng", points: 1 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Em nghĩ rằng học sinh nên chủ động giúp đỡ bạn bè trong học tập khi có thể. Trước hết, việc giúp đỡ bạn bè giúp cả lớp cùng nhau tiến bộ, không ai bị bỏ lại phía sau. Em còn nhớ có lần giảng lại bài Toán cho một bạn chưa hiểu, và khi thấy bạn ấy tự giải được bài tương tự, em cảm thấy rất vui và tự hào. Thứ hai, việc giảng lại bài cho bạn cũng giúp chính em hiểu bài sâu hơn, vì để giải thích cho người khác hiểu, em phải nắm chắc kiến thức trước. Tuy nhiên, em nghĩ cần giúp đỡ đúng cách, tức là hướng dẫn cách làm chứ không nên làm bài hộ hoàn toàn, vì như vậy sẽ khiến bạn ỷ lại, không tự học được. Nhìn chung, em tin rằng tinh thần giúp đỡ lẫn nhau trong học tập sẽ mang lại lợi ích cho cả người giúp lẫn người được giúp, đồng thời làm cho tình bạn thêm gắn bó.",
    },
  },
];
