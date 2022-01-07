### A. 반복문 작성하기
* 기본 for 구문
  ```
  for 변수 in 변수값1 변수값2 ...
  do
    명령문
  done
  ```
* for 구문 한줄에 쓰기
  ```
  for 변수 in 변수값1 변수값2 ...; do  명령문; done
  ```
* 순차적으로 증가하면서 반복: 점 2개다.
  ```
  for var in {1..5}
  do
    touch P0$var.cpp
  done
  ```
* 기본 while 구문
  ```
  while [ 조건문 ]
  do
    명령문
  done
  ```
  
### B. 예시
* 현재 디렉토리에 있는 파일과 디렉토리를 출력하라(**while문**)
  ```
  #!/bin/bash
  lists = $(ls)
  num=${#lists[@]}
  index=0
  while [ $num -ge 0 ]
  do
      echo ${lists[$index]}
      index=`expr $index + 1`
      num=`expr $num - 1`
  done
  ```

* 현재 디렉토리에 있는 파일과 디렉토리를 출력하라(**for문**)
  ```
  #!/bin/bash
  for database in $(ls)
  do
      echo $database
  done
  ```
* 현재 디렉토리에 있는 bam파일의 인덱스 만들기
  ```
  $for f in *.bam
  for> do
  for> samtools index $f   
  for> done
  ```
