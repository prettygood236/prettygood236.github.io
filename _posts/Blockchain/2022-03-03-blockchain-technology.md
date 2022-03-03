---
layout:   post
title:    '블록체인 기술'
subtitle: '블록체인 기술'
category: blockchain
tags:     blockchain
image: 
  path: /assets/img/blockchain/blockchain-technology_main.png
---

* toc
{:toc .large-only}

## 1. 블록체인 개요

### 1.1 블록체인 구분

**블록체인 네트워크 유형** 

|구분|	퍼블릭 블록체인<br>(Public Blockchain)	|프라이빗 블록체인<br>(Private Blockchain) |	컨소시엄 블록체인<br>(Consortium Blockchain)|
|:-:|--|--|--|
|관리자|	모든 거래 참여자|	한 중앙 기관이 모든 권한 보유|	컨소시엄에 소속된 참여자|
|거버넌스	|한번 정해진 법칙을 바꾸기 매우 어려움|	중앙 기관의 의사결정에 따라 용이하게 법칙을 바꿀 수 있음|	컨소시엄 참여자들의 합의에 따라 법칙을 바꿀 수 있음|
|거래속도|	네트워크 확장이 어렵고 거래 속도가 느림	|네트워크 확장이 매우 쉽고 거래 속도가 빠름	|네트워크 확장이 쉽고 거래 속도가 빠름|
|데이터 접근|	누구나 접근 가능|	허가 받은 사용자만 접근 가능|	허가 받은 사용자만 접근 가능
|식별성|	익명성|	식별 가능	|식별 가능|

**세계은행그룹(World Bank Group)의 블록체인 구분**

![세계은행그룹의 블록체인 구분](/assets/img/blockchain/blockchain-technology_1.png)


### 1.2 분산원장기술

<span style='background-color: #E0FFC4'>분산원장기술(DLT; Distributed Ledger Technology)</span>은  <span style='font-size:1.1em; background-color: #FFF39B'>거래 정보를 기록한 원장을 특정 기관의 중앙화된 서버가 아닌 분산화된 네트워크에서 참여자들이 공동으로 기록 및 관리하는 기술</span>로 공유원장이라고 불리기도 함.

중앙집중원장(Centralized Ledger)의 *비용문제, 시간문제, 보안문제*를 해결.

분산원장기술의 장점은 중앙 집중형 방식에 비해 *<u>높은 효율성, 시스템 안정성, 보안성, 투명성</u>*

분상원장기술의 장점으로 인해, 중앙기관(은행 등)으로부터 벗어난 개인과 개인이 비용, 시간, 보안 문제없이 직접 거래할 수 있음. 

### 1.3 트랜잭션

블록체인(Blockchain)은 블록(Block)+체인(Chain). 다시 말해 블록들이 체인으로 연결되어 있는 구조임. 이 블록(Block)은 헤더(Header)+바디(Body)로 이루어져 있고, 

블록체인에서의 <span style='background-color: #E0FFC4'>트랜잭션</span>은 <span style='font-size:1.1em; background-color: #FFF39B'>상호작용 및 작업 수행의 논리적 단위</span>. 블록체인 상의 모든 활동은 트랜잭션을 통해 이루어지고, 추상적인 관점에서 트랜잭션은 블록체인의 상태(State) 변화를 야기하는 일련의 작업을 내포하고 있음.


비트코인 트랜잭션 구조
필드	설명
버전 번호	채굴자와 노드가 트랜잭션 처리에 사용할 규칙을 지정하는데 사용
입력 카운터	트랜잭션에 포함된 입력의 개수
입력 리스트	블록의 첫 트랜잭션은 코인베이스 트랜잭션(Coinbase Transaction). 입력 리스트에는 하나 이상의 트랜잭션 입력이 포함
출력 카운터	출력의 개수를 나타내는 양의 정수
출력 리스트	트랜잭션에 포함된 출력
로크(Lock) 시간	트랜잭션이 유효해지는 가장 빠른 시간을 정의하는 필드

이더리움 트랜잭션 구조
필드	설명
논스(Nonce)	발신 EOA에 의해 발행되어 메시지 재사용을 방지하는데 사용되는 일련번호
가스 가격(Gas Price)	발신자가 지급하는 가스의 가격
가스 한도(Gas Limit)	이 트랜잭션을 위해 구입할 가스의 최대량
수신자(Recipient)	목적지 이더리움의 주소
값(Value)	목적지에 보낼 이더의 양
데이터(Data)	가변 길이 바이너리 데이터 페이로드
v, r, s	EOA의 ECDSA 디지털 서명의 세가지 구성 요소

이더리움 트랜잭션 논스(Nonce)의 특징 2가지
거래(Transaction)를 전송시 논스는 1씩 증가한다.
논스는 계정에서 유일하며, 동일한 논스가 존재 하지않는다.
비트코인과 이더리움 논스(Nonce)의 유무 차이는 이중지불(Double Spending)의 방지를 위해서 입니다.


노드(Node)
P2P로 연결되어 블록 체인 네트워크에 연결된 모든 블록 정보를 가지는 각각의 서버를 노드(Node)라고 합니다.


노드의 종류
풀 노드 : 모든 기능을 다 가지고 있는 노드
라이트 노드 : 모든 블록정보의 원본을 가지고 있지 않고 일종의 요약본 즉 헤더정보만 가지고 있는 노드

채굴(Mining)
채굴(Mining)이란, 암호화폐의 거래내역을 기록한 블록을 생성하고 그 대가로 암호화폐를 얻는 행위


채굴(Mining)이 필요한 이유
블록체인 네트워크를 유지시키기 위해서 필요합니다.
거래 내역을 기록하고 기록된 거래내역을 블록에 담아 사용자들에게 전파하는 역할을 수행하고, 추가적으로 전파된 블록이 진짜인지 거짓인지에 대한 검증을 수행


합의 알고리즘
합의 알고리즘(Consensus Algorithm)이란, 다수의 참여자들이 통일된 의사결정을 하기 위해 사용하는 알고리즘


작업 증명(PoW. Proof of Work)
작업 증명 합의 메커니즘은 네트워크에서 수용할 값을 제안하기 전에 충분한 컴퓨팅 자원을 소모했다는 증명


지분 증명(PoS. Proof of Stake)
지분 증명 알고리즘은 노드 또는 사용자가 시스템에 충분한 지분을 갖고 있다는 증명


위임 지분 증명(DPoS. Delegated Proof of Stake)
시스템의 지분을 가진 각 노드는 투표를 통해 트랜잭션의 유효성 검사를 다른 노드에 위임하여 증명


프랙티컬 비잔틴 장애 허용(PBFT. Practical Byzantine Fault Tolerance)
프랙티컬 비잔틴 장애 허용(PBFT, Practical Byzantine Fault Tolerance)은 네오, 질리카, 하이퍼레저, R3, ITC, 텐더민트 등에서 사용하는 합의 알고리즘.
여러 노드로 구성된 네트워크에서 악의적 공격을 방어하기 위해 만들어졌습니다.


지갑(Wallet)
비트코인, 이더리움 등의 암호화폐를 보관할 수 있는 계정


지갑의 종류
데스크탑(PC)지갑
모바일 지갑
하드웨어 지갑
웹 지갑

지갑의 구조
주소(공개 키. Public Key)와 암호(개인 키. Private Key)로 구성


어카운트(Account)
이더리움 주소(Address)와 개인키(Private Key)의 조합을 어카운트(Account)이라고 합니다.


이더리움의 2가지 유형 계정
외부 소유 계정(EOA)
컨트랙트 계정(CA)

어카운트의 장단점
장점 : 단순성, 효율성
단점 : 이중 지불

UTXO(Unspent Transaction Outputs)
UTXO(Unspent Transaction Outputs)는 미사용 트랜잭션 출력값(미지출 거래 출력)을 뜻합니다.
코인이 지갑(Wallet)에 저장되는 것이 아니라, UTXO(Unspent Transaction Outputs)에 저장.


UTXO의 장단점
장점 : 이중 지불 방지, 잔고의 증명
단점 : UTXO가 너무 과하게 생성이 될 경우 불필요한 수수료를 내야 하는 단점

비트코인과 이더리움 비교
화폐의 역할에 충실해야 한다면 비트코인의 UTXO가 한번 사용되고 사라져 익명성과 보안성이 강하기 때문에 더 훌륭하지만, dApp과 같이 다양한 기능을 구현하고 싶다면 스마트 컨트랙트를 활용할 수 있는 이더리움의 어카운트가 좋습니다.


Geth
Geth는 이더리움 재단(Ethereum Foundation)이 제공하는 공식 클라이언트 소프트웨어로써, Go언어로 개발.


Parity
패리티(Parity)는 이더리움 프로토콜의 또 다른 구현체이며, 러스트(Rust) 프로그래밍 언어로 개발.


비트코인 개발 언어
비트코인은 다양한 언어로 개발되었고, C++이 주 언어.


블록체인의 거버넌스(Governance)
블록체인 네트워크를 유지하기 위해서는 구성원들간의 이해관계 조정하는 커뮤니티입니다.


BIP / EIP / ERC / KIP
BIP(Bitcoin Improvement Proposal)는 비트코인의 개선 제안을 의미
EIP(Ethereum Improvement Proposal)는 이더리움의 개선 제안을 의미
ERC(Ethereum Request for Comment)는 이더리움의 표준이 될 만한 내용입니다.
KIP(Klaytn Improvement Proposals)는 클레이튼의 개선 제안을 의미


<br>
<br>
<br>

[https://www.codestates.com/](https://www.codestates.com/){:target="_blank"}<br>
{:.note title="reference"}
