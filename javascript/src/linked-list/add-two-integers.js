// Given head pointers of two linked lists where each linked list represents an
// integer number (each node is a digit), add them and return the resulting linked
// list.
function addTwoIntegers(h1, h2) {
  if (!h1 || !h2) {
    return h1 || h2;
  }

  let current1 = h1;
  let current2 = h2;
  let carry = 0;
  let resultHead = null;
  let resultLast = null;
  while ((current1 !== null) || (current2 !== null) || (carry > 0)) {
    const v1 = current1 ? current1.value : 0;
    const v2 = current2 ? current2.value : 0;
    if (!resultLast) {
      resultHead = { value: (carry + v1 + v2) % 10, next: null };
      resultLast = resultHead;
    } else {
      resultLast.next = { value: (carry + v1 + v2) % 10, next: null };
      resultLast = resultLast.next;
    }
    carry = Math.floor((carry + v1 + v2) / 10);
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }

  return resultHead;
}

module.exports = addTwoIntegers;

