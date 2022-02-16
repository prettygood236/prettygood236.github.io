---
layout:   post
title:    'Fundamentals of Algorithms'
subtitle: 'Fundamentals of Algorithms'
category: study
tags:     data-structures-and-algorithms
---

1. this ordered seed list will be replaced by the toc
{:toc}

## 1. Greedy


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

<!--more-->

### 3.3 Graph : Depth-First Search Implementation

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
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}