// Find gcd of given 2 numbers
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
