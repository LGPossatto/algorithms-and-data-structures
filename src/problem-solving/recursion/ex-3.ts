// Recursion
/* 
    Write a recursive function called someRecursive which 
    accepts an array and a callback. The function returns 
    true if a single value in the array returns true when 
    passed to the callback. Otherwise it returns false.

    Ex:
    someRecursive([1,2,3,4], isOdd) // true
    someRecursive([4,6,8,9], isOdd) // true
    someRecursive([4,6,8], isOdd) // false
    someRecursive([4,6,8], val => val > 10); // false
*/

const isOdd = (val: number) => val % 2 !== 0;

const someRecursive = (
  arr: number[],
  callBack: (val: number) => boolean
): boolean => {
  let index = 0;

  const helper = (): boolean => {
    if (index >= arr.length) return false;

    if (callBack(arr[index])) {
      return true;
    } else {
      index++;
      return helper();
    }
  };

  return helper();
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
