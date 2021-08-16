### A. user 추가하기
  * `useradd`와 `adduser`: `useradd`는 사용자 기본 설정 자동으로 하지 않음. `adduser`는 사용자 기본 설정을 자동으로 수행함.
  * 방법1: adduser 사용하기
    ```
    sudo adduser {사용자이름}
    ```
  * 방법2: useradd 사용하기 
    ```
    sudo useradd -m {사용자이름}  #-m은 홈디렉토리도 같이 만드는 옵션
    sudo passwd {사용자이름}  #패스워드 설정
    sudo vim /etc/passwd #기본 shell bash로 변경
    ```
<br>

### B. 다중 사용자 지원 관련 명령어
  * `id`: 나는 누구인가
  * `who`: 이 컴퓨터에는 누가 접속해 있는가.
  * `whoami`: 로그인한 사용자 ID를 알려줌
  * `passwd`: 로그인한 사용자 ID 암호 변경
  * `sudo`: root 계정으로 로그인하지 않은 상태에서 root 권한이 필요한 명령을 실행 할 수 있도록 하는 프로그램
  * `su`: 사용자 변경. 보통 su - 와 함께 사용
    * `su root`: 현재 사용자의 환경설정 기반, root로 변경
    * `su -root`: 변경되는 사용자의 환경설정을 기반으로 root로 전환 즉 변경되는 사용자의 .bashrc와 .profile을 기준으로 환경설정함.
  * 특정 사용자가 sudo를 사용할 수 있도록 설정
    ```
    sudo vim /etc/sudoers
    root	ALL=(ALL:ALL) ALL
    dave2	ALL=(ALL:ALL) ALL  #dave2에 root 권한 부여. 즉, sudo 명령어를 쓸 수 있도록 해줌.
    ```
  * **root(super user)**
    * `sudo passwd -u root` : root 사용자가 lock되어 있는 경우 unlock하기
    * `sudo passwd -l root` : 다시 lock 걸기
    * root 사용자의 홈 디렉토리는 `/root`이다. 
  * **group**
    * `groupadd` : create a new group e.g. groupadd developer
    * `/etc/group`에서 새로 생긴 그룹 정보를 확인 할 수 있다. 
    * `usermod -a -G developer egoing`: developer라는 그룹에 egoing 추가( → 쉘에 다시 로그인)

