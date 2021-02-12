# CSS: Cascading Style Sheets 
마크업 언어가 실제 **표시**되는 방법을 기술하는 언어

## Table of contents

1. [CSS syntax](#1-css-syntax)
2. [Declaration](#2-declaration)
3. [Selector](#3-selector)
4. [Box model](#4-box-model)
5. [CSS layout](#5-css-layout)
6. [Notes](#6-notes)


## 1. CSS syntax

### A. style attribute
* Use style attribute in tags. e.g. `<a style="color:red;">...</a>`
* **tag**단위로 css style을 적용할 때 사용한다. 

### B. style tag
* `<head>` tag 내에 `<style></style>`element를 넣으면 문서 전체에 css를 적용할 수 있다.  
* 아래 예시는 `<a>` tag 안의 모든 글자를 빨강색으로 바꾸는 방법이다. 
* 여기서 `a`는 **selector**, `color:red;`는 **declaration(property:value)** 이라고 부른다. declaration 간의 delimiter는 **세미콜론(;)** 이다.
```<style>
    a {   
        color:red;
        text-decoration:none;
    }
</style>
```
* 여러 selector에 동일한 스타일을 적용하는 것도 가능하다. selector(e.g. tag) 추가시 delimiter는 **comma(,)** 이다. e.g. `h1, h2 {}`
* delimiter로 **space(' ')** 로 하여 두 selector를 이어서 쓰면 첫번째 selector내의 두번째 selector만 선택할 수 있다. e.g. `#grid ol{}` 는 grid라는 id 내의 ol tag에만 해당하는 부분이다. 
* **page**단위로 css style을 적용할 때 사용한다. 

### C. stylesheet
* 같은 스타일을 적용해야하는 웹페이지의 수가 많을때를 가정해보자. `style_sheet.css` style sheet를 따로 만들어 사용하면 코드의 재활용성이 올라간다.
* `.css` 문서는 위의 `<style>` tag 내에 작성한 방법과 동일하게 작성하면 된다. 
* `<link>` tag로 css와 html을 연결한다. rel(relationship), href(css path) attribute를 사용한다. e.g., `<link rel="stylesheet" href="css/default.css"/>` 
* `<style>` sheet는 가장 먼저 등장하기 때문에 만약 html 문서내의 tag에 style attribute가 지정되어 있다면 이 tag내의 style attribute가 더 높은 우선순위를 지닌다.
* **여러 page** 에 css style을 적용할 때 사용한다. 


## 2. Declaration

### A. 글자 수정
* **`font-size`**: 글자 크기 e.g. `style="font-size : small;"
    * medium(default), large, xx-small, x-small, small, x-large, xx-large
    * relative size(e.g., 150%, 50%): body의 경우 default가 16px이므로, 150%s는 24px이 되고, 50%는 8px이 된다. 
    * absolute size: 단위는 in(inch), cm(centimeter), px(pixel)를 사용할 수 있다. 
* **`font-family`**: 글자 모양 e.g. `style="font-family : Arial;"
    * 여러개를 입력해서 만약 특정 폰트가 없을경우 대체제를 넣어준다. 모든 사용자를 배려하기 위함
* **`font-weight`**: 글자 굵기 e.g. `font-weight:bold;`
* **`color`**: 글자 색 e.g., `style="color : green;"`
    * hex decimal : 0~9, A~F, FF = 256 e.g. #00FF00 는 green, #000000는 black
    * alpha: 0(transparent) ~ 1 또는 그냥 `transparent`도 가능
    * `color : rgba(256,0,0,0.5);` 또는 `color : hsl(120,60%,60%);`"로도 표현 가능
    * 포토샵(또는 일러스트) 컬러 picker 이용해서 확인하자.
* **`text-align`**: 글자 배열 정렬 e.g. `style="text-align:center;"`
* **`text-decoration`**:밑줄 만들고 없애기 e.g. `text-decoration:none;`(밑줄 없애기), `text-decoration:underline;`(밑줄 만들기)
* **`line-height`**: 줄 간격(글씨 크기와는 다른 개념). 제일 아래부터 위까지의 높이. 기본적으로 줄 간격이 어느정도 있으니 초기화하고 싶다면 100%로 설정하기.



### B. list styles
> tag attribute 대신 CSS를 사용해서도 스타일 수정이 가능하다.(CSS를 사용하기!)
* **`list-style-type`**: bullet 모양 변경 e.g. `<ul style="list-style-type: disc;">`
    * disc, circle(unfilled dot), square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin
* **`list-style`**: `list-style:none`으로 하면 bullet이 사라짐
* **`list-style-image`**: bullet 이미지 사용.
* **`display`**
    * 리스트의 배치를 변경하고 싶을때: `stype="display:inline;"`(각 요소는 inline 요소다.) 
    * 또는 **`stype="display:inline-block;"`** 를 사용할 수도 있다. (각 요소는 inline 처럼 배열되어 있지만 **block**이다. 즉 height와 width등을 적용할 수 있다. )
    


### C. link styles
* selector에 link **status**를 나타낸 psuedoclass를 활용한다. e.g. `a:link`(기본 상태), `a:visited`(한번 방문 이후), `a:hover`(마우스를 올렸을때)
* 글자 스타일 수정은 위와 동일하다. e.g. `color:red;`(글자 색 변경하기), `text-decoration:none;`(밑줄 없애기)
* **HTML/Html_long_page_link.html** 파일 참조



## 3. Selector
advanced selectors인 **class**와 **id**를 사용하면 한번에 여러 tag를 제어할 수 있다. 

### A. class
* **class**: tag내에 `class="saw"`로 정의하고, css 적용시 `.saw {color:gray;}`를 적으면 saw 클래스는 모두 회색으로 보인다.
* class는 한 페이지에 여러개 정의할 수 있다. 
* 또한, 하나의 tag는 여러개의 class를 가질 수 있고 이 경우 띄어쓰기로 구분한다. e.g. `class="group1 group2" `이렇게 정의하고, `.group1{color:gray;}`,`.group2{color:red;}`따로 사용 가능
* **psuedoclass(가상 클래스)** 를 선택자에 추가해서 사용할 수 있다. psuedoclass에 css를 적용하면 선택한 요소가 특별한 상태를 만족할때만 css가 적용된다. e.g. `a:hover {color:red;}`(마우스를 올렸을때), `.skip:focus {top:0;}`(It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's Tab key.)

### B. id
* **id**: tag내에 `id="active"` 로 정의하고,  css 적용시 `#active {color:red;}`를 적으면 active id는 모두 빨간색으로 보인다. 
* id는 class와의 위치와 상관없이(즉 id가 class보다 더 위에 선언되어 있어도) 더 높은 우선순위를 갖는다.
* 한 id는 한 페이지에 한 개 정의할 수 있다. 

### C. tag
* `tag selector` < `(.)class selector`< `(#)id selector` 순으로 우선순위를 가진다. 
* id는 단 한번, class는 몇번, tag는 무한번 사용가능한 점에서 id, class, tag 순으로 중요도가 떨어진다고 볼 수 있다. 


## 4. Box model
* CSS에 포함되는 모든 element의 외장은 박스이며, 이 박스를 이해하는 것은 CSS을 통해 레이아웃을 생성하거나, 아이템과 다른 아이템을 정렬하는 것을 가능하게 한다. CSS의 박스는 내부, 외부 디스플레이 유형 중 **외부 디스플레이** 유형에 해당되는 개념이다. 
* CSS에는 크게 두 가지 박스(**block** and **inline**) 유형이 있다. 
* `display:inline;` 또는 `display:block` declaration을 사용하면 block-level tag를 inline으로 나타낼 수 있고, inline tag를 block으로 표현할 수 있다. cf. `display:none;`을 사용하면 tag 자체가 안 보인다. 


### A. Block
* A **block-level element** always starts on a new line and takes up the full width available. e.g. `<h1>`, `<p>` 
* 박스는 새 줄로 행갈이를 한다.
* width와 height 속성은 존중된다.
* 패딩(padding)과 여백(margin), 테두리(border)로 인해 다른 요소들이 박스로부터 밀려난다. 

### B. Inline
* An **inline element** does not start on a new line and it only takes up as much width as necessary. e.g., `<a>`, `<span>`
* 박스는 새 줄로 행갈이를 하지 않는다. 
* width와 height 속성은 적용되지 않는다. 
* 패딩(padding)과 여백(margin), 테두리(border)는 다른 인라인 박스들이 해당 박스로부터 멀어지지게 하지 않는다. 

### C. Tag for CSS
* The `<div>` element is a **block-level** and is often used as a container for other HTML elements. 즉, 디자인을 나타내는 block 단위로 사용가능
* The `<span>` element is an **inline container** used to mark up a part of a text, or a part of a document. 즉, 특정 부분만 수정

    
### D. Tag attribute for box model
![image](https://miro.medium.com/max/1000/1*BAmobs-3sj0yy15d9RwUMA.png)
* **콘텐츠(content) 박스**: 콘텐츠가 표시되는 영역으로 그 크기는 `width` and `height`와 같은 속성을 사용해서 정할 수 있다.
    * `width:100px;`
    * `line-height`와 `height`를 동일하게 하면 글씨가 중간(vertically)에 위치하게 된다. 
    * `overflow:hidden;`: content 기보다 content가 더 많을때. 넘치는 content를 안보이게 한다. `scroll`을 쓰면 스크롤로 나머지 내용을 확인할 수 있다. 
    * `background:#000`: 배경을 검정색으로 하겠다. `url(../image/sp_com.png)`을 사용할 수도 있다. 
* **패딩(padding) 박스**: 패딩은 콘텐츠 주변을 마치 공백처럼 자리잡는다. 패딩의 크기는 `padding`와 관련 속성을 사용해 제어할 수 있다.
    * `padding: 20px;`
    * `padding` 외에도 `padding-left`, `padding-top`등이 있고, margin도 마찬가지이다.
    * `padding:20px 10px`:top과 bottom에는 20px을 적용하고, left와 right에는 10px을 적용한다. 
    * `padding:30px 20px 10px`:top에는 30px을 적용하고, left와 right에는 20px을, bottom에는 10px을 적용한다. 
    * `padding:40px 30px 20px 10px`:top에는 40px을 적용하고, right에는 30px을, bottom에는 20px을, left에는 10px을 적용한다. (시계 방향)
* **테두리(border) 박스**: 테두리 박스는 콘텐츠와 패딩까지 둘러싼다. 테두리의 크기와 스타일은 `border`와 관련 속성을 사용하여 제어할 수 있다.
    * `border-width:5px;`
    * `border-color:red;`
    * `border-style:solid;`
    * `border:5px solid red;  <*이렇게 한줄에 쓸 수도 있다.*>`
    * `border-bottom:1px solid grey;`: 박스 아래에 회색 선이 생긴다. `border-right`도 있다.
* **여백(margin) 박스**: 여백은 가장 바깥 쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싸면서 해당 박스와 다른 요소 사이 공백 역할을 한다. 여백 박스의 크기는 `margin`와 관련 속성을 사용하여 제어될 수 있다. 
    * `margin: 20px;`
* 모든 수치는 처음에 default 값으로 되어 있다. 브라우저의 개발자 도구를 사용해서 어느 부분에 수정이 필요한지 파악하자.




## 5. CSS layout
* CSS layout을 다루는 것은 "보통 흐름(normal flow), display 속성, flexbox, 그리드, Floats, 포지셔닝, 테이블 레이아웃, 다단 레이아웃"에 대한 이해를 바탕으로한다.
* CSS를 사용하여 레이아웃을 만든다는 것은 element 집합을 **보통 흐름(normal flow)에서 벗어나도록 하는 것**이다. 

### A. Display, positioning
* **display** 속성 
    * block, inline 또는 inline-block과 같은 기준 속성값은 보통 흐름(normal flow)속에서 요소가 동작하는 방식을 변경할 수 있다. 우선은 목적에 맞게 display 속성을 제어하자. 
    * 레이아웃의 목적이 무엇인지 논할 때 가장 중요한 두 가지 속성값은 `display: flex`와 `display: grid`이다. 가변 상자(flex box)는 일차원 레이아웃을 위해 마련되었지만, 그리드 레이아웃은 이차원 레이아웃을 위해 마련되었다. 즉 행과 열에 포함된 사물들을 배열한다.
* **position** 속성
    * 다른 상자 내부에 들어가 상자의 정확한 위치를 제어할 수 있게 해준다. 포지셔닝는 메인 페이지 레이아웃을 생성하는 메서드가 아니라 **페이지의 특정 항목의 위치를 관리하고 미세 조정하는 것**에 관한 것이다.
    * **정적(static)** 포지셔닝: default 값. 즉, "문서 레이아웃 대열에 속하는 요소를 기존의 일반 위치에 들여놓는 것으로 여기서 특별할 것은 없다."라는 것을 의미한다.
    * **상대(relative) 포지셔닝**: 원래 위치에서 상대적으로 이동. 페이지의 다른 요소와 겹치는 것도 해당한다. `position: relative;top: 30px;left: 30px;` 위, 왼쪽으로 30px씩 밀린 위치로 옮겨진다. 
    * **절대(absolute) 포지셔닝**: 보통 흐름(normal flow)에서 요소를 완전히 제거하고 컨테이너 블록의 가장자리로부터 간격띄우기값(오프셋)을 사용하여 배치하는 데 사용된다.
    * **고정(fixed) 포지셔닝**: 스크롤을 해도 그 위치에 그대로 위치함
    * **스티키(sticky) 포지셔닝**: 하나의 요소를 `position: static`와 같이 작동하다가 뷰포트 기준에서 사전에 정의된 간격띄우기 지점에 도달한 순간 이후부터는 `position: fixed`와 같이 같이 작동하는 새로운 포지셔닝 메서드이다.

### B. Grid
* 아래 예시 참조(https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Introduction#%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83)
```
.wrapper {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}
```
* 여기서 `1fr`은 첫번째 컬럼에 150px을 할당하고 나머지 부분을 2번째 행으로 쓰겠다는 의미.
* 두 부분의 너비를 동일하게 하고 싶다면 `1fr 1fr`, 앞의 부분을 더 길게 하고 싶다면 `2fr 1fr` 로 작성하면 된다. 


### C. Float
* **float**: 한 요소(element)가 보통 흐름(normal flow)으로부터 빠져 텍스트 및 인라인(inline) 요소가 그 주위를 감싸는 **컨테이너**의 좌우측을 따라 배치된다. 
* 예로 left로 적용하면 흔히 메거진 레이아웃에 속한 이미지가 텍스트를 자신의 주변에 떠있게 하는 방식과 같이 블록 수준 요소가 어떤 요소의 한 쪽 측면으로 밀려나도록 할 수 있다.
```
<style>
  img{
    float:none <*right, left 도 사용가능*>
    clear:left <*what the "none floated" elements will do. 다른 float element 아래 공간 중 왼쪽 상단에 위치하게 된다. *>
  }
</style>
```

### D. Responsive web design
반응형 웹 디자인이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법을 말한다.
* 개발자 도구를 확인하면 현재 screen의 크기를 알 수 있다. (사이즈를 조절하면 우측 상단에 픽셀이 보인다.)
* 다음과 같이 미디어 쿼리(특정 조건에서 웹 레이아웃이 바뀌게 하는 방법)를 사용하면 `800px>screen size`에서부터 display가 보이지 않는다. 
```<style>
@media(min-width:800px){
  div{
    display:none;
  }
}
</style>
```
* 더 공부하기: https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout

## 6. Notes
- **style rule은 top-down 방식으로 적용된다.** 따라서 전역 style이 지정되어 있어도 부분별로 따로 스타일이 또 지정되어 있으면 부분 스타일을 적용한다. 
- caniuse.com에서 html/css/javascript의 각 브라우저 별로 기술 지원 여부를 확인할 수 있다.(e.g. grid 검색해보기)
- font size와 box size 모두 px, inch, cm, % 사용가능하다. 

## Reference
- https://developer.mozilla.org/ko/docs/Learn/CSS
- https://www.udemy.com/share/101txaAEAdeFlSTX4A/ (udemy)

