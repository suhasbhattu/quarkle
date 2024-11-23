import { describe, expect, test } from "@jest/globals";
import {
  reverseNumber,
  isPrime,
  isNumberPalindrome,
  factorial,
  permutations,
  combinations,
} from "../../src";

describe("number tests", () => {
  test("Reverse Number", () => {
    expect(reverseNumber(132)).toBe(231);
    expect(reverseNumber(-9658)).toBe(-8569);
    expect(reverseNumber(25000)).toBe(52);
  });
  test("Prime Number", () => {
    expect(isPrime(23)).toBe(true);
    expect(isPrime(-9658)).toBe(false);
    expect(isPrime(91)).toBe(false);
    expect(isPrime(992)).toBe(false);
    expect(isPrime(100237)).toBe(true);
  });
  test("Palindrome Number", () => {
    expect(isNumberPalindrome(23632)).toBe(true);
    expect(isNumberPalindrome(-23632)).toBe(false);
    expect(isNumberPalindrome(23)).toBe(false);
    expect(isNumberPalindrome(5)).toBe(true);
  });
  test("Factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(15)).toBe(1307674368000);
    expect(() => factorial(-23)).toThrow(
      "Factorial of the negative number cannot be defined.",
    );
  });
  test("Permutations", () => {
    expect(permutations(5, 2)).toBe(20);
    expect(permutations(12, 2)).toBe(132);
    expect(() => permutations(5, 8)).toThrow(
      "Value of `k` must be smaller than or equal to `n`.",
    );
  });
  test("Combinations", () => {
    expect(combinations(5, 2)).toBe(10);
    expect(combinations(12, 2)).toBe(66);
    expect(() => combinations(5, 8)).toThrow(
      "Value of `k` must be smaller than or equal to `n`.",
    );
  });
});
