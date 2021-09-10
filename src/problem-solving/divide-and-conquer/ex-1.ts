// Divide and Conquer
/* 
    Given an array of 1s and 0s which has all 1s first followed 
    by all 0s, write a function called countZeroes, which returns 
    the number of zeroes in the array.

    countZeroes([1,1,1,1,0,0]) // 2
    countZeroes([1,0,0,0,0]) // 4
    countZeroes([0,0,0]) // 3
    countZeroes([1,1,1,1]) // 0
*/

const countZeroes = (arr: number[]) => {
  let start = 0;
  let end = arr.length - 1;

  const getMid = () => {
    return Math.floor((end - start) / 2) + start;
  };

  let mid = getMid();

  while (start <= end) {
    if (arr[mid] === 0 && (arr[mid - 1] === 1 || arr[mid - 1] === undefined)) {
      return arr.length - mid;
    } else if (arr[mid] === 1) {
      start = mid + 1;
      mid = getMid();
    } else {
      end = mid - 1;
      mid = getMid();
    }
  }
  return 0;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
