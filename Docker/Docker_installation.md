### A. Ubuntu
1. repository
    ```
    $ sudo apt-get update
    $ sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    #$ sudo apt-key fingerprint 0EBFCD88   (verify keys)
    $ sudo add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"
    ```

2. Installation
    ```
    $ sudo apt-get update
    $sudo apt-get install docker-ce docker-ce-cli containers.io
    $ apt-cache madison docker-ce.   #version 체크
    $ sudo apt-get install docker-ce=5:19.03.5~3-0~ubuntu-bionic docker-ce-cli=5:19.03.5~3-0~ubuntu-bionic containerd.io
    ```
3. Troubleshooting
    - docker가 root 계정으로 설치 되었을때 root 계정이 아닌 계정으로 docker를 실행하고자 하면 다음과같은 에러가 발생할 때가 있다.
        ```
        Using default tag: latest
        Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.40/images/create?fromImage=ensemblorg%2Fensembl-vep&tag=latest: dial unix /var/run/docker.sock: connect: permission denied
        ```

    - 해결방법 :아래의 명령어 수행 후 완전히 로그아웃 후 로그인해 사용한다.
        ```
        $ sudo usermod -a -G docker $USER
        $ sudo service docker restart
        ```


참고자료: https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-engine---community-1
