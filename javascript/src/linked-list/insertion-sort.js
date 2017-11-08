// Mutations are so hard to reason with! Should avoid this style.
function addToSorted(node, head) {
  if (!head || node.value <= head.value) {
    node.next = head;
    return node;
  }

  let current = head;
  while (current.next !== null &&
    current.next.value <= node.value) {
    current = current.next;
  }

  node.next = current.next;
  current.next = node;

  return head;
}

function insertionSort(head) {
  let sortedHead = null;
  if (!head && !head.next) {
    return head;
  }

  let current = head;
  while (current) {
    const temp = current.next;
    sortedHead = addToSorted(current, sortedHead);
    current = temp;
  }

  return sortedHead;
}

module.exports = insertionSort;

