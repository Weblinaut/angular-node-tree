import { Component, Input } from '@angular/core';
import { Node, NodeColor } from '../node'

@Component({
  selector: 'app-node-branch',
  templateUrl: './node-branch.component.html',
  styleUrls: ['./node-branch.component.scss']
})
export class NodeBranchComponent {
  @Input() node: Node

  constructor() { }

  createNode () {
    this.node ? this.createChild() : this.createRoot()
  }

  createChild () {
    const node = new Node(this.node)
    this.node.children.push(node)
  }

  createRoot () {
    this.node = new Node(null)
    this.node.color = NodeColor.root
  }

  toggleNodeColor () {
    this.node.color = (this.node.color === NodeColor.red ? NodeColor.green : NodeColor.red)
  }

  get toggleColorVisible () {
    return this.node && this.node.color !== NodeColor.root
  }

  removeNode () {
    if (this.isRootNode()) {
      this.node = null
    } else {
      const index = this.node.parent.children.indexOf(this.node)
      this.node.parent.children.splice(index, 1)
    }
  }

  get deletable () {
    if (!this.node) { return false }
    if (this.node.color !== NodeColor.green) { return false }
    const allChilds = []
    this.node.children.forEach(child => {
      allChilds.push(child.color)
    })
    if (allChilds.includes(NodeColor.red)) { return false }
    //need to check descendants as well 
    return true
  }

  isRootNode () {
    if (!this.node) { return true }
    return this.node.parent === null
  }

  get totalScore () {
    return this.node.totalSum
  }
}
