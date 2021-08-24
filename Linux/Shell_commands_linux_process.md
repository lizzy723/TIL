### A. 프로세스 vs. 바이너리
* **바이너리**(= 코드 이미지): 실행파일(저장매체에 저장되어 있음)
* **프로세스**: 실행중인 프로그램(코드가 메모리에 복사되어서 한줄씩 실행되는 상태). 아래의 상태 정보가 추가적으로 생성된다. 
  * 가상메모리 및 물리 메모리 정보
  * 시스템 리소스 관련 정보
  * 스케쥴링 단위
* 리눅스는 기본적으로 다양한 프로세스가 실행됨.

### B. foreground process / background process
* **foreground process**: shell 에서 해당 프로세스 실행을 명령한 후, 해당 프로세스 수행 종료까지 사용자가 다른 입력을 하지 못하는 프로세스
  ```
  gcc loop.c -o loop          #C 파일. 컴파일(gcc: GNU C Compiler)
  ./loop                      #loop 프로그램 실행
  ```
  무한 루프 프로그램을 실행시키면 그동안 다음 명령어를 입력하지 못함.
* **background process**: 사용자 입력과 상관없이 실행되는 프로세스. 쉘에서 해당 프로세스 실행시, 맨 뒤에 &를 붙여줌
  ```
  find / -name ‘*.py’ > list.txt &
  [1] 57
  ```
  [1]은 작업번호(job number), 57은 프로세스 번호
* foreground process 제어하기
  * `Command + c`: 프로세스 작업 취소(해당 프로세스는 완전히 종료된다.)
  * `Command + d`: 실행중인 파일 일시 중지
  * `Command + z`: foreground 프로세스를 실행 중지 상태(suspend 모드)로 변경
  * `command + z`로 중지된 마지막 프로세스는 bg명령으로 background 프로세스로 실행될 수 있음. 또는 특정 숫자의 프로그램을 bg실행하고 싶다면 `bg 2`라고 하면 된다. <br>
    fg명령으로 foreground 프로세스로 실행될수도 있음.( + → - → 아무것도 없음 순으로 fg로 온다.) 또는 특정 숫자의 프로그램을 fg로 오게 하고 싶다면, `fg %2`라고 하면 된다.
  * `jobs` 명령어: 백그라운드로 진행 또는 중지된 상태로 있는 프로세스를 보여줌
  * `kill %4`: 4번 프로그램(jobs 기준)을 삭제하겠다. cf. `kill -9 %4` 강하게 삭제. <br>
    <img width="400" alt="Screen Shot 2021-08-18 at 10 19 00 AM" src="https://user-images.githubusercontent.com/43725183/129821200-d57d5885-31d3-4c38-b6bf-03d344d2f4f1.png">


### C. 프로세스 상태확인
* `ps`: 프로세스 상태를 확인하는 명령어 <br>
  <img width="400" alt="Screen Shot 2021-08-18 at 10 18 41 AM" src="https://user-images.githubusercontent.com/43725183/129821182-405ed45f-a429-47ec-9c80-3cd85b31e313.png">
  ```
  ps aux                   #백그라운드에서 돌아가는 모든 명령어를 보고 싶다면
  ps aux | grep apache     #아파치만 검색
  ```
* `htop`: interactive process viewer. htop을 쓸때는 sudo htop하면 더 정확하다.
  * CPU를 클릭하면 CPU를 기준으로 정렬이되고, MEM을 클릭하면 MEM 기준으로 정렬된다. 
  * RES: 실질적인 메모리 사용량
  * load average: CPU 점유율. 순서대로 `1분간의 CPU 점유율`, `5분간의 CPU 점유율`, `15분간의 CPU 점유율` <br>
    예를 들어 코어가 4개인데, 프로그램을 실행 시켰을 때 점유율이 1정도이다. → 그러면 코어 하나만 패는(?) 상황.

### D. 그 외 다른 프로세스
* **데몬 프로세스(daemon process)**: 사용자 모르게 시스템 관리를 위해 실행되는 프로세스로 보통 시스템이 부팅될때 자동 실행(예: ftpd, inetd등. 즉, 늘 실행되고 있어야하는 프로그램
  * 우리가 필요할때마다 실행시켜서 사용하는 프로그램(e.g. ls, mkdir)들과는 달리 웹서버와 같은 공간에서는 많은 프로그램들이 늘 실행되고 있어야한다. 이렇게 늘 실행되고 있는 프로그램을 데몬(daemon; 반신반의)이라고 정의한다. 
  * 예를 들어, 웹서버 apache를 한번 살펴보자.
    * Mac OS
      * 설치한 apache(`brew install apache2`)는 /usr/sbin/apachectl, httpd에 위치한다.
      * To have launchd start httpd now and restart at login: `brew services start httpd`
      * Or, if you don't want/need a background service you can just run: `apachectl start`
    * Linux
      ```
      sudo apt-get install apache2
      sudo service apache2 start     #백그라운드 실행 시작
      sudo service apache2 stop      #백그라운드 실행 정지
  * `/etc/init.d`에서 daemon 프로그램 리스트를 확인할 수 있다. 
  * `/etc/rc3.d`에서 링크(e.g. S02apache2)를 걸면 컴퓨터가 부팅될때 이 프로그램이 자동으로 실행된다. <br>
    c.f. 링크가 K로 시작하면 자동 시작되지 않는다. 
* `cron`을 통해서 정기적으로 프로세스를 생성하는 방법
  * `crontab -e` : 정기적으로 작업할 리스트를 적어두는 파일 에디터 <br>
    `m h  dom mon dow   command`
    * `m`: 10(매 시간 10분 e.g. 1시 10분), */10(10분 마다)
    * `h`: *(시간과는 상관없이 실행) <br>
       e.g. `m h => 10 1`: 1시 10분
    * `dom`: day of month
    * `mon`: month
    * `dow`: 요일
  * 구글에서 `crontab expression`을 키워드로 검색하면 확인할 수 있다.  <br>
    e.g. `*/1 * * * * date >> date.log 2>&1`
  * `crontab -l` : cron 실행 리스트 확인
* `;`(세미콜론): 여러작업을 연속해서 실행 가능 <br>
  e.g. `mkdir folder; cd folder`

