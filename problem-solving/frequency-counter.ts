// Frequency Counter
/* 
    This pattern uses objects or sets to collect values/frequencies 
    of values. This can often avoid the need for nested loops or 
    O(N^2) operations with arrays / strings.

    Example:
    Given two strings, write a function to determine if 
    the second string is an anagram of the first. An anagram 
    is a word, phrase, or name formed by rearranging the letters 
    of another, such as cinema, formed from iceman.

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

    validAnagram(" ", " ") // true
    validAnagram("aaz", "zza") // false
    validAnagram("anagram", "naragam") // true
    validAnagram("rat", "cat") // false
    validAnagram("texttwisttime", "timetwisttext") // true
*/

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
