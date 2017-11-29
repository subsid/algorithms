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
  - Have 2 pointers, one for each list, add the numbers at the same index on both lists and keep track of carry.
  - Time O(n)
  - Space O(1)
* Deep copy with arbitrary pointers
  - Can be done in 2 passes.
  - Firt pass: create a copy of the linked list. Also create a Map(ll_old_node, ll_new_node). Don't mess with arbitrary_pointer.
  - Second pass through new list: Update arbitrary pointer of each node to point to new list.
  - Time O(n)
  - Space O(n)
  - There is a more fancy way to do this, without the additional memory. (But I think that's not elegant)
* Delete node
  - Straightforward method with current and previous pointers.
  - Time O(n)
  - Space O(1)
* Insertion sort
  - For every node in list, add it to a sorted list, using insertion sort technique.
  - Time O(n^2)
  - Space O(1)
* Intersection point
  - Move forward in the longer list, until lengths of 2 lists are equal.
  - move together, one by one and see if a node is the same.
  - Time O(m + n)
  - Space O(1)
* Merge sort
  - standard merge sort. Split into 2, sort left and right, merge them.
  - Classic technique to find middle. Have 2 pointers, 1 going twice as fast as the other.
  - Time O(nlogn)
  - Space O(1)
* Merge sorted lists
  - Standard merge technique.
  - Have a pointer on each list, move forward on the list with the smaller number.
  - Time O(m + n)
  - Space O(1)
* Nth from last
  - Classic technique, have 2 pointers with |p1| - |p2| = n. When 1st pointer reaches last, second one points to N.
  - Time O(n)
  - Space O(1)
* Remove duplicates
  - Add data from node to a Map. If data is seen in map, delete it.
  - Time O(n)
  - Space O(n)
* Reverse even nodes
  - create 2 lists from original. One for odds and one for evens.
  - Reverse nodes in even.
  - merge the 2 lists alternatively.
  - Time O(n)
  - Space O(1)
* Reverse K elements
  - Idea is simple, just pick k successive nodes, reverse them, move to next set of k, reverse them etc.
  - we'll have a few pointers.
  - Time O(n)
  - Space O(1)
* Reverse singly linked list
  - Fairly simple, have current, previous and change next accordingly.
  - Time O(n)
  - Space O(1)
* Rotate linked list
  - Find rotation point, and adjust some pointers.
  - Time O(n)
  - Space O(1)
* Swap Nth with head.
  - Find (n-1)th node.
  - Some pointer adjustments
  - Time O(n)
  - Space O(1)
