// Recursion
/* 
    Write a recursive function called capitalizeFirst. 
    Given an array of strings, capitalize the first letter 
    of each string in the array.

    Ex:
    capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

// 'car'
//

const capitalizeFirst = (arr: string[]) => {
  const newArr: string[] = [];
  let index: number;
  let tempWord: string;

  const addRest = (str: string) => {
    if (index >= str.length) return;

    tempWord += str[index];
    index++;
    addRest(str);
  };

  for (let str of arr) {
    index = 1;
    tempWord = "";
    tempWord += str[0].toUpperCase();

    addRest(str);

    newArr.push(tempWord);
  }

  return newArr;
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
