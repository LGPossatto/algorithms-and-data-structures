// Frequency Counter
/* 
    Given an unsorted array and a number n, find if there 
    exists a pair of elements in the array whose difference 
    is n. This function should return true if the pair exists 
    or false if it does not.

    findPair([6,1,4,10,2,4], 2) // true
    findPair([8,6,2,4,1,0,2,5,13],1) // true
    findPair([4,-2,3,10],-6) // true
    findPair([6,1,4,10,2,4], 22) // false
    findPair([], 0) // false
    findPair([5,5], 0) // true
    findPair([-4,4], -8) // true
    findPair([-4,4], 8) // true
    findPair([1,3,4,6],-2) // true
    findPair([0,1,3,4,6],-2) // true
*/

const findPair = (arr: number[], num: number) => {
  const freqObj: { [key: number]: boolean } = {};

  for (let i = 0; i < arr.length; i++) {
    const selectedNum = arr[i];
    const targetNum1 = selectedNum - num;
    const targetNum2 = selectedNum + num;

    if (freqObj[selectedNum]) {
      return true;
    }

    freqObj[targetNum1] = true;
    freqObj[targetNum2] = true;
  }
  return false;
};

console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([5, 5], 0)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
