// Remove duplicate nodes from linked list of integers while keeping only the
// first occurrence of duplicates.
// Add data from node to a Map. If data is seen in map, delete it.
// Time O(n)
// Space O(n)

function removeDuplicates(head) {
  const exists = new Set();

  if (!head) {
    return null;
  }

  let previous = head;
  exists.add(previous.value);
  let current = head.next;

  while (current !== null) {
    if (exists.has(current.value)) {
      previous.next = current.next;
    } else {
      exists.add(current.value);
      previous = current;
    }
    current = current.next;
  }
  return head;
}

module.exports = removeDuplicates;

