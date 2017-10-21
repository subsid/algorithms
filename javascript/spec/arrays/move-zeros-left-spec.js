const moveZerosLeft = require('../../src/arrays/move-zeros-left');

describe('moveZerosLeft', () => {
  it('should move multiple random zeros to left', () => {
    const input = [10, 9, 0, 11, 0, 10, 4];
    expect(moveZerosLeft(input)).toEqual([0, 0, 10, 9, 11, 10, 4]);
  });

  it('should handle case where all zeros', () => {
    const input = [0, 0, 0];
    expect(moveZerosLeft(input)).toEqual([0, 0, 0]);
  });

  it('should handle duplicates', () => {
    const input = [10, 10, 0, 0, 0, 4, 11, 3];
    expect(moveZerosLeft(input)).toEqual([0, 0, 0, 10, 10, 4, 11, 3]);
  });
});
