# CSS: Cascading Style Sheets 
마크업 언어가 실제 **표시**되는 방법을 기술하는 언어

## Table of contents

1. [CSS 기본 syntax](#1-css-기본-syntax)


## 1. CSS 기본 syntax

* 방법1) **style tag**를 사용한다 e.g. 아래 예시처럼 head tag안에 `<style></style>`태그로 a tag 안의 모든 글자를 빨강색으로 바꿀 수 있다.(여기서 `a`는 **selector**, `color:red;`는 **declaration(property:value)** 이라고 부른다)
```
<style>
    a {   
        color:red;
        text-decoration:none;
    }
</style>
```
* 방법2) 각 tag 안의 **style attribute**를 사용한다. e.g. `<a style="color:red;">...</a>`
* 방법3) style sheet (웹 페이지가 막 100장 넘게 구성되어 있을때) --> css
  - tag추가는 콤마로
  - link tag로 css와 html을 연결/rel(relationship), href(css path)
  - 여기서도 style sheet는 먼저 등장하기때문에 각 tag안의 style attribute가 가장 높은 우선순위를 지닌다. 

- syntax: `style=" : ;"`
- 파일 전체에 적용: <style> p{...} </style>
- **style rule은 top-down 방식으로 적용된다.** 따라서 전역 style이 지정되어 있어도 부분별로 따로 스타일이 또 지정되어 있으면 부분 스타일을 적용한다. 

---

## 2. font 수정
- 글자 크기: `style="font-size : small;"
  - medium(default), large, xx-small, x-small, small, x-large, xx-large 도 가능
  - in(inch), cm(centimeter), px(pixel)
  - 24px
  - relative size: 150%, 50%.../body의 경우 default가 16px이라, 150%s는 24px이 되고, 50%는 8px이다. 
  - 그리고 150% = 1.5em은 같은거
  - rem?
- 글자 모양: `style="font-family : Arial;"
  - 여러개를 입력해서 만약 특정 폰트가 없을경우 대체제를 넣어준다. 모든 사용자를 배려하기 위함


## 3. 글자 색
  - `style="color : green;"
  - hex decimal : 0~9, A~F/FF = 256 e.g. #00FF00 는 green, #000000는 black
  - alpha: 0(transparent) ~ 1
  - 또는 "color : rgba(256,0,0,0.5);"로도 표현 가능
  - 또는 "color : hsl(120,60%,60%);"로도 표현 가능
  - 일러스트 컬러 picker 이용하기


## 4. list styles
  - 기존 attribute로 수정했던 내용들 CSS로도 똑같이 수정가능하다. 
  - OL: upper-alpha
  - UL: circle(unfilled dot), square
  - list-style-image:를 사용하면 원하는 그림을 사용할 수 있다. 
  - list-style-type: none으로 하면 방점은 사라진다. 

## 5. advanced selectors
  - class와 id 개념으로 한번에 여러 tag attribute를 제어하자. 
    - class를 만들고, 이를 나타내기 위해 .(period)를 찍는다. 
    - id를 만들고, 이를 나타내기 위해 #(pound)를 찍는다.  --> 한 id는 한 페이지에 딱 한번 쓸수있다. 
  - <span></span> tag를 사용하면 특정 부분만 수정 가능
  - <div></div>
  - css로도 attribute 수정 가능
  - div 내의 특정 부분만도 수정 가능


  - url(universe resource location)
