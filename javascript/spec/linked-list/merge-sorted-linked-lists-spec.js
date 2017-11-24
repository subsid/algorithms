const mergeSortedLists = require('../../src/linked-list/merge-sorted-linked-lists');

describe('mergeSortedLists', () => {
  it('should merge 2 sorted lists', () => {
    const h1 = {
      value: 1,
      next: {
        value: 3,
        next: {
          value: 5,
          next: null,
        },
      },
    };

    const h2 = {
      value: 2,
      next: {
        value: 4,
        next: {
          value: 6,
          next: {
            value: 8,
            next: null,
          },
        },
      },
    };

    const result = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: {
                value: 6,
                next: {
                  value: 8,
                  next: null,
                },
              },
            },
          },
        },
      },
    };

    expect(mergeSortedLists(h1, h2)).toEqual(result);
  });
});
