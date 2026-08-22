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
];
