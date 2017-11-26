const reverseEvenNodes = require('../../src/linked-list/reverse-even-nodes');

describe('reverseEvenNodes', () => {
  it('should reverse the even nodes', () => {
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
              next: {
                value: 6,
                next: null,
              },
            },
          },
        },
      },
    };

    const result = {
      value: 1,
      next: {
        value: 6,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: {
                value: 2,
                next: null,
              },
            },
          },
        },
      },
    };

    expect(reverseEvenNodes(h)).toEqual(result);
  });
});
