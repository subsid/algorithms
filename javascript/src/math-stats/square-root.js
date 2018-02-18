// Given a double number (positive), write a function to calculate its square root.
//
// The idea is to use an algorithm similar to binary search.
// For n >= 1, the square root s is less than n. 1 <= s < n
// For n < 1, the sqaure root 0 < n < s < 1
// We use this as the boundaries for our divide and conquer algorithm.
// If n >= 1, low = 1, high = n mid = (low + high) / 2 (Maybe overflow question :))
// If n < 1, low = 0, high = 1, mid = (low + high) / 2
// If mid^2 < n, move start, else move end. Keep going!
//
// Time: O(log n)
// Space: O(1) (If iterative)

function squareRoot(n) {
}

module.exports = squareRoot;
