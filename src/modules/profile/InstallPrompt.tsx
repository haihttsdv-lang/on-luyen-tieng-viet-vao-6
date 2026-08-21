import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

// FR-A03: lời nhắc "Thêm vào màn hình chính" kín đáo ở trang Hồ sơ — không
// phải popup chặn màn hình lúc mới mở app. Chrome/Android only fires
// beforeinstallprompt when installable and not already installed; iOS
// Safari has no such event (Add to Home Screen is manual there), so this
// component simply renders nothing on browsers that never fire it.
export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(
    () => window.matchMedia?.("(display-mode: standalone)").matches ?? false,
  );

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed || !deferredPrompt) return null;

  async function install() {
    await deferredPrompt?.prompt();
    await deferredPrompt?.userChoice;
    setDeferredPrompt(null);
  }

  return (
    <button
      type="button"
      onClick={install}
      className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700"
    >
      📲 Thêm vào màn hình chính
    </button>
  );
}
