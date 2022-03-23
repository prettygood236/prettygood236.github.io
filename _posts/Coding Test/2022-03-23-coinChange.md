---
layout:     post
title:     'coinChange'
subtitle:  'coinChange'
category:   coding-test 
tags:       dynamic-programming
image: 
  path: /assets/img/coding-test/coinChange_main.png
related_posts: 
  - _posts/Data Structures and Algorithms/2022-02-19-dynamic-programming.md
  - _posts/Coding Test/2022-03-19-uglynumbers.md
accent_color: rgba(220,240,246,1)
accent_image: 
  background: url('/assets/img/background/pastel-watercolor.png') center/cover 
  overlay: false
invert_sidebar: true
theme_color: rgba(208,121,229,1)
---

* toc
{:toc .large-only}

## Problem

다양한 동전들을 가지고 특정 금액을 만들 수 있는 모든 경우의 수를 리턴해야 한다.

예를 들어, 100원, 500원짜리 동전을 가지고 1,000원을 만들 수 있는 방법은 총 3가지이다. <br/>
100원 10개, 100원 5개 + 500원 1개, 500원 2개


**입력** <br/>
인자 1 : S <br/>
\-사용할 수 있는 동전 금액
\-number 타입을 요소로 갖는 배열 <br/>
\-S[i]는 20 이하의 양의 정수

인자 1 : m <br/>
\-총 동전의 가지수(S.length) <br/>
\-10,000 이하의 정수

인자 1 : n <br/>
\-동전들을 가지고 만들 특정 금액
\-number 타입의 자연수 <br/>

**출력** <br/>
number 타입을 리턴

**주의사항** <br/>
동전의 금액은 다양하게 주어진다.
S는 오름차순으로 정렬되어 있다.
각 동전의 개수는 무수히 많다고 가정한다.

**입출력 예시**
~~~js
let S = [1, 5];
let m = S.length
let n = 10;
let output = coinChange(S, m, n);
console.log(output); // --> 3

S = [1, 2, 3];
m = S.length
n = 4;
output = coinChange(S, m, n);
console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])
~~~

<br/>


## Solution

### BottomUp Dynamic Programming 

~~~js
// file:'coinChange_bottomUp.js'
const coinChange = function (S, m, n){

  // table[i]는 값 i에 대한 솔루션의 수를 저장
  // 상향식(bottom-up)으로 구성되므로 n+1개의 행이 필요
  let table = Array(n+1).fill(0)

  // Base case (주어진 값이 0인 경우)
  table[0] = 1;
 
  // 모든 코인을 하나씩 선택하고 선택된 코인의 값보다 크거나 같은 인덱스 뒤에 table[] 값을 업데이트
  for(let i = 0; i < m; i++)
    for(let j = S[i]; j <= n; j++)
      table[j] += table[j - S[i]];
 
  return table[n];
}
~~~
  const n = total
  const m = S.length

시간복잡도는 $$O(mn))$$, <br/>
보조공간은 $$O(n)$$만큼 필요하다.

### TopDown Dynamic Programming 

~~~js
const coinChange = function (S, m, n) {
  // memo[i][j]는 i만큼의 금액을 S[j]부터 ~ S[m - 1]까지 사용하여 만들 수 있는 경우의 수를 저장
  const memo = [];
  for (let i = 0; i < n + 1; i++) memo.push(Array(m).fill(-1));

  const makeChageFrom = (left, idx) => {

    // 0을 만드는 방법은 1가지이다. 아니면 목표 금액을 만들었다고 생각해도 된다.
    if (left === 0) return 1;
    // 금액이 마이너스가 되는 경우는 불가능하므로 0을 리턴
    if (left < 0) return 0;
    // 동전을 전부 검토해서, 남아있는 새로운 동전은 없는데 목표 금액을 만들지 못한 경우 (실패)
    if (idx >= m && left > 0) return 0;
    // 이미 해결한 적이 있는 문제는 다시 풀지 않는다.
    if (memo[left][idx] !== -1) return memo[left][idx];

    // left만큼의 금액을 S[idx]부터 사용하여 만들 수 있는 경우의 수는
    //  1) S[idx]는 그만 사용하고, 다음 동전으로 넘어가거나 (목표 금액은 그대로이고, idx가 증가한다.)
    //  2)) S[idx]를 한번 더 사용한다. S[idx]를 또 사용할 수 있으므로, idx는 그대로이고, 목표 금액은 S[i]만큼 줄어든다.
    memo[left][idx] =
      makeChageFrom(left, idx + 1) + makeChageFrom(left - S[idx], idx);
    return memo[left][idx];
  };

  return makeChageFrom(n, 0);
};
~~~

시간복잡도는 $$O(mn))$$이다.


<br/>
<br/>
<br/>
<br/>

[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
{:.note title="reference"}