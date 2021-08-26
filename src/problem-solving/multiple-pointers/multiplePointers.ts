// Multiple Pointers
/* 
    Creating pointers or values that correspond to an index or 
    position and move towards the beginning, end or middle 
    based on a certain condition. Very efficient for solving 
    problems with minimal space complexity as well.

    Example:
    Implement a function called countUniqueValues, which 
    accepts a sorted array, and counts the unique values in 
    the array. There can be negative numbers in the array, 
    but it will always be sorted.

    function countUniqueValues(arr){
        if(arr.length === 0) return 0;
        var i = 0;
        for(var j = 1; j < arr.length; j++){
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j]
            }
        }
        return i + 1;
    }

    countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2, -1, -1, 0, 1]) //4
*/

const countUniqueValues = (arr: number[]) => {
  // check if array has at least 2 values
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }
  // create pointers
  let firstPoint = 0;
  let leadPoint = 1;
  // create stored values
  let uniqueValues = 1;
  // loop array checking equality
  //// [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
  ////  f  l
  while (leadPoint < arr.length) {
    // if first !== lead
    if (arr[firstPoint] !== arr[leadPoint]) {
      //// add to unique
      uniqueValues++;
      //// move l forward
      leadPoint++;
      //// makes h = l - 1
      firstPoint = leadPoint - 1;
    }
    // if first === lead
    else {
      //// move l forward
      leadPoint++;
    }
  }
  // return values
  return uniqueValues;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
