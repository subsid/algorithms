function LinkedList(val) {
  if (val) {
    this.head = { value: val, next: null };
  } else {
    this.head = null;
  }
}

LinkedList.prototype.push = function push(val) {
  const node = {
    value: val,
    next: null,
  };

  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }
};

LinkedList.prototype.pop = function pop() {
  if (!this.head) {
    return null;
  }

  let previous = null;
  let current = this.head;
  while (current.next) {
    previous = current;
    current = current.next;
  }

  previous.next = null;

  return current;
};

module.exports = LinkedList;
