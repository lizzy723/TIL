### A. 리눅스와 파일 
* 모든 것은 파일이라는 철학을 따름.
* 모든 인터렉션은 파일을 읽고, 쓰는 것으로 이루어져 있음.

* 마우스, 키보드와 같은 모든 디바이스 관련된 기술도 파일처럼 다루어짐.
* 모든 자원에 대해 **추상화(abstraction) 인터페이스**(e.g. Virtual file system; VFS interface)로 파일 인터페이스를 활용 <br>
  cf. 가상파일 시스템에는 전역 네임 스페이스를 사용(/(root)로 부터 시작) <br>
  cf. 추상화(abstraction): 복잡한 기능/자료/데이터의 핵심적 개념/기능을 간추려 내는 것.
  
<br>

### B. 슈퍼 블록, inode와 파일
드라이브에 리눅스 설치할때 생각해보기. 드라이브를 슈퍼 블록과 파일로 나눴었음.<br>
<img width="300" alt="Screen Shot 2021-08-19 at 10 31 27 AM" src="https://user-images.githubusercontent.com/43725183/129993411-51a111d2-d1fd-4c3c-ac02-a2040d3f9908.png">
<img width="250" alt="Screen Shot 2021-08-19 at 10 34 10 AM" src="https://user-images.githubusercontent.com/43725183/129993593-b2fb7a73-87ee-4d07-8065-d48f20f876fa.png">
* 슈퍼 블록: 파일 시스템의 정보
* 파일: inode 고유값과 자료구조에 의해 주요 정보 관리(`ls -i`로 확인 가능)
  * “파일이름:inode”로 파일이름은 inode 번호와 매칭
  * 파일 시스템에서는 inode를 기반으로 파일 액세스
  * inode 기반 메타데이터(파일 권한, 소유자 정보, 파일 사이즈, 생성시간 등 시간관련 정보, 데이터 저장 위치등) 저장
  
<br>

### C. 리눅스 파일 탐색
* dentry(directory entry)를 탐색. 각 directory는 dentry를 가지고 있다. 
* 예를 들어, `/home/ubuntu/link.txt`를 찾는다고 하면, `/` dentry에서 `home`을 찾고, `home`에서 `ubuntu`를 찾고, `ubuntu`에서 `link.txt` 파일이름에 해당하는 inode를 얻음
* 파일을 찾는 법: 파일의 종류에는 데이터 파일과 명령 실행 파일이 있다.
  * `locate`: 디렉토리가 아닌, 데이터베이스를 뒤져서 찾음 e.g. `locate *.log`
  * `find`: 디렉토리를 뒤진다. 따라서 속도가 느리다. (https://www.tecmint.com/35-practical-examples-of-linux-find-command/)
    * find ___:어떤 디렉토리부터 찾을 것이냐 
      ```
      find /                                                   #루트 디렉토리부터 이후 하위디렉토리로 내려가면서 찾겠다.
      find .                                                   #현재 디렉토리부터 하위디렉토리로 내려가면서 찾겠다.
      find -name ___                                           #어떤 이름의 파일을 찾겠다.
      find -name *.log                                         #로그파일을 찾겠다!
      find -type f                                             #파일만 찾겠다(폴더는 찾지 않고..!)
      find . -type f -name "tecmint.txt" -exec rm -f {} \;     #특정 파일을 찾아서 지우겠다/  exec: 실행시켜라  / {}: 내가 찾은 파일 이름이 들어감
      ```
* 리눅스 파일 구조(참고 https://www.thegeekstuff.com/2010/09/linux-file-system-structure/) <br>
  <img width="600" alt="Screen Shot 2021-08-19 at 10 37 35 AM" src="https://user-images.githubusercontent.com/43725183/129993852-87898f8d-bbf7-4ef6-84c5-c49e491ffda3.png">
  * `/bin/`, `/sbin/`: 쉘명령어 실행 파일이 있다. 따라서 이 두 폴더는 기본적으로 환경 변수 설정이 되어 있다.(여기 있는 모든 프로그램이 어디에서든 실행될 수 있도록 하기 위해서)
    * `/bin/`: user binaries
    * `/sbin/`: system binaries
  * `/etc/`: configuration files →  설정 파일: 프로그램의 설정을 변경할 수 있다.
  * `/var/`: variable files (바뀔 수 있는 파일들 e.g. log files)
    * `/var/log/`: 에서 24시간 돌아가는 로그를 확인할 수 있다.   
  * `/tmp/`: temporary files(임시파일. 컴퓨터를 재부팅하면 다 사라진다.)
  * `/home/`: 로그인하면 제일 먼저 뜨는 것. ~으로도 이동할 수 있다. 
  * `/lib/` : /bin과 /sbin에 있는 프로그램의 library가 저장된 곳
  * `/opt/`: 프로그램의 설치 위치가 애매하다면 이곳에 설치할 것! <br>
    cf. 일반적으로는 알아서 위치 지정해준다. (`whereis`로 프로그램 설치 위치 확인 가능)
  * `/usr/`: 내부에 `/usr/bin/`, `/usr/sbin/`, `/usr/local/`, `/usr/lib/`가 있음. 사용자가 설치하는 프로그램은 `/usr/`내에 설치되고, bundle형태로 제공되는 내장 리눅스 프로그램은 루트 아래 `/bin/`, `/sbin/`에 설치된다.
    * 왜 이렇게 나눠졌는지는 역사적 이유가 있음
    * booting 시에 필요한 프로그램은 모두 /bin, /sbin에 설치
    * /home이 생기고 나서는 사실 /usr에도 사용자를 위한 프로그램이 설치된다고 보기 어려움 → /home/bin directory도 따로 있음!
  * `/media/`, `/mnt/`: 다른 디바이스가 연결되면 여기에 연결된다.
  * `/dev/`: device 정보

  
<br>


### D. 하드링크와 소프트링크
* cp 명령: 파일 복사
  ```  
  cp file1 file2                   #file1과 file2는 각각 물리적으로 10MB을 차지함.
  cp -rf folder1 folder2
  ```
* 하드링크
  ```
  ln file1 file2
  ```
  * file1과 file2는 동일한 10MB 파일을 가리킴. 즉 동일한 파일을 가진 **이름**을 하나 더 만든 것일 뿐. 그래서 inode는 동일. 즉 **동일한 물리공간**을 가리킨다.
  * `ls -i` : 파일 inode 확인하기 / hardlink된 파일은 inode 값이 같다. 
  * file1을 삭제해도 file2는 사라지지 않는다. 
  * 용량이 얼마 남지 않았는데, 복사할 일이 있다. 이럴때 사용. 
* 소프트(심볼릭) 링크
  ```
  ln -s file1 file2
  ```
  * 윈도우 OS의 바로가기와 동일
  * inode가 서로 다르다!
  * `ls -al` 하면, 소프트 링크 확인 가능 <br> 
    e.g. file2 → file1
  * file1을 삭제하면 file2사용 불가능
* 하드링크/소프트 링크 둘다 어느 하나 파일을 수정하면, 각 파일 이름으로 동일한 내용 접근 가능
  
<br>


### E. 특수파일
* 디바이스
  * **블록 디바이스(Block Device)**: HDD, CD/DVD와 같이 블록 또는 섹터 등 정해진 단위로 데이터 전송, IO 송수신 속도가 높음
  * **캐릭터 디바이스(Character Device)**: 키보드, 마우스등 byte 단위 데이터 전송, IO 송수신 속도가 낮음
  * 아래 list에서 b로 시작하는 것이 블록 디바이스이고, c로 시작하는 것이 캐릭터 디바이스이다. 
    ```
    cd /dev/
    ls -al
    ```
