// Stack
/* 
    Implement a stack using two queues:
    - push (returns the stack)
    - pop (returns the value popped)

    var s = new Stack()
    s.push(10).push(20).push(30)
    s.pop() // 30
    s.pop() // 20
    s.pop() // 10
    s.pop() // null
    s.push(30).push(40).push(50)
    s.pop() // 50
    s.push(60)
    s.pop() // 60
*/

class StackQueueNode {
  value: any;
  next: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class QueueEx {
  public first: any;
  public last: any;
  public size: any;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data: any) {
    var node = new StackQueueNode(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class StackWithQueue {}

class Stack {
  queue;
  size;

  constructor() {
    this.queue = new QueueEx();
    this.size = 0;
  }

  push(val: any) {
    const newNode = new StackQueueNode(val);
    const newQueue = new QueueEx();

    newQueue.enqueue(newNode);

    while (this.queue.size) {
      newQueue.enqueue(this.queue.dequeue());
    }

    this.queue = newQueue;

    this.size++;
    return this;
  }

  pop() {
    return this.queue.dequeue();
  }
}
