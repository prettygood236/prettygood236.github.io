---
layout:   post
title:    '3. DFS & BFS'
subtitle: '3. DFS & BFS'
category: data-structures-and-algorithms
tags:     algorithms
image: 
  path: /assets/img/data-structures-and-algorithms/dfs-and-bfs/dfs-and-bfs_main.png
related_posts: 
  - _posts/Data Structures and Algorithms/Algorithms/2022-02-01-implementation.md
  - _posts/Data Structures and Algorithms/Algorithms/2022-02-12-sort.md
accent_color: rgba(250,113,205,1)
accent_image:
  background: linear-gradient(to top, rgba(196,113,245,1) 0%, rgba(250,113,205,1) 100%);
  overlay: false
theme_color: rgba(196,113,245,1)
---

* toc
{:toc .large-only}

## 3. DFS & BFS

### 3.1 What is Depth-First Search?

DFS is literally an algorithm that searches the deep part first.<br>
DFS uses a stack data structure (or recursive function)

**DFS operation process**
1. Insert the search start node into the stack and process the visit.
2. If there is at least one unvisited adjacent node at the top node of the stack, the node is push into the stack and visited. If there are no unvisited adjacent nodes, pop the topmost node from the stack.
3. Repeat until step 2 can no longer be performed.
<br>

![Depth-First Search operation](/assets/img/data-structures-and-algorithms/dfs-and-bfs/graph_dfs.gif){:width="600"} <br>
<br>

### 3.2 What is Breadth-First Search?

![Breadth-First Search operation](/assets/img/data-structures-and-algorithms/dfs-and-bfs/graph_bfs.gif){:width="600"} <br>
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




[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br>
[https://blog.naver.com/PostList.naver?blogId=ndb796](https://blog.naver.com/PostList.naver?blogId=ndb796){:target="_blank"}<br>
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}