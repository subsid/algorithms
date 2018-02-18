// Given an integer array, move all elements containing '0' to the left while
// maintaining the order of other elements in the array.
//
// Keep 2 pointers i, j and start from end. i is used for iterating.
// j will point at zero. swap i and j for every non-zero i, if i not equals j. done!
// Time O(n)
// Space O(1)

function moveZerosLeft(array) {
  if (array.length <= 1) {
    return array;
  }

  let readIndex = array.length - 1;
  let writeIndex = array.length - 1;

  while (readIndex >= 0) {
    if (array[readIndex] !== 0) {
      array[writeIndex] = array[readIndex];
      writeIndex -= 1;
    }
    readIndex -= 1;
  }

  while (writeIndex >= 0) {
    array[writeIndex] = 0;
    writeIndex -= 1;
  }

  return array;
}

module.exports = moveZerosLeft;
