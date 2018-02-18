// Given a singly linked list, reverse nodes at even indices.
// create 2 lists from original. One for odds and one for evens.
// Reverse nodes in even.
// merge the 2 lists alternatively.
// Time O(n)
// Space O(1)
function reverseList(h) {
  if (!h || !h.next) {
    return h;
  }

  let prev = h;
  let current = h.next;
  prev.next = null;
  let temp;

  while (current !== null) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}

function mergeAlternating(h1, h2) {
  if ((h1 === null) || (h2 === null)) {
    return h1 || h2;
  }

  let c1 = h1;
  let c2 = h2;
  const mergedHead = c1;
  let merged = mergedHead;
  c1 = c1.next;

  while (c1 && c2) {
    merged.next = c2;
    merged = merged.next;
    c2 = c2.next;
    merged.next = c1;
    merged = merged.next;
    c1 = c1.next;
  }

  if (c1) {
    merged.next = c1;
  }

  if (c2) {
    merged.next = c2;
  }

  return mergedHead;
}

function reverseEvenNodes(h) {
  if (!h || !h.next) {
    return null;
  }

  const oddHead = h;
  let evenHead = h.next;
  let odd = oddHead;
  let even = evenHead;

  let current = even.next;
  // split into event and odd
  while (current !== null) {
    odd.next = current;
    odd = current;
    even.next = current.next;
    even = even.next;
    current = even ? even.next : null;
  }
  even.next = null;
  odd.next = null;

  // reverse even nodes
  evenHead = reverseList(evenHead);

  return mergeAlternating(oddHead, evenHead);
}

module.exports = reverseEvenNodes;
