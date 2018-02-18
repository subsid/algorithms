// Idea is simple, just pick k successive nodes, reverse them, move to next set of k, reverse them etc.
// we'll have a few pointers.
// Time O(n)
// Space O(1)

function reverseKList(h, k) {
  if (!h) {
    return h;
  }

  let prev = null;
  let current = h;
  let count = 1;
  let temp;
  let rest;
  while ((count <= k) && (current !== null)) {
    rest = current.next;
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
    count += 1;
  }

  // head and last of list
  return [prev, h, rest];
}

function reverseKElements(h, k) {
  if (!h) {
    return h;
  }

  let [firstHead, last, rest] = reverseKList(h, k);
  let currentHead = rest;
  let newLast = null;
  let newHead = null;

  while (currentHead !== null) {
    [newHead, newLast, rest] = reverseKList(currentHead, k);
    last.next = newHead;
    last = newLast;
    currentHead = rest;
  }

  return firstHead;
}

module.exports = reverseKElements;
