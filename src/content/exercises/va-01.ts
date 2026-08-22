import type { Exercise } from "@/data-access/types";

// VA-01 — Văn tả người. Dàn ý phỏng theo cấu trúc chung Mục 4.4. Bài văn
// mẫu tự biên soạn (Mục 10.1 hướng B).
export const VA01_EXERCISES: Exercise[] = [
  {
    id: "va-01-essay-1",
    topicIds: ["VA-01"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một người thân trong gia đình mà em yêu quý nhất.",
    explanation:
      "Bài văn tả người cần tả ngoại hình bao quát rồi chi tiết, sau đó tả tính cách qua hành động, lời nói cụ thể, không liệt kê tính từ suông.",
    essay: {
      outline: [
        "Mở bài: giới thiệu người định tả (là ai, quan hệ với em)",
        "Thân bài: tả bao quát (tuổi, dáng người, ấn tượng chung)",
        "Thân bài: tả chi tiết ngoại hình (khuôn mặt, mắt, tóc, trang phục...)",
        "Thân bài: tả tính cách qua hành động, lời nói cụ thể",
        "Kết bài: tình cảm của em với người đó",
      ],
      openingStyles: [
        "Giới thiệu vị trí hoặc lý do nhắc đến người đó, gắn với một kỷ niệm",
        "Bắt đầu từ một thời điểm đặc biệt (một buổi tối, một lần ốm...)",
        "Dẫn vào từ một âm thanh, hình ảnh gắn với người đó (VD tiếng ho quen thuộc của bà)",
        "Bắt đầu bằng một câu ca dao, tục ngữ về tình cảm gia đình rồi dẫn tới người đó",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng, có chi tiết cụ thể", points: 2 },
        { criterion: "Tả tính cách qua hành động, lời nói cụ thể (không chỉ tính từ suông)", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong gia đình, người em yêu quý nhất là bà nội. Bà năm nay đã ngoài 60 tuổi, dáng người nhỏ nhắn nhưng đi lại vẫn nhanh nhẹn. Khuôn mặt bà có nhiều nếp nhăn theo năm tháng, nhưng đôi mắt vẫn sáng và ánh lên vẻ hiền từ mỗi khi nhìn em. Mái tóc bà đã bạc gần hết, thường được búi gọn gàng sau gáy. Bà hay mặc những bộ quần áo giản dị, màu nâu hoặc xám, phù hợp với dáng vẻ chân chất của người phụ nữ nông thôn. Điều em nhớ nhất ở bà không phải là vẻ ngoài mà là sự ân cần, chu đáo trong từng việc nhỏ. Mỗi khi em đi học về muộn, bà luôn đứng ở cổng ngóng ra, dù trời nắng hay mưa. Có lần em bị điểm kém, sợ bị mắng, nhưng bà chỉ nhẹ nhàng xoa đầu em và nói: 'Lần sau cháu cố gắng hơn là được.' Chính sự bao dung ấy khiến em càng thêm yêu quý và kính trọng bà. Em mong bà luôn khoẻ mạnh để mãi ở bên cạnh gia đình em.",
    },
  },
  {
    id: "va-01-essay-2",
    topicIds: ["VA-01"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả cô giáo (hoặc thầy giáo) mà em yêu quý nhất.",
    explanation:
      "Bài văn tả thầy/cô cần tập trung vào cách giảng dạy, cử chỉ, lời nói trong lớp học để làm nổi bật sự tận tâm, gần gũi.",
    essay: {
      outline: [
        "Mở bài: giới thiệu thầy/cô định tả (dạy môn gì, ấn tượng ban đầu)",
        "Thân bài: tả bao quát ngoại hình",
        "Thân bài: tả chi tiết (giọng nói, ánh mắt, nụ cười, cách ăn mặc)",
        "Thân bài: tả cách giảng dạy, cử chỉ quan tâm học sinh qua tình huống cụ thể",
        "Kết bài: tình cảm, lòng biết ơn của em",
      ],
      openingStyles: [
        "Giới thiệu môn học và lý do em ấn tượng với thầy/cô",
        "Bắt đầu từ một tiết học đáng nhớ",
        "Dẫn vào từ giọng nói hoặc nụ cười quen thuộc của thầy/cô",
        "Bắt đầu bằng suy nghĩ về nghề giáo rồi dẫn tới thầy/cô định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng, có chi tiết cụ thể", points: 2 },
        { criterion: "Tả cách giảng dạy, cử chỉ qua tình huống cụ thể", points: 3 },
        { criterion: "Có cảm xúc, kỷ niệm chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong suốt những năm học tiểu học, cô giáo mà em yêu quý nhất là cô Lan, người dạy em môn Tiếng Việt năm lớp 5. Cô có dáng người thanh mảnh, mái tóc đen dài thường được buộc gọn gàng. Điều em ấn tượng nhất ở cô là đôi mắt luôn ánh lên sự dịu dàng và nụ cười hiền hậu mỗi khi bước vào lớp. Giọng nói của cô nhẹ nhàng nhưng rất truyền cảm, khiến những bài văn khô khan cũng trở nên sinh động, dễ hiểu. Cô luôn kiên nhẫn giảng lại bài nhiều lần cho những bạn chưa hiểu, không bao giờ tỏ ra khó chịu. Em còn nhớ có lần em viết văn sai đề, cô không hề trách mắng mà nhẹ nhàng chỉ ra chỗ sai và động viên em làm lại. Nhờ sự tận tâm của cô mà em ngày càng yêu thích môn Văn hơn. Em thầm biết ơn cô rất nhiều và sẽ luôn nhớ những bài học quý giá cô đã dạy.",
    },
  },
  {
    id: "va-01-essay-3",
    topicIds: ["VA-01"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả một người bạn thân của em.",
    explanation:
      "Bài văn tả bạn cần làm nổi bật cả ngoại hình lẫn tính cách qua những kỷ niệm gắn bó cùng nhau.",
    essay: {
      outline: [
        "Mở bài: giới thiệu người bạn định tả (tên, quen biết từ khi nào)",
        "Thân bài: tả bao quát ngoại hình",
        "Thân bài: tả chi tiết (khuôn mặt, nụ cười, dáng đi...)",
        "Thân bài: tả tính cách qua một kỷ niệm cụ thể giữa hai người",
        "Kết bài: tình cảm bạn bè của em",
      ],
      openingStyles: [
        "Giới thiệu hoàn cảnh quen biết người bạn đó",
        "Bắt đầu từ một kỷ niệm đáng nhớ giữa hai người",
        "Dẫn vào từ tiếng cười hoặc câu nói quen thuộc của bạn",
        "Bắt đầu bằng suy nghĩ về tình bạn rồi dẫn tới người bạn định tả",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng, có chi tiết cụ thể", points: 2 },
        { criterion: "Tả tính cách qua kỷ niệm cụ thể, sinh động", points: 3 },
        { criterion: "Có cảm xúc chân thực về tình bạn", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Trong lớp, người bạn thân nhất của em là Hùng, cậu bạn ngồi cùng bàn từ năm lớp 3 đến nay. Hùng có dáng người cao, gầy, làn da rám nắng vì thường xuyên chơi thể thao ngoài trời. Khuôn mặt Hùng luôn nở nụ cười tươi, để lộ hai chiếc răng khểnh trông rất đáng yêu. Hùng có tính cách vui vẻ, hoà đồng và đặc biệt rất tốt bụng. Em còn nhớ có lần em bị ốm phải nghỉ học cả tuần, Hùng đã chép bài đầy đủ và mang đến tận nhà giảng lại cho em từng phần một cách kiên nhẫn. Nhờ có Hùng giúp đỡ mà em không bị tụt lại so với các bạn trong lớp. Mỗi khi có chuyện buồn, em đều tìm đến Hùng để tâm sự vì cậu ấy luôn biết cách lắng nghe và an ủi. Em cảm thấy rất may mắn khi có một người bạn tốt như Hùng và mong tình bạn của chúng em sẽ mãi bền chặt.",
    },
  },
  {
    id: "va-01-essay-4",
    topicIds: ["VA-01"],
    level: "M4",
    questionType: "essay-long",
    prompt: "Tả bố (hoặc mẹ) của em.",
    explanation:
      "Bài văn tả bố/mẹ cần làm nổi bật cả ngoại hình lẫn sự vất vả, tình yêu thương qua công việc hằng ngày dành cho gia đình.",
    essay: {
      outline: [
        "Mở bài: giới thiệu người định tả (bố/mẹ, công việc)",
        "Thân bài: tả bao quát ngoại hình",
        "Thân bài: tả chi tiết (khuôn mặt, đôi tay, dáng đi...)",
        "Thân bài: tả tính cách, sự quan tâm qua công việc/hành động cụ thể hằng ngày",
        "Kết bài: tình cảm, lòng biết ơn của em",
      ],
      openingStyles: [
        "Giới thiệu công việc hằng ngày của bố/mẹ",
        "Bắt đầu từ một kỷ niệm đáng nhớ với bố/mẹ",
        "Dẫn vào từ giọng nói hoặc bàn tay quen thuộc của bố/mẹ",
        "Bắt đầu bằng suy nghĩ về tình cảm gia đình rồi dẫn tới bố/mẹ",
      ],
      rubric: [
        { criterion: "Mở bài đúng kiểu, hấp dẫn", points: 1 },
        { criterion: "Tả ngoại hình rõ ràng, có chi tiết cụ thể", points: 2 },
        { criterion: "Tả tính cách, sự quan tâm qua hành động cụ thể", points: 3 },
        { criterion: "Có cảm xúc chân thực", points: 2 },
        { criterion: "Kết bài có cảm xúc, diễn đạt trôi chảy", points: 2 },
      ],
      sampleAnswer:
        "Người mà em kính yêu nhất trong gia đình là mẹ. Mẹ em năm nay ngoài 35 tuổi, dáng người mảnh mai nhưng làm việc rất nhanh nhẹn, tháo vát. Khuôn mặt mẹ tuy đã có vài nếp nhăn nhỏ nơi khoé mắt nhưng vẫn toát lên vẻ dịu dàng, ấm áp. Đôi bàn tay mẹ không còn mềm mại như trước vì phải làm việc nhà và chăm sóc cả gia đình mỗi ngày. Mỗi buổi sáng, mẹ đều dậy thật sớm để chuẩn bị bữa sáng cho cả nhà trước khi đi làm. Dù công việc ở cơ quan bận rộn, tối về mẹ vẫn dành thời gian kèm em học bài, kiên nhẫn giảng lại từng phần em chưa hiểu. Có lần em ốm sốt cao giữa đêm, mẹ đã thức trắng để chăm sóc, chườm khăn mát và theo dõi em từng chút một. Sự vất vả và tình yêu thương thầm lặng ấy của mẹ khiến em vô cùng cảm động. Em tự hứa sẽ cố gắng học tập thật tốt để không phụ lòng mẹ.",
    },
  },
];
