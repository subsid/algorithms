// Given an array, find the contiguous subarray with the largest sum.
//

function largestSumSubarray(arr) {
  if (arr.length < 1) {
    return [-1, -1, -1]
  }

  let globalMax = arr[0];
  let start = 0;
  let end = 0
  let currentMaxEndingAtIndex = arr[0];
  let currentStart = 0;
  let currentEnd = 0;

  for (let i = 1; i < arr.length; i++) {
    if (currentMaxEndingAtIndex < 0) {
      currentMaxEndingAtIndex = arr[i];
      currentStart = i;
      currentEnd = i;
    } else {
      currentMaxEndingAtIndex += arr[i];
      currentEnd = i;
    }

    if (currentMaxEndingAtIndex > globalMax) {
      globalMax = currentMaxEndingAtIndex;
      start = currentStart;
      end = currentEnd;
    }
  }

  return [globalMax, start, end]
}

let arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1]

console.log(largestSumSubarray(arr));

module.exports = largestSumSubarray;
