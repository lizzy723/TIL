# data.table
* data.frame(R base) advanced version
* 빠르다, 메모리가 적게 차지한다
* data manipulation 가능(like dplyr)


<br>


### A. `data.table` object 만들기


- `fread()` : 자료 읽기          c.f. "."(R base), "_"(tidyverse)
- `data.table()` : 자료 만들기    e.g. `score = data.table(school, math, stat, sex, age)`
- `as.data.table()`도 가능

- object 타입 확인 => `class()` ; (결과)`[1] "data.table" "data.frame"`
- "character" type의 column : "data.table"에서는 factor로 바뀌지 않음
  (체크 하기 => `class(score$school)`)


<br>

### B. `data.table` syntax 
SQL과 유사

```R
DT[i(row), j(column), by(group)]

#e.g.여학생들의 학교별 stat 평균 및 sd
score[sex=="F", .(m_stat=mean(stat),sd_stat=mean(stat)), by=school]
```


1. `i`(row)
    - **subset** <br>
      1) 조건에 맞는 행뽑기 <br>
      (date.table) `nrow(flights[origin=='JFK'& month==6])`    (comma 찍어도 되고 안 찍어도 되고!)<br>
      (dplyr) `flights %>% filter(origin=='JFK'& month==6) %>% nrow`
      <br>

      2) 특정 행 뽑기: `flights[1:2]`

    - **reorder** : origin은 오름차순으로, dest는 내림차순으로 정렬<br>
      `flights[order(origin, -dest)]` <br>
      (= `flights[  ][order(origin, -dest)]` : 첫번째 괄호 argument 모두 생략)





2. `j`(column) 
    - "select" : 변수(들) 뽑기(`list() = .()`)
      ```R
      #data.frame
      as.data.frame(flights)["arr_delay"]`     
      
      #data.table
      flights[, arr_delay]                     
      flights[, .(arr_delay)]                  
      flights[, list(arr_delay)]               
      
      #dplyr
      flights %>% select(arr_delay)            
      ```

      cf. "여러개 뽑을때" 
      ```R
      flights[, .(arr_delay, dep_delay)]
      flights[, list(arr_delay, dep_delay)]
      
      flights[,c("arr_delay", "dep_delay")]     #data.frame 방법처럼도 가능 
      
      #또는 다음과 같은 방법으로도 가능; ".." 또는 "with=FALSE"
      select_cols = c("arr_delay", "dep_delay")
      flights[ , ..select_cols]
      flights[ , select_cols, with = FALSE]
      ```

      cf. 특정 column을 빼고 싶을때
      ```R
      flights[,!c("arr_delay", "dep_delay")]
      flights[,-c("arr_delay", "dep_delay")]
      ```

      cf. "rename" (좌변에 새로운 이름, .()대신 list() 사용 가능)
      ```R
      flights[, .(delay_arr=arr_delay, delay_dep=dep_delay)]
      ```

    - "compute or do" 
      1) 특정 변수에 대해 연산 실행 
          ```R
          flights[, sum( (arr_delay + dep_delay) < 0 )]
          ```
          cf. `flights[, (arr_delay + dep_delay) < 0 ]` : 모든 행에 대해 논리연산 결과를 TRUE or FALSE 로 반환

      2) "summarize()"
          ```R
          flights[origin == "JFK" & month == 6,.(m_arr = mean(arr_delay),m_dep = mean(dep_delay))]
          #      m_arr    m_dep
          #1: 5.839349 9.807884

          #variable name 따로 안 지정해도 된다
          flights[origin == "JFK" & month == 6,.(mean(arr_delay),mean(dep_delay))]
          #         V1       V2
          #1: 5.839349 9.807884
          ```


      3) 개수 세기
          ```R
          #data.table
          flights[origin == "JFK" & month == 6, .N] #위의 nrow랑 동일
          
          #data.table
          flights[origin == "JFK" & month == 6, length(dest)]
          
          #dplyr
          flights %>% filter(origin == "JFK" & month == 6) %>% summarize(Count=n())
          flights[origin=="JFK" & month==6] %>% nrow()
          ```





3. `by`(group) : (group_by()처럼) 같은 그룹인 행끼리 묶음
  - "by"
    (아래 세개 모두 같은 표현)
    ```R
    flights[, .(.N), by = .(origin)] 
    flights[, .(.N), by = "origin"]
    flights[, .N, by = origin]
    ```

    - row 조건 추가: `flights[carrier == "AA", .N, by = origin]`
    - 그룹 조건 추가: `flights[carrier == "AA", .N, by = .(origin, dest)]`
    - column 연산 추가: `flights[carrier == "AA",.(mean(arr_delay), mean(dep_delay)),by = .(origin, dest, month)]`


  - "keyby" : group 변수를 오름 차순으로 정렬
    ```R
    flights[carrier == "AA",.(mean(arr_delay), mean(dep_delay)),keyby = .(origin, dest, month)]
    ```

  - "chaining" : `DT[][][]..`
    ```R
    flights[carrier == "AA", .N, by = .(origin, dest)][order(origin, -dest)]
    ```


  - "expression in by" : TRUE/FALSE 로 group나눠서 제시된다.
    ```R
    flights[, .N, .(dep_delay>0, arr_delay>0)]
    #   dep_delay arr_delay      N
    #1:      TRUE      TRUE  72836
    #2:     FALSE      TRUE  34583
    #3:     FALSE     FALSE 119304
    #4:      TRUE     FALSE  26593
    ```
    
  - 여러행에 있어서 "같은" summarize를 반복하고 싶을때
    - ".SD" : Subset of data "모든 열에 대하여!"
      ```R
      > DT
         ID A  B  C
      1:  b 1  7 13
      2:  b 2  8 14
      3:  b 3  9 15
      4:  a 4 10 16
      5:  a 5 11 17
      6:  c 6 12 18
      > DT[, print(.SD), by = ID]
         A B  C
      1: 1 7 13
      2: 2 8 14
      3: 3 9 15
         A  B  C
      1: 4 10 16
      2: 5 11 17
         A  B  C
      1: 6 12 18
      > DT[, lapply(.SD, mean), by = ID]
         ID   A    B    C
      1:  b 2.0  8.0 14.0
      2:  a 4.5 10.5 16.5
      3:  c 6.0 12.0 18.0
      ```

    - ".SDcols" : "특정 열에 대하여"
      ```R
      > DT[,lapply(.SD, mean), by=ID, .SDcols=c("A", "B")]
         ID   A    B
      1:  b 2.0  8.0
      2:  a 4.5 10.5
      3:  c 6.0 12.0
      ```

    - "subset .SD for each group"
      ```R
      flights[, head(.SD, 2), by = month]
      ```

    - "concatenate" : 주루룩 이어붙이기
      ```R
      > DT[, .(val = c(A,B)), by = ID]
          ID val
       1:  b   1
       2:  b   2
       3:  b   3
       4:  b   7
       5:  b   8
       6:  b   9
       7:  a   4
       8:  a   5
       9:  a  10
      10:  a  11
      11:  c   6
      12:  c  12
      ```

