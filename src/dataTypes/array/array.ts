import { clone, sort } from "../../utils";

/**
 * Returns the `k`'th minimum element of the given array. `k` is 1-indexed variable with default value as 1.
 * @param list
 * @param k
 * @returns The `k`'th minimum element af the given array.
 */
export const minArray = (list: number[], k?: number): number => {
  sort(list);
  return list[(k ?? 1) - 1];
};

/**
 * Returns the `k`'th maximum element of the given array. `k` is 1-indexed variable with default value as 1.
 * @param list
 * @param k
 * @returns The `k`'th maximum element of the given array.
 */
export const maxArray = (list: number[], k?: number): number => {
  sort(list, true);
  return list[(k ?? 1) - 1];
};

/**
 * Returns the product of all items in the list.
 * @param list
 * @returns The product of the list.
 */
export const arrayProduct = (list: number[]): number => {
  let product = 1;
  for (const item of list) {
    product *= item;
  }
  if (product !== 0) return product;
  else if (product.toLocaleString()[0] === "-") return 0;
  else return 0;
};

/**
 * Rotate the given array to the `left` or `right` direction by given `position`. If the position is negative, the given (or default) direction is switched.
 * @param list
 * @param position
 * @param direction Optional with the possible values `left` and 'right`. Default direction is `right`.
 * @returns void. This will perform rotate in place.
 */
export const rotateArray = (
  list: any[],
  position: number,
  direction: "left" | "right" = "right",
): void => {
  const length = list.length;
  position = position % length;
  if (position < 0) {
    position = -position;
    direction = direction === "left" ? "right" : "left";
  }
  if (direction === "left") {
    position = length - position;
  }
  const reverse = (left: number, right: number) => {
    while (left < right) {
      [list[left], list[right]] = [list[right], list[left]];
      left++;
      right--;
    }
  };
  reverse(0, list.length - 1);
  reverse(0, position - 1);
  reverse(position, length - 1);
};

/**
 * Returns the mean or average of the list.
 * @param list The list of numbers.
 * @param type The type of the mean `arithmetic`, `geometric`, `harmonic` and `rms`. The default value is `arithmetic`.
 * @returns The mean of the list.
 */
export const mean = (
  list: number[],
  type?: "arithmetic" | "geometric" | "harmonic" | "rms",
): number => {
  let meanValue = 0;
  const length = list.length;
  const selectedType = type ?? "arithmetic";
  switch (selectedType) {
    case "arithmetic": {
      const sum = list.reduce((prev, curr) => prev + curr, 0);
      meanValue = sum / length;
      break;
    }
    case "geometric": {
      const mul = list.reduce((prev, curr) => prev * curr, 1);
      meanValue = Math.pow(mul, 1 / length);
      break;
    }
    case "harmonic": {
      const reciprocalSum = list.reduce((prev, curr) => prev + 1 / curr, 0);
      meanValue = length / reciprocalSum;
      break;
    }
    case "rms": {
      const squareSum = list.reduce((prev, curr) => prev + curr * curr, 0);
      const meanRms = squareSum / length;
      meanValue = Math.pow(meanRms, 0.5);
      break;
    }
  }
  return Math.round(meanValue * 100) / 100;
};

/**
 * Calculates the median of the list.
 * @param list list of numbers.
 * @returns The median of the list.
 */
export const median = (list: number[]): number => {
  const listClone = clone(list);
  sort(listClone);
  let medianValue;
  const length = listClone.length;
  const midValue = Math.floor(length / 2);
  if (length % 2 === 0) {
    medianValue = mean([listClone[midValue - 1], listClone[midValue]]);
  } else {
    medianValue = listClone[midValue];
  }
  return medianValue;
};

/**
 * Calculates the mode of the list.
 * @param list list of numbers
 * @returns mode of the list. If multiple numbers have the same highest frequency, it will return an array of mode values.
 */
export const mode = (list: number[]): number | number[] => {
  const freq: any = {};
  for (const item of list) {
    if (freq[item] == null) {
      freq[item] = 1;
    } else {
      freq[item]++;
    }
  }
  const keys = Object.keys(freq);
  const sortedFreq = keys
    .map((key) => [key, freq[key]])
    .sort((a, b) => b[1] - a[1]);
  const max = sortedFreq[0];
  const modeValue = sortedFreq.filter((a) => a[1] === max[1]);
  return modeValue.length === 1
    ? Number(modeValue[0][0])
    : modeValue.map((a) => Number(a[0]));
};

/**
 * Calculate the RMS(Root Mean Square) of the list.
 * @param list
 * @returns RMS(Root Mean Square) value of the list.
 */
export const rootMeanSquare = (list: number[]): number => {
  const square = list.reduce((prev, curr) => prev + curr * curr, 0);
  const mean = square / list.length;
  const root = Math.sqrt(mean);
  return Math.round(root * 100) / 100;
};

/**
 * Calculates the variance of the list.
 * @param list
 * @returns Returns the variance.
 */
export const variance = (list: number[]): number => {
  const listMean = mean(list);
  const squares = list.map((item) => (item - listMean) * (item - listMean));
  const sum = squares.reduce((prev, curr) => prev + curr, 0);
  return Math.round((sum / (list.length - 1)) * 100) / 100;
};

/**
 * Calculates the standard deviation of the list.
 * @param list
 * @returns Standard deviation of the list.
 */
export const standardDeviation = (list: number[]): number => {
  return Math.round(Math.sqrt(variance(list)) * 100) / 100;
};

/**
 * Removes duplicates from the list and return the same list.
 * @param list List of numbers or strings.
 * @returns Same list with duplicates removed.
 */
export const removeDuplicates = (
  list: (number | string)[],
): (number | string)[] => {
  const freq: any = {};
  let i = 0;
  let j = 0;
  const length = list.length;
  while (j < length) {
    if (freq[list[j]] == null) {
      freq[list[j]] = 1;
      list[i] = list[j];
      i++;
    }
    j++;
  }
  list.length = i;
  return list;
};

interface histogramMap {
  [key: string | number]: number;
}
/**
 * Returns the histogram map for each item occurrence in a given list.
 * @param list List of numbers or strings.
 * @returns Histogram map for a given list.
 */
export const histogram = (list: (number | string)[]): histogramMap => {
  const map: histogramMap = {};
  for (const item of list) {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  }
  return map;
};

/**
 * Returns the Greatest Common Divisor (GCD) of the list.
 * @param list List of numbers
 * @returns Greatest Common Divisor (GCD) of the list.
 */
export const gcd = (list: number[]): number => {
  if (list.length === 0) {
    return 0;
  }
  const recursiveGcd = (i: number, j: number) => {
    while (j !== 0) {
      const temp = j;
      j = i % j;
      i = temp;
    }
    return i;
  };
  let result = list[0];
  for (const item of list) {
    result = recursiveGcd(result, item);
  }
  return result;
};

/**
 * Returns the Least Common Multiple (LCM) of the list.
 * @param list List of numbers.
 * @returns Least Common Multiple (LCM) of the list
 */
export const lcm = (list: number[]): number => {
  if (list.length === 0) {
    return 0;
  }
  let lcm = list[0];
  for (const item of list) {
    lcm = (lcm * item) / gcd([lcm, item]);
  }
  return lcm;
};

/**
 * Adds two matrices and will return the result.
 * @param matrix1 First matrix
 * @param matrix2 Second matrix
 * @returns Addition of two matrices.
 */
export const matrixAddition = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const m1 = matrix1.length;
  const n1 = matrix1[0].length;
  const m2 = matrix2.length;
  const n2 = matrix2[0].length;

  if (m1 === m2 && n1 === n2) {
    const result = new Array(m1);
    for (let index = 0; index < m1; index++) {
      result[index] = [];
      for (let index2 = 0; index2 < m2; index2++) {
        result[index][index2] = matrix1[index][index2] + matrix2[index][index2];
      }
    }
    return result;
  } else {
    throw new Error("Order of both matrix are not same.");
  }
};

/**
 * Subtracts second matrix from first and will return the result.
 * @param matrix1 First matrix.
 * @param matrix2 Second matrix.
 * @returns Subtraction of two matrices.
 */
export const matrixSubtraction = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const m1 = matrix1.length;
  const n1 = matrix1[0].length;
  const m2 = matrix2.length;
  const n2 = matrix2[0].length;

  if (m1 === m2 && n1 === n2) {
    const result = new Array(m1);
    for (let index = 0; index < m1; index++) {
      result[index] = [];
      for (let index2 = 0; index2 < m2; index2++) {
        result[index][index2] = matrix1[index][index2] - matrix2[index][index2];
      }
    }
    return result;
  } else {
    throw new Error("Order of both matrix are not same.");
  }
};

/**
 * Multiplies both matrices and will return the result.
 * @param matrix1 First matrix
 * @param matrix2 Second matrix
 * @returns Multiplication of two matrices.
 */
export const matrixMultiplication = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const m1 = matrix1.length;
  const n1 = matrix1[0].length;
  const m2 = matrix2.length;
  const n2 = matrix2[0].length;

  if (n1 === m2) {
    const result = new Array(m1);
    for (let index = 0; index < m1; index++) {
      result[index] = [];
      for (let index2 = 0; index2 < n2; index2++) {
        result[index][index2] = 0;
        for (let index3 = 0; index3 < n1; index3++) {
          result[index][index2] +=
            matrix1[index][index3] * matrix2[index3][index2];
        }
      }
    }
    return result;
  } else {
    throw new Error(
      "Number of columns in first matrix should be same as number of rows in second matrix",
    );
  }
};

/**
 * Multiplies the given matrix with the scalar value and return the result.
 * @param matrix
 * @param scalar Scalar value to be multiplied.
 * @returns The multiplication of matrix with the scalar value.
 */
export const scalarMatrixMultiplication = (
  matrix: number[][],
  scalar: number,
): number[][] => {
  const m = matrix.length;
  const n = matrix[0].length;
  const result: any[] = new Array(m);
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let multiplication = scalar * matrix[i][j];
      if (multiplication === 0 && multiplication.toLocaleString()[0] === "-") {
        multiplication = 0;
      }
      result[i][j] = multiplication;
    }
  }
  return result;
};

/**
 * Converts rows into columns and columns into rows and returns result. This will return a new matrix as transpose.
 * @param matrix
 * @returns The transpose of the given matrix.
 */
export const matrixTranspose = (matrix: any[][]): any[][] => {
  const m = matrix.length;
  const n = matrix[0].length;
  const result: any[] = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(m);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
};
