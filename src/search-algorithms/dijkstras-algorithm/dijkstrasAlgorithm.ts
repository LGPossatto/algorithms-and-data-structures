// Dijkstra's Algorithm
/* 
    What is it?
    - One of the most famous and widely used algorithms around!
    - Finds the shortest path between two vertices on a graph;
    - "What's the fastest way to get from point A to point B?".

    The approach:
    - Every time we look to visit a new node, we pick the 
    node with the smallest known distance to visit first;
    - Once we’ve moved to the node we’re going to visit, we 
    look at each of its neighbors;
    - For each neighboring node, we calculate the distance by 
    summing the total edges that lead to the node we’re checking 
    from the starting node;
    - If the new total distance to a node is less than the 
    previous total, we store the new shorter distance for 
    that node.

    Pseudocode:
    - This function should accept a starting and ending vertex;
    - Create an object (we'll call it distances) and set each 
    key to be every vertex in the adjacency list with a value 
    of infinity, except for the starting vertex which should 
    have a value of 0;
    - After setting a value in the distances object, add each 
    vertex with a priority of Infinity to the priority queue, 
    except the starting vertex, which should have a priority 
    of 0 because that's where we begin;
    - Create another object called previous and set each key 
    to be every vertex in the adjacency list with a value of null;
    - Start looping as long as there is anything in the priority 
    queue:
        - dequeue a vertex from the priority queue;
        - If that vertex is the same as the ending vertex - we 
        are done!
        - Otherwise loop through each value in the adjacency list 
        at that vertex:
            - Calculate the distance to that vertex from the 
            starting vertex;
            - if the distance is less than what is currently 
            stored in our distances object;
                - update the distances object with new lower 
                distance;
                - update the previous object to contain that 
                vertex;
                - enqueue the vertex with the total distance 
                from the start node.
*/

import { WeightedGraph } from "../../data-structures/graph/weightedGraph";
import { PriotiryQueue } from "../../data-structures/priority-queue/priorityQueue";

class DAGraph extends WeightedGraph {
  constructor() {
    super();
  }

  shortestPath = (startVertex: string, endVertex: string): string[] => {
    const pathArr: string[] = [];
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const pQueue = new PriotiryQueue<string>();

    for (const key in this.adjacencyList) {
      if (key === startVertex) {
        distances[key] = 0;
        pQueue.enqueue(key, 0);
      } else {
        distances[key] = Infinity;
        pQueue.enqueue(key, Infinity);
      }

      previous[key] = null;
    }

    while (pQueue.getValues().length) {
      const currentVertex = pQueue.dequeue()!.value;

      if (currentVertex === endVertex) {
        let smallestPath = currentVertex;
        while (smallestPath) {
          pathArr.push(smallestPath);
          smallestPath = previous[smallestPath]!;
        }
        break;
      }

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        let totalWeight = neighbor.weight + distances[currentVertex];

        if (totalWeight < distances[neighbor.node]) {
          distances[neighbor.node] = totalWeight;
          previous[neighbor.node] = currentVertex;
          pQueue.enqueue(neighbor.node, totalWeight);
        }
      });
    }

    return pathArr.reverse();
  };
}

const newGraph = new DAGraph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");
newGraph.addEdge("A", "B", 4);
newGraph.addEdge("A", "C", 2);
newGraph.addEdge("B", "E", 3);
newGraph.addEdge("C", "D", 2);
newGraph.addEdge("C", "F", 4);
newGraph.addEdge("D", "E", 3);
newGraph.addEdge("D", "F", 1);
newGraph.addEdge("E", "F", 1);

console.log(newGraph.shortestPath("A", "E"));
