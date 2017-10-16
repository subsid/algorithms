// Given a large array of integers and a window of size 'w',
// find the current maximum in the window as the window
// slides through the entire array.

function findMaxInSidingWindow(array, windowSize) {
  const result = [];
  const _window = [];

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
