// One-off manual smoke test for the Lý thuyết module (Giai đoạn 4). Exit
// criterion in Mục 18.2: "Học xong 1 bài → quiz → trạng thái 'Đã nắm'."
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:4173";

// Correct answers for KN-01's quiz-eligible exercises, in content order.
const KN01_ANSWERS = {
  "kn-01-mcq-1": "lười biếng",
  "kn-01-mcq-2": "luôn luôn được viết hoa trong mọi trường hợp",
  "kn-01-fill-1": "phủ định",
  "kn-01-mcq-3": "Đọc thật kỹ từng chữ khác nhau giữa hai đáp án rồi đối chiếu với đề bài",
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto(BASE_URL);
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Lý thuyết").click();
await page.locator("main").getByRole("heading", { name: "Lý thuyết" }).waitFor();
console.log("[ok] topic list loaded");

// KN-01 should start as "Chưa học".
const knRow = page.getByRole("link", { name: /KN-01/ });
await knRow.waitFor();
if (!(await knRow.innerText()).includes("Chưa học")) {
  throw new Error("Expected KN-01 to start as 'Chưa học'");
}
console.log("[ok] KN-01 starts as 'Chưa học'");

await knRow.click();
await page.locator("main").getByText("Quy trình từng bước").waitFor();
console.log("[ok] FR-L03: step-by-step lesson content shown for KN group");

// Reopening the topic list should now show "Đang học" (FR-L01).
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Lý thuyết").click();
await page.getByRole("link", { name: /KN-01/ }).waitFor();
if (!(await page.getByRole("link", { name: /KN-01/ }).innerText()).includes("Đang học")) {
  throw new Error("Expected KN-01 to move to 'Đang học' after opening the lesson");
}
console.log("[ok] KN-01 moved to 'Đang học' after opening the lesson");

await page.getByRole("link", { name: /KN-01/ }).click();
await page.getByRole("link", { name: "Làm quiz cuối bài" }).click();
await page.locator("text=Cần trả lời đúng ít nhất").waitFor();
console.log("[ok] FR-L04: pass threshold shown upfront, before the quiz starts");

await page.getByRole("button", { name: "Bắt đầu" }).click();

let answered = 0;
while (true) {
  if (await page.locator('input[type="text"]').isVisible().catch(() => false)) {
    await page.locator('input[type="text"]').fill(KN01_ANSWERS["kn-01-fill-1"]);
    await page.getByRole("button", { name: "Nộp câu trả lời" }).click();
  } else {
    const target = page.locator("main ul[role=list] button", { hasText: KN01_ANSWERS["kn-01-mcq-1"] })
      .or(page.locator("main ul[role=list] button", { hasText: KN01_ANSWERS["kn-01-mcq-2"] }))
      .or(page.locator("main ul[role=list] button", { hasText: KN01_ANSWERS["kn-01-mcq-3"] }));
    await target.first().click();
  }

  answered++;
  const nextBtn = page.getByRole("button", { name: /Câu tiếp theo|Xem kết quả/ });
  await nextBtn.waitFor({ timeout: 5000 });
  const label = await nextBtn.innerText();
  await nextBtn.click();
  if (label.includes("Xem kết quả")) break;
  if (answered > 10) throw new Error("Too many questions — possible infinite loop");
}

await page.locator("text=Kết quả quiz").waitFor();
const resultText = await page.locator("main").innerText();
if (!resultText.includes('chuyển sang "Đã nắm"')) {
  throw new Error(`Expected a passing result. Got:\n${resultText}`);
}
console.log(`[ok] quiz passed after ${answered} questions, topic marked "Đã nắm"`);

await page.getByRole("link", { name: "Danh sách chuyên đề" }).click();
await page.getByRole("link", { name: /KN-01/ }).waitFor();
if (!(await page.getByRole("link", { name: /KN-01/ }).innerText()).includes("Đã nắm")) {
  throw new Error("Expected KN-01 to show 'Đã nắm' on the topic list after passing the quiz");
}
console.log('[ok] FR-L01: topic list reflects "Đã nắm" status');

// FR-L06: mind map jumps straight to the lesson.
await page.getByRole("link", { name: "Sơ đồ tư duy" }).click();
await page.locator("main").getByRole("heading", { name: "Sơ đồ tư duy" }).waitFor();
await page.getByRole("link", { name: "NT-01" }).click();
await page.locator("main").getByRole("heading", { name: "Từ đồng nghĩa" }).waitFor();
console.log("[ok] FR-L06: mind map link opens the lesson directly");

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
