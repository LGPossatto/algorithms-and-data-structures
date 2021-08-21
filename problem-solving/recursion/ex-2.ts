// Recursion
/* 
    Write a recursive function called isPalindrome which 
    returns true if the string passed to it is a palindrome 
    (reads the same forward and backward). Otherwise it returns false.

    Ex:
    isPalindrome('awesome') // false
    isPalindrome('foobar') // false
    isPalindrome('tacocat') // true
    isPalindrome('amanaplanacanalpanama') // true
    isPalindrome('amanaplanacanalpandemonium') // false
*/

// [a,w,e,s,o,m,e]
//        -
//        -
const isPalindrome = (str: string) => {
  if (str.length <= 0) return false;

  let headP = 0;
  let tailP = str.length - 1;

  const helper = (): boolean => {
    if (headP > tailP) return true;

    if (str[headP] === str[tailP]) {
      headP++;
      tailP--;

      return helper();
    }

    return false;
  };

  return helper();
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
