// Binary Search Tree
/* 
    Time Complexity:
    Insertion: Big O(log n);
    Searching: Big O(log n).

    What is a tree?
    - A data structure that consists of nodes in a 
    parent / child relationship.

    Terminology:
    - Root - The top node in a tree;
    - Child -A node directly connected to another node 
    when moving away from the Root;
    - Parent - The converse notion of a child;
    - Siblings -A group of nodes with the same parent;
    - Leaf - A node with no children;
    - Edge - The connection between one node and another.

    METHODS =>
    Insert - Iteratively or Recursively:
    - Create a new node;
    - Starting at the root;
    - Check if there is a root, if not - the root now 
    becomes that new node!
    - If there is a root, check if the value of the new 
    node is greater than or less than the value of the root;
    - If it is greater check to see if there is a node 
    to the right:
        - If there is, move to that node and repeat 
        these steps;
        - If there is not, add that node as the 
        right property.
    - If it is less check to see if there is a node 
    to the left:
        - If there is, move to that node and repeat 
        these steps;
        - If there is not, add that node as the left 
        property.

    Search - Iteratively or Recursively:
    - Starting at the root;
    - Check if there is a root, if not - we're done 
    searching!;
    - If there is a root, check if the value of the 
    new node is the value we are looking for. If we 
    found it, we're done!
    - If not, check to see if the value is greater 
    than or less than the value of the root;
    - If it is greater check to see if there is a 
    node to the right:
        - If there is, move to that node and repeat 
        these steps;
        - If there is not, we're done searching!
    - If it is less check to see if there is a node to 
    the left:
        - If there is, move to that node and repeat 
        these steps;
        - If there is not, we're done searching!

    Remove (0 children) - Iteratively:
    - Find the parent of the node that needs to be removed and 
    the node that needs to be removed;
    - If the value we are removing is greater than the 
    parent node:
        - Set the right property of the parent to be null.
    - If the value we are removing is less than the parent node​:
        - Set the left property of the parent to be null.
    - Otherwise, the node we are removing has to be the root, 
    so set the root to be null.

    Remove (1 children) - Iteratively:
    - Find the parent of the node that needs to be removed 
    and the node that needs to be removed;
    - See if the child of the node to be removed is on the 
    right side or the left side;
    - If the value we are removing is greater than the 
    parent node​​:
        - Set the right property of the parent to be the child.
    - If the value we are removing is less than the parent node​:
        - Set the left property of the parent to be the child.
    - Otherwise, set the root property of the tree to be the child.

    Remove (2 children) - Iteratively:
    - Find the parent of the node that needs to be removed 
    and the node that needs to be removed;
    - Find the predecessor node and store that in a variable;
    - Set the left property of the predecessor node to be the 
    left property of the node that is being removed;
    - If the value we are removing is greater than the parent node​​:
        - Set the right property of the parent to be the right 
        property of the node to be removed.
    - If the value we are removing is less than the parent node​:
        - Set the left property of the parent to be the right 
        property of the node to be removed.
    - Otherwise, set the root of the tree to be the right 
    property of the node to be removed.

    Tree Traversal =>
    Breadth First Search - Iteratively:
    - Create a queue (this can be an array) and a variable 
    to store the values of nodes visited;
    - Place the root node in the queue;
    - Loop as long as there is anything in the queue:
        - Dequeue a node from the queue and push the value 
        of the node into the variable that stores the nodes;
        - If there is a left property on the node dequeued - add 
        it to the queue;
        - If there is a right property on the node dequeued - add 
        it to the queue.
    - Return the variable that stores the values.

    Depth First Search (PreOrder) - Recursively:
    - Create a variable to store the values of nodes visited;
    - Store the root of the BST in a variable called current;
    - Write a helper function which accepts a node:
        - Push the value of the node to the variable that stores 
        the values;
        - If the node has a left property, call the helper 
        function with the left property on the node;
        - If the node has a right property, call the helper 
        function with the right property on the node.
    - Invoke the helper function with the current variable;
    - Return the array of values.

    Depth First Search (PostOrder) - Recursively:
    - Create a variable to store the values of nodes visited;
    - Store the root of the BST in a variable called current;
    - Write a helper function which accepts a node:
        - If the node has a left property, call the helper 
        function with the left property on the node;
        - If the node has a right property, call the helper 
        function with the right property on the node;
        - Push the value of the node to the variable that 
        stores the values;
    - Invoke the helper function with the current variable.
    - Return the array of values.

    Depth First Search (InOrder) - Recursively:
    - Create a variable to store the values of nodes visited;
    - Store the root of the BST in a variable called current;
    - Write a helper function which accepts a node:
        - If the node has a left property, call the helper 
        function with the left property on the node;
        - Push the value of the node to the variable that 
        stores the values;
        - If the node has a right property, call the helper 
        function with the right property on the node.
    - Invoke the helper function with the current variable;
    - Return the array of values.
*/

import { Queue } from "../queue/queue";

class BinaryNode {
  public value: number;
  public left: BinaryNode | null;
  public right: BinaryNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  private root: BinaryNode | null;

  constructor() {
    this.root = null;
  }

  insert = (value: number): BinarySearchTree | null => {
    const newNode = new BinaryNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // Recursive
    const insertNode = (selectedNode: BinaryNode): BinarySearchTree | null => {
      if (newNode.value > selectedNode.value) {
        if (selectedNode.right) {
          return insertNode(selectedNode.right);
        } else {
          selectedNode.right = newNode;
          return this;
        }
      } else if (newNode.value < selectedNode.value) {
        if (selectedNode.left) {
          return insertNode(selectedNode.left);
        } else {
          selectedNode.left = newNode;
          return this;
        }
      } else {
        return null;
      }
    };

    return insertNode(this.root);

    // Iterative
    // let currentNode = this.root;
    // while (true) {
    //   if (value === currentNode!.value) return null;
    //   if (value < currentNode!.value) {
    //     if (currentNode!.left === null) {
    //       currentNode!.left = newNode;
    //       return this;
    //     }
    //     currentNode = currentNode!.left;
    //   } else {
    //     if (currentNode!.right === null) {
    //       currentNode!.right = newNode;
    //       return this;
    //     }
    //     currentNode = currentNode!.right;
    //   }
    // }
  };

  search = (value: number): BinaryNode | null => {
    if (!this.root) return null;

    // Recursive
    const insertNode = (selectedNode: BinaryNode): BinaryNode | null => {
      if (value > selectedNode.value) {
        if (selectedNode.right) {
          return insertNode(selectedNode.right);
        } else {
          return null;
        }
      } else if (value < selectedNode.value) {
        if (selectedNode.left) {
          return insertNode(selectedNode.left);
        } else {
          return null;
        }
      } else {
        return selectedNode;
      }
    };

    return insertNode(this.root);

    // Iterative
    // let currentNode = this.root;
    // let found = false;
    // while (currentNode && !found) {
    //   if (value < currentNode!.value) {
    //     currentNode = currentNode!.left;
    //   } else if (value > currentNode!.value) {
    //     currentNode = currentNode!.right;
    //   } else {
    //     found = true;
    //   }
    // }
    // if (!found) return null;
    // return currentNode;
  };

  breadthFirstSearch = (): number[] => {
    if (!this.root) return [];

    const visitedArr: number[] = [];
    let removedNode: BinaryNode;
    const queue = new Queue<BinaryNode>();
    queue.enqueue(this.root);

    while (queue.getSize()) {
      removedNode = queue.dequeue()!;
      visitedArr.push(removedNode!.value);

      if (removedNode?.left) {
        queue.enqueue(removedNode!.left);
      }
      if (removedNode?.right) {
        queue.enqueue(removedNode!.right);
      }
    }

    return visitedArr;
  };

  depthFirstSearch = (): number[] => {
    if (!this.root) return [];

    const visitedArr: number[] = [];

    const traverse = (node: BinaryNode): void => {
      // PreOrder
      // visitedArr.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      // InOrder
      visitedArr.push(node.value);

      if (node.right) {
        traverse(node.right);
      }

      // PostOrder
      // visitedArr.push(node.value);
    };

    traverse(this.root);
    return visitedArr;
  };
}

const newBST = new BinarySearchTree();
newBST.insert(10);
newBST.insert(6);
newBST.insert(15);
newBST.insert(3);
newBST.insert(8);
newBST.insert(20);

//console.log(newBST.search(10));
//console.log(newBST.search(13));
//console.log(newBST.search(7));
//console.log(newBST.search(100));
//console.log(newBST.search(0));
//console.log(newBST.breadthFirstSearch());
console.log(newBST.depthFirstSearch());
//console.log(newBST);
