// Binary Heap
/* 
    Time Complexity:
    Insertion: Big O(log n);
    Removing: Big O(log n);
    Searching: (n)

    What is a tree?
    - Very similar to a binary search tree, but with some 
    different rules!
    - In a MaxBinaryHeap, parent nodes are always larger 
    than child nodes. In a MinBinaryHeap, parent nodes are 
    always smaller than child nodes.

    Max Binary Heap:
    - Each parent has at most two child nodes;
    - The value of each parent node is always greater than its 
    child nodes;
    - In a max Binary Heap the parent is greater than the children, 
    but there are no guarantees between sibling nodes;
    - A binary heap is as compact as possible. All the children of 
    each node are as full as they can be and left children are 
    filled out first.

    Array Representation:
    - For any index of an array n...;
    - The left child is stored at 2n + 1;
    - The right child is at 2n + 2.
    
    - For any child node at index  n...;
    - Its parent is at index (n-1)/2 floored;

    METHODS =>
    Insert:
    Add to the end / Bubble up.

    Pseudocode:
    * Push the value into the values property on the heap;
    * Bubble the value up to its correct spot!

    - Push the value into the values property on the heap;
    - Bubble Up:
        - Create a variable called index which is the length 
        of the values property - 1;
        - Create a variable called parentIndex which is the 
        floor of (index-1)/2;
        - Keep looping as long as the values element at 
        the parentIndex is less than the values element 
        at the child index:
            - Swap the value of the values element at the 
            parentIndex with the value of the element property 
            at the child index;
            - Set the index to be the parentIndex, and 
            start over!

    Removing (extractMax):
    Remove the root / Replace with the most recently 
    added / Adjust (sink down).

    Pseudocode:
    * The procedure for deleting the root from the heap 
    (effectively extracting the maximum element in a max-heap 
    or the minimum element in a min-heap) and restoring the 
    properties is called down-heap (also known as bubble-down, 
    percolate-down, sift-down, trickle down, heapify-down, 
    cascade-down, and extract-min/max).

    - Swap the first value in the values property with the 
    last one;
    - Pop from the values property, so you can return the 
    value at the end;
    - Have the new root "sink down" to the correct spot:
        - Your parent index starts at 0 (the root);
        - Find the index of the left child: 2 * index + 1 (make 
          sure its not out of bounds);
        - Find the index of the right child: 2*index + 2 (make 
          sure its not out of bounds);
        - If the left or right child is greater than the 
        element...swap. If both left and right children are 
        larger, swap with the largest child;
        - The child index you swapped to now becomes the new 
        parent index;
        - Keep looping and swapping until neither child is 
        larger than the element;
        - Return the old root!
*/

class BinaryHeap {
  private values: number[];

  constructor() {
    this.values = [];
  }

  insert = (value: number): number[] => {
    let childIdx = this.values.length;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    this.values.push(value);

    // bubble up
    while (parentIdx >= 0 && value > this.values[parentIdx]) {
      this.values[childIdx] = this.values[parentIdx];
      this.values[parentIdx] = value;

      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }

    return this.values;
  };

  extractMax = (): number | null => {
    if (this.values.length <= 0) return null;
    if (this.values.length === 1) return this.values.pop()!;

    const maxValue = this.values[0];
    let idx = 0;
    let leftIdx = 1;
    let rightIdx = 2;
    let maxIdx: number;

    this.values[idx] = this.values.pop()!;

    // sink down
    while (this.values[leftIdx]) {
      if (this.values[rightIdx]) {
        maxIdx =
          this.values[leftIdx] >= this.values[rightIdx] ? leftIdx : rightIdx;
      } else {
        maxIdx = leftIdx;
      }

      if (this.values[idx] < this.values[maxIdx]) {
        const temp = this.values[idx];
        this.values[idx] = this.values[maxIdx];
        this.values[maxIdx] = temp;

        idx = maxIdx;
        leftIdx = 2 * idx + 1;
        rightIdx = 2 * idx + 2;
      } else {
        break;
      }
    }

    return maxValue;
  };
}

const newBH = new BinaryHeap();
newBH.insert(41);
newBH.insert(39);
newBH.insert(33);
newBH.insert(18);
newBH.insert(27);
newBH.insert(12);
newBH.insert(55);

console.log(newBH.extractMax());

console.log(newBH);
