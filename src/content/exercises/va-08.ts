import type { Exercise } from "@/data-access/types";

// VA-08 — Viết thư. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn mẫu
// tự biên soạn (Mục 10.1 hướng B).
export const VA08_EXERCISES: Exercise[] = [
  {
    id: "va-08-essay-1",
    topicIds: ["VA-08"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Viết thư cho ông bà ở quê kể về tình hình học tập của em ở trường.",
    explanation:
      "Thư cần đủ 3 phần: đầu thư (địa điểm, ngày tháng, lời xưng hô), nội dung chính (lý do viết thư, nội dung chia sẻ), cuối thư (lời chúc, lời chào, ký tên).",
    essay: {
      outline: [
        "Đầu thư: địa điểm, ngày tháng, lời xưng hô với ông bà",
        "Nêu lý do viết thư (hỏi thăm sức khoẻ, kể chuyện học tập)",
        "Nội dung chính: kể về tình hình học tập, những điều đáng nhớ ở trường",
        "Bày tỏ tình cảm, nỗi nhớ với ông bà",
        "Cuối thư: lời chúc, lời chào, ký tên",
      ],
      openingStyles: [
        "Mở đầu bằng lời hỏi thăm sức khoẻ ông bà",
        "Mở đầu bằng việc nhắc đến khoảng thời gian đã lâu chưa gặp",
        "Mở đầu bằng một kỷ niệm gần đây gắn với ông bà",
      ],
      rubric: [
        { criterion: "Đủ cấu trúc thư (đầu thư, nội dung, cuối thư)", points: 2 },
        { criterion: "Nội dung chính tập trung, đúng yêu cầu đề", points: 3 },
        { criterion: "Có tình cảm chân thực với người nhận", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        "Hà Nội, ngày 12 tháng 10 năm 2026\n\nÔng bà kính mến,\n\nCháu là Minh đây ạ. Đã lâu cháu chưa được về quê thăm ông bà nên cháu viết thư này để hỏi thăm sức khoẻ ông bà và kể cho ông bà nghe về việc học tập của cháu.\n\nDạo này ông bà có khoẻ không ạ? Cháu vẫn thường nhớ đến những buổi chiều được ông dạy cháu tưới rau, được bà kể chuyện cổ tích trước khi đi ngủ. Về việc học, cháu xin báo với ông bà là cuối kỳ vừa rồi cháu đạt học sinh giỏi, môn Tiếng Việt cháu được cô giáo khen viết văn tiến bộ nhiều. Cháu đang cố gắng ôn luyện thêm để chuẩn bị cho kỳ thi vào lớp 6 sắp tới. Có những lúc bài khó, cháu lại nhớ đến lời ông dặn: 'Có công mài sắt, có ngày nên kim', thế là cháu lại có thêm động lực để cố gắng.\n\nCháu mong hè này được về quê thăm ông bà, được ăn cơm bà nấu và nghe ông kể chuyện. Cháu kính chúc ông bà luôn mạnh khoẻ, sống vui cùng con cháu.\n\nCháu của ông bà,\nMinh",
    },
  },
  {
    id: "va-08-essay-2",
    topicIds: ["VA-08"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Viết thư cho một người bạn ở xa để chia sẻ về ngôi trường mới của em.",
    explanation:
      "Thư gửi bạn bè thường có giọng điệu thân mật hơn thư gửi người lớn, nhưng vẫn cần đủ 3 phần cấu trúc chuẩn.",
    essay: {
      outline: [
        "Đầu thư: địa điểm, ngày tháng, lời xưng hô với bạn",
        "Nêu lý do viết thư (lâu ngày không gặp, muốn chia sẻ)",
        "Nội dung chính: kể về ngôi trường mới, thầy cô, bạn bè mới",
        "Hỏi thăm tình hình của bạn",
        "Cuối thư: lời chúc, lời chào, ký tên",
      ],
      openingStyles: [
        "Mở đầu bằng lời hỏi thăm bạn dạo này thế nào",
        "Mở đầu bằng việc nhắc đến khoảng thời gian đã lâu không liên lạc",
        "Mở đầu bằng cảm xúc háo hức muốn kể về ngôi trường mới",
      ],
      rubric: [
        { criterion: "Đủ cấu trúc thư (đầu thư, nội dung, cuối thư)", points: 2 },
        { criterion: "Nội dung chính tập trung, đúng yêu cầu đề", points: 3 },
        { criterion: "Giọng điệu thân mật, phù hợp với bạn bè", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        "Hà Nội, ngày 5 tháng 9 năm 2026\n\nLan thân mến,\n\nĐã hơn một năm kể từ khi cậu chuyển nhà đi xa, tớ nhớ cậu nhiều lắm. Hôm nay tớ viết thư này để kể cho cậu nghe về ngôi trường mới của tớ.\n\nNăm nay tớ học lớp 5, ngôi trường mới rộng hơn trường cũ rất nhiều, có cả một khu vườn nhỏ trồng đầy hoa ở giữa sân. Cô giáo chủ nhiệm của tớ tên là cô Hương, cô rất hiền và giảng bài dễ hiểu. Tớ cũng đã quen được vài người bạn mới, trong đó có một bạn tên Hoa ngồi cùng bàn, bạn ấy rất vui tính và hay kể chuyện cười cho tớ nghe. Dù có bạn mới nhưng tớ vẫn luôn nhớ những kỷ niệm ngày xưa chúng mình cùng nhau chơi nhảy dây ở trường cũ. Không biết dạo này cậu học hành thế nào, trường mới của cậu có gì thú vị không?\n\nTớ mong sớm nhận được thư hồi âm của cậu. Chúc cậu luôn học giỏi và vui khoẻ nhé!\n\nBạn của cậu,\nMai",
    },
  },
  {
    id: "va-08-essay-3",
    topicIds: ["VA-08"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Viết thư gửi các chú bộ đội đang làm nhiệm vụ nơi biên giới, hải đảo để bày tỏ tình cảm biết ơn.",
    explanation:
      "Thư gửi chú bộ đội cần giọng điệu trang trọng, kính trọng, thể hiện lòng biết ơn chân thành đối với những người đang bảo vệ Tổ quốc.",
    essay: {
      outline: [
        "Đầu thư: địa điểm, ngày tháng, lời xưng hô kính trọng",
        "Nêu lý do viết thư (bày tỏ lòng biết ơn)",
        "Nội dung chính: bày tỏ sự khâm phục, biết ơn đối với sự hy sinh của các chú",
        "Chia sẻ về việc học tập, rèn luyện của bản thân ở nhà",
        "Cuối thư: lời chúc sức khoẻ, lời chào, ký tên",
      ],
      openingStyles: [
        "Mở đầu bằng lời kính chào trang trọng",
        "Mở đầu bằng cảm xúc khi xem chương trình/đọc bài về bộ đội biên giới, hải đảo",
        "Mở đầu bằng lời cảm ơn ngay từ câu đầu tiên",
      ],
      rubric: [
        { criterion: "Đủ cấu trúc thư (đầu thư, nội dung, cuối thư)", points: 2 },
        { criterion: "Nội dung chính tập trung, đúng yêu cầu đề", points: 3 },
        { criterion: "Giọng điệu trang trọng, tình cảm chân thành", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        "Hà Nội, ngày 20 tháng 12 năm 2026\n\nChú bộ đội kính mến,\n\nCháu là một học sinh lớp 5 ở Hà Nội. Qua chương trình truyền hình, cháu được biết về cuộc sống và công việc của các chú nơi biên giới, hải đảo xa xôi nên cháu viết thư này để gửi đến chú lời biết ơn chân thành nhất.\n\nCháu được biết các chú phải xa gia đình, sống trong điều kiện thời tiết khắc nghiệt, ngày đêm canh giữ để bảo vệ từng tấc đất, vùng biển của Tổ quốc. Cháu rất khâm phục sự hy sinh thầm lặng ấy của các chú. Nhờ có các chú ngày đêm canh gác, chúng cháu ở đất liền mới được sống trong hoà bình, được đến trường học tập vui vẻ mỗi ngày. Cháu xin hứa với chú sẽ cố gắng học tập thật tốt, rèn luyện sức khoẻ và đạo đức để sau này trở thành người có ích cho đất nước.\n\nCháu kính chúc chú và các đồng đội luôn mạnh khoẻ, vững vàng nơi biên cương, hải đảo. Cháu mong đất nước mãi mãi hoà bình nhờ có những người như chú.\n\nCháu của chú,\nAn",
    },
  },
  {
    id: "va-08-essay-4",
    topicIds: ["VA-08"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Viết thư cho bố (hoặc mẹ) đang đi công tác xa để kể về tình hình ở nhà và bày tỏ nỗi nhớ.",
    explanation:
      "Thư gửi người thân trong gia đình cần giọng điệu gần gũi, chân thành, tập trung kể những việc cụ thể ở nhà để người nhận yên tâm.",
    essay: {
      outline: [
        "Đầu thư: địa điểm, ngày tháng, lời xưng hô với bố/mẹ",
        "Nêu lý do viết thư (nhớ bố/mẹ, muốn kể chuyện ở nhà)",
        "Nội dung chính: kể về tình hình học tập, sinh hoạt ở nhà",
        "Bày tỏ nỗi nhớ và mong bố/mẹ sớm về nhà",
        "Cuối thư: lời chúc, lời chào, ký tên",
      ],
      openingStyles: [
        "Mở đầu bằng lời hỏi thăm sức khoẻ bố/mẹ nơi công tác",
        "Mở đầu bằng cảm xúc nhớ nhung ngay từ câu đầu",
        "Mở đầu bằng việc kể lại một việc vừa xảy ra ở nhà",
      ],
      rubric: [
        { criterion: "Đủ cấu trúc thư (đầu thư, nội dung, cuối thư)", points: 2 },
        { criterion: "Nội dung chính tập trung, đúng yêu cầu đề", points: 3 },
        { criterion: "Có tình cảm chân thực với người nhận", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả", points: 3 },
      ],
      sampleAnswer:
        "Hà Nội, ngày 3 tháng 3 năm 2026\n\nBố kính yêu,\n\nBố đi công tác đã được hai tuần rồi, con nhớ bố nhiều lắm nên viết thư này để kể cho bố nghe tình hình ở nhà.\n\nDạo này bố có khỏe không ạ, công việc ở đó có vất vả lắm không? Ở nhà, mẹ con con vẫn khỏe, mẹ vẫn chăm sóc con chu đáo như mọi khi. Tuần trước con vừa được cô giáo khen vì bài kiểm tra Toán đạt điểm mười, con rất muốn khoe ngay với bố. Buổi tối, con vẫn tự giác học bài đúng giờ như bố đã dặn trước khi đi, không để mẹ phải nhắc nhở. Con cũng thay bố tưới cây trong vườn mỗi ngày, mấy chậu hoa hồng bố trồng vẫn đang nở rất đẹp. Dù mọi thứ ở nhà đều ổn nhưng con vẫn thấy thiếu vắng vì không có bố mỗi tối cùng xem tin tức và trò chuyện.\n\nCon mong bố hoàn thành công việc thật tốt và sớm trở về nhà với mẹ con con. Con chúc bố nhiều sức khoẻ và luôn bình an.\n\nCon yêu của bố,\nHà",
    },
  },
];
