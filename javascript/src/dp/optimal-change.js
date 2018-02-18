// Given coins denominations and total amount, find out the number of ways to make
// the change.

function optimalChangeUtil(amount, coins, result) {
  if (coins.length === 0) {
    return 0
  }

  if (amount < 0) {
    return 0;
  }

  if (amount === 0) {
    return 1;
  }

  if (result[`${amount}:${coins.join(',')}`] !== undefined) {
    return result[`${amount}:${coins.join(',')}`];
  }

  result[`${amount}:${coins.join(',')}`] = optimalChangeUtil(amount - coins[0], coins, result) +
    optimalChangeUtil(amount, coins.slice(1), result);

  return result[`${amount}:${coins.join(',')}`]
}

function optimalChange(amount, coins) {
  if (coins.length < 1) {
    return 0;
  }

  const result = {}

  optimalChangeUtil(amount, coins, result)

  return result[`${amount}:${coins.join(',')}`]
}

console.log(optimalChange(7, [1, 2, 5]))

module.exports = optimalChange;
