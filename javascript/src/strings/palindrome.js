// Given a string find all substrings that are palindromes. For instance:
// aabbbaa -> aa bb bbb abbba aabbbaa bb aa
//
// Mancher's algorithm.
// For every character at index i in input string.
// Find all palindromes that can be formed using i as the center. (odd length)
// Find all palindromes that can be formed with  i, i+1 as the center. (even length)
// Done!
//
// Time O(n^2)
// Space O(1)


function findAllPalindromeSubstringsWithCenter(string, i, j) {
  let result = [];
  if (i === j) {
    i -= 1;
    j += 1;
  }
  while (i >= 0 && j < string.length) {
    if (string[i] === string[j]) {
      result.push(string.substring(i, j + 1))
      i -= 1;
      j += 1;
    } else {
      break
    }
  }
  return result;
}

function palindromeSubstrings(string, results) {
  const result = []
  if (string.length === 0) {
    return result;
  }
  for (let i = 0; i < string.length - 1; i++) {
    result.push(...findAllPalindromeSubstringsWithCenter(string, i, i));
    result.push(...findAllPalindromeSubstringsWithCenter(string, i, i + 1));
  }

  return result;
}

console.log(palindromeSubstrings("aabbbaa"))

module.exports = palindromeSubstrings;
