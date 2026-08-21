import { expect, test } from "@playwright/test";
import { clickNavItem } from "./helpers";

// Baseline navigation/rendering checks across both desktop and Android
// emulation projects (FR-A20) — the deeper functional flows are covered by
// tests/e2e/android.spec.ts and the scripts/smoke-test-*.mjs dev scripts.

test("home page loads and the today card renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main").getByRole("heading", { name: "Trang chủ" })).toBeVisible();
  await expect(page.getByText(/Buổi học hôm nay|Đang trễ lịch|Buổi học tiếp theo/)).toBeVisible();
});

test("all 6 nav destinations load without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("/");
  for (const label of ["Trang chủ", "Lý thuyết", "Luyện tập", "Thi thử", "Lộ trình", "Hồ sơ"]) {
    await clickNavItem(page, label);
    await page.waitForLoadState("networkidle");
  }
  expect(errors).toEqual([]);
});

test("PWA manifest is served and installable metadata is present", async ({ page, baseURL }) => {
  const response = await page.request.get(new URL("manifest.webmanifest", baseURL).toString());
  expect(response.ok()).toBe(true);
  const manifest = await response.json();
  expect(manifest.display).toBe("standalone");
  expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
});
