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
];
