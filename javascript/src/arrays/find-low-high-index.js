// Given a sorted array of integers, return the low and high index of the given
// key. Return -1 if not found. The array length can be in millions with lots
// of duplicates.

const findLowHighIndex = function findLowHighIndex(array, key) {
  // find low with binary search.
  // find high with binary search.
  let low = -1;
  let high = -1;
  let start = 0;
  let end = array.length - 1;

  // find low
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (array[mid] === key) {
      low = mid;
      end = mid - 1;
    } else if (array[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // find high
  start = 0;
  end = array.length - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (array[mid] === key) {
      high = mid;
      start = mid + 1;
    } else if (array[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return [low, high];
};

module.exports = findLowHighIndex;

