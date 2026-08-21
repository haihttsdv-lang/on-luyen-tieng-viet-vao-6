import { describe, expect, it } from "vitest";
import {
  checkFillAnswer,
  checkMatchAnswer,
  checkMcqAnswer,
  checkOrderAnswer,
  suggestShortAnswerCheck,
  type FillAnswerSpec,
} from "@/core/answer-checker";

describe("checkFillAnswer — single value (FR-M06)", () => {
  const spec: FillAnswerSpec = {
    acceptedAnswers: ["hòa bình", "yên bình"],
    strictMode: false,
    isSet: false,
  };

  it("accepts any listed acceptedAnswer, tone-style-insensitively", () => {
    expect(checkFillAnswer("hoà bình", spec).status).toBe("correct");
    expect(checkFillAnswer("Yên Bình.", spec).status).toBe("correct");
  });

  it("rejects an answer not in the list", () => {
    expect(checkFillAnswer("chiến tranh", spec).status).toBe("incorrect");
  });

  it("FR-M08: treats empty input as invalid-format, not incorrect", () => {
    const result = checkFillAnswer("   ", spec);
    expect(result.status).toBe("invalid-format");
    expect(result.message).toBeTruthy();
  });
});

describe("checkFillAnswer — strict mode for chính tả (FR-M05)", () => {
  const strictSpec: FillAnswerSpec = {
    acceptedAnswers: ["Hà Nội"],
    strictMode: true,
    isSet: false,
  };

  it("requires exact case and exact tone-mark placement", () => {
    expect(checkFillAnswer("Hà Nội", strictSpec).status).toBe("correct");
    expect(checkFillAnswer("hà nội", strictSpec).status).toBe("incorrect");
  });
});

describe("checkFillAnswer — set/list answers (FR-M07)", () => {
  const setSpec: FillAnswerSpec = {
    acceptedAnswers: ["long lanh", "lấp lánh", "rực rỡ"],
    strictMode: false,
    isSet: true,
    expectedCount: 2,
  };

  it("is correct regardless of order, given the right count and all valid words", () => {
    expect(checkFillAnswer(["rực rỡ", "long lanh"], setSpec).status).toBe("correct");
    expect(checkFillAnswer(["Long Lanh", "Rực Rỡ"], setSpec).status).toBe("correct");
  });

  it("is incorrect if any word is not in the accepted list", () => {
    expect(checkFillAnswer(["long lanh", "xanh biếc"], setSpec).status).toBe("incorrect");
  });

  it("FR-M08: flags wrong count, blank entries, or duplicates as invalid-format", () => {
    expect(checkFillAnswer(["long lanh"], setSpec).status).toBe("invalid-format");
    expect(checkFillAnswer(["long lanh", ""], setSpec).status).toBe("invalid-format");
    expect(checkFillAnswer(["long lanh", "Long Lanh"], setSpec).status).toBe("invalid-format");
  });
});

describe("suggestShortAnswerCheck — bán tự động (Mục 10.2)", () => {
  it("reports matched and missing required keywords, tone-style-insensitively", () => {
    const result = suggestShortAnswerCheck("Biện pháp so sánh giúp câu văn sinh động hơn", {
      requiredKeywords: ["so sánh", "sinh động"],
    });
    expect(result.matchedKeywords).toEqual(["so sánh", "sinh động"]);
    expect(result.missingKeywords).toEqual([]);
    expect(result.suggestion).toBe("looks-complete");
  });

  it("flags missing keywords without asserting correct/incorrect (student self-confirms)", () => {
    const result = suggestShortAnswerCheck("Câu văn hay hơn", {
      requiredKeywords: ["so sánh", "nhân hóa"],
    });
    expect(result.missingKeywords).toEqual(["so sánh", "nhân hóa"]);
    expect(result.suggestion).toBe("looks-incomplete");
  });
});

describe("checkMcqAnswer / checkMatchAnswer / checkOrderAnswer (FR-P02)", () => {
  it("mcq: compares selected index against answerIndex", () => {
    expect(checkMcqAnswer(1, { answerIndex: 1 }).status).toBe("correct");
    expect(checkMcqAnswer(0, { answerIndex: 1 }).status).toBe("incorrect");
  });

  it("match: all pairs must be correctly linked", () => {
    const spec = { pairs: [{ leftId: "a", rightId: "x" }, { leftId: "b", rightId: "y" }] };
    expect(checkMatchAnswer({ a: "x", b: "y" }, spec).status).toBe("correct");
    expect(checkMatchAnswer({ a: "x", b: "x" }, spec).status).toBe("incorrect");
    expect(checkMatchAnswer({ a: "x" }, spec).status).toBe("invalid-format");
  });

  it("order: sequence must match exactly", () => {
    const spec = { correctOrder: ["1", "2", "3"] };
    expect(checkOrderAnswer(["1", "2", "3"], spec).status).toBe("correct");
    expect(checkOrderAnswer(["2", "1", "3"], spec).status).toBe("incorrect");
    expect(checkOrderAnswer(["1", "2"], spec).status).toBe("invalid-format");
  });
});
