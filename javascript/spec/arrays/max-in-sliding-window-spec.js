const findMaxInSidingWindow = require('../../src/arrays/max-in-sliding-window');

describe('findMaxInSidingWindow', () => {
  const array = [10, 9, 8, 6, 7, 1, 2, 3];

  it('should keep track of max in sliding current window', () => {
    const output = [10, 9, 8, 7, 7, 3, 3, 3];

    expect(findMaxInSidingWindow(array, 3)).toEqual(output);
  });
});
