const LinkedList = require('../../src/data-structures/linked-list');

describe('LinkedList', () => {
  describe('constructor', () => {
    it('should create a linked list with given element as head', () => {
      const ll = new LinkedList(10);
      expect(ll.head).toEqual({ value: 10, next: null });
    });
  });

  describe('push', () => {
    it('should push element onto linkedlist', () => {
      const ll = new LinkedList();
      ll.push(10);
      ll.push(20);
      ll.push(30);
      expect(ll.head).toEqual({ value: 10, next: ll.head.next });
    });
  });

  describe('pop', () => {
    it('should pop last element from linkedlist', () => {
      const ll = new LinkedList();
      ll.push(10);
      ll.push(20);
      ll.push(30);
      ll.pop();

      const ll2 = new LinkedList();
      ll2.push(10);
      ll2.push(20);
      expect(ll).toEqual(ll2);
    });
  });
});
