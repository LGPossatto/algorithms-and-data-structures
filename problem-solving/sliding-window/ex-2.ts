// Sliding Window
/* 
    Write a function called minSubArrayLen which accepts two 
    parameters - an array of positive integers and a positive 
    integer. This function should return the minimal length 
    of a contiguous subarray of which the sum is greater than 
    or equal to the integer passed to the function. If there 
    isn't one, return 0 instead.

    Ex:
    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
*/

// [1,4,6,2,5,7,8,9,10] - 15
//  - - - - -

const minSubArrayLen = (arr: number[], targetV: number) => {
  // check if array length <= 0 and targetV <= 0
  if (arr.length <= 0 || targetV <= 0) {
    return 0;
  }
  // create window var
  let windowHeadP = 0;
  // create sub array size and min value var
  let arraySize = 0;
  let minArraySize = Infinity;
  let minV = arr[0];
  // check if minV already succeded
  if (minV >= targetV) {
    return 1;
  }
  // loop array
  for (let i = 1; i < arr.length; i++) {
    /// get new minV
    minV += arr[i];
    /// while the sum of the window is >= than targetV
    while (minV >= targetV) {
      /// check if it's posible so reduce window size
      let newMinV = minV - arr[windowHeadP];
      if (newMinV >= targetV) {
        minV = newMinV;
        windowHeadP++;
        arraySize = i - windowHeadP + 1;

        if (arraySize < minArraySize) {
          minArraySize = arraySize;
        }
      } else {
        break;
      }
    }
  }
  // return value
  if (minV >= targetV && arraySize === 0) {
    return arr.length;
  } else if (arraySize === 0) {
    return 0;
  } else {
    return minArraySize;
  }
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
