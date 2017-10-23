const findMaxSingleSellProfit = require('../../src/arrays/max-single-sell-profit');

describe('findMaxSingleSellProfit', () => {
  it('should max profit when possible', () => {
    const input = [8, 5, 12, 9, 19, 1];
    expect(findMaxSingleSellProfit(input)).toEqual([5, 19]);
  });

  it('should minimize loss when profit not possible', () => {
    const input = [21, 12, 11, 9, 6, 3];
    expect(findMaxSingleSellProfit(input)).toEqual([12, 11]);
  });

  it('should return empty when less than 2 prices in array', () => {
    const input = [21, 12, 11, 9, 6, 3];
    expect(findMaxSingleSellProfit(input)).toEqual([12, 11]);
  });
});
