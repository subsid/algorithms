const findNthFromLast = require('../../src/linked-list/nth-from-last');

describe('findNthFromLast', () => {
  it('should return the nth from last element', () => {
    const head = {
      value: 10,
      next: {
        value: 20,
        next: {
          value: 30,
          next: null,
        },
      },
    };

    expect(findNthFromLast(head, 1)).toEqual(head.next.next);
    expect(findNthFromLast(head, 2)).toEqual(head.next);
    expect(findNthFromLast(head, 3)).toEqual(head);
  });
});
