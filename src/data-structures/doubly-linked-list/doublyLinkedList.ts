// Doubly Linked List
/* 
    Time Complexity:
    Insertion: Big O(1);
    Removal: Big O(1);
    Searching: Big O(N), technically O(N / 2);
    Access: Big O(N).

    Almost identical to Singly Linked Lists, except every 
    node has another pointer, to the previous node!
    METHODS =>
    Get:
        Accessing a node in a Doubly Linked List by its 
        position!

        Pseudocode:
        - If the index is less than 0 or greater or equal to 
        the length, return null;
        - If the index is less than or equal to half the length 
        of the list;
            - Loop through the list starting from the head and 
            loop towards the middle;
            - Return the node once it is found;
        - If the index is greater than half the length of the 
        list;
            - ​Loop through the list starting from the tail and 
            loop towards the middle;
            - Return the node once it is found.

    Set:
        Replacing the value of a node to the in a Doubly 
        Linked List!

        Pseudocode:
        - Create a variable which is the result of the get 
        method at the index passed to the function;
            - If the get method returns a valid node, set the 
            value of that node to be the value passed to the 
            function;
            - Return true;
        - Otherwise, return false;

    Pushing:
        Adding a node to the end of the Doubly Linked List!

        Pseudocode:
        - Create a new node with the value passed to the 
        function;
        - If the head property is null set the head and tail 
        to be the newly created node;
        - If not, set the next property on the tail to be that 
        node;
        - Set the previous property on the newly created node 
        to be the tail;
        - Set the tail to be the newly created node;
        - Increment the length;
        - Return the Doubly Linked List.

    Popping:
        Removing a node from the end of the Doubly Linked List!

        Pseudocode:
        - If there is no head, return null;
        - Store the current tail in a variable to return later;
        - If the length is 1, set the head and tail to be null;
        - Update the tail to be the previous Node.;
        - Set the newTail's next to null;
        - Decrement the length;
        - Return the value removed.

    Unshifting:
        Adding a node to the beginning of the Doubly 
        Linked List!

        Pseudocode:
        - Create a new node with the value passed to the 
        function;
        - If the length is 0;
            - Set the head to be the new node;
            - Set the tail to be the new node;
        - Otherwise;
            - Set the prev property on the head of the list 
            to be the new node;
            - Set the next property on the new node to be the 
            head property;
            - Update the head to be the new node;
        - Increment the length;
        - Return the list.

    Shifting:
        Removing a node from the beginning of the Doubly 
        Linked List!

        Pseudocode:
        - If length is 0, return null;
        - Store the current head property in a variable 
        (we'll call it old head);
        - If the length is one;
            - set the head to be null;
            - set the tail to be null;
        - Update the head to be the next of the old head;
        - Set the head's prev property to null;
        - Set the old head's next to null;
        - Decrement the length;
        - Return old head.

    Insert:
        Adding a node in a Doubly Linked List by a certain 
        position!

        Pseudocode:
        - If the index is less than zero or greater than or 
        equal to the length return false;
        - If the index is 0, unshift;
        - If the index is the same as the length, push;
        - Use the get method to access the index -1;
        - Set the next and prev properties on the correct 
        nodes to link everything together;
        - Increment the length ;
        - Return true.

    Remove:
        Removing a node in a Doubly Linked List by a 
        certain position!

        Pseudocode:
        - If the index is less than zero or greater than or 
        qual to the length return null;
        - If the index is 0, shift;
        - If the index is the same as the length-1, pop;
        - Use the get method to retrieve the item to be removed;
        - Update the next and prev properties to remove the 
        found node from the list;
        - Set next and prev to null on the found node;
        - Decrement the length;
        - Return the removed node.

    Reverse:
        Reversing a Doubly Linked List in place!

        Pseudocode:
        - Create a variable called current and set it to be the 
        head of the list;
        - Create a variable called tail and set it to be the head 
        of the list;
        - Loop through the list and set the next property of the 
        current node to be the prev property of the current node;
        - If there is no next property, set the tail to be the head 
        and the head to be the current variable;
        - Return the list.
*/

class DoublyNode<T> {
  public val: T;
  public next: DoublyNode<T> | null;
  public prev: DoublyNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null;
  private tail: DoublyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (val: T): DoublyLinkedList<T> => {
    const newNode = new DoublyNode<T>(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  };

  pop = (): DoublyNode<T> | null => {
    if (!this.head) return null;

    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode!.prev;
      this.tail!.next = null;
      removedNode!.prev = null;
    }

    this.length--;
    return removedNode;
  };

  unshift = (val: T): DoublyLinkedList<T> => {
    const newNode = new DoublyNode<T>(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode!.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  };

  shift = (): DoublyNode<T> | null => {
    if (!this.head) return null;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    } else {
      this.head = removedNode!.next;
      this.head!.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  };
}

const doublyList = new DoublyLinkedList<number>();
doublyList.push(1);
doublyList.push(2);
doublyList.push(3);

//console.log(doublyList.get(2));
//console.log(doublyList.set(0, 5));
//console.log(doublyList.push(4));
//console.log(doublyList.pop());
console.log(doublyList.unshift(0));
//console.log(doublyList.shift());
//console.log(doublyList.insert(1, 6));
//console.log(doublyList.remove(1));
//console.log(doublyList.reverse());
console.log(doublyList);
