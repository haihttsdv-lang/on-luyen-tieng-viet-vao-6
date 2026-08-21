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
];
