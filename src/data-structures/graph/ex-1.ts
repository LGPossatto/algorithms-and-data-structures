import { PriorityQueue } from "../priority-queue/priorityQueue";

class GraphEx {
  adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: string) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  breadthFirstSearch(start: string) {
    const visitedArr = [];
    const queue = [];
    queue.push(start);
    visitedArr.push(start);

    while (queue.length > 0) {
      const selectedVertex: string = queue.shift()!;

      for (let edge of this.adjacencyList[selectedVertex]) {
        if (!visitedArr.includes(edge)) {
          visitedArr.push(edge);
          queue.push(edge);
        }
      }
    }

    console.log(visitedArr);
    return visitedArr;
  }
}

class WeightedGraphEx {
  adjacencyList: { [key: string]: { [key: string]: number } };
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    this.adjacencyList[vertex] = {};
  }

  addEdge(vertex1: string, vertex2: string, weight: number) {
    this.adjacencyList[vertex1][vertex2] = weight;
    this.adjacencyList[vertex2][vertex1] = weight;
  }

  Dijkstra(start: string, end: string) {
    const visitQueue = new PriorityQueue<string>();
    const pathWeight: { [key: string]: number } = {};
    const path: { [key: string]: string | null } = {};

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        visitQueue.enqueue(vertex, 0);
        pathWeight[vertex] = 0;
      } else {
        visitQueue.enqueue(vertex, Infinity);
        pathWeight[vertex] = Infinity;
      }

      path[vertex] = null;
    }

    while (visitQueue.getValues().length > 0) {
      const visitedVertex = visitQueue.dequeue();
      const vertexEdges = this.adjacencyList[visitedVertex!.value];

      if (visitedVertex!.value === end) {
        const completePath: string[] = [];
        let nextVertex: string | null = end;

        while (nextVertex) {
          completePath.push(nextVertex);
          nextVertex = path[nextVertex];
        }

        return completePath.reverse();
      }

      for (const key in vertexEdges) {
        const newWeight = vertexEdges[key] + pathWeight[visitedVertex!.value];

        if (newWeight < pathWeight[key]) {
          pathWeight[key] = newWeight;
          path[key] = visitedVertex!.value;

          visitQueue.enqueue(key, newWeight);
        }
      }
    }

    return false;
  }
}

//const newGraph = new WeightedGraphEx();

//newGraph.addVertex("A");
//newGraph.addVertex("B");
//newGraph.addVertex("C");
//newGraph.addVertex("D");
//newGraph.addVertex("E");
//newGraph.addVertex("F");

//newGraph.addEdge("A", "B", 4);
//newGraph.addEdge("A", "C", 2);
//newGraph.addEdge("B", "E", 3);
//newGraph.addEdge("C", "D", 2);
//newGraph.addEdge("C", "F", 4);
//newGraph.addEdge("D", "E", 3);
//newGraph.addEdge("D", "F", 1);
//newGraph.addEdge("F", "E", 1);

//console.log(newGraph.Dijkstra("A", "E"));

const g = new WeightedGraphEx();

g.addVertex("A");
g.addVertex("Z");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("H");
g.addVertex("Q");
g.addVertex("G");

g.addEdge("A", "Z", 7);
g.addEdge("A", "C", 8);

g.addEdge("Z", "Q", 2);

g.addEdge("C", "G", 4);

g.addEdge("D", "Q", 8);

g.addEdge("E", "H", 1);

g.addEdge("H", "Q", 3);

g.addEdge("Q", "C", 6);

g.addEdge("G", "Q", 9);

console.log(g.Dijkstra("A", "E")); // ["A", "Z", "Q", "H", "E"]
console.log(g.Dijkstra("A", "Q")); // ["A", "Z", "Q"]
console.log(g.Dijkstra("A", "G")); // ["A", "C", "G"]
console.log(g.Dijkstra("A", "D")); // ["A", "Z", "Q", "D"]
