// We are given root node of a binary tree and we have to write an iterator that
// takes in this root and iterates through the nodes of binary tree in an inorder
// way. The expectation is to write two critical methods of any iterator:
// hasNext() and getNext().

class InorderIterator {
  addToStackInOrder(root, stack) {
    if (root === null) {
      return;
    }

    this.addToStackInOrder(root.right, stack);
    stack.push(root);
    this.addToStackInOrder(root.left, stack);

    return;
  }

  constructor(root) {
    this.stack = [];
    this.addToStackInOrder(root, this.stack)
  }

  hasNext() {
    return this.stack.length > 0;
  }

  getNext() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
    return null;
  }
}

function createNode(data, left, right) {
  return {
    data,
    left,
    right
  }
}

let root = createNode(5,
  createNode(3,
    createNode(2,
      createNode(1, null, null),
      null),
    createNode(4, null, null)),
  createNode(9,
    createNode(7,
      createNode(6, null, null),
      createNode(8, null, null)),
    createNode(10, null, null)));

let s = new InorderIterator(root);

while (s.hasNext()) {
  console.log(s.getNext().data);
}

module.exports = InorderIterator;
