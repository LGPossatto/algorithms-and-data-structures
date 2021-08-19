// Frequency Counter
/* 
    Given two strings, write a function to determine if 
    the second string is an anagram of the first. An anagram 
    is a word, phrase, or name formed by rearranging the letters 
    of another, such as cinema, formed from iceman.

    Examples:
    validAnagram(" ", " ") // true
    validAnagram("aaz", "zza") // false
    validAnagram("anagram", "naragam") // true
    validAnagram("rat", "cat") // false
    validAnagram("texttwisttime", "timetwisttext") // true

    function validAnagram(first, second) {
      if (first.length !== second.length) {
        return false;
      }

      const lookup = {};

      for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
      }

      for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
          return false;
        } else {
          lookup[letter] -= 1;
        }
      }

      return true;
    }
*/

// first try
// const validAnagram = (firstWord: string, secondWord: string) => {
//   if (firstWord.length !== secondWord.length) {
//     return false;
//   }
//
//   const firstCounter = {} as any;
//   const secondCounter = {} as any;
//
//   for (let char of firstWord) {
//     firstCounter[char] = (firstCounter[char] || 0) + 1;
//   }
//
//   for (let char of secondWord) {
//     secondCounter[char] = (secondCounter[char] || 0) + 1;
//   }
//
//   for (let key of Object.keys(firstCounter)) {
//     if (firstCounter[key] !== secondCounter[key]) {
//       return false;
//     }
//   }
//
//   return true;
// };

// refactored
const validAnagram = (firstWord: string, secondWord: string) => {
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const firstCounter = {} as any;
  const secondCounter = {} as any;

  for (let i = 0; i < firstWord.length; i++) {
    // loop creating/incrementing letters to the object
    firstCounter[firstWord[i]] = (firstCounter[firstWord[i]] || 0) + 1;
    secondCounter[secondWord[i]] = (secondCounter[secondWord[i]] || 0) + 1;
  }

  for (let key in firstCounter) {
    // loop checking quantity
    if (firstCounter[key] !== secondCounter[key]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram("abac", "abac"));
console.log(validAnagram(" ", " "));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "naragam"));
console.log(validAnagram("rat", "cat"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
