---
layout:   post
title:    '[React] 컴포넌트 디자인'
subtitle: '[React] 컴포넌트 디자인'
category: study
tags:     react
image: 
  path: /assets/img/react/react-component-design/react-component-design-main.png
---

레고처럼 **조립해 나갈 수 있는 부품 단위**로 UI 컴포넌트를 만들어 나가는 개발<br>
{:.lead}

* this undordered seed list will be replaced by the toc
{:toc .large-only}

**Component Driven Development**
![Component Driven Development](/assets/img/react/react-component-design/component-driven-development.png)
* CDD 방법을 활용하여 UI 를 구축하는 사이트 :　[BBC](https://5d28eb5ee163f6002046d6fb-steqdibxdq.chromatic.com/?path=/story/components-brand--without-brand-link){:target="_blank"}　[UN](https://5d28eb5ee163f6002046d6fb-steqdibxdq.chromatic.com/?path=/story/components-brand--without-brand-link){:target="_blank"}
<br>


## 1. Design System

### 1.1 Design System

**UI 컴포넌트들의 모음을 구조화 하는 방법**
* 디자인 시스템이란 서비스를 만드는 데 사용한 공통 컬러, 서체, 인터랙션, 각종 정책 및 규정에 관한 모든 컴포넌트를 정리해놓은 것이며 불필요한 커뮤니케이션을 없애기 위해 체계적으로 정리한 시스템을 말한다.
* UI 컴포넌트는 사용자 인터페이스를 이루는 조각들의 시각적이고 기능적인 속성을 마치 레고(LEGO) 블록처럼 캡슐화한다.
* 최근에 등장한 유저 인터페이스(UI)들은 다양한 사용자 경험을 제공하기 위해 수백 개의 모듈식 UI 컴포넌트가 재배열된 구조로 이루어져 있다.
* 디자인 시스템은 재사용이 가능한 UI 컴포넌트들로 이루어져, 복잡하고 견고하며 사용자가 접근하기에 용이한 사용자 인터페이스를 구축할 수 있다. 
* 디자이너와 개발자 모두 UI 컴포넌트를 다루기 때문에, 디자인 시스템은 두 분야를 연결하는 다리이기도 하다. 또한 조직의 공용 컴포넌트에 대한 "진실의 근원(source of truth)"이기도 하다.
* [Uber](https://github.com/uber/baseweb){:target="_blank"}, [Airbnb](https://github.com/airbnb/lunar){:target="_blank"}, [IBM](https://www.carbondesignsystem.com/){:.target="_blank"}, [GitHub](https://primer.style/css/){:.target="_blank"}을 비롯한 수백 개가 넘는 기업의 디자인 시스템에서 스토리북이 사용되고 있다. 아래 목록은 그 중 가장 우수한 팀에서 사용되고 있는 Tool들이다.

**빌드 컴포넌트**
* 📚 [스토리북(Storybook)](https://storybook.js.org/){:.target="_blank"}: UI 컴포넌트 개발과 자동으로 문서를 생성할 때 사용
* ⚛️ [리액트(React)](https://reactjs.org/){:.target="_blank"}: 선언 중심 컴포넌트 UI(create-react-app)를 사용
* 💅 [스타일 컴포넌트(Styled-components)](https://styled-components.com/){:.target="_blank"}: 컴포넌트 단위의 스타일링에 사용
* ✨ [프리티어(Prettier)](https://prettier.io/){:.target="_blank"}: 자동화된 코드 포맷팅에 사용
<br>

### 1.2 Storybook

UI 개발 즉, **Component Driven Development**를 하기 위한 도구
* 각각의 컴포넌트들을 따로 볼 수 있게 구성해주어 한 번에 하나의 컴포넌트에서 작업할 수 있다.
* 재사용성을 확대하기 위해 컴포넌트를 문서화하고, 자동으로 컴포넌트를 시각화하여 전체 UI를 한눈에 볼 수 있다.
* 시뮬레이션할 수 있는 다양한 테스트 상태를 확인하고 이를 통해 버그를 사전에 방지할 수 있도록 도와준다. 
* 테스트 및 개발 속도를 향상시키는 장점이 있으며, 애플리케이션 또한 의존성을 걱정하지 않고 빌드할 수 있다.


### 1.3 Storybook 주요 기능

* UI 컴포넌트들을 카탈로그 화하기
* 컴포넌트 변화를 Stories로 저장하기
* 핫 모듈 재 로딩과 같은 개발 툴 경험을 제공하기
* 리액트를 포함한 다양한 뷰 레이어 지원하기 
<br>
<br>
<br>
<br>

## 2. CSS 방법론

### 2.1 CSS 전처리기(CSS Preprocessor)

CSS가 구조적으로 작성될 수 있게 도움을 주는 도구
* CSS의 문제점들을 프로그래밍 개념(변수, 함수, 상속 등)을 활용하여 해결할 수 있도록 한다.
* CSS 전처리기(CSS Preprocessor) 자체만으로는 웹 서버가 인지하지 못하기 때문에 각 CSS 전처리기에 맞는 Compiler를 사용해야 하고 컴파일을 하게 되면 실제로 우리가 사용하는 CSS 문서로 변환이 된다.


### 2.2 SASS(Syntactically Awesome Style Sheets)
![SASS](/assets/img/react/react-component-design/sass.png)

CSS 전처리기 중에서 가장 유명한 SASS는 CSS를 확장해 주는 스크립팅 언어
* 즉, CSS를 만들어주는 언어로서 자바스크립트처럼 특정 속성(ex. color, margin, width 등)의 값(ex. #ffffff, 25rem, 100px 등)을 변수로 선언하여 필요한 곳에 선언된 변수를 적용할 수도 있고, 반복되는 코드를 한 번의 선언으로 여러 곳에서 재사용할 수 있다.
* SCSS 코드를 읽어서 전처리한 다음 컴파일해서 전역 CSS 번들 파일을 만들어 주는 전처리기(preprocessor)
* 스타일이 겹치는 문제를 해결하기 위해 단순히 계층 구조를 만들어 내는 것에 의지하며, 그 결과 컴파일된 CSS의 용량은 어마어마하게 커지는 치명적인 단점이 있다.
<br>

### 2.3 CSS 방법론
방법론의 지향점은 다음과 같다. 
* 코드의 재사용
* 코드의 간결화(유지 보수 용이)
* 코드의 확장성
* 코드의 예측성(클래스 명으로 의미 예측)

### 2.4 BEM
![BEM](/assets/img/react/react-component-design/bem.png)

대표적인 CSS 방법론인 BEM이란 Block, Element, Modifier로 구분하여 클래스명을 작성하는 방법
* Block, Element, Modifier 각각은 —와 __로 구분
* 클래스명은 BEM 방식의 이름을 여러 번 반복하여 재사용할 수 있도록 하며 HTML/CSS/SASS 파일에서도 더 일관된 코딩 구조를 만들어 준다.
* 클래스명 선택자가 장황해지고, 이런 긴 클래스명 때문에 마크업이 불필요하게 커지며, 재사용하려고 할 때마다 모든 UI 컴포넌트를 명시적으로 확장해야는 단점이 있다.
<br>

### 2.5 각 CSS 방법론의 특징과 장, 단점
![CSS-Methlogy](/assets/img/react/react-component-design/css-methlogy.png)
<br>
<br>
<br>
<br>

## 3. Styled-Component
![Styled-Component](/assets/img/react/react-component-design/styled-component.png)

SASS와 BEM도 고치지 못했던 몇 가지 문제들은 언어 로직 상에 진정한 캡슐화의 개념이 없다는 것이었고, 이로 인해 개발자들이 유일한 클래스명을 선택하는 것에 의존할 수밖에 없었다. <br><br>
Styled-Component는 **캡슐화(encapsulation : 객체의 속성과 행위를 하나로 묶고 실제 구현 내용 일부를 외부에 감추어 은닉하는 개념)**를 가능하게 한다.
* 가장 인기있는 CSS-in-JS 관련 React 라이브러리
* 기능적(Functional) 혹은 상태를 가진 컴포넌트들로부터 UI를 완전히 분리해 사용할 수 있는 아주 단순한 패턴을 제공 
* 기존 CSS 문법으로도 스타일 속성이 추가된 React 컴포넌트를 만들 수 있다. 

~~~js
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
`;
~~~
Styled Component 를 이용한 Button 생성
{:.figcaption}

### 3.1 Styled Component의 특징

**Automatic critical CSS**<br>
* 화면에 어떤 컴포넌트가 렌더링 되었는지 추적해서 해당하는 컴포넌트에 대한 스타일을 자동으로 삽입한다. 
* 따라서 코드를 적절히 분배해 놓으면 사용자가 어플리케이션을 사용할 때 최소한의 코드만으로 화면이 띄워지도록 할 수 있다.

**No class name bugs**<br>
* 스스로 유니크한 className 을 생성하여 className 의 중복이나 오타로 인한 버그를 줄여준다.

**Easier deletion of CSS**<br>
* 모든 스타일 속성이 특정 컴포넌트와 연결되어 있기 때문에 만약 컴포넌트를 더 이상 사용하지 않아 삭제할 경우 이에 대한 스타일 속성도 함께 삭제된다.

**Simple dynamic styling**<br>
* className을 일일이 수동으로 관리할 필요 없이 React 의 props 나 전역 속성을 기반으로 컴포넌트에 스타일 속성을 부여하기 때문에 간단하고 직관적이다.

**Painless maintenance**<br>
* 컴포넌트에 스타일을 상속하는 속성을 찾아 다른 CSS 파일들을 검색하지 않아도 되기 때문에 코드의 크기가 커지더라도 유지보수가 어렵지 않다.

**Automatic vendor prefixing**<br>
* 개별 컴포넌트마다 기존의 CSS 를 이용하여 스타일 속성을 정의하면 이외의 것들은 Styled Component 가 알아서 처리해 준다.
<br>

### 3.2 Getting Started

~~~js
import styled from "styled-components";

// <h1> 태그를 렌더링 할 title component를 만든다.
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: MidnightBlue;
`;

// <section> 태그를 렌더링 할 Wrapper component를 만든다.
const Wrapper = styled.section`
  padding: 6em;
  background: LemonChiffon;
`;

export default function App() {
  // 일반적으로 컴포넌트를 사용하는 것처럼 Title과 Wrapper를 사용하면 된다!
  return (
    <Wrapper>
      <Title>Hello CHAN!</Title>
    </Wrapper>
  );
}
~~~
`<Title>`과 `<Wrapper>` 라는 컴포넌트에 스타일 속성을 정의한 후 React 에서 컴포넌트를 사용하는 것과 동일하게 리턴문 안에서 해당 컴포넌트들을 사용하고 있으며, `<h1>` tag 의 스타일 속성은 styled.h1 , `<section>` tag 의 스타일 속성은 styled.section 를 사용하고 있다. 
{:.figcaption}
<br>

![Getting Started](/assets/img/react/react-component-design/getting-started.png){: width="600" height="600"} <br>
결과
{:.figcaption}
<br>

### 3.3 Adapting based on props & Extending Styles

Styled Component 는 **스타일 속성을 지닌 컴포넌트를 정의할 때에 함수를 전달하고, 그 함수 안에서 props 를 사용**할 수도 있다. <br>
또한 **같은 스타일 속성을 지닌 여러개의 컴포넌트들 중 몇 개의 컴포넌트에 약간의 변화를 주고 싶은 때**에는 상속받고자 하는 스타일 속성을 지닌 컴포넌트를 `styled()` 로 감싼 뒤, 변경하고 싶은 속성만 새로 정의해 주면 기존 속성을 확장하여 사용할 수 있다. 

~~~js
import styled from "styled-components";

  // Button component
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Tomato = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// App component
export default function App() {
  return (
    <div className="App">
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Tomato>Tomato</Tomato>
    </div>
  );
}
~~~

`<Button>` 컴포넌트의 background 와 color 속성은 primary 라는 props 의 전달 여부에 따라 컬러값을 정의하고 있다. <br> 
기존의 Button 컴포넌트에 Tomato 컴포넌트만을 위한 새로운 속성을 추가한 것이다.
{:.figcaption}
<br>



![Adapting based on props & Extending Styles](/assets/img/react/react-component-design/adapting-based-on-props-and-extending-styles.png){: width="600" height="600"} <br>
결과
{:.figcaption}
<br>

### 3.4 Passed props

컴포넌트에 **props 로 스타일 속성이 전달**된다면 해당 컴포넌트는 **props 로 전달된 속성을 우선 적용**하며, 전달되는 속성이 없다면 기본으로 설정된 속성을 적용한다. 이는 Styled Component 가 개발자에 의해 설정된 속성과 기본 속성을 구분할 수 있기 때문이다.

~~~js
import styled from "styled-components";

// Styled Component로 만들어진 Input 컴포넌트
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "red"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export default function App() {
  return (
    <div>
      {/* 아래 Input 컴포넌트는 styled component인 Input 컴포넌트에 지정된 inputColor(red)가 적용되었다.  */}
      <Input defaultValue="김코딩" type="text" />
      {/* 아래 Input 컴포넌트는 props로 전달된 커스텀 inputColor(blue)가 적용되었다. */}
      <Input defaultValue="박해커" type="text" inputColor="blue" />
    </div>
  );
}
~~~
props 로 color 속성이 전달된 Input 컴포넌트는 해당 color 속성이 글자색에 적용되고, props 가 전달되지 않은 Input 컴포넌트는 기본 색상(여기서는 빨간색)이 적용된 것을 확인할 수 있다. 
{:.figcaption}
<br>
![Passed props](/assets/img/react/react-component-design/passed-props
.png){: width="600" height="600"} <br>
결과
{:.figcaption}
<br>

## 4. DOM reference를 잘 활용할 수 있는 useRef

### 4.1 useRef

React는 DOM 엘리먼트의 주소값을 활용(focus, text selection, media playback, 에니메이션 적용
d3.js, greensock 및 DOM 기반 라이브러리 활용 등)해야 하는 예외적인 상황에서 **useRef**으로 DOM 노드, 엘리먼트, 그리고 리액트 컴포넌트 주소값을 참조할 수 있다. 

~~~js
const 주소값을_담는_그릇 = useRef(참조자료형)
// 이제 주소값을_담는_그릇 변수에 어떤 주소값이든 담을 수 있다.
return (
    <div>
      <input ref={주소값을_담는_그릇} type="text" />
        {/* React에서 사용 가능한 ref라는 속성에 주소값을_담는_그릇을 값으로 할당하면*/}
        {/* 주소값을_담는_그릇 변수에는 input DOM 엘리먼트의 주소가 담긴다. */}
        {/* 향후 다른 컴포넌트에서 input DOM 엘리먼트를 활용할 수 있다. */}
    </div>
  );
~~~

이 주소값은 컴포넌트가 re-render 되더라도 바뀌지 않는다. 
{:.figcaption}

~~~js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
~~~

컴포넌트가 re-render 되더라도 주소값이 바뀌지 않는 특성을 활용하여 위의 제한된 상황에서 useRef를 활용할 수 있다.
{:.figcaption}

제시된 상황을 제외한 대부분의 경우 기본 리액트 문법을 벗어나 useRef를 남용하는 것은 부적절하고, React의 특징이자 장점인 선언적 프로그래밍 원칙과 배치되기 때문에, 조심해서 사용해야 한다.
<br>


### 4.2 useRef 활용 예시 

[Action Item 1 : focus](https://codesandbox.io/s/patient-worker-3kzhd?from-embed=&file=/src/App.js){:.target="_blank"}
<br>

[Action Item 2 : media playback](https://codesandbox.io/s/priceless-sanderson-kx77s?from-embed){:.target="_blank"}


Next　[[React] Sprint - React Custom Component](2022-02-04-react-sprint-custom-component.md){:.heading.flip-title}
{:.read-more} 


[https://www.codestates.com/](https://www.codestates.com/){:target="_blank"}<br>
{:.note title="reference"}
