// Frequency Counter
/* 
    Write a function called constructNote, which accepts two 
    strings, a message and some letters. The function should 
    return true if the message can be built with the letters 
    that you are given, or it should return false.

    Assume that there are only lowercase letters and no 
    space or special characters in both the message and 
    the letters.

    Examples:
    constructNote('aa', 'abc') // false
    constructNote('abc', 'dcba') // true
    constructNote('aabbcc', 'bcabcaddff') // true
*/

function constructNote(str: string, msg: string) {
  const strObj: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    if (strObj[str[i]]) {
      strObj[str[i]]++;
    } else {
      strObj[str[i]] = 1;
    }
  }

  for (let i = 0; i < msg.length; i++) {
    if (strObj[msg[i]]) {
      strObj[msg[i]]--;

      if (strObj[msg[i]] === 0) {
        delete strObj[msg[i]];
      }
    }
  }

  for (let key in strObj) {
    return false;
  }
  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
