// Merge Sort
/* 
    Time Complexity:
    Worst case: Big O(n * log n).

    Space Complecity:
    Big O(n).

    It's a combination of two things - merging and sorting! 
    Exploits the fact that arrays of 0 or 1 element are always 
    sorted. Works by decomposing an array into smaller arrays of 0 or 1 
    elements, then building up a newly sorted array.

              [ 8, 3, 5, 4, 7, 6, 1, 2 ]
                         split
             [ 8, 3, 5, 4 ] [ 7, 6, 1, 2 ]
                         split
          [ 8, 3 ] [ 5, 4 ] [ 1, 2 ] [ 7, 6 ]
                         split
    [ 8 ] [ 3 ] [ 5 ] [ 4 ] [ 7 ] [ 6 ] [ 1 ] [ 2 ]
                         merge
          [ 3, 8 ] [ 4, 5 ] [ 6, 7 ] [ 1, 2 ]
                         merge
             [ 3, 4, 5, 8 ] [ 1, 2, 6, 7 ]
                         merge
              [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    Pseudocode:
    - Break up the array into halves until you have arrays that 
    are empty or have one element;
    - Once you have smaller sorted arrays, merge those arrays with 
    other sorted arrays until you are back at the full length of 
    the array;
    - Once the array has been merged back together, return the 
    merged (and sorted!) array.
*/

import { mergeArrays } from "./mergeArrays";

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
};

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
