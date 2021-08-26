// Insertion Sort
/* 
    Time Complexity:
    Worst case: Big O(n^2);
    Better with nearly sorted arrays, works best with 
    constant insertion of data.

    Space Complecity:
    Big O(1).

    Builds up the sort by gradually creating a larger left 
    half which is always sorted.

    [ 5, 3, 4, 1, 2 ]
      -  *
    [ 3, 5, 4, 1, 2 ]
      -  -  *
    [ 3, 4, 5, 1, 2 ]
      -  -  -  *
    [ 1, 3, 4, 5, 2 ]
      -  -  -  -  *
    [ 1, 2, 3, 4, 5 ]
      -  -  -  -  -

    Pseudocode:
    - Start by picking the second element in the array;
    - Now compare the second element with the one before it and 
    swap if necessary;
    - Continue to the next element and if it is in the incorrect 
    order, iterate through the sorted portion (i.e. the left side) 
    to place the element in the correct place;
    - Repeat until the array is sorted.

    const insertionSort = (arr: number[]): number[] => {
      let currentVal;
      for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
          arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
      }
      return arr;
    };
*/

// [ 5, 3, 4, 1, 2 ]
//   -  *

const insertionSort = (arr: number[]): number[] => {
  let currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([5, 3, 4, 1, 2]));
