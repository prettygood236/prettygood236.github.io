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
{:.lead}

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

#### 1.2.1 Problem : Until it becomes 1 <br>

Until a certain number N becomes 1, one of the following two processes is repeatedly selected and performed. However, the second operation can be selected only when N is divisible by K. 

1. Subtract 1 from N. 
2. Divide N by K. 

- For example, if N = 17, K = 4 <br> 
1) 17 - 1 = 16  <br> 
2) 16 // 4 = 4 <br> 
3) 4 // 4 = 1 

- The number of times the entire process is executed becomes 3. This is the minimum number of times to make N equal to 1.

**Difficulty: 1 \| 15 minutes to solve \| Time limit 2 seconds \| Memory limit 128 MB**

**Input conditions**
- In the first line N (2 <= N <= 100,000) and K (2 <= K <= 100,000) separated by spaces, each given as a natural number.

**Output conditions**
- In the first line, print the minimum value for the number of times that one or two processes must be performed until N becomes 1.

**Example of input** <br>
`25 5`

**Example output** <br>
`2`

#### 1.2.2 Solution : Until it becomes 1

{{ "{% highlight python linenos "}}%}

# Get input with N, M, K separated by spaces
n, m, k = map(int, input(). split())
# Get input of N numbers separated by spaces
data = list(map(int, input(). split()))

data.sort() # Sort received numbers
first = data[n - 1] # largest number
second = data[n - 2] # second largest number

# count the number of times the largest number is added
count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first # add the largest number
result += (m - count) * second # Add the second largest number

print(result) # print the final answer

{{ "{% endhighlight "}}%}


## 2. Implementation



## 3. DFS & BFS

### 3.1 Depth-First Search

> DFS is literally an algorithm that searches the deep part first.<br>
DFS uses a stack data structure (or recursive function)

**DFS operation process**
1. Insert the search start node into the stack and process the visit.
2. If there is at least one unvisited adjacent node at the top node of the stack, the node is push into the stack and visited. If there are no unvisited adjacent nodes, pop the topmost node from the stack.
3. Repeat until step 2 can no longer be performed.
<br>

![Depth-First Search operation](/assets/img/data-structures-and-algorithms/graph_dfs.gif){:width="600"} <br>
<br>

### 3.2 Breadth-First Search

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


Back to [Fundamentals of Data Structures](2022-01-31-fundamentals-of-data-structures.md){:.heading.flip-title}
{:.read-more} 
<br>

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}