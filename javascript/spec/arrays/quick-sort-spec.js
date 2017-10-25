const { quickSort, threeWayPartitionQuickSort } = require('../../src/arrays/quick-sort');

describe('quickSort', () => {
  it('should sort array with different keys', () => {
    const input = [10, 1, 7, 3, 200, 150, 175, 90];
    expect(quickSort(input)).toEqual([1, 3, 7, 10, 90, 150, 175, 200]);
  });

  it('should sort array with duplicate keys', () => {
    const input = [10, 1, 200, 200, 200, 200, 175, 90];
    expect(quickSort(input)).toEqual([1, 10, 90, 175, 200, 200, 200, 200]);
  });

  it('should sort 2 element base case', () => {
    const input = [3, 1];
    expect(quickSort(input)).toEqual([1, 3]);
  });

  it('should handle all duplicates', () => {
    const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(quickSort(input)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});

describe('threeWayPartitionQuickSort', () => {
  it('should sort array with different keys', () => {
    const input = [10, 1, 7, 3, 200, 150, 175, 90];
    expect(threeWayPartitionQuickSort(input)).toEqual([1, 3, 7, 10, 90, 150, 175, 200]);
  });

  it('should sort array with duplicate keys', () => {
    const input = [10, 1, 200, 200, 200, 200, 175, 90];
    expect(threeWayPartitionQuickSort(input)).toEqual([1, 10, 90, 175, 200, 200, 200, 200]);
  });

  it('should sort 2 element base case', () => {
    const input = [3, 1];
    expect(threeWayPartitionQuickSort(input)).toEqual([1, 3]);
  });

  it('should handle all duplicates', () => {
    const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(threeWayPartitionQuickSort(input)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});
