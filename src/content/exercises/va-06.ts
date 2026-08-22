import type { Exercise } from "@/data-access/types";

// VA-06 — Kể chuyện được chứng kiến hoặc tham gia. Dàn ý phỏng theo cấu
// trúc chung Mục 4.4. Bài văn mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA06_EXERCISES: Exercise[] = [
  {
    id: "va-06-essay-1",
    topicIds: ["VA-06"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Kể lại một việc tốt em đã làm hoặc chứng kiến khiến em nhớ mãi.",
    explanation:
      "Bài văn kể chuyện có thật cần kể theo trình tự thời gian, có chi tiết cụ thể (không chung chung) và nêu cảm nghĩ, bài học rút ra.",
    essay: {
      outline: [
        "Mở bài: giới thiệu câu chuyện (xảy ra khi nào, ở đâu, ai liên quan)",
        "Thân bài: kể diễn biến câu chuyện theo trình tự thời gian",
        "Thân bài: kể tình huống đáng nhớ nhất (cao trào)",
        "Thân bài: kể kết thúc câu chuyện",
        "Kết bài: cảm nghĩ, bài học rút ra",
      ],
      openingStyles: [
        "Giới thiệu thời gian, địa điểm xảy ra câu chuyện",
        "Bắt đầu từ cảm xúc hiện tại khi nhớ lại câu chuyện",
        "Dẫn vào từ một câu nói ấn tượng trong câu chuyện",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới câu chuyện",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Kể đúng trình tự thời gian, rõ ràng", points: 2 },
        { criterion: "Có chi tiết cụ thể, sinh động ở tình huống cao trào", points: 3 },
        { criterion: "Có cảm nghĩ, bài học rút ra rõ ràng", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Chiều hôm ấy, trên đường đi học về, em gặp một cụ già đang đứng loay hoay bên vệ đường, tay run run cầm chiếc gậy, không dám bước qua vì dòng xe cộ đông đúc. Thấy vậy, em liền chạy tới, lễ phép hỏi: 'Bà ơi, bà có cần cháu giúp qua đường không ạ?' Cụ mỉm cười gật đầu, ánh mắt đầy biết ơn. Em nhẹ nhàng nắm lấy tay cụ, chờ lúc đường vắng rồi dắt cụ qua từng bước một, mắt luôn để ý xe cộ hai bên. Khi sang đến vỉa hè bên kia, cụ vuốt tóc em và nói: 'Cảm ơn cháu, cháu ngoan quá.' Nghe vậy, em cảm thấy trong lòng vui sướng lạ thường, dù chỉ là một việc làm rất nhỏ. Trên đường về nhà, em cứ nghĩ mãi về nụ cười của cụ già lúc ấy. Em nhận ra rằng chỉ cần một hành động nhỏ, đúng lúc, cũng có thể mang lại niềm vui lớn cho người khác. Từ đó, em càng cố gắng quan tâm, giúp đỡ mọi người xung quanh nhiều hơn.",
    },
  },
  {
    id: "va-06-essay-2",
    topicIds: ["VA-06"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Kể lại một lần em mắc lỗi và cách em đã sửa chữa lỗi lầm đó.",
    explanation:
      "Bài văn kể chuyện có thật về lỗi lầm cần trung thực, kể rõ diễn biến và đặc biệt là quá trình nhận ra lỗi, sửa chữa để rút ra bài học.",
    essay: {
      outline: [
        "Mở bài: giới thiệu hoàn cảnh xảy ra câu chuyện",
        "Thân bài: kể diễn biến sự việc mắc lỗi",
        "Thân bài: kể tâm trạng, suy nghĩ của em khi nhận ra lỗi",
        "Thân bài: kể cách em đã sửa chữa lỗi lầm",
        "Kết bài: cảm nghĩ, bài học rút ra",
      ],
      openingStyles: [
        "Giới thiệu thời gian, hoàn cảnh xảy ra câu chuyện",
        "Bắt đầu từ cảm giác hối hận khi nhớ lại",
        "Dẫn vào từ một câu nói của người thân đã giúp em nhận ra lỗi",
        "Bắt đầu bằng suy nghĩ về việc ai cũng có thể mắc lỗi",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Kể đúng trình tự, trung thực", points: 2 },
        { criterion: "Có chi tiết cụ thể về quá trình nhận lỗi, sửa lỗi", points: 3 },
        { criterion: "Có cảm nghĩ, bài học rút ra rõ ràng", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Năm ngoái, em đã vô tình làm vỡ chiếc bình hoa yêu thích của mẹ khi đang chơi đùa trong nhà. Sợ bị mắng, em đã giấu chuyện đó đi và không nói cho mẹ biết, chỉ âm thầm dọn dẹp các mảnh vỡ. Tối hôm đó, khi mẹ hỏi về chiếc bình hoa, em đã nói dối rằng không biết chuyện gì xảy ra. Thấy mẹ buồn vì mất chiếc bình kỷ niệm, trong lòng em cảm thấy vô cùng day dứt và hối hận. Suốt đêm đó em trằn trọc không ngủ được, vì biết mình đã làm sai khi nói dối mẹ. Sáng hôm sau, em quyết định đến gặp mẹ và thành thật kể lại toàn bộ sự việc, xin lỗi mẹ vì đã làm vỡ bình hoa và còn nói dối. Mẹ tuy hơi buồn nhưng đã ôm em vào lòng và nói rằng mẹ vui vì em đã dũng cảm nói thật. Từ lần đó, em hiểu rằng dù mắc lỗi gì, việc trung thực nhận lỗi luôn tốt hơn là che giấu, và em luôn cố gắng thành thật với mọi người xung quanh.",
    },
  },
  {
    id: "va-06-essay-3",
    topicIds: ["VA-06"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Kể lại một buổi lao động (dọn vệ sinh lớp học, trồng cây...) mà em đã tham gia cùng các bạn.",
    explanation:
      "Bài văn kể chuyện tập thể cần kể rõ sự phân công công việc, quá trình làm việc nhóm và kết quả đạt được cùng cảm nghĩ về tinh thần đoàn kết.",
    essay: {
      outline: [
        "Mở bài: giới thiệu buổi lao động (thời gian, địa điểm, mục đích)",
        "Thân bài: kể việc phân công công việc cho từng nhóm/bạn",
        "Thân bài: kể quá trình làm việc, những khó khăn và cách khắc phục",
        "Thân bài: kể kết quả đạt được sau buổi lao động",
        "Kết bài: cảm nghĩ về tinh thần đoàn kết, bài học rút ra",
      ],
      openingStyles: [
        "Giới thiệu thời gian, lý do có buổi lao động",
        "Bắt đầu từ không khí háo hức trước buổi lao động",
        "Dẫn vào từ lời phát động của cô giáo",
        "Bắt đầu bằng suy nghĩ về ý nghĩa của lao động tập thể",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Kể đúng trình tự, rõ ràng", points: 2 },
        { criterion: "Có chi tiết cụ thể về quá trình làm việc nhóm", points: 3 },
        { criterion: "Có cảm nghĩ, bài học rút ra rõ ràng", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Sáng thứ Bảy tuần trước, lớp em tổ chức buổi lao động dọn vệ sinh sân trường theo kế hoạch của cô chủ nhiệm. Ngay từ đầu giờ, cô đã chia lớp thành bốn nhóm nhỏ, mỗi nhóm phụ trách một khu vực: quét sân, nhặt rác, tưới cây và lau cửa sổ lớp học. Nhóm em được phân công nhặt rác quanh khu vực sân trường. Ban đầu, công việc khá vất vả vì rác nằm rải rác ở nhiều nơi, nhưng nhờ các bạn trong nhóm phối hợp nhịp nhàng, người nhặt, người giữ túi rác, công việc dần trở nên nhanh chóng hơn. Giữa buổi, trời bắt đầu nắng gắt khiến ai cũng thấm mệt, nhưng không một bạn nào bỏ cuộc, mọi người còn động viên nhau cố gắng hoàn thành. Sau gần hai tiếng đồng hồ, sân trường đã sạch sẽ, gọn gàng hẳn lên, những bồn cây cũng được tưới nước tươi tốt. Nhìn thành quả chung của cả lớp, ai nấy đều vui vẻ, tự hào dù người nào cũng lấm lem mồ hôi. Qua buổi lao động ấy, em nhận ra rằng khi mọi người đoàn kết, cùng nhau cố gắng thì công việc dù khó khăn đến đâu cũng sẽ hoàn thành tốt đẹp.",
    },
  },
  {
    id: "va-06-essay-4",
    topicIds: ["VA-06"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Kể lại một kỷ niệm đáng nhớ giữa em và một người bạn.",
    explanation:
      "Bài văn kể kỷ niệm bạn bè cần kể rõ diễn biến sự việc, đặc biệt là cảm xúc của em trong tình huống đó, để làm nổi bật ý nghĩa của kỷ niệm.",
    essay: {
      outline: [
        "Mở bài: giới thiệu người bạn và hoàn cảnh xảy ra kỷ niệm",
        "Thân bài: kể diễn biến sự việc theo trình tự thời gian",
        "Thân bài: kể tình huống đáng nhớ nhất trong kỷ niệm đó",
        "Thân bài: kể kết thúc và cảm xúc của em lúc đó",
        "Kết bài: cảm nghĩ hiện tại của em về kỷ niệm đó",
      ],
      openingStyles: [
        "Giới thiệu người bạn và thời gian xảy ra kỷ niệm",
        "Bắt đầu từ cảm xúc hiện tại khi nhớ lại kỷ niệm",
        "Dẫn vào từ một câu nói ấn tượng trong kỷ niệm đó",
        "Bắt đầu bằng suy nghĩ về tình bạn rồi kể lại kỷ niệm",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Kể đúng trình tự thời gian, rõ ràng", points: 2 },
        { criterion: "Có chi tiết cụ thể, sinh động ở tình huống đáng nhớ", points: 3 },
        { criterion: "Có cảm nghĩ chân thực về tình bạn", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 2 },
      ],
      sampleAnswer:
        "Kỷ niệm mà em nhớ mãi là lần em và bạn Nam cùng nhau tham gia hội thi vẽ tranh của trường vào năm lớp 4. Hôm đó, chúng em được phân công vẽ chung một bức tranh về chủ đề \"Ngôi trường mơ ước\". Ban đầu, em và Nam có ý tưởng khác nhau nên tranh cãi khá lâu, không ai chịu nhường ai. Thấy thời gian thi sắp hết mà bức tranh vẫn còn dang dở, Nam đã bình tĩnh đề nghị kết hợp cả hai ý tưởng lại với nhau: em vẽ phần ngôi trường, còn Nam vẽ phần sân chơi và cây cối xung quanh. Nhờ vậy, chúng em đã hoàn thành bức tranh đúng lúc chuông báo hết giờ vang lên. Điều bất ngờ là bức tranh của chúng em được cô giáo khen là sáng tạo và giành giải Nhì của khối. Khoảnh khắc cả hai ôm nhau vui mừng khi nghe công bố giải thưởng đến giờ em vẫn còn nhớ như in. Từ kỷ niệm đó, em học được rằng biết lắng nghe và nhường nhịn bạn bè sẽ giúp mọi việc trở nên tốt đẹp hơn, và tình bạn giữa em và Nam cũng trở nên gắn bó hơn rất nhiều.",
    },
  },
];
