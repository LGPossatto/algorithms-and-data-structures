// Divide and Conquer
/* 
    Given a sorted array and a number, write a function 
    called sortedFrequency that counts the occurrences of 
    the number in the array.

    sortedFrequency([1,1,2,2,2,2,3],2) // 4 
    sortedFrequency([1,1,2,2,2,2,3],3) // 1 
    sortedFrequency([1,1,2,2,2,2,3],1) // 2 
    sortedFrequency([1,1,2,2,2,2,3],4) // -1
*/

const sortedFrequency = (arr: number[], num: number) => {
  let minStart = 0;
  let maxStart = 0;
  let minEnd = arr.length - 1;
  let maxEnd = arr.length - 1;

  const getMid = (start: number, end: number) => {
    return Math.floor((end - start) / 2) + start;
  };

  let minP = getMid(minStart, minEnd);
  let minFound = false;
  let maxP = getMid(maxStart, maxEnd);
  let maxFound = false;

  while (minStart <= minEnd || maxStart <= maxEnd) {
    if (minStart <= minEnd) {
      if (arr[minP] === num && arr[minP - 1] != num) {
        minStart = 1;
        minEnd = 0;
        minFound = true;
      } else if (arr[minP] < num) {
        minStart = minP + 1;
        minP = getMid(minStart, minEnd);
      } else {
        minEnd = minP - 1;
        minP = getMid(minStart, minEnd);
      }
    }

    if (maxStart <= maxEnd) {
      if (arr[maxP] === num && arr[maxP + 1] != num) {
        maxStart = 1;
        maxEnd = 0;
        maxFound = true;
      } else if (arr[maxP] > num) {
        maxEnd = maxP - 1;
        maxP = getMid(maxStart, maxEnd);
      } else {
        maxStart = maxP + 1;
        maxP = getMid(maxStart, maxEnd);
      }
    }
  }

  if (minFound && maxFound) return maxP - minP + 1;
  return -1;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
