// Search a given number in a sorted array that has been rotated by some arbitrary number.
// Key Idea: One half is always sorted

function searchSortedRotatedArray(array, key) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = start + Math.floor(((end - start) + 1) / 2);

    if (array[mid] === key) {
      return mid;
    }

    const isArraySortedOnLeftAndKeyOnLeft = ((array[start] < array[mid]) &&
      (key >= array[start] && key < array[mid]));
    const isArraySortedOnRighttAndKeyOnRight = ((array[mid] < array[end]) &&
      (key > array[mid] && key <= array[end]));
    const isUnsortedOnLeft = (array[start] > array[mid]);
    const isUnsortedOnRight = (array[mid] > array[end]);

    if (isArraySortedOnLeftAndKeyOnLeft) {
      end = mid - 1;
    } else if (isArraySortedOnRighttAndKeyOnRight) {
      start = mid + 1;
    } else if (isUnsortedOnLeft) {
      end = mid - 1;
    } else if (isUnsortedOnRight) {
      start = mid + 1;
    }
  }
  return -1;
}

module.exports = searchSortedRotatedArray;
