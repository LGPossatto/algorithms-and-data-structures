// Divide and Conquer
/* 
    Write a function called findRotatedIndex which accepts 
    a rotated array of sorted numbers and an integer. The 
    function should return the index of the integer in the 
    array. If the value is not found, return -1.

    findRotatedIndex([3,4,1,2],4) // 1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
    findRotatedIndex([37,44,66,102,10,22],14) // -1
    findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
    findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
*/

const findRotatedIndex = (arr: number[], num: number) => {
  let virtualStart: number;

  let start = 0;
  let end = arr.length - 1;

  const getMid = () => {
    return Math.floor((end - start) / 2) + start;
  };

  let mid = getMid();

  while (start <= end) {
    if (arr[mid] < arr[mid - 1]) {
      virtualStart = mid;

      start = 0;
      end = arr.length - 1;
      mid = getMid();
      break;
    } else if (arr[mid] > end) {
      start = mid + 1;
      mid = getMid();
    } else {
      end = mid - 1;
      mid = getMid();
    }
  }

  const getTrueIndex = (idx: number) => {
    if (idx > arr.length - 1 - virtualStart) {
      return idx + virtualStart - arr.length;
    } else {
      return idx + virtualStart;
    }
  };

  while (start <= end) {
    const trueMid = getTrueIndex(mid);

    if (arr[trueMid] === num) {
      return trueMid;
    } else if (arr[trueMid] < num) {
      start = mid + 1;
      mid = getMid();
    } else {
      end = mid - 1;
      mid = getMid();
    }
  }

  return -1;
};

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
