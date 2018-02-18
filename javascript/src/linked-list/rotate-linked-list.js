// Given head node of a singly linked list and an integer 'n', rotate linked
// list by 'n'.
// Find rotation point, and adjust some pointers.
// Time O(n)
// Space O(1)

function findLength(h) {
  let tail = h;
  let length = 1;

  while (tail.next !== null) {
    tail = tail.next;
    length += 1;
  }

  return [length, tail];
}
function rotateLinkedList(h, n) {
  if (!h || !h.next) {
    return h;
  }

  const [length, tail] = findLength(h);

  const adjustedN = n % length;
  let count = 1;
  let prev = null;
  let newHead = h;

  while (count < adjustedN) {
    prev = newHead;
    newHead = newHead.next;
    count += 1;
  }

  if (prev) {
    prev.next = null;
  }
  tail.next = h;

  return newHead;
}

module.exports = rotateLinkedList;
