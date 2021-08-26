// Multiple Pointers
/* 
    Write a function called averagePair. Given a sorted array of 
    integers and a target average, determine if there is a pair 
    of values in the array where the average of the pair equals 
    the target average. There may be more than one pair that matches 
    the average target.

    Ex:
    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false
*/

// [1,3,3,5,6,7,10,12,19] - 8
//  h                 t

const averagePair = (arr: number[], setAvg: number) => {
  // check if array has values
  if (arr.length <= 0) {
    return false;
  }
  // create pointers
  let headP = 0;
  let tailP = arr.length - 1;
  // create var to store average
  let avg;
  // while h < t
  while (headP < tailP) {
    /// get avg
    avg = (arr[headP] + arr[tailP]) / 2;
    /// if avg === setAvg
    if (avg === setAvg) {
      //// return true
      return true;
    }
    /// if avg > setAvg
    else if (avg > setAvg) {
      //// decrease t
      tailP--;
    }
    /// if avg < setAvg
    else {
      //// increase h
      headP++;
    }
  }
  // return false
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
