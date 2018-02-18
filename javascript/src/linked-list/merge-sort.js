// Given head pointer of a linked sort, sort linked list (in ascending order)
// using merge sort and return new head pointer of sorted linked list.
//
// standard merge sort. Split into 2, sort left and right, merge them.
// Classic technique to find middle. Have 2 pointers, 1 going twice as fast as the other.
// Time O(nlogn)
// Space O(1)
function splitList(h) {
  if (!h || !h.next) {
    return [h, null];
  }

  let fast = h.next;
  let slow = h;
  while (fast !== null) {
    fast = fast.next;
    if (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  const second = slow.next;
  slow.next = null;

  return [h, second];
}

function mergeSortedLists(h1, h2) {
  if ((h1 === null) || (h2 === null)) {
    return h1 || h2;
  }

  let c1 = h1;
  let c2 = h2;
  let mergedHead = null;

  if (c1.value <= c2.value) {
    mergedHead = c1;
    c1 = c1.next;
  } else {
    mergedHead = c2;
    c2 = c2.next;
  }
  let mergedTail = mergedHead;
  let temp;

  while (c1 && c2) {
    if (c1.value <= c2.value) {
      temp = c1;
      c1 = c1.next;
    } else {
      temp = c2;
      c2 = c2.next;
    }

    mergedTail.next = temp;
    mergedTail = temp;
  }

  if (c1) {
    mergedTail.next = c1;
  } else if (c2) {
    mergedTail.next = c2;
  }

  return mergedHead;
}

function mergeSort(h) {
  if (!h || !h.next) {
    return h;
  }

  const [first, second] = splitList(h);

  return mergeSortedLists(mergeSort(first), mergeSort(second));
}

module.exports = mergeSort;
