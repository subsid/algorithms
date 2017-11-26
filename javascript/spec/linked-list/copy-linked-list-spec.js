const copyList = require('../../src/linked-list/copy-linked-list');

describe('copyList', () => {
  beforeEach(() => {
    jasmine.addCustomEqualityTester(function (h1, h2) {
      let c1 = h1;
      let c2 = h2;
      while ((c2 !== null) && (c1 !== null)) {
        if ((c1 === c2) || (c1.value !== c2.value)) {
          return false;
        }

        c1 = c1.next;
        c2 = c2.next;
      }
      if (c1 || c2) {
        return false;
      }

      return true;
    });
  });

  it('should create copy of each node in old list and rewire arbitrary', function () {
    const n1 = { value: 1 };
    const n2 = { value: 2 };
    const n3 = { value: 3 };

    n3.arbitrary = null;
    n3.next = null;

    n2.arbitrary = null;
    n2.next = n3;

    n1.arbitrary = n3;
    n1.next = n2;

    // value check
    expect(copyList(n1)).toEqual(n1);
    // reference check
  });
});
