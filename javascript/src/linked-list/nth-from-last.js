// Given a singly linked list, return nth from last node. Return null if 'n' is
// out-of-bounds.

function findNthFromLast(h, n) {
  if (h === null) {
    return null;
  }

  let head = h;
  let diff = n;
  let tail = h;

  while ((tail !== null) && (diff > 0)) {
    tail = tail.next;
    diff -= 1;
  }

  if (diff > 0) {
    return null;
  }

  while (tail !== null) {
    tail = tail.next;
    head = head.next;
  }

  return head;
}

module.exports = findNthFromLast;
