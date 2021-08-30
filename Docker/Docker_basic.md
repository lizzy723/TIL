### A. Docker 기본 개념

- **docker hub**: Registry. app store와 같은 개념 ([https://hub.docker.com](https://hub.docker.com/))
- Doker에서 다운받는 program과 같은 단위가 **image,** image를 실행시킬때 생성되는 프로세스와 같은 것이 **container**
- docker hub에서 image를 다운받는 것을 pull이라고 하고, image를 container로 실행하는 것을 run이라고 한다. 하나의 이미지로 여러 container를 만들 수 있다.

    ```bash
    docker pull httpd                   #httpd라는 이미지 pull

    docker run --name ws1 httpd         #httpd이미지를 사용해서 ws1이라는 이름을 가진 container 실행시작
    docker stop ws1                     #container 실행 멈추기
    docker start ws1                    #stop했던 container 다시 실행 시작
    docker rm ws1                       #container 삭제
    docker rm --force ws1               #실행중인 container 삭제

    docker rmi httpd                    #docker image 삭제
    ```

<br>


### B. 기본 CLI 명령어

```bash
docker images           #docker image 리스트 확인
docker ps               #실행중인 container리스트 확인
docker ps -a            #모든 container리스트 확인
docker logs -f wc1      #container log 확인(-f: update)
```



<br>  
  
### Notes
- 도커 설치([https://www.docker.com/get-started](https://www.docker.com/get-started))
- 도커 문서([https://docs.docker.com](https://docs.docker.com/))
- 생활코딩 
