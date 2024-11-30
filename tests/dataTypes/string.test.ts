import { describe, expect, test } from "@jest/globals";
import { isStringPalindrome, reverseString } from "../../src";

describe("String tests", () => {
  test("Reverse String", () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
    expect(reverseString("Gravitational Force")).toBe("ecroF lanoitativarG");
  });
  test("Palindrome String", () => {
    expect(isStringPalindrome("madam")).toBe(true);
    expect(isStringPalindrome("Physics")).toBe(false);
  });
});
