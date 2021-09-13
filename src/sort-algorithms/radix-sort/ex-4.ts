// Radix Sort
/* 
    Finally, you're ready to implement Radix Sort! Write a 
    function called radixSort  which accepts an array of numbers 
    and sorts them in ascending order.

    You'll need to make use of the helper functions from the 
    previous exercises here. Good luck!

    Examples:
    radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
    radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
    radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
*/

import { getDigitEx } from "./ex-1";
import { mostDigitsEx } from "./ex-3";

const radixSortEx = (arr: number[]) => {
  const maxDigits = mostDigitsEx(arr);

  for (let i = 0; i < maxDigits; i++) {
    const buckets: number[][] = [[], [], [], [], [], [], [], [], [], []];
    const newArr: number[] = [];

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigitEx(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    for (let k = 0; k < buckets.length; k++) {
      for (let l = 0; l < buckets[k].length; l++) {
        newArr.push(buckets[k][l]);
      }
    }

    arr = newArr;
  }

  console.log(arr);
  return arr;
};

//radixSortEx([8, 6, 1, 12]); // [1, 6, 8, 12]
//radixSortEx([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
//radixSortEx([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
