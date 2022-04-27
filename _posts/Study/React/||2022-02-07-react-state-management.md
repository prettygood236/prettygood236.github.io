---
layout:   post
title:    '[React] 상태 관리'
subtitle: '[React] 상태 관리'
category: study
tags:     react
---

* this unordered seed list will be replaced by the toc
{:toc}

## 1. State Management

### 1.1 State

**상태 : 변하는 데이터.** 특히 프론트엔드 개발에서는 **<mark>"UI에 동적으로 표현될 데이터"</mark>.**
<br/>

### 1.2 UI에서 상태찾기 연습

UI를 컴포넌트로 분리하고, state와 state의 영향을 받는 곳을 작성하여 작성 전 구조화한다. 

![UI에서상태찾기연습-1](/assets/img/react/react-state-management/ui에서상태찾기연습-1.png){:width="600"}

![UI에서상태찾기연습-2](/assets/img/react/react-state-management/ui에서상태찾기연습-2.png){:height="600"}
<br/><br/>

<span style="color:#B266FF">상태 : 현재 선택한 탭, 상품 선택 여부, 선택한 수량, 장바구니에 담긴 물품</span><br/>
<span style="color:#FF3333">--> : 상태 변경이 일어나는 곳</span><br/>
<span style="color:#66CC00">--> : 상태 변경의 영향을 받는 곳 </span><br/>
<!--more-->
<br/>

### 1.3 프론트엔드 개발에서의 Side Effect

**Side Effect : <mark>함수의 입력 외에도 함수의 결과에 영향을 미치는 요인</mark>** <br/>
ex) 네트워크 요청, API 호출