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

### Notes
* 생활코딩: https://opentutorials.org/course/2717
* EC2 인스턴스: https://www.parkmycloud.com/blog/ec2-instance-types/
