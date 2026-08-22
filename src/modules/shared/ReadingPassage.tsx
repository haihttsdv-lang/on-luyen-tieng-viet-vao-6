import { contentStore } from "@/data-access";

interface Props {
  passageId: string;
}

// FR-DH (Mục 5.11): renders the shared reading passage above a question
// that references it via Exercise.passageId — no-op (returns null) if the
// id doesn't resolve, so a bad reference fails visibly in content-schema
// tests rather than silently hiding the passage at runtime.
export default function ReadingPassage({ passageId }: Props) {
  const passage = contentStore.getPassage(passageId);
  if (!passage) return null;

  return (
    <div className="mb-4 rounded-xl border border-brand-200 bg-brand-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Bài đọc</p>
      <p className="mt-1 font-semibold text-slate-900">{passage.title}</p>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{passage.text}</p>
    </div>
  );
}
