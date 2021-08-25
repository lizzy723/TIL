### A. ssh
원격(by internet)으로 쉘(*주로 서버, 사물(IoT)의 쉘*)을 제어할 수 있는 방법인 ssh를 알아보자. 

1. ssh setup
  - **client**(즉 데스크탑, 맥)에는 ssh client가 설치되어 있어야하고,
  - **server**(즉 워크스테이션, 서버)에는 ssh server가 설치되어 있어야한다.
    ```
    #server
    sudo apt-get install openssh-server
    sudo service ssh start
    sudo ps aux | grep ssh  #잘 작동하고 있는지 확인
    ip addr #아이피 주소 확인
    
    #client
    sudo apt-get install openssh-client
    ssh {ID}@{ip_address}
    ```

2. ssh public/private key
  - 공개키와 비공개키를 생성한다. `~/.ssh` 에 `id-rsa`(private key), `id-rsa.pub`(public key)이 생성된다.
    ```
    ssh-keygen  #client
    ```
  - 접속하고자 하는 서버의 `~/.ssh/authorized_keys`에 생성한 public key를 붙여준다. 
    ```
    ssh-copy-id {user}@{ip_address_of_server}  #client --> server
    ```

3. RSA
  * 특정 정보(info)를 암호화(encrypt)하고 복구화(decrypt)하는 과정에서 key를 사용한다. 따라서 key가 있는 사람만 특정 정보에 접근할 수 있고, 암호화와 복구화에 동일한 Key를 사용하는 경우 이러한 방식을 **대칭적 암호화 방식**이라고 한다.
  * ssh-keygen의 경우 암호화 과정에서 private key를 사용하고, 복구화 과정에서는 public key를 사용한다. 따라서 이러한 방식을 **비대칭 암호화 방식**이라고 한다. 

<br>

### 2. rsync
`r(remote)sync`를 사용하면 두 폴더의 내용을 동일하게 만들 수 있다(백업할때 사용하기 좋음). 심지어 멀리있는 두 컴퓨터를 네트워크/인터넷을 통해서 원격으로 sync할 수 있다. 

- `rsync -a src/ dest`: src 폴더내의 모든 파일을 dest에 똑같이 만들기
- `rsync -azP src/ {user}@{ip address}:/dest`: 네트워크를 통해서 sync하기(z는 압축 옵션, P는 progress를 보여준다)
- rsync는 ssh를 바탕으로 하기때문에 공개키 설정을 해두면 두 컴퓨터간 파일 이동 시 **로그인이 필요하지 않게 된다.**
