const reverseKElements = require('../../src/linked-list/reverse-k-elements');

describe('reverseKElements', () => {
  it('should reverse k elements', () => {
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
      value: 2,
      next: {
        value: 1,
        next: {
          value: 4,
          next: {
            value: 3,
            next: {
              value: 5,
              next: null,
            },
          },
        },
      },
    };

    expect(reverseKElements(h, 2)).toEqual(result);
  });

  it('should reverse all elements when k greater than size', () => {
    const h = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    };

    const result = {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    };

    expect(reverseKElements(h, 4)).toEqual(result);
  });
});

