// Selection Sort
/* 
    Time Complexity:
    Worst case: Big O(n^2);
    Compared to Bubble Sort, it does a lot less writing to memory.

    Space Complecity:
    Big O(1).
    
    Similar to bubble sort, but instead of first placing 
    large values into sorted position, it places small values 
    into sorted position.

    [ 5, 3, 4, 1, 2 ]
      -  *
    [ 5, 3, 4, 1, 2 ]
      -  s  *
    [ 5, 3, 4, 1, 2 ]
      -  s     *  
    [ 5, 3, 4, 1, 2 ]
      -        s  *
    [ 1, 3, 4, 5, 2 ]
      -

    Pseudocode:
    - Store the first element as the smallest value you've 
    seen so far;
    - Compare this item to the next item in the array until 
    you find a smaller number;
    - If a smaller number is found, designate that smaller 
    number to be the new "minimum" and continue until the end 
    of the array;
    - If the "minimum" is not the value (index) you initially 
    began with, swap the two values;
    - Repeat this with the next element until the array is sorted.
*/

const selectionSort = (arr: number[]) => {
  // create var to store min value
  let minValIndex: number;
  // loop array starting on i = 0
  for (let i = 0; i < arr.length; i++) {
    /// iniciate minValIndex
    minValIndex = i;
    /// loop array starting on i + 1
    for (let j = i + 1; j < arr.length; j++) {
      //// check if value at i is smaller than value at j
      if (arr[minValIndex] > arr[j]) {
        ///// store min value index
        minValIndex = j;
      }
    }
    /// if necessary swap values
    if (arr[i] > arr[minValIndex]) {
      //// swap
      const temp = arr[i];
      arr[i] = arr[minValIndex];
      arr[minValIndex] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([5, 3, 4, 1, 2]));
