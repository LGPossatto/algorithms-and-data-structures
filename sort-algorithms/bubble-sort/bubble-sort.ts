// Bubble Sort
/* 
    Time Complexity:
    Worst case: Big O(n^2);
    If the array is nearly sorted: Big O(n);

    A sorting algorithm where the largest 
    values bubble up to the top!

    [ 5, 3, 4, 1, 2 ]
      -  *
    [ 3, 5, 4, 1, 2 ]
         -  *
    [ 3, 4, 5, 1, 2 ]
            -  *
    [ 3, 4, 1, 5, 2 ]
               -  *
    [ 3, 4, 1, 2, 5 ]
                  -

    Pseudocode:
    - Start looping from the end of the array towards the 
    beginning with a variable called i;
    - Start an inner loop with a variable called j from the 
    beginning until i - 1;
    - If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array.

    Unoptimized:
    function bubbleSort(arr){
      for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
          if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;         
          }
        }
      }
      return arr;
    }

    Optimized:
    function bubbleSort(arr){
      var noSwaps;
      for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
          if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;         
          }
        }
        if(noSwaps) break;
      }
      return arr;
    }
*/

const bubbleSort = (arr: number[]) => {
  // create pointers
  let index = 0;
  let sortEnd = arr.length - 1;
  // create var to check if no swaps were made
  let didSwap = false;
  // start loop
  while (index < sortEnd) {
    /// if arr[i] > arr[i+1] swap
    if (arr[index] > arr[index + 1]) {
      didSwap = true;
      //// Swap
      const temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
    }
    /// go to next index
    index++;
    /// check if index got to the end of the loop
    if (index === sortEnd) {
      //// check if it did not swap
      if (!didSwap) {
        break;
      }
      //// subtract sortEnd by 1 and reset index and didSwap
      sortEnd--;
      index = 0;
      didSwap = false;
    }
  }
  return arr;
};

console.log(bubbleSort([5, 3, 4, 1, 2]));
console.log(bubbleSort([5, 1, 2, 3, 4]));
