import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NAV_ITEMS } from "@/app/nav-items";
import { progressStore } from "@/data-access";
import { getSyncCode, isCloudSyncAvailable, PROGRESS_CHANGED_EVENT } from "@/data-access/cloud/syncMeta";
import { useKeyboardAwareScroll } from "@/modules/shared/useKeyboardAwareScroll";

const linkBase =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors";
const linkActive = "bg-brand-100 text-brand-700";
const linkInactive = "text-slate-600 hover:bg-slate-100";

// UX-01/02: horizontal nav from `sm:` up; fixed bottom tab bar below that.
// UX-03: both bars are landmarks with distinct accessible names so tests can
// target either one even though every item appears twice.
export default function Layout() {
  const [coins, setCoins] = useState(() => progressStore.getCoins());
  useKeyboardAwareScroll();

  // GM-01: coin badge stays live across the whole app without a route
  // change, whenever anything (session outcome, remote sync pull) changes it.
  useEffect(() => {
    const refresh = () => setCoins(progressStore.getCoins());
    window.addEventListener(PROGRESS_CHANGED_EVENT, refresh);
    return () => window.removeEventListener(PROGRESS_CHANGED_EVENT, refresh);
  }, []);

  // SY-07: mở ứng dụng — nếu đã có mã đồng bộ, chạy 1 chu trình sync. Lazy
  // import so the ~550KB Firebase SDK never loads for students who haven't
  // turned sync on (SY-13).
  useEffect(() => {
    const code = getSyncCode();
    if (code && isCloudSyncAvailable()) {
      import("@/data-access/cloud/firebaseSync")
        .then((mod) => mod.initAutoSync(code))
        .catch(() => {});
    }
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-slate-50">
      <header
        className="no-print sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2 lg:py-3">
          <span className="shrink-0 truncate text-base font-semibold text-brand-700">
            Ôn Tiếng Việt vào 6
          </span>
          <span
            className="ml-auto mr-1 flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700 sm:ml-0"
            aria-label={`${coins} xu`}
          >
            🪙 {coins}
          </span>
          <nav
            aria-label="Điều hướng chính"
            className="hidden gap-1 sm:flex"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-20 pt-4 sm:pb-6">
        <Outlet />
      </main>

      <nav
        aria-label="Điều hướng nhanh"
        className="no-print fixed inset-x-0 bottom-0 z-20 flex border-t border-slate-200 bg-white sm:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 py-1.5 text-[11px] font-medium ${
                isActive ? "text-brand-700" : "text-slate-500"
              }`
            }
          >
            <span aria-hidden="true" className="text-base leading-none">
              {item.icon}
            </span>
            {item.shortLabel}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
