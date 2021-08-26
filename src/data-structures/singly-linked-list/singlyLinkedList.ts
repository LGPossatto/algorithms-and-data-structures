// Linked List
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removal: Big O(1) or Big O(N) if...;
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
        - If there are no nodes in the list, return undefined;
        - Loop through the list until you reach the tail;
        - Set the next property of the 2nd to last node to be null;
        - Set the tail to be the 2nd to last node;
        - Decrement the length of the list by 1;
        - Return the value of the node removed.

    Shifting:
        Removing a new node from the beginning of the Linked List!

        Pseudocode:
        - If there are no nodes, return undefined;
        - Store the current head property in a variable;
        - Set the head property to be the current head's next 
        property;
        - Decrement the length by 1;
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
        length, return undefined;
        - If the index is the same as the length-1, pop;
        - If the index is 0, shift;
        - Otherwise, using the get method, access the node at 
        the index - 1;
        - Set the next property on that node to be the next of 
        the next node;
        - Decrement the length;
        - Return the value of the node removed.

    Reverse:
        Reversing the Linked List in place!

        Pseudocode:
        - Swap the head and tail;
        - Create a variable called next;
        - Create a variable called prev;
        - Create a variable called node and initialize it to the head property;
        - Loop through the list;
        - Set next to be the next property on whatever node is;
        - Set the next property on the node to be whatever prev is;
        - Set prev to be the value of the node variable;
        - Set the node variable to be the value of the next variable;
        - Once you have finished looping, return the list.
*/

class LinkedNode {
  public val: number;
  public next: LinkedNode | null;

  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  private head: LinkedNode | null;
  private tail: LinkedNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (val: any): SinglyLinkedList => {
    const newNode = new LinkedNode(val);

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

  pop = () => {
    if (!this.head) return undefined;

    let newTail = this.head;
    let currentNode = this.head;
    while (currentNode!.next) {
      newTail = currentNode;
      currentNode = currentNode!.next;
    }

    this.tail = newTail;
    this.tail!.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  };

  unshift = (val: any) => {
    const newNode = new LinkedNode(val);

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

  shift = () => {
    if (!this.head) return undefined;

    let removedNode = this.head;
    this.head = this.head!.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return removedNode;
  };

  get = (index: number) => {
    if (index < 0 || index >= this.length) return null;

    let selectedNode = this.head;
    for (let i = 0; i < index; i++) {
      selectedNode = selectedNode!.next;
    }

    return selectedNode;
  };

  set = (index: number, val: any) => {
    const selectedNode = this.get(index);

    if (!selectedNode) {
      return false;
    }

    selectedNode.val = val;
    return true;
  };
}

const linkedList = new SinglyLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

//console.log(linkedList);
//console.log(linkedList.push(5));
//console.log(linkedList.pop());
//console.log(linkedList.unshift(0));
//console.log(linkedList.shift());
//console.log(linkedList.get(2));
//console.log(linkedList.set(0, 22));
console.log(linkedList);
