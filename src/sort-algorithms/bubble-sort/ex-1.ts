// Bubble Sort
/* 
    The comparator function is a callback that will take two 
    values from the array to be compared. The function returns 
    a negative value if the first value is less than the second, 
    a positive value if the first value is greater than the 
    second, and 0 if both values are equal.
    The default comparator you provide should assume that the 
    two parameters are numbers and that we are sorting the values 
    from smallest to largest.

    function bubbleSort(arr, comparator) {
      if (typeof comparator !== 'function') {
        // provide a default
      }
    }

    Examples:
    bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    bubbleSort([1, 2, 3]); // [1, 2, 3]
    bubbleSort([]);
     
    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
     
    function strComp(a, b) {
      if (a < b) { return -1;}
      else if (a > b) { return 1;}
      return 0;
    }
     
    bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
     
    var moarKittyData = [{
      name: "LilBub",
      age: 7
    }, {
      name: "Garfield",
      age: 40
    }, {
      name: "Heathcliff",
      age: 45
    }, {
      name: "Blue",
      age: 1
    }, {
      name: "Grumpy",
      age: 6
    }];
     
    function oldestToYoungest(a, b) {
      return b.age - a.age;
    }
     
    bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
*/

const bubbleSortEx = (arr: any, comparator?: Function) => {
  if (arr.length < 2) return arr;

  if (typeof comparator !== "function") {
    comparator = (v1: number, v2: number) => {
      return v1 - v2;
    };
  }

  let didSwap: boolean;

  for (let i = arr.length - 1; i > 0; i--) {
    didSwap = false;

    for (let j = 0; j < i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        didSwap = true;
      }
    }

    if (!didSwap) break;
  }

  console.log(arr);
  return arr;
};

//bubbleSortEx([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
//bubbleSortEx([0, -10, 7, 4]); // [-10, 0, 4, 7]
//bubbleSortEx([1, 2, 3]); // [1, 2, 3]
//bubbleSortEx([1, 5, 2, 3, 4]); // [1, 2, 3, 4, 5]
//bubbleSortEx([]);

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const strComp = (a: number, b: number) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
};

//bubbleSortEx(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

const oldestToYoungest = (a: any, b: any) => {
  return b.age - a.age;
};

//bubbleSortEx(moarKittyData, oldestToYoungest); // sorted by age in descending order
