import { describe, expect, it } from "vitest";
import {
  canonicalizeToneMarks,
  normalizeForComparison,
  textsEqual,
} from "@/core/text-normalize";

// FR-M02: at least 20 old-style/new-style tone-mark-placement pairs, all
// real, common Vietnamese words (not literary excerpts — plain vocabulary,
// so no copyright concern per Mục 10.1/FR-N03).
const TONE_STYLE_PAIRS: Array<[string, string, string]> = [
  ["hoà", "hòa", "huyền"],
  ["hoá", "hóa", "sắc"],
  ["hoả", "hỏa", "hỏi"],
  ["hoạ", "họa", "nặng"],
  ["toà", "tòa", "huyền"],
  ["khoá", "khóa", "sắc"],
  ["loà", "lòa", "huyền"],
  ["xoà", "xòa", "huyền"],
  ["toả", "tỏa", "hỏi"],
  ["xoá", "xóa", "sắc"],
  ["đoá", "đóa", "sắc"],
  ["khoẻ", "khỏe", "hỏi"],
  ["loè", "lòe", "huyền"],
  ["xoè", "xòe", "huyền"],
  ["toé", "tóe", "sắc"],
  ["hoè", "hòe", "huyền"],
  ["thuý", "thúy", "sắc"],
  ["huỷ", "hủy", "hỏi"],
  ["luỹ", "lũy", "ngã"],
  ["nguỵ", "ngụy", "nặng"],
  ["tuỷ", "tủy", "hỏi"],
];

describe("canonicalizeToneMarks (FR-M02)", () => {
  it("has at least 20 old/new tone-style pairs under test", () => {
    expect(TONE_STYLE_PAIRS.length).toBeGreaterThanOrEqual(20);
  });

  it.each(TONE_STYLE_PAIRS)(
    "treats %s and %s as the same tone (%s)",
    (oldStyle, newStyle) => {
      expect(canonicalizeToneMarks(oldStyle)).toBe(canonicalizeToneMarks(newStyle));
    },
  );

  it("is idempotent on words with no placement ambiguity", () => {
    expect(canonicalizeToneMarks("nghiêng")).toBe("nghiêng");
    expect(canonicalizeToneMarks("việt")).toBe("việt");
    expect(canonicalizeToneMarks("quý")).toBe("quý");
  });

  it("leaves words without any tone mark untouched", () => {
    expect(canonicalizeToneMarks("hoa")).toBe("hoa");
  });

  it("passes through non-Vietnamese tokens (numbers, punctuation) unchanged", () => {
    expect(canonicalizeToneMarks("123")).toBe("123");
    expect(canonicalizeToneMarks("!")).toBe("!");
  });

  it("preserves multi-word phrases and whitespace layout", () => {
    expect(canonicalizeToneMarks("hòa bình")).toBe("hoà bình");
    expect(canonicalizeToneMarks("thúy  và  huỷ")).toBe("thuý  và  huỷ");
  });
});

describe("normalizeForComparison — non-strict mode (FR-M01, M02, M03, M04)", () => {
  it("normalizes distinct Unicode encodings (NFC vs NFD) to the same string", () => {
    const nfc = "hòa".normalize("NFC");
    const nfd = "hòa".normalize("NFD");
    expect(nfc).not.toBe(nfd); // sanity: they really are different code points
    expect(normalizeForComparison(nfc)).toBe(normalizeForComparison(nfd));
  });

  it("ignores case differences", () => {
    expect(normalizeForComparison("Hòa Bình")).toBe(normalizeForComparison("hòa bình"));
  });

  it("trims and collapses internal whitespace", () => {
    expect(normalizeForComparison("  hòa   bình  ")).toBe("hoà bình");
    expect(normalizeForComparison("hòa    bình")).toBe(normalizeForComparison("hòa bình"));
  });

  it("accepts a trailing period as equivalent to no trailing punctuation", () => {
    expect(normalizeForComparison("hòa bình.")).toBe(normalizeForComparison("hòa bình"));
    expect(normalizeForComparison("hòa bình!")).toBe(normalizeForComparison("hòa bình"));
  });

  it("treats both tone-mark styles as equal end-to-end via textsEqual", () => {
    expect(textsEqual("hoà", "hòa")).toBe(true);
    expect(textsEqual("Thúy.", "thuý")).toBe(true);
  });
});

describe("normalizeForComparison — strict mode (FR-M05)", () => {
  it("does NOT ignore case", () => {
    expect(textsEqual("Hà Nội", "hà nội", { strictMode: true })).toBe(false);
  });

  it("does NOT canonicalize tone-mark placement", () => {
    expect(textsEqual("hoà", "hòa", { strictMode: true })).toBe(false);
  });

  it("does NOT collapse internal whitespace", () => {
    expect(textsEqual("hòa  bình", "hòa bình", { strictMode: true })).toBe(false);
  });

  it("still normalizes NFC vs NFD (encoding, not content)", () => {
    const nfc = "Hòa".normalize("NFC");
    const nfd = "Hòa".normalize("NFD");
    expect(textsEqual(nfc, nfd, { strictMode: true })).toBe(true);
  });

  it("still trims outer whitespace", () => {
    expect(textsEqual("  Hòa Bình  ", "Hòa Bình", { strictMode: true })).toBe(true);
  });
});
