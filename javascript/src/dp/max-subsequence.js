// Find an efficient algorithm to find maximum sum of a subsequence in an array
// such that no consecutive elements are part of this subsequence.

function maxSubSequence(array) {
  const result = [];
  const n = array.length;

  // base cases
  result[0] = 0;
  result[1] = n === 0 ? 0 : array[0];

  for (let i = 2; i <= n; i++) {
    result[i] = Math.max(
      result[i - 1],
      result[i - 2] + array[i - 1],
      array[i - 1]);
  }

  const resultingArray = [];

  // reconstruction
  let next = n;
  while (next > 0) {
    if (result[next] !== result[next - 1]) {
      if (result[next] === array[next - 1]) {
        resultingArray.push(array[next - 1]);
        next = -1;
      } else {
        resultingArray.push(array[next - 1]);
        next -= 2;
      }
    } else {
      next -= 1;
    }
  }

  let start = 0;
  let end = resultingArray.length - 1;
  while (start < end) {
    const temp = resultingArray[start];
    resultingArray[start] = resultingArray[end];
    resultingArray[end] = temp;
    start += 1;
    end -= 1;
  }

  return resultingArray;
}

module.exports = maxSubSequence;
