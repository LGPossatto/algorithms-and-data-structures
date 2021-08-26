// Sliding Window
/* 
    Given an array of integers and a number, write a function 
    called maxSubarraySum, which finds the maximum sum of a 
    subarray with the length of the number passed to the function.

    Note that a subarray must consist of consecutive elements from 
    the original array. In the first example below, [100, 200, 300] 
    is a subarray of the original array, but [100, 300] is not.

    Ex:
    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null
*/

// [1,4,2,1,2,3,1,0,2] - 4
//  - - - -
//  0 1 2 3 4 5 6 7 8
//          -

const maxSubarraySum = (arr: number[], slength: number) => {
  // check if array is smaller than sub array length
  if (arr.length < slength) {
    return null;
  }
  // create var to store max value and temp max value
  let maxValue = 0;
  // loop array adding the first values
  for (let i = 0; i < slength; i++) {
    maxValue += arr[i];
  }
  // create var to store temp max value
  let tempMaxValue = maxValue;
  // loop array adding and subtracting values
  for (let i = 0; i < arr.length - slength; i++) {
    tempMaxValue = tempMaxValue - arr[i] + arr[i + slength];
    /// check what value is bigger
    if (tempMaxValue > maxValue) {
      maxValue = tempMaxValue;
    }
  }
  // return max value
  return maxValue;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
