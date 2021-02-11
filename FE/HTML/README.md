# HTML: Hypertext Markup Language

## Table of contents

1. [Tag](#1-tag)
2. [Document structure elements](#2-document-structure-elements)
3. [Document head elements](#3-document-head-elements)
4. [Document body elements](#4-document-body-elements)
5. [Notes](#5-notes)


## 1. Tag
![image](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)
- Tags are used to delimit the start and end of elements in the markup.
- Tag without `/`(**opening tag**) starts an instrunction, and a tag with `/`(**closing tag**) ends the instruction.
- Make **indentations** to show **nested tags**.
- **Void tag** : Single line instruction. Instead of closing tag, insert backslash(/) at the end. 
- **HTML attribute**: HTML attributes are special words used inside **the opening tag** to control the element's behaviour. `attribute="value"`. Seperate multiple attribute with a **space**.



## 2. Document structure elements

1. doctype
	- starts with `!`. Every html file starts with `<!doctype html>`

2. html: `<html>...</html>`
	- The root element of an HTML document; all other elements are contained in this.

3. head: `<head>...</head>`
	- Container for processing information and metadata for an HTML document. **Not viewable** on the page itself.

4. body: `<body>...</body>`
	- Container for the **displayable content** of an HTML document.



## 3. Document head elements	

* `<meta />`: Can be used to specify additional metadata about a document, such as its author, publication date, expiration date, language, page title, page description, keywords, or other information not provided through the other header elements and HTML attributes. Also include the page encoding attribute `charset="UTF-8"`
* `<title>...</title>`: This tag defines a document title, browser tab, and bookmark name.
* style 관련 tag: `<link>...</link>`, `<style>...</style>`(자세한 내용은 CSS readme 참조)

 

## 4. Document body elements	

### A. General
* `<h1>...</h1>`,`<h2>...</h2>`, `<h3>...</h3>`,`<h4>...</h4>`,`<h5>...</h5>`,`<h6>...</h6>`: a heading
* `<p>...</p>`: a paragraph. Between paragraphs, there's a single line.
* `<br/>`: One break is same as pressing Enter. Two break tags separate paragraph with a single empty line.
* `<strong>...</strong>` or `<b>...</b>`: Bold
* `<em>...</em>` or `<i>...</i>`: Italic
* `<u>...</u>`: Underline


### B. List 
* `<ol>...</ol>` / `<ul>...</ul>`: ordered list / unordered list
	* `<li>...</li>`: list item
* Nested lists are also possible!
* `<dl>...</dl>`: definition list
	* `<dt></dt>`: definition term
	* `<dd></dd>`: definition description
* Add attribute to change style(e.g. `<OL type="a">`): A(Capital letter), a(lower letter), I(Roman), i(Roman)


### C. Other block elements
> cf. 블록 레벨과 인라인 요소의 분류는 HTML 명세 4.01까지 사용됐습니다. 이런 이진적 구분은 HTML5부터 보다 복잡한 콘텐츠 카테고리 집합으로 대체됐습니다.
* `<section>...</section>`: make a section
* `<article>...</article>`: Used for articles and other similar content.
* `<aside>...</aside>`: Used for content in a document which is separate from the main page content, for example, sidebars or advertising.
* `<blockquote>...</blockquote>`: To indent them from both margins.



### D. Link
* `<a>...</a>`: anchor. 다른 웹페이지를 link하는 아래 예시를 살펴보자. 
	* attribiute `href`에 URL을 나타낸다. 
	* attribiute `target="_blank"`는 새 탭이 열리게 해준다.
	* attribiute `title = "html5 specification"` 마우스를 가져다 대면, 툴팁으로 html5 specification이 뜬다.
	> e.g. `<a href="http://example.com#contents" target="_blank" title = "html5 specification">...</a>`
* 웹 페이지 이외에도 href 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만들 수 있다. 
	* 같은 페이지의 어느 위치 연결하기
		* `<nav>...</nav>`: defines a set of navigation links. `<a>`tag를 작성하기 전에 일종의 semantic tag를 사용해서 navigation 역할을 한다는 것을 알려주자. 
		* id selector를 이용한다. `<a href="#section1">Link 1</a>...<h2 id="section1">Link 1 Location</h2>`
	* 다른 페이지의 특정 tag로 link를 걸고 싶다면 `href="page.html#{id}"`로 표기하면 된다. 
	* 이미지를 link로 사용할 수도 있다. 
  	* 메일 보내기를 연결할 수도 있다. `<a href="mailto:someone@somedomain.com?Subject=Contact">Contact Us</a>`
* link의 default style은 CSS로 변경하도록 하자. (**Html_long_page_link.html** 파일과 CSS readme 참조)




### E. Images
* Image Prep
	* Change image size: Use pixel units. i.e. width 500 pixels
	* Change format: **JPEG**(Use all the original colors, quality는 60-70으로), **PNG**, **GIF**(Reduce the number of colors. Used for company logo)
* Inserting images: `<IMG src="path" width="" height="" alt="" />`
	* attribute
  	 	* width, height: 미리 그림 사이즈를 지정해주는 것이 속도에 좋다(resizing의 목적이 없어도 width와 height를 사용하는 이유). The unit is pixel.
  		* alt: alternative text. 그림이 나타나지 않는 경우 나타나는 대체 텍스트
	* `<FIGURE>...</FIGURE>`: Used to group images and captions, along with `<figcaption>`.
	```
	<FIGURE>
		<IMG src="../course material/Working+Files/Working Files/Section 2 Basics/golden-gate-sm.jpg" width="500" height="213" alt="A picture of the golden gate bridge" />
		<FIGCAPTION>A picture of the golden gate bridge</FIGCAPTION>
	</FIGURE>
	```
	

### F. Table
* table 관련 tag(**Html_table.html** 파일 참고하기)
  * `<table>...</table>`: table
  * `<caption>...</caption>`: table title
  * `<thead>...</thead>`: table head
  	* `<tr>...</tr>`: table row
    	* `<th>...</th>`: table heading
  * `<tbody>...</tbody>`, `<tfoot>...</tfoot>`: table body, tail foot 
    	* `<tr>...</tr>`: table row
    	* `<td>...</td>`: table data
  * `<thead>`, `<tbody>`, `<tfoot>`은 semantic tag이며 따라서 design이 없다. 
* table style
  * `<td colspan="2"></td>`: column 두개의 너비를 쓴다. (왼쪽 정렬된다.)
  * `<td rowspan="2"></td>`: row 두개의 너비를 쓴다. (중앙 정렬 된다.)
  * 이외의 style 변경은 css를 사용하기. 주의할 부분은 특정 cell의 width나 height를 조절하면 열 또는 행 전체가 변경된다는 점이다. 


### G. Form
* `<form></form>`은 다음의 두가지 attribute를 가져야한다.
  * `action="form-submit.php"`: 어느 서버로 보낼 것인지
  * `method="post"`: 어떻게 보낼 것인지. secure하게 보내려면 post, 아니면 get도 사용할 수 있다. 
* form을 구성하는 tag들
  * `<input>`:  `type` attribute에 따라 그 기능이 현격히 달라진다. (**Html_form.html** 파일 참조)
  	* `type="text"`: "text"외에 "checkbox"(복수 응답 가능), "radio"(복수 응답 불가능), "email"(이메일 형식), "password"(입력 문자가 안 보인다.), "number","range"(min, max도 지정해주기. value는 초기값 설정), "date", "time"
    	* `name="first_name"`
    	* `placeholder="enter a valid address"`
    	* `autofocus`는 자동으로 커서가 form안에 생기도록 해준다. 
    	* `required`는 꼭 채워야하는 form을 지정한다. 
    	* form 마지막에는 `<input type="submit" value="Send">`를 해준다. 
  * `<textarea></textarea>`: 여러줄에 걸쳐서 응답 가능.
  * `<select></select>`과 그 내부에 정의한 `<option></option>`: dropdown 선택 기능
* `<fieldset>` : html5에서 새로 생긴 form을 그룹으로 묶는 tag. `<legend></legend>`로 legend를 넣어줄 수도 있다. 
* `<label for="id-name"></label>`과 `<input id = "id-name">`(또는 `<textarea>`, `<select>`)이 한 쌍이 될 수 있도록 구성한다. 그리고 CSS를 사용해서 스타일을 넣어준다. 


### H. Video
* 먼저 video를 스트리밍 형태로 전환한다. (전환툴 예시: http://www.mirovideoconverter.com/)
* `<video src="latte-pour.mp4" width=640px height=360px autoplay poster="latte-poster.jpg">...</video>`
  * image와 마찬가지로 미리 너비와 높이를 지정하도록 한다.
  * tag 사이에는 비디오 재생이 안되는 경우 표시할 메세지를 적도록 한다. e.g. Your browser does not support video playback
  * `autoplay`대신 `controls`를 쓰면 사용자가 동영상을 제어할 수 있다. 
  * poster attribute는 동영상 재생 전에 동영상 위치에 보여주는 이미지를 설정할 수 있다. 
  * video tag와 source tag를 분리하여 모든 소스를 사용하는 것이 좋다. 웹 브라우저는 순서대로 확인해보고 첫번째 재생 가능한 소스를 재생할 것이다. 
  ```
  <video width=640px height=360px autoplay poster="latte-poster.jpg">
    <source src="latte-pour.mp4" type="video/mp4" />
    <source src="latte-pour.webmhd.webm" type="video/webm" />
    <source src="latte-pour.oggtheora.ogv" type="video/ogg" />
    Your browser does not support video playback
  </video>
  ```
* audio도 유사한 방법으로 마크업 할 수 있다. i.e., `<audio controls>...</audio>`



## 5. Notes
- 시각적인 요소도 중요하지만, **올바른 tag에 맞는 내용을 담는 것**이 더 중요하다.
- Tags are NOT CASE SENSITIVE!
- 사용 빈도가 높은 tag 위주로 익히기: https://www.advancedwebranking.com/html/ 
- `<br/>` vs. `<p>...</p>`: paragraph임을 나타내는 `<p>` tag를 사용하는 것이 더 좋다. `<p>` tag + CSS를 사용하면 문단간의 간격도 조절할 수 있다. 
    > `<p style="margin-top:48px;">`
- `<div>...</div>`는 이 부분의 특별한 의미는 없지만, 특정한 디자인(그리드)을 적용하기 위한 tag이다. 이는 block level의 tag이고, 같은 기능을 하지만 inline level의 tag인 `<span></span>`이 있다. cf. css readme box model 및 grid 부분 설명 참조
- javascript 코드는 `<script>...javascript code...</script>>` tag를 활용한다. 
- All multiple emtpy lines/spaces are rendered as just one space on web browser.
- Comments: `<!-- This is a comment -->` (command + /)
- Use underscore(`_`) or dash(`-`) for your html file name. File name is same as bookmark name.
- 동영상 삽입(`<iframe>`), 댓글기능 추가(DISQUS), 채팅기능 추가(https://www.tawk.to) 및 웹페이지 분석기 사용(e.g. google analytics)도 가능하다.



## Reference
- https://en.wikipedia.org/wiki/HTML_element
- https://www.udemy.com/share/101txaAEAdeFlSTX4A/ (udemy)

