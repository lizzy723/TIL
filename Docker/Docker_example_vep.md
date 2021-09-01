### A. VEP 설치
+  **docker**를 이용해서 VEP를 사용하자.(*Docker allows you to run applications in virtualized "container".*)
-  VEP와 같은 프로그램의 경우 **설치가 매우 어렵다.**(여러 다른 프로그램들간의 dependency때문, version도 맞춰주고, 대부분이 perl에 의존 등등)  
- 개발자(ensembl)가 프로그램(VEP)을 만들고 모든 프로그램 사용환경을 **docker의 image에 담아둔다.**
- host(사용자)는 docker 활용해서 원하는 프로그램(VEP)을 쉽고 빠르게 활용할 수 있다.

+  Download source: http://www.ensembl.org/info/docs/tools/vep/script/vep_download.html#docker
    ```
    # download vep image
    docker pull ensemblorg/ensembl-vep
    docker run -it ensemblorg/ensembl-vep ./vep

    #mount vep_data folder 
    docker run -t -i -v $HOME/vep_data:/opt/vep/.vep ensemblorg/ensembl-vep

    #plugin다운로드(우선은 MPC만) 
    docker run -t -i -v $HOME/vep_data:/opt/vep/.vep ensemblorg/ensembl-vep perl INSTALL.pl -a cfp -s homo_sapiens -y GRCh38 -g MPC
    ```


<br>

### B. VEP 사용하기

- local(host)의 `vep_data` folder와 docker container의 `/opt/vep/.vep/`가 연결됨(`.vep` 는 숨겨진 폴더)(docker 접속해서, `cd /opt/vep/.vep/`로 이동) <br>
  <img width="400" alt="Screen Shot 2021-09-01 at 10 14 45 AM" src="https://user-images.githubusercontent.com/43725183/131595855-bfeee987-6a18-4261-9de5-f87e98795eb6.png">
- `.vep`에서 나올때 **`exit`**
- 참고 : http://www.ensembl.org/info/docs/tools/vep/script/vep_options.html#basic
