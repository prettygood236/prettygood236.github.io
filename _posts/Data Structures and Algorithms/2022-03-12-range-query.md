---
layout:   post
title:    'Range Query'
subtitle: 'RMQ / RSQ'
category: data-structures-and-algorithms
tags:     data-structures-and-algorithms
image: 
  path: /assets/img/data-structures-and-algorithms/range-query/range-query_main.png
related_posts: 
  - _posts/Data Structures and Algorithms/2022-01-30-tree.md
  - _posts/Data Structures and Algorithms/2022-01-15-recursive-function.md
accent_color: rgba(38,38,42,1)
accent_image:
  background: linear-gradient(0deg, rgba(22,18,22,1) 0%, rgba(38,38,42,1) 100%);
  overlay: false
theme_color: rgba(22,18,22,1)
---

* toc
{:toc .large-only}

We have an array arr[0 . . . n-1]. We should be able to efficiently *<span style='font-size:1.1em'><u>find the value(min,max or sum etc) from index qs (query start) to qe (query end)</u></span>* where 0 <= qs <= qe <= n-1. <br>
There are many ways.

## 1. Segment Tree

### 1.1 What is Segment Tree?
---
A segment tree is a data structure with the following characteristics.

1. Leaf Nodes are the elements of the input array. 
2. <span style='font-size:1em; background-color: #FFF39B'>Each internal node represents some <u>merging</u>(min,max or sum etc) of the leaf nodes</span>. For this problem, merging is sum of leaves under a node.
3. An array representation of tree is used to represent Segment Trees. For each node at index ***`i`***, the left child is at index ***`2*i+1`***, right child at ***`2*i+2`*** and the parent is at ***`(i – 1) / 2`***.

![Segment Tree for input array {1, 3, 5, 7, 9, 11}](/assets/img/data-structures-and-algorithms/range-query/segment-tree_1.png){:width="80%"} <br/> 
{:.figure}  

**How does above segment tree look in memory?** <br/>
Like [Heap](/data-structures-and-algorithms/tree.html#14-heap), the segment tree is also represented as an array. <br>
The difference here is, it is not a complete binary tree. It is rather a full binary tree (every node has 0 or 2 children) and all levels are filled except possibly the last level. Unlike Heap, the last level may have gaps between nodes. Below are the values in the segment tree array for the above diagram. 

~~~
Below is memory representation of segment tree for input array {1, 3, 5, 7, 9, 11} 
st[] = {36, 9, 27, 4, 5, 16, 11, 1, 3, DUMMY, DUMMY, 7, 9, DUMMY, DUMMY}
~~~

The dummy values are never accessed and have no use. This is some wastage of space due to simple array representation. We may optimize this wastage using some clever implementations, but code for sum and update becomes more complex.

### 1.2 Segment Tree Implementation 
---
**Construction of Segment Tree from given array** <br/>
1. Start with a segment `arr[0 . . . n-1]`. 
2. Every time divide the current segment into two halves(if it has not yet become a segment of length 1), and then call the same procedure on both halves, and for each such segment, store the value(min, max or sum) in the corresponding node. 
3. All levels of the constructed segment tree will be completely filled except the last level. Also, the tree will be a <u>Full Binary Tree</u> because we always divide segments in two halves at every level. Since the constructed tree is always a full binary tree with n leaves, there will be `n-1` internal nodes. So the total number of nodes will be `2*n – 1`. Note that this does not include dummy nodes.

**What is the total size of the array representing segment tree?** <br/>
If `n` is a power of 2, then there are no dummy nodes. So the size of the segment tree is `2n-1` (`n` leaf nodes and `n-1` internal nodes). If `n` is not a power of 2, then the size of the tree will be `2*x – 1` where x is the smallest power of 2 greater than n. For example, when n = 10, then size of array representing segment tree is `2*16-1 = 31`. 
An alternate explanation for size is based on heignt. Height of the segment tree will be **$$log_2n$$**. Since the tree is represented using array and relation between parent and child indexes must be maintained, size of memory allocated for segment tree will be **$$2 * 2^{log_2n}  – 1$$**.

**Query for Sum of given range** <br/>
Once the tree is constructed, how to get the sum using the constructed segment tree. The following is the algorithm to get the sum of elements.  

~~~c
int getSum(node, l, r) 
{
   if the range of the node is within l and r
        return value in the node
   else if the range of the node is completely outside l and r
        return 0
   else
    return getSum(node's left child, l, r) + 
           getSum(node's right child, l, r)
}
~~~

**Update a value** <br/>
Like tree construction and query operations, the update can also be done recursively. We are given an index which needs to be updated. Let diff be the value to be added. We start from the root of the segment tree and add diff to all nodes which have given index in their range. If a node doesn’t have a given index in its range, we don’t make any changes to that node.

Following is the implementation of segment tree. The program implements construction of segment tree for any given array. It also implements query and update operations.  

~~~py
# title : 'SegmentTree.py'
# Segment Tree operations(construction, query and update)

from math import ceil, log2;

# A utility function to get the
# middle index from corner indexes.
def getMid(s, e) :
	return s + (e -s) // 2;

""" A recursive function to get the sum of values
	in the given range of the array. The following
	are parameters for this function.

	st --> Pointer to segment tree
	si --> Index of current node in the segment tree.
		Initially 0 is passed as root is always at index 0
	ss & se --> Starting and ending indexes of the segment
				represented by current node, i.e., st[si]
	qs & qe --> Starting and ending indexes of query range """
def getSumUtil(st, ss, se, qs, qe, si) :

	# If segment of this node is a part of given range,
	# then return the sum of the segment
	if (qs <= ss and qe >= se) :
		return st[si];

	# If segment of this node is
	# outside the given range
	if (se < qs or ss > qe) :
		return 0;

	# If a part of this segment overlaps
	# with the given range
	mid = getMid(ss, se);
	
	return getSumUtil(st, ss, mid, qs, qe, 2 * si + 1) +
		getSumUtil(st, mid + 1, se, qs, qe, 2 * si + 2);

""" A recursive function to update the nodes
which have the given index in their range.
The following are parameters st, si, ss and se
are same as getSumUtil()
i --> index of the element to be updated.
	This index is in the input array.
diff --> Value to be added to all nodes
which have i in range """
def updateValueUtil(st, ss, se, i, diff, si) :

	# Base Case: If the input index lies
	# outside the range of this segment
	if (i < ss or i > se) :
		return;

	# If the input index is in range of this node,
	# then update the value of the node and its children
	st[si] = st[si] + diff;
	
	if (se != ss) :
	
		mid = getMid(ss, se);
		updateValueUtil(st, ss, mid, i,
						diff, 2 * si + 1);
		updateValueUtil(st, mid + 1, se, i,
						diff, 2 * si + 2);

# The function to update a value in input array
# and segment tree. It uses updateValueUtil()
# to update the value in segment tree
def updateValue(arr, st, n, i, new_val) :

	# Check for erroneous input index
	if (i < 0 or i > n - 1) :
		
		print("Invalid Input", end = "");
		return;

	# Get the difference between
	# new value and old value
	diff = new_val - arr[i];

	# Update the value in array
	arr[i] = new_val;

	# Update the values of nodes in segment tree
	updateValueUtil(st, 0, n - 1, i, diff, 0);

# Return sum of elements in range from
# index qs (query start) to qe (query end).
# It mainly uses getSumUtil()
def getSum(st, n, qs, qe) :

	# Check for erroneous input values
	if (qs < 0 or qe > n - 1 or qs > qe) :

		print("Invalid Input", end = "");
		return -1;
	
	return getSumUtil(st, 0, n - 1, qs, qe, 0);

# A recursive function that constructs
# Segment Tree for array[ss..se].
# si is index of current node in segment tree st
def constructSTUtil(arr, ss, se, st, si) :

	# If there is one element in array,
	# store it in current node of
	# segment tree and return
	if (ss == se) :
	
		st[si] = arr[ss];
		return arr[ss];
	
	# If there are more than one elements,
	# then recur for left and right subtrees
	# and store the sum of values in this node
	mid = getMid(ss, se);
	
	st[si] = constructSTUtil(arr, ss, mid, st, si * 2 + 1) +
			constructSTUtil(arr, mid + 1, se, st, si * 2 + 2);
	
	return st[si];

""" Function to construct segment tree
from given array. This function allocates memory
for segment tree and calls constructSTUtil() to
fill the allocated memory """
def constructST(arr, n) :

	# Allocate memory for the segment tree

	# Height of segment tree
	x = (int)(ceil(log2(n)));

	# Maximum size of segment tree
	max_size = 2 * (int)(2**x) - 1;
	
	# Allocate memory
	st = [0] * max_size;

	# Fill the allocated memory st
	constructSTUtil(arr, 0, n - 1, st, 0);

	# Return the constructed segment tree
	return st;

# Driver Code
if __name__ == "__main__" :

	arr = [1, 3, 5, 7, 9, 11];
	n = len(arr);

	# Build segment tree from given array
	st = constructST(arr, n);

	# Print sum of values in array from index 1 to 3
	print("Sum of values in given range = ",
					getSum(st, n, 1, 3));

	# Update: set arr[1] = 10 and update
	# corresponding segment tree nodes
	updateValue(arr, st, n, 1, 10);

	# Find sum after the value is updated
	print("Updated sum of values in given range = ",
					getSum(st, n, 1, 3), end = "");
	
~~~




[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br>
{:.note title="reference"}