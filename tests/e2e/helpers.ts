import type { Page } from "@playwright/test";

// Every nav item exists twice in the DOM (Layout.tsx: "Điều hướng chính" —
// desktop horizontal bar, hidden below `sm:`; "Điều hướng nhanh" — mobile
// bottom tab bar, hidden at/above `sm:`). Which one is actually clickable
// depends on the project's viewport (desktop-chromium vs android-pixel7),
// so tests must pick whichever is visible rather than hardcoding one.
export async function clickNavItem(page: Page, label: string): Promise<void> {
  const desktop = page.getByRole("navigation", { name: "Điều hướng chính" }).getByText(label);
  const target = (await desktop.isVisible().catch(() => false))
    ? desktop
    : page.getByRole("navigation", { name: "Điều hướng nhanh" }).getByText(label);
  await target.click();
}
