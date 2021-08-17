### A. standard stream: 표준 입출력
* command로 실행되는 프로세스는 세 가지 스트림을 가지고 있음 
  * 표준 입력 스트림(Standard input stream): stdin
  * 표준 출력 스트림(standard output stream): stdout
  * 오류 출력 스트림(standard error stream): stderr <br>
  <img width="400" alt="Screen Shot 2021-08-17 at 9 57 46 AM" src="https://user-images.githubusercontent.com/43725183/129647124-c5a7a076-ac6a-436e-8780-aa557e29c08b.png">
* 모든 스트림은 일반적인 plain text로 console에 출력하도록 되어 있음

### B. 리다이렉션
* 리다이렉션(redirection, >, <): 표준 스트림 흐름을 바꿔줄 수 있다. <br> 
  <img width="400" alt="Screen Shot 2021-08-17 at 9 45 50 AM" src="https://user-images.githubusercontent.com/43725183/129646344-5320f27e-58f8-4700-af67-c08684d40a95.png">
* `>` 는 stdout(standard output)만 저장한다. 
  * 사실은 `1>`이고 1이 생략되어 있다. 여기서 1은 stdout 저장을 의미한다.
  * stderr(standard error)를 저장하고 싶을때는 `2>`라고 써야한다.
*  `<` 는 stdin(standard input)을 지정
    * 기존의 standard input은 키보드 입력. 
    * 예를들어, `cat < hello.txt`는 hello.txt를 입력으로 하여 hello.txt의 내용을 출력한다.<br>
    cf. cat hello.txt의 경우는 같은 결과를 출력하지만, hello.txt가 standard input으로 들어간 것이 아니라, command line argument로 들어간 것이다.
* 예시
  ```
  ls > files.txt                             #ls로 출력되는 표준 출력 스트림의 방향을 files.txt로 바꿔줌
  head < files.txt                           #files.txt의 파일 내용 중 첫 10줄이 print 된다. 
  head < files.txt > files2.txt              #files.txt의 파일 내용 중 첫 10줄이 files2.txt에 저장된다. 
  rm file.txt 1> result.txt 2> error.log     #결과는 result.txt에, 에러는 error.log에 저장된다.
  ```
* 기존 파일에 추가는 `>>` 또는 `<<` 사용
* `2>&1`: command 마지막에 이를 써주면 stderr를 stdout으로 redirection하게 해준다.
* `ls -al > /dev/null` 은 출력결과를 화면에도 띄우지 않고, 어디엔가 저장되지도 않는다. `/dev/null`은 일종의 쓰레기통

### C. 파이프
* 파이프(pipe, |): **두 프로세스 사이에서** 한 프로세스의 출력 스트림을 또다른 프로세스의 입력 스트림으로 사용할 때 사용됨. <br>
  e.g. `ls | grep files.txt` -> ls 명령으로 해당 파일에 files.txt 파일이 있는지 출력함
* `grep`: 특정 패턴 찾기
  ```
  grep “exon” genes.gtf               #genes.gtf에서 exon들어가는 부분 찾기
  grep --color “exon” genes.gtf       #exon에 색칠하기
  grep “exon” -v genes.gtf            #exon 없는 부분 찾기 (-v : avoid)
  grep -r -c issue dpkg
  grep -E “go|java|python”files.txt   #files.txt라는 파일에서 go, java, python이 있는 모든 행을 출력
  ```
