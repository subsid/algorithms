const findGcd = require('../../src/math-stats/gcd');

describe('findGcd', () => {
  it('shoudl find gcd', () => {
    expect(findGcd(20, 25)).toEqual(5);
    expect(findGcd(25, 20)).toEqual(5);
    expect(findGcd(25, 25)).toEqual(25);
  });
});
