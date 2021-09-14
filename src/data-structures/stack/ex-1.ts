// Stack
/* 
    Implement the following methods on the Stack class:
    Push - takes in a node and puts it at the top of the stack. 
    Should return the new size of the stack.

    var stack = new Stack();
     
    stack.push(10) // 1
    stack.first.value // 10
    stack.last.value // 10
    stack.push(100);
    stack.first.value // 100
    stack.last.value // 10
    stack.push(1000);
    stack.first.value // 1000
    stack.last.value // 10
     
    var stack = new Stack();
     
    stack.push(10) // 1
    stack.size // 1
    stack.push(100) // 2
    stack.size // 2
    stack.push(1000) // 3
    stack.size // 3
*/

class StackNodeEx<T> {
  public value: T;
  public next: StackNodeEx<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

export class StackEx<T> {
  protected top: StackNodeEx<T> | null;
  protected bottom: StackNodeEx<T> | null;
  public length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push = (val: T) => {
    const newNode = new StackNodeEx<T>(val);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  };
}
