function swapNthWithHead(head, n) {
  if (head === null) {
    return null;
  }

  let prev = null;
  let current = head;
  let count = 1;

  while ((current !== null) && (count < n)) {
    prev = current;
    current = current.next;
    count += 1;
  }

  // out of bounds
  if (current === null) {
    return head;
  }

  // swap head and current
  prev.next = head;
  const temp = head.next;
  head.next = current.next;
  current.next = temp;

  return current;
}

module.exports = swapNthWithHead;
