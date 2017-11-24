const mergeSort = require('../../src/linked-list/merge-sort');

describe('mergeSort', () => {
  it('should sort list', () => {
    const h1 = {
      value: 5,
      next: {
        value: 3,
        next: {
          value: 2,
          next: {
            value: 1,
            next: {
              value: 4,
              next: {
                value: 8,
                next: {
                  value: 7,
                  next: null,
                },
              },
            },
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
                value: 7,
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

    expect(mergeSort(h1)).toEqual(result);
  });
});
