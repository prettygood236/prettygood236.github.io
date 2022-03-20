---
layout:   post
title:    'Permutation & Combination'
subtitle: 'Permutation & Combination'
category: data-structures-and-algorithms
tags:     permutation-and-combination
image: 
  path: /assets/img/data-structures-and-algorithms/permutations-and-combinations/permutations-and-combinations_main.png
related_posts: 
  - _posts/Data Structures and Algorithms/2022-01-22-tree.md
  - _posts/Data Structures and Algorithms/2022-02-01-greedy.md
accent_color: rgba(0,174,239,1)
accent_image: 
  background: url('/assets/img/background/Paul-Signac/Paimpol Le Fanny Crossfield, Paul Signac.jpg') center/cover 
  overlay: false
theme_color: rgba(27,10,58,1)
---
Paimpol Le Fanny Crossfield, Paul Signac
{:.figure}


* toc
{:toc .large-only}

## 1. Permutation

### 1.1 What is Permutation?

A permutation is <span style='background-color: #FFF39B;'>the choice of <u>r</u> things from a set of <u>n</u> things without replacement and where</span> <span style='background-color: #FFDFF6;'>***the order matters.***</span>

It is denoted by $$_nP_r$$. <br>

$$_nP_r=\frac{n!}{(n-r)!}$$

### 1.2 Permutation Implementation

A Permutation can be implemented using a recursive function in the manner shown in the figure below.

![](/assets/img/data-structures-and-algorithms/permutations-and-combinations/permutations-and-combinations_1.png){:width="100%"}
3-letter word permutations that can be made with X, Y, and Z
{:.figure}

~~~js
// title:'Permutation.js'
const getPermutations = function (arr, selectNumber) {
     const results = [];
     if (selectNumber === 1) return arr.map((el) => [el]);
     // When selecting one out of n (nP1), immediately return the elements of all arrays. Since there is only one choice, the order is meaningless.

     arr.forEach((fixed, index, origin) => {
       const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
       
       // Arrays other than the corresponding fixed
       const permutations = getPermutations(rest, selectNumber - 1);
       // Get the permutation for the remainder.
       const attached = permutations.map((el) => [fixed, ...el]);
       // attach fixed value to returned permutation
       results.push(...attached);
       // push everything with array spread syntax
     });

     return results; // results return with results
}
~~~

## 2. Combination

### 2.1 What is Combination?

A Combination is <span style='background-color: #FFF39B;'>the choice of <u>r</u> things from a set of <u>n</u> things without replacement and where</span> <span style='background-color: #FFDFF6;'>***the order does not matter.***</span>

It is denoted by $$_nC_r$$. <br>

$$_nC_r=\frac{_nP_r}{r!}=\frac{n!}{r!(n-r)!}$$

### 2.2 Combination Implementation

A Combination can be implemented using a recursive function in the manner shown in the figure below.

![](/assets/img/data-structures-and-algorithms/permutations-and-combinations/permutations-and-combinations_2.png){:width="100%"}
Combination to choose 3 out of ABCDE
{:.figure}

~~~js
// title:'Combination.js'
const getCombinations = function (arr, selectNumber) {
     const results = [];
     if (selectNumber === 1) return arr.map((el) => [el]);
     // When selecting one out of n (nC1), immediately return all array elements

     arr.forEach((fixed, index, origin) => {
       const rest = origin. slice(index + 1);
       // After everything except the corresponding fixed
       const combinations = getCombinations(rest, selectNumber - 1);
       // Find the combination for the remainder.
       const attached = combinations.map((el) => [fixed, ...el]);
       // Attach a fixed value to the returned combination
       results.push(...attached);
       // push everything with array spread syntax
     });

     return results; // results return with results
}
~~~