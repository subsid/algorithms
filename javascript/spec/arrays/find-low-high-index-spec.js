const findLowHighIndex = require('../../src/arrays/find-low-high-index');

describe('findLowHighIndex', () => {
  it('should return expected low and high index with few repeats', () => {
    const input = [1, 7, 7, 7, 7, 10];
    expect(findLowHighIndex(input, 7)).toEqual([1, 4]);
  });

  it('should return same low and high when no duplicates', () => {
    const input = [1, 7, 9, 11, 13, 15];
    expect(findLowHighIndex(input, 9)).toEqual([2, 2]);
  });

  it('should return same low and high in 1 element case', () => {
    const input = [1];
    expect(findLowHighIndex(input, 1)).toEqual([0, 0]);
  });

  it('should return start and end in 2 element case with same elements', () => {
    const input = [1, 1];
    expect(findLowHighIndex(input, 1)).toEqual([0, 1]);
  });

  it('should return -1 when not found', () => {
    const input = [1, 1];
    expect(findLowHighIndex(input, 10)).toEqual([-1, -1]);
  });
});

