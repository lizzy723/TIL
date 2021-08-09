## STEP1 버전 관리

폴더를 새로 만들고, `git init`을 입력 → 폴더 안에 `.git` 디렉토리가 생성된다. (지금 이 상황은 모두 local computer에서 일어나는 일)

> Working tree → Staging area → Repository
- **Working tree**: 수정한 파일들
- **Staging area**: 특정 버전으로 저장할 파일들
- **Repository**: 만들어진 버전

1. 새로운 파일을 만들고, 이 파일을 Staging area에 올린다.(add to staging area) : `git add hello1.txt`
2. Staging area에 올라가 있는 파일들로 하나의 버전을 만든다.(create version) : `git commit -m "Message 1"`

---

- **버전간의 차이점비교**: `git diff`를 입력하면 마지막 버전(commit)과 working tree의 차이점을 색깔(빨강/초록)으로 알려준다. 

- **이전 버전으로 돌아가기**: `git checkout {commit ID}`/commit ID는 `git log`에서 확인 가능
  - 버전을 바꾸면, HEAD가 바뀐다.
  - 가장 최신으로 다시 돌아가고 싶다면, `git checkout master`

- **(버전 삭제하면서)이전 버전으로 돌아가기**: version1, version2, version3이 있는데 `git reset --hard {version2_commit}`를 입력하면 "version2"가 되겠다는 의미! head가 version2로 바뀌고, version3가 사라진다. 

- **(버전을 삭제하지 않으면서)이전 버전으로 돌아가기**: version1, version2, version3이 있는데 `git revert {version3_commit}`를 입력하면 "version3"를 revert한다. 즉, "version2"가 되겠다는 의미! log를 보면, version1,2,3모두 있고, revert version 3(=version2)를 나타내는 commit도 있다. 
> 더 초기의 commit으로 돌아가고 싶다면, 역순으로 모든 이전 commit을 revert 해야한다. 

- **더 알아보기**: diff tool, `.gitignore`, branch, tag, backup

---

**Tip**
- `git status`: working tree status/상태 확인. 어떤 파일을 저장할지 확인
- `git log`: show version. commit 리스트 확인 q 누르면 나올 수 있다. 
- `git log --stat`: 연관된 파일 리스트까지 보여준다. 
- `git log -p`: patch를 보여준다. 어디서 문제가 생겼는지 추적 가능
- `git add {directory}`: directory내의 모든 파일을 staging area로 올려준다.
- `git commit -am "message"`: add와 commit을 함께 해준다. 단 한번도 add 된 적 없는 파일은 commit 되지 않는다. 
- `git commit`: 에디터에서 commit message를 작성
- `git commit --amend`: 방금 커밋한 커밋명을 바꾸고 싶을때
- `git config --global core.editor "vim"`: 기본 에디터 vim으로 변경





