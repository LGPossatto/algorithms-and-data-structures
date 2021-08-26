// Recursion
/* 
    Write a recursive function called flatten 
    which accepts an array of arrays and returns a 
    new array with all values flattened.

    Ex:
    flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5, 6]
    flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]) // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

// [1,2,3,[4,[5]],6];
//                -

const flatten = (arr: any[]): number[] => {
  const flatArr: number[] = [];

  const helper = (arr: any[], index: number = 0) => {
    if (index >= arr.length) return;

    if (arr[index].constructor === Array) {
      helper(arr[index]);
    } else {
      flatArr.push(arr[index]);
    }

    index++;
    helper(arr, index);
  };

  helper(arr);
  return flatArr;
};

console.log(flatten([1, 2, 3, [4, [5]], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
