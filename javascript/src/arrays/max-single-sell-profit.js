// Given a list of stock prices for n days, find the maximum profit with a
// single buy/sell activity.
// Kadane's algorithm
// Time Complexity O(n)
// Space Complexity O(1)

function findMaxSingleSellProfit(array) {
  if (array.length < 2) {
    return [];
  }

  let buy = array[0];
  let profit = array[1] - array[0];

  let currentBuy = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentProfit = array[i] - currentBuy;

    if (currentProfit >= profit) {
      profit = currentProfit;
      buy = currentBuy;
    }

    if (array[i] < currentBuy) {
      currentBuy = array[i];
    }
  }

  return [buy, buy + profit];
}

module.exports = findMaxSingleSellProfit;
