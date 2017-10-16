const binarySearch = require('../../src/arrays/binary-search');

describe('binarySearch', () => {
  describe('general case', () => {
    const array = [4, 7, 11, 14, 16];

    it('should return element in first half correctly', () => {
      return expect(binarySearch(array, 7)).toBe(1);
    });

    it('should return element in second half correctly', () => {
      return expect(binarySearch(array, 14)).toBe(3);
    });

    it('should return -1 when element not found', () => {
      return expect(binarySearch(array, 23)).toBe(-1);
    });
  });

  describe('degenerate cases', () => {
    describe('two element list', () => {
      const array = [4, 7];

      it('should find first and last element correctly in two element list', () => {
        expect(binarySearch(array, 4)).toBe(0);
        expect(binarySearch(array, 7)).toBe(1);
      });
    });
  });
});

