// Search a given number in a sorted array that has been rotated by some arbitrary number.

function searchSortedRotatedArray(array, key) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = start + Math.floor(((end - start) + 1) / 2);
    if (array[mid] === key) {
      return mid;
    }

    // TODO :: Can this check for length 1 be done differently?
    const isArraySortedOnLeftAndKeyOnLeft = (mid - start === 1) || ((array[start] < array[mid]) &&
      (key >= array[start] && key < array[mid]));
    const isArraySortedOnRighttAndKeyOnRight = (end - mid === 1) || ((array[mid] < array[end]) &&
      (key > array[mid] && key <= array[end]));
    const isArraySortedOnLefttAndKeyOnRight = (mid - start === 1) || (array[start] < array[mid]);
    const isArraySortedOnRighttAndKeyOnLeft = (end - mid === 1) || (array[mid] < array[end]);

    if (isArraySortedOnLeftAndKeyOnLeft) {
      end = mid - 1;
    } else if (isArraySortedOnRighttAndKeyOnRight) {
      start = mid + 1;
    } else if (isArraySortedOnLefttAndKeyOnRight) {
      start = mid + 1;
    } else if (isArraySortedOnRighttAndKeyOnLeft) {
      end = mid - 1;
    }
  }
  return -1;
}

module.exports = searchSortedRotatedArray;
