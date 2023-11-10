class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value
    this.adjacent = adjacent
  }
}

class Graph {
  constructor() {
    this.nodes = new Set()
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
    for (let node of this.nodes) {
      if (node.name === vertex.name) {
        node.adjacent.delete(node)
      }
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let values = []
    let toVisitStack = [start]
    let visited = new Set()
    visited.add(start)

    while (toVisitStack.length) {
      let currentNode = toVisitStack.pop()
      values.push(currentNode.value)
      for (let neighbor of currentNode.adjacent) {
        if (!visited.has(neighbor)) {
          toVisitStack.push(neighbor)
          visited.add(neighbor)
        }
      }
    }
    return values
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let values = []
    let toVisitQueue = [start]
    let visited = new Set()
    visited.add(start)

    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift()
      values.push(currentNode.value)
      for (let neighbor of currentNode.adjacent) {
        if (!visited.has(neighbor)) {
          toVisitQueue.push(neighbor)
          visited.add(neighbor)
        }
      }
    }
    return values
  }
}

module.exports = { Graph, Node }
