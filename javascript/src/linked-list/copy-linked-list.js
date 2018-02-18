// Make a deep copy of the given linked list with each node having two pointers:
// 'next' and 'arbitrary_pointer'.

// Create copy of list, leaving arbitrary points alone.
// While copying, create Map(l1, l1'). i.e new node corresponding to old one.
// Rewire arbitrary in newnodes to point to newnodes.
// Can be done in 2 passes.
// Firt pass: create a copy of the linked list. Also create a Map(ll_old_node, ll_new_node). Don't mess with arbitrary_pointer.
// Second pass through new list: Update arbitrary pointer of each node to point to new list.
// Time O(n)
// Space O(n)
// There is a more fancy way to do this, without the additional memory. (But I think that's not elegant)

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
