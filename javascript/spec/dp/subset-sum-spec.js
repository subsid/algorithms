const findSubsetSumRec = require('../../src/dp/subset-sum');

describe('subset-sum', () => {
  it('should return number of subsets possible with repeats', () => {
    // [1,1,1], [1,2], [2, 1], [3]
    expect(findSubsetSumRec([1,2,3], 3)).toEqual(4);

    // [1,1,1,1], [2,2,1], [1,2,2], [2,1,2],
    // [1,1,2,1], [1,1,1,2], [1,2,1,1], [2,1,1,1]
    // [1,4], [4,1]
    expect(findSubsetSumRec([1,2,4], 5)).toEqual(10);
  })

  it('should return 0 when not defined', () => {
    expect(findSubsetSumRec([2,4], 3)).toEqual(0);
  })
})
