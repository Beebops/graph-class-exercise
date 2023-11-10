class PersonNode {
  constructor(name, adjacent = new Set()) {
    this.name = name
    this.adjacent = adjacent
  }
}

class FriendGraph {
  constructor() {
    this.nodes = new Set()
  }
  addPerson(node) {
    this.nodes.add(node)
  }
  addPeople(peopleList) {
    for (let node of peopleList) {
      this.addPerson(node)
    }
  }
  setFriends(person1, person2) {
    person1.adjacent.add(person2)
    person2.adjacent.add(person1)
  }
  areConnectedBFS(person1, person2) {
    let toVisitQueue = [person1]
    let seen = new Set(toVisitQueue)
    while (toVisitQueue.length) {
      let currentPerson = toVisitQueue.shift()
      console.log('BFS Visiting', currentPerson.name)
      if (currentPerson === person2) return true
      for (let neighbor of currentPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitQueue.push(neighbor)
          seen.add(neighbor)
        }
      }
    }
    return false
  }
  areConnectedDFS(person1, person2) {
    let toVisitStack = [person1]
    let seen = new Set(toVisitStack)
    while (toVisitStack.length) {
      let currentPerson = toVisitStack.pop()
      console.log('DFS Visiting', currentPerson.name)
      if (currentPerson === person2) return true
      for (let neighbor of currentPerson.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor)
          seen.add(neighbor)
        }
      }
    }
    return false
  }
}

const homer = new PersonNode('homer simpson')
const marge = new PersonNode('marge simpson')
const maggie = new PersonNode('maggie simpson')
const lisa = new PersonNode('lisa simpson')
const grandpa = new PersonNode('grandpa simpson')

const friends = new FriendGraph()

friends.addPeople([homer, marge, lisa, maggie, grandpa])
friends.setFriends(homer, marge)
friends.setFriends(homer, maggie)
friends.setFriends(homer, lisa)
friends.setFriends(maggie, marge)
friends.setFriends(maggie, lisa)
friends.setFriends(lisa, grandpa)

const moe = new PersonNode('moe')
const barney = new PersonNode('barney')
const lenny = new PersonNode('lenny')
friends.addPeople([moe, barney, lenny])
friends.setFriends(moe, barney)
friends.setFriends(barney, lenny)
