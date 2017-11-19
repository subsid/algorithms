const LinkedList = require('../../src/data-structures/linked-list');
const insertionSort = require('../../src/linked-list/insertion-sort');

describe('insertionSort', () => {
  it('should sort given linkedlist', () => {
    const ll = new LinkedList(10);
    ll.push(4);
    ll.push(3);
    ll.push(9);
    ll.push(7);
    ll.push(14);
    ll.push(7);
    ll.push(10);

    const ll2 = new LinkedList(3);
    ll2.push(4);
    ll2.push(7);
    ll2.push(7);
    ll2.push(9);
    ll2.push(10);
    ll2.push(10);
    ll2.push(14);

    expect(insertionSort(ll.head)).toEqual(ll2.head);
  });
});
