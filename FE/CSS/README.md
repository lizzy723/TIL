# CSS: Cascading Style Sheets 
마크업 언어가 실제 **표시**되는 방법을 기술하는 언어

## Table of contents

1. [CSS 기본 syntax](#1-css-기본-syntax)
2. [Declaration](#2-declaration)
3. [Selector](#3-selector)
4. [Box model](#4-box-model)


## 1. CSS 기본 syntax

* 방법1) **style tag**를 사용한다 e.g. 아래 예시처럼 head tag안에 `<style></style>`태그를 입력하면, a tag 안의 모든 글자를 빨강색으로 바꿀 수 있다.(여기서 `a`는 **selector**, `color:red;`는 **declaration(property:value)** 이라고 부른다)
```<style>
a {   
    color:red;
    text-decoration:none;
}
</style>
```

  - selector(tag) 추가시 delimiter는 comma(,)로 하기 e.g. `h1, h2 {}`
  - delimiter로 space(' ')를 쓰고 두 selector를 쓰면 첫번째 selector내의 두번째 selector만 선택할 수 있다. e.g. `#grid ol{}` 는 grid라는 id 내의 ol tag에만 해당하는 부분이다. 
  - declaration 구분자는 `;` 이다.

* 방법2) 각 tag 안의 **style attribute**를 사용한다. 방법 1로 전체 설정을 한 후 특정 부분만 바꾸고 싶을때 이 방법을 사용한다. e.g. `<a style="color:red;">...</a>`

* 방법3) (웹 페이지가 막 100장 넘게 구성되어 있을때) `style_sheet.css` 를 사용한다. .css 문서는 위의 style tag 내에 작성한 방법과 동일하게 작성하면 된다. 
    - link tag로 css와 html을 연결한다. /rel(relationship), href(css path)
    - style sheet는 가장 먼저 등장하기때문에 각 tag안의 style attribute가 가장 높은 우선순위를 지닌다. 


## 2. Declaration
각 declaration(prperty:value)의 효과를 정리해보자.

### font 수정
- 글자 크기: `style="font-size : small;"
  - medium(default), large, xx-small, x-small, small, x-large, xx-large 도 가능
  - in(inch), cm(centimeter), px(pixel)
  - 24px
  - relative size: 150%, 50%.../body의 경우 default가 16px이라, 150%s는 24px이 되고, 50%는 8px이다. 
  - 그리고 150% = 1.5em은 같은거
  - rem?
- 글자 모양: `style="font-family : Arial;"
  - 여러개를 입력해서 만약 특정 폰트가 없을경우 대체제를 넣어준다. 모든 사용자를 배려하기 위함

### 글자 색
  - `style="color : green;"`
  - hex decimal : 0~9, A~F/FF = 256 e.g. #00FF00 는 green, #000000는 black
  - alpha: 0(transparent) ~ 1
  - 또는 "color : rgba(256,0,0,0.5);"로도 표현 가능
  - 또는 "color : hsl(120,60%,60%);"로도 표현 가능
  - 일러스트 컬러 picker 이용하기

### list styles
  - 기존 attribute로 수정했던 내용들 CSS로도 똑같이 수정가능하다. 
  - OL: upper-alpha
  - UL: circle(unfilled dot), square
  - list-style-image:를 사용하면 원하는 그림을 사용할 수 있다. 
  - list-style-type: none으로 하면 방점은 사라진다. 

### link styles
  - selector에 link status를 나타낼 수 있다. e.g. `a:link`(기본 상태), `a:visited`(한번 방문 이후), `a:hover`(마우스를 올렸을때)
  - `color:red;` 글자 색 변경하기
  - `text-decoration:none;` 밑줄 없애기
  - **HTML/Html_long_page_link.html** 파일 참


### 그 외 properties
- text 정렬: `text-align:center;`

## 3. Selector

### advanced selectors
**class**와 **id** 개념으로 한번에 여러 tag attribute를 제어하자.
- class: tag내에 `class="saw"` 로 정의하고, `<style>` tag 내에 `.saw {color:gray;}`를 적으면 saw 클래스는 모두 회색으로 보인다.
- class는 여러개를 만들 수 있고 띄어쓰기로 구분한다. e.g. `class="group1 group2" ` --> `.group1{color:gray;}`,`.group2{color:red;}` (이렇게 따로 사용 가능) 

- id: tag내에 `id="active"` 로 정의하고,  `<style>` tag 내에 `#active {color:red;}`를 적으면 active id는 모두 빨간색으로 보인다. id는 class와의 위치와 상관없이(즉 id가 class보다 더 위에 선언되어 있어도) 더 높은 우선순위를 갖는다.
- 한 id는 한 페이지에 딱 한번 쓸수있다. 

- `tag selector` < `(.)class selector`< `(#)id selector` 순으로 우선순위를 가진다. id는 단 한번, class는 몇번, tag는 무한번 사용가능한 점에서 id, class, tag 순으로 중요도가 떨어진다고 볼 수 있다. 


## 4. Box model
- 먼저 CSS를 이용해서 각 html tag의 범위를 알아보자. 
  - **block level tag**: h1의 경우와 같이 화면 전체를 사용하는 html tag
  - **inline tag**: link와 같이 자신의 크기만큼 부피를 차지하는 html tag
  - `display:inline;` 또는 `display:block` declaration을 사용하면 block level tag를 inline으로 나타낼 수 있고, inline tag를 block으로 표현할 수 있다.
  - cf. `display:none;`을 사용하면 tag 자체가 안 보인다. 
  > ```
  <style>
    h1 {
      border-width:5px;
      border-color:red;
      border-style:solid;
    }
  </style>
  ```

- **padding**(박스 내 여백), **margin**(박스 사이 여백), **width**(박스 너비) property로 box의 범위를 변경해보자.
- padding과 margin모두 처음에는 default 값으로 되어 있다. 브라우저의 개발자 도구를 사용해서 어느 부분에 수정이 필요한지 파악하자.
  > ```
  <style>
      hl{
        border:5px solid red;  <*이렇게 한줄에 쓸 수도 있다.*>
        padding: 20px;
        margin: 20px;
        width:100px;
      }
  </style>
  ```
- **float**: 한 요소(element)가 보통 흐름(normal flow)으로부터 빠지게 하고 말그대로 뜨게 한다. 텍스트 및 인라인(inline) 요소가 그 주위를 감싸게 된다.
  > ```
  <style>
      img{
        float:none <*right, left*>
        clear:left <*what the "none floated" elements will do. 다른 float element 아래 공간 중 왼쪽 상단에 위치하게 된다. *>
      }
  </style>
  ```
- 그 외 박스와 관련된 declaration
  - `border-bottom:1px solid grey;`: 박스 아래에 회색 선이 생긴다. `border-right`도 있다.
  - `padding` 외에도 `padding-left`, `padding-top`등이 있고, margin도 마찬가지이다.
  - `padding:20px 10px`:top과 bottom에는 20px을 적용하고, left와 right에는 10px을 적용한다. 
  - `padding:30px 20px 10px`:top에는 30px을 적용하고, left와 right에는 20px을, bottom에는 10px을 적용한다. 
  - `padding:40px 30px 20px 10px`:top에는 40px을 적용하고, right에는 30px을, bottom에는 20px을, left에는 10px을 적용한다. (시계 방향)
  - `overflow:hidden;`: 박스크기보다 content가 더 많을때. 넘치는 content를 안보이게 한다. `scroll`을 쓰면 스크롤로 나머지 내용을 확인할 수 있다. 
- CSS_box.html 참고하기


## 5. Grid
- 한 페이지에 병렬적으로 정보를 나타내고 싶을때
```
display:grid;
grid-template-columns: 150px 1fr:
```
  - 여기서 `1fr`은 첫번째 컬럼에 150px을 할당하고 나머지 부분을 2번째 행으로 쓰겠다는 의미.
  - 두 부분의 너비를 동일하게 하고 싶다면 `1fr 1fr`, 앞의 부분을 더 길게 하고 싶다면 `2fr 1fr` 로 작성하면 된다. 
- https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout 참고하기


## 6. Responsive web design
반응형 웹 디자인이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법을 말한다.
- 개발자 도구를 확인하면 현재 screen의 크기를 알 수 있다. (사이즈를 조절하면 우측 상단에 픽셀이 보인다.)
- 다음과 같이 미디어 쿼리를 사용하면 `800px>screen size`에서부터 display가 보이지 않는다. 
- ```
<style>
    @media(min-width:800px){
      div{
        display:none;
      }
    }
</style>
```
- 특정 조건에서 웹 레이아웃이 바뀌게 하는 방법


### Notes
- **style rule은 top-down 방식으로 적용된다.** 따라서 전역 style이 지정되어 있어도 부분별로 따로 스타일이 또 지정되어 있으면 부분 스타일을 적용한다. 
- box model과 관련된 더 많은 property는 "css box model" 키워드로 검색해보기.
- caniuse.com에서 html/css/javascript의 각 브라우저 별로 기술 지원 여부를 확인할 수 있다.(e.g. grid 검색해보기)
- <span></span> tag를 사용하면 특정 부분만 수정 가능
- <div></div>design을 나타내는 단위로 사용하기. div 내의 특정 부분만도 수정 가능
- css로도 tag의 attribute 수정 가능. 아니 CSS로 이러한 속성을 조절하는 것이 좋음
- font size와 box size모두 px, inch, cm, % 모두 사용가능하다. 
