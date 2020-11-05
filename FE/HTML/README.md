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

### Images
* Image Prep
	* Change image size: Use pixel units. i.e. width 500 pixels
	* Change format: **JPEG**(Use all the original colors, quality는 60-70으로), PNG, GIF(Reduce the number of colors. Used for company logo)
* Inserting images: `<IMG src="path" width="" height="" alt="" />`
	* attribute
  	 	* width, height: 미리 그림 사이즈를 지정해주는 것이 속도에 좋다(resizing의 목적이 없어도 width와 height를 사용하는 이유). The unit is pixel.
  		* alt: alternative text. 그림이 나타나지 않는 경우 나타나는 대체 텍스트
	* `<FIGURE>...</FIGURE>`: Used to group images and captions, along with `<figcaption>`.

---


### Notes
- All multiple emtpy lines/spaces are rendered as just one space on web browser.
- Comments: `<!-- This is a comment -->` (command + /)
- Tags are NOT CASE SENSITIVE!
- Use underscore(`_`) or dash(`-`) for your html file name. File name is same as bookmark name.
- 웹 브라우저에서 `Cmd + O`로 바로 파일 열기를 할 수 있다. 
- 사용 빈도가 높은 tag 위주로 익히기: https://www.advancedwebranking.com/html/ 

### Reference
- https://en.wikipedia.org/wiki/HTML_element
- Udemy: https://www.udemy.com/share/101txaAEAdeFlSTX4A/
