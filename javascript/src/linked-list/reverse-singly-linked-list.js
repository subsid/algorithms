// Given the pointer/reference to the head of a singly linked list, reverse it
// and return the pointer/reference to the head of reversed linked list.

function reverseSinglyLinkedList(head) {
  if (!head || head.next === null) {
    return head;
  }

  let reversedHead = null;
  let currentHead = head;

  while (currentHead !== null) {
    const { next } = currentHead;

    currentHead.next = reversedHead;
    reversedHead = currentHead;
    currentHead = next;
  }

  return reversedHead;
}

module.exports = reverseSinglyLinkedList;
