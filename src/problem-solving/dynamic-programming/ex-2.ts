// Dynamic Programming
/* 
    Write a function called coinChange which accepts two 
    parameters: an array of denominations and a value. 
    The function should return the number of ways you can 
    obtain the value from the given collection of denominations. 
    You can think of this as figuring out the number of ways 
    to make change for a given value from a supply of coins.

    Examples:
    const denominations = [1, 5, 10, 25]
     
    coinChange(denominations, 1) // 1
    coinChange(denominations, 2) // 1
    coinChange(denominations, 5) // 2
    coinChange(denominations, 10) // 4
    coinChange(denominations, 25) // 13
    coinChange(denominations, 45) // 39
    coinChange(denominations, 100) // 242
    coinChange(denominations, 145) // 622
    coinChange(denominations, 1451) // 425663
    coinChange(denominations, 14511) // 409222339
*/

const coinChange2 = (
  denominations: number[],
  num: number,
  coinArr: number[] = []
): number[] => {
  if (num === 0) return coinArr;

  for (let i = denominations.length - 1; i >= 0; i--) {
    const newNum = num - denominations[i];

    if (newNum >= 0) {
      coinArr.push(denominations[i]);
      return coinChange2(denominations, newNum, coinArr);
    }
  }

  return [];
};

const denominations2 = [1, 5, 10, 25];
console.log(coinChange2(denominations2, 1));
console.log(coinChange2(denominations2, 2));
console.log(coinChange2(denominations2, 5));
console.log(coinChange2(denominations2, 10));
console.log(coinChange2(denominations2, 25));
//console.log(coinChange2(denominations2, 45));
//console.log(coinChange2(denominations2, 100));
//console.log(coinChange2(denominations2, 145));
//console.log(coinChange2(denominations2, 1451));
//console.log(coinChange2(denominations2, 14511));
