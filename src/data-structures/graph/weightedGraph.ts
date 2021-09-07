export interface IGraphEdge {
  node: string;
  weight: number;
}

export class WeightedGraph {
  protected adjacencyList: {
    [key: string]: IGraphEdge[];
  };

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

  addEdge = (vertex1: string, vertex2: string, weight: number): boolean => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });

      return true;
    }
    return false;
  };
}

// const newWeightedGraph = new WeightedGraph();

// newWeightedGraph.addVertex("A");
// newWeightedGraph.addVertex("B");
// newWeightedGraph.addVertex("C");
// newWeightedGraph.addVertex("D");
// newWeightedGraph.addVertex("E");
// newWeightedGraph.addVertex("F");

// newWeightedGraph.addEdge("A", "B", 4);
// newWeightedGraph.addEdge("A", "C", 2);
// newWeightedGraph.addEdge("B", "E", 3);
// newWeightedGraph.addEdge("C", "D", 2);
// newWeightedGraph.addEdge("C", "F", 4);
// newWeightedGraph.addEdge("D", "E", 3);
// newWeightedGraph.addEdge("D", "F", 1);
// newWeightedGraph.addEdge("E", "F", 1);

// console.log(newWeightedGraph.getAdjList());
