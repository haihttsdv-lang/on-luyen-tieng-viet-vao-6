// Pure text statistics for the writing editor (FR-W01). No DOM, no network.

/** Counts space-separated tokens — the conventional word-count unit for
 * Vietnamese text input, same as any word processor. */
export function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;
  return trimmed.split(/\s+/).length;
}

/** Counts segments ending in ., !, ?, or … — a simple heuristic, not a full
 * sentence parser (abbreviations aren't special-cased). */
export function countSentences(text: string): number {
  const segments = text.split(/[.!?…]+/).map((s) => s.trim());
  return segments.filter((s) => s.length > 0).length;
}
