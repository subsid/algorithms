// Given a singly linked list, return nth from last node. Return null if 'n' is
// out-of-bounds.
// Classic technique, have 2 pointers with |p1| - |p2| = n. When 1st pointer reaches last, second one points to N.
// Time O(n)
// Space O(1)

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
