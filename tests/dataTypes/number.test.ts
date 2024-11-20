import { describe, expect } from "@jest/globals";
import { reverseNumber } from "../../src";

describe("number tests", () => {
  test("Reverse Number", () => {
    expect(reverseNumber(132)).toBe(231);
    expect(reverseNumber(-9658)).toBe(-8569);
    expect(reverseNumber(25000)).toBe(52);
  });
});
