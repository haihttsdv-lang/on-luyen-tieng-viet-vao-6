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
  {
    id: "dh-passage-06",
    title: "Người bạn mới",
    text: "Đầu năm học, lớp 5A đón một bạn mới tên là Khôi, chuyển đến từ một tỉnh miền núi xa xôi. Khôi có nước da ngăm đen, nói giọng hơi khác so với các bạn trong lớp nên ngày đầu tiên cậu cứ ngồi im lặng một góc, không dám bắt chuyện với ai.\n\nGiờ ra chơi, trong khi các bạn khác túa ra sân nô đùa, Khôi vẫn lặng lẽ ngồi lại trong lớp. Thấy vậy, Bình — lớp trưởng — tiến đến gần, mỉm cười hỏi: \"Cậu có muốn ra sân chơi đá cầu cùng bọn tớ không?\" Khôi ngập ngừng một lúc rồi khẽ gật đầu. Cả nhóm bạn vui vẻ kéo Khôi ra sân, chỉ cho cậu cách chơi, không ai chê cười khi Khôi đá trượt cầu liên tục những lần đầu.\n\nDần dần, Khôi trở nên cởi mở hơn, thường kể cho các bạn nghe về những ngọn núi, con suối ở quê mình khiến ai cũng thích thú lắng nghe. Cuối năm học đó, Khôi trở thành một trong những thành viên hoạt bát nhất của lớp 5A. Cậu thường nói với Bình rằng chính sự thân thiện của các bạn ngày đầu đã giúp cậu vượt qua nỗi nhớ nhà và tự tin hoà nhập với môi trường mới.",
  },
  {
    id: "dh-passage-07",
    title: "Cuộc thi vẽ tranh",
    text: "Trường tổ chức cuộc thi vẽ tranh với chủ đề \"Ngôi nhà mơ ước\", giải thưởng là một hộp màu vẽ cao cấp mà Tâm ao ước từ lâu. Suốt một tuần, Tâm miệt mài phác thảo, tô màu cho bức tranh ngôi nhà nhỏ bên sườn đồi, xung quanh là vườn hoa rực rỡ.\n\nTrước ngày nộp bài một hôm, khi đang mang tranh đến lớp, Tâm vô tình va phải bạn Đức khiến ly nước của Đức đổ ngay lên bức tranh, làm nhoè mất một góc quan trọng. Đức cuống quýt xin lỗi, còn Tâm chỉ biết đứng lặng người nhìn công sức cả tuần bị hỏng. Dù rất tiếc nhưng Tâm không trách móc bạn, chỉ nói: \"Không sao đâu, để tớ sửa lại.\"\n\nTối hôm đó, thay vì buồn bã, Tâm quyết định biến vết nhoè thành một đám mây trên bầu trời bức tranh, khiến tổng thể bức tranh trông còn sinh động hơn trước. Kết quả, bức tranh của Tâm không những không bị loại mà còn giành giải Nhất nhờ sự sáng tạo bất ngờ đó. Tâm nhận ra rằng đôi khi, một sự cố tưởng chừng tồi tệ lại có thể trở thành cơ hội để mình sáng tạo hơn nếu biết bình tĩnh đối mặt.",
  },
  {
    id: "dh-passage-08",
    title: "Loài voi và trí nhớ đáng kinh ngạc",
    text: "Voi là một trong những loài động vật thông minh nhất trên Trái Đất, đặc biệt nổi tiếng với trí nhớ đáng kinh ngạc. Bộ não của voi có kích thước lớn nhất trong các loài động vật sống trên cạn, nặng trung bình khoảng 5 ki-lô-gam, chứa hàng tỷ tế bào thần kinh giúp chúng ghi nhớ thông tin trong thời gian rất dài.\n\nCác nhà khoa học đã quan sát thấy voi có thể nhớ được đường di chuyển đến các nguồn nước hoặc bãi cỏ tốt mà chúng từng đi qua nhiều năm trước, thậm chí sau hàng chục năm. Đặc biệt, voi đầu đàn (thường là voi cái lớn tuổi nhất) đóng vai trò như một \"bản đồ sống\" của cả đàn, dẫn dắt những con voi khác đến nơi có thức ăn, nước uống an toàn, nhất là vào mùa khô hạn khi nguồn nước khan hiếm.\n\nKhông chỉ ghi nhớ địa điểm, voi còn có khả năng nhận ra và ghi nhớ hình dáng, mùi hương của những cá thể voi hay con người mà chúng từng gặp, dù đã cách xa nhiều năm. Nhờ trí nhớ tuyệt vời này, đàn voi có thể truyền lại kinh nghiệm sinh tồn quý báu từ thế hệ này sang thế hệ khác, giúp cả đàn thích nghi tốt hơn với môi trường sống luôn thay đổi.",
  },
  {
    id: "dh-passage-09",
    title: "Chiếc thuyền giấy",
    text: "Mỗi khi trời mưa to, Bống lại cùng anh trai là Tùng ngồi bên hiên nhà gấp những chiếc thuyền giấy nhỏ. Đó là trò chơi hai anh em yêu thích nhất từ khi còn bé, do ông nội dạy trước khi ông mất vì bệnh nặng hai năm trước.\n\nBống nhớ như in dáng ông ngồi tỉ mỉ gấp từng nếp giấy, giọng ông trầm ấm kể chuyện ngày xưa ông cũng hay thả thuyền giấy trên dòng kênh trước nhà. Giờ đây, mỗi lần gấp thuyền, Tùng luôn nhường em gái được thả thuyền xuống rãnh nước trước sân, còn mình thì đứng cạnh reo hò cổ vũ mỗi khi thuyền của Bống trôi xa mà không bị lật.\n\nCó lần, chiếc thuyền của Bống bị mắc vào một cành cây nhỏ giữa dòng nước, cô bé buồn thiu vì tưởng thuyền sẽ hỏng mất. Tùng liền xắn quần lội xuống, khéo léo gỡ chiếc thuyền ra mà không làm rách giấy. Nhìn chiếc thuyền tiếp tục trôi, Bống cười tươi rói, thầm cảm ơn anh trai đã luôn ở bên cạnh gìn giữ trò chơi kỷ niệm mà ông để lại. Với hai anh em, mỗi chiếc thuyền giấy trôi đi không chỉ là một trò chơi, mà còn mang theo cả tình yêu thương của ông nội.",
  },
  {
    id: "dh-passage-10",
    title: "Bài học từ chú kiến nhỏ",
    text: "Một buổi chiều, khi đang ngồi nghỉ dưới gốc cây trong vườn, Bảo tình cờ nhìn thấy một chú kiến đang cố gắng tha một hạt đậu to gấp nhiều lần cơ thể mình. Chú kiến ì ạch kéo hạt đậu qua từng viên sỏi nhỏ, có lúc bị hạt đậu đè lật ngửa nhưng vẫn lồm cồm bò dậy, tiếp tục công việc.\n\nBảo tò mò quan sát, thấy chú kiến thử đến ba, bốn lần đều thất bại khi gặp phải một rãnh nứt trên nền đất. Cậu định nhặt lấy hạt đậu đặt sang bên kia rãnh giúp kiến, nhưng rồi lại tò mò muốn xem chú kiến sẽ xoay xở ra sao. Không lâu sau, chú kiến tìm được một chiếc lá khô nhỏ gần đó, cố gắng đẩy hạt đậu lên trên chiếc lá rồi dùng nó như một chiếc cầu để vượt qua rãnh nứt.\n\nChứng kiến cảnh tượng ấy, Bảo vô cùng thán phục. Cậu nhớ lại bài toán khó mà mình đã bỏ dở từ tối qua chỉ vì thử một cách mà chưa ra kết quả. So với chú kiến nhỏ bé kiên trì tìm đủ mọi cách để vượt khó khăn, cậu cảm thấy hơi xấu hổ vì sự bỏ cuộc quá sớm của mình. Tối đó, Bảo quyết tâm ngồi vào bàn học, thử lại bài toán bằng một cách giải khác, và cuối cùng cậu đã tìm ra đáp án đúng.",
  },
];
