import { describe, expect, it } from "vitest";
import { countSentences, countWords } from "@/core/writing-stats";

describe("countWords", () => {
  it("counts space-separated tokens", () => {
    expect(countWords("Em rất thích mùa thu.")).toBe(5);
  });
  it("returns 0 for empty or whitespace-only text", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   \n  ")).toBe(0);
  });
  it("collapses multiple spaces/newlines between words", () => {
    expect(countWords("Một   hai\nba")).toBe(3);
  });
});

describe("countSentences", () => {
  it("counts sentences split by ./!/?/…", () => {
    expect(countSentences("Trời đẹp quá! Em rất vui. Em sẽ đi đâu nhỉ?")).toBe(3);
  });
  it("ignores trailing punctuation with no following content", () => {
    expect(countSentences("Một câu duy nhất.")).toBe(1);
  });
  it("returns 0 for empty text", () => {
    expect(countSentences("")).toBe(0);
  });
});
