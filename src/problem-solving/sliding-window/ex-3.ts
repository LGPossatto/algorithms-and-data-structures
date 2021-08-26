// Sliding Window
/* 
    Write a function called findLongestSubstring, which 
    accepts a string and returns the length of the longest 
    substring with all distinct characters.

    Ex:
    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6
*/

// [r,i,t,h,m,s,c,h,o,o,l]
//  - - - - - - - *

const findLongestSubstring = (str: string) => {
  if (str.length <= 0) {
    return 0;
  }

  let headP = 0;
  let leadP = 0;
  let maxLength = 0;
  let tempMaxLength = 0;
  let storeObj = {} as any;

  //  0 1 2 3 4 5 6 7 8 9 10 11 12 13
  // [t,h,e,c,a,t,i,n,t,h,e ,h ,a ,t ]
  //                         *
  //  h
  // { t: 0, h: 1, e: 2, c: 3, a: 4, i: 6, n: 7 }
  while (leadP < str.length) {
    if (storeObj[str[leadP]] >= 0 && storeObj[str[leadP]] >= headP) {
      headP = storeObj[str[leadP]] + 1;
    }
    storeObj[str[leadP]] = leadP;
    tempMaxLength = leadP - headP + 1;

    if (tempMaxLength > maxLength) {
      maxLength = tempMaxLength;
    }

    leadP++;
  }

  return maxLength;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
