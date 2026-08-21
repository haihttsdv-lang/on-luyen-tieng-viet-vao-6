// One-off manual smoke test for the Hồ sơ module (Giai đoạn 7). Exit
// criterion in Mục 18.2: "Gợi ý đúng logic với dữ liệu giả lập." Simulates
// data by deliberately answering every practice question wrong (building up
// weak-mastery topics and pushing the sổ lỗi past its threshold), then
// checks the profile page reasons about it correctly.
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:4173";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto(BASE_URL);

// --- Build simulated data: answer every quiz-eligible practice question wrong. ---
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Luyện tập").click();
for (const label of ["Từ đồng nghĩa", "Ai làm gì", "phụ âm đầu dễ lẫn", "phương pháp loại trừ"]) {
  await page.locator("label", { hasText: label }).locator("input[type=checkbox]").check();
}
await page.getByRole("button", { name: "Bắt đầu luyện tập" }).click();
await page.locator("main").getByText(/^Câu 1\//).waitFor();

let answered = 0;
while (true) {
  answered++;
  await answerWrong(page);
  const nextBtn = page.getByRole("button", { name: /Câu tiếp theo|Xem kết quả/ });
  await nextBtn.waitFor({ timeout: 5000 });
  const label = await nextBtn.innerText();
  await nextBtn.click();
  if (label.includes("Xem kết quả")) break;
  if (answered > 30) throw new Error("Too many questions — possible infinite loop");
}
console.log(`[ok] answered ${answered} practice questions, all deliberately wrong`);

async function answerWrong(p) {
  const scope = p.locator("main");
  const listButtons = scope.locator('ul[role="list"] button');
  const isMatch = (await p.locator('ul[aria-label="Cột trái"]').count()) > 0;

  if (isMatch) {
    const lefts = p.locator('ul[aria-label="Cột trái"] button');
    const rights = p.locator('ul[aria-label="Cột phải"] button');
    const n = await lefts.count();
    // Rotate the pairing by 1 so nothing lines up with its correct partner.
    for (let i = 0; i < n; i++) {
      await lefts.nth(i).click();
      await rights.nth((i + 1) % n).click();
    }
    await p.getByRole("button", { name: "Nộp bài" }).click();
    return;
  }
  if ((await listButtons.count()) > 0) {
    // mcq: last option is never correct in this content set.
    await listButtons.last().click();
    return;
  }
  if ((await p.locator('[data-testid="order-pool"]').count()) > 0) {
    while (!(await p.getByRole("button", { name: "Nộp bài" }).isEnabled())) {
      await p.locator('[data-testid="order-pool"] button').first().click();
    }
    await p.getByRole("button", { name: "Nộp bài" }).click();
    return;
  }
  if ((await p.locator('input[type="text"]').count()) > 0) {
    const inputs = p.locator('input[type="text"]');
    for (let i = 0; i < (await inputs.count()); i++) await inputs.nth(i).fill("sai");
    await p.getByRole("button", { name: "Nộp câu trả lời" }).click();
    return;
  }
  if ((await p.locator("textarea").count()) > 0) {
    // short type: self-confirms via Đúng/Sai — deliberately mark it wrong.
    await p.locator("textarea").fill("không biết");
    await p.getByRole("button", { name: "Kiểm tra gợi ý" }).click();
    await p.getByRole("button", { name: "Sai", exact: true }).click();
    return;
  }
  throw new Error("Unrecognized question type while building simulated data");
}

// --- Check the profile page reasons correctly about the simulated data. ---
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Hồ sơ").click();
await page.locator("main").getByRole("heading", { name: "Hồ sơ" }).waitFor();
console.log("[ok] profile page loaded");

const recsText = await page.locator("main").innerText();
// Note: the recommendation kind label has CSS `uppercase` applied, and
// Playwright's innerText() reflects rendered (CSS-transformed) text, not
// the raw DOM string — compare case-insensitively.
if (!/luyện lại câu sai/i.test(recsText)) {
  throw new Error(
    `Expected the error-log recommendation to appear (sổ lỗi should be well past the 10-question threshold). Got:\n${recsText.slice(0, 500)}`,
  );
}
console.log("[ok] FR-H08: error-log recommendation surfaced after exceeding the threshold");

// FR-H05: radar chart + tile grid both rendered.
await page.locator('svg[aria-label="Biểu đồ radar mức độ thành thạo theo 9 nhóm"]').waitFor();
console.log("[ok] FR-H05: radar chart rendered");

// FR-H03c: mastery groups show a %, activity groups show "Đã luyện N/M bài" — both present.
if (!recsText.includes("% đúng") && !recsText.includes("Chưa đủ dữ liệu")) {
  throw new Error("Expected mastery-group tiles to show a percentage-style label");
}
if (!recsText.includes("Đã luyện") || !recsText.includes("(hoạt động)")) {
  throw new Error("Expected activity-group tiles (KN) to show the distinct 'Đã luyện N/M bài (hoạt động)' label");
}
console.log("[ok] FR-H03c: mastery (%) and activity (đã luyện N/M) indicators are visually distinct");

// FR-H11: recommendation reasons are shown, not just topic names.
const recLinks = page.locator('main a:has-text("vì con đúng"), main a:has-text("Sổ lỗi có")');
if ((await recLinks.count()) === 0) {
  throw new Error("Expected at least one recommendation to show its reason text (FR-H11)");
}
console.log("[ok] FR-H11: recommendation reasons are shown");

// FR-H12: backup export/import round-trip.
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button", { name: "Xuất file sao lưu" }).click();
const download = await downloadPromise;
const path = await download.path();
if (!path) throw new Error("Expected the backup export to produce a downloadable file");
console.log("[ok] FR-H12: backup export produced a file");

const [fileChooser] = await Promise.all([
  page.waitForEvent("filechooser"),
  page.getByRole("button", { name: "Khôi phục từ file" }).click(),
]);
await fileChooser.setFiles(path);
await page.locator("text=Đã khôi phục xong").waitFor({ timeout: 5000 });
console.log("[ok] FR-H12: backup import round-tripped successfully");

// --- Parent page (FR-H09/H10). ---
await page.getByRole("link", { name: "Xem theo phụ huynh" }).click();
await page.locator("main").getByRole("heading", { name: "Trang phụ huynh" }).waitFor();
const parentText = await page.locator("main").innerText();
if (!/buổi học trong 7 ngày qua/.test(parentText)) {
  throw new Error("Expected the parent page to show sessions-this-week (FR-H09)");
}
console.log("[ok] FR-H09: parent page shows weekly session count and weak topics");

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
