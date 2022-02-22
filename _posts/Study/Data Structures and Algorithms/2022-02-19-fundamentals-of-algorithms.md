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


### 3.4 Graph : DFS Implementation

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
    
    for (let j = 0; j < neighborIdx.length; j++) {
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
It saves <span style='font-size:1.1em; background-color: #FFF39B'>*already calculated results (small problems) in a separate memory area to avoid recalculation.*</span> 

Dynamic programming can be used when the problem satisfies the following two conditions.

*<span style='background-color: #E0FFC4'>**1. Obtimal Substructure :**</span> <br>
A big problem can be divided into small problems, and the big problem can be solved by collecting the answers to the divided small problems. <br>
<span style='background-color: #E0FFC4'>**2. Overlapping Subproblem :**</span>  <br>
You have to solve the same small problem over and over again.*

### 4.2 What is Memoization?

Memoization is a technique of <span style='font-size:1.1em; background-color: #FFF39B'>*memoizing the result once calculated in the memory space.*</span>
- If you call the same problem again, you get the result you noted.
- Also called <span style='background-color: #E0FFC4'>***Caching***</span> in that it records a value.
<br>
<br>

In general, Dynamic programming can be implemented in two ways:  <span style='background-color: #FFDFF6'>***Top-down***</span> and <span style='background-color: #FFDFF6'>***Bottom-up.***</span> 
- <span style='background-color: #E0FFC4'>***Memoization***</span> enables *<u>Top-down</u>* dynamic programming.
- A classic form of dynamic programming is the *<u>Bottom-up</u>* approach. 
  - The list for storing the results is called the DP table.

### 4.3 Fibonacci Sequence Implementation

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


### 4.4 Dynamic Programming VS Divide-and-Conquer algorithm

　| Dynamic programming | Divide-and-conquer algorithm
--|:--:|:--:|
<span style='background-color=#e0ffc4'>*1. Optimal Substructure*</span> | O | O
--|:--:|:--:|
<span style='background-color=#e0ffc4'>*2. Overlapping Subproblem*</span> | O | **X**

Let's look at a typical example of divide-and-conquer, *quick sort*. <br>
Once the pivot element changes its position, the position of the pivot element does not change. <br>
The subproblem of re-processing the pivot after splitting is not called.

![Divide-and-conquer-example](/assets/img/coding-test/divide-and-conquer-example.png)



### 4.5 Dynamic Programming Example Problem

#### 4.5.1 Problem : Ant warrior

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

#### 4.5.2 Solution : Ant warrior

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

#### 4.5.3 Problem : Minimum number of currencies

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

#### 4.5.4 Solution : Minimum number of currencies

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
 
#### 4.5.5 Problem : Gold Mine

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
 
#### 4.5.6 Solution : Gold Mine

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

#### 4.5.6 Problem : Deploying soldiers

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

#### 4.5.7 Solution : Deploying soldiers

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
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}