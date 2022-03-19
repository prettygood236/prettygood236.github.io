---
layout:   post
title:    'Hash Table'
subtitle: 'Hash Table'
category: data-structures-and-algorithms
tags:     hash-table
image: 
  path: /assets/img/data-structures-and-algorithms/hash-table/hash-table_main.png
related_posts:
  - _posts/Data Structures and Algorithms/2022-01-25-graph.md
  - _posts/Data Structures and Algorithms/2022-02-28-linked-list.md
accent_color: rgba(0,174,239,1)
accent_image: 
  background: url('/assets/img/background/Claude-Monet/Claude Monet, Railway Bridge at Argenteuil.png') center/cover 
  overlay: false
theme_color: rgba(27,10,58,1)
---
Claude Monet, Railway Bridge at Argenteuil
{:.figure}

* toc
{:toc .large-only}

## 1. What is Hash Table?
---

![Hash Table](/assets/img/data-structures-and-algorithms/hash-table/hashtable.png){:width="650"}


## 2. Hash Table Implementation
---

~~~js
// title: 'HashTable.js'
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
