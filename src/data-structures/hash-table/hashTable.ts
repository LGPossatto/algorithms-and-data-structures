// Hash Tables
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removing: Big O(1);
    Searching: (1).

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

class HashNode<T> {
  public value: T;

  constructor(value: T) {
    this.value = value;
  }
}

class HashTable<T> {
  private values: PriorityNode<T>[];

  constructor() {
    this.values = [];
  }
}

const newHT = new HashTable();

console.log(newHT);
