---
layout:   post
title:    'Permutation & Combinatin'
subtitle: 'Permutation & Combination'
category: data-structures-and-algorithms
tags:     algorithms
image: 
  path: /assets/img/data-structures-and-algorithms/greedy_main.png
related_posts: 
  - _posts/Data Structures and Algorithms/Data Structures/2022-01-31-fundamentals-of-data-structures.md
  - _posts/Data Structures and Algorithms/Algorithms/2022-02-01-greedy.md
---


* toc
{:toc .large-only}

## 1. Permutation

### 1.1 What is Permutation?

In mathematics, a permutation of a set is, loosely speaking, an arrangement of its members into a sequence or linear order, or if the set is already ordered, a rearrangement of its elements. The word "permutation" also refers to the act or process of changing the linear order of an ordered set.

### 1.2 Permutation Implementation

~~~js
// Javascript
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

A combination is a mathematical technique that determines the number of possible arrangements in a collection of items where the order of the selection does not matter. In combinations, you can select the items in any order. Combinations can be confused with permutations.

### 2.2 Combination Implementation

~~~js
// Javascript
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