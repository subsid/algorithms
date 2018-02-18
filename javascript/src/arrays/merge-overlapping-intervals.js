// Given an array (list) of intervals as input where each interval has a start
// and end timestamps. Input array is sorted by starting timestamps. You are
// required to merge overlapping intervals and return output array (list).
//
// Just remember the last s, e and keep comparing.
// Time O(n)
// Space O(1)

function mergeOverlappingIntervals(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  const result = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const [, end] = result[result.length - 1];
    const [currentStart, currentEnd] = intervals[i];

    if (currentStart <= end) {
      result[result.length - 1][1] = Math.max(currentEnd, end);
    } else {
      result.push([currentStart, currentEnd]);
    }
  }

  return result;
}

module.exports = mergeOverlappingIntervals;
