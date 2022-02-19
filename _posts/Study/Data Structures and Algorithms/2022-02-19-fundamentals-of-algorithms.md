---
layout:   post
title:    'Fundamentals of Algorithms'
subtitle: 'Fundamentals of Algorithms'
category: study
tags:     data-structures-and-algorithms
image: 
  path: /assets/img/data-structures-and-algorithms/algorithm-main.jpg
related_posts: 
  - _posts/Study/Data Structures and Algorithms/2022-01-31-fundamentals-of-data-structures.md
  - _posts/Coding Test/Immersive Toy Problem/2022-02-03-sudoku.md
---

Algorithm is a set of **well-defined instructions to solve a particular problem**. <br>
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

Greedy algorithm means a method to **choose only good things from the current situation.**

- A typical greedy algorithm requires the ability to come up with minimal ideas to solve a problem.
- It is important to analyze the legitimacy of the greedy solution.
  - Examine whether an optimal solution can be obtained by iteratively selecting the one that looks the best.

In a greedy algorithm problem,  it is **necessary to be able to come up with a minimal ideas for solving the problem and examine whether this is justified.**

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
# python
# get input with N, K separated by spaces
n, k = map(int, input(). split())
result = 0

while True:
    # subtract until N is divisible by K
     target = (n // k) * k
     result += (n - target)
     n = target
    # escape from loop when N is less than K (not more divisible)
     if n < k:
     break
    # divide by K
     result += 1
     n //= k
 
# subtract 1 for the last remaining number
reslut += (n - 1)
print(result)
~~~

#### 1.2.3 Problom : Multiply or Add 

Given a string s where each digit consists of only numbers (0 to 9), check all numbers one by one from left to right, and insert the 'x' or '+' operator between the numbers to find the largest number that can be made as a result. Write a program to retrieve it. 
However, unlike the usual way of calculating x before +, it is assumed that all operations are performed in order from the left.


**Difficulty: 1 \| 30 minutes to solve \| Time limit 1 seconds \| Memory limit 128 MB \| Previous Facebook intervie**
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
# python
data = input()

# replace the first character with a number
result = int(data[0])

for i in range(1, len(data)):
     # if either number is '0' or '1', '+' rather than 'x'.
     num = int(data[i])
     if num <= 1 or result <= 1:
         result += num
     else:
         result *= num

print(result)
~~~

## 2. Implementation

### 2.1 What is Implementation?

Implementation is **the process of converting an algorithm in your head into source code.**

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
The first line is given an N indicating the size of the space. (1<=N<=100)
In the second line, the contents of the travel plan for traveler A are given. (1<=Number of moves<=100)

**Output conditions** <br>
In the first line, print the number written on the card selected according to the rules of the game.

| Input Example | Output Example|
|`5`|`3 4`|
|`R R R U D D`|

#### 2.2.2 Solution : Left, Right, Up, Down

This is a problem that needs to implement faithfully according to the requirements.

~~~py
# python
# get N input
n = int(input())
x, y = 1, 1
plans = input(). split()

# direction of movement according to L, R, U, D
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

# check the move plans one by one
for plan in plans:
     # get coordinates after moving
     for i in range(len(move_types)):
         if plan == move_types[i]:
             nx = x + dx[i]
             ny = y + dy[i]
     # ignore if out of space
     if nx < 1 or ny < 1 or nx > n or ny > n:
         continue
     # perform a move
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
# python
# get the current knight's location
input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])) - int(ord('a')) + 1

# define 8 directions a knight can move
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2 ), (-2, 1)]

# check if it is possible to move to each position in 8 directions
result = 0
for step in steps:
     # check the location you want to move
     next_row = row + step[0]
     next_column = column + step[1]
     # if it is possible to move to that location, the count is increased.
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
// simple tree (no membership check)
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


### 3.4 Graph : DFS Implementation

~~~js
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
    
    for (let j = 0; j <b neighborIdx.length; j++) {
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


## 4. Dynamic Programming

### 4.1 What is Dynamic Programming?

Dynamic programming is a method to dramatically improve execution time efficiency by properly using memory.
It saves **already calculated results (small problems) in a separate memory area to avoid recalculation.** <br>
- In general, it can be implemented in two ways: Top-down and Bottom-up.

Dynamic programming can be used when the problem satisfies the following conditions.

<b> 1. Obtimal Substructure </b><br>
\: A big problem can be divided into small problems, and the big problem can be solved by collecting the answers to the divided small problems. <br>
<b> 2. Overlapping Subproblem: </b><br>
\: You have to solve the same small problem over and over again.

### 4.2 Dynamic Programming Example Problem  

#### 4.2.1 Problem : The Fibonacci sequence

The Fibonacci sequence is a sequence of the following form, and can be effectively calculated with dynamic programming.

$$1,1,2,3,5,8,13,21,34,55,89$$

The ignition expression means a relational expression between adjacent identities. <br>
The Fibonacci sequence can be expressed as an ignition formula as follows:



Back to [Fundamentals of Data Structures](2022-01-31-fundamentals-of-data-structures.md){:.heading.flip-title}
{:.read-more} 
<br>

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}