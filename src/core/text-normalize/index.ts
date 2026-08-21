// Pure text-comparison logic for Vietnamese answers. No DOM, no network,
// no React — per architecture rule in Mục 16.2, this module is testable in
// isolation and is the prerequisite for everything in core/answer-checker.
//
// FR-M09 note: IME composition (Telex/VNI, compositionstart/update/end) is a
// browser input concern handled by input components (FR-A05), not here. By
// the time a string reaches this module it is a finished, composed value —
// this module only has to treat the *result* correctly, regardless of which
// method produced it.

export interface NormalizeOptions {
  /** FR-M05: exact-match mode for chính tả (CD) exercises — skips case
   * folding, whitespace collapsing, and tone-mark-placement canonicalization.
   * Only NFC composition and outer-whitespace trimming still apply, since
   * those are encoding artifacts, not answer content. */
  strictMode?: boolean;
}

const TONE_MARKS = new Set([
  "̀", // huyền – grave
  "́", // sắc – acute
  "̃", // ngã – tilde
  "̉", // hỏi – hook above
  "̣", // nặng – dot below
]);

// Circumflex/breve/horn are part of a letter's identity (â, ê, ô, ă, ơ, ư),
// never a tone — they must stay attached to their base letter and are never
// moved.
const LETTER_MODIFIER_MARKS = new Set([
  "̂", // circumflex
  "̆", // breve
  "̛", // horn
]);

const VOWEL_BASES = new Set(["a", "e", "i", "o", "u", "y"]);

interface Cluster {
  base: string;
  modifiers: string[];
  tone: string | null;
}

function isCombiningMark(ch: string): boolean {
  return TONE_MARKS.has(ch) || LETTER_MODIFIER_MARKS.has(ch);
}

function toClusters(nfdToken: string): Cluster[] {
  const clusters: Cluster[] = [];
  for (const ch of nfdToken) {
    if (isCombiningMark(ch) && clusters.length > 0) {
      const current = clusters[clusters.length - 1];
      if (TONE_MARKS.has(ch)) {
        current.tone = ch;
      } else {
        current.modifiers.push(ch);
      }
    } else {
      clusters.push({ base: ch, modifiers: [], tone: null });
    }
  }
  return clusters;
}

function clustersToString(clusters: Cluster[]): string {
  return clusters
    .map((c) => c.base + c.modifiers.join("") + (c.tone ?? ""))
    .join("");
}

/**
 * FR-M02: two tone-mark placement conventions are both valid for open rimes
 * like "oa"/"oe"/"uy" (hoà = hòa, thuý = thúy, loà = lòa). Rather than
 * hardcode word pairs, this canonicalizes by stripping each syllable's tone
 * mark and reattaching it to the syllable's last vowel letter — a
 * deterministic rule that makes both spelling conventions collapse to the
 * same string, whichever one a given word happens to already use.
 */
export function canonicalizeToneMarks(input: string): string {
  const tokens = input.split(/(\s+)/); // keep separators so we can rejoin
  const result = tokens.map((token) => {
    if (/^\s+$/.test(token) || token.length === 0) return token;

    const nfd = token.normalize("NFD");
    const clusters = toClusters(nfd);

    let tone: string | null = null;
    for (const c of clusters) {
      if (c.tone) {
        tone = c.tone;
        c.tone = null;
        break; // a syllable carries at most one tone mark
      }
    }

    if (tone) {
      let lastVowelIdx = -1;
      for (let i = 0; i < clusters.length; i++) {
        if (VOWEL_BASES.has(clusters[i].base.toLowerCase())) lastVowelIdx = i;
      }
      if (lastVowelIdx >= 0) clusters[lastVowelIdx].tone = tone;
    }

    return clustersToString(clusters).normalize("NFC");
  });

  return result.join("");
}

function collapseWhitespace(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

// FR-M04: a trailing full stop, comma, or similar shouldn't fail a
// word/phrase answer.
const TRAILING_PUNCTUATION = /[.,!?;:…]+$/;

function stripTrailingPunctuation(input: string): string {
  return input.replace(TRAILING_PUNCTUATION, "");
}

/**
 * The single entry point every answer-comparison in the app should go
 * through. Always applies FR-M01 (NFC). In non-strict mode also applies
 * FR-M02 (tone-style equivalence), FR-M03 (case/whitespace), and FR-M04
 * (trailing punctuation). In strict mode (FR-M05) only NFC + outer-trim
 * apply, so chính tả exercises test the exact spelling being taught.
 */
export function normalizeForComparison(
  input: string,
  options: NormalizeOptions = {},
): string {
  const nfc = input.normalize("NFC");

  if (options.strictMode) {
    return nfc.trim();
  }

  const toneCanonical = canonicalizeToneMarks(nfc);
  const lowered = toneCanonical.toLowerCase();
  const whitespaceCollapsed = collapseWhitespace(lowered);
  return stripTrailingPunctuation(whitespaceCollapsed);
}

export function textsEqual(
  a: string,
  b: string,
  options: NormalizeOptions = {},
): boolean {
  return (
    normalizeForComparison(a, options) === normalizeForComparison(b, options)
  );
}
