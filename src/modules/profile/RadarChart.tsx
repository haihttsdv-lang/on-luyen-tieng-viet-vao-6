import { GROUP_ORDER } from "@/content/groupLabels";
import type { TopicGroup } from "@/data-access/types";

interface Props {
  scoresByGroup: Partial<Record<TopicGroup, number>>; // 0–1, undefined = no data (plotted at center)
}

// FR-H05: biểu đồ radar theo 9 nhóm. Không dùng thư viện chart (FR-A17) —
// một polygon SVG nhỏ là đủ cho 9 trục.
export default function RadarChart({ scoresByGroup }: Props) {
  const size = 280;
  const center = size / 2;
  const maxRadius = size / 2 - 32;
  const groups = GROUP_ORDER;
  const angleFor = (i: number) => (2 * Math.PI * i) / groups.length - Math.PI / 2;

  const points = groups.map((g, i) => {
    const score = scoresByGroup[g] ?? 0;
    const angle = angleFor(i);
    const r = maxRadius * Math.max(0, Math.min(1, score));
    return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
  });
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");

  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto w-full max-w-xs" role="img" aria-label="Biểu đồ radar mức độ thành thạo theo 9 nhóm">
      {gridLevels.map((level) => (
        <polygon
          key={level}
          points={groups
            .map((_, i) => {
              const angle = angleFor(i);
              const r = maxRadius * level;
              return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
            })
            .join(" ")}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}
      {groups.map((g, i) => {
        const angle = angleFor(i);
        const labelR = maxRadius + 16;
        return (
          <text
            key={g}
            x={center + labelR * Math.cos(angle)}
            y={center + labelR * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fill="#475569"
          >
            {g}
          </text>
        );
      })}
      <polygon points={polygon} fill="#0d9488" fillOpacity="0.25" stroke="#0d9488" strokeWidth="2" />
    </svg>
  );
}
