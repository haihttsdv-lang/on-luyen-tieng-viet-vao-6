import { contentStore } from "@/data-access";
import type { ScheduledSession } from "@/data-access/types";

export interface SessionDestination {
  to: string;
  state?: unknown;
}

// FR-C03: mỗi khối bấm vào đi thẳng tới đúng nội dung.
export function destinationFor(session: ScheduledSession): SessionDestination {
  switch (session.type) {
    case "lesson":
      return { to: `/ly-thuyet/${session.topicIds?.[0] ?? ""}` };
    case "practice":
      if (session.topicIds && session.topicIds.length > 0) {
        return { to: `/luyen-tap/lam-bai?topics=${session.topicIds.join(",")}` };
      }
      // Phase 3 "luyện chuyên sâu chuyên đề yếu nhất": which topic is
      // weakest needs mastery data (Giai đoạn 7) — for now, send the
      // student to pick manually rather than guessing.
      return { to: "/luyen-tap" };
    case "error-review":
      return { to: "/luyen-tap/so-loi" };
    case "mock-test":
    case "weekly-check":
    case "monthly-check": {
      const config = session.testConfigId ? contentStore.getTestConfig(session.testConfigId) : undefined;
      if (!config) return { to: "/thi-thu" };
      return { to: "/thi-thu/lam-bai", state: { config } };
    }
    default:
      return { to: "/lo-trinh" };
  }
}
