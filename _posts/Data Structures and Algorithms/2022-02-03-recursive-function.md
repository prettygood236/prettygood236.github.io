---
layout:   post
title:    'Recursive Function'
subtitle: 'Recursive Function'
category: data-structures-and-algorithms
tags:     data-structures-and-algorithms
image: 
  path: /assets/img/data-structures-and-algorithms/recursive-function/recursive-function.png
related_posts: 
accent_color: rgba(250,113,205,1)
accent_image:
  background: rgba(223,191,166,1)
  overlay: false
theme_color: rgba(223,191,166,1)
---

* toc
{:toc .large-only}

recursive function
A recursive function is a function that calls itself again.

A simple example of a recursive function
-Infinitely prints the string 'Call recursive function.'
- After outputting to a certain extent, a message exceeding the maximum recursion depth is output.

def recursive_function( ): #Define a function
    print('Call the recursive function.') #Print the character
    recursive_function( ) # call itself again

recursive_function( ) # Recursively calls itself when this function is called from outside

A loop can be created without using a while or for statement.

End condition for recursive function
In problem solving, the termination condition of the recursive function must be specified.
If the termination condition is not properly specified, it is called indefinitely.
Example of a recursive function with an exit condition
def recursive_function( i ):
    # Specify an exit condition to terminate when the 100th call is made
    if i == 100: #specified at the beginning
        return
    print(i, 'In the th recursive function', i+1, 'The th recursive function is called.')
    recursive_function( i+1 ) # Automatically increment by 1 expression.
    print(i, 'End the th recursive function.')

recursive_function(1)


It is displayed that the 99th to the 1st are finished sequentially.
If you use a recursive function, it comes out similar to putting data on the stack and then removing it.

 Factorial implementation example: using recursive function

n! = 1 x 2 x 3 x ... x (n-1) x n
Mathematically 0! = 1! = 1

# Iteratively implemented n!
def factorial_iterative(n):
    result = 1
    # Multiply the numbers from 1 to n sequentially
    for i in range(1, n+1):
        result *= i
    return result

# A recursive implementation of n!
def factorial_recursive(n):
    if n <= 1: Returns 1 if #n is 1 or less
        return 1
    #n! = n * (n-1)! as code
    return n * factorial_recursive(n-1)

#n implemented in each way! output (n=5)
print('Recursively implemented: ', factorial_iterative(5))
print('implemented recursively: ', factorial_recursive(5))

(Print)
Implement iteratively: 120
Implemented recursively: 120
Implementing it recursively makes the code more concise and intuitive.

Euclidean Algorithm (Calculating the greatest common divisor) Example: Using a recursive function
A typical algorithm for finding the greatest common divisor of two natural numbers is the Euclidean Algorithm.

Euclid's Algorithm
- For two natural numbers A and B (A > B), the remainder of dividing A by B is called R.
In this case, the greatest common divisor of A and B is the same as the greatest common divisor of B and R.

The idea of Euclidean Algorithm can be written as a recursive function.
-Example: GCD(192, 162)

| Stage |  A  |  B  |
|:----:|:---:|:---:|
|   1  | 192 | 162 |
|   2  | 162 |  30 |
|   3  |  30 |  12 |
|   4  |  12 |  6  |

The form of changing the expression is repetitive and has the same structure = It can be made intuitively with a recursive function.

def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)

print(gcd(192, 162))
(Print)
6

Notes on using recursive functions
Recursive functions can be used to write complex algorithms concisely.
-However, it should be used carefully as it may become a form of code that is difficult for others to understand.
All recursive functions can implement the same function by using a loop.
In some cases, recursive functions are more advantageous than loops, and in other cases, they are disadvantageous.
When a computer calls a function successively, it is stacked on a stack frame inside the computer's memory.
-So, when you need to use the stack, the implementation uses a recursive function instead of the stack library.
 ex. DFS is sometimes implemented as a recursive function.



[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br>
[https://blog.naver.com/PostList.naver?blogId=ndb796](https://blog.naver.com/PostList.naver?blogId=ndb796){:target="_blank"}<br>
이것이 코딩테스트다,2020,나동빈,한빛미디어
{:.note title="reference"}