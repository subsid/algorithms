// Find all subsets of a given set of integers.

function allSubsetsUtil(start, integers, partialSubset, result) {
  if (start === integers.length) {
    result.push(partialSubset);
    return;
  }

  allSubsetsUtil(start + 1, integers, partialSubset.concat(integers[start]), result);
  allSubsetsUtil(start + 1, integers, partialSubset, result);
}

function allSubsets(integers) {
  const result = [];
  allSubsetsUtil(0, integers, [], result);

  return result;
}

// console.log(allSubsets([1, 2, 3]));

module.exports = allSubsets;
