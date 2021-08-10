## STEP3 Branch and Conflict


1. 새로운 branch 만들기: `git branch {new_branch_name}`
2. **HEAD**를 branch로 옮기기(즉, branch 전환하기): `git checkout {new_branch_name}`
  * cf. 처음 master branch만 있을때는 (당연히) HEAD는 master branch를 가르키고 있다. 
  * checkout의 기능은 head를 바꾸는 것.
3. Merge
    > ※ 용어정리
    > - **base**: 합치려고 하는 두 브랜치의 공통조상
    > - **merge commit**: 두 branch가 합쳐진 것

  * **서로 다른 파일 병합**: master branch에 master.txt 파일이 있고, branch1에 branch1.txt이라는 파일이 있다고 상상해보자. 만약 master branch에 branch1을 합치고 싶다면,
    ```
    git checkout master   #먼저 master branch로 바꿔준다.
    git merge branch1 
    ```
    을 하면 master branch에 master.txt, branch1.txt 파일이 모두 존재한다. 

  * **같은 파일, 다른 부분 병합**: master branch에 a.txt 파일 첫번째 줄을 수정하고, branch1에 a.txt 파일의 두번째 줄을 수정했다고 상상해보자. 만약 위처럼 command를 입력하면,
    ```
    git checkout master   #먼저 master branch로 바꿔준다.
    git merge branch1 
    ```
    master branch의 a.txt파일에 master, branch1의 모든 수정사항이 반영된다. 

  * **같은 파일, 같은 부분 병합**: 같은 파일의 같은 부분을 수정하면 **conflict**가 생긴다. 이 부분은 사용자가 직접 파일을 수정해야한다. master branch에 a.txt 파일 첫번째 줄을 'a'로 하고, branch1에 a.txt 파일의 첫번째 줄을 'b'라고 했다고 상상해보자. 만약 위처럼 command를 입력하면,
    ```
    git checkout master   #먼저 master branch로 바꿔준다.
    git merge branch1 
    ```
    master branch의 a.txt파일에 다음과 같이 master branch와 branch1사항이 출처와 함께 내용이 모두 쓰여져 있다.
    ```
    <<<<<<<< HEAD
    a        
    ========                 #이걸 기분으로, 윗부분은 master, 아래부분은 branch1. a를 남길건지 b를 남길건지 선택해서 너가 지워라.
    b
    >>>>>>>> branch1
    ```

    * **3 way merge**: Conflict; git은 어떻게 conflict을 파악하는가 --> base를 기준으로 수정여부를 판단한다.(아래 그림 참조)
      <img width="600" alt="Screen Shot 2021-08-10 at 11 31 37 AM" src="https://user-images.githubusercontent.com/43725183/128799411-21822d33-cbde-41cc-b1be-daba21f4ba15.png">

    * 외부 도구를 이용한 병합: e.g. p4Merge(p4Merge를 다운로드 받고,
      ```
      #p4merge config 설정을 한다.
      git config --global merge.tool p4mergetool   
      ...
      #p4merge 실행하기
      git mergetool
      ```

4. 추가로 더 공부할 것
  * **git workflow**를 검색하면 branch 사용 모범 사례를 확인할 수 있다. git flow라는 프로그램도 있다.
  * **cherry-pick** : branch의 이전 commit을 master branch에 병합하는 방법
  * **rebase**: merge와 거의 동일한데, 타임라인을 조금 더 깔끔하게 정리할 수 있다.

5. branch에 관련된 이야기 +
  * **`detached`**: 앞에서 checkout은 head를 바꾸는 방법이라고 했다. 지금까지는 branch의 head를 바꾸는 것(e.g. `git checkout {branch-name}`)만 봐왔지만, head를 특정 commit으로 변경하는 것도 가능하다(e.g. `git checkout {commit-name}`). 이렇게 branch와 떨어져 특정 commit을 head가 가리키는 상태를 **detached**라고 한다. 
  * **checkout vs. reset**: checkout이 head를 바꾸는 방법이라면(무언가를 **바꾸는** 느낌), reset은 branch가 가리키는 commit을 바꾸는 방법이다. 따라서 더 이상 연결되지 않은 commit은 **삭제된다.** 그래서 보통 `checkout + {branch_name}`, `reset + {commit_name}`형태로 쓰인다. 

---

**Tip**
- `git log --all --graph --oneline`
- `git branch`: 현재 모든 branch확인`

---

**Example (2개의 repo 하나로 합치기)**

> https://itzjamie96.github.io/2020/07/20/github-how-to-merge-repositories/


1. 새로운 repo 만들어서 commit
2. `git remote add Programming_language https://github.com/lizzy723/Programming_language.git`
3. `git fetch Programming_language master`
4. `git merge --allow-unrelated-histories Programming_language/master`
5. final commit
    ```
    git add .
    git commit -m "MERGED REPOSITORIES"
    git push origin master
    ```
6. `git remote remove Programming_language`
7. 나머지 하나에 대해서도 동일하게 수행




