// Quick Sort
/* 
    Like merge sort, exploits the fact that arrays of 0 or 1 
    element are always sorted. Works by selecting one element 
    (called the "pivot") and finding the index where the pivot 
    should end up in the sorted array. Once the pivot is 
    positioned appropriately, quick sort can be applied on 
    either side of the pivot

    Pseudocode:
    - Call the pivot helper on the array;
    - When the helper returns to you the updated pivot index, 
    recursively call the pivot helper on the subarray to the 
    left of that index, and the subarray to the right of that 
    index;
    - Your base case occurs when you consider a subarray with 
    less than 2 elements.
*/
