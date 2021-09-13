// Radix Sort - Helper
/* 
    Implement a function called mostDigits  which accepts 
    an array of integers and returns a count of the number 
    of digits for the number in the array with the most digits.

    It may help to use your digitCount  code from the previous 
    exercise in this function.

    Examples:
    mostDigits([1, 9, 10, 100, 99]); // 3
    mostDigits([100, 1010, 1, 500]); // 4
    mostDigits([0, 100000, 400, 12, 8]); // 6
    mostDigits([]); // 0
*/

import { digitCountEx } from "./ex-2";

export const mostDigitsEx = (arr: number[]) => {
  let mostDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentCount = digitCountEx(arr[i]);
    if (currentCount > mostDigits) {
      mostDigits = currentCount;
    }
  }

  //console.log(mostDigits);
  return mostDigits;
};

//mostDigitsEx([1, 9, 10, 100, 99]); // 3
//mostDigitsEx([100, 1010, 1, 500]); // 4
//mostDigitsEx([0, 100000, 400, 12, 8]); // 6
//mostDigitsEx([]); // 0
