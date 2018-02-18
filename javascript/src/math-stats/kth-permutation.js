// Given a set of n elements find their kth permutation.
 // Generating all permutations and picking kth is expensive. (n!)
 // Instead, recurse into a branch and see where the kth permutation will fall.

function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, acc * n);
}

function findBlock(blockSize, k) {
  return Math.floor(k / blockSize);
}

function kthPermuation(elements, k) {
  const n = elements.length;
  if (n === 0) {
    return [];
  }

  const blockSize = factorial(n - 1);
  const blockNum = findBlock(blockSize, k);
  const newK = (k - (blockSize * blockNum));
  const v = elements[blockNum];
  elements.splice(blockNum, 1);

  return [v].concat(kthPermuation(elements, newK));
}


// 1, 2, 3
// 1, 3, 2
// 2, 1, 3
// 2, 3, 1
// 3, 1, 2
// 3, 2, 1
// console.log(kthPermuation([1,2,3], 5));

module.exports = kthPermuation;
