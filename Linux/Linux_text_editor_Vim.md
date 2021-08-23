### A. Vimtutor

1. vim basic

    * moving the cursor
      * h(왼쪽), l(오른쪽)
      * j (아래쪽), k(위쪽)

    * start vim
      ```
      vim FILENAME <enter>
      ```

    * text editing 
      * **deletion**: x를 누르면 지울 수 있다. (normal mode에서)
      * **insertion**: i를 누르면 normal mode에서 insert mode로 변경된다. -> insert before the cursor
      * **appending**: a를 누르면 normal mode에서 insert mode로 변경된다. -> append after the cursor
      * a, i and A(문장 마지막에 추가) all go to the same Insert mode, the only difference is where
           the characters are inserted.

    * exiting vim
      * esc -> `:q!` <enter>: 저장 안하고 종료
      * esc -> `:wq` <enter> : 저장후 종료


2. Using motions & deletion & undo

    * `d + motion`: motion에 따라 다르게 지워진다.
      * w motion: 다음 단어의 첫번째 글자로 cursor 이동. 따라서 `dw`(delete word)는 해당 단어가 지워진다.
      * e motion: 다음 단어의 마지막 글자로 cursor 이동. 따라서 `de`는 해당단어와 그 다음 단어까지 지워진다.  
      * $ motion: 그 line의 가장 마지막 글자로 cursor 이동. 따라서 `d$`는 커서 이후의 그 line의 모든 글자가 지워진다.

    * 숫자(count)를 이용해서 움직이자. 
      * `2w`: cursor를 다음 두번째 단어로 이동시킴. cursor는 단어의 첫번째 글자
      * `3e`: cursor를 다음 세번째 단어로 이동시킴. cursor는 단어의 마지막 글자
      * `0`: 그 줄의 첫번째 단어로 이동

    * `d + number + motion` : `d3w`는 연속해서 3단어를 삭제한다. number는 operator가 몇번 반복될 것인지를 의미한다. 

    * `dd`: 그 line 전체를 삭제. `2dd`는 두줄을 연속으로 지운다. 

    * `u`은 마지막 명령을 취소하고, `U`는 전체 줄 하나를 다시 돌려놓는다. 

    * `ctrl + R`은 다시 실행의 의미. 

3. place, replace and change

    * `dd`로 cut한 line(-> vim register에 저장됨)을 **`p`**(place)를 누르면 그 자리에 다시 붙여준다. 
    *  글자하나를 수정할때는 cursor를 가져다 놓고 **`r`**(replace)을 누른 후 바꿀 글자를 넣는다.  여러 글자를 수정하고싶을때는 대문자 `R`을 입력한다. (Replace mode is like Insert mode, but every typed character deletes an existing character.)

    * `c + [number] + motion`: motion에 따라 다르게 바꿀 수 있다(=change)
      * w motion: `cw`(change word)는 해당 단어가 지워진다. + insert mode로 변경
      * e motion: `ce`는 해당단어 지워짐. 수정하기(Insert mode로 바뀌게 된다)
      * $ motion: `c$`는 커서 이후의 그 line의 모든 글자가 지워진다. + insert mode로 변경



4. location, search, and substitute
    * location 알아보기
      * `ctrl + g`: 파일이름과 파일내 현재 위치를 알려준다. 
      * `G`: bottom of the file로 이동
      * `gg`: start of the file로 이동
      * `[number] G`: 해당 line으로 이동 e.g. `473 G`

    * search: `/ [찾고자 하는 단어]`
      * `n`을 누르면 next로 넘어감.
      * `N`은 반대방향으로 찾음
      * 처음부터 반대 방향으로 찾고 싶으면 `/`대신 `?` 입력
      * 찾기 전 위치로 가고 싶을땐 `ctrl + o`(cf. `ctrl + i`는 goes forward)

    * 괄호 반대편을 찾고자 할때는 `%` -> `(` 위에 커서를 두고 %를 누르면 매칭되는 `)` 위치로 간다.

    * substitute
      * `:s/old/new/g`:  'old'를 'new'로 바꾼다(substitute). g(globally)를 붙이면 그 문장 내의 모든 단어가 변경되고, g를 붙이지 않으면 첫번째 단어만 변경된다. 
      * `:#,#s/old/new/g` : #,#는 변경할 라인 범위
      * `:%s/old/new/g` : 전체 파일에서 변경
      * `:%s/old/new/gc` : 전체 파일을 대상으로 찾되, 변경할지 말지는 하나하나  결정

5. shell command
    * `:! {command}` -> shell command 입력가능
    * `:w {filename}`-> 현재 작성파일 filename으로 저장(write)
    * 특정 부분만 저장하고 싶을땐,
      * `v`를 누르면 block 설정(visually selected)
      * `:w {filename}`으로 저장
    * `:r {filename}`: 외부 파일 가져오기(retreive). 커서 위치로 파일을 가져온다. 
      * `:r !ls` 와 같이 std output도 가져올 수 있다. 

6. line, copy and paste, and set options
    * line 추가
      * `o`: 커서 아래 줄에 새로운 내용을 입력할때.
      * `O`: 커서 윗 줄에 새로운 내용을 입력할때.

    * copy and paste
      * `v`: 영역 정하기
      * `y`: 복사하기 -> operator로 쓸수도 있다. e.g. `yw`는 한 단어 복사
      * `p`: 붙여넣기

    * set options
      * `:set ic`: Ignore case
      * ` /{찾고자 하는 단어}\c <ENTER>`: 한번만 ignore case 하고 싶다면
      * `:set noic` : 다시 case를 고려하도록 옵션을 바꾸고 싶다면!(즉, 앞에 no를 붙여주기)
      * `:set is`: 일부만 매칭되어도 보여준다. 
      * `:set hls`: 글자를 하이라이팅 해준다.
      * `:nohlsearch`: 하이라이팅 없애기

7. help, vimrc, and completion
    * 도움말 보기
      * `: help`을 입력하면 도움말이 뜨고
      * `ctrl + W`: window바꾸기 (현재 열고 있는 문서 <--> 도움말 문서)
      *  `: help {keyword}`: 특정 키워드 검색

    * vimrc로 feature 추가하기
      * `:e ~/.vimrc`: `.vimrc` 파일 시작하기 
      *  `:r $VIMRUNTIME/vimrc_example.vim`: vimrc 예시보기 -> "/usr/share/vim/vim81/vimrc_example.vim"

    * `:e`하고 `ctrl-D`를 입력하면 e로 시작하는 command를 모두 알려준다. 
    * tab을 누르면 자동완성이된다. 

<br>

### B. Vimrc
.vim 폴더 안에 vimrc 파일을 넣어주자.

```
.vim/
├── colors/   <- directory for color schemes
├── plugin/   <- directory for standard plugins
└── vimrc     <- file with main config
```

* 본인이 이해하는 configuration 만 넣기(즉, 남의것 복붙 금지)
* 추가하면 좋은 feature들
  * Add a color scheme -> **badwolf**
  * Turn on syntax highlighting
  * Set up spaces and tabs  -> **done**
  * Set up auto indentation -> **done**
  * Turn on line numbers -> **done**
  * Find files in subfolders with tab completion 
  * Configure a faster way to hit ESC to exit insert mode (I changed my caps lock key to CTRL and use CTRL C to exit insert mode)


```
syntax enable  #enable syntax processing. 첫줄에 적어주기
"  #comment
```


1. color설정 
  * https://github.com/sjl/badwolf/blob/master/colors/badwolf.vim 에서 vim 파일 다운받아서 `~/.vim/color`에 저장하고
  * `.vimrc`에 `colorscheme badwolf` 입력
  * 이외에도 solarized(https://github.com/altercation/Vim-colors-solarized), molokai(https://github.com/tomasr/molokai) 등이 있다. 
 
2. spaces and tabs
  * `set tabstop=4`: tab 간격을 스페이스 4개와 동일하게 보여준다. 
  * `set softtabstop=4` : 실제로 tab을 입력하면 스페이스 4개가 들어가고, tab을 지우면 스페이스 4개가 지워진다. 
  * `set expandtab`: 모든 tab은 스페이스로 처리됨. 
  * 위의 세 옵션을 설정하면 -> Ensures no <TAB>s are actually used.  

3. UI config
  * `set number`: line number
  * `set cursorline`: 현재 커서가 있는 라인 전체에 표시
  * `set showmatch`: 매칭되는 괄호 표시
  * `filetype indent on`: 파일 유형에 따라 탭간격 조정

4. Search
  * `set incsearch`: 일부만 매칭되어도 보여준다. 
  * `set hlsearch`: 글자를 하이라이팅 해준다.

5. find files
  * `set path+=**`: 별 두개는 recursive하게 파일을 찾아준다.
  * `set wildmenu`: tab을 누르면 파일 리스트를 보여준다. 
  * https://www.youtube.com/watch?v=XA2WjJbmmoM&t=408s

<br>
  
### C. Plugins

<br>
  
### D. verbs and nouns

1. verbs and nouns
  * Verbs — d (delete), c (change), y (yank/copy), > (indent)
  * Nouns (motions) — w (word), b (back a word), 2j (down 2 lines)
  * Nouns (text objects) — iw (inner word), it (inner tag), i” (inner quotes)

2. examples
  * `dw` to delete to the end of a word
  * `diw` to delete the entire word at the cursor
  * `y4j` to copy 4 lines
  * `cit` to change the content inside an HTML tag


---
**참고자료**: https://medium.com/actualize-network/how-to-learn-vim-a-four-week-plan-cd8b376a9b85
