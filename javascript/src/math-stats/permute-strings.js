// Implement a method to print all permutations of a given string.
// simple backtracking. choose and unchoose.

function permuteStringUtil(string, prefix, result, uniqueStrings) {
  if (string.length === 0) {
    if (!uniqueStrings.has(prefix)) {
      uniqueStrings.set(prefix, true)
      result.push(prefix);
    }
    return;
  }

  for (let i = 0; i < string.length; i++) {
    const c = string[i];
    permuteStringUtil(string.slice(0, i) + string.slice(i + 1), prefix + c, result, uniqueStrings);
  }
}

function permuteString(string) {
  const result = [];
  permuteStringUtil(string, '', result, new Map());

  return result;
}

// console.log(permuteString('aabc'));

module.exports = permuteString;
