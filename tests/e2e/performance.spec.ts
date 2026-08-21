import { expect, test } from "@playwright/test";

// FR-A18: thời gian hiển thị nội dung đầu tiên dưới 3 giây trên mạng 4G mô
// phỏng. Uses CDP to actually throttle the network (typical 4G: ~4Mbps
// down, ~3Mbps up, ~20ms RTT) rather than trusting bundle size alone.
test("first content paint is under 3s on simulated 4G (FR-A18)", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "Network emulation via CDP is Chromium-only");

  const client = await page.context().newCDPSession(page);
  await client.send("Network.enable");
  await client.send("Network.emulateNetworkConditions", {
    offline: false,
    downloadThroughput: (4 * 1024 * 1024) / 8, // 4 Mbps
    uploadThroughput: (3 * 1024 * 1024) / 8,
    latency: 20,
  });

  const start = Date.now();
  await page.goto("/");
  await page.locator("main").getByRole("heading", { name: "Trang chủ" }).waitFor();
  const elapsedMs = Date.now() - start;

  console.log(`First content visible after ${elapsedMs}ms on simulated 4G`);
  expect(elapsedMs).toBeLessThan(3000);
});
