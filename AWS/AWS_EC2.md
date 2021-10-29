### A. EC2 인스턴스 시작하기
* instance: instance 하나가 컴퓨터 한 대라고 보면됨.(EC2-Instances-Launch Instances로 생성)
* **[Step1] Choose an Amazon Machine Image(AMI)**: OS 선택
* **[Step2] Choose an Instance Type**: vCPU, Memory, Instance Storage 기준으로 Type이 아래와 같이 나뉜다.(2020년 2월 기준)
  <img width="600" alt="Screen Shot 2021-10-21 at 9 46 29 AM" src="https://user-images.githubusercontent.com/43725183/138191581-0540e84b-fbcb-4cd1-ac51-62adb0eba4f7.png"><br>
  과금 정책: https://aws.amazon.com/ec2/pricing/on-demand/
* **[Step3] Configure Instance Details**: 인스턴스 수, 네트워크 등을 설정할 수 있음.
* **[Step4] Add Storage**: EBS(Elastic Block Store) 저장장치를 추가하는 단계.
* **[Step5] Tag Instance**: 인스턴스의 역할 및 관리자등의 설명을 메모하는 용도.
* **[Step6] Configure Security Group**: 어떤 방식으로 이 인스턴스에 접근 가능하도록 할 것인가. <br>
  e.g. Type이 SSH면 SSH로 접근 가능하도록 하겠다는 뜻. → source를 My IP로 설정하면 이 IP로만 접근 가능.<br>
  e.g. 웹서버의 경우 Type이고 HTTPS, source가 Anywere인 정책을 추가하면 모든 사람들이 웹을 통해 접근 가능.
* **[Step7] Review Instance Launch**: 마지막 점검 + key-pair 다운로드

<br> 

### B. EC2 원격제어
인스턴스 마우스 오른쪽 클릭하면 connect에 대한 설명이 나와있음.
1. Open an SSH client: 터미널 켜기
2. Locate your private key file(`dev/key/aws_password.pem`)
3. 처음에는 mode를 바꿔줘야함: `chmod 400 aws_password.pem`
4. Connect to your instance using its public IP: `ssh -i "aws_password.pem" ubuntu@{ip address}`

<br> 

### C. 다른 AMI 사용하기(AWS Marketplace, Community AMIs)
* OS에 필요한 소프트웨어가 설치되어 있는 AMI(Amazon Machine Image)를 사용하면, 해당 소프트웨어를 설치하지 않고 인스턴스 생성과 동시에 소프트웨어를 사용할 수 있다.
  e.g. [Wordpress on ubuntu](https://aws.amazon.com/marketplace/pp/prodview-stdrbzcdzipdy?sr=0-11&ref_=beagle&applicationId=AWSMPContessa)
* EC2 instance를 만들때 선택해도 되고, 원하는 AMI를 구글에서 검색해서 만들어도 된다. 

<br> 

### D. EC2 Scalability
* 가상 머신: 운영체제 위에 설치되는 소프르웨어지만, 가상 머신으로 다양한 운영체제를 하나의 컴퓨터에서 사용할 수 있게 된다. <br>
  e.g. 개인용(VMWare, VirtualBox, Parallels) <br>
  <img width="400" alt="Screen Shot 2021-10-27 at 10 03 02 AM" src="https://user-images.githubusercontent.com/43725183/138982612-9aa03f0c-fe85-40fa-b420-5a077e39551f.png"><br>
  → 클라우드 서비스의 Scalability를 구현하는데 핵심적으로 필요한 기술. 물리적 컴퓨팅 단위보다 훨씬 작거나 큰 크기의 컴퓨팅 기기를 대여하는 것이 가능해짐. 
* Scale을 키우는 두 가지 방법
  * **Scale up**: 기존의 인스턴스를 이미지로 만들어두고, 더 좋은 인스턴스 타입에서 이미지를 다시 실행하는 방법.
    * 문제: 인스턴스는 만들때마다(심지어 stop후 start할때도) public IP 및 public DNS가 바뀐다. 
    * 대안: **Elastic IP**. AWS로부터 Elastic IP라는 고정 IP를 받아서, 해당 인스턴스에 Associate시킨다. (즉, 기존 인스턴스와 disassociate 한 후 새로운 인스턴스와 associate하기)
  * **Scale out**: 프로그램을 이루는 각 부분(e.g. web server, middle ware, database)을 여러대의 컴퓨터로 분산시켜, 여러대의 컴퓨터가 마치 한 대의 컴퓨터처럼 작동하도록 하는 방법.
    * 웹서버의 경우, Domain name이나 **Load balancer**를 이용한 방법으로 여러대의 web server로의 scale out을 구현할 수 있게 된다. 
    * **ELB(Elastic Load Balancer)**: 웹 서버 앞단에서 각 웹서버에게 Load를 할당하는 역할을 함. 사용자는 ELB Domain name으로 웹 서버에 request를 보낸다. ELB가 사용자들의 request를 각 웹서버에게 나눠준다. 
    * **Autoscaling**: 새로운 instance를 만들고, ELB에 연결하는 작업을 자동으로 해주는 것이 바로 Autoscaling


<br> 


### Notes
* 생활코딩: https://opentutorials.org/course/2717
* EC2 인스턴스: https://www.parkmycloud.com/blog/ec2-instance-types/
