// Pivot Helper
/* 
    In order to implement merge sort, it's useful to first 
    implement a function responsible arranging elements in 
    an array on either side of a pivot. Given an array, this 
    helper function should designate an element as the pivot.
    It should then rearrange elements in the array so that 
    all values less than the pivot are moved to the left of 
    the pivot, and all values greater than the pivot are moved 
    to the right of the pivot. The order of elements on either 
    side of the pivot doesn't matter! The helper should do this 
    in place, that is, it should not create a new array. When 
    complete, the helper should return the index of the pivot.

    Picking a pivot:
    The runtime of quick sort depends in part on how one selects 
    the pivot. Ideally, the pivot should be chosen so that it's 
    roughly the median value in the data set you're sorting.
    For simplicity, we'll always choose the pivot to be the first 
    element (we'll talk about consequences of this later).

    Pseudocode

    - It will help to accept three arguments: an array, a 
    start index, and an end index (these can default to 0 
    and the array length minus 1, respectively);
    - Grab the pivot from the start of the array;
    - Store the current pivot index in a variable (this will 
    keep track of where the pivot should end up);
    - Loop through the array from the start until the end;
        - If the pivot is greater than the current element, 
        increment the pivot index variable and then swap the 
        current element with the element at the pivot index;
    - Swap the starting element (i.e. the pivot) with the pivot 
    index;
    - Return the pivot index;
*/

// [5,2,1,8,4,7,6,3]
//  p             -

// [3,2,1,4,5,7,6,8]

const swap = (arr: number[], index1: number, index2: number): void => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const pivotHelper = (arr: number[], start: number, end: number): number => {
  // create var to store indexs
  let smallerNums = 0;
  // start loop
  for (let i = start + 1; i <= end; i++) {
    /// if arr[i] is smaller than pivot
    if (arr[start] > arr[i]) {
      //// increase smallerNums
      smallerNums++;
      //// if i greater than smallerNums change it's position
      if (i > smallerNums) {
        swap(arr, i, smallerNums);
      }
    }
  }
  // put pivot in it's position
  swap(arr, 0, smallerNums);

  console.log(arr);
  return smallerNums;
};

console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3], 0, 7));
