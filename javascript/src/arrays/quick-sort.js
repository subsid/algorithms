// Given an integer array, sort it in ascending order using quicksort.
// Standard quicksort implementation.
// For fun, I've also added threeway partition quicksort. (which is really cool)
// Time O(nlgn) on average.
// Space O(lgn)

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, low, high) {
  const randomIndex = low + Math.ceil(Math.random() * (high - low));
  swap(array, low, randomIndex);

  const pivot = array[low];
  let i = low;
  let j = high;

  while (i < j) {
    while ((i <= high) && (array[i] <= pivot)) {
      i += 1;
    }

    // This was cool, no need to check if j goes out of bounds, as pivot is
    // there to stop it.
    while (array[j] > pivot) {
      j -= 1;
    }

    if (i < j) {
      swap(array, i, j);
    }
  }

  swap(array, low, j);
  return j;
}

function quickSortRec(array, low, high) {
  if (low >= high) {
    return;
  }
  const pivotIndex = partition(array, low, high);

  quickSortRec(array, low, pivotIndex - 1);
  quickSortRec(array, pivotIndex + 1, high);
}

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  quickSortRec(array, 0, array.length - 1);

  return array;
}

function threeWayPartitionQuickSortRec(array, low, high) {
  if (low >= high) {
    return;
  }

  const randomIndex = low + Math.ceil(Math.random() * (high - low));
  swap(array, low, randomIndex);

  let pivotIndex = low;
  let i = low;
  let gt = high;
  const pivot = array[pivotIndex];

  while (i <= gt) {
    if (array[i] < pivot) {
      swap(array, i, pivotIndex);
      i += 1;
      pivotIndex += 1;
    } else if (array[i] > pivot) {
      swap(array, i, gt);
      gt -= 1;
    } else {
      i += 1;
    }
  }

  threeWayPartitionQuickSortRec(array, low, pivotIndex - 1);
  threeWayPartitionQuickSortRec(array, gt + 1, high);
}

// https://algs4.cs.princeton.edu/lectures/23DemoPartitioning.pdf
function threeWayPartitionQuickSort(array) {
  if (array.length < 2) {
    return array;
  }

  threeWayPartitionQuickSortRec(array, 0, array.length - 1);

  return array;
}

module.exports = {
  quickSort,
  threeWayPartitionQuickSort,
};
