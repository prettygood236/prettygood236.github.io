---
layout:   post
title:    'Linked List'
subtitle: 'Linked List'
category: data-structures-and-algorithms
tags:     linked-list
image: 
  path: /assets/img/data-structures-and-algorithms/linked-list/linked-list_main.png
related_posts:
  - _posts/Data Structures and Algorithms/2022-01-25-graph.md
  - _posts/Data Structures and Algorithms/2022-02-28-linked-list.md
accent_color: rgba(0,174,239,1)
accent_image: 
  background: url('/assets/img/background/Claude-Monet/Claude Monet, The Cabin at Saint-Adresse.png') center/cover 
  overlay: false
theme_color: rgba(27,10,58,1)
---
Claude Monet, The Cabin at Saint-Adresse
{:.figure}

* toc
{:toc .large-only}

## 1. What is Linked List?
---

![Linked List](/assets/img/data-structures-and-algorithms/linked-list/linkedlist.jpeg){:width="600"}

**Linked List insert operation**

![Linked List insering operation](/assets/img/data-structures-and-algorithms/linked-list/linkedlist_inserting.gif){:width="600"} <br>
<br>

**Linked List append operation**

![Linked List appending operation](/assets/img/data-structures-and-algorithms/linked-list/linkedlist_appending.gif){:width="600"} <br>
<br>


## 2. Linked List Implementation
---

~~~js
// title: 'LinkedList.js'
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
<br/>
<br/>
<br/>



<!-- Next to [Fundamentals of Algorithms](2022-02-19-fundamentals-of-algorithms.md){:.heading.flip-title}
{:.read-more} 
<br> -->

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br>
[https://www.codesdope.com/](https://www.codesdope.com/){:target="_blank"}<br>
[https://algorithmtutor.com/](https://algorithmtutor.com/){:target="_blank"}<br>
[https://blog.penjee.com/learnprogramming/programming-gifs/](https://blog.penjee.com/learnprogramming/programming-gifs/){:target="_blank"}<br>
[https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5](https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
{:.note title="reference"}
