// One-off manual smoke test for the Lộ trình module (Giai đoạn 6). Exit
// criterion in Mục 18.2: "Lịch sinh đúng 3 giai đoạn từ ngày mở app."
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
await page.locator("main").getByRole("heading", { name: "Trang chủ" }).waitFor();
console.log("[ok] home page loaded");

// FR-C02: first visit ever → today's session should be exactly the first
// scheduled session, dated today (schedule starts "từ ngày mở ứng dụng lần
// đầu").
await page.locator("text=Buổi học hôm nay").waitFor();
console.log("[ok] FR-C02: home card shows 'Buổi học hôm nay' state on first visit");

// FR-C07 + FR-C01: journey map shows all 3 phases.
await page.getByRole("link", { name: "Xem toàn bộ lộ trình" }).click();
await page.locator("main").getByRole("heading", { name: "Lộ trình học" }).waitFor();
for (const label of ["Nền tảng", "Đọc hiểu, cảm thụ", "Luyện đề trường mục tiêu"]) {
  await page.locator(`text=${label}`).waitFor();
}
console.log("[ok] FR-C01/C07: all 3 phases present in the journey map");

// The very first session in the list should be dated today. vi-VN
// toLocaleDateString doesn't zero-pad (e.g. "21/8/2026"), so compare numeric
// parts rather than an exact formatted string.
const now = new Date();
const expectedParts = [String(now.getDate()), String(now.getMonth() + 1), String(now.getFullYear())];
const firstSessionLink = page.locator('main ul[role="list"] a').first();
const firstSessionText = await firstSessionLink.innerText();
if (!expectedParts.every((part) => firstSessionText.includes(part))) {
  throw new Error(
    `Expected the first scheduled session to be dated today (${expectedParts.join("/")}). Got:\n${firstSessionText}`,
  );
}
console.log("[ok] FR-C01: first session is dated today (schedule starts from first-open date)");

// FR-C03: clicking a block goes straight into the actual content.
await firstSessionLink.click();
await page.locator("main").getByRole("button", { name: "Bắt đầu buổi học" }).waitFor();
const sessionUrl = page.url();
await page.getByRole("button", { name: "Bắt đầu buổi học" }).click();
await page.waitForTimeout(500);
const afterClickUrl = page.url();
if (afterClickUrl === sessionUrl) {
  throw new Error("FR-C03: expected 'Bắt đầu buổi học' to navigate into real content, URL did not change");
}
console.log(`[ok] FR-C03: session block navigated to content (${new URL(afterClickUrl).pathname})`);

// FR-C04: go back to the session page (still open, not yet self-assessed)
// and self-assess it.
await page.goBack();
await page.getByRole("button", { name: "Ổn", exact: true }).click();
await page.locator("text=Đã ghi nhận").waitFor();
console.log("[ok] FR-C04: self-assessment recorded");

// FR-C08: the banner only makes sense when the unfinished session is NOT
// today's target (that case is already covered by the main card) — so open
// a *different*, later session without assessing it, then check home shows
// a resume banner pointing at that specific session, distinct from the
// (now-different) "hôm nay" card.
await page.getByRole("button", { name: "← Lộ trình học" }).click();
const sessionLinks = page.locator('main ul[role="list"] a');
const laterSessionText = await sessionLinks.nth(2).innerText();
await sessionLinks.nth(2).click();
await page.locator("main").getByRole("button", { name: "Bắt đầu buổi học" }).waitFor();

await page.goto(BASE_URL);
await page.locator("text=Quay lại buổi học đang dở").waitFor({ timeout: 5000 });
const resumeText = await page.locator("main").innerText();
const laterSessionTitle = laterSessionText.split("\n")[1]; // icon line, title line, date line
if (!resumeText.includes(laterSessionTitle)) {
  throw new Error(
    `Expected the resume banner to reference the specific unfinished session ("${laterSessionTitle}"). Got:\n${resumeText}`,
  );
}
console.log("[ok] FR-C08: resume banner shown for an unfinished session distinct from today's target");

await page.goto(BASE_URL);
await page.locator("text=Quay lại buổi học đang dở").waitFor({ state: "hidden", timeout: 3000 }).catch(() => {});
const homeText = await page.locator("main").innerText();
if (!/1\/\d+ buổi/.test(homeText)) {
  throw new Error(`Expected progress "1/N buổi" on the home card after self-assessing. Got:\n${homeText}`);
}
console.log("[ok] FR-C02: overall progress updated after completing a session");

// FR-C06: changing the exam date regenerates the schedule (compression path).
await page.getByRole("link", { name: "Xem toàn bộ lộ trình" }).click();
await page.getByText("Cài đặt lộ trình").click();
const soon = new Date();
soon.setDate(soon.getDate() + 10);
await page.locator('input[type="date"]').fill(soon.toISOString().slice(0, 10));
await page.locator("main").getByText(/rút gọn|không đủ/).first().waitFor({ timeout: 5000 });
console.log("[ok] FR-C06: setting a near exam date triggers compression/warning");

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
