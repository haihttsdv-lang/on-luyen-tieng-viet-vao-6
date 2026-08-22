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
  {
    id: "dh-passage-02",
    title: "Chiếc diều đứt dây",
    text: "Chủ nhật nào Nam cũng ra bãi cỏ đầu làng thả diều cùng đám bạn. Chiếc diều hình con bướm của Nam là món quà bố tặng trước khi đi làm xa, vì vậy cậu quý nó hơn bất cứ thứ gì. Hôm ấy, gió thổi mạnh bất thường, chiếc diều bay cao vút lên bầu trời, sợi dây trong tay Nam căng hết cỡ.\n\nBỗng \"phựt\" một tiếng, sợi dây đứt phăng. Chiếc diều con bướm chao đảo rồi bay mất hút về phía cánh rừng xa, bỏ lại Nam đứng chết lặng giữa bãi cỏ. Nam oà khóc, chạy theo một đoạn nhưng chiếc diều đã biến mất trong tầm mắt. Thấy vậy, các bạn xúm lại an ủi, còn bé Hoa nhường ngay chiếc diều hình con cá của mình cho Nam chơi chung.\n\nTối hôm đó, khi kể chuyện cho mẹ nghe, Nam vẫn còn buồn. Mẹ nhẹ nhàng nói: \"Con ạ, có những thứ dù quý đến đâu cũng có lúc phải rời xa ta, quan trọng là những kỷ niệm về nó vẫn còn mãi trong lòng con.\" Nghe mẹ nói, Nam thấy lòng nhẹ nhõm hơn hẳn. Cậu mỉm cười nhớ lại những buổi chiều được bố dạy cách thả diều, và tự nhủ mình sẽ luôn giữ gìn kỷ niệm ấy.",
  },
  {
    id: "dh-passage-03",
    title: "Chú chim sẻ non",
    text: "Sáng thứ Bảy, khi đang quét sân, Lan phát hiện một chú chim sẻ non nằm run rẩy dưới gốc cây bàng, có lẽ đã rơi khỏi tổ trong trận gió đêm qua. Đôi cánh chú còn chưa đủ lông để bay, đôi mắt nhỏ nhắm nghiền vì sợ hãi.\n\nLan vội gọi em trai là Tuấn ra xem. Hai chị em bàn nhau tìm cách giúp chú chim. Tuấn đề nghị mang chim vào nhà nuôi, nhưng Lan lắc đầu: \"Nếu để lâu xa mẹ, chim non có thể sẽ không sống được. Mình nên tìm cách đưa chim trở lại gần tổ thôi.\" Nói rồi, Lan nhẹ nhàng bắc chiếc thang nhỏ, đặt chú chim vào một chiếc hộp có lót lá khô rồi treo lên cành cây gần tổ cũ, hy vọng chim mẹ sẽ tìm thấy con.\n\nCả buổi sáng, hai chị em cứ thấp thỏm ngóng ra gốc bàng. Đến trưa, một chú chim sẻ trưởng thành bay tới, đậu cạnh chiếc hộp rồi tha mồi cho chim non ăn. Lan và Tuấn vui mừng ôm nhau nhảy cẫng lên. Nhìn cảnh chim mẹ chăm sóc con, Lan thấy lòng ấm áp vì đã giúp được một sinh linh bé nhỏ đoàn tụ với gia đình của nó.",
  },
  {
    id: "dh-passage-04",
    title: "Vì sao lá cây có màu xanh",
    text: "Nếu để ý, em sẽ thấy hầu hết lá cây xung quanh chúng ta đều có màu xanh lục. Đó là vì trong lá cây có chứa một chất đặc biệt gọi là diệp lục (hay còn gọi là chất diệp lục tố). Chất này có khả năng hấp thụ ánh sáng mặt trời để giúp cây thực hiện quá trình quang hợp — quá trình cây tự tạo ra chất dinh dưỡng nuôi sống bản thân.\n\nÁnh sáng mặt trời vốn gồm nhiều màu sắc khác nhau. Diệp lục hấp thụ hầu hết các màu như đỏ, cam, tím để phục vụ quang hợp, nhưng lại phản chiếu lại màu xanh lục. Chính vì vậy, khi mắt chúng ta nhìn vào lá cây, ta chỉ thấy được màu xanh lục phản chiếu ra, khiến ta cảm nhận lá có màu xanh.\n\nĐiều thú vị là đến mùa thu, khi trời trở lạnh, cây giảm dần việc tạo ra diệp lục mới. Lượng diệp lục trong lá giảm đi, các sắc tố khác vốn luôn có trong lá nhưng bị diệp lục che lấp (như sắc tố vàng, cam) mới có cơ hội lộ ra, khiến ta thấy lá chuyển sang màu vàng, cam rực rỡ trước khi rụng xuống.",
  },
  {
    id: "dh-passage-05",
    title: "Món quà đặc biệt",
    text: "Còn hai ngày nữa là đến sinh nhật mẹ, nhưng Hà chỉ có vỏn vẹn năm nghìn đồng tiền tiết kiệm, không đủ để mua món quà nào ở cửa hàng. Cô bé buồn bã ngồi trong phòng, nghĩ mãi mà không ra cách nào.\n\nChợt Hà nhớ đến những bông hoa giấy mà cô được bà ngoại dạy gấp hồi hè trước. Cô liền lục tìm những tờ giấy màu còn sót lại trong ngăn bàn học, cặm cụi gấp từng cánh hoa suốt hai buổi tối liền. Ngón tay cô vài lần bị giấy cứa nhẹ, nhưng Hà vẫn kiên nhẫn gấp cho đến khi hoàn thành một bó hoa giấy đủ màu sắc, xen giữa là một tấm thiệp nhỏ tự tay viết lời chúc.\n\nSáng sinh nhật, khi Hà rụt rè đưa bó hoa giấy cho mẹ, mẹ sững người rồi ôm chầm lấy cô, mắt rưng rưng xúc động. Mẹ nói đây là món quà đẹp nhất mẹ từng nhận được, quý hơn bất cứ món quà đắt tiền nào, vì nó chứa đựng cả tấm lòng và công sức của con gái. Hà cười thật tươi, cảm thấy hạnh phúc hơn cả khi tưởng tượng ra cảnh mẹ vui mừng lúc trước.",
  },
];
