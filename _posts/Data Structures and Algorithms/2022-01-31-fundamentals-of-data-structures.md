---
layout:   post
title:    'Fundamentals of Data structures'
subtitle: 'Fundamentals of Data structures'
category: data-structures-and-algorithms
tags:     data-structures-and-algorithms
# hide_last_modified: true
image: 
  path: /assets/img/data-structures-and-algorithms/data-structures/data-structures_main.png
related_posts:
  - _posts/Data Structures and Algorithms/2022-02-01-greedy.md
  - _posts/Data Structures and Algorithms/2022-02-01-implementation.md
accent_color: rgba(95,114,190,1)
accent_image:
  background: linear-gradient(315deg, rgba(153,33,232,1) 0%, rgba(95,114,190,1) 74%);
  overlay: false
theme_color: rgba(153,33,232,1)
---

Data structure is a storage that is used to store and organize data. <br>
It is <span style='font-size:1em'>***a way of arranging data***</span> on a computer so that it can be accessed and updated efficiently.<br>

![Data structures](/assets/img/data-structures-and-algorithms/data-structures/data-structures.png)


* toc
{:toc .large-only}

## 1. Stack

### 1.1 What is Stack?

If you make a stack of block, The last block stacks are of last in first out type of service.<br>
<span style='background-color: #FFF39B;'>*The last block you put on top of a stack would be the first block.*</span><br>

![Stack](/assets/img/data-structures-and-algorithms/data-structures/stack.gif) <br>

### 1.2 Using an array as a stack 

```js
// Javascript
let letters = []; // this is our stack

let word = 'racecar'; 
//let word = 'parkbyungchan';

let rword = '';

// put letters of word into stack
for (let i = 0; i <word.lenth; i++>){
  letters.push(word[i]);
}
............................................
// put off the stack in reverse order 
for (let i = 0; i <word.lenth; i++>){
  rwords += letters.pop;
}

if (rword === word){
  console.log(word + ' is a palindrome. ') // racecar is a palindrome
}
else {
  console.log(word + ' is not a palindrome. ') // parkbyungchan is not a palindrome
}
```
*Arrays are already has all the functions we need in order to use it as a stack!*


### 1.3 Stack Implementation

* push : for placing data onto a stack
* pop : removing the top element of a stack
* length or size : determining how many elements are on a stack

```js
//javascript
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  // Adds a value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  // Removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  // Returns the value at the end of the stack
  peek() {
    return this.storage[this.count-1]
  } 
}
let myStack = new Stack();
myStack.push(1); 
myStack.push(2);
console.log(myStack.pop()); // 2
myStack.push("chan");
console.log(myStack.pop()); // chan
console.log(myStack.size()); // 1
```
<br >

## 2. Queue

### 2.1 What is Queue?

Queue example is a print queue when a lot of people are printing documents at the same printer.<br>
 The documents are printed <span style='background-color: #FFF39B;'>*in the order(first in first out)*</span>. They were sent to the print queue.
 
![Queue](/assets/img/data-structures-and-algorithms/data-structures/queue.gif){: width="650"}
<br>

### 2.2 Queue Implementation

```js
//javascript
class Queue {
  constructor() {
    this.collection = [];
  }
  enqueue(element){
    return this.collection.push(element);
  }
  dequeue(){
    return this.collection.shift();
  }
  front(){
    return this.collection[0];
  }
  size(){
    return this.collection.length;  
  }
  isEmpty(){
    return this.collection.length === 0;
  }
}
let q = new Queue();
q.enqueue('a'); // q = [a];
q.enqueue('b'); // q = [a,b];
q.enqueue('c'); // q = [a,b,c];
q.dequeue(); // q = [b,c];
q.front(); // b
```

### 2.3 Priority Queue

#### 2.3.1 What is Priority Queue?

In a priority queue not only pass the element into the queue <span style='background-color: #FFF39B;'>*but also pass the priority of the element.*</span><br>

So if all the priorities are the same number it's going to behave just like a normal queue. 

But when you pass in elements at different priorities the elements that are passed in with a higher priority are sent to the beginning of the queue.
<br>

#### 2.3.2 Priority Queue Implementation

```js
//javascript
class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  printCollection() {
    (console.log(this.collection));
  }
  enqueue(element) {
    if (this.isEmpty()){
      this.collection.push(element);
    } else {
      let added = false;
      for (let i=0; i<this.collection.length; i++){
        if (element[1] < this.collection[i][1]) { //checking priorities
          this.collection.splice(i,0,element);
          added = true;
          break;
        }
      }
      if (!added){
        this.collection.push(element);
      }
    }
  }
  dequeue() {
    let value = this.collection.shift()
    return value[0];
  };
  front() {
    return this.collection[0];
  };
  size() {
    return this.collection.length;
  };
  isEmpty() {
    return this.collection.length === 0;
  };
};
let pq = new PriorityQueue();
pq.enqueue(['WannaBe', 2]); 
pq.enqueue(['CodingMaster', 3]);
pq.enqueue(['I', 1]); 
pq.printCollection(); // [['I', 1], ['WannaBe', 2], ['CodingMaster', 3]]
pq.dequeue(); // [['WannaBe', 2], ['CodingMaster', 3]]
pq.front(); // ['WannaBe', 2]
pq.printCollection() // [['WannaBe', 2], ['CodingMaster', 3]]
```
<br>
<br>


## 3. Set

### 3.1 What is Set?

The set data structure is <span style='background-color: #FFF39B'>*kind of like an array except there are no duplicate.*</span>
 items and the values are not in any particular order. <br>
The typical use for set is to simply check for the presence of an item.
<br>

### 3.2 Set Implementation

```js
//javascript
// Why it's named this way is because we want to make it distinct from the es5.
class mySet {
  constructor() {
    // collection will hold the set
    this.collection = [];
  }
  // has method will check for the presence of an element and return true or false 
  has(element) {
    return (this.collection.indexOf(element) !== -1);
  }
  // values method will return all the values in the set
  values(){
    return this.collection;
  }
  // add method will add an element to the set
  add(element) {
    if(!this.has(element)){
      this.collection.push(element);
      return this.collection;
    }
    return this.collection;
  }
  // delete method will remove an element from a set
  delete(element) {
    if(this.has(element)){
      index =  this.collection.indexOf(element);
      this.collection.splice(index,1);
      return true;
    }
    return false;
  }
  // size method will return the size of the collection
  // In the es6 'size' is just property. (You're not going to put parenthesis at after the the method)
  size() {
    return this.collection.length;
  }
  // union method will return the union of two sets
  union(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function(e){
      unionSet.add(e)
    })
    secondSet.forEach(function(e){
      unionSet.add(e)
    })
    return unionSet;
  }
  // intersection method will return the intersection of two sets as a new set
  intersection(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }
  // difference method will return the difference of two sets as a new set
  difference(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differenceSet.add(e);
      }
    })
    return differenceSet;
  }
  // isSuperset method will test if the set is a subset of a difference set
  isSuperset(otherSet){
    let firstSet = this.values();
    return firstSet.every(function(value){
      return otherSet.has(value);
    })
  }
}
//[[Prototype]]: Array
let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.add('d')) // ['a','d']
console.log(setA.isSuperset(setB)) // true
console.log(setA.intersection(setB).values()) // ['a','d']
console.log(setB.difference(setA).values()) // ['b','c']

// In es6 [[Prototype]]: Set
let setC = new Set();
let setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values()) // {'b','c','a','d'}
setD.delete('a') 
console.log(setD.has('a')) // false
console.log(setD.add('d')) // {'b','c','d'}
```
<br>
<br>

## 4. Tree

### 4.1 What is Tree?

 A tree data structure is <u>a way to hold data that when visualized looks like a tree.</u> <br>
This is actually what we visualized a tree data structure to look like all data points in the tree are called ***nodes***.

![Tree](/assets/img/data-structures-and-algorithms/data-structures/tree.png){:width="650"} 

### 4.2 Tree Implementation

```js
//javascript
class Tree{
  // The object created by the constructor becomes a Node in the tree.
  constructor(value){
    this.value = value;
    this.children = [];
  };
  // It's important to remember what name the value is created with and where it is attached.
  insertNode(value){
    const childNode = new Tree(value);
    this.children.push(childNode);
  };
  contains(value){
    // Return true if it contains a value.
    if(this.value === value){
      return true
    }
    // Iterate through the childNodes, traversing the children array until a value is found.
    for(i=0; i<this.collection.length; i++){
      if(this.children[i].contains(value))
        return true
    }
    // Return false if it's not found despite traversing all over. 
    return false
  }
}
```

### 4.3 Binary Search Tree

#### 4.3.1 What is Binary Search Tree?
  
Binary Tree's each node can only has two branches. <br>
<span style='background-color: #FFF39B; font-size:1em'>*Binary Search Trees are ordered. Each left subtree is less than or equal to the painter node.* And each right subtree is greater than or equal to the parent node. </span>

Because they use the principle of binary search. On average operations are able to skip about half of the tree so that each lookup insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

This is much better than the linear time required to find items by key in an unsorted array but slower than the corresponding o perations on a hash table.

**BST add operation**
<br>

![BST add operation](/assets/img/data-structures-and-algorithms/data-structures/bst_add_operation.gif){:width="600"} <br>
<br>

**BST find operation**

![BST find operation](/assets/img/data-structures-and-algorithms/data-structures/bst_find_operation.gif){:width="600"} <br>
<br>

**BST from ordered array**

![BST from ordered array](/assets/img/data-structures-and-algorithms/data-structures/bst_from_ordered_array.gif){:width="600"} <br>
<br>

**BST degeneration**

![BST degeneration](/assets/img/data-structures-and-algorithms/data-structures/bst_degeneration.gif){:width="600"} <br>
<br>

#### 4.3.2 Binary Search Tree Traversal 

**BST inorder operation**

![BST inorder operation](/assets/img/data-structures-and-algorithms/data-structures/bst_inorder.gif){:width="600"} <br>
<br>

**BST preorder operation (Depth-First Search)**

![BST preorder operation](/assets/img/data-structures-and-algorithms/data-structures/bst_preorder.gif){:width="600"} <br>
<br>

**BST postorder operation**

![BST postorder operation](/assets/img/data-structures-and-algorithms/data-structures/bst_postorder.gif){:width="600"} <br>
<br>

**BST levelorder operation (Breadth-First Search)**

![BST levelorder operation](/assets/img/data-structures-and-algorithms/data-structures/bst_levelorder.png){:width="600"} <br>
<br>

#### 4.3.3 Binary Search Tree Implementation

~~~js
// javascript
// The node class represents each node in the tree.
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  //constructor which just creates the the root node which is the top of the tree.
  constructor() {
    this.root = null;
  }
  // This is how to add something to the tree. 
  add(data) {  
    const node = this.root;  // Get a reference to the root node.   
    if(node === null) { // But if this is the first node, node will be null.
      this.root = new Node(data); // Create node based on that data.
      return;
    } else {
      const searchTree = function(node) { //Pass in the node which starts off as the root node.
        if(data < node.data) { // If the data we pass in is less than node.data, put the node on the left side of the tree.
          if(node.left === null) { 
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); // Continue working down the tree to find where to put the node.
          }
        } else if (data > node.data) { // If the data is more than no data, put the node on the right side.
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right); // Keep searching.
          }
        } else { // If they're equal, not going to add the data to the tree.
          return null;
        }
      }
      return searchTree(node);
    }
  }
  // The minimum is all the way on the left side. 
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  //The maximum is all the way on the right side.
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find() {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  // isPresent is very similar to find but instead of returning the node, returning whether the data is in the tree (boolean).
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) { // First of all we have to check if we have an empty tree.
        return null;
      }
      if (data === node.data) { // Found the node with the data.
        if (node.left === null && node.right === null) { // node has no children.
          return null; // Setting the reference to the node to null.
        } 
        if (node.left === null) { // node has no left child.
          return node.right;
        }
        if (node.left === null) { // node has no right child.
          return node.right;
        }
        let tempNode = node.right; // node has two child. 
        // To remove and replace, first go to the right sub node and then go all the way down to the most left sub node.
          while (tempNode.left !== null) { 
            tempNode = tempNode.left
          }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);  
        return node;
      } else if (data < node.data) { // We have to go to the left side of the tree.
        node.left = removeNode(node.left, data);
        return node;
      } else { // We have to go to the right side of the tree.
        node.right = removeNode(node.right, data);
        return node;
        }
    }
    this.root = removeNode(this.root, data); // We're gonna pass in the root node, because you always start with the root node, and then the data that we're searching for.
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  findMaxHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }
  levelOrder() {
      let result = [];
      let Q = []; 
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}
const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(3);
bst.add(5);
bst.add(7);
console.log(bst)
bst.remove(4);
console.log(bst.findMin()) // 2
console.log(bst.findMax()) // 7
bst.remove(7);
console.log(bst.findMax()) // 6
console.log(bst.isPresent(4)) // false

bst.add(9);
bst.add(1);
bst.add(22);
bst.add(20);
console.log(bst)
console.log(bst.findMinHeight()); // 1
console.log(bst.findMaxHeight()); // 4
console.log(bst.isBalanced()); // false 
bst.add(10);
console.log(bst.findMinHeight()); // 1
console.log(bst.findMaxHeight()); // 5
console.log(bst.isBalanced()); // false 
console.log('inOrder: ' + bst.inOrder()); // inOrder: 1,2,3,5,6,9,10,20,22
console.log('preOrder: ' + bst.preOrder()); // preOrder: 5,2,1,3,6,9,22,20,10
console.log('postOrder: ' + bst.postOrder()); // postOrder: 1,3,2,10,20,22,9,6,5
console.log('levelOrder: ' + bst.levelOrder()); // levelOrder: 5,2,6,1,3,9,22,20,10
~~~


## 5. Graph

### 5.1 What is Graph?

Graphs are collections of things and <u>the relationships or connections</u> between them. <br>
The data in a graph are called ***nodes or vertices.***<br>
The connections between the nodes are called ***edges.***

![Graph](/assets/img/data-structures-and-algorithms/data-structures/graph-1.png){:width="650"}
<br><br>

### 5.2 Type of Graph

**Undirected and Directed**

![Graph_Undirected and Directed](/assets/img/data-structures-and-algorithms/data-structures/graph-2.png){:width="650"}

Undirected graphs are graphs without any direction on the edges between nodes.
* ex) social network

Directed graphs are graphs with a direction and its edges.
* ex)  internet and web page links. The nodes are web pages and the directed edges are links to other pages.


### 5.3 Graph Representation

#### 5.3.1 Adjacency List 

<span style='background-color: #FFF39B; font-size:1em'>*Adjacency List associates each vertex in the graph with the collection of its neighboring vertices or edges.*</span>

![Graph_Adjacency list and Matrix](/assets/img/data-structures-and-algorithms/data-structures/graph_adjacency list and matrix.png){:width="650"}

#### 5.3.2 Adjacency Matrix 

<span style='background-color: #FFF39B; font-size:1em'>*Adjacency Matrix is a two-dimensional array where each nested array has the same number of
elements as the outer array.*</span> So it's basically a matrix of numbers where the numbers represent the edges.

#### 5.3.3 Incidence Matrix 

![Graph_Incidence Matrix](/assets/img/data-structures-and-algorithms/data-structures/graph_incidence matrix.png){:width="650"}

Adjacency Matrix use both rows and columns to represent nodes.<br>
But <span style='background-color: #FFF39B; font-size:1em'>*Incidence Matrix uses roads to represent nodes and the columns to represent edges.*</span>
This means that we can have an uneven number of rows and columns.
Each column will represent a unique edge. Also, each edge connects two nodes to show that there is edge between two nodes.

## 6. Hash Table
  
### 6.1 What is Hash Table?



![Hash Table](/assets/img/data-structures-and-algorithms/data-structures/hashtable.png){:width="650"}


### 6.2 Hash Table Implementation

~~~js
// javascript
const hash = function(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}
class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 14;
  };
  print() {
    console.log(this.storage)
  };
  add(key, value) {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };
  remove(key) {
    let index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };
  lookup(key) {
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };
}
console.log(hash('quincy', 10)) //5

let ht = new HashTable();

ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux')) //penguin
ht.print();
~~~


## 7. Linked List
  
### 7.1 What is Linked List?



![Linked List](/assets/img/data-structures-and-algorithms/data-structures/linkedlist.jpeg){:width="600"}

**Linked List insert operation**

![Linked List insering operation](/assets/img/data-structures-and-algorithms/data-structures/linkedlist_inserting.gif){:width="600"} <br>
<br>

**Linked List append operation**

![Linked List appending operation](/assets/img/data-structures-and-algorithms/data-structures/linkedlist_appending.gif){:width="600"} <br>
<br>


### 7.2 Linked List Implementation

~~~js
// javascript
class Node {
  constructor(element) {
    this.element = element; 
    this.next = null; 
  }; 
}
class LinkedList { 
  constructor() {
    this.length = 0; 
    this.head = null; 
  }
  size(){
    return this.length;   
  };
  head(){
    return this.head;
  };
  add(element){
    let node = new Node(element);
    if(this.head === null){
        this.head = node;
    } else {
        let currentNode = this.head;
        while(currentNode.next){
            currentNode  = currentNode.next;
        }
        currentNode.next = node;
    }
    this.length++;
  }; 
  remove(element){
    let currentNode = this.head;
    let previousNode;
    if(currentNode.element === element){
        this.head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
    }
    this.length --;
  };
  isEmpty() {
    return this.length === 0;
  };
  indexOf(element) {
    let currentNode = this.head;
    let index = -1;
    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }
    return -1;
  };
  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return currentNode.element;
  };
  addAt(index, element){
    let node = new Node(element);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if(index > this.length){
        return false;
    }
    if(index === 0){
        node.next = currentNode;
        this.head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    this.length++;
  }
  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= this.length){
        return null
    }
    if(index === 0){
        this.head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    this.length--;
    return currentNode.element;
  }
} 

let conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size()); // 5
console.log(conga.removeAt(3)); // Cat
console.log(conga.elementAt(3)); // Fish
console.log(conga.indexOf('Puppy')); // 1
console.log(conga.size()); // 4
~~~
<br>

## 8. Trie
  
### 8.1 What is Trie?



![Trie](/assets/img/data-structures-and-algorithms/data-structures/trie.png){:width="600"}


### 8.2 Trie Implementation

~~~js
// javascript
class Node {
  sconstructor() {
    this.keys = new Map();
    this.end = false;
  }
  setEnd() {
    this.end = true;
  };
  isEnd() {
    return this.end;
  };
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  add(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
        node.keys.set(input[0], new Node());
        return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
        return this.add(input.substr(1), node.keys.get(input[0]));
    };
  };
  isWord(word) {
    let node = this.root;
      while (word.length > 1) {
        if (!node.keys.has(word[0])) {
          return false;
        } else {
            node = node.keys.get(word[0]);
            word = word.substr(1);
        };
      };
      return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
    true : false;
  };
  print() {
    let words = new Array();
    let search = function(node, string) {
    if (node.keys.size != 0) {
      for (let letter of node.keys.keys()) {
        search(node.keys.get(letter), string.concat(letter));
    } if (node.isEnd()) {
        words.push(string);
      }
    } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      };
    };
  search(this.root, new String());
    return words.length > 0 ? words : mo;
  };
};
myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll')) // true
console.log(myTrie.isWord('dor')) // false
console.log(myTrie.isWord('dorf')) // false
console.log(myTrie.print()) // ['ball','bat','doll','dork','dorm','do','send','sense']
~~~
<br>

## 9. Heap

### 9.1 What is Heap?
  


**Min heap sort operation**

![Minheap](/assets/img/data-structures-and-algorithms/data-structures/heap_minheap.gif){:width="600"}
<br>

**Max heap sort operation**

![Maxheap](/assets/img/data-structures-and-algorithms/data-structures/heap_maxheap.gif){:width="600"}
<br>

### 9.2 Heap Implementation

~~~js
// Javascript
// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2
let heap = [null];

class Minheap {
  insert(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] < heap[Math.floor(idx/2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]
            if (Math.floor(idx/2) > 1) {
              idx = Math.floor(idx/2);
            } else {
                break;
            };
        };
      };
    };
  };
  remove() {
    let smallest = heap[1];
      if (heap.length > 2) {
        heap[1] = heap[heap.length - 1];
        heap.splice(heap.length - 1);
        if (heap.length == 3) {
          if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
          };
          return smallest;
        };
        let i = 1;
        let left = 2 * i;
        let right = 2 * i + 1;
        while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
          if (heap[left] < heap[right]) {
            [heap[i], heap[left]] = [heap[left], heap[i]];
            i = 2 * i
          } else {
              [heap[i], heap[right]] = [heap[right], heap[i]];
              i = 2 * i + 1;
            };
          left = 2 * i;
          right = 2 * i + 1;
          if (heap[left] == undefined || heap[right] == undefined) {
            break;
          };
        };
      } else if (heap.length == 2) {
          heap.splice(1, 1);
        } else {
            return null;
          };
    return smallest;
  };
  sort() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  };
};
class Maxheap{
  print() {
    console.log(heap);
  }
  insert(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx/2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
            if (Math.floor(idx/2) > 1) {
              idx = Math.floor(idx/2);
            } else {
                break;
            };
        };
      };
    };
  };
  remove() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        };
        return smallest;
      };
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i
        } else {
            [heap[i], heap[right]] = [heap[right], heap[i]];
            i = 2 * i + 1;
          };
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          break;
        };
      };
    } else if (heap.length == 2) {
        heap.splice(1, 1);
    } else {
        return null;
    };
    return smallest;
  };
};
~~~
<br>


<!-- Next to [Fundamentals of Algorithms](2022-02-19-fundamentals-of-algorithms.md){:.heading.flip-title}
{:.read-more} 
<br> -->

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br>
[https://www.codesdope.com/](https://www.codesdope.com/){:target="_blank"}<br>
[https://algorithmtutor.com/](https://algorithmtutor.com/){:target="_blank"}<br>
[https://blog.penjee.com/learnprogramming/programming-gifs/](https://blog.penjee.com/learnprogramming/programming-gifs/){:target="_blank"}<br>
[https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5](https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5){:target="_blank"}<br>
{:.note title="reference"}
