---
layout:    post
title:    'IT Terminology'
subtitle: 'About IT and Development Terminology'
category: study
tags:     IT etc
image: 
  path: /assets/img/IT/IT-Terminology_main.jpg
accent_color: rgba(104,192,189,1)
accent_image:
  background: radial-gradient(circle, rgba(147,255,252,1) 0%, rgba(28,80,77,1) 21%, rgba(27,76,73,1) 45%, rgba(11,30,28,1) 77%, rgba(3,5,4,1) 100%);
  overlay: false
theme_color: rgba(4,44,41,1)
---

Let's understand and memorize one line so that additional explanations can be made.
{:.lead}

* toc
{:toc .large-only}

# API 

**<span style='background-color:#fff39b; font-size:1.1em'>API(Application Programming Interface)은 소프트웨어 프로그램(Application)사이의 연결(Programming Interface)이다.</span>** (Wikipedia)

소프트웨어 프로그램끼리 어떤 방식이나 명령으로 요청하면, 그에 해당하는 기능을 돌려 주는 정의 및 프로토콜 세트인 것이다.   

비유하자면 API는 가게의 점원이다. 손님(프로그램)이 주문할 수 있게 메뉴(명령 목록)을 정의하고, 주문(명령)을 받으면 요리사(응용프로그램)과 상호작용하여 요청된 메뉴(명령에 대한 기능)을 전달한다. 


# DOM 

**<span style='background-color:#fff39b; font-size:1.1em'>DOM(Document Object Model)은 HTML이나 XML 를 나타내기 위한 API이다.</span>** (MDN)

즉, Document(HTML, XML)을 Object(Javascript등의 객체를 쓰는 스크립트 언어)가 이해할 수 있도록 해주는 Model이라는 뜻이다. 
DOM을 브라우저가 내장하고 있기에, HTML을 Javascript를 통해 실체로 나타낼 수 있다.

브라우저는 CSS를 Object가 이해할 수 있도록 하는 API또한 가지고 있으며 DOM 트리와 CSSOM 트리를 융합해서 우리가 보는 화면을 나타낸다. 