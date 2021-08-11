## STEP4 Collaborate

1. 협업자(collaborator) 추가: github repository settings에서 collaborator를 추가한다. 
2. (협업자 입장에서) git 환경 구축하기: `git clone {HTTPS} {folder name}`



* 두 사람이 동시에 같은 부분을 수정하거나, 한 사람이 수정한 부분을 다른 사람이 pull하지 않은 상태에서 같은 부분을 수정하면(수정 --> commit까지 완료하고), **push할때 rejected된다.**

  - **[해결방법]** pull해서 다른 사람의 수정사항을 지금에서라도 받고, 충돌이 있다면 merge해서 다시 commit, push한다. 
  - 최대한 push를 자주하고, 작업전엔 pull하고 시작하는 습관을 갖도록 한다. 



* 여러 사람이 같이 작업할때 일반적인 작업순서는 `git pull --> commit --> push`이다. 같은 작업을 `git fetch --> git merge FETCH_HEAD --> commit --> push`을 통해서도 할 수 있다. 

  *  즉 fetch는 원격 branch만 가져오는 방법이다(`git log --graph`로 확인하기). 다른 말로 `git pull` = `git fetch; git merge FETCH_HEAD`이다. 
  * `FETCH_HEAD`는 git fetch를 할때마다 자동으로 .git내에 생성된다. 



* **git patch**: 권한이 없는 사용자가, 원격 저장소(open source)에 push 할 수 없을 때, 이 사용자는 pull 권한이 있는 원래 주인에게 patch를 보낼 수 있다. 

  ```
  git format-patch {수정을 시작한 부분 commit}  #.patch 파일 생성 --> 메일로 보내기
  git am -3 -i *.patch  #(주인이 받아서)3way merge로 interactive하게 patch 파일 내용을 추가
  ```


* open source
  1. fork
  (내가 작업한 후)
  2. compare
  3. pull request: 땡겨가주세요!

