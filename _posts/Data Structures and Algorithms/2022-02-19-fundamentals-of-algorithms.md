---
layout:   post
title:    'Fundamentals of Algorithms'
subtitle: 'Fundamentals of Algorithms'
category: data-structures-and-algorithms
tags:     data-structures-and-algorithms
image: 
  path: /assets/img/data-structures-and-algorithms/algorithm-main.jpg
related_posts: 
  - _posts/Data Structures and Algorithms/2022-01-31-fundamentals-of-data-structures.md
  - _posts/Coding Test/2022-02-03-sudoku.md
---

Algorithm is a set of <span style='font-size:1em'>***well-defined instructions to solve a particular problem.***</span> <br>
It takes a set of input and produces a desired output. 

* toc
{:toc .large-only}

**Qualities of Good Algorithms**

- Input and output should be defined precisely.
- Each step in the algorithm should be clear and unambiguous.
- Algorithms should be most effective among many different ways to solve a problem.
- An algorithm shouldn't include computer code. Instead, the algorithm should be written - in such a way that it can be used in different programming languages.

## 1. Greedy

### 1.1 What is Greedy algorithm?

Greedy algorithm means a method to <span style='background-color: #FFF39B;'>*choose only good things from the current situation.*</span>

- A typical greedy algorithm requires the ability to come up with minimal ideas to solve a problem.
- It is important to analyze the legitimacy of the greedy solution.
  - Examine whether an optimal solution can be obtained by iteratively selecting the one that looks the best.

In a greedy algorithm problem,  it is <span style='background-color: #FFF39B; font-size:1.1em'>*necessary to be able to come up with a minimal ideas for solving the problem and examine whether this is justified.*</span>

### 1.2 Greedy Example Problem  

#### 1.2.1 Problem : Until it becomes 1 

Until a certain number N becomes 1, one of the following two processes is repeatedly selected and performed. However, the second operation can be selected only when N is divisible by K. 

1. Subtract 1 from N. 
2. Divide N by K. 

For example, if N = 17, K = 4 <br> 
1) 17 - 1 = 16  <br> 
2) 16 // 4 = 4 <br> 
3) 4 // 4 = 1 

The number of times the entire process is executed becomes 3. This is the minimum number of times to make N equal to 1.

**Difficulty: 1 \| 15 minutes to solve \| Time limit 2 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
In the first line N (2 <= N <= 100,000) and K (2 <= K <= 100,000) separated by spaces, each given as a natural number.

**Output conditions** <br>
In the first line, print the minimum value for the number of times that one or two processes must be performed until N becomes 1.

| Input Example | Output Example |
|`25 5`|`2`|

#### 1.2.2 Solution : Until it becomes 1

Since K is greater than 2, dividing by K will always reduce N faster than subtracting 1. <br>
Also, N will always becomes 1. 

*Dividing as many as possible guarantees an optimal solution!*

~~~py
# Python
# Get input with N, K separated by spaces
n, k = map(int, input(). split())
result = 0

while True:
    # Subtract until N is divisible by K
     target = (n // k) * k
     result += (n - target)
     n = target
    # Escape from loop when N is less than K (not more divisible)
     if n < k:
     break
    # Divide by K
     result += 1
     n //= k
 
# Subtract 1 for the last remaining number
reslut += (n - 1)
print(result)
~~~

#### 1.2.3 Problom : Multiply or Add 

Given a string s where each digit consists of only numbers (0 to 9), check all numbers one by one from left to right, and insert the 'x' or '+' operator between the numbers to find the largest number that can be made as a result. Write a program to retrieve it. 
However, unlike the usual way of calculating x before +, it is assumed that all operations are performed in order from the left.


**Difficulty: 1 \| 30 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB \| Previous Facebook interview**
{:.message}

**Input conditions** <br>
The first line is given a string S of several numbers. (1<=S.length<=20)

**Output conditions** <br>
Print the largest possible number in the first line.

| Input Example 1 | Output Example 1|
|`02984`|`576`|

| Input Example 2 | Output Example 2|
|`567`|`210`|

#### 1.2.4 Solution : Multiply or Add 

In most cases, 'x' makes the value larger than '+'. For example, 5+6=11 and 5X6=30.
- However, if any of the two numbers is '0' or '1', it is more efficient to perform '+' rather than 'x'

*Therefore, when performing an operation on two numbers, if one of the two numbers is less than 1, '+' it, and if both numbers are 2 or more, 'x' is the correct answer.*

~~~py
# Python
data = input()

# Replace the first character with a number
result = int(data[0])

for i in range(1, len(data)):
     # If either number is '0' or '1', '+' rather than 'x'.
     num = int(data[i])
     if num <= 1 or result <= 1:
         result += num
     else:
         result *= num

print(result)
~~~

## 2. Implementation

### 2.1 What is Implementation?

Implementation is <span style='background-color: #FFF39B; font-size:1.1em'>*the process of converting an algorithm in your head into source code.*</span>

Example of implementation type problem is:
- The algorithm is simple, but the code becomes excessively long.
- Problems dealing with real numbers and outputting to a certain number of decimal places.
- Problems that have to be dealt with by breaking strings according to certain criteria.
- The problem of finding and using the appropriate library.

There are many similarities between the type ***Simulation*** , ***Implementation***, and ***Brute-Force*** in coding tests.

### 2.2 Implementation Example Problem  


#### 2.2.1 Problem : Left, Right, Up, Down

Traveler A stands on a square space of size N × N. This space is divided into squares of size 1 × 1. <br>
The upper-left coordinate corresponds to (1, 1), and the lower-right coordinate corresponds to (N, N). <br>
Traveler A can move up, down, left and right, and the starting coordinate is always (1, 1). In front of us is a plan with traveler A's plans to move.

In the plan, one letter of L, R, U, and D is repeatedly written on one line based on space.
The meaning of each character is as follows.

L: move one space to the left <br>
R: move one space to the right <br>
U: move up one space <br>
D: move down one space <br>

In this case, the movement of traveler A outside the square space of size N × N is ignored. <br>
For example, if L or U is encountered at position (1, 1), it is ignored. <br>

![left-right-up-down_example](/assets/img/coding-test/left-right-up-down_example.png)
the map and plan for N = 5
{:.figure}

**Difficulty: 1 \| 15 minutes to solve \| Time limit 2 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
The first line is given an N indicating the size of the space. (1<=N<=100) <br>
In the second line, the contents of the travel plan for traveler A are given. (1<=Number of moves<=100)

**Output conditions** <br>
In the first line, print the number written on the card selected according to the rules of the game.

| Input Example | Output Example|
|`5`|`3 4`|
|`R R R U D D`|

#### 2.2.2 Solution : Left, Right, Up, Down

This is a problem that needs to implement faithfully according to the requirements.

~~~py
# Python
# Get N input
n = int(input())
x, y = 1, 1
plans = input(). split()

# Direction of movement according to L, R, U, D
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

# Check the move plans one by one
for plan in plans:
     # Get coordinates after moving
     for i in range(len(move_types)):
         if plan == move_types[i]:
             nx = x + dx[i]
             ny = y + dy[i]
     # Ignore if out of space
     if nx < 1 or ny < 1 or nx > n or ny > n:
         continue
     # Perform a move
     x, y = nx, ny

print(x, y)
~~~

#### 2.2.3 Problem : Royal Knight

When the position of the knight on the 8 × 8 coordinate plane is given, the number of cases in which the knight can move is output. A knight can move from a specific location in the following two cases:

1. Move two spaces horizontally and then move one space vertically
2. Move two spaces vertically and then move one space horizontally

Write a program. In the royal garden, row positions are expressed as 1 to 8, and column positions are expressed as
express from a to h.

![Royal Knight](/assets/img/coding-test/royal-knight.png){:width="50%"}

There are 6 possible moves when in c2.<br>
There are 2 possible moves when in a1.

**Difficulty: 1 \| 20 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
In the first line, a two-character string representing the coordinates of where the knight is currently located on the 8x8 coordinate plane is entered. Input characters consist of columns and rows, like a1.

**Output conditions** <br>
In the first line, print the number of times a knight can move.

| Input Example | Output Example|
|a1|2|

#### 2.2.4 Solution : Royal Knight

Check the 8 paths of the knight one by one and check if it is possible to move to each location. <br>
Using the list, define direction vectors for 8 directions.

~~~py
# Python
# Get the current knight's location
input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])) - int(ord('a')) + 1

# Define 8 directions a knight can move
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2 ), (-2, 1)]

# Check if it is possible to move to each position in 8 directions
result = 0
for step in steps:
     # Check the location you want to move
     next_row = row + step[0]
     next_column = column + step[1]
     # If it is possible to move to that location, the count is increased.
     if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_column <= 8:
         result += 1

print(result)
~~~

## 3. DFS & BFS

### 3.1 What is Depth-First Search?

DFS is literally an algorithm that searches the deep part first.<br>
DFS uses a stack data structure (or recursive function)

**DFS operation process**
1. Insert the search start node into the stack and process the visit.
2. If there is at least one unvisited adjacent node at the top node of the stack, the node is push into the stack and visited. If there are no unvisited adjacent nodes, pop the topmost node from the stack.
3. Repeat until step 2 can no longer be performed.
<br>

![Depth-First Search operation](/assets/img/data-structures-and-algorithms/graph_dfs.gif){:width="600"} <br>
<br>

### 3.2 What is Breadth-First Search?

![Breadth-First Search operation](/assets/img/data-structures-and-algorithms/graph_bfs.gif){:width="600"} <br>
<br>


### 3.3 Tree : DFS Implementation

~~~js
// Javascript
// Simple tree (no membership check)
let Node = function (value) {
  this.value = value;
  this.children = [];
};
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let dfs = function (node) {
  let result = [node.value]
  // console.log(result)
  node.children.forEach(el=>{
    result = result.concat(dfs(el))
    // console.log(el)
    // console.log(result)
  })
  return result  
}
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
~~~
<br>

### 3.4 Tree : BFS Implementation

~~~js
// Javascript
// Simple tree (no membership check)
let bfs = function (node) {
  let result = [node.value]
  let queue = [node]
  while(queue.length!==0){
    let target = queue.shift()
    target.children.forEach(children=>{
      result.push(children.value)
      queue.push(children)
    })
  }
  return result  
};


let bfs = function (node) {
  let result = [node.value]
  // console.log(result)
  node.children.forEach(el=>{
    result = result.concat(bfs(el))
    // console.log(el)
    // console.log(result)
  })
  return result  
}
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]
~~~
<br>


### 3.5 Graph : DFS Implementation

~~~js
// Javascript
function bfs(graph, root) {
  let nodesLen = {};
  
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; 
  
  let queue = [root]; 
  let current; 

  while (queue.length != 0) {
    current = queue.shift();
    
    let curConnected = graph[current];
    let neighborIdx = []; 
    let idx = curConnected.indexOf(1); 
    while (idx != -1) {
      neighborIdx.push(idx); 
      idx = curConnected.indexOf(1, idx + 1); 
    }
    
    for (let j = 0; j <u neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); 
      }
    }
  }
  return nodesLen;
};

let exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1)); //{ '0': 2, '1': 0, '2': 1, '3': 3, '4': Infinity }
~~~
<br>


## 4. Sort

Sorting is *<u>arranging data in order according to a specific criterion.</u>* <br>
In general, an appropriate sorting algorithm is used as a formula according to the problem situation.

### 4.1 Selection Sort

#### 4.1.1 What is Selection Sort?

It repeats *<span style='font-size:1.1em; background-color: #FFF39B'>**<u>selecting</u>** the smallest data among the unprocessed data and replacing it with the first data.</span>*

**[Step 0]** <br>
Select <u>the smallest 0</u> among unprocessed data and replace it with <u>the leading 7</u>.
![Selection Sort_1](/assets/img/data-structures-and-algorithms/selection-sort_1.png){:.width="80%"}

**[Step 1]** <br>
Select <u>the smallest 1</u> among unprocessed data and replace it with <u>the leading 5</u>.
![Selection Sort_2](/assets/img/data-structures-and-algorithms/selection-sort_2.png){:.width="80%"}

**[Step 2]** <br>
Select <u>the smallest 2</u> among unprocessed data and replace it with <u>the leading 9</u>.
![Selection Sort_3](/assets/img/data-structures-and-algorithms/selection-sort_3.png){:.width="80%"}

**[Step 3]** <br>
Select <u>the smallest 3</u> among unprocessed data and replace it with <u>the the leading 7</u>.
![Selection Sort_4](/assets/img/data-structures-and-algorithms/selection-sort_4.png){:.width="80%"}

**[Step 8]** <br>
If this process is repeated, <u>the sorting is completed</u> as follows.
![Selection Sort_5](/assets/img/data-structures-and-algorithms/selection-sort_5.png){:.width="80%"}

The search range decreases with each iteration. Each time, the data is checked as far as the search range to find the smallest element. It is equivalent to doing a <u>linear search</u> every time. 

#### 4.1.2 Selection Sort Implementation

~~~py
# Python
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(len (array) ); # i is the smallest data and the index to change position = the frontmost position each time
    min_index = i #index of the smallest element, put the smallest element first
    for j in range( i+1, len(array) ): # j starts a linear search (from the next index)
        if array[ min_index ] > array[j]: #if there is an index smaller than the current smallest element
            min_index = j # Make the position index value come to the smallest index value
    array[i], array[min_index] = array[min_index], array[i] # swap, swap the first and smallest elements

print(array)

# output
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
~~~

#### 4.1.3 Time complexity of Selection Sort

Selection sort must find the smallest number N times and send it to the front. 

There may be minor errors depending on the implementation method, but the total number of operations is as follows.

$$N + (N -1) + (N - 2) + ... + 2$$ (in arithmetic sequence form)

This can be expressed as $$(N^2 + N - 2) / 2$$ , which is written as $$\underline{O(N^2)}$$ according to Big O notation. 


### 4.2 Insertion Sort

#### 4.2.1 What is Insertion Sort?

It picks out the unprocessed data one by one and *<span style='font-size:1.1em; background-color: #FFF39B'>**<u>inserts</u>** them in the appropriate places.</span>* <br>
It is more difficult to implement than selection sort, but it is generally more efficient.

**[Step 0]** <br>
It is judged that the first data 7 is sorted by itself, and the position of the second data 5 is determined. There are only two cases, either going to the left of 7 or going to the right. <br>
<u>5 is smaller, so it goes to the left.</u>
![Insertion Sort_1](/assets/img/data-structures-and-algorithms/insertion-sort_1.png){:.width="80%"}

**[Step 1]** <br>
Then, it is decided which position the 9 is going. <br>
<u>9 is bigger, so it goes right.</u>
![Insertion Sort_2](/assets/img/data-structures-and-algorithms/insertion-sort_2.png){:.width="80%"}

**[Step 2]** <br>
Then, it is determined where the 0 is going. <br>
<u>Since 0 is less than 5, it is shifted to the left.</u>
![Insertion Sort_3](/assets/img/data-structures-and-algorithms/insertion-sort_3.png){:.width="80%"}

**[Step 8]** <br>
If this process is repeated, the sorting is completed as follows.
![Insertion Sort_5](/assets/img/data-structures-and-algorithms/insertion-sort_5.png){:.width="80%"}

#### 4.2.2 Insertion Sort Implementation

~~~py
# Python
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(1, len(array)): # iterate starting from the second element
    for j in range( i, 0, -1 ): # Grammar that repeats decreasing by 1 from index i to 1, where j is the position of the element to be inserted
        if array[ j ] < array[ j -1 ] #if it is less than the left
            array[ j ], array[ j -1 ] = array[ j -1 ], array[ j ] #swapping, reposition = move left
        else: #if it is greater than or equal to left
            break #stop

print(array)

# output
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
~~~

#### 4.2.3 Time complexity of Insertion Sort

The time complexity of insertion sort is $$\underline{O(N^2)}$$, and like selection sort, the loop is used twice.

Insertion sort <u>works very quickly if the data in the current list is almost sorted.</u>
- It has a time complexity of $$\underline{O(N)}$$ <u>in the best case.</u>
- What happens if you perform insertion sort again while already sorted? <br>-> *<span style='font-size:1em; background-color: #FFF39B'>Stops immediately while performing the search.</span>*


### 4.3 Quick Sort

#### 4.3.1 What is Quick Sort?

This is a method of *<u>setting the reference data</u>* and *<span style='font-size:1.1em; background-color: #FFF39B'>changing the positions of larger and smaller data than the standard.</span>* 

It is one of the most used sorting algorithms in general situations.
Along with merge sort, it is an algorithm that is the basis of sort libraries in most programming languages.

The most basic quick sort *<span style='font-size:1em; background-color: #FFF39B'>sets the first data as the reference data (Pivot).</span>*

**[Step 0]** <br>
The current pivot value is 5. Since data larger than 5 is selected from the left, 7 is selected, and since data smaller than 5 is selected from the right, 4 is selected. Now we swap the positions of these two data.
![Quick Sort_1](/assets/img/data-structures-and-algorithms/quick-sort_1.png){:.width="80%"}

**[Step 1]** <br>
The current pivot value is 5. Since data larger than 5 is selected from the left, 9 is selected, and since data smaller than 5 is selected from the right, 2 is selected. Now, the positions of the two data are changed to each other.
![Quick Sort_2](/assets/img/data-structures-and-algorithms/quick-sort_2.png){:.width="80%"}

**[Step 2]** <br>
The current pivot value is 5. Since data larger than 5 is selected from the left, 6 is selected, and since data smaller than 5 is selected from the right, 1 is selected. <br>
However, ***if the positions are staggered like this, the positions of the pivot and small data are changed.***
![Quick Sort_3](/assets/img/data-structures-and-algorithms/quick-sort_3.png){:.width="80%"}

**[Divide complete]** <br>
Now, the data to the left of 5 are all less than 5, and the data to the right are all greater than 5. This *<u>operation of dividing the data bundle based on the pivot</u>* is called divide.
![Quick Sort_4](/assets/img/data-structures-and-algorithms/quick-sort_4.png){:.width="80%"}

**[Left Data Bundle Sort]** <br>
Quick sort is performed on the data on the left in the same way.
![Quick Sort_5](/assets/img/data-structures-and-algorithms/quick-sort_5.png){:.width="80%"}

*Performed recursively. Every time you do quicksort, the sorting range gets narrower.*

**[Right Data Bundle Sort]** <br>
Quick sort is performed on the data on the right in the same way.
![Quick Sort_6](/assets/img/data-structures-and-algorithms/quick-sort_6.png){:.width="80%"}

If this process is repeated, sorting is performed on all data.
<br>

**Why Quick Sort is Fast?**

In the ideal case, if the division occurs by half, $$O(NlogN)$$ can be expected for the total number of operations.
$$Width \times height = N \times logN = NlogN$$

![Quick Sort_7](/assets/img/data-structures-and-algorithms/quick-sort_7.png){:.width="80%"}


#### 4.3.2 Quick Sort Implementation

**Implementation in a usual way**

~~~py
# Python
array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array, start, end)
    if start >= end: #end if 1 element
        return
    pivot = start # (otherwise) pivot is the first element
    left = start + 1 #set left
    right = end #set right
    while( left <= right ): #Repeat until crossed
        # iterate until we find data larger than the pivot
        while{ left <= end and array[left] <= array[pivot] ):
            left += 1
        # iterate until we find data smaller than the pivot
        while( right > start and array[right] >= array[pivot] ):
            right += 1
        if( left > right ): #if it crossed
           array[right], array[pivot] = array[pivot], array[right] #Swap the pivot with small data
        else: #if not crossed
            array[left], array[right] = array[right], array[left] # Swap small and large data

    # Perform sorting on the left part and the right part after division
    quick_sort(array, start, right -1 )
    quick_sort(array, right +1, end )

quick_sort(array, 0, len(array) -1 )
print(array)

# output
# [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
~~~

**Implementation in a way that takes advantage of Python's strengths**

~~~py
# Python
array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]

def quick_sort(array):
    # quit if list contains no more than one element
    if len( array ) <= 1:
        return array
    pivot = array[0] #The pivot is the first element
    tail = array[1:] #List without pivot (make a list from the 2nd element to the last element)

    left_side = [x for x in tail if x <= pivot] # (if less than pivot value) the divided left part
    right_side = [x for x in tail if x > pivot] # (if greater than pivot value) divided right part

    # After dividing, sort the left and right parts, respectively, and return the entire list
    return quick_sort(left_side) + [pivot] + quick_sort(right_side)

print(quick_sort(array))

# output
# [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
~~~

#### 4.3.3 Time complexity of Quick Sort

Quicksort has a time complexity of $$\underline{O(NlogN)}$$ in case of average. <br>
However, it has a time complexity of $$\underline{O(N^2)}$$ <u>in the worst case.</u><br>
What happens if you perform quicksort on an already sorted array when the first element is pivoted?
![Quick Sort_8](/assets/img/data-structures-and-algorithms/quick-sort_8.png){:.width="80%"}

- Segmentation in which only the right data remains is continued.
- The number of divisions is N. (A linear search must be performed every time.)
- Time complexity : $$N \times N => O(N^2)$$

The programming default library is set to implement $$NlogN$$ even in the worst case.

### 4.4 Counting Sort

#### 4.4.1 What is Counting Sort?

It is a ***very fast sorting algorithm*** that can only be used when certain conditions are met. 

Counting sort can be used when *<span style='font-size:1.1em; background-color: #FFF39B'>the size range of data is limited and can be expressed in integer form.</span>*

When the number of data is N and the maximum value among data (positive numbers) is K, the execution time $$\underline{O(N + K)}$$ <u>is guaranteed even in the worst case.</u>

**[Step 0]** <br>
Create a list to contain all the ranges from the smallest data to the largest data.<br>
**Data to sort by**: 7 5 9 0 3 1 6 2 9 1 4 8 0 5 2
![Counting Sort_1](/assets/img/data-structures-and-algorithms/counting-sort_1.png){:.width="80%"}

Count the number of times each data appeared in total.

**[Step 1]** <br>
Check the data one by one and increase the data of the same index as the data value by one. <br>
**Data to sort by**: **<u>7</u>** 5 9 0 3 1 6 2 9 1 4 8 0 5 2
![Counting Sort_2](/assets/img/data-structures-and-algorithms/counting-sort_2.png){:.width="80%"}


**[Step 2]** <br>
Check the data one by one and increase the data of the same index as the data value by one. <br>
**Data to sort by**: 7 **<u>5</u>** 9 0 3 1 6 2 9 1 4 8 0 5 2
![Counting Sort_3](/assets/img/data-structures-and-algorithms/counting-sort_3.png){:.width="80%"}


**[Step 15]** <br>
As a result, the number of times each data appears is recorded in the final list. <br>
**Data to sort by**: 7 5 9 0 3 1 6 2 9 1 4 8 0 5 **<u>2</u>**
![Counting Sort_4](/assets/img/data-structures-and-algorithms/counting-sort_4.png){:.width="80%"}

When checking the result, the index is printed by repeating the value one by one from the first data in the list.
![Counting Sort_5](/assets/img/data-structures-and-algorithms/counting-sort_5.png){:.width="80%"}

**Output Result**: 0 0 1 1 2 2 3 4 5 5 6 7 8 9 9

Although the space complexity is relatively high, it operates faster if the conditions are satisfied.

#### 4.4.2 Counting Sort Implementation

~~~py
# Python
# Assume all elements are greater than or equal to 0
array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]
#declare a list containing all ranges (all values ​​are initialized to 0)
count = [0] * (max( array ) + 1) # Create a count array with a size of 10 from 0 to 9.

for i in range(len( array )): #Check the number of data (N)
    count[array[ i ]] += 1 #Increase the index value corresponding to each data (record how many times it appears)

for i in range(len( count )): #Check the sort information recorded in the list (check each index)
    for j in range(count[ i ]): # The number of executions of the inner loop is N.
        print(i, end=' ') # Print the index as many times as the number of occurrences separated by spaces

# output
# 0 0 1 1 2 2 3 4 5 5 6 7 8 9 9
 ~~~

#### 4.4.3 Time complexity of Counting Sort

Both the time and space complexity of Counting sort are $$\underline{O(N + K)}$$. <br>
(N: the number to be sorted) (K: the largest value among elements)

Counting sorting can sometimes lead to serious inefficiencies.
- Consider a case where there are only two data, 0 and 999,999. (You must create an array containing 1 million elements.)

Counting sorting can be *<span style='font-size:1em; background-color: #FFF39B'>effectively used when multiple data with the same value appear.</span>*
- In the case of grades, there may be several students who scored 100 points, so sorting the counting sort is effective.

### 4.5 Merge Sort

#### 4.5.1 What is Merge Sort?

Merge sort divides one large problem into two smaller problems, computes each, and then merges them. That said, the basic idea is *<span style='font-size:1.1em; background-color: #FFF39B'>to divide it exactly in half once and sort it later.</span>* 

Unlike quicksort, merge sort has no pivot value and always divides in half. This feature makes the step size logN.

![Merge Sort_1](/assets/img/data-structures-and-algorithms/merge-sort_1.png){:.width="80%"}

Let's look at the picture above. All of the 7 6 5 8 3 5 9 1s start out as individual arrays of size 1. Now, in the first step 1, each array is of size 2. It's a combination of two things that used to be one size. If you look, you can see that in the first step 1 is divided by 6 7 / 5 8 / 3 5 / 1 9. Then the second step is to combine the ones of size 2 by two to create an array of size 4.

In other words, <u>the sort is performed at the moment of merging.</u> The merging step only takes 3 steps. The sum is 2^3 = 8 in the sense that the number doubles, so only 3 steps are needed.

#### 4.5.2 Merge Sort Implementation

~~~py
# Python
def mergeSort(arr):
    if len(arr) > 1:
           # Finding the mid of the array
        mid = len(arr)//2
          # Dividing the array elements
        L = arr[:mid]
          # into 2 halves
        R = arr[mid:]
          # Sorting the first half
        mergeSort(L)
          # Sorting the second half
        mergeSort(R)
          i = j = k = 0
  
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

          # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
  
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

# Code to print the list
def printList(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()
    
# Driver Code
if __name__ == '__main__':
    arr = [12, 11, 13, 5, 6, 7]
    print("Given array is", end="\n")
    printList(arr)
    mergeSort(arr)
    print("Sorted array is: ", end="\n")
    printList(arr)
~~~

One thing to keep in mind when implementing merge sort is that the array used for sorting must be declared as a 'global variable'. If you declare an array inside a function, the waste of memory resources can become very large in that you have to declare the array every time. 

As such, merge sort has the problem of inefficient memory utilization in that <u>additional array space to hold existing data is required</u>. (Heap sort solves the memory inefficiency problem.)

Merge sort is usually slower than quicksort, but is a very efficient algorithm in that it is guaranteed to be exactly $$O(N \times logN)$$ under any circumstances.


#### 4.5.3 Time complexity of Merge Sort

The size of the step is kept as logN when the number of data is N. Also, the execution time required for sorting itself is N. This is because you only need to calculate the number of data. As a result, the total time complexity is $$O(N \times logN)$$.

Why is the execution time required for sorting only N? Here's why it only takes N to sort the subsets. 

![Merge Sort_2](/assets/img/data-structures-and-algorithms/merge-sort_2.png){:.width="80%"}

The initial state is as above. In the left set, i points to the first element, and in the second set, j points to the second element. And the array to be sorted is empty. The reason the sort takes only N is the same reason as insertion sort. This is because it assumes that *<u>'the subset is already sorted'</u>*. This is because ***the time complexity of O(N) is sufficient to combine two things that are already sorted.***

![Merge Sort_3](/assets/img/data-structures-and-algorithms/merge-sort_3.png){:.width="80%"}

The first process is to compare i and j as above, put a smaller number in the position of k, and add the processed index by one. As a result, you can see that k and j have moved to the right by one space as shown above.

![Merge Sort_4](/assets/img/data-structures-and-algorithms/merge-sort_4.png){:.width="80%"}

Similarly, comparing i = 6 and j = 8, 6 is smaller, so it is inserted at the k position and i and k are added by 1 each. The result is as above. If you iterate like this, you only need to ***process exactly N times***.

![Merge Sort_5](/assets/img/data-structures-and-algorithms/merge-sort_5.png){:.width="80%"}

That is, as above, the width is N times and the height is log N times, which guarantees a time complexity of $$\underline{O(N \times logN)}$$.

### 4.6 Sort Algorithm Comparison

|Sort Algorithms|Average Time Complexity|Space Complexity|Feature|
|:--:|:--:|:-:|:-:|
|Selection Sort|$$O(N^2)$$|$$O(N)|The idea is very simple.
|Insertion Sort|$$O(N^2)$$|$$O(N)|It is fastest when the data is almost sorted.
|Quick Sort|$$O(NlogN)$$|$$O(N)|In most cases, it is the most joint, and it is fast enough|
|Counting Sort|$$O(N+K)$$|$$O(N)|It can be used only when the size of the data is limited, but it works very quickly.|
|Merge Sort|$$O(NlogN)$$|$$O(N)|Memory usage is inefficient.|

For reference, the standard sort library supported by most programming 
languages ​​is designed to guarantee O(NlogN) even in the worst case.

### 4.7 Sort Example Problem

#### 4.7.1 Problem : Swapping elements in two arrays

I have two arrays A and B. Both arrays consist of N elements, and the elements of the array are all natural numbers. <br>
A maximum of K replacement operations can be performed. A replacement operation means selecting one element from array A and one element from array B and swapping the two elements.<br>
The end goal is to maximize the sum of all elements of array A.
Given N, K, and information about arrays A and B, write a program that prints the maximum value of the sum of all elements of array A that can be made by performing at most K replacement operations.

For example, say N = 5, K = 3, and the arrays A and B are as follows.
- Array A = [1, 2, 5, 4, 3]
- Array B = [5, 5, ,6, ,6, 5]

In this case, three operations can be performed as follows.
- Operation 1) Swap element 1 of array A and element 6 of array B
- Operation 2) Swap element 2 of array A and element 6 of array B
- Operation 3) Swap element 3 of array A and element 5 of array B

After the three operations, the states of array A and array B are configured as follows.
- Array A = [6, 6, 5, 4, 5]
- Array B = [3, 5, 1, 2, 5]

At this time, the sum of all elements of array A is 26, and the sum cannot be made larger than this.

**Difficulty: 1 \| 15 minutes to solve \| Time limit 2 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
In the first line, N and K are entered, separated by spaces. (1 <= N <= 100,000, 0 <=K <= N) <br>
In the second line, the elements of array A are entered separated by spaces. All elements are natural numbers less than 10,000,000. <br>
In the third line, the elements of array B are entered, separated by spaces. All elements are natural numbers less than 10,000,000.

**Output conditions** <br>
Outputs the maximum value of the sum of all elements of the array A that can be created by performing the maximum K replacement operations.

| Input Example | Output Example|
|5 3|26|
|1 2 5 4 3|
|5 5 6 6 5|

#### 4.7.2 Solution : Swapping elements in two arrays

The key idea: **each time pick the smallest element from array A and replace it with the largest element from array B.** <br>
First, given arrays A and B, sort in ascending order on A and sort in descending order on B.<br>
Afterwards, the elements of the two arrays are checked sequentially from the first index, and replacement is performed only when the element of A is smaller than the element of B. <br>
In this problem, up to 100,000 elements in both arrays can be entered, so a sorting algorithm that guarantees $$O(NlogN)$$ in the worst case should be used.

~~~py
# Python
n, k = map(int, input(). split()) # Get N and K as input
a = list( map( int, input(). split())) # get all elements of array A
b = list( map( int, input(). split())) # get all elements of array B as input

a. sort() # sort array A in ascending order
b. sort( reverse= True ) # sort B in descending order

#Check the first index and compare the elements of two arrays up to K times
for i in range(k):
    #If the element of A is smaller than the element of B
    if a[i] < b[i]
        # replace two elements
        a[i], b[i] = b[i], a[i]
    else: #Escape the loop when an element in A is greater than or equal to an element in B
        break

print(sum(a)) # print the sum of all elements in array A
~~~


## 5. Binary Search

### 5.1 What is Binary Search?

***Sequential Search*** : A method of *<span style='font-size:1.1em; background-color: #FFF39B'>checking data one by one from the front </span>*to find specific data in a list

*<span style='background-color: #E0FFC4'>**Binary Search**</span>* : A method of *<span style='font-size:1.1em; background-color: #FFF39B'>searching for data in a sorted list by halving the search range.</span>*
- Binary search sets the search range using the starting point, the ending point, and the midpoint.

**[Step 1]** Start point: 0, End point: 9, Mid point: 4 (remove decimal point)
![Binery Search_1](/assets/img/data-structures-and-algorithms/binary-search_1.png)

Comparing the midpoint value with the value to be found, if the midpoint value is larger, there is no need to check the midpoint to the right end.
Move the end point in front of the midpoint.

**[Step 2]** Start point: 0, End point: 3, Mid point: 1 (remove decimal point)
![Binery Search_2](/assets/img/data-structures-and-algorithms/binary-search_2.png)

If the midpoint value is smaller than the midpoint value and the value to be found, there is no need to check the midpoint to the left end.
Move the starting point behind the midpoint.

 
**[Step 3]** Start point:2, End point:3, Mid point: 2 (remove decimal point)
![Binery Search_3](/assets/img/data-structures-and-algorithms/binary-search_3.png)

Since we found the value we are looking for at the starting point, we end our search.

### 5.2 Time complexity of Binary Search

Since each step is equivalent to dividing the search range by 2, **the number of operations is proportional to $$\bf{log_2N}$$.**

For example, when the initial number of data is 32, 
- After step 1, ideally only 16 pieces of data are left.
- After step 2, only about 8 pieces of data remain.
- After step 3, only about 4 pieces of data are left.

In other words, binary search cuts the search range by half, and the time complexity is guaranteed to be $$\underline{O(logN)}$$.

### 5.3 Binary Search Implementation

**Recursive Implementation**
~~~py
# Python
def binary_search(array, target, start, end):
    if start > end:
        return None
    mid = (start + end) // 2
    # Convert midpoint index if found
    if array[mid] == target:
        return mid
    # If the value you want to find is less than the value of the midpoint, check the left
    elif array[mid] > target:
        return binary_search(array, target, start, mid - 1)
    # If the value you want to find is greater than the value of the midpoint, check the right
    else:
        return binary_search(array, target, mid + 1, end)

# Get n (number of elements) and target (value to find)
n, target = list(map(int, input(). split()))
# Get all elements input
array = list(map(int, input(). split()))

# Output the result of binary search
result = binary_search(array, target, 0, n - 1)
if result == None:
    print("The element does not exist.")
else:
    print(result + 1)
~~~

**Loop Implementation**
~~~py
# Python
def binary_search(array, target, start, end):
    while start <= end:
        mid = (start + end) // 2
        # return midpoint index if found
        if array[mid] == target:
            return mid
        # If the value you want to find is less than the value of the midpoint, check the left
        elif array[mid] > target:
            end = mid - 1
        # If the value you want to find is greater than the value of the midpoint, check the right
        else:
            start = mid + 1
    return None

# Get n (number of elements) and target (value to find)
n, target = list(map(int, input(). split()))
# Get all elements input
array = list(map(int, input(). split()))

# Output the result of binary search
result = binary_search(array, target, 0, n - 1)
if result == None:
    print("The element does not exist.")
else:
    print(result + 1)
~~~
 
### 5.4 Python Binary Search Library

**bisect_left( a, x )**: returns the leftmost index at which to insert x into array a while maintaining sorted order <br>
**bisect_right( a, x )**: returns the rightmost index at which to insert x into array a while maintaining sorted order

~~~py
from bisect import bisect_left, bisect_right

a = [1, 2, 4, 4, 8]
x = 4

print( bisect_left( a, x ) ) (output) 2

print( bisect_right( a, x ) ) (output) 4
~~~
 
Count the number of data whose values ​​fall within a specific range

~~~py
from bisect import bisect_left, bisect_right

#Function returning the number of data whose values ​​are [ left_value, right_value ]
def count_by_range( a, left_value, right_value ):
    right_index = bisect_right( a, right_value )
    left_index = bisect_left( a, left_value )
    return right_index - left_index
 
#declare an array
a = [1, 2, 3, ,3, 3, 3, 4, 4, 8, 9]

#Output the number of data whose value is 4
print( count_by_range(a, 4, 4) ) (output) 2

#Output the number of data whose value is in the range [-1, 3]
print( count_by_range( a, -1, 3) ) (output) 6
~~~

### 5.5 What is Parametric Search?

<span style='background-color: #E0FFC4'>***Optimization problem***</span> is a problem of reducing the value of a function as low as possible or increasing it as much as possible.

Parametric search is a technique for <span style='font-size:1.1em; background-color: #FFF39B'>*solving an optimization problem into a decision problem (yes or no)*</span>. 

Example: An optimization problem that quickly finds the most appropriate value that satisfies a specific condition

In general, the parametric search problem in coding tests **can be solved using binary search**.


### 5.6 Binery Search Example Problem

#### 5.6.1 Problem : Making tteokbokki rice cakes

Today, Chan decided to work in a rice cake shop on behalf of her parents who were traveling. Today is the day to make tteokbokki rice cakes. Interestingly, the length of the tteokbokki rice cake is not uniform. Instead, the total length of the rice cakes in one bag is cut with a cutter and adjusted.

If you designate the height (H) on the cutter, it cuts the rice cakes in a row at once. Mochi with a height greater than H will be cut off the part above H, and the lower mochi will not be cut.

For example, if you have rice cakes with heights of 19, 14, 10, and 17 cm side by side and you specify a cutter height of 15 cm, the height of the rice cakes after cutting will be 15, 14, 10, and 15 cm. The lengths of the cut rice cakes are 4, 0, 0, and 2 cm in sequence. The customer takes a length of 6 cm.

Write <u>a program to find the maximum value of the height that can be set in the cutter to obtain at least M rice cakes</u> when the total length requested by the customer is M.

**Difficulty: 2 \| 40 minutes to solve \| Time limit 2 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
In the first line, the number of loaves N and the requested length M are given. (1 <=N <=1,000,000, 1 <=M <=2,000,000,000 ) <br>
In the second row, the individual heights of the rice cakes are given. Since the sum of the heights of rice cakes is always greater than M, the customer can buy as many rice cakes as they need. <br>
The height is a positive integer less than or equal to one billion, or zero.

**Output conditions** <br>
Prints the maximum value of the height that can be set on the cutter to take home at least M rice cakes.


#### 5.6.2 Solution : Making tteokbokki rice cakes

Just adjust the height H iteratively by performing a binary search until a suitable height is found. (The higher the H, the smaller the truncated value.)

After checking "Can the condition be satisfied by cutting at this height?", it can be solved by narrowing the search scope according to whether the condition is satisfied (yes or no).

The height of the cutter is an integer from 0 to 1 billion.

***When looking at such a large search scope, the first thing that comes to mind is binary search.***

**[Step 1]** Start point: 0, End point: 19, Mid point: 9 (=H, cutting height)
![Making tteokbokki rice cakes_1](/assets/img/coding-test/making-tteokbokki-rice-cakes_1.png)

At this time, the required size of the rice cake: M = 6, so the length of the cut rice cake 25 satisfies the minimum. -> **Save result** <br>
Move the starting point behind the midpoint.

**[Step 2]** Start Point: 10, End Point: 19, Mid Point: 14 (=H, Cutting Height)
![Making tteokbokki rice cakes_2](/assets/img/coding-test/making-tteokbokki-rice-cakes_2.png)

At this time, the required size of the rice cake: M = 6, so the length of the cut rice cake 9 satisfies the minimum. -> **Save result** <br>
Move the starting point behind the midpoint. (midpoint+1)

**[Step 3]** Start Point: 15, End Point: 19, Mid Point: 17 (=H, Cutting Height)
![Making tteokbokki rice cakes_3](/assets/img/coding-test/making-tteokbokki-rice-cakes_3.png)
 
At this time, the required size of rice cake: M = 6, so the length of the cut rice cake 2 does not satisfy the minimum. -> **Do not save results** <br>
Move the endpoint before the midpoint (midpoint -1).

**[Step 4]** Start Point: 15, End Point: 16, Mid Point: 15
![Making tteokbokki rice cakes_4](/assets/img/coding-test/making-tteokbokki-rice-cakes_4.png)

At this time, the required size of rice cake: M = 6, so the length of the cut rice cake 6 satisfies the customer's desired length. -> **Save result**

Until we can't further reduce the search scope using binary search
The optimal solution is obtained by changing the starting and ending points, changing H (= midpoint) each time, and checking whether the condition is satisfied when cutting to the current height.

By repeating this binary search process, an answer can be derived.

Since the value of the midpoint becomes an optimized value over time, record the value of the midpoint whenever the sum of the lengths of rice cakes obtained by repeating the process is greater than or equal to the required length of rice cakes (=M). .

~~~py
# Python
#Enter the number of rice cakes (N) and the requested length of rice cakes (M)
n, m = list( map( int, input() . split( ' ' ))))
#Enter the individual height information of each rice cake
array = list( map( int, input() . split( ' ' ))))

#Set start and end points for binary search
start = 0
end = max( array ) #length of longest rice cake

#Perform binary search (repeat)
result = 0
while( start <=end ):
    total = 0
    mid = (start + end) // 2
    for x in array:
        #Calculation of the amount of rice cakes when cut
        if x > mid: #When the length (x) of the current rice cake is greater than the height
            total += x - mid # Put the cut rice cake into the total variable.
    #If the amount of rice cake is insufficient, cut more (Explore the left part)
    if total < m:
        end = mid -1 #end point forward midpoint
    #If the amount of rice cake is sufficient, cut less (search for the right part)
    else:
        result = mid #The answer is when it is cut as small as possible, so record it in the result here
        start = mid + 1 #Move the start point behind the midpoint

#print the correct answer
print( result )
~~~

#### 5.6.3 Problem : Count a specific number in a sorted array

A sequence containing N elements is sorted in ascending order. <u>Count the number of times x appears in this sequence</u>. For example, if there is a sequence {1, 1, 2, 2, 2, 2, 3} and x=2, 4 is output because there are 4 elements with a value of 2 in the current sequence.

However, if the algorithm is not designed with a time complexity of $$O(logN)$$, this problem is judged to be time-out.

**Difficulty: 2 \| 30 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB \|Previous Zoho interview****
{:.message}

**Input conditions** <br>
In the first line, N and x are entered in the form of integers separated by spaces. <br>
(1 <= N<=1,000,000), (-109 <= x <=109 ) <br>
In the second line, N elements are entered in the form of integers separated by spaces.<br>

**Output conditions** <br>
Outputs the number of elements whose value is x among the elements of a sequence. However, if there is no element with the value x, -1 is output.

#### 5.6.4 Solution : Count a specific number in a sorted array

An algorithm that operates with a time complexity of $$O(logN)$$ is required.
- In general linear search, it is judged as timeout.
- But since the data is sorted, we can do a binary search.

![Count a specific number in a sorted array](/assets/img/coding-test/count-a-specific-number-in-a-sorted-array.png)


You can solve the problem by finding the first and last positions where a specific value (x) appears and calculating the position difference.
Binary search is performed twice over the entire search range. Makes you find the first location, the last location.

~~~py
# Python
from bisect import bisect_left, bisect_right

#Function that returns the number of data whose values ​​are [left_value, right_value]
def count_by_range( array, left_value, right_value ):
    right_index = bisect_right( array, right_value )
    left_index = bisect_left( array, left_value )
    return right_index - left_index #left_value or more and right_value or less

n, x = map( int, input() .split( )) # Get the number of data N, the value x to find
array = list( map( int, input() .split( ))) #Get all data input

#Count the number of data whose values ​​are in the range [x, x] = Just count the number of x
count = count_by_range( array, x, x )

#if the element with value x does not exist
if count == 0:
    print(-1)
#if there is an element with value x
else:
    print( count )
~~~

## 6. Dynamic Programming

### 6.1 What is Dynamic Programming?

Dynamic programming is a method to dramatically improve execution time efficiency by properly using memory.
It saves <span style='font-size:1.1em; background-color: #FFF39B'>*already calculated results (small problems) in a separate memory area to avoid recalculation.*</span> 

Dynamic programming can be used when the problem satisfies the following two conditions.

*<span style='background-color: #E0FFC4'>**1. Obtimal Substructure :**</span> <br>
A big problem can be divided into small problems, and the big problem can be solved by collecting the answers to the divided small problems. <br>
<span style='background-color: #E0FFC4'>**2. Overlapping Subproblem :**</span>  <br>
You have to solve the same small problem over and over again.*

### 6.2 What is Memoization?

Memoization is a technique of <span style='font-size:1.1em; background-color: #FFF39B'>*memoizing the result once calculated in the memory space.*</span>
- If you call the same problem again, you get the result you noted.
- Also called <span style='background-color: #E0FFC4'>***Caching***</span> in that it records a value.
<br>
<br>

In general, Dynamic programming can be implemented in two ways:  <span style='background-color: #FFDFF6'>***Top-down***</span> and <span style='background-color: #FFDFF6'>***Bottom-up.***</span> 
- <span style='background-color: #E0FFC4'>***Memoization***</span> enables *<u>Top-down</u>* dynamic programming.
- A classic form of dynamic programming is the *<u>Bottom-up</u>* approach. 
  - The list for storing the results is called the DP table.

### 6.3 Fibonacci Sequence Implementation

The Fibonacci Sequence is a sequence of the following form, and can be effectively calculated with dynamic programming.

$$
1,1,2,3,5,8,13,21,34,55,89,...
$$
The ignition expression means a relational expression between adjacent identities. <br>
The Fibonacci sequence can be expressed as an ignition formula as follows:

$$
a_n = a_{n-1} + a_{n-2},\quad a_1 = 1, \quad a_2 = 1
$$

Solving the Fibonacci sequence with a simple recursive function has exponential time complexity. (The time complexity is too high.)<br>

![Fibonacci_example](/assets/img/coding-test/fibonacci_example.png){:width="80%"}
{:.figure}

f(6)can be solved by finding f(5) and f(4) as above. -> <span style='background-color: #E0FFC4'>***1. Optimal Substructure***</span> <br>
Also, You can see that f(2) is <u>called multiple times</u> -> <span style='background-color: #E0FFC4'>***2. Overlapping Subproblem***</span>

*<u>Therefore, the Fibonacci sequence can be implemented with dynamic programming!.</u>*

**Fibonacci Sequence: Top-Down Dynamic Programming**

~~~py
# Python 
# Initialize the list to memoize the calculated result.
d = [0] * 100 

# Implementation of the Fibonacci function as a recursive function (top-down dynamic programming).
def fibo(x):
     # Exit condition (return 1 if 1 or 2)
     if x== 1 or x == 2:
         return 1
     # If the problem has already been calculated, return it as is.
     if d[x] != 0:
         return d[x]
     # If it is a problem that has not been calculated yet, the Fibonacci result is returned according to the ignition formula.
     d[x] = fibo(x-1) + fibo(x-2) # Write the added value to the list.
     return d[x]

print(fibo(99)) # 218922995834555169026
~~~

**Fibonacci Sequence: Bottom-Up Dynamic Programming**

~~~py
# Python
# Initialize the DP table to save the previously calculated result.
d = [0] * 100

# Reset the first and second Fibonacci numbers to 1.
d[1] = 1
d[2] = 1
n = 99

# Fibonacci Function implemented as a loop (bottom-up dynamic programming).
for i in range(3, n+1): #3 to nth
     d[i] = d[i-1] + d[i-2] # Calculate all Fibonacci numbers, find each term in turn, start with the small problem.

print(d[n]) # 218922995834555169026
~~~

If the already calculated result is memozied in memory, <u>only the colored node is actually called</u> and visited as follows. -> The time complexity is O(N).

![Fibonacci_example2](/assets/img/coding-test/fibonacci_example2.png)
{:.figure}


### 6.4 Dynamic Programming VS Divide-and-Conquer algorithm

　| Dynamic programming | Divide-and-conquer algorithm
--|:--:|:--:|
<span style='background-color=#e0ffc4'>*1. Optimal Substructure*</span> | O | O
--|:--:|:--:|
<span style='background-color=#e0ffc4'>*2. Overlapping Subproblem*</span> | O | **X**

Let's look at a typical example of divide-and-conquer, *quick sort*. <br>
Once the pivot element changes its position, the position of the pivot element does not change. <br>
The subproblem of re-processing the pivot after splitting is not called.

![Divide-and-conquer-example](/assets/img/coding-test/divide-and-conquer-example.png)



### 6.5 Dynamic Programming Example Problem

#### 6.5.1 Problem : Ant warrior

The ant warrior secretly attacks the food warehouse of the grasshopper village to make up for the shortage of food. There are several food warehouses in grasshopper Village, which are connected in a straight line.<br>
Each food warehouse stores a fixed number of food, and the ant warriors will selectively plunder the food warehouse to steal food. At this time, the grasshopper scouts can immediately detect when adjacent food warehouses are attacked among the food warehouses that exist in a straight line.<br>
Therefore, in order for the ant warrior to loot the food warehouse without being detected by the scouts, it must loot the food warehouse at least one square away.

For example, suppose there are 4 food depots as follows.<br>
{1, 3, 1, 5} <br>

At this time, the ant warrior can steal a total of 8 food, the maximum value when selecting the second and fourth food warehouses.<br>
The ant warrior wants to get as much food as possible when the food warehouse is in such a straight line.<br>
Write a program to *find the maximum amount of food* that can be obtained for an ant warrior given information about N food warehouses.<br>

**Difficulty: 2 \| 30 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
The first line gives the number N of food depots. (3 <=N <=100 ) <br>
In the second line, the number K of food stored in each food warehouse is given, based on spaces. (0 <=K <= 1,000)

**Output conditions** <br>
In the first line, print the maximum amount of food an ant warrior can get.

| Input Example | Output Example|
|4|8|
|1 3 1 5|

#### 6.5.2 Solution : Ant warrior

Let's check an example. When N=4, the following cases may exist.
    The number of food choices is eight as follows.
    In the 7th case, you get 8 food, so the optimal solution is 8.
![Ant Warrior_1](/assets/img/coding-test/ant-warrior_1.png)

ai = optimal solution to the ith food warehouse (maximum value of food obtainable)
    If defined in this way, dynamic programming can be applied.
Assuming that you turn the food warehouse from left to right,
If it is decided whether or not to rob the specific i-th food warehouse,
You can choose the one that can steal more food from the two cases below.
![Ant Warrior_2](/assets/img/coding-test/ant-warrior_2.png)

 It is decided between the optimal solution up to i-1 and the optimal solution up to i -2 plus the present value.
Choose the larger of the two cases.
Use 2 small problems to solve the big problems.
![Ant Warrior_3](/assets/img/coding-test/ant-warrior_3.png)

ai = optimal solution to the ith food warehouse (maximum value of food obtainable)
ki = amount of food in the ith food pantry
The ignition formula is as follows.
     ai = max(ai-1, ai-2+ki) Choose the larger of the two
Food warehouses more than one square away can always be looted, so there is no need to consider (i-3) and lower.

~~~py
# Python
# Get an integer N
n = int(input( ))
#Get all food information input
array = list(map(int, input( ). split( )))

# Initialize the DP table to save the previously calculated result
d = [0] * 100 #because you can enter up to 100

# Dynamic Programming (Bottom Up)
d[0] = array[0] #maximum value up to first position
d[1] = max( array[0], array[1] ) # Choose the maximum value up to the second position, the larger value
for i in range(2, n); #Optimal solution from position 3 to nth ?
     d[i] = max(d[i-1], d[i-2] + array[i] ) #ignition expression

# Print the calculated result
print(d[n-1])
~~~

#### 6.5.3 Problem : Minimum number of currencies

There are N types of money. We try to minimize the number of these currencies so that the sum of their values ​​is M won. In this case, any number of currencies of each type can be used.

For example, if there are 2 won and 3 won units, using 5 3 won to make 15 won is the minimum number of currencies.

Write a program that prints the minimum number of currencies to make M won.

**Difficulty: 2 \| 30 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
The first line is given N, M ( 1<= N <=100, 1<= M <= 10,000 ) <br>
The next N lines are given the value of each currency. The value of money is a natural number less than or equal to 10,000.

**Output conditions** <br>
Print the minimum number of currencies on the first line. <br>
If not possible, -1 is output.

| Input Example 1 | Output Example 1 |
|2 15|5
|2|
|3|

| Input Example 2 | Output Example 2 |
|3 4|-1
|3|
|5|
|7|

#### 6.5.4 Solution : Minimum number of currencies

$$a_{i}$$ = the minimum number of currencies that can make the amount i (the goal is to make the amount M, but solve the small problem first.) <br>
k = unit of each currency <br>
Ignition type: Each currency unit, k, is checked one by one.
- If there is a way to make $$a_{i-k}$$, $$a_{i}$$ = min($$a_{i}$$, $$a_{i-k+1}$$) is updated with a smaller value.
- If there is no way to create $$a_{i-k}$$, $$a_i$$ = INF.

Let's check if N = 3, M = 7, and the units of each currency are 2, 3, 5.

[Step 0] <br>
First, set the value of INF (infinite) to the value corresponding to each index.<br>
INF means that it is not possible to construct a currency that can create a specific amount. <br>
In this problem, 10,001 can be used.
![Minimum number of currencies_step0](/assets/img/coding-test/minimum-number-of-currencies_1.png){:width="80%"}

[Step 1] <br>
Check the first monetary unit, 2. (If you can make i-2, you can also make amount i.)
According to the ignition formula, the list is updated as follows.
![Minimum number of currencies_step1](/assets/img/coding-test/minimum-number-of-currencies_2.png){:width="80%"}

[Step 2] <br>
Check the second monetary unit, 3.
According to the ignition formula, the list is updated as follows.
![Minimum number of currencies_step2](/assets/img/coding-test/minimum-number-of-currencies_3.png){:width="80%"}

[Step 3] <br>
The third monetary unit, 5, is identified.
According to the ignition formula, the list is finally updated as follows.
![Minimum number of currencies_step3](/assets/img/coding-test/minimum-number-of-currencies_4.png){:width="80%"}

~~~py
# Python
# Get score N, M input.
n, m = map(int, input( ). split( ))
# Get information on N currency units.
array = [ ]
for i in range(n):
    array.append(int( input( )))

# Initialize the DP table to save the calculated result once.
d = [10001] * (m+1) # We want to find the minimum number of currencies for each amount from 0 won to m won.

# Dynamic Programming (Bottom up)
d[0] =0 # 0 won is the amount that can be made without using anything # i is each currency unit, j is each amount.

for i in range(n): # Ignition expression #for each monetary unit →
  for j in range(array[i], m+1): # Check all amounts →
    if d[j - array[i]] != 10001: # If there is a way to get the current amount minus the monetary unit = (i-k) won
        d[j] = min ( d[j], d[j - array[i] ]+1) # Update the optimal solution for the amount !#Update the smaller value

# Print the calculated result
if d[m] == 10001: # If there is no way to finally create M circle
  print(-1)
else: # Print if exists
  print(d[m])
~~~
 
#### 6.5.5 Problem : Gold Mine

There is a gold mine measuring n x m. The gold mine is divided into 1 x 1 squares, each of which contains a certain size of gold. <br>
Miners start with the first row and start digging for gold. You can start from any row in the first column. <br>
After that, it must move to one of three positions: upper right, lower right, and lower right each time over m-1 times.

Write a program that outputs the maximum amount of gold that a miner can obtain as a result.

![Gold Mine_1](/assets/img/coding-test/gold-mine_1.png){:width="80%"}

**Difficulty: 2 \| 30 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB**
{:.message}

**Input conditions** <br>
Test case T is entered in the first line (1<= T <= 1000) Test case: starting number. <br>
In the first line of each test case, n and m are entered separated by spaces. (1<= n,m <= 20) <br>
In the second line, the number of gold buried at n x m locations is entered, separated by spaces. (1 <= number of gold buried at each location <=100)

**Output conditions** <br>
For each test case, we print the maximum amount of gold that a miner can obtain. Each test case is separated by a line break.

| Input Example | Output Example|
|2|19|
|3 4|16|
|1 3 3 2 2 1 4 1 0 6 4 7|
|4 4|
|1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2|
 
#### 6.5.6 Solution : Gold Mine

For all locations of gold mines, only the following three things need to be considered.

*1. If it comes from the top left.* <br>
*2. Coming from the lower left.* <br>
*3. If you are coming from the left.* 

The problem is solved by updating the table with the case with the most gold among the three cases.

![Gold Mine_2](/assets/img/coding-test/gold-mine_2.png)

- array[i][j] = amount of gold in row i and column j
- dp[i][j] = best solution to row i and column j (maximum gold value)

The ignition formula is as follows.

$$
dp[i][j] = array[i][j] + max(dp[i-1][j-1], dp[i][j-1], dp[i+1][j-1])
$$ <br>
#current amount of gold #top-left position #left position #bottom-left position

In this case, whenever you access the table, you need to check whether it is outside the range of the list.<br>
For convenience, there is no need to use a variable array containing initial data.<br>
You can apply dynamic programming by putting the initial data in the DP table.<br>
Check out the process of solving the gold mining problem with dynamic programming.

Initialize the DP table → Put the initial value in the first column → Check the DP table one by one and update the DP table

![Gold Mine_3](/assets/img/coding-test/gold-mine_3.png){:width="80%"}

Iteration....the maximum value in the rightmost column is the correct answer required by the problem.

~~~py
# Python
for tc in range(int( input( ))):
  #Enter gold mine information.
  n, m = map(int, input( ). split( ))
  array = list(map(int, input( ). split( )))
  #Initialize 2D DP table for dynamic programming
  dp = [ ]
  indx = 0
  for i in range(n):
    dp. append(array[index: index+m]) Slices in units of # m and puts it in the dp table.
      index += m

    #Dynamic programming progress (bottom up)
  for j in range(1, m): # By column, check each column while moving
    for i in range(n):  
    # If it comes from the top left
      if i == 0: left_up = 0 #If out of index, corresponding value=0
      else: left_up = dp[ i-1 ][ j-1 ]
     #If it comes from the bottom left
      if i == n-1: left_down = 0 #If out of index, corresponding value=0
      else: left_down = dp[ i+1 ][ j-1 ]

     #if coming from the left
      left = dp[ i ][ j-1 ]

      dp[ i ][ j ] = dp[ i ][ j ] + max( left_up, left_down, left ) #Currently buried gold value + the largest of the three

  result = 0
  for i in range(n): # Among the values ​​recorded in the rightmost column, ? If you don't understand, check Lesson 6 58:36
      result = max( result, dp[ i ][ m-1 ] ) # find the largest value
  print( result )
~~~

#### 6.5.6 Problem : Deploying soldiers

N soldiers are randomly listed. Each soldier has a certain value of combat power. When deploying soldiers, we want to arrange them in descending order so that the soldiers with higher combat power are in the front.<br>
In other words, the combat power of the soldier in the front must always be higher than that of the soldier in the back.<Br>
Also, in the deployment process, a method of alienating soldiers in a specific position is used.<br>
Still, I want to maximize the number of remaining soldiers.<Br>

For example, it is assumed that the combat power of the listed soldiers when N=7 is as follows.
![Deploying Soldiers_1](/assets/img/coding-test/deploying_soldiers_1.png){:width="80%"}

At this time, if the 3rd and 6th soldiers are excluded, the number of remaining soldiers will be in descending order as follows, and the number will be 5.<BR>
This is a way to maximize the number of remaining soldiers.
![Deploying Soldiers_2](/assets/img/coding-test/deploying_soldiers_2.png){:width="60%"}

Write a program that, given information about soldiers, prints the number of soldiers that must be excluded in order to maximize the number of remaining soldiers.

**Difficulty: 1.5 \| 40 minutes to solve \| Time limit 1 seconds \| Memory limit 356 MB**
{:.message}

**Input conditions** <br>
The first line is given N. (1<= N <=2,000) <br>
In the second line, the combat power of each soldier is given in turn, separated by spaces. <br>
Each soldier's Combat Strength is a natural number less than or equal to 10,000,000.

**Output conditions** <br>
The number of soldiers remaining in the first row. <br>
Outputs the number of soldiers that must be excluded to maximize.

#### 6.5.7 Solution : Deploying soldiers

The basic idea of ​​this problem is the same as that of a classic dynamic programming problem known as <span style='background-color:#e0ffc4'>***Longest Increasing Subsequence (LIS)***<span>

For example, let's say we have a single sequence array = {4, 2, 5, 8, 4, 11, 15}.<Br> The longest increasing subsequence of this sequence is {4, 5, 8, 11, 15}. 

Since this problem can be replaced with the problem of finding the longest decreasing subsequence, the correct answer can be derived by applying the LIS algorithm with a slight modification.

Let's check the longest increasing subsequence (LIS) algorithm. <br>
*We define D[i] = the maximum length of a subsequence with array[i] as the last element.*<br>
The ignition formula is as follows.

For all 0 <= j < i , elements i, j <br>
D[i] = max(D[i], D[j]+1 ) Update according to the ignition formula (the larger of the current value vs. the previous value+1)

if array[j] < array[i] if the preceding element (j) is less than the following element (i) (increasing form)
![Deploying Soldiers_3](/assets/img/coding-test/deploying_soldiers_3.png){:width="80%"}

Reverses the order of the soldier information input first.<br>
The correct answer is derived by performing the longest increasing subsequence (LIS) algorithm.

~~~py
# Python
n = int(input( ))
array = list(map(int, input( ).split( )))
# Reverse the order and transform it into a 'longest increasing subsequence' problem
array.reverse( )

#Initialize one-dimensional DP table for dynamic programming
dp = [1] * n

#Perform the longest increasing subsequence (LIS) algorithm
for i in range(1, n): #from the second element to the last element
  for j in range(0, i): #All elements before (j) = from the first element to before i
    if array[ j ] < array[ i ]: #only if small
      dp[ i ] = max( dp[ i ], dp[ j ]+1 ) #ignition expression

# Print the minimum number of soldiers to be excluded
print(n - max(dp)) # Subtract the value from all n
~~~



Back to [Fundamentals of Data Structures](2022-01-31-fundamentals-of-data-structures.md){:.heading.flip-title}
{:.read-more} 

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br>
[https://blog.naver.com/PostList.naver?blogId=ndb796](https://blog.naver.com/PostList.naver?blogId=ndb796){:target="_blank"}<br>
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}