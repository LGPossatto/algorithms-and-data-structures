// Stack
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removal: Big O(1);
    Searching: Big O(n);
    Access: Big O(n).

    What is a stack?
    - It's a LIFO data structure!
    - The last element added to the stack will be the 
    first element removed from the stack.

    How is it used?
    - Think about a stack of plates, or a stack of markers, 
    or a stack of....anything;
    - As you pile it up the last thing (or the topmost thing) 
    is what gets removed first.

    METHODS =>
    Push:
        Add a value to the top of the stack!

        Pseudocode:
        - The function should accept a value;
        - Create a new node with that value;
        - If there are no nodes in the stack, set the first 
        and last property to be the newly created node;
        - If there is at least one node, create a variable 
        that stores the current first property on the stack;
        - Reset the first property to be the newly created 
        node;
        - Set the next property on the node to be the 
        previously created variable;
        - Increment the size of the stack by 1;
        - Return the size.

    Pop:
        Remove a value from the top of the stack!

        Pseudocode:
        - If there are no nodes in the stack, return null;
        - Create a temporary variable to store the first 
        property on the stack;
        - If there is only 1 node, set the first and last 
        property to be null;
        - If there is more than one node, set the first 
        property to be the next property on the current first;
        - Decrement the size by 1;
        - Return the value of the node removed.
*/

class StackNode<T> {
  public value: T;
  public next: StackNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Stack<T> {
  private first: StackNode<T> | null;
  private last: StackNode<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push = (value: T): number => {
    const newNode = new StackNode<T>(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;
    return this.size;
  };

  pop = (): T | null => {
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

//const newStack = new Stack<number>();
//newStack.push(1);
//newStack.push(2);
//newStack.push(3);
//newStack.push(4);
//newStack.push(5);

//console.log(newStack.pop());
//console.log(newStack.pop());

//console.log(newStack);
