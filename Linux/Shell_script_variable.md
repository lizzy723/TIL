### A. 쉘 스크립트 기본 문법
* 쉘 스크립트는 파일로 작성 후, 파일을 실행한다. 
* 파일의 가장 위의 첫 라인은 `#!/bin/bash`로 시작.
* 쉘 스크립트 파일은 실행권한을 가지고 있어야한다.(`chmod +x main.sh`)
* 일반적으로 `파일이름.sh`와같은 형태로 파일 이름을 작성한다.
* 주석은 `#`으로 시작한다. 

<br>

### B. 변수
* 선언: `변수명=데이터`(띄어쓰기 허용되지 않음)
* 사용: `$변수명`으로 사용됨
```
#!/bin/bash
mysql_id='root'
echo $mysql_id
```

<br>


### C. 리스트 변수(배열)
* 선언: `변수명=(데이터1 데이터2 데이터3...)`(띄어쓰기 허용되지 않음)
* 사용: `${변수명[인덱스번호]}`으로 사용됨
```
#!/bin/bash
daemons=("httpd" "mysqld" "vsftpd")
echo ${daemon[1]}        #두번째 인덱스에 해당하는 mysqld 출력
echo ${daemon[@]}        #모든 데이터 출력
echo ${daemon[*]}        #모든 데이터 출력
echo ${#daemon[@]}       #배열의 크기 출력
```
```
#!/bin/bash
filelist=($(ls))      #(ls의 결과값이 할당된다)해당 디렉토리의 파일 리스트를 배열로 filelist 변수에 할당
echo ${filelist[*]} 
```

<br>


### D. 사전에 정의된 지역변수
* `$$`: 쉘의 프로세스 번호(pid)
* `$0`: 쉘스크립트 이름
* `$1 ~ $9`: 명령줄 인수
* `$*`: 모든 명령줄 인수리스트
* `$#`: 인수의 개수
* `$?`: 최근 실행한 명령어의 종료 값
  * 0(성공), 1~125(에러)
  * 126(파일이 실행가능하지 않음)
  * 128~255 (시그널 발생)

```
#!/bin/bash
echo $$ $0 $1 $* $#
```
`./shell.sh kk` 를 실행하면, 28741 ./shell.sh kk kk 1이 출력된다.

<br>


### E. 연산자
* expr을 이용해 숫자 계산한다. 이때 따옴표(` ``` `)를 사용한다.
* 연산자 `*`와 괄호`()`앞에는 역슬래시를 반드시 써준다.
* 연산자와 숫자, 변수, 기호 사이에는 space를 넣어야한다.

```
num=`expr \( 3 \* 5 \) / 4 + 7`
echo $num         #10
```

<br>

### F. 환경변수

* 환경변수에 대한 이해(`ls 명령어는 현재 디렉토리에 ls 실행코드가 없음에도 불구하고 왜 실행될까?`)
  * `$PATH`는 환경변수이고, 이 변수에 담겨있는 값을 출력하고 싶을때 `echo $PATH`라고 하면 된다. 
  * 우리가 `ls`라고 입력하면, 컴퓨터는 `$PATH`에 있는 파일들을 차례대로 뒤져서 ls를 찾고, 실행한다. 
  * `$PATH`내에 있는 실행코드는 전체 path를 입력하지 않아도 명령어만 입력하면 알아서 실행된다. 


* 환경 변수 설정
  - 새 임시 환경변수 설정하기 <br>
  `$ export ENVIRONMENT_VARIABLE=value`
  - 기존 환경변수에 임시 환경변수 값 추가 설정하기<br> 
  `$ export ENVIRONMENT_VARIABLE=new_value:$ENVIRONMENT_VARIABLE`

  - 새 영구 환경변수 추가: .bash_profile 파일에<br>
  `export ENVIRONMENT_VARIABLE=new_value`
  - 기존 환경변수에 영구 환경변수 값 추가: .bash_profile 파일에<br>
  `export ENVIRONMENT_ENVIRONMENT_VARIABLE=new_value:$ENVIRONMENT_VARIABLE`<br>
  e.g. `PATH=$PATH:/usr/local/kafka/bin`
 
※ 특수문자나 기호나 들어가는 경우 큰따옴표로 묶어주어야 함. <br>
※ 터미널이 처음 실행될 때 .bash_profile 파일을 불러오므로 새 영구 환경변수를 설정한 후에는 터미널을 다시 실행해야 함. <br>
※ PATH에 바이너리가 있는 경로가 저장되어 있으면 어디서든 특정 바이너리를 실행할 수 있다. 

* 환경변수 확인
  - 모든 환경 변수 확인하기<br>
  `$ printenv`
  - 특정 환경 변수값 확인하기 <br>
  `$ echo $TERM_PROGRAM`
