import { Link } from "react-router-dom";
import { computeAllTopicSnapshots, computeRecommendations } from "@/modules/profile/profileService";
import RadarChart from "@/modules/profile/RadarChart";
import MasteryTileGrid from "@/modules/profile/MasteryTileGrid";
import RecommendationsCard from "@/modules/profile/RecommendationsCard";
import BackupSection from "@/modules/profile/BackupSection";
import SyncSection from "@/modules/profile/SyncSection";
import BadgeShelf from "@/modules/profile/BadgeShelf";
import SoundToggle from "@/modules/profile/SoundToggle";
import InstallPrompt from "@/modules/profile/InstallPrompt";
import type { TopicGroup } from "@/data-access/types";

function averageScoreByGroup(snapshots: ReturnType<typeof computeAllTopicSnapshots>) {
  const byGroup = new Map<TopicGroup, number[]>();
  for (const s of snapshots) {
    const value = s.isActivityBased ? s.activity!.ratio : (s.mastery!.score ?? undefined);
    if (value === undefined) continue;
    const list = byGroup.get(s.group) ?? [];
    list.push(value);
    byGroup.set(s.group, list);
  }
  const result: Partial<Record<TopicGroup, number>> = {};
  for (const [group, values] of byGroup) {
    result[group] = values.reduce((a, b) => a + b, 0) / values.length;
  }
  return result;
}

export default function ProfileHome() {
  const snapshots = computeAllTopicSnapshots();
  const recommendations = computeRecommendations(snapshots);
  const scoresByGroup = averageScoreByGroup(snapshots);

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-900">Hồ sơ</h1>
        <Link to="/ho-so/phu-huynh" className="text-sm font-medium text-brand-700 underline">
          Xem theo phụ huynh
        </Link>
      </div>

      <div className="mt-4">
        <InstallPrompt />
      </div>

      <div className="mt-4">
        <BadgeShelf />
      </div>

      <h2 className="mt-6 text-base font-semibold text-slate-900">Gợi ý học tiếp</h2>
      <div className="mt-2">
        <RecommendationsCard recommendations={recommendations} />
      </div>

      <h2 className="mt-6 text-base font-semibold text-slate-900">Bản đồ năng lực</h2>
      <div className="mt-2 rounded-xl border border-slate-200 bg-white p-4">
        <RadarChart scoresByGroup={scoresByGroup} />
      </div>
      <div className="mt-3">
        <MasteryTileGrid snapshots={snapshots} />
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <SoundToggle />
        <SyncSection />
        <BackupSection />
      </div>
    </section>
  );
}
