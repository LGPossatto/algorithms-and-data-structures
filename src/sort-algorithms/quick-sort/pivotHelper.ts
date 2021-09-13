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

    Pseudocode:
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
    - Return the pivot index.

    function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
*/

// [5,2,1,8,4,7,6,3]
//  p             -

// [3,2,1,4,5,7,6,8]

export const pivotHelper = (
  arr: number[],
  start = 0,
  end = arr.length - 1
): number => {
  // create var to store indexs
  let swapIdx = start;
  // start loop
  for (let i = start + 1; i <= end; i++) {
    /// if arr[i] is smaller than pivot
    if (arr[start] > arr[i]) {
      //// increase swapIdx and swap it's position
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  // put pivot in it's position
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

  //console.log(arr);
  return swapIdx;
};

//console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3], 0, 7));
//console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3], 0, 7));
