import type { Passage } from "@/data-access/types";

// Mục 5.11: ≥25 văn bản đọc hiểu, mỗi văn bản dùng chung cho 5–7 câu hỏi
// (xem exercises/dh-passage-*.ts, mỗi câu hỏi gắn passageId về đây). Tất cả
// văn bản tự biên soạn (Mục 10.1 hướng B) — tránh mọi rủi ro bản quyền,
// không trích nguyên văn tác phẩm nào.
export const ALL_PASSAGES: Passage[] = [
  {
    id: "dh-passage-01",
    title: "Chiếc ô của bà Tư",
    text: 'Buổi chiều mùa hạ, trời bỗng đổ mưa tầm tã. Minh đang trên đường đi học về thì nhìn thấy bà Tư, người hàng xóm già yếu, đứng nép dưới mái hiên một cửa hàng, tay run run vì lạnh. Bà không mang theo ô, còn quãng đường về nhà bà lại khá xa.\n\nKhông chút do dự, Minh chạy đến bên bà, xoè chiếc ô nhỏ của mình ra và nói: "Bà ơi, cháu đưa bà về nhà nhé!" Bà Tư mỉm cười cảm động, nắm lấy tay Minh. Trên đường đi, tuy chiếc ô chỉ đủ che cho một người, Minh vẫn cố gắng nghiêng về phía bà để bà không bị ướt, còn một bên vai áo của cậu thì ướt sũng.\n\nVề đến nhà, bà Tư xoa đầu Minh, rối rít cảm ơn. Bà còn lấy trong túi ra một gói kẹo lạc thơm phức tặng cậu. Minh cười tươi, tuy người ướt nhưng trong lòng cảm thấy ấm áp lạ thường. Trên đường trở về nhà mình, cậu thầm nghĩ: giúp đỡ người khác dù chỉ là một việc nhỏ cũng khiến bản thân cảm thấy hạnh phúc hơn rất nhiều.',
  },
];
