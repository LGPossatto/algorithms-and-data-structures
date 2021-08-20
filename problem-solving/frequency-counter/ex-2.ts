// Frequency Counter / Multiple Pointers
/* 
    Implement a function called, areThereDuplicates which 
    accepts a variable number of arguments, and checks whether 
    there are any duplicates among the arguments passed in. 
    You can solve this using the frequency counter pattern OR the 
    multiple pointers pattern.

    Ex:
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

const areThereDuplicates = (...params: number[] | string[]) => {
  // check if array has values
  if (params.length <= 0) {
    return false;
  }
  // create freq obj
  const fObj = {} as any;
  // loop params
  for (let param of params) {
    /// add param to freq obj
    fObj[param] = (fObj[param] || 0) + 1;
    /// if param is >= 2 return true
    if (fObj[param] >= 2) {
      return true;
    }
  }
  // return false
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
