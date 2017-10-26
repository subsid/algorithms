const reverseSinglyLinkedList = require('../../src/linked-list/reverse-singly-linked-list');

describe('reverseSinglyLinkedList', () => {
  it('should return the reversed head', () => {
    const a3 = { next: null };
    const a2 = { next: a3 };
    const a1 = { next: a2 };
    const head = { next: a1 };

    const headRev = { next: null };
    const a1Rev = { next: headRev };
    const a2Rev = { next: a1Rev };
    const a3Rev = { next: a2Rev };
    expect(reverseSinglyLinkedList(head)).toEqual(a3Rev);
  });

  it('should return the head when only 1 node', () => {
    const head = { next: null };

    expect(reverseSinglyLinkedList(head)).toEqual({ next: null });
  });
});
