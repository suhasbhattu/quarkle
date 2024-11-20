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
