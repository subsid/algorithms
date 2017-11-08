const isHoppable = require('../../src/dp/tower-hopper');

describe('isHoppable', () => {
  it('should return true when hop is possible', () => {
    return expect(isHoppable([3, 0, 0, 2, 1, 1, 3, 0, 0])).toEqual(true);
  });

  it('should return false when hop is possible from middle', () => {
    return expect(isHoppable([3, 0, 0, 0, 1, 1, 3, 0, 0])).toEqual(false);
  });

  it('should return false when hop is not possible', () => {
    return expect(isHoppable([1, 0])).toEqual(false);
  });
});
