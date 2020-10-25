# HTML(Hypertext Markup Language)

---

## 1. Tag
- Tags are used to delimit the start and end of elements in the markup.
- Tag without `/` starts an instrunction, and a tag with `/` ends the instruction.
- Make **indentations** to show **nested tags**.
- Void tag: Single line instruction. Instead of closing tag, insert backslash(/) at the end. e.g. META

---

## 2. Elements and text basic

#### A. doctype
starts with `!`. Every html file starts with `<!doctype html>`

#### B. html
The root element of an HTML document; all other elements are contained in this.

#### C. head
Container for processing information and metadata for an HTML document. Not viewable on the page itself.

- `<title>...</title>`: Browser tab. Bookmark name
- `<meta />`: `attribute=value`. Seperate multiple attribute with a **space**.

#### D. body
Container for the displayable content of an HTML document.

- `<h1>...</h1>`,`<h2>...</h2>`, `<h3>...</h3>`,`<h4>...</h4>`,`<h5>...</h5>`,`<h6>...</h6>`: a heading
- `<p>...</p>`: a paragraph. Between paragraphs there's a single line.
- `<br/>`: One break is same as pressing Enter. Two break tags separate paragrapph with a single empty line.
- `<strong>...</strong>` or `<b>...</b>`: Bold
- `<em>...</em>` or `<i>...</i>`: Italic


#### E. Block element
- `<section>...</section>`: make a section
- `<article>...</article>`: Used for articles and other similar content.
- `<aside>...</aside>`: Used for content in a document which is separate from the main page content, for example, sidebars or advertising.
- `<blockquote>...</blockquote>`: To indent them from both margins.

---

## 3. List tags
- `<OL></OL>`: ordered list
- `<UL></UL>`: unordered list
- `<LI></LI>`: list item
- Nested lists are also possible!
- Add attribute to change style: A(Capital letter), a(lower letter), I(Roman), i(Roman)
- `<DL></DL>`: definition list
  - `<DT></DT>`: definition term
  - `<DD></DD>`: definition description

---

## 4. Images
- Image Prep
  - Change image size: Use pixel units. i.e. width 500 pixels
  - Change format: **JPEG**(Use all the original colors, quality는 60-70으로), PNG, GIF(Reduce the number of colors. Used for company logo)
-  Inserting images: `<IMG src="path" width="" height="" alt="" />`
  - attribute
  	- width, height: 미리 원래 그림 사이즈를 지정해주는 것이 속도에 좋다.(resizing의 목적이 없어도 width와 height를 사용하는 이유) The unit is pixel.
  	- alt: alternative text. 그림이 나타나지 않는 경우 나타나는 대체 텍스트
  - `<FIGURE></FIGURE>`: Used to group images and captions, along with `<figcaption>`.

---

## 5. Tips
- All multiple emtpy lines/spaces are rendered as just one space on web browser.
- comment: `<!-- This is a comment --> (`command + /`)
- Tags are NOT CASE SENSITIVE!
- Use underscore(`_`) or dash(`-) for your html file name. File name is same as bookmark name.
