const maxSubSequence = require('../../src/arrays/max-subsequence');

describe('maxSubSequence', () => {
  it('should find the maxSubSequence in the given array with negatives', () => {
    const input = [1, 6, 10, 14, -5, -1, 2, -1, 3];
    expect(maxSubSequence(input)).toEqual([6, 14, 2, 3]);
  });

  it('should handle 1 element case', () => {
    const input = [1];
    expect(maxSubSequence(input)).toEqual([1]);
  });

  it('should return empty array when no elements', () => {
    const input = [];
    expect(maxSubSequence(input)).toEqual([]);
  });

  it('should return least negative when all negative', () => {
    const input = [-10, -20, -2];
    expect(maxSubSequence(input)).toEqual([-2]);
  });
});
