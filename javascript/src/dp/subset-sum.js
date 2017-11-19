// Given array of integers arr and number k, find all possible ways to sum to
// k, using repeated elements of arr.

function subsetSumRec(arr, k, sums) {
  if (k < 0) {
    return 0;
  }

  if (k === 0) {
    return 1;
  }

  if (sums[k]) {
    return sums[k];
  }

  sums[k] = 0;
  for (let i = 0; i < arr.length; i++) {
    sums[k] += subsetSumRec(arr, k - arr[i], sums);
  }

  return sums[k];
}

function findSubsetSumRec(arr, k) {
  if (arr.length === 0) {
    return 0;
  }

  const sums = {};
  sums[0] = 1;
  subsetSumRec(arr, k, sums);

  return sums[k];
}

module.exports = findSubsetSumRec;
