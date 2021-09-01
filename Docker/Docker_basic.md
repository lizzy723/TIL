### A. Docker 기본 개념

- **docker hub**: Registry. app store와 같은 개념 ([https://hub.docker.com](https://hub.docker.com/))
- Doker에서 다운받는 program과 같은 단위가 **image,** image를 실행시킬때 생성되는 프로세스와 같은 것이 **container**
- docker hub에서 image를 다운받는 것을 pull이라고 하고, image를 container로 실행하는 것을 run이라고 한다. 하나의 이미지로 여러 container를 만들 수 있다.

    ```bash
    #pull
    docker pull httpd                   #httpd라는 이미지 pull
    
    #run, stop, start, rm
    docker run --name ws1 httpd         #httpd이미지를 사용해서 ws1이라는 이름을 가진 container 실행시작
    docker stop ws1                     #container 실행 멈추기
    docker start ws1                    #stop했던 container 다시 실행 시작
    docker rm ws1                       #container 삭제
    docker rm --force ws1               #실행중인 container 삭제
    
    #rmi
    docker rmi httpd                    #docker image 삭제
    ```

<br>


### B. CLI 명령어

- Docker 기본 명령어

    ```bash
    docker version          #docker 설치 확인. client와 server 정보가 나오면 성공!
    docker images           #docker image 리스트 확인
    docker ps               #실행중인 container리스트 확인
    docker ps -a            #모든 container리스트 확인
    docker logs -f wc1      #container log 확인(-f: update)
    ```

- Container 명령어 실행

    ```bash
    #[방법 1] container 내부에 명령어 입력하기: docker exec
    docker exec exciting_borg pwd        #/opt/vep/src/ensembl-vep

    #[방법 2]쉘 프로그램 실행하기: 여러개의 명령어를 입력하고 싶을때는 쉘로 접속하기
    #bash가 없을때는 sh를 사용하기
    docker exec -it exciting_borg /bin/bash
    #-i Keep STDIN open even if not attached
    #-t Allocate a pseudo-TTY

    exit         #쉘 종료하기 
    ```
-  컨테이너 변경사항을 이미지에 커밋: `docker commit <container_id> <image_id>:<tag>`
    ```
    #Using Docker commit to create images
    #Create a container from the ubuntu image
    docker run -i -t ubuntu /bin/bash
    
    #Install Apache into the container
    apt-get -yqq update
    apt-get -y install apache2
    
    #exit from the container 
    docker commit 6b84282435f8 dvdoc/apache2
    #or
    docker commit -m="A new custom image" --author="DV Suresh" \
    6b84282435f8 dvdoc/apache2:webserver
    ```
    참고자료: http://moducon.kr/2018/wp-content/uploads/sites/2/2018/12/leesangsoo_slide.pdf
    


<br>

### C. 호스트와 컨테이너의 파일시스템 연결
- 데이터 볼륨: 해당 디렉토리는 컨테이너와 별도로 저장되고 컨테이너를 삭제해도 데이터가 지워지지 않는다.
- 컨테이너 내의 파일을 직접 수정해도 되지만, 만약 컨테이너가 사라진다면 내부 파일도 다 사라지기 때문에 이 방법은 좋지 않다. 대신, 호스트에 파일을 저장하고 이 파일이 저장된 폴더를 컨테이너에 연결하자.

    ```bash
    docker run -p 8888:80 -v ~/Desktop/htdocs:/usr/local/apache2/htdocs/ httpd 
    ```

    Host의 `~/Desktop/htdocs`와  container의 `/usr/local/apache2/htdocs/`를 연결


<br>  
  
### Notes
- 도커 설치([https://www.docker.com/get-started](https://www.docker.com/get-started))
- 도커 문서([https://docs.docker.com](https://docs.docker.com/))
- 생활코딩 
