// Given head nodes of two linked lists that may or may not intersect, find out
// if they intersect and return the point of intersection; return null otherwise.

function findLength(h) {
  let l = 0;

  while (h !== null) {
    l += 1;
    h = h.next;
  }

  return l;
}

function findIntersection(h1, h2) {
  if (h1 === null || h2 === null) {
    return null;
  }

  const l1 = findLength(h1);
  const l2 = findLength(h2);

  const headDiff = Math.abs(l1 - l2);
  if (l1 > l2) {
    let diff = headDiff;
    while (diff > 0) {
      h1 = h1.next;
      diff -= 1;
    }
  } else if (l2 > l1) {
    let diff = headDiff;
    while (diff > 0) {
      h2 = h2.next;
      diff -= 1;
    }
  }

  let c1 = h1;
  let c2 = h2;

  while ((c1 !== null) && (c2 !== null)) {
    if (c1 === c2) {
      return c1;
    }
    c1 = c1.next;
    c2 = c2.next;
  }

  return null;
}

module.exports = findIntersection;

