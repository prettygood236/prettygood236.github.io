---
layout:     post
title:     '채굴과 노드'
subtitle:  '채굴과 노드'
category:   blockchain
tags:       blockchain
image: 
  path: /assets/img/blockchain/miners-and-nodes_main.png
accent_color: rgba(0,174,239,1)
accent_image:
  background: url('/assets/img/background/neon-circle.png') center/cover
  overlay: false
theme_color: rgba(27,10,58,1)
---
image from https://blog.unocoin.com/
{:.figure}

* toc
{:toc .large-only}


채굴
채굴(Mining)이란, 블록체인 참여자로써 검증에 참여해 암호화폐를 얻는 것을 뜻하며 땅을 파서 광물 따위를 캐내는 행위에서 유래한 용어

토큰 이코노미(Token economy)
토큰 이코노미는 어떤 행동에 대해 ‘토큰’을 보상함으로써 그 행동을 유도하며 이때 받은 토큰은 다른 유형의 물건이나 다른 서비스와 교환할 수 있는 경제 생태계

크립토 이코노미(Crypto economy)
블록체인에서 사용하는 코인 또는 토큰을 활용하여 서비스를 제공하여 이윤을 창출하는 방법과 참여자들에게 보상을 주어 활성화하는 방법, 분산원장의 거버넌스 등을 결합한 경제 생태계

노드(Node)
노드(Node)는 기능과 필요에 따라 종류와 형태가 구별되고, 자신이 맡은 역할에 따라 다양한 기능을 수행

노드의 종류
풀 노드(Full node)
풀노드(Full node)는 블록체인에서 이뤄진 모든 거래 정보를 전부 저장하는 노드

라이트 노드(Light node)
라이트 노드는 블록체인에 참여하여 거래를 수행하는 노드로, 풀노드에 거래 데이터를 요청하여 개별 거래를 검증하는 기능을 수행

SPV(Simple Payment Verification)
SPV(Simple Payment Verification)란, 거래에 대한 모든 블록체인을 저장하지 않고도 트랜잭션을 검증하는 방법으로 라이트 웨이트 노드(lightweight node) 또는 경량 노드

마스터 노드(Master node)
마스터노드(Master node)는 풀 노드(Full node) 중에서 권한과 보상을 받는 노드로 주인, 혹은 상위 노드

채굴 노드(Mining node)
채굴 노드(Mining node)의 역할은 새로운 블록을 가능한 빠르게 채굴하는 것입니다. 채굴 노드는 작업증명(PoW) 방식을 채택한 블록체인에만 존재

랜덤노드(Random node)
랜덤노드(Random node)는 전체 블록체인의 무결성을 유지하기 위해 임의로 선택된 노드로서, 선출된 마스터노드와 함께 블록을 생성

엔드포인트 노드(Endpoint node) (구)레인저 노드(Ranger node)
엔드포인트 노드(Endpoint node)는 카카오의 자회사인 그라운드X가 개발한 플랫폼인 클레이튼에 적용된 노드

합의 노드(CN; Consensus nodes)
합의 노드(CN; Consensus nodes)는 트랜잭션을 새로운 블록으로 배치하고, 비잔틴 장애 허용(BFT; Byzantine Fault Tolerance) 합의 알고리즘을 사용하여 블록들을 확인하는 작업을 담당하는 합의 네트워크를 형성하는 노드

슈퍼 노드(Super node) or 대표 노드(Representative node)
슈퍼 노드(Super node) 혹은 대표 노드(Representative node)는 블록체인 네트워크의 노드들을 대표해 블록을 생성하고 그에 대한 보상을 받는 노드

베이킹 노드(Baking node)
베이킹 노드(Baking node)는 테조스(Tezos) 블록체인에서 사용하는 용어로, 코인 소유자로부터 위임받은 코인으로 베이킹(baking)을 하는 노드

히스토리 노드(History node)
히스토리 노드(History node)란, 블록에 있는 데이터를 찾을 수 있는 노드

비트코인 채굴자가 하는 일
네트워크 동기화
트랜잭션 검증
블록 유효성 검사
새로운 블록 생성
작업 증명(PoW) 수행
보상 수령
거래(Transaction) 수수료
거래 수수료란, 채굴자들이 특정 거래 기록들을 블록에 포함시켜서 블록체인에 추가할 수 있도록 제공되는 인센티브

TPS(Transaction per Second)
TPS란, 1초당 처리할 수 있는 트랜잭션의 개수를 의미하며, 100만 TPS는 1초당 100만 건의 트랜잭션을 처리할 수 있는 속도

채굴 풀(Mining pool)
채굴 풀(Mining pool)은 의미 그대로 채굴 풀이라고 생각하면 됩니다. 여기에서 풀(Pool)은 일종의 조합을 의미하는데, 즉, 채굴을 하는 채굴자들이 모여서 만들어진 채굴자 조합

PoW, PoS, DPoS 요약
구분	작업 증명(PoW)	지분 증명(PoS)	위임지분 증명(DPoS)
개념	작업 증명(PoW)은 Proof of Work의 약자이며 작업의 증명을 뜻하며, 유효한 블록을 만드는 데 충분한 계산 자원을 소모했다는 증명	지분 증명(PoS)은 Proof-of-Stake의 약자이며, 해당 암호화폐를 보유하고 있는 지분율에 비례하여 의사결정 권한을 주는 합의 알고리즘	위임지분증명(DPoS, Delegated Proof of Stake)이란, 암호화폐 소유자들이 각자의 지분율에 비례하여 투표권을 행사하여 자신의 대표자를 선정하고, 이 대표자들끼리 합의하여 의사결정을 내리는 합의 알고리즘
암호화폐	비트코인, 라이트코인, 비트코인 캐시 등	카르다노(에이다), 큐텀, 피어코인 등	이오스, 스팀, 테조스 등
장점	가장 큰 장점은 높은 보안성	환경친화적 시스템, 인센티브에 대한 강한 동조 및 지지, 채굴 풀의 중앙집중화를 해결	소규모 참여자도 이득, 송금속도가 빠름
단점	채굴 풀의 중앙 집중화	불안전한 해결책, 불공평한 경제 모델, Nothing at stake problem	네트워크 보안 취약, 대표자의 수에 따른 속도 저하
블록체인 거버넌스(Governance)
블록체인 세계를 유지하기 위해서는 구성원들과의 이해관계 조정이 필요한데, 우리들의 이익을 직접 대변할 수 있는 네트워크 구조를 만들기 위해서 네트워크 구성원 간 의사 통합이 중요해지고, 복잡해질 수 밖에 없게 됩니다. 이때 필요한 것이 바로 거버넌스 이며, 블록체인 안에서의 거버넌스를 블록체인 거버넌스

클레이튼(Klaytn)의 합의 메커니즘
Klaytn에는 컨센서스 노드(CN), 프록시 노드(PN) 및 엔드포인트 노드(EN, (구)레인저 노드(Ranger node))라는 세 가지 유형의 노드가 있습니다.
컨센서스 노드는 CCO(Core Cell Operators)에 의해 관리되며 블록 생성을 담당합니다.

IBFT(Istanbul Byzantine Fault Tolerance)
IBFT(Istanbul Byzantine Fault Tolerance)는 즉각적인 최종성을 보장하는 권한 증명(PoA) 블록체인 합의 알고리즘입니다. 기본적으로 PBFT의 형식을 따라가며 블록을 모아서 전송한다는 개념이 추가되었습니다.

하드포크와 소프트포크
하드포크는 문제를 해결하고 새로운 체인이 만들어지는 것을 말하고, 소프트포크는 문제를 해결하고 원래의 블록체인으로 돌아갈 수 있는 것을 말합니다.


### # 질문에 답하기

**Q1. 채굴이란?**

A1. 

**Q2. 이더리움에서 블록싱크 방식은 어떻게 되나요?**

A2. 

**Q3. 이더리움에서 이벤트(logs)는 어떻게 발생되며, 클라이언트에서는 어떻게 감지하나요?**

A3. 

**Q4. 이더리움에서 Receipts정보는 용도가 무엇이며 언제 prunning 되나요?**

A4. 

**Q5. 각 퍼블릭, 프라이빗, 컨소시움에서 트랜잭션 흐름을 설명해 주세요.**

A5. 

**Q6. 하이퍼레저 패브릭에서 리더피어와 앵커피어란 무엇인가요?**

A6. 

**Q7. (이더리움과 하이퍼레저의)블록싱크 방식은 어떻게 되나요?**

A7. 

**Q8. 블록체인에서 이벤트는 어떻게 발생되며, 클라이언트에서는 어떻게 감지하나요?**

A8. 

**Q9. EOS에서 트랜잭션 수수료는? 리소스 사용량 계산 방식은?**

A9. 

**Q10. 트랜잭션에서 Two Phase Commit 이란 무엇인가요?**

A10. 

**Q11. 소위 응용레벨에서 RPC 방식과 스트리밍 방식의 차이점은 무엇인가요?**

A11. 

**Q12. 채널 MSP와 네트워크 MSP란?**

A12. 

**Q13. 동기, 비동기, 블록, 논블록은 무엇이라고 생각하나요?**

A13. 

**Q14. 블록체인 네트워크에서 하나 이상의 블록을 제거할 수 있나요?**

A14. 

**Q15. 오프체인이 무엇인가요? 오프체인 트랜잭션은 어떻게 구성되어있나요?**

A15. 

**Q16. 블록체인에 작성된 데이터는 immutable한가요?**

A16. 

**Q17. P2P 네트워크에서 피어 검색은 어떻게 동작하나요?**

A17. 

**Q18. 하드 포크와 소프트 포크는 무엇인가요?**

A18. 

**Q19. 블록은 어떻게 식별하나요?**

A19. 





<br>
<br>
<br>

[https://www.codestates.com/](https://www.codestates.com/){:target="_blank"}<br>
{:.note title="reference"}
