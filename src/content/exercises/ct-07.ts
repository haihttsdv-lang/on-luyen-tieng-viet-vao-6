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
  {
    id: "ct-07-essay-2",
    topicIds: ["CT-07"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Ông mặt trời từ từ nhô lên sau rặng núi, ban phát những tia nắng ấm áp đầu tiên cho vạn vật." Hãy viết một đoạn văn cảm thụ ngắn (5–7 câu) theo đúng cấu trúc mở – thân – kết.',
    explanation:
      "Câu văn nhân hoá mặt trời (\"ông mặt trời\", \"ban phát\") khiến hình ảnh bình minh trở nên gần gũi, ấm áp như một người đang trao tặng món quà cho vạn vật.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp nhân hoá được sử dụng trong câu",
        "Nêu tác dụng của biện pháp nhân hoá đó",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp nhân hoá", points: 2 },
        { criterion: "Nêu đúng tác dụng gợi hình, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả, đúng cấu trúc 3 phần", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Ông mặt trời từ từ nhô lên sau rặng núi, ban phát những tia nắng ấm áp đầu tiên cho vạn vật" đã gợi cho em một buổi bình minh thật đẹp. Tác giả nhân hoá mặt trời bằng cách gọi là "ông" và dùng động từ "ban phát" — hành động vốn chỉ có ở con người. Nhờ biện pháp nhân hoá này, mặt trời không còn là một hiện tượng tự nhiên vô tri mà trở nên gần gũi, giống như một người ông hiền từ đang trao tặng món quà ấm áp cho vạn vật. Hình ảnh này khiến buổi bình minh trở nên sinh động và ấm áp hơn rất nhiều. Em cảm thấy rất yêu thích khoảnh khắc mặt trời mọc mỗi sáng. Câu văn khiến em nhớ đến những lần dậy sớm cùng bố ra đồng ngắm bình minh.',
    },
  },
  {
    id: "ct-07-essay-3",
    topicIds: ["CT-07"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Từng đàn, từng đàn chim én chao liệng trên bầu trời, báo hiệu mùa xuân đã về." Hãy viết một đoạn văn cảm thụ ngắn (5–7 câu) theo đúng cấu trúc mở – thân – kết.',
    explanation:
      "Điệp từ \"từng đàn\" nhấn mạnh số lượng đông đảo của những cánh chim én, gợi không khí rộn ràng, tươi vui khi mùa xuân đến.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp điệp từ được sử dụng trong câu",
        "Nêu tác dụng của biện pháp điệp từ đó",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp điệp từ", points: 2 },
        { criterion: "Nêu đúng tác dụng nhấn mạnh, gợi cảm", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả, đúng cấu trúc 3 phần", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Từng đàn, từng đàn chim én chao liệng trên bầu trời, báo hiệu mùa xuân đã về" đã gợi cho em không khí rộn ràng của mùa xuân. Tác giả sử dụng biện pháp điệp từ "từng đàn", lặp lại 2 lần liên tiếp ngay đầu câu. Nhờ đó, số lượng đông đảo của những cánh chim én được nhấn mạnh rõ nét, khiến bầu trời mùa xuân trở nên sống động, rộn ràng hơn hẳn. Nếu chỉ viết "đàn chim én chao liệng" thông thường, câu văn sẽ không còn giữ được cảm giác nhộn nhịp ấy. Em cảm thấy rất háo hức mỗi khi nhìn thấy những cánh chim én đầu tiên báo hiệu xuân về. Câu văn khiến em nhớ đến không khí Tết ấm áp bên gia đình.',
    },
  },
  {
    id: "ct-07-essay-4",
    topicIds: ["CT-07"],
    level: "M4",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Lấp ló sau vòm lá xanh, những chùm quả chín đỏ như những chiếc đèn lồng nhỏ xinh." Hãy viết một đoạn văn cảm thụ ngắn (5–7 câu) theo đúng cấu trúc mở – thân – kết, chỉ ra đầy đủ các biện pháp nghệ thuật được sử dụng.',
    explanation:
      "Câu văn kết hợp cả đảo ngữ (\"lấp ló\" đưa lên đầu câu) và so sánh (\"chùm quả chín như đèn lồng\"), khiến hình ảnh vừa gợi cảm giác ẩn hiện, vừa rực rỡ, sinh động.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra biện pháp đảo ngữ (đưa \"lấp ló\" lên đầu câu)",
        "Chỉ ra biện pháp so sánh (\"chùm quả chín như đèn lồng\") và nêu tác dụng",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng biện pháp đảo ngữ", points: 2 },
        { criterion: "Chỉ ra đúng biện pháp so sánh và nêu tác dụng", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả, đúng cấu trúc 3 phần", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Lấp ló sau vòm lá xanh, những chùm quả chín đỏ như những chiếc đèn lồng nhỏ xinh" đã vẽ nên một hình ảnh vườn cây thật rực rỡ. Trước hết, tác giả sử dụng biện pháp đảo ngữ, đưa từ láy "lấp ló" lên đầu câu thay vì để ở vị trí thông thường, giúp nhấn mạnh cảm giác ẩn hiện, thấp thoáng của những chùm quả sau tán lá. Bên cạnh đó, tác giả còn so sánh những chùm quả chín đỏ với "những chiếc đèn lồng nhỏ xinh", khiến hình ảnh trở nên rực rỡ, vui tươi như đang treo đầy trang trí. Sự kết hợp của hai biện pháp nghệ thuật này làm cho câu văn vừa gợi hình, vừa gợi cảm xúc thích thú. Em cảm thấy rất muốn được đến tận nơi để ngắm nhìn khu vườn ấy. Câu văn khiến em nhớ đến khu vườn của bà ngoại vào mùa quả chín.',
    },
  },
  {
    id: "ct-07-essay-5",
    topicIds: ["CT-07"],
    level: "M3",
    questionType: "essay-short",
    prompt:
      'Cho câu văn: "Bà ngồi lặng lẽ bên khung cửi, đôi tay gầy guộc vẫn thoăn thoắt đưa từng đường kim mũi chỉ." Hãy viết một đoạn văn cảm thụ ngắn (5–7 câu) theo đúng cấu trúc mở – thân – kết.',
    explanation:
      "Chi tiết \"đôi tay gầy guộc vẫn thoăn thoắt\" gợi hình ảnh người bà tần tảo, chăm chỉ dù tuổi đã cao, thể hiện đức tính cần cù, chịu khó.",
    essay: {
      outline: [
        "Mở đoạn: giới thiệu câu văn/hình ảnh em ấn tượng",
        "Chỉ ra chi tiết miêu tả đặc sắc về người bà (đôi tay gầy guộc, thoăn thoắt)",
        "Nêu cảm nhận về phẩm chất của người bà qua chi tiết đó",
        "Nêu cảm xúc hoặc liên hệ của em",
      ],
      rubric: [
        { criterion: "Chỉ ra đúng chi tiết miêu tả đặc sắc", points: 2 },
        { criterion: "Nêu đúng cảm nhận về phẩm chất nhân vật", points: 3 },
        { criterion: "Có cảm xúc/liên hệ cá nhân", points: 2 },
        { criterion: "Diễn đạt trôi chảy, không sai chính tả, đúng cấu trúc 3 phần", points: 3 },
      ],
      sampleAnswer:
        'Câu văn "Bà ngồi lặng lẽ bên khung cửi, đôi tay gầy guộc vẫn thoăn thoắt đưa từng đường kim mũi chỉ" đã khiến em vô cùng xúc động. Hình ảnh "đôi tay gầy guộc" cho thấy tuổi tác và sự vất vả của bà, nhưng từ láy "thoăn thoắt" lại cho thấy đôi tay ấy vẫn nhanh nhẹn, khéo léo lạ thường. Sự đối lập giữa "gầy guộc" và "thoăn thoắt" càng làm nổi bật đức tính cần cù, chịu thương chịu khó của người bà, dù tuổi cao nhưng vẫn miệt mài với công việc. Em cảm thấy rất thương và khâm phục người bà trong câu văn. Hình ảnh này khiến em nhớ đến bà ngoại của mình, người cũng luôn tần tảo sớm hôm vì con cháu. Câu văn thật giản dị nhưng chứa đựng nhiều tình cảm sâu sắc.',
    },
  },
];
