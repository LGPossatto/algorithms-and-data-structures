// Multiple Pointers
/* 
    Write a function called isSubsequence which takes in two 
    strings and checks whether the characters in the first string 
    form a subsequence of the characters in the second string. In 
    other words, the function should check whether the characters 
    in the first string appear somewhere in the second string, 
    without their order changing.

    Ex:
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
*/

// [a,b,c]
//  -
// [a,b,r,a,c,a,d,a,b,r,a]
//  +

const isSubsequence = (patternStr: string, str: string) => {
  // check if strings are not empty
  if (patternStr.length <= 0 && str.length <= 0) {
    return false;
  }
  // crete pointer
  let patternP = 0;
  // loop second string
  for (let char of str) {
    /// check if char is equal to char at patternStr
    if (char === patternStr[patternP]) {
      //// move pointer
      patternP++;
    }
    /// check if pointer is equal to patternStr length
    if (patternP === patternStr.length) {
      //// return true
      return true;
    }
  }
  // return false
  return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
