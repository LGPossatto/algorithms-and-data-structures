// Merging Arrays
/* 
    In order to implement merge sort, it's useful to first 
    implement a function responsible for merging two sorted arrays. 
    Given two arrays which are sorted, this helper function should 
    create a new array which is also sorted, and consists of all of 
    the elements in the two input arrays. This function should run 
    in O(n + m) time and O(n + m) space and should not modify 
    the parameters passed to it.

    Pseudocode:
    - Create an empty array, take a look at the smallest values 
    in each input array;
    - While there are still values we haven't looked at...
        - If the value in the first array is smaller than the 
        value in the second array, push the value in the first 
        array into our results and move on to the next value in 
        the first array;
        - If the value in the first array is larger than the 
        value in the second array, push the value in the second 
        array into our results and move on to the next value in 
        the second array;
        - Once we exhaust one array, push in all remaining values 
        from the other array.

    function merge(arr1, arr2){
        let results = [];
        let i = 0;
        let j = 0;
        while(i < arr1.length && j < arr2.length){
            if(arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j])
                j++;
            }
        }
        while(i < arr1.length) {
            results.push(arr1[i])
            i++;
        }
        while(j < arr2.length) {
            results.push(arr2[j])
            j++;
        }
        return results;
    }
*/

// [3,4,5,8] [1,2,6,7]
//    f           s
// [1,2,3, ]

export const mergeArrays = (
  firstArr: number[],
  secondArr: number[]
): number[] => {
  const mergeArr: number[] = [];
  // create pointer to navigate arrays
  let firstP = 0;
  let secondP = 0;
  // create function to push the rest
  const pushRest = (arr: number[], start: number): void => {
    for (let i = start; i < arr.length; i++) {
      mergeArr.push(arr[i]);
    }
  };
  // start while loop, break when one of the two arrays are finished
  while (true) {
    /// if first value is lower, push it and move it's pointer forward
    if (firstArr[firstP] < secondArr[secondP]) {
      mergeArr.push(firstArr[firstP]);
      firstP++;
    }
    /// if second value is lower, push it and move it's pointer forward
    else {
      mergeArr.push(secondArr[secondP]);
      secondP++;
    }
    /// if one of the arrays is finished push the rest in order
    if (firstP >= firstArr.length) {
      pushRest(secondArr, secondP);
      break;
    } else if (secondP >= secondArr.length) {
      pushRest(firstArr, firstP);
      break;
    }
  }
  return mergeArr;
};

// console.log(mergeArrays([3, 4, 5, 8], [1, 2, 6, 7]));
// console.log(mergeArrays([10, 12, 99, 100], [1, 2, 6, 7]));
// console.log(mergeArrays([3, 4, 20, 28], [5, 22, 60, 70, 85]));
// console.log(mergeArrays([], [1, 2]));
