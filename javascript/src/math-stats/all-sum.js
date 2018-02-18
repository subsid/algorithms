// Given a positive integer, print all possible sum combinations using positive
// integers.
// Recursion and backtrack. Enumerate all possible numbers till n. Add to array if total > 0. Return array if total is 0,
// reject if total < 0 and try another number.

function allSumUtil(start, n, total, partialList, result) {
  if (total === 0) {
    result.push(partialList);
    return;
  } else if (total < 0) {
    return;
  }
  for (let i = start; i < n; i++) {
    allSumUtil(i, n, total - i, partialList.concat(i), result);
  }
}

function allSum(n) {
  const result = [];
  allSumUtil(1, n, n, [], result);

  return result;
}

// console.log(allSum(5));

module.exports = allSum;
