// Given two strings, compute the Levenshtein distance between them i.e. the
// minimum number of edits required to convert one string into the other.


// Recursive solution
function levenshteinDistance(x, y, memo) {
  if (x.length === 0) {
    return y.length;
  } else if (y.length === 0) {
    return x.length;
  }

  const key = [x, y].join(',');
  if (memo[key]) {
    return memo[key];
  }

  const score = x[x.length - 1] === y[y.length - 1] ? 0 : 1;

  memo[key] = Math.min(
    levenshteinDistance(x.substring(0, x.length - 1), y.slice(0, y.length - 1), memo) + score,
    levenshteinDistance(x.substring(0, x.length), y.slice(0, y.length - 1), memo) + 1,
    levenshteinDistance(x.substring(0, x.length - 1), y.slice(0, y.length), memo) + 1,
  );

  return memo[key];
}

console.log("kitten - sitting", levenshteinDistance( "kitten", "sitting", {}));
console.log("gumbo - gambol", levenshteinDistance("gumbo", "gambol", {}));
console.log("rosettacode - raisethysword", levenshteinDistance("rosettacode", "raisethysword", {}));

module.exports = levenshteinDistance;

