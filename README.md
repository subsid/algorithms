# Algorithms

## Arrays

* Binary search
  - Time O(logn)
  - Space O(1) (iterative) O(logn) (recursive)
* Low/high index
  - Binary search twice. Once for finding low, once for finding high.
  - Time O(logn)
  - Space O(1) (Or O(logn) based on binary search complexity)
* Max in sliding window
  - Use a dequeue (or double ll). Iterate i:
    remove from tail of ll all elements that are less than ith element.
    If head element equals element at i-1, pop it. (As it is outside the window now)
  - Time O(n) (Need to squint a little for this, the number of comparisons
    will be constant per iteration, and each element is added and removed
    atmost once. I think it is similar to heap sort analysis. Surprisingly
    didn't find a good resource to show this)
  - Space O(w)
* Maximum single sell profit
  - Basic idea, remember a bunch of values and iterate once. (Kadane's algorithm)
  - We buy before selling. Else we could've juts found min-max and be done.
    So we need to buy at an array index, and then find max from that index to n.
  - profit = sell - buy. So, we'll remember 2 things, global profit and global buy. 
    Also currentBuy, that's like the best buy price, without considering profit.
  - initialize buy and profit with first 2 elements of array.
  - starting at every index from 1, see if sell - buy is lesser than global profit,
    if so, update global buy and profit.
  - update currentBuy, if current index value is lesser.
  - Time Complexity O(n)
  - Space Complexity O(1)
* Merge overlapping sorted intervals
  - Just remember the last s, e and keep comparing.
  - Time O(n)
  - Space O(1)
* Zeros to the left
  - Keep 2 pointers i, j and start from end. i is used for iterating.
  - j will point at zero. swap i and j for every non-zero i, if i not equals j. done!
  - Time O(n)
  - Space O(1)
* Quicksort
  - Standard quicksort implementation.
  - For fun, I've also added threeway partition quicksort. (which is really cool)
  - Time O(nlgn) on average.
  - Space O(lgn)
* Rotate Array
  - Standard trick. Reverse array. Reverse till rotation point. Reverse after rotation point.
  - Time O(n)
  - Space O(1)
* Search sorted rotated array
  - One half is always sorted. Use binary search with some modifications.
  - Time O(logn)
  - Space O(logn) (or O(1))
* Find smallest common number in sorted arrays.
  - keep a pointer on each array.
  - compare the three, if not equal, move the index of smallest element array forward.
  - Time O(n)
  - Space O(1)
* 2-sum
  - for each value in array, check if tot - value is in hash map, else just add to hashmap.
  - Time O(n)
  - Space O(1)

## LinkedList

* Add two integers
* Deep copy with arbitrary pointers
* Delete node
* Insertion sort
* Intersection point
* Merge sort
* Merge sorted lists
* Nth from last
* Remove duplicates
* Reverse even nodes
* Reverse K elements
* Reverse singly linked list
* Rotate linked list
* Swap Nth with head.
