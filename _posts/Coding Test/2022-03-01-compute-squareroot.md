---
layout:     post
title:     'computeSquareRoot'
subtitle:  'computeSquareRoot(Babylonain method)'
category:   coding-test
tags:       coding-test
image: 
  path: /assets/img/coding-test/computeSquareRoot_main.jpg
accent_color: rgba(154, 132, 120, 1)
accent_image:
  background: linear-gradient(to right, rgba(30, 19, 12, 1), rgba(154, 132, 120, 1))
  overlay: false
theme_color: rgba(30, 19, 12, 1)
---

* toc
{:toc .large-only}

## Problem
---

수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 한다.


**입력** <br/>
인자 1 : num <br/>
\- number 타입의 정수 (num >= 2)


**출력** <br/>
number 타입을 리턴해야 한다.
최대 소수점 둘째 짜리까지 구한다. (소수점 셋째 자리에서 반올림)

**주의사항** <br/>
Math.sqrt 사용은 금지된다.


**입출력 예시**
~~~js
let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45
~~~

## Solution

### 바빌로니아 법(The Babylonian Method)
---

 3000년도 더 된 기원전에 탄생한 바빌로니아 법(Babylonian method) 또는 헤론법(Heron's method)은제곱근에 대한 근사값을 구하는 알고리즘이다.<br/> 
뉴턴-랩슨 방법의 제곱근버전이라고 할 수 있다고 한다. 아이디어는 다음과 같다.

$$
\begin{aligned}
x\times\frac{a}{x}=a=\sqrt{a}\times\sqrt{a} 이므로, \\[15pt]
If\;\; x<\sqrt{a}, \quad \mathcal{then}\;\;  \frac{a}{x}>\sqrt{a} \\[5pt]
If\;\; x>\sqrt{a}, \quad \mathcal{then}\;\;  \frac{a}{x}<\sqrt{a}
\end{aligned}
$$ 

위처럼, $$\sqrt{a}$$는 항상 $$x$$와 $$\frac{a}{x}$$ 사이에 있으므로, <br/>
$$x$$와 $$\frac{a}{x}$$의 평균을 구하고, 구한 평균이 다시 $$x$$가 되어 계속해서 평균을 구해나간다면, 이는 $$\sqrt{a}$$에 근사하게 될 것이다.<br/>
따라서 $$x$$의 점화식은 다음과 같다.

$$
x_{n+1}=\frac{x_n+(\frac{a}{x_n})}{2}=\frac{(x_n)^2+a}{2x_n}
$$ 

이를 구현하면 다음과 같다. (x의 초기값은 1로, 평균을 10번만 구하도록 하였다.)

~~~js
// file:'ComputeSquareRoot.js'
function computeSquareRoot(a) { 
  let x=1 , aDivx, avg; 
  for(let i=0; i<10; i++) { 
    aDivx = a/x;
    avg = (x + aDivx) / 2; 
    x = avg;
  } 
  // toFixed는 숫자형을 받아 고정소수점 표기법의 문자열으로 반환하기 떄문에 다시 숫자형으로 바꿔주어야한다. (단항연산자+ 사용)
  return +x.toFixed(2); 
}
~~~