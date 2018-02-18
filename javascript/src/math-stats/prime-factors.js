// Given a number n, write an efficient function to print all prime factors of
// n. For example, if the input number is 12, then output should be "2 2 3". And
// if the input number is 315, then output should be "3 3 5 7".
// Take 2, add all 2s contained in number to result
// Take 3, add all 3s contained in number to result
// Keep going till sqrt(number) (including that!) (We can increment by 2 instead of 1, starting at 3)
// If final dividend left is prime, add it.

function getFactors(_dividend, divisor) {
  const factors = [];
  let dividend = _dividend;

  if (divisor > dividend) {
    return [1, []];
  }

  while ((dividend % divisor) === 0) {
    dividend = parseInt(dividend / divisor, 10); // parseInt is probably not required.
    factors.push(divisor);
  }

  return [dividend, factors];
}

function primeFactors(n) {
  let [dividend, factors] = getFactors(n, 2);
  let iFactors;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    [dividend, iFactors] = getFactors(dividend, i);
    factors = factors.concat(iFactors);
  }

  if (dividend !== 1) {
    factors.push(dividend);
  }

  return factors;
}

// console.log(primeFactors(315))
// console.log(primeFactors(12))

module.exports = primeFactors;
