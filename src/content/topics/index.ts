import type { Topic } from "@/data-access/types";

// GĐ2 sample content — 3 chuyên đề, chosen to exercise both the ordinary
// comparison path and the FR-M05 strict (chính tả) path.
export const TOPICS: Topic[] = [
  {
    id: "KN-01",
    group: "KN",
    title: "Kỹ năng làm bài trắc nghiệm: phương pháp loại trừ, nhận diện bẫy thường gặp",
    // GĐ4 — nhóm KN ưu tiên xây trước (Mục 5.11): ít tài liệu sẵn có nhất,
    // giá trị cao nhất. FR-L03: trình bày dạng quy trình từng bước.
    lesson: {
      concept:
        "Làm bài trắc nghiệm hiệu quả không chỉ là biết kiến thức, mà còn là kỹ năng đọc đề và loại trừ đáp án sai một cách có hệ thống.",
      steps: [
        "Đọc kỹ toàn bộ câu hỏi trước khi nhìn vào các đáp án — tránh bị đáp án A hoặc B \"quen mắt\" chi phối.",
        "Gạch chân từ khoá quan trọng trong đề bài (đặc biệt các từ phủ định như \"không\", \"KHÔNG đúng\").",
        "Đọc lần lượt cả 4 đáp án, không dừng lại ngay khi thấy một đáp án \"có vẻ đúng\".",
        "Loại trừ đáp án sai rõ ràng trước — đáp án dùng từ tuyệt đối (\"luôn luôn\", \"tất cả\", \"không bao giờ\") thường là bẫy.",
        "Trong các đáp án còn lại, chọn đáp án đúng và đầy đủ nhất — đáp án đúng một phần nhưng thiếu ý vẫn là đáp án sai.",
        "Nếu còn phân vân giữa 2 đáp án, đọc lại câu hỏi một lần nữa để chắc chắn không bỏ sót yêu cầu của đề.",
      ],
      signals: [
        "Đáp án dùng từ tuyệt đối hoá (\"luôn luôn\", \"tất cả\", \"không bao giờ\") — thường là bẫy",
        "Hai đáp án gần giống nhau, chỉ khác một từ — cần đọc kỹ từng chữ",
        "Đề bài có từ phủ định (\"KHÔNG đúng\", \"KHÔNG phải\") dễ bị đọc sót",
      ],
      examples: [
        "Câu hỏi: \"Từ nào KHÔNG đồng nghĩa với 'chăm chỉ'?\" — nếu đọc sót chữ KHÔNG, học sinh sẽ tìm từ đồng nghĩa thay vì từ không đồng nghĩa, chọn sai dù hiểu đúng nghĩa các từ.",
        "Câu hỏi có đáp án \"Từ này luôn luôn được viết hoa\" — trong tiếng Việt hầu như không có quy tắc nào là tuyệt đối 100%, nên đáp án này thường là bẫy cần loại trừ trước.",
      ],
      commonMistakes: [
        "Đọc lướt đề, bỏ sót từ phủ định (\"không\", \"KHÔNG phải\")",
        "Chọn đáp án đầu tiên có vẻ đúng mà không đọc hết các lựa chọn còn lại",
        "Không phân biệt được đáp án \"đúng một phần\" với đáp án \"đúng và đầy đủ\"",
      ],
    },
  },
  {
    id: "NT-01",
    group: "NT",
    title: "Từ đồng nghĩa",
    lesson: {
      concept:
        "Từ đồng nghĩa là những từ có nghĩa giống nhau hoặc gần giống nhau, có thể thay thế cho nhau trong một số ngữ cảnh, nhưng thường có sắc thái biểu cảm hoặc phạm vi sử dụng khác nhau.",
      signals: [
        "Hai từ có thể thay thế cho nhau trong câu mà nghĩa cơ bản của câu không đổi",
        "Thường xuất hiện cùng nhóm chủ điểm (tính cách, cảm xúc, hình dáng...)",
      ],
      examples: [
        "\"Chăm chỉ\" và \"siêng năng\" đều chỉ đức tính chịu khó làm việc, học tập — có thể thay thế cho nhau: \"Bạn ấy rất chăm chỉ/siêng năng học bài.\"",
        "\"Xinh đẹp\" và \"xinh xắn\" đều chỉ vẻ ngoài ưa nhìn, nhưng \"xinh xắn\" thường dùng cho những gì nhỏ nhắn, đáng yêu hơn.",
        "\"To lớn\", \"khổng lồ\", \"đồ sộ\" đều chỉ kích thước lớn, nhưng \"khổng lồ\" nhấn mạnh mức độ lớn hơn hẳn bình thường.",
      ],
      commonMistakes: [
        "Nhầm từ đồng nghĩa hoàn toàn với từ đồng nghĩa không hoàn toàn (khác sắc thái, không phải lúc nào cũng thay thế được)",
        "Nhầm từ đồng nghĩa với từ cùng chủ điểm nhưng khác nghĩa (ví dụ \"vui vẻ\" và \"hạnh phúc\" không hoàn toàn đồng nghĩa)",
      ],
    },
  },
  // Giai đoạn 9 — CA là nhóm ưu tiên #1 cho bài tập chấm tự động (Mục 5.11:
  // "CA-01→07, TC-03/04, NT-03/04").
  {
    id: "CA-01",
    group: "CA",
    title: "Câu và các thành phần chính (chủ ngữ, vị ngữ)",
    lesson: {
      concept:
        "Câu là đơn vị ngôn ngữ diễn đạt một ý trọn vẹn. Câu đơn thường có hai thành phần chính: chủ ngữ (nêu sự vật được nói đến) và vị ngữ (nêu hoạt động, trạng thái, đặc điểm của sự vật đó).",
      signals: [
        "Chủ ngữ thường đứng trước, trả lời câu hỏi \"Ai?/Cái gì?/Con gì?\"",
        "Vị ngữ thường đứng sau, trả lời câu hỏi \"làm gì?/thế nào?/là gì?\"",
        "Một câu hoàn chỉnh cần có đủ cả chủ ngữ và vị ngữ",
      ],
      examples: [
        "\"Bạn Lan / học bài.\" — chủ ngữ: \"Bạn Lan\", vị ngữ: \"học bài\".",
        "\"Con mèo nhà em / đang ngủ trên ghế.\" — chủ ngữ: \"Con mèo nhà em\", vị ngữ: \"đang ngủ trên ghế\".",
      ],
      commonMistakes: [
        "Nhầm trạng ngữ đứng đầu câu với chủ ngữ (ví dụ \"Sáng nay\" trong \"Sáng nay, em đi học\" là trạng ngữ, không phải chủ ngữ)",
        "Viết câu chỉ có cụm danh từ mà thiếu hẳn vị ngữ, tưởng nhầm là câu hoàn chỉnh",
      ],
    },
  },
  {
    id: "CA-02",
    group: "CA",
    title: "Trạng ngữ và các loại trạng ngữ",
    lesson: {
      concept:
        "Trạng ngữ là thành phần phụ của câu, bổ sung ý nghĩa về thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện... cho nòng cốt câu (chủ ngữ – vị ngữ). Trạng ngữ thường đứng ở đầu câu và ngăn cách với nòng cốt câu bằng dấu phẩy.",
      signals: [
        "Trạng ngữ chỉ thời gian trả lời câu hỏi \"Khi nào?\"",
        "Trạng ngữ chỉ nơi chốn trả lời câu hỏi \"Ở đâu?\"",
        "Trạng ngữ chỉ nguyên nhân trả lời câu hỏi \"Vì sao?\"",
        "Trạng ngữ chỉ mục đích trả lời câu hỏi \"Để làm gì?\"",
      ],
      examples: [
        "\"Sáng nay, em đi học sớm.\" — trạng ngữ chỉ thời gian: \"Sáng nay\".",
        "\"Vì trời mưa to, chúng em phải nghỉ học.\" — trạng ngữ chỉ nguyên nhân: \"Vì trời mưa to\".",
        "\"Để đạt kết quả tốt, em cần ôn bài đều đặn.\" — trạng ngữ chỉ mục đích: \"Để đạt kết quả tốt\".",
      ],
      commonMistakes: [
        "Nhầm trạng ngữ với chủ ngữ khi trạng ngữ đứng đầu câu nhưng thiếu dấu phẩy ngăn cách",
        "Xác định sai loại trạng ngữ (ví dụ nhầm trạng ngữ chỉ nguyên nhân với trạng ngữ chỉ mục đích)",
      ],
    },
  },
  {
    id: "CA-03",
    group: "CA",
    title: "Các kiểu câu kể: Ai làm gì? / Ai thế nào? / Ai là gì?",
    lesson: {
      concept:
        "Câu kể (câu trần thuật) dùng để kể, tả, giới thiệu sự vật, sự việc. Có 3 kiểu câu kể chính, phân biệt theo nội dung của vị ngữ.",
      signals: [
        "\"Ai làm gì?\": vị ngữ nêu hoạt động (động từ + các thành phần đi kèm)",
        "\"Ai thế nào?\": vị ngữ nêu đặc điểm, tính chất, trạng thái (thường có tính từ)",
        "\"Ai là gì?\": vị ngữ có từ \"là\", dùng để giới thiệu, nhận định, đánh giá",
      ],
      examples: [
        "\"Bạn Lan đang quét sân.\" — vị ngữ \"đang quét sân\" nêu hoạt động → kiểu Ai làm gì?",
        "\"Bầu trời hôm nay trong xanh.\" — vị ngữ \"trong xanh\" nêu đặc điểm → kiểu Ai thế nào?",
        "\"Bạn Nam là học sinh giỏi.\" — vị ngữ có từ \"là\", giới thiệu về Bạn Nam → kiểu Ai là gì?",
      ],
      commonMistakes: [
        "Nhầm câu có động từ \"là\" đi kèm mô tả trạng thái với kiểu Ai là gì? (ví dụ \"Em bé là rất đáng yêu\" là câu sai ngữ pháp, không phải ví dụ chuẩn của kiểu này)",
        "Nhầm câu kể \"Ai thế nào?\" với câu kể \"Ai làm gì?\" khi vị ngữ có cả động từ lẫn tính từ",
      ],
    },
  },
  {
    id: "CA-04",
    group: "CA",
    title: "Các kiểu câu chia theo mục đích nói: câu hỏi, câu kể, câu khiến, câu cảm",
    lesson: {
      concept:
        "Theo mục đích nói, câu chia thành 4 kiểu: câu kể (kể, tả, thông báo), câu hỏi (dùng để hỏi), câu khiến (dùng để yêu cầu, đề nghị, ra lệnh), câu cảm (bộc lộ cảm xúc).",
      signals: [
        "Câu hỏi thường có từ nghi vấn (ai, gì, sao, thế nào, đâu...) và kết thúc bằng dấu chấm hỏi",
        "Câu khiến thường có từ \"hãy, đừng, chớ, nên\" và kết thúc bằng dấu chấm than hoặc dấu chấm",
        "Câu cảm thường có từ cảm thán (ôi, chao, quá, thật) và kết thúc bằng dấu chấm than",
      ],
      examples: [
        "\"Bạn có đi học không?\" — câu hỏi.",
        "\"Hãy giữ trật tự!\" — câu khiến.",
        "\"Ôi, cảnh đẹp quá!\" — câu cảm.",
        "\"Hôm nay trời đẹp.\" — câu kể.",
      ],
      commonMistakes: [
        "Nhầm câu cảm với câu khiến khi cả hai đều kết thúc bằng dấu chấm than",
        "Nhầm câu hỏi tu từ (không cần trả lời, chỉ để nhấn mạnh) với câu hỏi thông thường",
      ],
    },
  },
  {
    id: "CA-05",
    group: "CA",
    title: "Câu đơn và câu ghép",
    lesson: {
      concept:
        "Câu đơn có một cụm chủ ngữ – vị ngữ (nòng cốt câu). Câu ghép có từ hai cụm chủ ngữ – vị ngữ trở lên, không bao chứa nhau, mỗi cụm diễn đạt một ý và liên kết với nhau.",
      steps: [
        "Xác định các cụm chủ ngữ – vị ngữ độc lập trong câu.",
        "Nếu chỉ có một cụm chủ ngữ – vị ngữ → câu đơn.",
        "Nếu có từ hai cụm chủ ngữ – vị ngữ trở lên, không cụm nào nằm trong cụm nào → câu ghép.",
      ],
      signals: [
        "Câu ghép thường có quan hệ từ nối (và, nhưng, vì...nên, nếu...thì) hoặc dấu phẩy/dấu chấm phẩy ngăn cách các vế",
      ],
      examples: [
        "\"Em học bài.\" — câu đơn, chỉ có một cụm chủ ngữ – vị ngữ.",
        "\"Trời mưa to nên đường phố ngập nước.\" — câu ghép, hai cụm: \"trời mưa to\" và \"đường phố ngập nước\", nối bằng \"nên\".",
      ],
      commonMistakes: [
        "Nhầm câu đơn có nhiều vị ngữ (một chủ ngữ, nhiều hành động nối bằng \"và\") với câu ghép",
        "Không nhận ra câu ghép khi các vế chỉ ngăn cách bằng dấu phẩy, không có quan hệ từ rõ ràng",
      ],
    },
  },
  {
    id: "CA-06",
    group: "CA",
    title: "Cách nối các vế câu ghép",
    lesson: {
      concept:
        "Các vế trong câu ghép có thể nối với nhau bằng 3 cách: nối trực tiếp (dùng dấu câu, không có từ nối), nối bằng quan hệ từ đơn (và, nhưng, hoặc, vì, nên...), hoặc nối bằng cặp quan hệ từ (vì...nên, nếu...thì, tuy...nhưng, không những...mà còn...).",
      signals: [
        "Cặp quan hệ từ \"vì...nên\" thể hiện quan hệ nguyên nhân – kết quả",
        "Cặp quan hệ từ \"nếu...thì\" thể hiện quan hệ giả thiết – kết quả",
        "Cặp quan hệ từ \"tuy...nhưng\" thể hiện quan hệ tương phản",
      ],
      examples: [
        "\"Trời mưa, đường trơn.\" — nối trực tiếp bằng dấu phẩy.",
        "\"Vì trời mưa nên đường trơn.\" — cặp quan hệ từ nguyên nhân – kết quả.",
        "\"Tuy nhà nghèo nhưng bạn ấy học rất giỏi.\" — cặp quan hệ từ tương phản.",
      ],
      commonMistakes: [
        "Dùng sai cặp quan hệ từ (ví dụ nhầm cặp nguyên nhân – kết quả với cặp tương phản)",
        "Thiếu vế thứ hai khi đã dùng vế đầu của một cặp quan hệ từ",
      ],
    },
  },
  {
    id: "CA-07",
    group: "CA",
    title: "Liên kết câu trong đoạn: phép lặp, phép thế, phép nối",
    lesson: {
      concept:
        "Để các câu trong đoạn văn liên kết chặt chẽ với nhau, người viết thường dùng 3 phép liên kết chính: phép lặp (lặp lại từ ngữ đã dùng ở câu trước), phép thế (dùng đại từ hoặc từ ngữ khác thay thế), phép nối (dùng từ nối như \"vì vậy, tuy nhiên, ngoài ra\").",
      signals: [
        "Phép lặp: từ ngữ giống hệt được lặp lại ở câu sau",
        "Phép thế: đại từ (nó, đó, ấy, bạn ấy) hoặc từ đồng nghĩa thay thế cho từ ngữ đã nhắc ở câu trước",
        "Phép nối: từ/cụm từ nối đứng đầu câu sau (vì vậy, tuy nhiên, ngoài ra, hơn nữa)",
      ],
      examples: [
        "\"Lan là học sinh giỏi. Lan luôn giúp đỡ bạn bè.\" — phép lặp, lặp lại từ \"Lan\".",
        "\"Lan là học sinh giỏi. Bạn ấy luôn giúp đỡ bạn bè.\" — phép thế, \"bạn ấy\" thay cho \"Lan\".",
        "\"Trời mưa to. Vì vậy, buổi dã ngoại bị hoãn lại.\" — phép nối, dùng \"vì vậy\".",
      ],
      commonMistakes: [
        "Lạm dụng phép lặp khiến đoạn văn nhàm chán, lặp từ quá nhiều lần",
        "Nhầm phép thế với việc chỉ đơn thuần đổi chủ ngữ mà không có ý thức liên kết",
      ],
    },
  },
  { id: "CD-01", group: "CD", title: "Chính tả: phụ âm đầu dễ lẫn (l/n, ch/tr, s/x, r/d/gi)" },
  {
    id: "CT-07",
    group: "CT",
    title: "Viết đoạn văn cảm thụ theo cấu trúc chuẩn (mở – thân – kết)",
    // Giai đoạn 9 — bổ sung bài học lý thuyết còn thiếu cho chuyên đề này
    // (đã có bài tập từ Giai đoạn 3, chỉ thiếu lesson).
    lesson: {
      concept:
        "Đoạn văn cảm thụ chuẩn cần có cấu trúc rõ ràng 3 phần: mở đoạn giới thiệu câu/hình ảnh ấn tượng, thân đoạn phân tích biện pháp nghệ thuật và tác dụng, kết đoạn nêu cảm xúc hoặc liên hệ (xem quy trình chi tiết ở KN-02).",
      signals: [
        "Mở đoạn: giới thiệu ngắn gọn câu văn/hình ảnh em ấn tượng, không cần dài dòng.",
        "Thân đoạn: bắt buộc có cả tên biện pháp nghệ thuật VÀ tác dụng cụ thể.",
        "Kết đoạn: cảm xúc hoặc liên hệ thực của bản thân, tránh sáo rỗng.",
      ],
      examples: [
        "Với câu văn có hình ảnh so sánh sinh động, đoạn cảm thụ mẫu thường mở đầu bằng \"Đọc câu văn ..., em cảm thấy...\", sau đó chỉ ra biện pháp so sánh, nêu tác dụng khiến hình ảnh trở nên sinh động, rồi kết bằng cảm nhận hoặc kỷ niệm liên quan của bản thân.",
      ],
      commonMistakes: [
        "Viết đoạn văn không theo cấu trúc 3 phần rõ ràng, các ý lẫn lộn vào nhau",
        "Thân đoạn chỉ kể lại nội dung câu văn mà không phân tích biện pháp nghệ thuật",
      ],
    },
  },
  {
    id: "CT-01",
    group: "CT",
    title: "Biện pháp tu từ: So sánh — nhận diện và nêu tác dụng",
    lesson: {
      concept:
        "So sánh là đối chiếu sự vật, sự việc này với sự vật, sự việc khác có nét tương đồng, thường dùng các từ so sánh (như, tựa, là, giống như...) để làm hình ảnh sinh động, dễ hình dung hơn.",
      signals: [
        "Có từ so sánh: như, tựa như, giống như, là, chẳng khác gì...",
        "Hai sự vật được so sánh phải có nét tương đồng nào đó (hình dáng, màu sắc, hoạt động...)",
      ],
      examples: [
        "\"Mặt trời đỏ như quả cầu lửa khổng lồ\" — so sánh mặt trời với quả cầu lửa qua từ \"như\", nét tương đồng là màu đỏ và hình dáng tròn.",
        "\"Tiếng suối trong như tiếng hát xa\" — so sánh âm thanh của suối với tiếng hát, nét tương đồng là sự trong trẻo, du dương.",
      ],
      commonMistakes: [
        "Nhầm so sánh với nhân hoá khi câu vừa có từ so sánh vừa có yếu tố nhân hoá",
        "Chỉ nêu \"đây là so sánh\" mà không chỉ rõ hai vế được so sánh với nhau là gì",
      ],
    },
  },
  {
    id: "CT-02",
    group: "CT",
    title: "Biện pháp tu từ: Nhân hoá — nhận diện và nêu tác dụng",
    lesson: {
      concept:
        "Nhân hoá là gán cho sự vật, hiện tượng, loài vật những đặc điểm, hành động, cảm xúc vốn chỉ có ở con người, khiến chúng trở nên gần gũi, sinh động như có sự sống.",
      signals: [
        "Sự vật/loài vật được gọi bằng từ xưng hô của người (bác, cô, chú, anh, chị...) hoặc thực hiện hành động/có cảm xúc của người",
        "KHÔNG dùng từ so sánh (như, tựa, là...) như biện pháp so sánh",
      ],
      examples: [
        "\"Ông mặt trời thức dậy sau đám mây\" — mặt trời được gọi là \"ông\" và có hành động \"thức dậy\" như con người.",
        "\"Hàng cây đứng im lặng, buồn bã tiễn mùa thu đi\" — hàng cây có cảm xúc \"buồn bã\" và hành động \"tiễn\" như con người.",
      ],
      commonMistakes: [
        "Nhầm nhân hoá với so sánh khi câu văn có cả hai yếu tố",
        "Không chỉ ra được cụ thể từ ngữ nào thể hiện phép nhân hoá trong câu",
      ],
    },
  },
  {
    id: "CT-05",
    group: "CT",
    title: "Cái hay, cái đẹp của từ ngữ và hình ảnh trong tác phẩm",
    lesson: {
      concept:
        "Ngoài các biện pháp tu từ có tên gọi cụ thể, cảm thụ văn học còn cần nhận ra cái hay của việc CHỌN TỪ (dùng từ láy, từ gợi tả, gợi cảm) và cái đẹp của HÌNH ẢNH được miêu tả, dù không phải lúc nào cũng gọi được tên biện pháp.",
      steps: [
        "Đọc kỹ đoạn văn/thơ, chú ý các từ láy, tính từ gợi tả màu sắc, âm thanh, hình dáng.",
        "Tự hỏi: nếu thay từ này bằng một từ khác thông thường hơn, câu văn có còn hay không? Vì sao?",
        "Chỉ ra từ ngữ/hình ảnh đó gợi lên điều gì cụ thể (một cảnh vật, một cảm giác, một không khí...).",
        "Nêu cảm nhận của bản thân về cái hay, cái đẹp đó.",
      ],
      signals: [
        "Thường là các từ láy giàu sức gợi (long lanh, rì rào, xào xạc, lung linh...)",
        "Đề bài dạng \"em thấy từ nào hay nhất trong đoạn văn, vì sao?\"",
      ],
      examples: [
        "Trong câu \"Nắng vàng rót mật xuống cánh đồng lúa chín\", từ \"rót mật\" gợi hình ảnh ánh nắng sánh vàng, ấm áp như mật ong đang chảy xuống, khiến cảnh vật trở nên ngọt ngào, ấm áp hơn hẳn so với chỉ nói \"nắng chiếu xuống\".",
      ],
      commonMistakes: [
        "Chỉ liệt kê từ hay mà không giải thích được vì sao nó hay",
        "Nhầm lẫn giữa việc tìm từ hay với việc tìm biện pháp tu từ có tên gọi cụ thể — không phải lúc nào cái hay cũng gọi được tên một biện pháp",
      ],
    },
  },
  { id: "VA-03", group: "VA", title: "Văn tả cây cối" },

  // Giai đoạn 9 — hoàn thiện nốt nhóm KN (Mục 5.11: ưu tiên #1, ít tài liệu
  // sẵn có nhất, giá trị cao nhất). KN-01 đã có từ Giai đoạn 4.
  {
    id: "KN-02",
    group: "KN",
    title: "Kỹ năng làm bài cảm thụ: quy trình từ nhận diện biện pháp → nêu tác dụng → liên hệ cảm xúc",
    lesson: {
      concept:
        "Làm bài cảm thụ không phải là \"cảm nhận tự do\" mà là một kỹ năng có quy trình: nhận diện đúng biện pháp nghệ thuật, nêu đúng tác dụng của biện pháp đó, rồi mới liên hệ cảm xúc cá nhân.",
      steps: [
        "Đọc kỹ câu/đoạn văn được hỏi, gạch chân từ ngữ hoặc hình ảnh đặc biệt (so sánh, nhân hoá, từ láy, điệp từ...).",
        "Xác định chính xác biện pháp tu từ được sử dụng — gọi đúng tên (so sánh, nhân hoá, điệp từ, đảo ngữ...).",
        "Nêu tác dụng cụ thể của biện pháp đó với CÂU VĂN NÀY: hình ảnh trở nên sinh động, gợi cảm như thế nào, gợi ra điều gì.",
        "Liên hệ cảm xúc, suy nghĩ của bản thân với hình ảnh hoặc nội dung câu văn.",
        "Viết thành đoạn văn hoàn chỉnh theo cấu trúc mở – thân – kết (xem thêm CT-07).",
      ],
      signals: [
        "Đề bài thường có từ \"cảm nhận\", \"em có suy nghĩ gì\", \"nêu tác dụng của...\"",
        "Bài làm đạt điểm cao cần đủ CẢ HAI phần: gọi đúng tên biện pháp NGHỆ THUẬT và nêu ĐÚNG TÁC DỤNG — thiếu một trong hai vẫn bị trừ điểm nặng.",
      ],
      examples: [
        "Với câu \"Hàng cau đứng thẳng như những người lính canh gác khu vườn\": bước 1-2 nhận ra đây là biện pháp so sánh (hàng cau — người lính); bước 3 nêu tác dụng — khiến hàng cau hiện lên vững chãi, có tư thế nghiêm trang, gần gũi như con người; bước 4 liên hệ: gợi cảm giác khu vườn được canh giữ, bình yên.",
      ],
      commonMistakes: [
        "Chỉ gọi tên biện pháp tu từ mà không nêu tác dụng cụ thể",
        "Nêu tác dụng chung chung (\"làm câu văn hay hơn\") mà không gắn với hình ảnh/nội dung câu văn đang xét",
        "Bỏ qua hẳn bước liên hệ cảm xúc cá nhân",
      ],
    },
  },
  {
    id: "KN-03",
    group: "KN",
    title: "Kỹ năng viết mở bài gián tiếp cho từng kiểu bài",
    lesson: {
      concept:
        "Mở bài gián tiếp (không nêu ngay đối tượng ở câu đầu mà dẫn dắt qua 1–2 câu) thường hấp dẫn và ghi điểm hơn mở bài trực tiếp. Có 4 cách mở bài gián tiếp áp dụng được cho nhiều kiểu bài (tả người, tả cảnh, tả cây, tả con vật, kể chuyện).",
      steps: [
        "Cách 1 — Giới thiệu vị trí hoặc lý do có đối tượng, gắn với một kỷ niệm.",
        "Cách 2 — Bắt đầu từ một thời điểm đặc biệt (một mùa, một buổi, sau một sự kiện).",
        "Cách 3 — Dẫn vào từ một âm thanh, hình ảnh hoặc cảm giác gắn với đối tượng.",
        "Cách 4 — Bắt đầu bằng một câu thơ, câu hát, câu tục ngữ liên quan rồi dẫn tới đối tượng.",
        "Dù chọn cách nào, câu cuối đoạn mở bài luôn phải chốt lại rõ ràng: đối tượng cụ thể sắp được tả/kể là gì.",
      ],
      signals: [
        "Mở bài gián tiếp KHÔNG nêu tên đối tượng miêu tả ngay ở câu đầu tiên.",
        "Đoạn mở bài thường dài 2–4 câu, kết thúc bằng câu chốt nêu rõ đối tượng.",
      ],
      examples: [
        "Cách 2 (thời điểm đặc biệt) áp dụng cho văn tả cây: \"Mỗi độ hè về, tiếng ve lại râm ran khắp sân trường. Đó cũng là lúc cây phượng già ở góc sân bắt đầu khoác lên mình chiếc áo đỏ rực.\"",
        "Cách 3 (âm thanh) áp dụng cho văn tả con vật: \"Tiếng gáy vang lanh lảnh mỗi sớm tinh mơ đã trở thành âm thanh quen thuộc của nhà em — đó là chú gà trống mà em rất yêu quý.\"",
      ],
      commonMistakes: [
        "Nhầm mở bài gián tiếp với mở bài lan man, kể chuyện không liên quan tới đề",
        "Quên câu chốt nêu rõ đối tượng ở cuối đoạn mở bài, khiến người chấm không rõ bài sắp tả/kể về ai/cái gì",
      ],
    },
  },
  {
    id: "KN-04",
    group: "KN",
    title: "Kỹ năng lập dàn ý nhanh và phân bổ thời gian làm bài",
    lesson: {
      concept:
        "Trước khi viết, cần lập dàn ý nhanh bằng từ khoá (không viết câu hoàn chỉnh) để bài không thiếu ý, không lan man; đồng thời cần phân bổ thời gian hợp lý cho từng phần của đề thi.",
      steps: [
        "Đọc kỹ đề, xác định đúng yêu cầu (tả gì, kể gì, viết cho ai, theo kiểu bài nào).",
        "Gạch nhanh 3–5 ý chính theo cấu trúc mở – thân – kết, chỉ ghi từ khoá, không viết câu hoàn chỉnh.",
        "Ước lượng thời gian cho từng phần của đề (luyện từ và câu, đọc hiểu – cảm thụ, tập làm văn) theo đúng cơ cấu điểm của đề — phần chiếm nhiều điểm hơn thì dành nhiều thời gian hơn.",
        "Làm phần mình chắc điểm trước, phần khó hơn để sau — tránh bị kẹt ở một câu khó ngay từ đầu.",
        "Luôn dành khoảng 5 phút cuối giờ để soát lại bài (xem thêm KN-05).",
      ],
      signals: [
        "Đề thi càng dài (xu hướng đề mới từ 2025–2026 — theo Mục 4.1 nhận định của cô Thu Ngân) thì càng cần kỹ năng phân bổ thời gian tốt.",
        "Dàn ý tốt chỉ mất 2–3 phút để lập, không nên viết dài dòng.",
      ],
      examples: [
        "Với đề 60 phút gồm 3 phần đều nhau: nên dành khoảng 20 phút mỗi phần, trong đó phần tập làm văn cần trừ riêng 3 phút lập dàn ý và 5 phút soát lỗi trong tổng thời gian đó.",
      ],
      commonMistakes: [
        "Viết dàn ý quá chi tiết (thành câu hoàn chỉnh) khiến mất nhiều thời gian viết hai lần",
        "Dành quá nhiều thời gian cho một câu khó ở đầu bài, khiến các phần sau bị vội hoặc bỏ trống",
      ],
    },
  },
  {
    id: "KN-05",
    group: "KN",
    title: "Kỹ năng soát lỗi trước khi nộp: chính tả, dùng từ, đặt câu",
    lesson: {
      concept:
        "Soát lỗi là bước cuối cùng nhưng rất quan trọng — giúp tránh mất điểm oan vì lỗi chính tả, dùng từ sai, hoặc câu thiếu thành phần, dù nội dung bài đã tốt.",
      steps: [
        "Đọc lại toàn bài một lượt, tập trung vào chính tả (l/n, ch/tr, s/x, r/d/gi, dấu hỏi/dấu ngã).",
        "Kiểm tra từng câu có đủ chủ ngữ – vị ngữ không, dấu câu đã đặt đúng chưa.",
        "Kiểm tra từ dùng có phù hợp ngữ cảnh không, có bị lặp từ nhiều lần không.",
        "Với bài tập làm văn: kiểm tra đã tả/kể đúng đối tượng đề yêu cầu chưa, đã đủ 3 phần mở – thân – kết chưa.",
        "Sửa trực tiếp, gọn gàng — gạch một gạch ngang lên chỗ sai, viết lại bên cạnh, không tẩy xoá nhiều lần.",
      ],
      signals: [
        "Nên dành ít nhất 3–5 phút cuối giờ thi riêng cho việc soát lỗi (xem thêm KN-04 về phân bổ thời gian).",
        "Đọc thành tiếng (nhẩm trong đầu) thường giúp phát hiện câu thiếu thành phần tốt hơn đọc lướt bằng mắt.",
      ],
      examples: [
        "Câu \"Em rất là thích con mèo nhà em\" khi soát lại nên bỏ từ \"là\" thừa: \"Em rất thích con mèo nhà em.\"",
      ],
      commonMistakes: [
        "Bỏ qua hẳn bước soát lỗi vì thiếu thời gian (thường do không phân bổ thời gian tốt từ đầu)",
        "Chỉ đọc lướt qua mà không thực sự kiểm tra từng câu, từng dấu câu",
      ],
    },
  },
];

