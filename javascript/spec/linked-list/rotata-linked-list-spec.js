const rotateLinkedList = require('../../src/linked-list/rotate-linked-list');

describe('rotateLinkedList', () => {
  it('should rotate the given list by n when n < length', () => {
    const h = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: null,
            },
          },
        },
      },
    };

    const result = {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 1,
            next: {
              value: 2,
              next: null,
            },
          },
        },
      },
    };

    expect(rotateLinkedList(h, 3)).toEqual(result);
  });

  it('should rotate the given list by adjusted n when n > length', () => {
    const h = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: null,
            },
          },
        },
      },
    };

    const result = {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 1,
            next: {
              value: 2,
              next: null,
            },
          },
        },
      },
    };

    expect(rotateLinkedList(h, 8)).toEqual(result);
  });
});
