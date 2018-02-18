// Given an integer array find all Pythagorean triplets (a2 + b2 = c2).
// Similar to 3SUM.
// Sort and for every array element as c, see if a, b can be found.

function pythagoreanTriples(integers) {
  integers.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < integers.length; i++) {
    const c = integers[i];
    let start = 0;
    let end = integers.length - 1;
    while (start < end) {
      if (start === i) {
        start += 1;
        continue;
      }
      if (end === i) {
        end -= 1;
        continue;
      }
      const total = ((integers[start] ** 2) + (integers[end] ** 2)) - (c ** 2);
      if (total === 0) {
        result.push([integers[start], integers[end], c]);
        break;
      } else if (total > 0) {
        end -= 1;
      } else {
        start += 1;
      }
    }
  }

  return result;
}

// console.log(pythagoreanTriples([4, 16, 1, 2, 3, 5, 6, 8, 25, 10]));

module.exports = pythagoreanTriples;

