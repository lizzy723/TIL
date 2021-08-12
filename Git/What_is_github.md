
## github desktop 기본 사용법

- create repository(git desktop에서 repository 만들기)
  - `name`에 폴더 이름
  - `path`에 새로운 폴더가 만들어질 상위폴더까지 입력
  - web에서 만들수도 있다.
- 작업 결과 commit
  - `summary`: 작업 이름
  - `description`: 작업 설명
  - **빨간색**: 이전 버젼 내용
  - **초록색**: 새로 생성된 내용

---
## Pull Requests
- `Pull requests`: 다른 사람이 내 프로젝트를 복사해가서 수정한후 반영해 달라고 요청하는 것. 즉, 이 branch를 master로 병합해주세요.
- 두가지 종류의 pull request가 있다. 일반적인 pull request가 있고, 오픈소스에서 주로 사용하는 pull request 방식이 있다. 오픈 소스는 읽기는 가능하지만 쓰기는 불가능하기 때문에 일반 사용자가 오픈소스 git을 fork로 자기 repository로 복사해온후 혼자 수정하다가 원래 오픈소스 코드에도 특정 포인트가 반영되었으면 좋겠다 할때, original 오픈 소스 코드에 pull request하는 방식이 바로 두번째 방법이다. 




---

## Tip

- 좋은 프로젝트인지 확인하는 방법: commit 수, collaborate(협업한 사람), star(좋아요), fork(얼마나 많이 다운로드 받았는지), watch(구독수)
- 그냥 소스 코드만 보고 싶을때는 `git clone` 대신 zip 파일을 다운로드 받기
- issue submit할때는 담당자를 할당하고, label도 지정하기
- `Fork`: 다른 사람의 프로젝트를 복사해오기

