---
layout:   post
title:    'Stack & Queue'
subtitle: 'Stack & Queue'
category: data-structures-and-algorithms
tags:     stack-and-queue
image: 
  path: /assets/img/data-structures-and-algorithms/stack-and-queue/stack-and-queue_main.png
related_posts:
  - _posts/Data Structures and Algorithms/2022-01-22-tree.md
  - _posts/Data Structures and Algorithms/2022-01-25-graph.md
accent_color: rgba(0,174,239,1)
accent_image: 
  background: url('/assets/img/background/Claude-Monet/Shadows on the Sea The Cliffs at Pourville, 1882, Claude Monet.png') center/cover 
  overlay: false
theme_color: rgba(27,10,58,1)
---
Shadows on the Sea The Cliffs at Pourville, 1882, **Claude** Monet
{:.figure}****

Data structure is a storage that is used to store and organize data. <br/>
It is <span style='font-size:1em'>***a way of arranging data***</span> on a computer so that it can be accessed and updated efficiently.<br/>

![Data Structures](/assets/img/data-structures-and-algorithms/stack-and-queue/data-structures.png)


* toc
{:toc .large-only}

## 1. Stack

### 1.1 What is Stack?
---

If you make a stack of block, The last block stacks are of last in first out type of service.<br/>
<span style='background-color: #FFF39B;'>*The last block you put on top of a stack would be the first block.*</span><br/>

![Stack](/assets/img/data-structures-and-algorithms/stack-and-queue/stack.gif) <br/>

### 1.2 Using an array as a stack 
---

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
---

* push : for placing data onto a stack
* pop : removing the top element of a stack
* length or size : determining how many elements are on a stack

```js
// title: 'Stack.js'
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

## 2. Queue

### 2.1 What is Queue?
---

Queue example is a print queue when a lot of people are printing documents at the same printer.<br/>
 The documents are printed <span style='background-color: #FFF39B;'>*in the order(first in first out)*</span>. They were sent to the print queue.
 
![Queue](/assets/img/data-structures-and-algorithms/stack-and-queue/queue.gif){: width="650"}
<br/>

### 2.2 Queue Implementation
---

```js
// title: 'Queue.js'
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
---

In a priority queue not only pass the element into the queue <span style='background-color: #FFF39B;'>*but also pass the priority of the element.*</span><br/>

So if all the priorities are the same number it's going to behave just like a normal queue. 

But when you pass in elements at different priorities the elements that are passed in with a higher priority are sent to the beginning of the queue.
<br/>

#### 2.3.2 Priority Queue Implementation
---

```js
// title: 'PriorityQueue.js'
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

<br/>
<br/>
<br/>



<!-- Next to [Fundamentals of Algorithms](2022-02-19-fundamentals-of-algorithms.md){:.heading.flip-title}
{:.read-more} 
<br/> -->

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br/>
[https://www.codesdope.com/](https://www.codesdope.com/){:target="_blank"}<br/>
[https://algorithmtutor.com/](https://algorithmtutor.com/){:target="_blank"}<br/>
[https://blog.penjee.com/learnprogramming/programming-gifs/](https://blog.penjee.com/learnprogramming/programming-gifs/){:target="_blank"}<br/>
[https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5](https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5){:target="_blank"}<br/>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br/>
{:.note title="reference"}
