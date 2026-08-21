// One-off verification that the gh-pages build actually works when served
// from a subpath (simulating github.io/<repo>/) — not just that it builds.
// Run: node scripts/serve-subpath.mjs (separately, port 4899), then this.
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:4899/on-luyen-tieng-viet-vao-6/";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("requestfailed", (req) => errors.push(`${req.url()} — ${req.failure()?.errorText}`));

await page.goto(BASE_URL);
await page.locator("main").getByRole("heading", { name: "Trang chủ" }).waitFor();
console.log("[ok] app loads from subpath, home page renders");

// HashRouter legitimately shows no "#" at the bare root route — it only
// appears once you actually navigate somewhere. Check post-navigation.
await page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText("Luyện tập").click();
await page.locator("main").getByText("Chọn một hoặc nhiều chuyên đề").waitFor();
const deepUrl = page.url();
if (!deepUrl.includes("#/luyen-tap")) {
  throw new Error(`Expected HashRouter (URL should contain #/luyen-tap), got: ${deepUrl}`);
}
console.log(`[ok] HashRouter in effect after navigation: ${deepUrl}`);

// The real test: reload on a deep route. Under BrowserRouter this would 404
// on GitHub Pages (no server-side rewrite); HashRouter must survive it,
// since the server only ever sees a request for the base index.html.
await page.reload();
await page.locator("main").getByText("Chọn một hoặc nhiều chuyên đề").waitFor({ timeout: 5000 });
console.log("[ok] hard reload on a deep route survives (no 404 — the actual gh-pages risk)");

if (errors.length > 0) {
  console.error("Console/page/request errors detected:");
  for (const e of errors) console.error(" -", e);
  process.exitCode = 1;
} else {
  console.log("[ok] no console/page/request errors");
}

await browser.close();
