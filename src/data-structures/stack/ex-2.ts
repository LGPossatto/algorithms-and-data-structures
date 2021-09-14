// Stack
/* 
    Implement the following methods on the Stack class:

    Pop - removes the node at the top of the stack and 
    returns the value of that node.

    var stack = new Stack();
     
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    
    var removed = stack.pop();
    removed // 1000
    
    stack.size // 2
    stack.pop();
    stack.pop();
    stack.size // 0
*/

import { StackEx } from "./ex-1";

class StackExPop<T> extends StackEx<T> {
  constructor() {
    super();
  }

  pop = () => {
    if (!this.top) return undefined;

    const removedNode = this.top;

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = removedNode.next;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  };
}

const stack = new StackExPop();

stack.push(10);
stack.push(100);
stack.push(1000);

console.log(stack.pop());

console.log(stack.length); // 2
stack.pop();
stack.pop();
console.log(stack.length); // 0
