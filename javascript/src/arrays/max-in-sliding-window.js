// Given a large array of integers and a window of size 'w',
// find the current maximum in the window as the window
// slides through the entire array.
//
// Use a dequeue (or double ll). Iterate i:
// remove from tail of ll all elements that are less than ith element.
// If head element equals element at i-1, pop it. (As it is outside the window now)
//
// Time O(n) (Need to squint a little for this, the number of comparisons
// will be constant per iteration, and each element is added and removed
// atmost once. I think it is similar to heap sort analysis. Surprisingly
// didn't find a good resource to show this)
// Space O(w)

function findMaxInSidingWindow(array, windowSize) {
  const result = [];
  const _window = [];

  // Find max in first window.
  for (let i = 0; (i < windowSize) && (i < array.length); i++) {
    while (_window.length > 0 &&
      _window[_window.length - 1] < array[i]
    ) {
      _window.pop();
    }
    _window.push(array[i]);
  }

  result.push(_window[0]);

  for (let start = 1; start < array.length; start++) {
    const end = (start + windowSize) - 1;
    if (array[start - 1] === _window[0]) {
      _window.shift();
    }

    if (end > (array.length - 1)) {
      result.push(_window[0]);
    } else {
      while (_window.length > 0 &&
        _window[_window.length - 1] < array[end]
      ) {
        _window.pop();
      }
      _window.push(array[end]);
      result.push(_window[0]);
    }
  }

  return result;
}

module.exports = findMaxInSidingWindow;
