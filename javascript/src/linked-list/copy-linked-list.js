// Make a deep copy of the given linked list with each node having two pointers:
// 'next' and 'arbitrary_pointer'.

// Create copy of list, leaving arbitrary points alone.
// While copying, create Map(l1, l1'). i.e new node corresponding to old one.
// Rewire arbitrary in newnodes to point to newnodes.
function copyList(h) {
  if (!h) {
    return null;
  }

  let newHead = null;
  let newLast = null;
  let current = h;
  const oldNewMap = new Map();

  // create Copy
  while (current !== null) {
    if (newHead) {
      newLast.next = { arbitrary: current.arbitrary, value: current.value, next: null };
      newLast = newLast.next;
    } else {
      newHead = { arbitrary: current.arbitrary, value: current.value, next: null };
      newLast = newHead;
    }
    oldNewMap.set(current, newLast);
    current = current.next;
  }

  current = newHead;

  // rewire arbitrary pointers
  while (current !== null) {
    if (current.arbitrary) {
      current.arbitrary = oldNewMap.get(current.arbitrary);
    }
    current = current.next;
  }


  return newHead;
}

module.exports = copyList;
