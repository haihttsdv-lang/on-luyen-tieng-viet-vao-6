import { expect, test } from "@playwright/test";
import { clickNavItem } from "./helpers";

// FR-A02: service worker phải cache đủ để dùng được khi mất mạng. Verifies
// this for real — loads online once (so the SW can install + precache),
// then goes offline and confirms the app still works, not just that a
// service worker file exists.
test("app works offline after the service worker has installed (FR-A02)", async ({ page, context }) => {
  await page.goto("/");
  await page.locator("main").getByRole("heading", { name: "Trang chủ" }).waitFor();

  // Wait for the SW to actually finish installing and take control —
  // registration existing isn't enough; `navigator.serviceWorker.ready`
  // resolves once it's active.
  await page.waitForFunction(() => navigator.serviceWorker?.ready.then(() => true), null, { timeout: 15000 });
  await page.waitForTimeout(500); // let precaching settle after activation

  await context.setOffline(true);
  try {
    await page.reload();
    await expect(page.locator("main").getByRole("heading", { name: "Trang chủ" })).toBeVisible({ timeout: 10000 });

    // Core navigation must still work fully offline, not just the shell.
    await clickNavItem(page, "Lý thuyết");
    await expect(page.locator("main").getByRole("heading", { name: "Lý thuyết" })).toBeVisible();
    await clickNavItem(page, "Luyện tập");
    await expect(page.locator("main").getByText("Chọn một hoặc nhiều chuyên đề")).toBeVisible();
  } finally {
    await context.setOffline(false);
  }
});
