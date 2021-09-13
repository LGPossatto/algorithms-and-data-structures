// Radix Sort - Helper
/* 
    Implement a function called digitCount which accepts 
    a positive integer and returns the number of digits that 
    the integer has.

    Examples:
    digitCount(1); // 1
    digitCount(9); // 1
    digitCount(25); // 2
    digitCount(314); // 3
    digitCount(1234); // 4
    digitCount(77777); // 5
*/

export const digitCountEx = (num: number) => {
  let digit = 0;
  num = Math.abs(num);

  while (num >= 1) {
    num = num / 10;
    digit++;
  }

  //console.log(digit);
  return digit;
};

//digitCountEx(1); // 1
//digitCountEx(9); // 1
//digitCountEx(25); // 2
//digitCountEx(314); // 3
//digitCountEx(1234); // 4
//digitCountEx(77777); // 5
