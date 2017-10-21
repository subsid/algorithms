// Given an integer array, move all elements containing '0' to the left while
// maintaining the order of other elements in the array.

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
