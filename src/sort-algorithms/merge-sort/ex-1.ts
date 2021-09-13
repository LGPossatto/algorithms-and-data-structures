// Merge Sort - Helper
/* 
    Given two sorted arrays, write a function called merge which 
    accepts two SORTED arrays and returns a new array with both 
    of the values from each array sorted.
    This function should run in O(n + m) time and O(n + m) space 
    and should not modify the parameters passed to it.
    As before, the function should default to sorting numbers in 
    ascending order. If you pass in a comparator function as a 
    third argument, this comparator is what will be used. (Note 
    that the input arrays will always be sorted according 
    to the comparator!)
    Also, do not use the built in .sort method! We're going to 
    use this helper to implement a sort, so the helper itself 
    shouldn't depend on a sort.

    Examples:
    var arr1 = [1,3,4,5];
    var arr2 = [2,4,6,8];
    merge(arr1,arr2) // [1,2,3,4,4,5,6,8]
     
    arr1 // [1,3,4,5];
    arr2 // [2,4,6,8];
     
    var arr3 = [-2,-1,0,4,5,6];
    var arr4 = [-3,-2,-1,2,3,5,7,8];
     
    merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
     
    var arr5 = [3,4,5]
    var arr6 = [1,2]
     
    merge(arr5,arr6) // [1,2,3,4,5]
     
    var names = ["Bob", "Ethel", "Christine"]
    var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]
     
    function stringLengthComparator(str1, str2) {
      return str1.length - str2.length;
    }
     
    merge(names, otherNames, stringLengthComparator); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
*/

export const mergeArraysEx = (
  arr1: any[],
  arr2: any[],
  comparator?: Function
) => {
  if (typeof comparator !== "function") {
    comparator = (v1: number, v2: number) => {
      return v1 - v2;
    };
  }

  const newArr = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (comparator(arr1[idx1], arr2[idx2]) < 0) {
      newArr.push(arr1[idx1]);
      idx1++;
    } else {
      newArr.push(arr2[idx2]);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    newArr.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    newArr.push(arr2[idx2]);
    idx2++;
  }

  //console.log(newArr);
  return newArr;
};

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
const arr3 = [-2, -1, 0, 4, 5, 6];
const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
const arr5 = [3, 4, 5];
const arr6 = [1, 2];
//mergeArraysEx(arr1, arr2); // [1,2,3,4,4,5,6,8]
//mergeArraysEx(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
//mergeArraysEx(arr5, arr6); // [1,2,3,4,5]

const names = ["Bob", "Ethel", "Christine"];
const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

const stringLengthComparator = (str1: string, str2: string) => {
  return str1.length - str2.length;
};

//mergeArraysEx(names, otherNames, stringLengthComparator); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
