// Given head of a linked list and a key, delete node with this given key from
// the linked list.

function deleteNode(head, key) {
  if (!head) {
    return null;
  }

  if (head.value === key) {
    return head.next;
  }

  let current = head;
  while (current.next !== null) {
    if (current.next.value === key) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

module.exports = deleteNode;
