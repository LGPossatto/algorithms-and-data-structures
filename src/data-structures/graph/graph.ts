// Hash Tables
/* 
    DIFFERENCES & BIG O:
    /////////////////////////////////////////////////////////
    // OPERATION     // ADJACENCY LIST // ADJACENCY MATRIX //
    // Add Vertex    // O(1)           // (|V^2|)          //
    // Add Edge      // O(1)           // (1)              //
    // Remove Vertex // O(|V| + |E|)   // ​O(|V^2|)         //
    // Remove Edge   // O(|E|)         // O(1)             //
    // Query         // O(|V| + |E|)   // O(1)             //
    // Storage       // O(|V| + |E|)   // ​O(|V^2|)         //
    /////////////////////////////////////////////////////////
    * |V| - number of vertices / |E| - number of edges.

    What is a graph?
    - A graph data structure consists of a finite (and 
    possibly mutable) set of vertices or nodes or points, 
    together with a set of unordered pairs of these 
    vertices for an undirected graph or a set of ordered 
    pairs for a directed graph.

    Essential graph terms:
    - Vertex - a node;
    - Edge - connection between nodes;
    - Weighted/Unweighted - values assigned to distances 
    between vertices;
    - Directed/Undirected - directions assigned to distanced 
    between vertices.

    Adjacency Matrix:
    - Can take up less space (in sparse graphs);
    - Faster to iterate over all edges;
    - Can be slower to lookup specific edge.

    Adjacency List:
    - Takes up more space (in sparse graphs);
    - Slower to iterate over all edges;
    - Faster to lookup specific edge.

    METHODS =>
    AddVertex:
    - Write a method called addVertex, which accepts a 
    name of a vertex;
    - It should add a key to the adjacency list with the 
    name of the vertex and set its value to be an empty array.

    AddEdge:
    - This function should accept two vertices, we can call them 
    vertex1 and vertex2;
    - The function should find in the adjacency list the key of 
    vertex1 and push vertex2 to the array;
    - The function should find in the adjacency list the key of 
    vertex2 and push vertex1 to the array;
    - Don't worry about handling errors/invalid vertices.

    RemoveVertex:
    - The function should accept a vertex to remove;
    - The function should loop as long as there are any other 
    vertices in the adjacency list for that vertex;
    - Inside of the loop, call our removeEdge function with the 
    vertex we are removing and any values in the adjacency list 
    for that vertex;
    - delete the key in the adjacency list for that vertex.

    RemoveEdge:
    - This function should accept two vertices, we'll call them 
    vertex1 and vertex2;
    - The function should reassign the key of vertex1 to be an 
    array that does not contain vertex2;
    - The function should reassign the key of vertex2 to be an 
    array that does not contain vertex1;
    - Don't worry about handling errors/invalid vertices.

    Graph Traversal =>
    Depth First:
    Explore as far as possible down one branch before "backtracking".

    Pseudocode:
    * Recursive:
    - The function should accept a starting node.
    - Create a list to store the end result, to be returned 
    at the very end.
    - Create an object to store visited vertices.
    - Create a helper function which accepts a vertex:
        - The helper function should return early if the vertex 
        is empty.
        - The helper function should place the vertex it accepts 
        into the visited object and push that vertex into the 
        result array..
        - Loop over all of the values in the adjacencyList for 
        that vertex.
        - If any of those values have not been visited, recursively 
        invoke the helper function with that vertex.
    - Invoke the helper function with the starting vertex;
    - Return the result array.

    // ----------------------------------------------------------- //
    - if vertex is empty
        - return (this is base case)
    - add vertex to results list
    - mark vertex as visited
    - for each neighbor in vertex's neighbors:
        - if neighbor is not visited:
            - recursively call DFS on neighbor
    // ----------------------------------------------------------- //

    * Iterative:
    - The function should accept a starting node;
    - Create a stack to help use keep track of vertices 
    (use a list/array);
    - Create a list to store the end result, to be returned 
    at the very end;
    - Create an object to store visited vertices;
    - Add the starting vertex to the stack, and mark it visited;
    - While the stack has something in it:
        - Pop the next vertex from the stack;
        - If that vertex hasn't been visited yet:
            - ​Mark it as visited;
            - Add it to the result list;
            - Push all of its neighbors into the stack.
    - Return the result array.

    // ----------------------------------------------------------- //
    - let S be a stack
    - S.push(start)
    - while S is not empty
        - vertex = S.pop()
        - if vertex is not labeled as discovered:
            - visit vertex (add to result list)
            - label vertex as discovered
            - for each of vertex's neighbors, N do 
                - S.push(N)
    // ----------------------------------------------------------- //

    Breadth First:
    Visit neighbors at current depth first!

    - This function should accept a starting vertex;
    - Create a queue (you can use an array) and place the 
    starting vertex in it;
    - Create an array to store the nodes visited;
    - Create an object to store nodes visited;
    - Mark the starting vertex as visited;
    - Loop as long as there is anything in the queue;
    - Remove the first vertex from the queue and push it into 
    the array that stores nodes visited;
    - Loop over each vertex in the adjacency list for the vertex 
    you are visiting;
    - If it is not inside the object that stores nodes visited, 
    mark it as visited and enqueue that vertex;
    - Once you have finished looping, return the array of visited 
    nodes.
*/

import { Stack } from "../stack/stack";
import { Queue } from "../queue/queue";

class Graph {
  private adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {};
  }

  getAdjList = (): {} => {
    return this.adjacencyList;
  };

  addVertex = (vertex: string): boolean => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  };

  addEdge = (vertex1: string, vertex2: string): boolean => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1].push(vertex2);
      }
      if (!this.adjacencyList[vertex2].includes(vertex1)) {
        this.adjacencyList[vertex2].push(vertex1);
      }

      return true;
    }
    return false;
  };

  removeVertex = (vertex: string): boolean => {
    if (this.adjacencyList[vertex]) {
      for (let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
        this.removeEdge(vertex, this.adjacencyList[vertex][i]);
      }

      // other way
      // while (this.adjacencyList[vertex].length) {
      //   const adjacentVertex = this.adjacencyList[vertex].pop()!;
      //   this.removeEdge(vertex, adjacentVertex);
      // }
      delete this.adjacencyList[vertex];
      return true;
    }
    return false;
  };

  removeEdge = (vertex1: string, vertex2: string): boolean => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      let idx1 = this.adjacencyList[vertex1].indexOf(vertex2);
      let idx2 = this.adjacencyList[vertex2].indexOf(vertex1);

      if (idx1 >= 0 && idx2 >= 0) {
        this.adjacencyList[vertex1].splice(idx1, 1);
        this.adjacencyList[vertex2].splice(idx2, 1);
        return true;
      }
    }
    return false;
  };

  depthFirstSearch = (vertex: string): string[] => {
    const searchList: string[] = [];
    const visitedNodes: { [key: string]: boolean } = {};

    // recursive
    // const recursiveTraverse = (vertex: string): void => {
    //   if (this.adjacencyList[vertex].length <= 0) return;
    //   visitedNodes[vertex] = true;
    //   searchList.push(vertex);
    //
    //   for (let node of this.adjacencyList[vertex]) {
    //     if (!visitedNodes[node]) {
    //       recursiveTraverse(node);
    //     }
    //   }
    // };
    // recursiveTraverse(vertex);

    // iterative
    const vertexStack = new Stack<string>();
    let poppedVertex: string;

    vertexStack.push(vertex);
    visitedNodes[vertex] = true;

    while (vertexStack.getSize()) {
      poppedVertex = vertexStack.pop()!;
      searchList.push(poppedVertex);

      for (let node of this.adjacencyList[poppedVertex]) {
        if (!visitedNodes[node]) {
          visitedNodes[node] = true;
          vertexStack.push(node);
        }
      }
    }

    return searchList;
  };

  breadthFirstSearch = (vertex: string): string[] => {
    const searchList: string[] = [];
    const visitedNodes: { [key: string]: boolean } = {};
    const vertexQueue = new Queue<string>();
    let dequeuedNode;

    visitedNodes[vertex] = true;
    vertexQueue.enqueue(vertex);

    while (vertexQueue.getSize()) {
      dequeuedNode = vertexQueue.dequeue()!;
      searchList.push(dequeuedNode);

      for (let node of this.adjacencyList[dequeuedNode]) {
        if (!visitedNodes[node]) {
          visitedNodes[node] = true;
          vertexQueue.enqueue(node);
        }
      }
    }

    return searchList;
  };
}

const newGraph = new Graph();

newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B");
newGraph.addEdge("A", "C");
newGraph.addEdge("B", "D");
newGraph.addEdge("C", "E");
newGraph.addEdge("D", "E");
newGraph.addEdge("D", "F");
newGraph.addEdge("E", "F");

console.log(newGraph.depthFirstSearch("A"));
console.log(newGraph.breadthFirstSearch("A"));
console.log(newGraph.getAdjList());
