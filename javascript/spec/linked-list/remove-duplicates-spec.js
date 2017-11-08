const removeDuplicates = require('../../src/linked-list/remove-duplicates');
const LinkedList = require('../../src/data-structures/linked-list');

describe('removeDuplicates', () => {
  it('should remove duplicate elements in linkedin list and retain first', () => {
    const ll = new LinkedList(10);
    ll.push(11);
    ll.push(10);
    ll.push(10);
    ll.push(12);
    ll.push(13);
    ll.push(11);
    ll.push(14);

    const ll2 = new LinkedList(10);
    ll2.push(11);
    ll2.push(12);
    ll2.push(13);
    ll2.push(14);

    removeDuplicates(ll.head);
    expect(ll).toEqual(ll2);
  });
});
