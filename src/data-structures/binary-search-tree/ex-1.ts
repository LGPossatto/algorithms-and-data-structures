// Binary Search Tree

import { Queue } from "../queue/queue";

class BinaryNodeEx {
  public value: number;
  public left: BinaryNodeEx | null;
  public right: BinaryNodeEx | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTreeEx {
  root: BinaryNodeEx | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    if (this.root === null) {
      this.root = new BinaryNodeEx(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new BinaryNodeEx(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new BinaryNodeEx(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  remove(val: number) {
    if (!this.root) return undefined;

    const getParent = (
      node = this.root
    ):
      | { parent: BinaryNodeEx; target: BinaryNodeEx; side: string }
      | undefined => {
      if (!node) return undefined;

      if (val > node.value) {
        if (node.right) {
          if (node.right.value === val) {
            return { parent: node, target: node.right, side: "rigth" };
          } else {
            return getParent(node.right);
          }
        }
      } else {
        if (node.left) {
          if (node.left.value === val) {
            return { parent: node, target: node.left, side: "left" };
          } else {
            return getParent(node.left);
          }
        }
      }
    };

    const getMinLeft = (node: BinaryNodeEx): BinaryNodeEx => {
      if (node.left) return getMinLeft(node.left);
      return node;
    };

    let nodeObj;

    if (this.root.value === val) {
      nodeObj = { parent: null, target: this.root };
    } else {
      nodeObj = getParent();
    }

    if (!nodeObj) {
      return undefined;
    }

    if (nodeObj.parent) {
      if (nodeObj.target.left && nodeObj.target.right) {
        const minLeft = getMinLeft(nodeObj.target.right);

        if (nodeObj.side === "left") {
          this.remove(minLeft.value);
          minLeft.left = nodeObj.target.left;
          minLeft.right = nodeObj.target.right;
          nodeObj.parent.left = minLeft;
        } else {
          this.remove(minLeft.value);
          minLeft.left = nodeObj.target.left;
          minLeft.right = nodeObj.target.right;
          nodeObj.parent.right = minLeft;
        }
      } else if (nodeObj.target.left || nodeObj.target.right) {
        if (nodeObj.target.left) {
          if (nodeObj.side === "left") {
            nodeObj.parent.left = nodeObj.target.left;
          } else {
            nodeObj.parent.right = nodeObj.target.left;
          }
        } else {
          if (nodeObj.side === "left") {
            nodeObj.parent.left = nodeObj.target.right;
          } else {
            nodeObj.parent.right = nodeObj.target.right;
          }
        }
      } else {
        if (nodeObj.side === "left") {
          nodeObj.parent.left = null;
        } else {
          nodeObj.parent.right = null;
        }
      }
    } else {
      if (nodeObj.target.left && nodeObj.target.right) {
        const minLeft = getMinLeft(nodeObj.target.right);

        this.remove(minLeft.value);
        this.root = minLeft;
        this.root.left = nodeObj.target.left;
        this.root.right = nodeObj.target.right;
      } else if (nodeObj.target.left || nodeObj.target.right) {
        if (nodeObj.target.left) {
          this.root = nodeObj.target.left;
        } else {
          this.root = nodeObj.target.right;
        }
      } else {
        this.root = null;
      }
    }

    console.log(nodeObj);
    return nodeObj;
  }

  DFSPreOrder() {
    const nodesArr: number[] = [];

    const getNodes = (node = this.root) => {
      if (!node) return;

      nodesArr.push(node.value);

      if (node.left) {
        getNodes(node.left);
      }

      if (node.right) {
        getNodes(node.right);
      }
    };

    getNodes();
    return nodesArr;
  }

  DFSInOrder() {
    const nodesArr: number[] = [];

    const getNodes = (node = this.root) => {
      if (!node) return;

      if (node.left) {
        getNodes(node.left);
      }

      nodesArr.push(node.value);

      if (node.right) {
        getNodes(node.right);
      }
    };

    getNodes();
    return nodesArr;
  }

  DFSPostOrder() {
    const nodesArr: number[] = [];

    const getNodes = (node = this.root) => {
      if (!node) return;

      if (node.left) {
        getNodes(node.left);
      }

      if (node.right) {
        getNodes(node.right);
      }
      nodesArr.push(node.value);
    };

    getNodes();
    return nodesArr;
  }

  breadthFirstSearch() {
    const nodesArr: number[] = [];
    const nodesQueue = new Queue<BinaryNodeEx>();

    if (this.root) nodesQueue.enqueue(this.root);

    while (nodesQueue.getSize() > 0) {
      const node = nodesQueue.dequeue()!;

      nodesArr.push(node.value);

      if (node.left) nodesQueue.enqueue(node.left);
      if (node.right) nodesQueue.enqueue(node.right);
    }

    return nodesArr;
  }

  find(value: number, node = this.root): BinaryNodeEx | undefined {
    // this is not optimized!
    if (!node) return undefined;
    if (node.value === value) return node;

    let foundNode;

    if (node.left) {
      foundNode = this.find(value, node.left);
      if (foundNode) return foundNode;
    }
    if (node.right) {
      foundNode = this.find(value, node.right);
      if (foundNode) return foundNode;
    }

    return foundNode;
  }
}

const newBST = new BinarySearchTreeEx();
newBST.insert(5);
newBST.insert(4);
newBST.insert(3);
newBST.insert(4.5);
newBST.insert(7);
newBST.insert(6);

//console.log(newBST);
newBST.remove(5);
newBST.remove(4);
console.log(newBST.find(4.25));
