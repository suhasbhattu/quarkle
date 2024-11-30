/**
 * Reverses the given string. It doesn't perform in place reverse but returns a new reverse string.
 * @param string
 * @returns the reversed string.
 */
export const reverseString = (string: string): string => {
  let reverse = "";
  let i = string.length - 1;
  while (i >= 0) {
    reverse += string[i];
    i--;
  }
  return reverse;
};

/**
 * Checks if the given string is a palindrome or not
 * @param string
 * @returns 'true' if string is palindrome, otherwise 'false'.
 */
export const isStringPalindrome = (string: string): boolean => {
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
