// Given an array of integers, rotate the array by 'N' elements.
// Standard trick. Reverse array. Reverse till rotation point. Reverse after rotation point.
// Time O(n)
// Space O(1)

const rotateArrayInPlace = function rotateArray(array, N) {
  const reverseArray = (start, end) => {
    while (start < end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start += 1;
      end -= 1;
    }
  };

  reverseArray(0, array.length - 1);
  reverseArray(0, N - 1);
  reverseArray(N, array.length - 1);

  return array;
};

module.exports = rotateArrayInPlace;

