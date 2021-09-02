// Hash Tables
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removing: Big O(1);
    Access: Big O(1).

    What is a hash table?
    - Hash tables are used to store key-value pairs;
    - They are like arrays, but the keys are not ordered;
    - Unlike arrays, hash tables are fast for all of the 
    following operations: finding values, adding new values, 
    and removing values!

    The hash part:
    - In order to look up values by key, we need a way to 
    convert keys into valid array indices;
    - A function that performs this task is called a hash 
    function.

    What makes a good hash?
    - Fast (i.e. constant time);
    - Doesn't cluster outputs at specific indices, but 
    distributes uniformly;
    - Deterministic (same input yields same output).

    Dealing with collisions:
    - Even with a large array and a great hash function, 
    collisions are inevitable;
    - There are many strategies for dealing with collisions, 
    but we'll focus on two:
        - Separate Chaining:
            - With separate chaining, at each index in our 
            array we store values using a more sophisticated 
            data structure (e.g. an array or a linked list);
            - This allows us to store multiple key-value pairs 
            at the same index.
        - Linear Probing:
            - With linear probing, when we find a collision, 
            we search through the array to find the next 
            empty slot;
            - Unlike with separate chaining, this allows us 
            to store a single key-value at each index.

    METHODS =>
    Set:
    - Accepts a key and a value;
    - Hashes the key;
    - Stores the key-value pair in the hash table array via 
    separate chaining.

    Get:
    - Accepts a key;
    - Hashes the key;
    - Retrieves the key-value pair in the hash table;
    - If the key isn't found, returns undefined.

    Keys:
    - Loops through the hash table array and returns an 
    array of keys in the table.

    Values:
    - Loops through the hash table array and returns an 
    array of values in the table.
*/

type hashArray<T> = [key: string, value: T];

class HashTable<T> {
  private keyMap: hashArray<T>[][];

  constructor(size: number = 50) {
    this.keyMap = new Array(size);
  }

  private hashKey = (key: string) => {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  };

  set = (key: string, value: T): number => {
    const hashIdx = this.hashKey(key);

    if (this.keyMap[hashIdx]) {
      const existIdx = this.keyMap[hashIdx].findIndex(
        (array) => array[0] === key
      );

      if (existIdx >= 0) {
        this.keyMap[hashIdx][existIdx][1] = value;
      } else {
        this.keyMap[hashIdx].push([key, value]);
      }
    } else {
      this.keyMap[hashIdx] = [[key, value]];
    }

    return hashIdx;
  };

  get = (key: string): T | undefined => {
    const hashIdx = this.hashKey(key);

    if (this.keyMap[hashIdx]) {
      const value = this.keyMap[hashIdx].find((array) => array[0] === key);
      if (value) return value[1];
    }
    return undefined;
  };

  getKeys = (): string[] => {
    const keysArr: string[] = [];

    // recursive
    const recursiveScan = (arr: any[]) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i].constructor === Array) {
          recursiveScan(arr[i]);
        } else if (arr[0]) {
          keysArr.push(arr[0]);
          break;
        }
      }
    };
    recursiveScan(this.keyMap);

    // iterative
    // for (let i = 0; i < this.keyMap.length; i++) {
    //   if (this.keyMap[i]) {
    //     for (let j = 0; j < this.keyMap[i].length; j++) {
    //       if (!keysArr.includes(this.keyMap[i][j][0])) {
    //         keysArr.push(this.keyMap[i][j][0]);
    //       }
    //     }
    //   }
    // }

    return keysArr;
  };

  getValues = (): T[] => {
    const valuesArr: T[] = [];

    // recursive
    const recursiveScan = (arr: any[]) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i].constructor === Array) {
          recursiveScan(arr[i]);
        } else if (arr[1]) {
          valuesArr.push(arr[1]);
          break;
        }
      }
    };
    recursiveScan(this.keyMap);

    // iterative
    // for (let i = 0; i < this.keyMap.length; i++) {
    //   if (this.keyMap[i]) {
    //     for (let j = 0; j < this.keyMap[i].length; j++) {
    //       if (!valuesArr.includes(this.keyMap[i][j][1])) {
    //         valuesArr.push(this.keyMap[i][j][1]);
    //       }
    //     }
    //   }
    // }

    return valuesArr;
  };
}

const newHT = new HashTable<string>(10);
newHT.set("black", "#000");
newHT.set("maroon", "#800000");
newHT.set("yellow", "#FFFF00");
newHT.set("olive", "#808000");
newHT.set("salmon", "#FA8072");
newHT.set("lightcoral", "#F08080");
newHT.set("mediumvioletred", "#C71585");
newHT.set("plum", "#DDA0DD");
newHT.set("black", "#111");

//console.log(newHT.get("black"));
//console.log(newHT.get("maroon"));
//console.log(newHT.get("yellow"));
//console.log(newHT.get("olive"));
//console.log(newHT.get("salmon"));
//console.log(newHT.get("lightcoral"));
//console.log(newHT.get("mediumvioletred"));
//console.log(newHT.get("plum"));
//console.log(newHT.get("pluma"));

console.log(newHT.getKeys());
console.log(newHT.getValues());
