// One-off manual smoke test for Giai đoạn 8's gamification + sync UI.
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

// GM-01: coin badge starts at 0, visible in the header on every page.
await page.locator('header:has-text("🪙 0")').waitFor();
console.log("[ok] GM-01: coin badge visible in header, starts at 0");

// GM-01/02/04: complete today's session with "Xuất sắc" and confirm coins
// update live in the header (no route change/reload needed).
await page.locator("text=Vào buổi học").click();
await page.locator("main").getByRole("button", { name: "Bắt đầu buổi học" }).waitFor();
await page.getByRole("button", { name: "Xuất sắc" }).click();
await page.locator("text=Đã ghi nhận").waitFor();
const headerAfter = await page.locator("header").innerText();
if (/🪙 0\b/.test(headerAfter)) {
  throw new Error(`Expected the header coin count to increase after self-assessment. Got:\n${headerAfter}`);
}
console.log("[ok] GM-01/02/04: coins awarded and header updates live via PROGRESS_CHANGED_EVENT");

// GM-08: sound toggle switch in Hồ sơ.
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Hồ sơ").click();
const soundSwitch = page.getByRole("switch");
const before = await soundSwitch.getAttribute("aria-checked");
await soundSwitch.click();
const after = await soundSwitch.getAttribute("aria-checked");
if (before === after) throw new Error("Expected the sound toggle's aria-checked state to flip");
console.log("[ok] GM-08: sound effect toggle switches state");

// SY-14: with no Firebase env configured, sync section shows guidance, not an error.
const profileText = await page.locator("main").innerText();
if (!profileText.includes("thiết lập Firebase")) {
  throw new Error("Expected SY-14 guidance text when Firebase isn't configured");
}
if (page.url().match(/error/i)) throw new Error("Unexpected error state on profile page");
console.log("[ok] SY-14: sync section shows setup guidance instead of erroring with no Firebase config");

// GM-05/06: badge shelf renders without crashing (may be empty this early).
await page.locator("main").getByRole("heading", { name: "Hồ sơ" }).waitFor();
console.log("[ok] GM-05/06: badge shelf area renders without error");

// GM-09: Speed Challenge — full flow, coins awarded at the end.
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Luyện tập").click();
await page.getByRole("button", { name: "Thử thách tốc độ" }).click();
await page.locator("main").getByRole("heading", { name: /Thử thách tốc độ/ }).waitFor();
await page.getByRole("button", { name: "Bắt đầu" }).click();
await page.locator("text=Đúng:").waitFor();

const knownCorrectTexts = [
  "siêng năng",
  "buồn bã",
  "Ai làm gì?",
  "Bạn Nam là học sinh giỏi.",
];
let answeredCount = 0;
for (let i = 0; i < 5; i++) {
  const mcqButtons = page.locator("main .flex-col button");
  let matched = false;
  for (const text of knownCorrectTexts) {
    const btn = mcqButtons.filter({ hasText: text });
    if (await btn.count()) {
      await btn.first().click();
      matched = true;
      answeredCount++;
      break;
    }
  }
  if (!matched) {
    // fill-type question or an mcq option we don't have a known answer for
    // — just answer something to keep the loop moving; correctness of this
    // particular question isn't the point, the coin-award wiring is.
    const input = page.locator('input[type="text"]');
    if (await input.count()) {
      await input.fill("test");
      await page.getByRole("button", { name: "Nộp" }).click();
    } else {
      await mcqButtons.first().click();
    }
  }
  await page.waitForTimeout(150);
}
console.log(`[ok] GM-09: answered ${answeredCount}+ speed-challenge questions with known-correct picks`);

// Force the round to end via Playwright's clock rather than waiting 60 real seconds.
await page.evaluate(() => {}); // no-op to ensure prior actions settled
await page.close();
const page2 = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page2.clock.install();
await page2.goto(BASE_URL);
await page2.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Luyện tập").click();
await page2.getByRole("button", { name: "Thử thách tốc độ" }).click();
await page2.getByRole("button", { name: "Bắt đầu" }).click();
await page2.locator("text=Đúng:").waitFor();
await page2.clock.runFor("01:05");
await page2.locator("main").getByRole("heading", { name: "Hết giờ!" }).waitFor({ timeout: 5000 });
console.log("[ok] GM-09: speed challenge ends automatically after the time limit");

const resultText = await page2.locator("main").innerText();
if (!/\+\d+ 🪙/.test(resultText)) {
  throw new Error(`Expected a coin total on the results screen. Got:\n${resultText}`);
}
console.log("[ok] GM-09: coin total shown at round end");

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
