# HTML: Hypertext Markup Language

## Table of contents

1. [Tag](#1-tag)
2. [Document structure elements](#2-document-structure-elements)
3. [Document head elements](#3-document-head-elements)
4. [Document body elements](#4-document-body-elements)


## 1. Tag
- Tags are used to delimit the start and end of elements in the markup.
- Tag without `/` starts an instrunction, and a tag with `/` ends the instruction.
- Make **indentations** to show **nested tags**.
- Void tag: Single line instruction. Instead of closing tag, insert backslash(/) at the end. 
- **HTML attribute**: HTML attributes are special words used inside _the opening tag_ to control the element's behaviour. `attribute=value`. Seperate multiple attribute with a **space**.



## 2. Document structure elements

1. doctype
	- starts with `!`. Every html file starts with `<!doctype html>`

2. html: `<html>...</html>`
	- The root element of an HTML document; all other elements are contained in this.

3. head: `<head>...</head>`
	- Container for processing information and metadata for an HTML document. Not viewable on the page itself.

4. body: `<body>...</body>`
	- Container for the displayable content of an HTML document.



## 3. Document head elements	

* `<title>...</title>`: This tag defines a document title. Browser tab. Bookmark name
* `<meta />`: Can be used to specify additional metadata about a document, such as its author, publication date, expiration date, language, page title, page description, keywords, or other information not provided through the other header elements and HTML attributes. 
* `<style>...</style>`

 

## 4. Document body elements	

### Basic text
* `<h1>...</h1>`,`<h2>...</h2>`, `<h3>...</h3>`,`<h4>...</h4>`,`<h5>...</h5>`,`<h6>...</h6>`: a heading
* `<p>...</p>`: a paragraph. Between paragraphs, there's a single line.

### General
* `<br/>`: One break is same as pressing Enter. Two break tags separate paragraph with a single empty line.
* `<strong>...</strong>` or `<b>...</b>`: Bold
* `<em>...</em>` or `<i>...</i>`: Italic
* `<u>...</u>`: Underline


### List 
* `<OL>...</OL>` / `<UL>...</UL>`: ordered list / unordered list
	* `<LI>...</LI>`: list item
* Nested lists are also possible!
* Add attribute to change style: A(Capital letter), a(lower letter), I(Roman), i(Roman)
* `<DL>...</DL>`: definition list
	* `<DT></DT>`: definition term
	* `<DD></DD>`: definition description

### Other block elements
* `<section>...</section>`: make a section
* `<article>...</article>`: Used for articles and other similar content.
* `<aside>...</aside>`: Used for content in a document which is separate from the main page content, for example, sidebars or advertising.
* `<blockquote>...</blockquote>`: To indent them from both margins.


### Link
* `<a>...</a>`: anchor. 다른 웹페이지를 link
	* attribiute `href`에 URL을 나타낸다. 
	* attribiute `target="_blank"`는 새 탭이 열리게 해준다.
	* attribiute `title = "html5 specification"` 마우스를 가져다 대면, 툴팁으로 html5 specification이 뜬다.
	> e.g. `<a href="http://example.com#contents" target="_blank" title = "html5 specification">...</a>`
* `<nav>...</nav>`: defines a set of navigation links. 일종의 semantic tag를 사용해서 navigation 역할을 한다는 것을 알려주자. 
* 다양한 Link 활용법: Link를 사용해서 Website가 완성되도록 하자.
  * 이미지를 link로 사용할 수도 있다. 
  * 메일 보내기를 연결할 수도 있다. `<a href="mailto:someone@somedomain.com?Subject=Contact">Contact Us</a>`
  * id selector를 이용해서 한 문서 내에서 link를 사용할 수도 있다.(**Html_long_page_link.html** 파일 참조) 다른 페이지의 특정 tag로 link를 걸고 싶다면 `href="page.html#{id}"`로 표기하면 된다. 
* default link style CSS로 변경하기(**Html_long_page_link.html** 파일과 CSS readme 참조)




### Images
* Image Prep
	* Change image size: Use pixel units. i.e. width 500 pixels
	* Change format: **JPEG**(Use all the original colors, quality는 60-70으로), PNG, GIF(Reduce the number of colors. Used for company logo)
* Inserting images: `<IMG src="path" width="" height="" alt="" />`
	* attribute
  	 	* width, height: 미리 그림 사이즈를 지정해주는 것이 속도에 좋다(resizing의 목적이 없어도 width와 height를 사용하는 이유). The unit is pixel.
  		* alt: alternative text. 그림이 나타나지 않는 경우 나타나는 대체 텍스트
	* `<FIGURE>...</FIGURE>`: Used to group images and captions, along with `<figcaption>`.

### Table
* table 관련 tag
  * `<table>...</table>`: table
  * `<caption>...</caption>`: table title
  * `<thead>...</thead>`: table head
    * `<th>...</th>`: table heading
  * `<tbody>...</tbody>`, `<tfoot>...</tfoot>`: table body, tail foot 
    * `<tr>...</tr>`: table row
    * `<td>...</td>`: table data
  * `<thead>`, `<tbody>`, `<tfoot>`의 default design은 사실 아무 것도 없다. 
* table style
  * **Html_table.html** 파일 참고하기
  * `<td colspan="2"></td>`: column 두개의 너비를 쓴다. (왼쪽 정렬된다.)
  * `<td rowspan="2"></td>`: row 두개의 너비를 쓴다. (중앙 정렬 된다.)
  * 특정 cell의 width나 height를 조절하면 열 또는 행 전체가 변경된다. 


### Form
* `<form></form>`은 다음의 두가지 attribute를 가져야한다.
  * `action="form-submit.php"`: 어느 서버로 보낼 것인지
  * `method="post"`: 어떻게 보낼 것인지. secure하게 보내려면 post, 아니면 get도 사용할 수 있다. 
* form을 구성하는 tag들
  * `<input>`: form을 구성하는 input tag도 두가지 attribute를 가져야한다. 
    * `type="text"`: "text"외에 "checkbox"(복수 응답 가능), "radio"(복수 응답 불가능), "email"(이메일 형식), "password"(입력 문자가 안 보인다.), "number","range"(min, max도 지정해주기. value는 초기값 설정), "date", "time"(Html_form.html 파일 참조)
    * `name="first_name"`
    * `placeholder="enter a valid address"`
    * `autofocus`는 자동으로 커서가 form안에 생기도록 해준다. 
    * `required`는 꼭 채워야하는 form을 지정한다. 
    * form 마지막에는 `<input type="submit" value="Send">`를 해준다. 
  * `<textarea></textarea>`: 여러줄에 걸쳐서 응답 가능.
  * `<select></select>`, `<option></option>`: dropdown 선택 기능
* `<fieldset>` : html5에서 새로 생긴 form을 그룹으로 묶는 tag. `<legend></legend>`로 legend를 넣어줄 수도 있다. 
* `<label for="id-name"></label>`과 `<input id = "id-name">`이 한 쌍이 될 수 있도록 구성한다. 그리고 CSS를 사용해서 스타일을 넣어준다. 


### Video
* 먼저 video를 스트리밍 형태로 전환한다. (http://www.mirovideoconverter.com/ 이런 툴을 사용하면 된다.)
* `<video src="latte-pour.mp4" width=640px height=360px autoplay poster="latte-poster.jpg">...</video>`
  * image와 마찬가지로 미리 너비와 높이를 지정하도록 한다.
  * tag 사이에는 비디오 재생이 안되는 경우 표시할 메세지를 적도록 한다. e.g. Your browser does not support video playback
  * `autoplay`대신 `controls`를 쓰면 사용자가 동영상을 제어할 수 있다. 
  * poster attribute는 동영상 재생 전에 동영상 위에 이미지를 겹쳐서 보여준다. 
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

---


### Notes
- 시각적인 요소도 중요하지만, **올바른 tag에 맞는 내용을 담는 것**이 더 중요하다.
- All multiple emtpy lines/spaces are rendered as just one space on web browser.
- Comments: `<!-- This is a comment -->` (command + /)
- Tags are NOT CASE SENSITIVE!
- Use underscore(`_`) or dash(`-`) for your html file name. File name is same as bookmark name.
- 웹 브라우저에서 `Cmd + O`로 바로 파일 열기를 할 수 있다. 
- 사용 빈도가 높은 tag 위주로 익히기: https://www.advancedwebranking.com/html/ 
- `<br/>` vs. `<p>...</p>`: paragraph임을 나타내는 `<p>` tag를 사용하는 것이 더 좋다. `<p>` tag + CSS를 사용하면 문단간의 간격도 조절할 수 있다. 
    > `<p style="margin-top:48px;">`
- `command`키를 누르면 여러개의 커서를 동시에 생성할 수 있다.
- tag와 element는 동일한 의미다. 
- 동영상 삽입(`<iframe>`), 댓글기능 추가(DISQUS), 채팅기능 추가(https://www.tawk.to) 및 웹페이지 분석기 사용(e.g. google analytics)도 가능하다.
- `<div>...</div>`는 이 부분의 특별한 의미는 없지만, 특정한 디자인(그리드)을 적용하기 위한 tag이다. 이는 block level의 tag이고, 같은 기능을 하지만 inline level의 tag인 `<span></span>`이 있다. cf. css readme box model 및 grid 부분 설명 참조
- javascript 코드는 `<script>...javascript code...</script>>` tag를 활용한다. 

### Reference
- https://en.wikipedia.org/wiki/HTML_element
- Udemy: https://www.udemy.com/share/101txaAEAdeFlSTX4A/

### Files
- 실습 파일: `Html_element_text.html`, `Html_images.html`, `Html_lists.html`, `Html_table.html`
- (udemy에서 제공한)project 실습 파일: `Html_project_index.html`, `Html_project_grinding.html`, `Html_project_brewing.html`, `Html_project_roasting.html`