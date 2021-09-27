# dplyr : data manipulation


### A. tibble 만들기 

* 방법1: `tibble()`
  ```R
	dt <- tibble(x = 1:5, y=1, z=x^2+y)
  ```
	**indexing**: `$`과 `[[]]`은 같다 e.g.  `dt$x; dt[['x']];dt[[1]]`
* 방법2: `as_tibble(data)`
* `glimpse(data)`: 데이터 확인

<br>

### B. data manipulation

* `filter()`, `arrnage()`: 관측치(observation) 관련
  ```R
  filter(data, sex=="M", ..)              #참인 observation만 남기기/(R base)data[data$sex=="M", ]
  filter(arr>30 | dep >30)
  arrange(data, math, desc(stat))         #observation 오름차순, 내림차순 정렬
  ```

* `select()`, `mutate()` + `rename()`, `transmute()`:  변수(variable) 관련
  ```R
  select(data, school, stat, sex)          #variable 선택(2:4 도 가능, school:sex도 가능, -(school:sex)도 가능)
  select(data, 새로운 이름 = 기존변수)          #이 변수만 남음; + starts_with(""), ends_with(""), matches(".t."), contains("")
  #cf. 만약 이름만 바꾸고 싶다면, rename(data, 새로운 이름 = 기존 이름)
  
  mutate(data, avg = (stat + math)/2)      #variable 만들기, 같은 이름이 있다면 대체됨
  mutate(data, a)                          #column이름이 a이고, a로만 가득찬 variable 생성
  #cf. 새로 만든 변수만 남기고 싶다면, transmute(data, avg = (stat + math)/2) 
  ```

* `group_by()`, `summarize()`
  ```R
  #group summary
  group_by(data, school) %>% group_rows()                         #group이 어떻게 나눠졌는지 index 제시
  %>% summarize(data, mu_math = mean(math, na.rm=TRUE),           #group별 요약(결측치 제거 = TRUE)
                      N = n(),                                    #group별 개수세기
                      Nd = n_distinct(school),                    #group별 unique 개수세기
                      first = first(x),                           #group별 첫번째 x
                      last = last(x),                             #group별 마지막 x
                      nth= nth(x, n))                             #group별 nth x
  ```
  * `group_by(data, month = as.factor(month))` : 변수 수정
  * `group_by(data, day_binned = cut(day,3))` : 새로운 기준으로 나누기
  * `group_by(data, "month")` : "month"라는 새로운 column이 생겨버림

<br>

### C. 그 외

* sampling
  * `sample_n(data, 5)` : sample 5개 뽑기
  * `sample_frac(data, 0.5)` : 50% sample 뽑기

* pipe : `%>%` (data 다 빼기)
* membership : `%in%`

* `head(data, n)`
* `knitr::kable(data)`
* `count(data, 변수명)` : 변수 category당 몇 개의 observation인지 세줌


