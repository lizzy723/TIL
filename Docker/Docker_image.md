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


