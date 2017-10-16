// Given a sorted array of integers, return the index of the given key. Return -1 if not found.

// Non-Recursive version
const binarySearch = function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

module.exports = binarySearch;

