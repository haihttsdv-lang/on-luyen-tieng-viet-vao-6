import type { Exercise } from "@/data-access/types";

// VA-03 — Văn tả cây cối. Dàn ý và các cách mở bài phỏng theo Mục 4.4 (Next
// Nobels). Bài văn mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA03_EXERCISES: Exercise[] = [
  {
    id: "va-03-essay-1",
    topicIds: ["VA-03"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một cây bóng mát mà em yêu thích ở sân trường hoặc gần nhà em.",
    explanation:
      "Bài văn tả cây cối cần có mở bài hấp dẫn, tả bao quát rồi tả chi tiết từng bộ phận, và kết bài nêu tình cảm với cây.",
    essay: {
      outline: [
        "Mở bài: giới thiệu cây định tả (tên cây, ở đâu, vì sao em chọn tả cây này)",
        "Thân bài: tả bao quát (hình dáng, chiều cao, tán cây)",
        "Thân bài: tả chi tiết từng bộ phận (gốc, thân, cành, lá, hoa/quả)",
        "Thân bài: cây gắn với kỷ niệm hoặc lợi ích của cây",
        "Kết bài: tình cảm của em với cây",
      ],
      // KN-03 — 4 cách mở bài gián tiếp cho văn tả cây cối (Mục 4.4).
      openingStyles: [
        "Giới thiệu vị trí hoặc lý do có cây, gắn cây với kỷ niệm",
        "Bắt đầu từ một thời điểm đặc biệt (mùa xuân, sau cơn mưa, buổi sớm)",
        "Dẫn vào từ âm thanh gắn với cây",
        "Bắt đầu bằng một câu thơ, câu hát về cây rồi dẫn tới kỷ niệm",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết các bộ phận sinh động", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm hoặc liên hệ", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Ở góc sân trường em có một cây phượng già, không biết đã đứng đó bao nhiêu năm. Mỗi lần nghe tiếng ve kêu râm ran, em lại biết mùa hè sắp đến và cây phượng sắp trổ hoa. Thân cây to đến mức hai bạn học sinh ôm không xuể, vỏ cây sần sùi, màu nâu xám. Từ thân cây, những cành lớn toả ra bốn phía, đỡ lấy tán lá xanh rợp cả một góc sân. Lá phượng nhỏ li ti, xếp thành từng chùm như lông chim. Đến hè, hoa phượng nở đỏ rực cả cây, cánh hoa mỏng manh mà rực rỡ như những đốm lửa nhỏ. Dưới gốc cây, rễ phượng trồi lên mặt đất, uốn lượn thành những chiếc ghế tự nhiên cho chúng em ngồi chơi giờ ra chơi. Cây phượng đã chứng kiến bao kỷ niệm vui buồn của em cùng bạn bè suốt những năm tiểu học. Em mong cây phượng sẽ luôn xanh tốt để làm bóng mát cho các em học sinh khoá sau.",
    },
  },
  {
    id: "va-03-essay-2",
    topicIds: ["VA-03"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một cây ăn quả mà em yêu thích trong vườn nhà em (hoặc nhà người thân).",
    explanation:
      "Bài văn tả cây ăn quả cần chú trọng miêu tả quá trình ra hoa, kết quả và hương vị đặc trưng của quả để làm nổi bật giá trị của cây.",
    essay: {
      outline: [
        "Mở bài: giới thiệu cây định tả (loại cây, trồng ở đâu, từ khi nào)",
        "Thân bài: tả bao quát hình dáng cây",
        "Thân bài: tả chi tiết từng bộ phận (thân, lá, hoa, quả)",
        "Thân bài: tả quá trình cây ra hoa, kết quả và hương vị của quả",
        "Kết bài: tình cảm của em với cây",
      ],
      openingStyles: [
        "Giới thiệu lý do gia đình trồng cây đó",
        "Bắt đầu từ mùa cây ra quả",
        "Dẫn vào từ hương thơm của hoa hoặc quả",
        "Bắt đầu bằng kỷ niệm hái quả cùng người thân",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết các bộ phận và quá trình ra hoa, kết quả sinh động", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm hoặc liên hệ", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong vườn nhà bà ngoại có một cây ổi mà em rất yêu thích, được bà trồng từ khi em còn nhỏ xíu. Cây ổi không cao lắm, chỉ chừng hai mét, nhưng tán lá xanh um, toả rộng che kín cả một góc vườn. Thân cây nhẵn bóng, có nhiều nhánh nhỏ chia ra từ thân chính, rất thuận tiện để leo trèo hái quả. Lá ổi hình bầu dục, mặt trên xanh đậm, mặt dưới có lớp lông tơ mịn màng. Vào cuối xuân, cây ổi bắt đầu trổ những bông hoa trắng muốt, nhị vàng, toả hương thơm dịu nhẹ thu hút cả những chú ong đến hút mật. Sau đó, hoa dần kết thành những quả ổi nhỏ xíu, rồi lớn dần theo từng ngày. Khi ổi chín, vỏ chuyển sang màu vàng nhạt, cắn một miếng cảm nhận được vị ngọt thanh mát xen lẫn chút chua nhẹ rất đặc trưng. Mỗi lần về quê, em đều cùng bà ra vườn hái những quả ổi chín để thưởng thức. Em rất yêu quý cây ổi này vì nó gắn liền với những kỷ niệm ấm áp bên bà ngoại.",
    },
  },
  {
    id: "va-03-essay-3",
    topicIds: ["VA-03"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một loài hoa mà em yêu thích.",
    explanation:
      "Bài văn tả hoa cần chú trọng miêu tả màu sắc, hương thơm và hình dáng cánh hoa để làm nổi bật vẻ đẹp riêng của loài hoa đó.",
    essay: {
      outline: [
        "Mở bài: giới thiệu loài hoa định tả (tên hoa, trồng ở đâu)",
        "Thân bài: tả bao quát (dáng cây, số lượng hoa)",
        "Thân bài: tả chi tiết bông hoa (cánh hoa, nhuỵ hoa, màu sắc, hương thơm)",
        "Thân bài: nêu ý nghĩa hoặc dịp gắn với loài hoa đó",
        "Kết bài: tình cảm của em với loài hoa",
      ],
      openingStyles: [
        "Giới thiệu dịp em được ngắm loài hoa đó",
        "Bắt đầu từ hương thơm đặc trưng của hoa",
        "Dẫn vào từ màu sắc rực rỡ của hoa",
        "Bắt đầu bằng kỷ niệm gắn với loài hoa đó",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết bông hoa sinh động (màu sắc, hương thơm)", points: 3 },
        { criterion: "Có cảm xúc, liên hệ", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong khu vườn nhỏ trước nhà, em yêu thích nhất là những khóm hoa hồng mà mẹ trồng. Những cây hồng không cao, chỉ ngang tầm ngực em, nhưng luôn nở rộ rất nhiều bông vào mỗi buổi sáng. Mỗi bông hoa hồng có nhiều lớp cánh xếp chồng lên nhau, mềm mại như nhung, khum khum ôm lấy nhuỵ vàng ở giữa. Cánh hoa mang màu đỏ thắm, đôi bông lại phớt hồng dịu dàng, mỗi loại một vẻ đẹp riêng. Mỗi khi có cơn gió nhẹ thổi qua, cả khóm hồng khẽ đung đưa, toả ra hương thơm ngọt ngào, thoang thoảng khắp khu vườn. Mẹ thường hái vài bông hồng đẹp nhất để cắm vào lọ hoa trên bàn, khiến cả ngôi nhà thêm phần tươi tắn. Vào những dịp đặc biệt như ngày của mẹ hay sinh nhật, em thường tự tay hái tặng mẹ một bó hoa hồng nhỏ. Em rất yêu thích những bông hoa hồng ấy vì chúng không chỉ đẹp mà còn gắn liền với tình cảm gia đình ấm áp.",
    },
  },
  {
    id: "va-03-essay-4",
    topicIds: ["VA-03"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả cây tre (hoặc một loại cây gắn liền với làng quê Việt Nam) mà em biết.",
    explanation:
      "Bài văn tả cây tre cần chú trọng đặc điểm sinh trưởng thành bụi, thân đốt và gắn với hình ảnh làng quê, đời sống người Việt.",
    essay: {
      outline: [
        "Mở bài: giới thiệu luỹ tre định tả (ở đâu, ấn tượng chung)",
        "Thân bài: tả bao quát (mọc thành bụi, chiều cao)",
        "Thân bài: tả chi tiết (thân, đốt, lá, măng non)",
        "Thân bài: nêu lợi ích, vai trò của tre trong đời sống làng quê",
        "Kết bài: tình cảm của em với luỹ tre",
      ],
      openingStyles: [
        "Giới thiệu vị trí luỹ tre đầu làng",
        "Bắt đầu từ âm thanh tiếng lá tre xào xạc",
        "Dẫn vào từ hình ảnh luỹ tre quen thuộc mỗi lần về quê",
        "Bắt đầu bằng câu ca dao, tục ngữ về cây tre rồi dẫn tới luỹ tre định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả bao quát rõ ràng", points: 2 },
        { criterion: "Tả chi tiết các bộ phận sinh động", points: 3 },
        { criterion: "Nêu được lợi ích, vai trò của cây gắn với làng quê", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Ở đầu làng quê ngoại em có một luỹ tre xanh đứng sừng sững, gắn bó với bao thế hệ người dân nơi đây. Tre không mọc đơn lẻ mà thường mọc thành từng bụi lớn, cây nọ nương tựa cây kia, vươn cao đến bảy, tám mét. Thân tre thẳng tắp, chia thành nhiều đốt đều nhau, lớp vỏ ngoài xanh bóng khi còn non và chuyển vàng khi về già. Lá tre nhỏ, dài và nhọn, mỗi khi gió thổi qua lại phát ra tiếng xào xạc nghe rất vui tai. Vào mùa xuân, dưới gốc tre nhú lên những mầm măng non nhọn hoắt, được bà con thu hoạch để chế biến thành nhiều món ăn ngon. Từ xưa đến nay, tre luôn gắn bó mật thiết với đời sống người Việt: thân tre dùng làm nhà, làm đồ dùng, cành lá dùng làm chất đốt, còn luỹ tre quanh làng còn có tác dụng chắn gió, chắn bão. Em rất tự hào về hình ảnh cây tre — biểu tượng giản dị mà kiên cường của làng quê Việt Nam.",
    },
  },
];
