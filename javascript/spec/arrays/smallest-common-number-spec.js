const findSmallestCommonInSortedArrays = require('../../src/arrays/smallest-common-number');

fdescribe('findSmallestCommonInSortedArrays', () => {
  it('should find smallest when they exist at different indices', () => {
    const a1 = [10, 20, 30, 40, 50];
    const a2 = [11, 22, 27, 40, 50];
    const a3 = [11, 30, 34, 38, 40];

    expect(findSmallestCommonInSortedArrays(a1, a2, a3)).toEqual(40);
  });

  it('should find smallest when they exist at same index', () => {
    const a1 = [10, 20, 30, 40, 50];
    const a2 = [11, 22, 27, 40, 50];
    const a3 = [11, 30, 34, 40, 50];

    expect(findSmallestCommonInSortedArrays(a1, a2, a3)).toEqual(40);
  });

  it('should return -1 when no common element found', () => {
    const a1 = [10, 20, 30, 40, 50];
    const a2 = [11, 22, 27, 45, 50];
    const a3 = [11, 30, 34, 38, 40];

    expect(findSmallestCommonInSortedArrays(a1, a2, a3)).toEqual(-1);
  });
});

