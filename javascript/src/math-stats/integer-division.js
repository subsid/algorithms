// Divide two integers without using '/' (division) or '*' (multiplication)
// operators.
//
// Main idea: Left shit is equivalent of multiplying by 2, and right shift is dividing by 2.
// Keep left shifting and figure it out! Its not bad.

function integerDivision(x, y) {
  if (y === 0) {
    return -1;
  }

  if (x < y) {
    return 0;
  } else if (x === y) {
    return 1;
  } else if (y === 1) {
    return x;
  }
  let q = 1;
  let shiftedY = y;

  while (shiftedY < x) {
    shiftedY <<= 1;
    q <<= 1;
  }
  if (shiftedY > x) {
    return (q >> 1) + integerDivision(x - (shiftedY >> 1), y);
  }

  return q;
}

// console.log(integerDivision(8, 5));
// console.log(integerDivision(40, 5));
// console.log(integerDivision(48, 5));

module.exports = integerDivision;

