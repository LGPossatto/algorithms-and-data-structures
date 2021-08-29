// Queue
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removal: Big O(1);
    Searching: Big O(n);
    Access: Big O(n).

    What is a stack?
    - A FIFO data structure!
    - First in first out.

    METHODS =>
    Enqueue:
        Adding to the beginning of the Queue!

        Pseudocode:
        - This function accepts some value;
        - Create a new node using that value passed to 
        the function;
        - If there are no nodes in the queue, set this 
        node to be the first and last property of the queue;
        - Otherwise, set the next property on the current 
        last to be that node, and then set the last property 
        of the queue to be that node;
        - Increment the size of the queue by 1.
        - Return the size.

    Dequeue:
        Removing from the beginning of the Queue!

        Pseudocode:
        - If there is no first property, just return null;
        - Store the first property in a variable;
        - See if the first is the same as the last (check if 
        there is only 1 node). If so, set the first and last 
        to be null;
        - If there is more than 1 node, set the first property 
        to be the next property of first ;
        - Decrement the size by 1;
        - Return the value of the node dequeued.
*/

class QueueNode<T> {
  public value: T;
  public next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  private first: QueueNode<T> | null;
  private last: QueueNode<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue = (value: T): number => {
    const newNode = new QueueNode<T>(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  };

  dequeue = (): T | null => {
    if (!this.first) return null;

    const removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }

    this.first = removedNode.next;
    removedNode.next = null;

    this.size--;
    return removedNode.value;
  };
}

//const newQueue = new Queue<number>();
//newQueue.enqueue(1);
//newQueue.enqueue(2);
//newQueue.enqueue(3);
//newQueue.enqueue(4);
//newQueue.enqueue(5);

//console.log(newQueue.dequeue());
//console.log(newQueue.dequeue());

//console.log(newQueue);
