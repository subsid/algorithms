// Given an array of integers, check if its possible to reach array.length + 1.
// Constraints:
// - Can only move forward by the value in the current array index.
// Ex) isHoppable([3, 1,]) -> true. isHoppable([1, 0]) -> false

function isHoppable(array) {
  const result = [];
  const N = array.length - 1;

  for (let i = N; i >= 0; i--) {
    if (array[i] + i > N) {
      result[i] = true;
    } else if (array[i] === 0) {
      result[i] = false;
    } else {
      // Guess everything!
      for (let j = 1; j <= array[i]; j++) {
        if (array[i + j]) {
          result[i] = true;
        } else {
          result[i] = false;
        }
      }
    }
  }

  return result[0];
}

module.exports = isHoppable;
