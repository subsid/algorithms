const swapNthWithHead = require('../../src/linked-list/swap-nth-with-head');

describe('swapNthWithHead', () => {
  it('should swap nth with head', () => {
    const head = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    };

    const swapped = {
      value: 2,
      next: {
        value: 1,
        next: {
          value: 3,
          next: null,
        },
      },
    };

    expect(swapNthWithHead(head, 2)).toEqual(swapped);
  });
});
