## STEP2 백업
원격 저장소로 git hosting 서비스(e.g. GitHub, GitLab)를 사용해서 백업을 해보자.

* 용어정리
  - **local repository**: 지역 저장소
  - **remote repository**: 원격 저장소
  - **push**: local → remote repository
  - **clone**: remote repository를 local에 하나 더 생성하기.
  - **pull**:  remote → local repository

- 원격저장소와 지역 저장소간의 연결: **HTTP**/SSH
  ```
  git remote add origin https://github.com/lizzy723/Variant-Analysis.git
  ```
- **Push & Pull**
  ```
  git push -u origin master  # 처음에만
  #git push --set -upstream origin master 처음에만
  git push
  ```
  ```
  git pull
  ```
- 복원
  ```
  git clone {repository_https_address}
  ```

---

**Tip**
- `git remote -v`: 원격 저장소 확인
- 작업의 순서: **pull --> 작업 --> push**
