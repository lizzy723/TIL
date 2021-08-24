### A. 압축
* zip
  * `gunzip`: 압축 풀기 	e.g. gft.gz → gtf
  * `gzip`: 압축하기 
* tar: 과거에는 여러 파일을 하나로 묶는 기능만 있었다(`.tar`). 그러나 gzip/gunzip 등장 이후 여러 파일을 하나로 묶음과 동시에 압축까지 지원(옵션 형태로)하게 되었다(`.tar.gz`).
  * tar 주요 옵션
    ```
    - x    #묶음을 해제
    - c    #파일을 묶음
    - v    #묶음/해제 과정을 화면에 표시
    - z    #gzip/gunzip을 사용
    - f    #파일 이름을 지정
    ```
  * tar 주요 사용 예시
    * 압축할때: 
    ```
    tar -cvzf [압축된 파일 이름.tar.gz] [압축할 파일이나 폴더명]
    ```
    * 압축 풀때
    ```
    tar -xvzf [압축 해제할 압축 아카이브 이름.tar.gz]
    ```

### B. 패키지 매니저 관련 명령어
* package manager : apt, yum, homebrew(mac에서) → 모바일의 앱스토어와 같은 역할
* 우분투 패키지 매니저 관련 명령어
  ```
  sudo apt-get update                  #다운로드 받을 수 있는 패키지 목록 업데이트
  sudo apt-cache search [package 이름]  #패키지 검색
  sudo apt-get install [package 이름]   #패키지 설치 
  sudo apt-get upgrade [package 이름]   #패키지 최신 버젼으로 업데이트
  sudo apt-get upgrade                 #내가 설치한 모든 패키지에 대해 최신버전으로 업데이트
  sudo apt-get remove [package 이름]    #패키지 삭제
  sudo apt-get purge [package 이름]     #강력한 삭제!!
  ##sudo apt-get 까지만 치면 뭘 할 수 있는지 알려준다.
  ```
  
  
### C. 그외
* `wget [URL]`: by copy link address
