### A. 조건문 작성하기
* if 구문: 명령문을 꼭 탭으로 띄워야 하는 것은 아님(then과 fi 안에만 들어가 있으면 됨)
  ```
  if [조건]
  then 
    명령문
  fi
  ```
* if/else 구문
  ```
  if [ 조건]
  then 
    명령문
  else
    명령문
  fi
  ```
* 조건문 한 줄에 작성하기
  ```
  if [ 조건 ]; then  명령문; fi
  ```
  * `[` 뒤와 `]` 앞에는 반드시 공백이 있어야 한다.
  * `[]`에서 `&&`, `||`, `>`, `<` 연산자들이 에러가 나는 경우는 `[[]]`를 사용하면 정상 작동하는 경우가 있음

* 쉘 스크립트 예시
  ```
  ping -c 1 192.168.0.1 > /dev/null
  if [ $? == 0 ]
  then 
    echo "게이트웨이 핑 성공"
  else 
    echo "게이트웨이 핑 실패"
  fi
  ```

### B. 조건
* 문자비교
  ```
  문자1 == 문자2      #equal
  문자1 != 문자2      #not equal
  -z 문자            #문자가 null이면 참
  -n 문자            #문자가 null이 아니면 참
  ```
* 수치비교
  ```
  값1 -eq 값2   #equal
  값1 -ne 값2   #not equal
  값1 -lt 값2   #less than
  값1 -le 값2   #less or equal
  값1 -gt 값2   #greater than
  값1 -ge 값2   #greater or equal
  ```
* 파일 검사
  ```
  -e 파일명      #파일이 존재하면 참
  -d 파일명      #파일이 디렉토리면 참
  -h 파일명      #심볼릭 링크 파일
  -f 파일명      #파일이 일반파일이면 참
  -r 파일명      #파일이 읽기 기능이면 참
  -s 파일명      #파일 크기가 0이 아니면 참
  -u 파일명      #파일이 set-user-id가 설정되면 참
  -w 파일명      #파일이 쓰기 가능 상태이면 참
  -x 파일명      #파일이 실행 가능 상태이면 참
  ```
* 논리연산
  ```
  조건1 -a 조건2    # AND
  조건1 -o 조건2    # OR
  조건1 && 조건2    # 양쪽 다 성립
  조건1 || 조건2    # 한쪽 또는 양쪽 다 성립
  !조건            # 조건이 성립하지 않음
  true            # 조건이 언제나 성립
  false           # 조건이 언제나 성립하지 않음
  ```
  
### C. 예시
* `./ifelse.sh 1 1`의 결과 "same values"가 출력된다.
  ```
  if [ $1 -eq $2 ]
  then 
      echo "same values"
  else
      echo "different values"
  fi
  ```
* `./if3.sh files.txt`의 결과 "file exist"가 출력된다.
  ```
  #!/bin/bash
  if [ -e $1 ]
  then 
      echo "file exist"
  fi
  ```
* `./if2.sh 2 1 `의 결과 "2 is greater than 1"가 출력된다.
  ```
  #!/bin/bash
  if [ $1 -gt $2 ]
  then 
      echo "$1 is greater than $2"
      exit
  fi
  ```
* `./if.sh 2 1 `의 결과 "different values"가 출력된다.
  ```
  #!/bin/bash
  if [ $1 != $2 ]
  then 
      echo "different values"
      exit
  fi
  ```
* 만약 bak 폴더가 없다면, 만들고 → log 확장자 파일을 모두 bak으로 옮겨라.
  ```
  #!/bin/bash
  if ! [ -d bak ]; then
    mkdir bak
  fi
  cp *log bak
  ```
* 백업하기
  ```
  #!/bin/bash
  if [ -z $1 ] || [ -z $2]; then
      echo usage: $0 sourcedir targetdir
  else
      SRCDIR=$1
      DSTDIR=$2
      BACKUPFILE=backup.$(date + %y%m%d%H%M%S).tar.gz
      if [ -d $DSTDIR]; then
          tar -cvzf $DSTDIR/$BACKUPFILE $SRCDIR
      else
          mkdir $DSTDIR
          tar -cvzf $DSTDIR/$BACKUPFILE $SRCDIR
      fi
  fi
  ```

