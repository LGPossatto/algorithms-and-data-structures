/* 
    In order to implement radix sort, it's helpful to build a 
    few helper functions first:

    - getDigit(num, place) - returns the digit in num at the given 
    place value:
    function getDigit(num, i) {
      return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }

    - digitCount(num) - returns the number of digits in num:
    function digitCount(num) {
      if (num === 0) return 1;
      return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

    - mostDigits(nums) - Given an array of numbers, returns 
    the number of digits in the largest numbers in the list:
    function mostDigits(nums) {
      let maxDigits = 0;
      for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
      }
      return maxDigits;
    }
*/

export const getDigit = (num: number, i: number): number => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

export const digitCount = (num: number): number => {
  if (num === 0) return 1;
  // @ts-ignore
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

export const mostDigits = (nums: number[]): number => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
