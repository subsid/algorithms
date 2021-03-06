// Given an array of integers and a value, determine if there are any two
// integers in the array which sum equal to the given value.
// for each value in array, check if tot - value is in hash map, else just add to hashmap.
// Time O(n)
// Space O(1)

function sumOfTwoValues(array, target) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (map.has(target - array[i])) {
      return [target - array[i], array[i]];
    }
    map.set(array[i], true);
  }

  return [];
}

module.exports = sumOfTwoValues;

