// Radix Sort
/*
    Time Complexity:
    Worst case: Big O(n * k).

    Space Complecity:
    Big O(n + k).

    Radix sort is a special sorting algorithm that works on 
    lists of numbers. It never makes comparisons between 
    elements! It exploits the fact that information about 
    the size of a number is encoded in the number of digits.   
    More digits means a bigger number!

    Pseudocode:
    - Define a function that accepts list of numbers;
    - Figure out how many digits the largest number has;
    - Loop from k = 0 up to this largest number of digits;
    - For each iteration of the loop:
        - Create buckets for each digit (0 to 9);
        - place each number in the corresponding bucket based 
        on its kth digit;
    - Replace our existing array with values in our buckets, 
    starting with 0 and going up to 9;
    - Return list at the end!

    function radixSort(nums){
        let maxDigitCount = mostDigits(nums);
        for(let k = 0; k < maxDigitCount; k++){
            let digitBuckets = Array.from({length: 10}, () => []);
            for(let i = 0; i < nums.length; i++){
                let digit = getDigit(nums[i],k);
                digitBuckets[digit].push(nums[i]);
            }
            nums = [].concat(...digitBuckets);
        }
        return nums;
    }
*/

import { getDigit, mostDigits } from "./radixHelpers";

const radixSort = (arr: number[]): number[] => {
  const largestNum = mostDigits(arr);
  for (let k = 0; k < largestNum; k++) {
    const buckets: number[][] = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [];
    for (let j = 0; j < buckets.length; j++) {
      arr = arr.concat(buckets[j]);
    }
  }
  return arr;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
