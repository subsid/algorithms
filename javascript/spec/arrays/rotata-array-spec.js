const rotateArray = require('../../src/arrays/rotate-array');

describe('rotateArray', () => {
  it('should rotate array by 2', () => {
    const input = [3, 4, 5, 7, 9];
    expect(rotateArray(input, 2)).toEqual([7, 9, 3, 4, 5]);
  });

  it('should remain same when rotated by length', () => {
    const input = [3, 4, 5, 7, 9];

    expect(rotateArray(input, input.length)).toEqual([3, 4, 5, 7, 9]);
  });

  it('should rotate by more than half', () => {
    const input = [3, 4, 5, 7, 9];

    expect(rotateArray(input, 4)).toEqual([4, 5, 7, 9, 3]);
  });
});
