const findIntersection = require('../../src/linked-list/intersection-point');

describe('intersectionPoint', () => {
  it('should find the intersection point for same length lists', () => {
    const common = {
      value: 20,
      next: { value: 30, next: null },
    };

    const h1 = {
      value: 10,
      next: common,
    };

    const h2 = {
      value: 50,
      next: common,
    };

    const expectedValue = { value: 20, next: { value: 30, next: null } };
    expect(findIntersection(h1, h2)).toEqual(expectedValue);
  });

  it('should find the intersection point for different length lists', () => {
    const common = {
      value: 20,
      next: { value: 30, next: null },
    };

    const h1 = {
      value: 10,
      next: common,
    };

    const h2 = {
      vale: 5,
      next: {
        value: 50,
        next: common,
      },
    };

    const expectedValue = { value: 20, next: { value: 30, next: null } };
    expect(findIntersection(h1, h2)).toEqual(expectedValue);
  });
});
