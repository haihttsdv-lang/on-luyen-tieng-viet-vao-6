// Single source of truth for navigation, rendered in both the desktop bar
// and the mobile bottom tab bar (UX-01→03) — same array, two layouts, so a
// test can target either by its `role="navigation"` name without the two
// bars drifting out of sync.
export interface NavItem {
  to: string;
  label: string;
  shortLabel: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Trang chủ", shortLabel: "Trang chủ", icon: "🏠" },
  { to: "/ly-thuyet", label: "Lý thuyết", shortLabel: "Lý thuyết", icon: "📘" },
  { to: "/luyen-tap", label: "Luyện tập", shortLabel: "Luyện tập", icon: "✏️" },
  { to: "/thi-thu", label: "Thi thử", shortLabel: "Thi thử", icon: "⏱️" },
  { to: "/lo-trinh", label: "Lộ trình học", shortLabel: "Lộ trình", icon: "🗺️" },
  { to: "/ho-so", label: "Hồ sơ", shortLabel: "Hồ sơ", icon: "👤" },
];
