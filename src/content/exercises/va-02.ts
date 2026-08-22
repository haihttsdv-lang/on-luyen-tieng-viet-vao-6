import type { Exercise } from "@/data-access/types";

// VA-02 — Văn tả cảnh. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn
// mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA02_EXERCISES: Exercise[] = [
  {
    id: "va-02-essay-1",
    topicIds: ["VA-02"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả cảnh buổi sáng ở quê hương em (hoặc một nơi em từng đến).",
    explanation:
      "Bài văn tả cảnh cần tả theo trình tự hợp lý (bao quát → chi tiết, hoặc theo thời gian), có cảm xúc, liên tưởng, không chỉ liệt kê sự vật.",
    essay: {
      outline: [
        "Mở bài: giới thiệu cảnh định tả (ở đâu, vào lúc nào)",
        "Thân bài: tả bao quát toàn cảnh lúc mới bắt đầu",
        "Thân bài: tả chi tiết cảnh vật, con người theo trình tự hợp lý",
        "Thân bài: cảm nhận, liên tưởng của em về cảnh",
        "Kết bài: tình cảm của em với cảnh vật đó",
      ],
      openingStyles: [
        "Giới thiệu vị trí, lý do em có mặt ở nơi đó",
        "Bắt đầu từ một thời điểm đặc biệt (bình minh, ngày hè...)",
        "Dẫn vào từ một âm thanh quen thuộc của buổi sáng (tiếng gà gáy, tiếng chim hót)",
        "Bắt đầu bằng một câu thơ, câu hát về cảnh quê rồi dẫn tới cảnh định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết theo trình tự hợp lý, sinh động", points: 3 },
        { criterion: "Có cảm xúc, liên tưởng", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Mỗi lần về quê ngoại, em thích nhất là được dậy sớm để ngắm cảnh buổi sáng trên cánh đồng. Khi ông mặt trời còn chưa ló rạng hẳn, cả cánh đồng chìm trong một lớp sương mỏng, mờ ảo như một tấm khăn voan khổng lồ. Xa xa, tiếng gà gáy vang lên báo hiệu một ngày mới bắt đầu. Khi nắng lên, sương tan dần, để lộ những thửa ruộng lúa xanh mướt trải dài đến tận chân trời. Trên bờ ruộng, vài bác nông dân đã ra đồng từ sớm, tay cầm cuốc, vai vác bó mạ non. Đàn trâu thong thả gặm cỏ ven đường, thỉnh thoảng ngẩng đầu nhìn quanh rồi lại cúi xuống. Gió sớm mát rượi, mang theo mùi thơm dịu nhẹ của lúa non và mùi bùn đất quen thuộc. Đứng giữa khung cảnh ấy, em cảm thấy lòng mình thật bình yên, như được hoà vào nhịp sống giản dị mà ấm áp của làng quê. Em mong mỗi lần về quê đều được đón một buổi sáng đẹp như vậy.",
    },
  },
  {
    id: "va-02-essay-2",
    topicIds: ["VA-02"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả cảnh ngôi trường của em vào giờ ra chơi.",
    explanation:
      "Bài văn tả cảnh sân trường cần tả bao quát không gian rồi đến hoạt động náo nhiệt của học sinh, kết hợp âm thanh, màu sắc sinh động.",
    essay: {
      outline: [
        "Mở bài: giới thiệu thời điểm (giờ ra chơi) và ấn tượng chung",
        "Thân bài: tả bao quát sân trường (cây cối, các dãy lớp học)",
        "Thân bài: tả chi tiết hoạt động của học sinh (chơi đùa, trò chuyện...)",
        "Thân bài: tả âm thanh, không khí rộn ràng của giờ ra chơi",
        "Kết bài: cảm nghĩ của em về giờ ra chơi",
      ],
      openingStyles: [
        "Giới thiệu tiếng trống báo hiệu giờ ra chơi",
        "Bắt đầu từ không khí yên tĩnh trong lớp trước khi trống vang lên",
        "Dẫn vào từ tiếng cười nói rộn ràng ngoài sân",
        "Bắt đầu bằng cảm xúc háo hức chờ đợi giờ ra chơi",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát không gian sân trường rõ ràng", points: 2 },
        { criterion: "Tả chi tiết hoạt động, âm thanh sinh động", points: 3 },
        { criterion: "Có cảm xúc, liên tưởng", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Tiếng trống \"Tùng! Tùng! Tùng!\" vang lên báo hiệu giờ ra chơi đã đến, cả ngôi trường như bừng tỉnh sau những phút giây yên ắng. Từ các dãy lớp học, từng tốp học sinh ùa ra sân như đàn ong vỡ tổ. Sân trường rộng rãi với hàng cây phượng già toả bóng mát, dưới gốc cây một vài bạn đang ngồi đọc truyện, trò chuyện rôm rả. Ở góc sân bên kia, các bạn nam đang say sưa chơi đá cầu, tiếng reo hò mỗi khi ghi điểm vang lên không ngớt. Nhóm bạn nữ lại thích chơi nhảy dây, tiếng dây quất xuống nền sân đều đặn hoà cùng tiếng đếm nhịp vui tai. Xa xa, vài thầy cô đứng trò chuyện, thỉnh thoảng mỉm cười nhìn học sinh nô đùa. Không khí sân trường lúc này thật náo nhiệt, rộn rã tiếng cười nói, khác hẳn vẻ tĩnh lặng trong giờ học. Em luôn mong chờ đến giờ ra chơi để được thư giãn và vui đùa cùng bạn bè sau những giờ học căng thẳng.",
    },
  },
  {
    id: "va-02-essay-3",
    topicIds: ["VA-02"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả cảnh biển vào buổi chiều mà em đã có dịp ngắm nhìn.",
    explanation:
      "Bài văn tả cảnh biển cần tả theo trình tự không gian (từ xa đến gần, hoặc từ trên xuống dưới) kết hợp màu sắc, âm thanh đặc trưng của biển.",
    essay: {
      outline: [
        "Mở bài: giới thiệu địa điểm, thời gian ngắm biển",
        "Thân bài: tả bao quát toàn cảnh biển buổi chiều",
        "Thân bài: tả chi tiết (sóng, cát, bầu trời hoàng hôn, con người)",
        "Thân bài: cảm nhận về âm thanh, không khí của biển",
        "Kết bài: tình cảm của em với cảnh biển",
      ],
      openingStyles: [
        "Giới thiệu chuyến đi biển và thời điểm buổi chiều",
        "Bắt đầu từ tiếng sóng vỗ rì rào",
        "Dẫn vào từ màu sắc rực rỡ của hoàng hôn trên biển",
        "Bắt đầu bằng cảm xúc háo hức khi lần đầu nhìn thấy biển",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát toàn cảnh biển rõ ràng", points: 2 },
        { criterion: "Tả chi tiết sinh động, có màu sắc, âm thanh", points: 3 },
        { criterion: "Có cảm xúc, liên tưởng", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Kỳ nghỉ hè năm ngoái, gia đình em có dịp đến thăm biển Sầm Sơn, và cảnh biển vào buổi chiều hôm ấy đã để lại trong em ấn tượng khó quên. Khi mặt trời bắt đầu ngả về phía tây, cả bầu trời và mặt biển như được nhuộm một màu vàng cam rực rỡ xen lẫn ánh hồng tuyệt đẹp. Từng đợt sóng nối đuôi nhau xô vào bờ, tung bọt trắng xoá rồi lại rút ra xa, tạo nên âm thanh rì rào đều đặn nghe rất êm tai. Bãi cát vàng mịn trải dài, in hằn dấu chân của những đứa trẻ đang nô đùa, xây lâu đài cát. Xa xa ngoài khơi, vài chiếc thuyền đánh cá nhỏ bé nhấp nhô theo từng con sóng, chuẩn bị trở về sau một ngày ra khơi. Gió biển thổi lồng lộng, mang theo vị mặn mòi đặc trưng khiến em cảm thấy sảng khoái lạ thường. Đứng trước khung cảnh bao la ấy, em cảm thấy con người thật nhỏ bé trước thiên nhiên rộng lớn. Em mong sẽ có dịp trở lại ngắm hoàng hôn trên biển một lần nữa.",
    },
  },
  {
    id: "va-02-essay-4",
    topicIds: ["VA-02"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả cảnh phố phường (hoặc con đường) nơi em ở vào một buổi tối.",
    explanation:
      "Bài văn tả cảnh phố phường buổi tối cần tập trung vào ánh đèn, âm thanh và hoạt động của con người để làm nổi bật không khí nhộn nhịp hoặc yên bình tuỳ khu vực.",
    essay: {
      outline: [
        "Mở bài: giới thiệu con phố/con đường định tả, thời điểm buổi tối",
        "Thân bài: tả bao quát khung cảnh chung (ánh đèn, không khí)",
        "Thân bài: tả chi tiết hoạt động của con người, cửa hàng, phương tiện qua lại",
        "Thân bài: tả âm thanh đặc trưng của phố phường về đêm",
        "Kết bài: cảm nghĩ của em về nơi mình sinh sống",
      ],
      openingStyles: [
        "Giới thiệu thời điểm buổi tối và vị trí con đường",
        "Bắt đầu từ ánh đèn đường bật sáng",
        "Dẫn vào từ âm thanh náo nhiệt của phố phường",
        "Bắt đầu bằng cảm xúc quen thuộc khi đi dạo buổi tối",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát khung cảnh rõ ràng", points: 2 },
        { criterion: "Tả chi tiết hoạt động, âm thanh sinh động", points: 3 },
        { criterion: "Có cảm xúc, liên tưởng", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Mỗi buổi tối, con phố nơi em ở lại khoác lên mình một vẻ đẹp khác hẳn ban ngày. Khi trời vừa sập tối, những cột đèn đường lần lượt bật sáng, hắt xuống mặt đường một thứ ánh sáng vàng ấm áp. Hai bên đường, các cửa hàng cũng bật đèn rực rỡ, đặc biệt là quán ăn nhỏ đầu ngõ luôn tấp nập khách ra vào, mùi thức ăn thơm phức lan toả khắp không gian. Dòng người và xe cộ vẫn qua lại nhộn nhịp, tiếng còi xe xen lẫn tiếng trò chuyện, cười nói của mọi người tạo nên một bầu không khí sôi động. Ở góc công viên nhỏ gần nhà, vài cụ già đang ngồi hóng mát, trò chuyện rôm rả, trong khi đám trẻ con nô đùa, chạy nhảy quanh những chiếc ghế đá. Thỉnh thoảng, tiếng nhạc phát ra từ một quán cà phê nhỏ vọng lại, hoà cùng tiếng lá cây xào xạc trong gió đêm. Em rất yêu thích khung cảnh nhộn nhịp mà ấm áp này, vì nó khiến em cảm thấy nơi mình sống thật gần gũi và đáng yêu.",
    },
  },
];
