### A. 기본 명령어
  * `pwd`: 현재 디렉토리 위치
  * `cd`: 디렉토리 이동 <br> 
     e.g. `cd ..`: 이전 폴더로 이동 (폴더 명 뒤에 /해도 되고 안해도 된다)<br>
     e.g. `cd .`: 그 자리 그대로 <br>
     e.g. `cd ~`: user folder로 <br>
     cf. absolute path(절대경로) vs. relative path(상대경로)
  * `ls`: 파일 목록 출력 <br> `ls -al` 하면 현재 디렉토리(.)의 권한을 확인할 수 있다.
    * `ls {directory}`: directory 내의 모든 폴더 및 파일 list 제시
    * `ls good*.txt`: 특정 패턴을 가지는 list report. `*`는 임의 문자열, `?`는 문자 하나.
    * ls 옵션
      ```
      ls -l #용량 체크 확인 가능(use a long listing format)
      ls -lah #마찬가지로 용량 체크확인 가능
      ls -a #숨겨진 파일(.XXX)도 보여줌
      ls -S #sorting. 용량이 큰 파일부터 보여줌
      ```
  * `open` :finder 창 열기 <br>
     e.g. `open .` => 현재 directory 창 열기 <br>
     cf. ubuntu: nautilus
  * `man`: 명령어 사용법 확인 e.g. `man ls`
  * `cat`: 파일 보기 <br>
    cf. `cat -n {file}`: file line을 1,2,3,,으로 같이 보여준다. <br>
    cf. `gzcat` gzip풀어서 cat(reporting)
  * `head/tail`: 처음 또는 마지막 몇 줄 보여주기 <br> 
    cf. `head -n 5 (file)`: 다음 file의 처음 5줄 보기(옵션 설정 가능) <br>
    cf. `tail -f`: 라인이 더 추가되면 화면이 refresh 된다. 
  * `more` : `cat`을 사용해서 보기엔 파일의 양이 너무 많은 경우, 화면이 넘어가기 전까지 보여준다. 스페이스를 누르면 다음장으로, 엔터를 누르면 한줄씩 넘어감
  * `less`:   Less  is  a  program  similar  to  more(1), but which allows backward movement in the file as well as forward movement. <br>
    `-S`: Causes lines longer than the screen width to be  chopped
  * `jq`: 커맨드 라인에서 JSON을 손쉽게 다룰 수 있다. 
    ```
    $ head -1 2015-03-01-0.json | jq '.'
    ```
  * `cut`: screen size에 맞춰서 한 줄에는 한 정보만 나오도록 잘라준다.
    * `cut -f1 file`: 이렇게 하면 첫번째 컬럼을 잘라서 보여줍니다. 단 file이 tab으로 delimit (구분)되어있다고 가정함.
    * 만약 file이 `,`(콤마)로 delimit 되어 있으면, `cut -f1 -d ‘,’ file` 이렇게 -d 라는 옵션을 사용함.
    * 또는 `less`로 들어가서,  `shift + s enter` (= chop line)
  * `wc`: word count. count the lines, words, and bytes <br>
    `wc -l (file)`: file내 lines 수 <br>
    `wc -c (file)`: file내 character 수
  * `touch`: create an empty file. <br>
    `touch (file_name)` => 다음의 파일명을 지닌 파일 생성. 한번에 여러 파일을 만들수도 있다 (`touch good1.txt good2.txt good3.txt`)
    * Linux 시스템의 두가지 파일 형태
      * (1) Text file 인간과 기계둘다 읽을 수 있는 파일 => e.g. txt, csv
      * (2) Binary file  압축되어 있고, 특정 interpreter만 해석가능 => e.g. xlsx(엑셀파일을 읽기 위해서는 꼭 엑셀이 필요하다)
  * `mkdir`: make directory. `mkdir (folder_name)` => 다음의 폴더명을 지닌 폴더 생성 <br>
     cf. `mkdir -p /dir1/dir2/` 이런식으로 부모 폴더도 같이 생성할 수 있음
  * `cp`: copy. `cp (file) (destination)` => destination이 file이름이면 똑같은 file을 다른 이름으로 하나더 생성하는 것이고, destination이 folder이름이면 그 폴더로 file 복사&이동
  * `mv`: move. `mv (file) (destination)` => cp와 동일, 단 기존의 파일이 남아있지 않는다.(*되도록 사용하지 않기*) <br>
     cf. 파일 이름을 바꾸는 명령어도 mv이다. e.g. `mv tmp.txt tmp2.txt`
  * `rm`: 파일 및 폴더 삭제. 리눅스에는 기본적으로 휴지통이 없다. <br>
    `rm -rf`: 폴더 삭제 
  * `clear`: bash 창 깨끗이/이전 command 보고 싶으면 위쪽 커서 누르기
  * `history`: 이전에 사용한 command를 쭉 보여준다

<br>

### B. 파일 권한(permission)
  * `ls`와 파일 권한: 파일마다 소유자, 소유자(가 속해 있는) 그룹, 모든 사용자에 대해 읽고 쓰고 실행하는 권한 설정. <br> 소유자 접근 권한 정보는 Inode에 저장(1칸, 3칸, 3칸, 3칸)
  * `ls -al` 했을때 순서대로 권한, 소유자(e.g. egoing), 그룹정보(e.g. egoing)이다.
  * 권한: 파일/폴더 여부, 소유자 권한, 그룹 권한, 기타사용자 권한이 순서대로 명시되어 있다. <br>
    <img width="400" alt="Screen Shot 2021-08-16 at 11 11 48 AM" src="https://user-images.githubusercontent.com/43725183/129502379-ca8d0cbc-8e6e-49c5-af9d-f7c84e1fbf6f.png">

  * `chmod`: 파일 권한 변경
    * 기호 문자를 사용하는 방법(comma사이 띄우면 안된다.) <br>
      <img width="400" alt="Screen Shot 2021-08-16 at 11 12 18 AM" src="https://user-images.githubusercontent.com/43725183/129502417-b701a66f-67d3-4dd8-ad7c-d6aa1975a62b.png"><br>
      e.g. `chmod o-r {text.file}` 나 말고 아무도 못읽게하기 <br>
      e.g. `chmod -R o+w {folder}` 폴더 내부 모든 권한 한번에 변경(재귀)
    * 숫자를 사용하는 방법 <br>
      <img width="400" alt="Screen Shot 2021-08-16 at 11 13 45 AM" src="https://user-images.githubusercontent.com/43725183/129502523-d52d82c3-fe4b-4c6b-ab6a-2c19adc018de.png">

  * `chown`: 소유자 변경
    ```
    chown [옵션] [소유자:소유그룹][파일]
    ```
    * 주로 사용하는 옵션: `chown -R root:root directory` <br>
      e.g. `chown root:developer .`(현재 디렉토리의 그룹 소유자를 developer로 변경/User:group)
    * 참고) 소유자 그룹 변경 <br>
      `chgrp [옵션][그룹][파일]` e.g. `chgrp -R root directory`

