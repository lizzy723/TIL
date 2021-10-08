### A. commit

* 직접 commit해서 image 만들기<br>
  <img width="500" alt="Screen Shot 2021-10-05 at 10 04 33 AM" src="https://user-images.githubusercontent.com/43725183/135944880-3d4a6a9d-92e0-4eff-aae8-f12f1394114b.png"><br>
  e.g. Ubuntu에 git이 설치된 image를 만들어보자.
  ```bash
  docker pull ubuntu
  docker run -it ubuntu bash
  
  #여기서부터는 ubuntu bash  
  apt update;
  apt install -y git
  exit
  
  #여기서부터 다시 shell
  docker commit strange_wozniak lizzychoi:ubuntu-git       #{container_name} {repository}:{tag}
  docker images                                            #생성된 이미지 확인하기
  ```
* 이미 image가 있을때 변경사항을 **백업**하는 용도로 주로 사용됨.

### B. build
* Dockerfile 이용하기
  * Dockerfile 준비
    ```Dockerfile
    FROM ubuntu                                 #이 이미지에
    RUN apt update && apt install -y git        #이걸 설치해라.
    #그리고 이것을 이미지로 만들어라
    ```
  * image build
    ```
    docker build -t lizzychoi:ubuntu-git-2 .
    ```
* commit과는 조금 다르게, image 자체를 **생성**하는데 주로 사용됨.
* Dockerfile 명령어
  ```Dockerfile
  FROM    #도커파일은 FROM으로부터 시작한다.
  RUN     #RUN을 쓸때마다 layer라는 것이 생성되기 때문에 가급적 한 줄에 명령어를 다 쓰도록 한다(&& 사용하기). 
  WORKDIR #directory 생성 및 이동 e.g. WORKDIR /var/www/html은 mkdir -p /var/www/html;cd /var/www/html과 동일함.
  COPY    #Host 파일을 Docker 이미지로 복사 붙여넣기.  e.g. COPY ['index.html', '.']은 host의 index.html 파일을 /var/www/html로 복붙
  CMD     #cmd 실행. e.g. CMD ["python3", "-u", "-m", "http.server"]는 python3 -u -m http.server가 실행된다는 뜻. 
  ```
  * `RUN`과 `CMD`의 차이: `RUN`은 build 진행과정에서의 명령어이고, `CMD`는 build 완료 후 container에서 실행될때의 명령어. 
  * build로 이미지 생성 후, container 실행시에 마지막 CMD가 실행되지 않게 하고 싶다면 docker run 마지막에 pwd 쓰기(overriding) e.g. `docker run -p 8888:8000 --name web-server wev-server-build pwd;`
  

### Notes
* 생활코딩
