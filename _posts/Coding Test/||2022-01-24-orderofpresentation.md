---
layout: post
title: 'orderOfPresentation'
subtitle: '총 조의 수 N과 발표 순서 k에 따른 반환 값'
category: coding-test
tags: coding-test
---

* this unordered seed list will be replaced by the toc
 {:toc}

## 문제

-   총 조의 수 N과 발표 순서 k가 주어질 때, 올바른 리턴 값을 구하기
-   모든 경우의 수가 담긴 배열은 번호가 작을수록 앞에 위치한다고 가정
    ex) N = 3일경우, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
-   인자 1: N
    Number 타입의 1 <= N <= 12인 조의 개수
-   인자 2: Kcoding-test
    Number타입의 Array (0 <= index)
-   주의사항
    k내에 중복되는 요소는 없다고 가정
-   입출력 예시

```javascript
let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
```

<!--more-->


