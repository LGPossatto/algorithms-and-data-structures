// Priority Queue
/* 
    Time Complexity:
    Insertion: Big O(log n);
    Removing: Big O(log n);
    Searching: (n)

    What is a tree?
    - A data structure where each element has a priority. 
    - Elements with higher priorities are served before elements 
    with lower priorities.

    Based on a Min Binary Heap:
    - Lower number means higher priority;
    - Each Node has a val and a priority. Use the priority 
    to build the heap;
    - Enqueue method accepts a value and priority, makes 
    a new node, and puts it in the right spot based off 
    of its priority;
    - Dequeue method removes root element, returns it, and 
    rearranges heap using priority.

    METHODS =>
    MaxHeapify:
    Converting an array into a MaxBinaryHeap.

    Pseudocode:
    * Create a new heap;
    * Iterate over the array and invoke your insert function;
    * return the values property on the heap.

    Heapsort:
    We can sort an array in O(n log n) time and O(1) space 
    by making it a heap!

    Pseudocode:
    - Make the array a max heap (use maxHeapify);
    - Loop over the array, swap the root node with last item 
    in the array;
    - After swapping each item, run maxHeapify again to find 
    the next root node;
    - Next loop you'll swap the root node with the second-to-last 
    item in the array and run maxHeapify again.
    - Once you've run out of items to swap, you have a sorted 
    array!
*/

class PriorityNode<T> {
  public value: T;
  public priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriotiryQueue<T> {
  private values: PriorityNode<T>[];

  constructor() {
    this.values = [];
  }

  enqueue = (value: T, priority: number): PriorityNode<T>[] => {
    const newNode = new PriorityNode<T>(value, priority);

    let childIdx = this.values.length;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    let temp: PriorityNode<T>;

    this.values.push(newNode);

    // bubble up
    while (parentIdx >= 0 && priority < this.values[parentIdx].priority) {
      temp = this.values[childIdx];
      this.values[childIdx] = this.values[parentIdx];
      this.values[parentIdx] = temp;

      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }

    return this.values;
  };

  dequeue = (): PriorityNode<T> | null => {
    if (this.values.length <= 0) return null;
    if (this.values.length === 1) return this.values.pop()!;

    const minValue = this.values[0];
    let idx = 0;
    let leftIdx = 1;
    let rightIdx = 2;
    let minIdx: number;
    let temp: PriorityNode<T>;

    this.values[idx] = this.values.pop()!;

    // sink down
    while (this.values[leftIdx]) {
      if (this.values[rightIdx]) {
        minIdx =
          this.values[leftIdx].priority <= this.values[rightIdx].priority
            ? leftIdx
            : rightIdx;
      } else {
        minIdx = leftIdx;
      }

      if (this.values[idx].priority > this.values[minIdx].priority) {
        temp = this.values[idx];
        this.values[idx] = this.values[minIdx];
        this.values[minIdx] = temp;

        idx = minIdx;
        leftIdx = 2 * idx + 1;
        rightIdx = 2 * idx + 2;
      } else {
        break;
      }
    }

    return minValue;
  };
}

const newPQ = new PriotiryQueue<number>();
newPQ.enqueue(41, 5);
newPQ.enqueue(39, 0);
newPQ.enqueue(33, 5);
newPQ.enqueue(18, 3);
newPQ.enqueue(27, 5);
newPQ.enqueue(12, 2);
newPQ.enqueue(55, 1);

console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
//console.log(newPQ.dequeue());
console.log(newPQ);
