// Linked List
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removal: Big O(1) or Big O(N) if remove at the end os the list;
    Searching: Big O(N);
    Access: Big O(N).

    What is a linked list?
    - A data structure that contains a head, tail and 
    length property;
    - Linked Lists consist of nodes, and each node has a 
    value and a pointer to another node or null.

     1 -> 2 -> 3 -> 4 -> 5 -> 6
    head                     tail

    Compared to arrays:
    - Do not have indexes;
    - Connected via nodes with a next pointer;
    - Random access is not allowed.

    METHODS =>
    Get:
        Retrieving a node by it's position in the Linked List!

        Pseudocode:
        - This function should accept an index;
        - If the index is less than zero or greater than or equal 
        to the length of the list, return null;
        - Loop through the list until you reach the index and 
        return the node at that specific index.

    Set:
        Changing the value of a node based on it's position in 
        the Linked List!

        Pseudocode:
        - This function should accept a value and an index;
        - Use your get function to find the specific node;
        - If the node is not found, return false;
        - If the node is found, set the value of that node to be 
        the value passed to the function and return true.

    Pushing:
        Adding a new node to the end of the Linked List!

        Pseudocode:
        - This function should accept a value;
        - Create a new node using the value passed to the function;
        - If there is no head property on the list, set the head 
        and tail to be the newly created node;
        - Otherwise set the next property on the tail to be the 
        new node and set the tail property on the list to be the 
        newly created node;
        - Increment the length by one;
        - Return the linked list.

    Popping:
        Removing a node from the end of the Linked List!

        Pseudocode:
        - If there are no nodes in the list, return null;
        - If the length is 1, set the head and tail to be null;
        - Else:
            - Loop through the list until you reach the tail;
            - Set the next property of the 2nd to last node to 
            be null;
            - Set the tail to be the 2nd to last node;
        - Decrement the length of the list by 1;
        - Return the value of the node removed.

    Unshifting:
        Adding a new node to the beginning of the Linked List!

        Pseudocode:
        - This function should accept a value;
        - Create a new node using the value passed to the function;
        - If there is no head property on the list, set the head 
        and tail to be the newly created node;
        - Otherwise set the newly created node's next property to 
        be the current head property on the list;
        - Set the head property on the list to be that newly created 
        node;
        - Increment the length of the list by 1;
        - Return the linked list.

    Shifting:
        Removing a new node from the beginning of the Linked List!

        Pseudocode:
        - If there are no nodes, return null;
        - Store the current head property in a variable;
        - If the length is 1, set the head and tail to be null;
        - Else: 
            -set the head property to be the current head's next 
            property;
            - Remove the next property of the removed node; 
        - Decrement the length by 1;
        - Return the value of the node removed.

    Insert:
        Adding a node to the Linked List at a specific position!

        Pseudocode:
        - If the index is less than zero or greater than the 
        length, return false;
        - If the index is the same as the length, push a new 
        node to the end of the list;
        - If the index is 0, unshift a new node to the start of 
        the list;
        - Otherwise, using the get method, access the node at 
        the index - 1;
        - Set the next property on that node to be the new node;
        - Set the next property on the new node to be the previous 
        next;
        - Increment the length;
        - Return true.

    Remove:
        Removing a node from the Linked List at a specific position!

        Pseudocode:
        - If the index is less than zero or greater than the 
        length, return null;
        - If the index is the same as the length-1, pop;
        - If the index is 0, shift;
        - Otherwise, using the get method, access the node at 
        the index - 1;
        - Set the next property on that node to be the next of 
        the next node;
        - Remove the next property of the removed node; 
        - Decrement the length;
        - Return the value of the node removed.

    Reverse:
        Reversing the Linked List in place!

        Pseudocode:
        - Swap the head and tail;
        - Create a variable called next;
        - Create a variable called prev;
        - Create a variable called node and initialize it to 
        the head property;
        - Loop through the list;
        - Set next to be the next property on whatever node is;
        - Set the next property on the node to be whatever prev is;
        - Set prev to be the value of the node variable;
        - Set the node variable to be the value of the next variable;
        - Once you have finished looping, return the list.
*/

class SinglyNode<T> {
  public val: T;
  public next: SinglyNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList<T> {
  private head: SinglyNode<T> | null;
  private tail: SinglyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get = (index: number): SinglyNode<T> | null => {
    if (index < 0 || index >= this.length) return null;

    let selectedNode = this.head;
    for (let i = 1; i <= index; i++) {
      selectedNode = selectedNode!.next;
    }

    return selectedNode;
  };

  set = (index: number, val: T): boolean => {
    const selectedNode = this.get(index);

    if (!selectedNode) {
      return false;
    }

    selectedNode.val = val;
    return true;
  };

  push = (val: T): SinglyLinkedList<T> => {
    const newNode = new SinglyNode<T>(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  };

  pop = (): SinglyNode<T> | null => {
    if (!this.head) return null;

    let newTail = this.head;
    let currentNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (currentNode!.next) {
        newTail = currentNode;
        currentNode = currentNode!.next;
      }

      this.tail = newTail;
      this.tail!.next = null;
    }

    this.length--;
    return currentNode;
  };

  unshift = (val: T): SinglyLinkedList<T> => {
    const newNode = new SinglyNode<T>(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  };

  shift = (): SinglyNode<T> | null => {
    if (!this.head) return null;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      removedNode!.next = null;
    }

    this.length--;
    return removedNode;
  };

  insert = (index: number, val: T): boolean => {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val) ? true : false;
    if (index === this.length) return this.push(val) ? true : false;

    const newNode = new SinglyNode<T>(val);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode!.next;
    prevNode!.next = newNode;

    this.length++;
    return true;
  };

  remove = (index: number): SinglyNode<T> | null => {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removedNode = prevNode!.next;
    prevNode!.next = prevNode!.next!.next;
    removedNode!.next = null;

    this.length--;
    return removedNode;
  };

  reverse = (): SinglyLinkedList<T> => {
    this.tail = this.head;

    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode!.next;
      currentNode!.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;

    return this;
  };
}

const singlyList = new SinglyLinkedList<number>();
singlyList.push(1);
singlyList.push(2);
singlyList.push(3);

//console.log(singlyList.get(2));
//console.log(singlyList.set(0, 5));
//console.log(singlyList.push(4));
//console.log(singlyList.pop());
//console.log(singlyList.unshift(0));
//console.log(singlyList.shift());
//console.log(singlyList.insert(1, 6));
//console.log(singlyList.remove(1));
//console.log(singlyList.reverse());
console.log(singlyList);
