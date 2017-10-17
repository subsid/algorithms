// Given three integer arrays sorted in ascending order,
// find the smallest number that is common in all three arrays.
// return null if nothing is common
//
// Key Idea: Increase the smallest number's index
// everytime till the three numbers are equal.

function findSmallestCommonInSortedArrays(a1, a2, a3) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a1.length && j < a2.length && k < a3.length) {
    if ((a1[i] === a2[j]) && (a2[j] === a3[k])) {
      return a1[i];
    } else if (a1[i] <= a2[j] &&
      a1[i] <= a3[k]) {
      i += 1;
    } else if (a2[j] <= a1[i] &&
      a2[j] <= a3[k]) {
      j += 1;
    } else if (a3[k] <= a2[j] &&
      a3[k] <= a1[i]) {
      k += 1;
    }
  }

  return -1;
}

module.exports = findSmallestCommonInSortedArrays;
