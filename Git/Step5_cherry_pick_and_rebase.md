## STEP5 cherry-pick & rebase

cherry-pick과 rebase를 사용해서 timeline, commit 순서를 마음대로 조정해보자

---

**Cherry-pick**: 다른 branch의 commit을 가져와서 master branch 끝에 붙이는 방법. 즉 각 commit의 **변화**(파일의 추가, 문서의 변경 등)를 가져오는 것
```
git cherry-pick {다른 branch의 commit}
```

---

**Rebase**: 병렬적인 timeline을 순서대로 일어난 것처럼 조정하기(첨부사진 참조)

```
#master: m1, m2 commit이 있고,
#topic : t1, t2, t3 commit이 있을때
git checkout master
git rebase topic
#master: t1 t2 t3 m1 m2
```

<img width="500" alt="Screen Shot 2021-08-12 at 9 33 34 AM" src="https://user-images.githubusercontent.com/43725183/129120671-6f92b8b4-e9a6-4392-92b3-9e09f6956a46.png">```

* rebase는 원격저장소로 push하기 전에만 사용하기

---


**Tip**
- `git am --show-current-patch`: 어디서 충돌이 발생했는지 확인할 수 있다. 

