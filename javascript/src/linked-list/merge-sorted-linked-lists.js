// Given two sorted linked lists, merge them such that resulting linked list is
// also sorted.

function mergeSortedLists(h1, h2) {
  if ((h1 === null) || (h2 === null)) {
    return h1 || h2;
  }

  let c1 = h1;
  let c2 = h2;
  let mergedHead = null;

  if (c1.value < c2.value) {
    mergedHead = c1;
    c1 = c1.next;
  } else {
    mergedHead = c2;
    c2 = c2.next;
  }

  let mergedTail = mergedHead;

  while (c1 && c2) {
    if (c1.value < c2.value) {
      mergedTail.next = c1;
      mergedTail = c1;
      c1 = c1.next;
    } else {
      mergedTail.next = c2;
      mergedTail = c2;
      c2 = c2.next;
    }
  }

  if (c1) {
    mergedTail.next = c1;
  } else if (c2) {
    mergedTail.next = c2;
  }

  return mergedHead;
}

module.exports = mergeSortedLists;
