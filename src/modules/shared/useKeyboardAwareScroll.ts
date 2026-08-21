import { useEffect } from "react";

// FR-A04: bàn phím ảo không được che ô đang nhập. Dùng visualViewport để
// phát hiện thay đổi chiều cao (KHÔNG dùng window.innerHeight, vốn không
// cập nhật đúng khi bàn phím Android mở/đóng) — khi ô đang focus bị đẩy ra
// ngoài vùng nhìn thấy, cuộn nó trở lại.
export function useKeyboardAwareScroll(): void {
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    function handleResize() {
      const active = document.activeElement;
      const isTextInput =
        active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement;
      if (!isTextInput || !vv) return;

      const rect = active.getBoundingClientRect();
      const visibleTop = vv.offsetTop;
      const visibleBottom = vv.offsetTop + vv.height;
      if (rect.top < visibleTop || rect.bottom > visibleBottom) {
        active.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }

    vv.addEventListener("resize", handleResize);
    return () => vv.removeEventListener("resize", handleResize);
  }, []);
}
