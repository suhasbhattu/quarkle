/**
 * Returns the reverse of the given number.
 * @param number
 * @returns the reversed number.
 */
export const reverseNumber = (number: number): number => {
  let reverse = 0;
  const isNegative = number < 0;
  if (isNegative) {
    number *= -1;
  }
  while (number !== 0) {
    const remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }
  if (isNegative) {
    reverse *= -1;
  }
  return reverse;
};

/**
 * Checks if the number is prime or not.
 * @param number
 * @returns 'true' if number is prime, otherwise 'false'.
 */
export const isPrime = (number: number): boolean => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i * i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

/**
 * Checks if the number is palindrome or not.
 * @param number
 * @returns 'true' if number is palindrome, otherwise 'false'.
 */
export const isNumberPalindrome = (number: number): boolean => {
  if (number < 0) {
    return false;
  }
  return reverseNumber(number) === number;
};

/**
 * Returns the factorial of the given number.
 * @param number
 * @returns The factorial of the number.
 */
export const factorial = (number: number): number => {
  if (number < 0) {
    throw new Error("Factorial of the negative number cannot be defined.");
  }
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

/**
 * Returns the number of ways `k` items can be arranged from a set of `n` items. The order of the arrangement matters here.
 * @param n The set of items.
 * @param k The number of items out of `n` which needs to be arranged.
 * @returns The possible number of arrangements formed by selecting `k` items from a set of `n` items.
 */
export const permutations = (n: number, k: number): number => {
  if (k > n) {
    throw new Error("Value of `k` must be smaller than or equal to `n`.");
  }
  return factorial(n) / factorial(n - k);
};

/**
 * Returns the number of ways `k` items can be selected from a set of `n` items. The order of the selection doesn't matter here.
 * @param n The set of items.
 * @param k The number of items out of `n` which needs to be selected.
 * @returns The possible ways of selecting `k` items from a set of `n` items.
 */
export const combinations = (n: number, k: number): number => {
  if (k > n) {
    throw new Error("Value of `k` must be smaller than or equal to `n`.");
  }
  return factorial(n) / (factorial(k) * factorial(n - k));
};
