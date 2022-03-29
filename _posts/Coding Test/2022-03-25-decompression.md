---
layout:     post
title:     'decompression'
subtitle:  'decompression'
category:   coding-test 
tags:       recursive-function coding-test
image: 
  path: /assets/img/coding-test/decompression_main.jpeg
related_posts: 
  - _posts/Data Structures and Algorithms/2022-01-30-recursive-function.md
  - _posts/Coding Test/2022-03-23-coin-change.md
accent_color: rgba(43,65,98,1)
accent_image: 
  background: linear-gradient(308deg, rgba(43,65,98,1) 0%, rgba(18,16,14,1) 74%);
  overlay: false
theme_color: rgba(18,16,14,1)
---

* toc
{:toc .large-only}

## Problem
---

한 변의 길이가 2의 제곱수인 정사각형의 흑백 이미지가 2차원 배열로 주어진다.  <br>
각 좌표에는 0(백) 또는 1(흑)이 저장되어 있다. 이미지에 포함된 데이터가 모두 1이면 '1', 모두 0이면 '0' 한 글자로 압축할 수 있다. <br>
그렇지 않은 경우, 이를 대문자 X로 표시하고 전체를 4등분하여 재귀적으로 압축한다. 4등분한 영역의 순서는 좌측 상단, 우측 상단, 좌측 하단, 우측 하단이다. 

**입력** <br/>
인자 1 : `image` <br/>
\-배열을 요소로 갖는 배열 <br/>
\-`image.length`, `image[i].length`는 1,024 이하 <br/>
\-`image[i]`는 `number` 타입을 요소로 갖는 배열 <br/>
\-`image[i][j]`는 세로로 `i`, 가로로 `j`인 지점의 정보를 의미 <br/>
\-`image[i][j]`는 `0` 또는 `1`

**출력** <br/>
`string` 타입을 리턴

**주의사항** <br/>
두 배열의 길이의 합은 1,000,000 이하이다. <br/>
어떤 배열 arr의 k번째 요소는 arr[k-1]을 의미한다. <br/>

**입출력 예시**
~~~js
let image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result); // --> 'X0X101X10101X00X10011'
~~~

## Solution
---

데이터의 중복 조회 없이 순차적으로 str에 결과를 더해나가도록 작성하는 것이 핵심이다. 

~~~js
// file:'decompression.js'
const decompression = function (image) {
  // 결과값을 담을 str을 초기화 한다.
  let str = '';
  // 재귀함수는 결과를 담을 str과 확인할 배열의 정보 image를 받는다.
  const recurForDecomp = function (str, image) {
    // 모두 0이거나 1인 경우를 확인하기 위해 같은 크기의 배열을 만들어 비교한다.
    const zero = [];
    const one = [];
    let n = image.length;
    for (let i = 0; i < n; i++) {
      zero.push(Array(n).fill(0));
      one.push(Array(n).fill(1));
    }
    // switch case문으로 모두 0인 경우 / 모두 1인 경우 / 그에 해당하지 않는 경우를 나누어 주었다.
    switch (JSON.stringify(image)) {
      // 모두 0인 경우 str에 0을 더하고 재귀함수를 빠져나온다. 
      case JSON.stringify(zero):
        str += '0';
        return str;
      // 모두 1인 경우 str에 0을 더하고 재귀함수를 빠져나온다. 
      case JSON.stringify(one):
        str += '1';
        return str;
      // 모두 0이거나 1이 아니면 str에 X를 더하고 좌측 상단, 우측 상단, 좌측 하단, 우측 하단 순으로 
      // 다시 이 재귀함수를 돌며 순차적으로 str에 0,1혹은 X를 더해나간다. 
      default:
        str += 'X';
        let arr = [];
        // 좌측 상단
        for (let i = 0; i < image.length / 2; i++) {
          arr.push(image[i].slice(0, image.length / 2));
        }
        str = recurForDecomp(str, arr);
        arr = [];
        // 우측 상단
        for (let i = 0; i < image.length / 2; i++) {
          arr.push(image[i].slice(image.length / 2, image.length));
        }
        str = recurForDecomp(str, arr);
        arr = [];
        // 좌측 하단
        for (let i = image.length / 2; i < image.length; i++) {
          arr.push(image[i].slice(0, image.length / 2));
        }
        str = recurForDecomp(str, arr);
        arr = [];
        // 우측 하단
        for (let i = image.length / 2; i < image.length; i++) {
          arr.push(image[i].slice(image.length / 2, image.length));
        }
        str = recurForDecomp(str, arr);
    }
    // 모든 압축이 끝났고 최종 결과를 리턴한다.
    return str;
  };
  return recurForDecomp(str, image);
};
~~~



<br/>
<br/>
<br/>
<br/>

