// Binary Search
/* 
    Write a function called binarySearch which accepts a 
    sorted array and a value and returns the index at which 
    the value exists. Otherwise, return -1.

    This algorithm should be more efficient than linearSearch - 
    you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
    and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/.

    Examples:
    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 10) // 2
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 95) // 16
    binarySearch([
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
      40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    ], 100) // -1
*/

// [0,1,2,3,4,5,6,7,8,9] - 9
//  h       m         t

const binarySearch = (arr: number[], target: number) => {
  // create pointers
  let headP = 0;
  let tailP = arr.length - 1;

  const getMiddle = () => {
    return Math.floor((tailP - headP) / 2) + headP;
  };

  let middleP = getMiddle();
  // start loop
  while (headP <= tailP) {
    /// check if arr[middle] is equal, bigger or smaller than target
    if (arr[middleP] === target) {
      //// if arr[middle] is equal return index
      return middleP;
    } else if (target > arr[middleP]) {
      //// if target is bigger move head pointer forward
      headP = middleP + 1;
      middleP = getMiddle();
    } else {
      //// if target is smaller move tail pointer back
      tailP = middleP - 1;
      middleP = getMiddle();
    }
  }
  // if target is not found return -1
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
