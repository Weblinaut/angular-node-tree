enum NodeColor {
  root = 'purple',
  red = 'red',
  green = 'green'
}

class Node {
  id: number
  color: string = NodeColor.red
  parent: Node | null
  children: Node[] = []

  constructor (parent: Node | null) {
    this.parent = parent
    this.id = new Date().valueOf()
  }

  get score (): number {
    // 1. list all the parents
    // 2. map/reduce over them to sum score
    return this.isRootNode() ? 5 : this.calculateScore()
  }

  isRootNode () {
    return this.parent === null
  }

  calculateScore (): number {
    const nodeValue = this.color === NodeColor.red ? 1 : 2
    return this.parent.score + nodeValue
  }

  get totalSum (): number {
    return this.score + this.calculateSum()
  }

  calculateSum () {
    // [{score: 4}, {score: 5}]
    // Initial value: 0
    //    0 + 4 → 4
    //    4 + 5 → 9
    return this.children.reduce((sumSoFar, child) => sumSoFar + child.totalSum, 0)
  }

}

export { Node, NodeColor }