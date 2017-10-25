const mergeOverlappingIntervals = require('../../src/arrays/merge-overlapping-intervals');

describe('mergeOverlappingIntervals', () => {
  it('should merge multiple overlapping intervals when present', () => {
    const input = [[1, 3], [4, 8], [5, 7], [7, 12]];
    expect(mergeOverlappingIntervals(input)).toEqual([[1, 3], [4, 12]]);
  });

  it('should remove intervals contained in another while merging', () => {
    const input = [[1, 3], [4, 7], [5, 6], [8, 12]];
    expect(mergeOverlappingIntervals(input)).toEqual([[1, 3], [4, 7], [8, 12]]);
  });

  it('should not merge when intervals dont overlap', () => {
    const input = [[1, 3], [5, 7], [8, 12]];
    expect(mergeOverlappingIntervals(input)).toEqual([[1, 3], [5, 7], [8, 12]]);
  });
});
