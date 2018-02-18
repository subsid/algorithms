// Given roots of two binary trees, determine if these trees are identical or
// not. Identical trees have the same layout and data at each node.

function isIdenticalBinaryTree(t1, t2) {
  if ((t1 === null) && (t2 === null)) {
    return true
  }

  if ((t1 && t2) && (t1.data === t2.data)) {
    return isIdenticalBinaryTree(t1.left, t2.left) && (isIdenticalBinaryTree(t1.right, t2.right));
  }
  return false;
}

const t1 = {
  data: 5,
  left: {
    data: 10,
    left: null,
    right: null,
  },
  right: {
    data: 12,
    left: null,
    right: null,
  }
}

const t2 = {
  data: 5,
  left: {
    data: 10,
    left: null,
    right: null,
  },
  right: {
    data: 12,
    left: null,
    right: null,
  }
}

// console.log(isIdenticalBinaryTree(t1, t2));

module.exports = isIdenticalBinaryTree;
