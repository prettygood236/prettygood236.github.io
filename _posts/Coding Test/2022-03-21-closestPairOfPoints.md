---
layout:     post
title:     'closestPairOfPoints'
subtitle:  'closestPairOfPoints'
category:   coding-test 
tags:       coding-test
image: 
  path: /assets/img/coding-test/closestPairOfPoints_main.jpg
related_posts: 
  - _posts/Data Structures and Algorithms/2022-02-15-binary-search.md
  - _posts/Data Structures and Algorithms/2022-02-19-dynamic-programming.md
accent_color: rgba(0,210,255,1)
accent_image: 
  background: linear-gradient(to left, rgba(0,210,255,1) 0%, rgba(58,123,213,1) 100%);
  overlay: false
theme_color: rgba(58,123,213,1)
---

* toc
{:toc .large-only}

## Problem

아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴해야 한다.

\-ugly number는 2, 3, 5로만 나누어 떨어지는 수이다. <br/>
\-1은 1번째 ugly number 이다. <br/>
\-1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ..


**입력** <br/>
인자 1 : n <br/>
\- number 타입의 자연수 (n >= 1) <br/>

**출력** <br/>
number 타입을 리턴

**주의사항** <br/>
ugly numbers를 배열에 저장했을 때, n번째 ugly number의 위치는 인덱스 n-1 이다. <br/>

**입출력 예시**
~~~js
let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(3);
console.log(result); // --> 3
~~~

## Solution

### 1. Dynamic Programming

모든 숫자는 2, 3, 5로만 나눌 수 있으므로 수열을 세 그룹으로 나눌 수 있다.
~~~
(1) 1×2, 2×2, 3×2, 4×2, 5×2, …
(2) 1×3, 2×3, 3×3, 4×3, 5×3, …
(3) 1×5, 2×5, 3×5, 4×5, 5×5, …
~~~
모든 부분 수열은 기존에 구한 uglyNumber (1, 2, 3, 4, 5, …) 곱하기 2, 3, 5이다. 따라서 [merge sort](/data-structures-and-algorithms/sort.html#7-merge-sort)의 병합 방법처럼 세 부분 수열에서 uglyNumber를 구한다. 모든 단계에서 가장 작은 것을 선택하고 한 단계씩 이동한다.

1. ugly numbers를 담을 배열 선언: ugly[n] <br/>
2. 첫 번째 uglyNumber를 초기화한다.: ugly[0] = 1 <br/>
3. 세 개의 배열 인덱스 변수 i2, i3, i5를 초기화한다.
  uglyNumber 배열의 첫 번째 요소:
    i2 = i3 = i5 = 0;
4. 다음 ugly number에 대해 3가지 선택 항목을 초기화한다.
  nextMultipleOf2 = ugly[i2]*2;
  nextMultipleOf3 = ugly[i3]*3
  nextMultipleOf5 = ugly[i5]*5;
5. 이제 n까지 모든 ugly number를 채우기 위해 루프로 이동한다.

~~~
for (i = 1; i < n; i++ ) {
  nextUglyNo = Min(nextMultipleOf2, nextMultipleOf3, nextMultipleOf5);
  ugly[i] = nextUglyNo

  if (nextUglyNo == nextMultipleOf2){
    i2 = i2 + 1;
    nextMultipleOf2 = ugly[i2]*2;
  }
  if (nextUglyNo == nextMultipleOf3){
    i3 = i3 + 1;
    nextMultipleOf3 = ugly[i3]*3;
  }
  if (nextUglyNo == nextMultipleOf5){
    i5 = i5 + 1;
    nextMultipleOf5 = ugly[i5]*5;
  }    
}
~~~

6\. nextUglyNo를 리턴한다.

~~~js
// file:'uglyNumbers_DynamicProgramming.js'
const uglyNumbers = function (n) {
  let ugly = Array(n).fill(0)
  let i2 = 0, i3 = 0, i5 = 0;
  let nextMultipleOf2 = 2;
  let nextMultipleOf3 = 3;
  let nextMultipleOf5 = 5;
  let nextUglyNo = 1;
 
  ugly[0] = 1;
 
  for (i = 1; i < n; i++){
    nextUglyNo = Math.min(nextMultipleOf2, Math.min(nextMultipleOf3, nextMultipleOf5));
 
    ugly[i] = nextUglyNo;
    if (nextUglyNo == nextMultipleOf2){
      i2 = i2 + 1;
      nextMultipleOf2 = ugly[i2] * 2;
    }
    if (nextUglyNo == nextMultipleOf3){
      i3 = i3 + 1;
      nextMultipleOf3 = ugly[i3] * 3;
    }
    if (nextUglyNo == nextMultipleOf5){
      i5 = i5 + 1;
      nextMultipleOf5 = ugly[i5] * 5;
    }
  }
  return nextUglyNo;
  }
}; 
~~~

시간복잡도는 $$O(N)$$이며, <br/>
보조공간이 $$O(N)$$만큼 필요하다.

### 2. Binary Search

1. no는 x=pow(2,p)*pow(3,q)*pow(5,r) 형식이다.
2. 1부터 Number.MAX_SAFE_INTEGER 사이에 n번째 uglyNumber가 있을것이다.
3. 따라서 Binary Search를 한다. mid에 있다고 가정하고 mid보다 작은 uglyNumber의 총 개수를 찾고 그에 따라 조건을 설정한다.

~~~js
// file:'uglyNumbers_Binary Search.js'
const uglyNumbers = function (n) {

  let pow = Array(40).fill(1);
	  
  //Math.pow(2,0)에서 Math.pow(2,30)까지 2의 거듭제곱을 저장
	for (i = 1; i <= 30; ++i){
		pow[i] = pow[i - 1] * 2;
  }
  // 낮은 값과 높은 값 초기화
	let l = 1, r = Number.MAX_SAFE_INTEGER;

	let ans = -1;
  
  // 이진 검색 적용
	while (l <= r) {
		let mid = l + parseInt((r - l) / 2); 
		let count = 0; // count는 mid보다 작은 uglyNumber의 총 개수를 저장한다.
    // 1에서 mid까지 반복
		for (i = 1; i <= mid; i *= 5){
      // mid보다 작은 i의 거듭제곱을 찾는다.
			for (j = 1; j * i <= mid; j *= 3){
        // 3과 5의 곱이 mid보다 작은 3과 5의 거듭제곱.
        // 2의 거듭제곱 배열(pow)을 사용하여 i*j*power 2가 mid보다 작은 2의 최대 거듭제곱을 찾는다.
	  		count += upperBound(pow, 0, 31, parseInt( (mid / (i * j))));
			}
		}
    //mid보다 작은 uglyNumbers의 총 수가 n보다 작으면 l을 업데이트한다.
		if (count < n)
			l = mid + 1;
		else {
      // mid보다 작은 uglyNumbers의 총 수가 n보다 크면 r과 ans를 동시에 업데이트한다.
			r = mid - 1;
			ans = mid;
		}
	}
	return ans;
};
function upperBound(a , low , high , element) {
	while (low < high) {
		let middle = low + parseInt((high - low) / 2);
		if (a[middle] > element)
			high = middle;
		else
			low = middle + 1;
	}
	return low;
}
~~~

시간복잡도는 $$O(logN)$$ (따라서 n이 클 때 적합하다), <br/>
보조공간은 $$O(1)$$만큼 필요하다.




<br/>
<br/>
<br/>
<br/>

[https://www.geeksforgeeks.org/](https://www.geeksforgeeks.org/){:target="_blank"}<br>
[https://www.programiz.com/](https://www.programiz.com/){:target="_blank"}<br>
{:.note title="reference"}