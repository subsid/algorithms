function connectSiblings(root) {

  return root;
}

function createNode(data, left, right) {
  return {
    data,
    left,
    right
  }
}

let root = createNode(100,
  createNode(50,
    createNode(25,
      createNode(10,
        null,
        createNode(15, null, null),
      ),
    ),
    createNode(75, null, null),
  ),
  createNode(200,
    null,
    createNode(300,
      null,
      createNode(350, null, null))));

connectSiblings(tree)

module.exports = connectSiblings;
