import type { Exercise } from "@/data-access/types";

// VA-05 — Văn tả đồ vật. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn
// mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA05_EXERCISES: Exercise[] = [
  {
    id: "va-05-essay-1",
    topicIds: ["VA-05"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một đồ vật mà em yêu thích và gắn bó.",
    explanation:
      "Bài văn tả đồ vật cần tả theo cấu tạo (tổng thể → từng bộ phận), nêu công dụng và gắn với kỷ niệm hoặc tình cảm với đồ vật.",
    essay: {
      outline: [
        "Mở bài: giới thiệu đồ vật (đó là gì, có từ khi nào, ai tặng/mua)",
        "Thân bài: tả bao quát (hình dáng, kích thước, màu sắc)",
        "Thân bài: tả chi tiết từng bộ phận theo cấu tạo",
        "Thân bài: nêu công dụng, cách sử dụng",
        "Kết bài: tình cảm, kỷ niệm gắn với đồ vật",
      ],
      openingStyles: [
        "Giới thiệu hoàn cảnh em có được đồ vật đó",
        "Bắt đầu từ một lần sử dụng đồ vật đáng nhớ",
        "Dẫn vào từ cảm giác khi chạm vào/nhìn thấy đồ vật",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới đồ vật định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết từng bộ phận theo cấu tạo, sinh động", points: 3 },
        { criterion: "Nêu công dụng và cảm xúc/kỷ niệm cụ thể", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong số những đồ vật em có, chiếc cặp sách màu xanh dương là thứ em yêu thích và gắn bó nhất. Đây là món quà mẹ tặng em vào ngày khai giảng năm học lớp 5. Chiếc cặp có hình chữ nhật, kích thước vừa vặn với dáng người em, được làm từ vải chống thấm nước bền chắc. Mặt trước cặp in hình một chú gấu bông nhỏ đang cầm quyển sách, trông rất đáng yêu. Cặp có hai ngăn chính: ngăn lớn để sách vở, ngăn nhỏ hơn để hộp bút và đồ dùng học tập. Phía sau cặp là hai quai đeo được lót đệm êm, giúp em đeo cả ngày mà không bị đau vai. Mỗi ngày đến trường, chiếc cặp luôn đồng hành cùng em, đựng đầy sách vở và cả những ước mơ nhỏ bé. Có lần cặp bị rách một góc nhỏ, mẹ đã khâu lại cẩn thận, khiến em càng thêm trân trọng món quà này. Em sẽ giữ gìn chiếc cặp thật cẩn thận để nó luôn bền đẹp như ngày đầu mẹ tặng.",
    },
  },
  {
    id: "va-05-essay-2",
    topicIds: ["VA-05"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả chiếc đồng hồ báo thức (hoặc một đồ dùng học tập) mà em thường sử dụng.",
    explanation:
      "Bài văn tả đồ dùng cần tả rõ cấu tạo từng bộ phận và công dụng cụ thể trong sinh hoạt, học tập hằng ngày.",
    essay: {
      outline: [
        "Mở bài: giới thiệu đồ vật (đó là gì, có từ khi nào)",
        "Thân bài: tả bao quát (hình dáng, kích thước, màu sắc)",
        "Thân bài: tả chi tiết từng bộ phận theo cấu tạo",
        "Thân bài: nêu công dụng, cách sử dụng hằng ngày",
        "Kết bài: tình cảm, kỷ niệm gắn với đồ vật",
      ],
      openingStyles: [
        "Giới thiệu hoàn cảnh em có được đồ vật đó",
        "Bắt đầu từ âm thanh báo thức quen thuộc mỗi sáng",
        "Dẫn vào từ cảm giác khi nhìn thấy đồ vật trên bàn học",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới đồ vật định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết từng bộ phận theo cấu tạo, sinh động", points: 3 },
        { criterion: "Nêu công dụng và cảm xúc/kỷ niệm cụ thể", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trên bàn học của em có một chiếc đồng hồ báo thức hình chú gấu trúc mà bố mua tặng nhân dịp sinh nhật năm ngoái. Chiếc đồng hồ có hình tròn, đường kính khoảng mười lăm xăng-ti-mét, được sơn màu trắng đen giống hệt bộ lông của gấu trúc thật. Mặt đồng hồ có các con số rõ ràng, hai chiếc kim dài ngắn xoay đều đặn theo thời gian, cùng một kim giây mảnh nhỏ chạy tanh tách không ngừng nghỉ. Phía sau đồng hồ là một nút vặn nhỏ dùng để chỉnh giờ báo thức, và một công tắc để bật, tắt chuông. Mỗi tối trước khi đi ngủ, em đều chỉnh giờ báo thức lúc sáu giờ sáng để kịp chuẩn bị đi học. Tiếng chuông reo vang mỗi sáng tuy đôi khi khiến em hơi khó chịu vì còn buồn ngủ, nhưng nhờ đó em luôn dậy đúng giờ, không bao giờ đi học muộn. Chiếc đồng hồ đã trở thành người bạn nhỏ nhắc nhở em biết quý trọng thời gian mỗi ngày.",
    },
  },
  {
    id: "va-05-essay-3",
    topicIds: ["VA-05"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả chiếc bàn học ở nhà của em.",
    explanation:
      "Bài văn tả bàn học cần tả rõ cấu tạo (mặt bàn, ngăn kéo, chân bàn) và nêu vai trò gắn bó trong việc học tập hằng ngày.",
    essay: {
      outline: [
        "Mở bài: giới thiệu chiếc bàn học (có từ khi nào, đặt ở đâu)",
        "Thân bài: tả bao quát (hình dáng, kích thước, màu sắc, chất liệu)",
        "Thân bài: tả chi tiết từng bộ phận (mặt bàn, ngăn kéo, chân bàn)",
        "Thân bài: nêu công dụng, những kỷ niệm học tập gắn với bàn",
        "Kết bài: tình cảm của em với chiếc bàn học",
      ],
      openingStyles: [
        "Giới thiệu góc học tập và chiếc bàn quen thuộc",
        "Bắt đầu từ một buổi tối ngồi học bên bàn",
        "Dẫn vào từ cảm giác khi chạm vào mặt bàn gỗ",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới chiếc bàn định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết từng bộ phận theo cấu tạo, sinh động", points: 3 },
        { criterion: "Nêu công dụng và cảm xúc/kỷ niệm cụ thể", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Góc học tập của em có một chiếc bàn học bằng gỗ mà bố tự tay đóng cho em khi em vào lớp 1. Chiếc bàn có hình chữ nhật, dài khoảng một mét, được sơn màu nâu gỗ mộc mạc nhưng rất chắc chắn. Mặt bàn nhẵn bóng, đủ rộng để em bày sách vở, đèn bàn và một lọ hoa nhỏ. Bên dưới mặt bàn là hai ngăn kéo, một ngăn em dùng để cất sách giáo khoa, ngăn còn lại đựng đồ dùng học tập như bút, thước, tẩy. Bốn chân bàn được đóng vững chãi, dù đã dùng nhiều năm nhưng vẫn không hề lung lay. Mỗi tối, em đều ngồi vào bàn học để làm bài tập, ôn bài dưới ánh đèn vàng ấm áp. Chiếc bàn đã cùng em trải qua biết bao buổi tối miệt mài học tập, chứng kiến những lần em vui mừng vì đạt điểm cao và cả những lúc em buồn vì làm bài chưa tốt. Em rất trân trọng chiếc bàn học này vì nó không chỉ là đồ vật mà còn chứa đựng tình yêu thương của bố dành cho em.",
    },
  },
  {
    id: "va-05-essay-4",
    topicIds: ["VA-05"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả chiếc xe đạp mà em thường dùng để đi học.",
    explanation:
      "Bài văn tả xe đạp cần tả rõ cấu tạo (khung xe, bánh xe, yên xe, ghi-đông) và nêu vai trò của xe trong việc đi lại hằng ngày.",
    essay: {
      outline: [
        "Mở bài: giới thiệu chiếc xe đạp (có từ khi nào, ai mua/tặng)",
        "Thân bài: tả bao quát (hình dáng, màu sắc, kích thước)",
        "Thân bài: tả chi tiết từng bộ phận (khung xe, bánh xe, yên xe, ghi-đông, giỏ xe)",
        "Thân bài: nêu công dụng và kỷ niệm gắn với chiếc xe",
        "Kết bài: tình cảm của em với chiếc xe đạp",
      ],
      openingStyles: [
        "Giới thiệu hoàn cảnh em có được chiếc xe đạp",
        "Bắt đầu từ cảm giác lần đầu được đạp xe đến trường",
        "Dẫn vào từ âm thanh bánh xe lăn trên đường",
        "Bắt đầu bằng một câu hỏi gợi mở rồi dẫn tới chiếc xe định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết từng bộ phận theo cấu tạo, sinh động", points: 3 },
        { criterion: "Nêu công dụng và cảm xúc/kỷ niệm cụ thể", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Năm học lớp 4, bố mẹ đã tặng em một chiếc xe đạp màu tím để em có thể tự đạp xe đến trường. Chiếc xe có khung sườn chắc chắn, được sơn màu tím pha ánh nhũ bạc lấp lánh mỗi khi có ánh nắng chiếu vào. Hai bánh xe tròn đều, viền lốp đen bóng, luôn được bố bơm căng để em đi lại êm ái. Yên xe được bọc một lớp da mềm, có thể điều chỉnh độ cao phù hợp với chiều cao của em. Phía trước là chiếc ghi-đông cong nhẹ, có gắn hai tay nắm cao su êm tay, cùng một chiếc chuông nhỏ để báo hiệu khi qua đường. Phía trước xe còn có một chiếc giỏ nhỏ, em thường dùng để đựng cặp sách hoặc hộp bút. Mỗi sáng, em đều tự đạp xe đến trường trên con đường quen thuộc, cảm nhận làn gió mát lùa qua mái tóc. Chiếc xe đạp không chỉ giúp em đi lại thuận tiện mà còn giúp em cảm thấy tự lập hơn. Em luôn giữ gìn chiếc xe cẩn thận vì đó là món quà đầy ý nghĩa mà bố mẹ dành tặng.",
    },
  },
];
