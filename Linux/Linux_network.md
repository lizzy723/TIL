### A. IP
- ip 주소를 알아내는 방법
  - `ip addr`: linux command.  inet 이후가 ip 주소이다.
  - `ipconfig getifaddr en0` for ethernet : mac terminal command
  - `hostname -I`로도 알 수 있다(웹서버가 깔려있다면)
- 네트워크 인터페이스 확인: `ifconfig
- `host`: domain의 ip address를 알려준다. e.g. `host google.com`
  - `curl`: 웹의 html파일을 보여준다. e.g. `curl google.com`
- 도메인 확인: `dig + trace egoing.ga.`를 입력하면 이 도메인의 ip를 찾는데 지나온 DNS 리스트를 모두 보여준다. Domain name server는 여러개로 분산되어 있다.
- 라우팅 테이블
  ```
  route -4 print 
  netstat –r
  netsh interface ip show route
  ```


### B. ARP
* ARP 캐쉬
  ```
  arp –a, arp –a –v
  netsh interface ip show neighbors
  ```


