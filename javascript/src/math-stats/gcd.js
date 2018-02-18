// Find gcd of given 2 numbers
// [Euclids Algorithm](http://www.techiedelight.com/euclids-algorithm-to-find-gcd-of-two-numbers/)
// Basic idea behind the algorithm is that GCD doesn't change if we replace larger number by its difference with smaller number.
// Instead of subtraction, we replace by the reminder of larger/smaller number.

function findGcd(n1, n2) {
  if (n1 === 0) {
    return n2;
  }

  if (n2 === 0) {
    return n1;
  }

  if (n1 > n2) {
    return findGcd(n2, n1 % n2);
  }
  return findGcd(n1, n2 % n1);
}

module.exports = findGcd;
