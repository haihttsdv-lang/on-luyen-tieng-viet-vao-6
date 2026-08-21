import { useEffect, useState } from "react";
import { progressStore, writingStore } from "@/data-access";
import { computeEarnedBadges, type Badge } from "@/core/rewards";

// GM-05/06: tủ huy hiệu — chỉ hiện huy hiệu đã đạt (theo bài học từ ứng
// dụng tham chiếu: ẩn hẳn đơn giản hơn hiện mờ, xem docs/reference-app-notes.md).
// "Đọc hiểu 20 văn bản" luôn 0 ở bản này — chưa có hạ tầng Passage/DH content
// để đếm lượt đọc (Giai đoạn 9).
export default function BadgeShelf() {
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    writingStore.getSubmittedWritings().then((writings) => {
      const schedule = progressStore.getSchedule();
      const boundaries: Array<{ phase: 1 | 2 | 3; startIndex: number; endIndex: number }> = [];
      for (const phase of [1, 2, 3] as const) {
        const indices = schedule.map((s, i) => (s.phase === phase ? i : -1)).filter((i) => i >= 0);
        if (indices.length > 0) boundaries.push({ phase, startIndex: indices[0], endIndex: indices[indices.length - 1] });
      }
      setBadges(
        computeEarnedBadges({
          phaseBoundaries: boundaries,
          sessions: schedule,
          outcomes: progressStore.getSessionOutcomes(),
          testResults: progressStore.getTestResults(),
          writingsSubmittedCount: writings.length,
          passagesReadCount: 0,
        }),
      );
    });
  }, []);

  if (badges.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2" role="list">
      {badges.map((b) => (
        <li
          key={b.id}
          title={b.label}
          className="flex items-center gap-1.5 rounded-full border-2 border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800"
        >
          <span aria-hidden="true">{b.icon}</span>
          {b.label}
        </li>
      ))}
    </ul>
  );
}
