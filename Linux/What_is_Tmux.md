* Tmux 장점
  * 백그라운드 실행
    ```
    tmux ls          #세션의 윈도우 수.
    tmux a           #Attach. 셀을 닫고 다시 연결할때.
    ctrl + b d       #Detach.
    ```
  * 여러개의 창을 동시에 운영가능 
    ```
    ctrl + b  c     #create: 새로운 창 열기
    ctrl + b  w     #windows: 현재 열려있는 창 확인
    ctrl + b  p     #previous 창으로 이동
    ctrl + b  n     #next 창으로 이동
    ctrl + b {숫자}  #특정 window로 가기
    
    #pane 만들기
    ctrl + b %      #세로로 pane 가르기
    ctrl + b "      #수평으로 pane 가르기
    ctrl + b o      #다른 pane으로 넘어가기
    ```
  
* Tmux 사용법(cheatsheet)
  <img width="859" alt="Screen Shot 2021-10-18 at 10 28 58 AM" src="https://user-images.githubusercontent.com/43725183/137653674-89a137d3-6b0e-41e4-9bad-23a5c36015d3.png">


* Tmux 설치
  * mac OS: `brew install tmux`


* 참고자료
  * https://www.youtube.com/watch?v=iTyjTM4Gujg 
