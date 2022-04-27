---
layout:   post
title:    'Divide & Conquer'
subtitle: 'Divide & Conquer'
category: data-structures-and-algorithms
tags:     divide-and-conquer
image: 
  path: /assets/img/data-structures-and-algorithms/divide-and-conquer/divide-and-conquer_main.png
related_posts: 
  - _posts/Data Structures and Algorithms/2022-02-01-implementation.md
  - _posts/Data Structures and Algorithms/2022-02-19-dynamic-programming.md
accent_color: rgba(0,174,239,1)
accent_image: 
  background: url('/assets/img/background/Paul-Signac/Auxerre, La Rivière, 1902, Paul Signac.jpg') center/cover 
  overlay: false
theme_color: rgba(27,10,58,1)
---
Auxerre, La Rivière, 1902, Paul Signac.jpg
{:.figure}

* toc
{:toc .large-only}

## 1. What is Divide and Conquer?
---
A divide and conquer algorithm is a strategy of solving a large problem by

1. breaking the problem into smaller *<span style='font-size:1em; background-color: #FFF39B'>sub-problems</span>*
2. solving the sub-problems, and
3. *<span style='font-size:1em; background-color: #FFF39B'>combining them</span>* to get the desired output.

To use the divide and conquer algorithm, [recursion](/data-structures-and-algorithms/recursive-function.html) is used. 

## 2. How Divide and Conquer Algorithms Work?

**1. Divide**: Divide the given problem into sub-problems using recursion. <br/>
**2. Conquer**: Solve the smaller sub-problems recursively. If the subproblem is small enough, then solve it directly.<br/>
**3. Combine**: Combine the solutions of the sub-problems that are part of the recursive process to solve the actual problem. <br/>

Here, we will sort an array using the divide and conquer approach (ie. [merge sort](/data-structures-and-algorithms/sort.html#7-merge-sort)).

**[Step 0]** <br/>
Let the given array be 

![Array for merge sort](/assets/img/data-structures-and-algorithms/divide-and-conquer/divide-and-conquer_0.png){:width="60%"} <br/> 
Array for merge sort
{:.figure}  

**[Step 1]** <br/>
**Divide** the array into two halves.

![Divide the array into two subparts](/assets/img/data-structures-and-algorithms/divide-and-conquer/divide-and-conquer_1.png){:width="60%"} <br/> 
Divide the array into two subparts
{:.figure}  

Again, divide each subpart recursively into two halves until you get individual elements.

![Divide the array into smaller subparts](/assets/img/data-structures-and-algorithms/divide-and-conquer/divide-and-conquer_2.png){:width="60%"} <br/> 
Divide the array into smaller subparts
{:.figure}  

**[Step 2,3]** <br/>
Now, combine the individual elements in a sorted manner. Here, **conquer** and **combine** steps go side by side.

![Combine the subparts](/assets/img/data-structures-and-algorithms/divide-and-conquer/divide-and-conquer_3.png){:width="60%"} <br/> 
Combine the subparts
{:.figure}  

## 3. Time Complexity
---
The complexity of the divide and conquer algorithm is calculated using the master theorem.
~~~
T(n) = aT(n/b) + f(n),
where,
n = size of input
a = number of subproblems in the recursion
n/b = size of each subproblem. All subproblems are assumed to have the same size.
f(n) = cost of the work done outside the recursive call, which includes the cost of dividing the problem and cost of merging the solutions
~~~
Let us take an example to find the time complexity of a recursive problem.

For a merge sort, the equation can be written as:
~~~
T(n) = aT(n/b) + f(n)
     = 2T(n/2) + O(n)
Where, 
a = 2 (each time, a problem is divided into 2 subproblems)
n/b = n/2 (size of each sub problem is half of the input)
f(n) = time taken to divide the problem and merging the subproblems
T(n/2) = O(n log n) (To understand this, please refer to the master theorem.)

Now, T(n) = 2T(n log n) + O(n)
          ≈ O(n log n)
~~~

## 4. Divide and Conquer Applications
**Advantages of Divide and Conquer Algorithm**

---
The complexity for the multiplication of two matrices using the naive method is $$O(n3)$$, whereas using the divide and conquer approach (i.e. Strassen's matrix multiplication) is $$O(n2.8074)$$. This approach also simplifies other problems, such as the Tower of Hanoi.
This approach is suitable for multiprocessing systems.
It makes efficient use of memory caches.

**Divide and Conquer is used when**

---
- *[Binary Search](/data-structures-and-algorithms/binary-search.html)*<br/>
- *[Quick Sort](/data-structures-and-algorithms/sort.html#4-quick-sort)*<br/>
- *[Merge Sort](/data-structures-and-algorithms/sort.html#7-merge-sort)*<br/>
- *Strassen's Matrix multiplication* <br/>
- *Karatsuba Algorithm* <br/>


<br/>
<br/>
<br/>
<br/>

[https://www.freecodecamp.org/](https://www.freecodecamp.org/){:target="_blank"}<br/>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br/>
[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br/>
[https://blog.naver.com/PostList.naver?blogId=ndb796](https://blog.naver.com/PostList.naver?blogId=ndb796){:target="_blank"}<br/>
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}