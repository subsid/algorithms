const sumOfTwoValues = require('../../src/arrays/sum-of-2-values');

describe('sumOfTwoValues', () => {
  it('should find the sum-pair when they exist', () => {
    const input = [1, 2, 3, 4];
    expect(sumOfTwoValues(input, 2)).toEqual([]);
    expect(sumOfTwoValues(input, 3)).toEqual([1, 2]);
    expect(sumOfTwoValues(input, 4)).toEqual([1, 3]);
  });

  it('should return empty array when not found', () => {
    const input = [1, 2, 3, 4];
    expect(sumOfTwoValues(input, 8)).toEqual([]);
  });

  it('should find the sum-pair when it has duplicates', () => {
    const input = [1, 3, 2, 1, 4];
    expect(sumOfTwoValues(input, 2)).toEqual([1, 1]);
  });
});

