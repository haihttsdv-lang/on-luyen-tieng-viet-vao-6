// One-off manual smoke test for the writing editor (Giai đoạn 3). The exit
// criterion in Mục 18.2 is specific: "Viết bài, chuyển tab, quay lại → bản
// nháp còn nguyên". A full page reload is a *stronger* version of that check
// — it wipes all JS memory, matching how Android can kill the page process
// outright (FR-A09), not just background a tab.
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:4173";
const DRAFT_TEXT = "Ở góc sân trường em có một cây phượng già rất to.";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto(BASE_URL);
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Luyện tập").click();
await page.locator("main").getByText("Viết bài (cảm thụ, tập làm văn)").waitFor();
console.log("[ok] writing prompt list visible");

await page.getByRole("link", { name: /Tả một cây bóng mát/ }).click();
await page.locator("textarea").waitFor();
console.log("[ok] writing editor opened");

await page.locator("textarea").fill(DRAFT_TEXT);
// Don't wait for the 5s interval — force an autosave via the same
// visibilitychange path Android relies on (FR-A09), which is also what the
// component listens for on unmount/navigation.
await page.evaluate(() => document.dispatchEvent(new Event("visibilitychange")));
await page.waitForTimeout(300); // let the async saveDraft() settle
await page.locator("text=Đã lưu lúc").waitFor({ timeout: 5000 });
console.log("[ok] draft autosaved");

// Simulate Android killing the page process: a hard reload wipes all JS
// state, so anything surviving must have actually round-tripped through
// IndexedDB.
await page.reload();
await page.locator("textarea").waitFor();

const restoredBanner = await page.getByText(/Đã khôi phục bản nháp lúc/).isVisible();
if (!restoredBanner) throw new Error("Expected 'Đã khôi phục bản nháp' banner (FR-A10) after reload");
console.log("[ok] FR-A10 banner shown after reload");

const restoredValue = await page.locator("textarea").inputValue();
if (restoredValue !== DRAFT_TEXT) {
  throw new Error(`Draft content mismatch after reload.\n  expected: ${DRAFT_TEXT}\n  got:      ${restoredValue}`);
}
console.log("[ok] draft content survived reload intact (FR-A09/A10/A11)");

// Now exercise submit -> FR-P10 gating -> self-score.
await page.locator("textarea").fill(
  "Ở góc sân trường em có một cây phượng già, không biết đã đứng đó bao nhiêu năm. " +
    "Mỗi lần nghe tiếng ve kêu râm ran, em lại biết mùa hè sắp đến và cây phượng sắp trổ hoa. " +
    "Thân cây to đến mức hai bạn học sinh ôm không xuể, vỏ cây sần sùi, màu nâu xám. " +
    "Tán lá xanh rợp cả một góc sân, đến hè hoa nở đỏ rực như những đốm lửa nhỏ. " +
    "Cây phượng đã chứng kiến bao kỷ niệm vui buồn của em cùng bạn bè.",
);
await page.getByRole("button", { name: "Nộp bài" }).click();
await page.locator("text=Đã nộp bài").waitFor();
console.log("[ok] submitted (word count above the 40-word FR-P10 threshold)");

await page.locator("text=Bài mẫu").waitFor({ timeout: 3000 });
console.log("[ok] FR-P10: sample answer + rubric unlocked after submit");

const rubricCheckboxes = page.locator('main input[type="checkbox"]');
const rubricCount = await rubricCheckboxes.count();
for (let i = 0; i < rubricCount; i++) await rubricCheckboxes.nth(i).check();
await page.getByRole("button", { name: "Lưu điểm tự chấm" }).click();
await page.locator("text=Đã lưu:").waitFor({ timeout: 3000 });
console.log("[ok] FR-W04/W05: self-score saved and labeled as self-assessed");

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
