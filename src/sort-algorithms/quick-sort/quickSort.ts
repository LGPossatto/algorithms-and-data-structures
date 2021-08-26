// Quick Sort
/* 
    Time Complexity:
    Avg: Big O(n * log n);
    Worst case: Big O(n^2).


    Space Complecity:
    Big O(log n).

    Like merge sort, exploits the fact that arrays of 0 or 1 
    element are always sorted. Works by selecting one element 
    (called the "pivot") and finding the index where the pivot 
    should end up in the sorted array. Once the pivot is 
    positioned appropriately, quick sort can be applied on 
    either side of the pivot.

    [4,6,9,1,2,5,3]
    [3,2,1,4,6,9,5]
           4
     3,2,1    6,9,5
         3      6
     2,1      5  9
       2
     1

    Pseudocode:
    - Call the pivot helper on the array;
    - When the helper returns to you the updated pivot index, 
    recursively call the pivot helper on the subarray to the 
    left of that index, and the subarray to the right of that 
    index;
    - Your base case occurs when you consider a subarray with 
    less than 2 elements.
*/

import { pivotHelper } from "./pivotHelper";

const quickSort = (
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
