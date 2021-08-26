// Frequency Counter
/* 
    Write a function called sameFrequency. Given two positive 
    integers, find out if the two numbers have the same frequency 
    of digits. Your solution MUST have Time complexitie equals to O(N):

    Ex:
    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

const sameFrequency = (num1: number, num2: number) => {
  // create iterable numbers
  const iNum1 = num1.toString();
  const iNum2 = num2.toString();
  // check if num1 has the same quantity of digits as num2
  if (iNum1.length !== iNum2.length) {
    return false;
  }
  // create frequency objs
  const fObj1 = {} as any;
  const fObj2 = {} as any;
  // loop to populate frequency obj
  for (let i = 0; i < iNum1.length; i++) {
    fObj1[iNum1[i]] = (fObj1[iNum1[i]] || 0) + 1;
    fObj2[iNum2[i]] = (fObj2[iNum2[i]] || 0) + 1;
  }
  // loop to check if something is not equal
  for (let key in fObj1) {
    if (fObj1[key] !== fObj2[key]) {
      return false;
    }
  }
  // return value
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
