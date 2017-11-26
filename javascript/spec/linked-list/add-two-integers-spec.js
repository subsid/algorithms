const addTwoIntegers = require('../../src/linked-list/add-two-integers');

describe('addTwoIntegers', () => {
  it('should add integers of same length', () => {
    const h1 = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    };

    const h2 = {
      value: 2,
      next: {
        value: 2,
        next: {
          value: 0,
          next: null,
        },
      },
    };

    const result = {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 3,
          next: null,
        },
      },
    };

    expect(addTwoIntegers(h1, h2)).toEqual(result);
  });

  it('should add integers of different length', () => {
    const h1 = {
      value: 7,
      next: {
        value: 3,
        next: {
          value: 2,
          next: null,
        },
      },
    };

    const h2 = {
      value: 1,
      next: {
        value: 0,
        next: {
          value: 9,
          next: {
            value: 9,
            next: null,
          },
        },
      },
    };

    const result = {
      value: 8,
      next: {
        value: 3,
        next: {
          value: 1,
          next: {
            value: 0,
            next: {
              value: 1,
              next: null,
            },
          },
        },
      },
    };
    expect(addTwoIntegers(h1, h2)).toEqual(result);
  });
});

