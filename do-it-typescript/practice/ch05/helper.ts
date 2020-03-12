export const range = (from: number, to: number): number[] => {
  return from <= to ? [from, ...range(from + 1, to)] : [];
};

const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initvalue: T
) => {
  let result: T = initvalue;
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

let numbers: number[] = range(1, 100);

let result = fold(numbers, (result, value) => result + value, 0);
