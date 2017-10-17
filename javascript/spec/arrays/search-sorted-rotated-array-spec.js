const searchSortedRotatedArray = require('../../src/arrays/search-sorted-rotated-array');

describe('searchSortedRotatedArray', () => {
  describe('rotated less than half', () => {
    const input = [50, 62, 65, 70, 3, 7, 9, 19, 22, 34, 49];

    it('should find element in sorted rotated array', () => {
      expect(searchSortedRotatedArray(input, 65)).toEqual(2);
    });
  });

  describe('rotated more than half', () => {
    const input = [22, 34, 49, 50, 62, 65, 70, 3, 7, 9, 19];

    it('should find element in sorted rotated array', () => {
      expect(searchSortedRotatedArray(input, 70)).toEqual(6);
    });
  });

  describe('base case', () => {
    const input = [70];

    it('should handle 1 element case', () => {
      expect(searchSortedRotatedArray(input, 70)).toEqual(0);
    });
  });
});
