const LinkedList = require('../../src/data-structures/linked-list');
const deleteNode = require('../../src/linked-list/delete-node');

describe('deleteNode', () => {
  it('should delete the given key from linkedlist', () => {
    const ll = new LinkedList(10);
    ll.push(11);
    ll.push(12);
    ll.push(13);

    const ll2 = new LinkedList(10);
    ll2.push(11);
    ll2.push(13);

    expect(deleteNode(ll.head, 12)).toEqual(ll2.head);
  });

  it('should delete multiple copies of given key', () => {
    const ll = new LinkedList(10);
    ll.push(11);
    ll.push(12);
    ll.push(13);
    ll.push(12);

    const ll2 = new LinkedList(10);
    ll2.push(11);
    ll2.push(13);

    expect(deleteNode(ll.head, 12)).toEqual(ll2.head);
  });
});
