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

const coinChange = (denominations: number[], num: number) => {
  const numTab: number[][] = new Array(denominations.length + 1)
    .fill(0)
    .map(() => new Array(num + 1).fill(0));

  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      numTab[0][i] = 1;
    } else {
      numTab[0][i] = 0;
    }
  }

  for (let i = 0; i <= denominations.length; i++) {
    numTab[i][0] = 1;
  }

  for (let i = 0; i < denominations.length; i++) {
    for (let j = 1; j <= num; j++) {
      if (denominations[i] <= j) {
        numTab[i + 1][j] = numTab[i][j] + numTab[i + 1][j - denominations[i]];
      } else {
        numTab[i + 1][j] = numTab[i][j];
      }
    }
  }

  return numTab[denominations.length][num];
};

const denominations = [1, 5, 10, 25];
//console.log(coinChange(denominations, 1)); // 1
//console.log(coinChange(denominations, 2)); // 1
//console.log(coinChange(denominations, 5)); // 2
//console.log(coinChange(denominations, 10)); // 4
//console.log(coinChange(denominations, 25)); // 13
//console.log(coinChange(denominations, 45)); // 39
//console.log(coinChange(denominations, 100)); // 242
//console.log(coinChange(denominations, 145)); // 622
//console.log(coinChange(denominations, 1451)); // 425663
//console.log(coinChange(denominations, 14511)); // 409222339
