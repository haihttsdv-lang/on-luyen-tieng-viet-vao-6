// One-off manual smoke test for the Thi thử module (Giai đoạn 5). Exit
// criterion in Mục 18.2: "Thi thử được cả 4 cấu hình; hết giờ tự nộp đúng."
// Uses Playwright's clock API to fast-forward time instead of actually
// waiting out a real countdown.
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:4173";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.clock.install();
await page.goto(BASE_URL);

await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Thi thử").click();
await page.locator("main").getByRole("heading", { name: "Thi thử" }).waitFor();
console.log("[ok] config picker loaded");

// FR-T01: all 4 declared configs are listed and selectable.
for (const label of ["Archimedes", "Nguyễn Tất Thành", "Cầu Giấy", "Lương Thế Vinh"]) {
  await page.getByRole("button", { name: new RegExp(label) }).waitFor();
}
console.log("[ok] FR-T01: all 4 exam configs are listed");

// --- Custom exam (FR-T09): full manual flow, no feedback during the exam (FR-T05). ---
for (const group of ["NT", "CA", "CD"]) {
  await page.getByRole("button", { name: group, exact: true }).click();
}
await page.locator('input[type="number"]').first().fill("3"); // số câu
await page.locator('input[type="number"]').nth(1).fill("5"); // thời gian (phút) — UI minimum
await page.getByRole("button", { name: "Bắt đầu đề tùy chỉnh" }).click();

await page.locator("text=Đã làm").waitFor();
console.log("[ok] FR-T09: custom exam started");

// FR-T04: question nav grid present.
const navButtons = page.locator("main button.h-9.w-9");
const questionCount = await navButtons.count();
if (questionCount === 0) throw new Error("Expected the question-number nav grid to render");
console.log(`[ok] FR-T04: question nav grid shows ${questionCount} questions`);

// Answer the current question — whatever type it happens to be (order can
// randomize to any of mcq/match/order/fill) — and confirm FR-T05: no
// correctness feedback appears.
await answerCurrentExamQuestion(page);
const afterAnswerText = await page.locator("main").innerText();
if (/Chính xác|Chưa đúng/.test(afterAnswerText)) {
  throw new Error("FR-T05 violation: correctness feedback leaked during the exam");
}
console.log("[ok] FR-T05: no correctness feedback shown while answering");

async function answerCurrentExamQuestion(p) {
  const scope = p.locator('[data-testid="exam-answer-input"]');
  const listButton = scope.locator('ul[role="list"] button').first();
  if (await listButton.count()) {
    await listButton.click();
    return;
  }
  const textInput = scope.locator('input[type="text"]').first();
  if (await textInput.count()) {
    await textInput.fill("test");
    return;
  }
  const textarea = scope.locator("textarea").first();
  if (await textarea.count()) {
    await textarea.fill("test");
    return;
  }
  const plainButton = scope.locator("button").first();
  if (await plainButton.count()) {
    await plainButton.click();
    return;
  }
  throw new Error("No recognizable answer input found for the current exam question");
}

// Manual submit via the exit-confirm dialog.
await page.getByRole("button", { name: "Nộp bài" }).first().click();
await page.locator("text=Nộp bài thi?").waitFor();
await page.getByRole("button", { name: "Nộp bài" }).last().click();

await page.locator("main").getByRole("heading", { name: /Kết quả/ }).waitFor();
console.log("[ok] manual submit reached the results page (FR-T06/T07)");

const resultsText = await page.locator("main").innerText();
if (!resultsText.includes("Điểm tự động") || !resultsText.includes("Điểm tự chấm")) {
  throw new Error("Expected autoScore and selfScore to be shown separately (FR-T07)");
}
console.log("[ok] FR-T07: autoScore and selfScore shown separately");

await page.getByRole("button", { name: "Lưu kết quả vào lịch sử" }).click();
await page.locator("text=Đã lưu vào lịch sử").waitFor();
await page.getByRole("button", { name: "Về trang Thi thử" }).click();
await page.getByRole("button", { name: "Lịch sử thi thử" }).click();
await page.locator("main").getByRole("heading", { name: "Lịch sử thi thử" }).waitFor();
const historyText = await page.locator("main").innerText();
if (!historyText.includes("Đề tùy chỉnh")) {
  throw new Error("Expected the saved custom exam to appear in history (FR-T08)");
}
console.log("[ok] FR-T08: result saved and visible in history");

// --- LTV_MCQ25: auto-submit when time runs out. ---
await page.getByRole("button", { name: "Thi thử" }).click();
await page.getByRole("button", { name: /Lương Thế Vinh/ }).click();
await page.locator("text=Đã làm").waitFor();
console.log("[ok] LTV_MCQ25 exam started");

// Answer the first question with its KNOWN-correct option before time runs
// out — this is what actually exercises the fix for a real bug found
// earlier: the auto-submit timer's closure was capturing `answers` as it
// was at mount (empty), so a timeout would silently discard everything the
// student had answered. LTV_MCQ25 only draws from these 5 known mcq items,
// and the exam order is randomized, so match by option text, not position.
const knownCorrectOptions = [
  "siêng năng",
  "buồn bã",
  "Ai làm gì?",
  "Bạn Nam là học sinh giỏi.",
  "Long lanh",
];
let matched = false;
for (const text of knownCorrectOptions) {
  const btn = page.locator('[data-testid="exam-answer-input"] button', { hasText: text });
  if (await btn.count()) {
    await btn.first().click();
    matched = true;
    break;
  }
}
if (!matched) throw new Error("Could not find a known-answer option on the first LTV_MCQ25 question");

// runFor (not fastForward) actually replays each pending 1-second interval
// tick, which is what the countdown's setInterval(…, 1000) needs to
// decrement all the way to zero.
await page.clock.runFor("26:00"); // config duration is 25 minutes
await page.locator("main").getByRole("heading", { name: /Kết quả/ }).waitFor({ timeout: 5000 });
console.log("[ok] hết giờ tự nộp đúng: auto-submitted when the countdown reached zero");

const autoScoreText = await page.locator("main").innerText();
// ScoreTile renders the value above the label, so the DOM/text order is
// "N/M" followed by "Điểm tự động", not the other way around.
const scoreMatch = autoScoreText.match(/(\d+)\/(\d+)\s*\n?\s*Điểm tự động/);
if (!scoreMatch || scoreMatch[1] === "0") {
  console.log(autoScoreText.split("\n").slice(0, 6).join(" | "));
  throw new Error(
    "Expected the pre-timeout correct answer to survive auto-submit (regression: stale closure bug would show 0 here)",
  );
}
console.log(`[ok] answer given before timeout was preserved through auto-submit (${scoreMatch[1]}/${scoreMatch[2]})`);

if (errors.length > 0) {
  console.error("Console/page errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page errors");
}

await browser.close();
