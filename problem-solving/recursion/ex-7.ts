// Recursion
/* 
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing 
    each word capitalized.

    Ex:
    capitalizeWords(['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

const capitalizeWords = (arr: string[]): string[] => {
  if (arr.length <= 0) return [];

  //const str = arr[arr.length - 1];
  const str = arr[0];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase();
  }

  //arr.pop();
  //return [newStr].concat(capitalizeWords(arr));
  return [newStr].concat(capitalizeWords(arr.slice(1)));
};

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
// ['I', 'AM', 'LEARNING', 'RECURSION']
