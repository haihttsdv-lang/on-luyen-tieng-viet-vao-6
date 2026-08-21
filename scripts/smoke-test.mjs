// One-off manual smoke test — not part of the Playwright test suite.
// Drives the built app through a real Chromium instance to sanity-check the
// Luyện tập flow (5 question types + sổ lỗi) end-to-end before reporting
// this stage done. Run against `npm run preview` on port 4173.
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:4173";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } }); // Pixel-ish mobile

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto(BASE_URL);
await page.locator("main").getByRole("heading", { name: "Trang chủ" }).waitFor();
console.log("[ok] home page loaded");

// Mobile viewport: the desktop horizontal nav is `hidden sm:flex`, so use
// the bottom tab bar instead.
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Luyện tập").click();
await page.locator("main").getByText("Chọn một hoặc nhiều chuyên đề").waitFor();
console.log("[ok] practice topic picker loaded");

// Select all 3 topics to exercise mcq/match/order/fill/short in one run.
for (const label of ["Từ đồng nghĩa", "Ai làm gì", "phụ âm đầu dễ lẫn"]) {
  await page.locator("label", { hasText: label }).locator("input[type=checkbox]").check();
}
await page.getByRole("button", { name: "Bắt đầu luyện tập" }).click();
await page.locator("main").getByText(/^Câu 1\//).waitFor();
console.log("[ok] exercise session started");

let questionCount = 0;
while (true) {
  questionCount++;
  const bodyText = await page.locator("main").innerText();

  if (bodyText.includes("Nộp câu trả lời") && (await page.locator("input[type=text]").count()) > 0) {
    // fill
    const inputs = page.locator("input[type=text]");
    for (let i = 0; i < (await inputs.count()); i++) {
      await inputs.nth(i).fill("test");
    }
    await page.getByRole("button", { name: "Nộp câu trả lời" }).click();
  } else if (await page.getByRole("button", { name: "Nộp bài" }).isVisible().catch(() => false)) {
    // match or order: just click enough pool/pair items to enable submit
    const isMatch = (await page.locator('ul[aria-label="Cột trái"]').count()) > 0;
    if (isMatch) {
      const lefts = page.locator('ul[aria-label="Cột trái"] button');
      const rights = page.locator('ul[aria-label="Cột phải"] button');
      const n = await lefts.count();
      for (let i = 0; i < n; i++) {
        await lefts.nth(i).click();
        await rights.nth(i).click();
      }
    } else {
      // order: click pool buttons in whatever order until submit enables
      while (!(await page.getByRole("button", { name: "Nộp bài" }).isEnabled())) {
        await page.locator('[data-testid="order-pool"] button').first().click();
      }
    }
    await page.getByRole("button", { name: "Nộp bài" }).click();
  } else if (await page.locator("textarea").isVisible().catch(() => false)) {
    // short
    await page.locator("textarea").fill("Bầu trời hôm nay có mây.");
    await page.getByRole("button", { name: "Kiểm tra gợi ý" }).click();
    await page.getByRole("button", { name: "Sai", exact: true }).click();
  } else {
    // mcq: click the first option
    await page.locator("main ul[role=list] button").first().click();
  }

  const nextBtn = page.getByRole("button", { name: /Câu tiếp theo|Xem kết quả/ });
  await nextBtn.waitFor({ timeout: 5000 });
  const label = await nextBtn.innerText();
  await nextBtn.click();
  if (label.includes("Xem kết quả")) break;
  if (questionCount > 20) throw new Error("Too many questions — possible infinite loop");
}

await page.locator("main").getByRole("heading", { name: "Kết quả luyện tập" }).waitFor();
console.log(`[ok] completed session of ${questionCount} questions, reached result page`);

await page.getByRole("button", { name: "Xem sổ lỗi" }).click();
await page.locator("main").getByRole("heading", { name: "Sổ lỗi" }).waitFor();
console.log("[ok] sổ lỗi page loaded");

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
