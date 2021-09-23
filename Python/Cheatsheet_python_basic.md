### A. 파이썬 환경

1. package 관리
    - package 업데이트: `pip install --upgrade {module_name}`
    - package 버젼 확인: `pip list | grep {module_name}`

2. Conda
    * 기본 사용법
        - 생성 : `conda create --name test python=3.5`(python 3.5를 사용하는 test라는 이름의 가상환경 생성
        - 가상환경 리스트 확인 : `conda env list`
        - 가상환경 활성화 : `conda activate 가상환경명`
        - 가상환경 삭제 : `conda remove -n test --all`
        - e.g. python package 설치
            ```
            conda create -n $package_name
            conda activate $package_name
            conda install $package_name                   #plink, peddy 설치
            conda install $package_name=version           #특정 버전 설치
            conda install $package_name1 $package_name2   #여러개 동시에 설치
            conda remove $package_name                    #package제거
            pip install $package_name                     #conda 에서 관리하지 않는 패키지 설치
            ```
    * 그 외 사용법

        - 버전 확인 : `conda --version`
        - (콘다 자체)업데이트 : `conda update conda`/(안될땐, `conda update --force conda`)

        - 패키지 설치 : `conda install 패키지명`
        - 패키지 리스트 확인 : `conda list`
        - 채널 추가: `conda config --add channels bioconda`
        - 파이썬을 최신 버전으로 update: `conda update python`
        - 모두 업데이트: `conda update --all`

    * pycharm
        * preference-python interpreter-show all - + - conda environment - existing environment
        * 특정 conda 환경에서 pycharm 실행하기

    * 참고 사이트
        - https://teddylee777.github.io/python/anaconda-가상환경설정-팁-강좌
        - (채널 설정) https://bioconda.github.io/user/install.html#set-up-channels


3. venv

    - 가상환경 만들기: `python3 -m venv {가상환경이름}`→ {가상환경이름} 폴더가 생성
    - 가상환경 활성화: `source {가상환경이름}/bin/activate`
    - 가상환경 종료: `deactivate`
    - cf. virtualenv: venv 전에 나옴. venv와 다르게 직접 설치해야함. 두개 모두 환경 설정을 global하게 하지 않고 local하게 설정한다는 차이가 있음.
    - [참고] https://www.daleseo.com/python-venv/


4. Ipython
    ```bash
    #ipython --> python 
    jupyter nbconvert --to python tmp.ipynb
    python tmp.py
    ```
<br>

### B. 코딩 팁
1. Builtin 확인
    ```python
    import builtins           # 원래는 builtins.______라고 해야하는데 생락하고 사용중(builtins은 일종의 폴더명)
    dir(builtins)             #e.g. 대표적인 것들이 바로 dir, type
    ```

    keyword 확인

    ```python
    import keyword
    keyword.kwlist          #keyword => 33개, 이름으로 사용할 수 없다.
    ```

2.  코딩 스타일(이름이 두 단어 이상일 경우)
    - **camel 방식** : 두번째 단어의 시작을 대문자로(e.g. helloWorld) 
    - **파스칼, 캡스워드 방식**: 첫번째 단어도 대문자로 시작(e.g. HelloWorld)
    - **스네이크 방식**:  언더바로 연결(e.g hello_world)
    - **PythonEnhancementProposal8 : PEP8** => 파이썬 내에서 가이드 제공

3. 비교 연산자 tip

    - 정수 [-5, 256] 값은 새로 메모리 공간을 만들지 않는다(즉, 메모리가 다 같음) 만약 이 범위를 벗어나면, 새로운 메모리를 만든다.
    - 메모리값까지 비교하고 싶을때는 `is` 사용하고, 그냥 값만 비교할때는 `==`
        ```python
        a = 1000
        b = 1000
        c = 1
        d = 1
        a is b #False
        c is d #True
        ```

4. 논리 연산자 tip
    - OR 연산자를 연속적으로 쓰는 것보다 in 연산자를 쓰는 것이 더 좋다.
      ```python
      if i =='a' or i=='e' or i=='o' or i=='u' or i=='i':  #파이썬은 이렇게 or 연속해서 쓰는 것 싫어한다.
      if i in ['a', 'e', 'o', 'u', 'i']:     #더 깔끔하게 표현 가능
      ```


5. 성능 체크
    *  시간 체크: `time`, `timeit` (c.f. jupyter notebook에서는 `%time`을 셀에 적어 넣어주면 된다.)
        ```python
        import time

        train_start = time.time()
        train_end = time.time()
        print(train_end - train_start)
        ```
      
      
6. datatype

    - `x=float('nan')` : Not a number 정의하기
    - 자료형 안전하게 바꾸기

        ```python
        def toDoubleSafe(v):
            try:
                return float(v)
            except ValueError:
                return v
        ```
      
7. 그 외
    - formatting: `print(f"최적의 k : {round(kneedle.elbow, 3)}")`
    - input을 tuple로 받고 싶을때

        ```python
        def mergeComb(p1, p2):
            mn1,mx1,c1,tot1 = p1
            mn2,mx2,c2,tot2 = p2
            return (min(mn1,mn1),max(mx1,mx2),c1+c2,tot1+tot2)
        ```
    - pickle
      ```python
      #읽어오기
      with gzip.open(modelpath + 'data00.pickle','rb') as f:
          data00 =  pickle.load(f)

      #저장하기
      pickle.dump(rfc, open(modelpath + 'rfc00.pkl', 'wb' ))
      ```

<br>

### C. 파일 읽고 쓰기
  
1. open, write, close
    - 파일의 종류 : txt, binary
    - 파일의 모드 : read(r), write(w), append(a)
    - 파일 열기(read mode) : `open(path,'r')` -> **open** function으로 파일을 가져오면, 이는 **generator 형태**
        - 다른 generator 처럼 next, for... 등을 사용할 수 있다
        - 추가적으로 read(), readline(), readlines()를 쓸 수 있다. 
            - 한줄 : `text.readline()`
            - 전체 : `text.read()`
            - 리스트 형식으로 전체 : `.readlines()`
    - 파일 닫기 : `text.close()` --> 위의 기능을 쓸 수 없다.
    - 파일 쓰기 예시
        ```python
        text=open(path,'w')
        for i in range(10):
            data= ('Plyer%d.\n' %i)   
            text.write(data)
        text.close()
        ```

2. 파일 스트리밍 : **`with`** -> 따로 close를 하지 않아도 된다. 
    ```python
    with open(path,'a') as text:
    for i in range(12, 16):
        data=('writer%d.\n' %i)
        text.write(data)
    ```
