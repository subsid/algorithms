// Given a string S, check if the letters can be rearranged so that two
// characters that are adjacent to each other are not the same. If possible,
// output any possible result.  If not possible, return the empty string.
//
// Input: S = "aab"
// Output: "aba"
// Input: S = "aaab"
// Output: ""

 var validString = function(S) {
   let i = 0;
    while (i < S.length - 1) {
      if (S[i] === S[i+1]) {
          return false
      }
      i += 1;
    }
    return true;
};

var hashCode = function(S) {
  return Array.from(S).sort().join('')
}

var reorganizeStringUtil = function(S, prefix, reorgStringMap) {
  if (S.length < 1) {
    if (validString(prefix)) {
      return prefix;
    } else {
      return "";
    }
  }
  let key = hashCode(S);
  if (reorgStringMap[S]) {
    return reorgStringMap[key]
  }
  for (let i = 0; i < S.length; i++) {
    let c = S[i];
    let result = reorganizeStringUtil(S.substring(0, i) + S.substring(i+1), prefix + c, reorgStringMap);
    if (result.length > 0) {
      reorganizeString[key] = result;
      return result;
    }
  }
  reorgStringMap[S] = "";
  return "";
}

var reorganizeString = function(S) {
  return reorganizeStringUtil(S, "", {})
};

// reorganizeString("kkkkzrkatkwpkkkktrq");
console.log(reorganizeString("aab"));

module.exports = reorganizeString;
