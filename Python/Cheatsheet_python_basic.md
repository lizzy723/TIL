### A. 파이썬 환경

1. package 관리
    - package 업데이트: `pip install --upgrade {module_name}`
    - package 버젼 확인: `pip list | grep {module_name}`

2. Conda
3. venv
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
