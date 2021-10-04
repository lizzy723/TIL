# tidyr : wide ↔︎ long

### A. R base `reshape()`
	
- wide에서 long
  ```
  reshape(score_wide, idvar="student", 
                      timevar="exam",    #새로 만들기(key)
                      v.names="math",    #새로 만들기(value)
                      varying=2:4, 
                      direction="long") 
  ```
  => (long에서) exam: 1,2,3

- long에서 wide
  ```
  reshape(score_long, direction="wide") 
  ```

<br>


### B. reshape2 `melt()`, `dcast()`
	
- wide에서 long
  ```
  melt(score_wide, id.var=c("student","age"),
                    variable.name="exam", 		#새로 만들기(key)
                    value.name="math",    		#새로 만들기(value)
                    measure.vars=c("mid1","mid2","final")))
  ```
  => (long에서) exam: mid1, mid2, final

- long에서 wide
  ```
  dcast(score_long, student+age ~ exam, value.var="math")
  ```
  cf. `acast()`도 있다


<br>

### C. tidyr "변수"를 모으고 `gather()`, 펼치자 `spread()`
	
- wide 에서 long
  ```
  gather(score_wide, key= exam, 
          value=math, 
          c(mid1, mid2, final)) 
  ```
  * (long에서) exam: mid1, mid2, final
  * `c(mid1, mid2, final)`에서 `-c(student, age)` 또는 `mid1:final`도 같은 표현

- long 에서 wide
  ```
  spread(score_long, key=exam, 
          value=math) 
  ```
  (추가 argument) `fill=0`(missing value)


- "fill NA" (spread 하면서 생기는 NA)
	* `spread(data, key, value, fill=0)`
	* `data <-replace(data, is.na(data),0)`


- 예시) "n >50인 species_id list 만들어서"
  ```
  species_counts <- surveys_complete %>%
    count(species_id) %>% 
    filter(n >= 50)
  ```
  "특정 조건에 해당하는 애들만 남기기"
  ```
  surveys_complete <- surveys_complete %>%
    filter(species_id %in% species_counts$species_id)
  ```
