# Pandas

<details close>
  <summary>Import module</summary><br>

```python
import pandas as pd
```
</details>
    
<details close>
  <summary>Read data</summary><br>
  
- csv 파일 읽기

    ```python
    df = pd.read_csv("")
    ```

- excel 파일 읽기

    ```python
    df = pd.read_excel(path, index_col=0, header = 0)
    #index_col = None이나 header=None으로 지정하면 행이름, 열이름이 없다는 뜻
    ```

- sqlite DB 읽기

    ```python
    import sqlite3

    conn = sqlite3.connect("database.sqlite")

    # table 리스트 확인
    cursor = conn. cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    print(cursor.fetchall())

    # table 불러오기
    df_country = pd.read_sql_query("SELECT * from Country", conn)
    ```

- html 파일 읽기

    ```python
    state_code = pd.read_html('https://www.infoplease.com/us/postal-information/state-abbreviations-and-state-postal-codes')[0]
    ```

</details>
    
<details close>
  <summary>Export data</summary><br>

```python
#excel 파일 쓰기
df.to_excel(path, sheet_name = "sheet1")
#index, header를 false로 하면 행이름 열이름 제외된다. 

#csv 파일 쓰기
df.to_csv(path)
```
</details>
        
<details close>
  <summary>DataFrame 만들기</summary><br>

```python
#column 하나, Index 추가
model_coef = pd.DataFrame(data = model_lr.coef_[0], index = X.columns, columns=["Model coefficient"])

#column 여러개, dictionary 형식
model_coef = pd.DataFrame(data = {'variable': X.columns, "Model coefficient": model_lr.coef_[0]})

#기존의 df와 동일한 df 만들기
df_norm = df.copy()

#이중 리스트로 만들기(2x3 matrix)
df = pd.DataFrame([[1,2,3],[4,5,6]], index = ['r1', 'r2'], columns=['c1', 'c2', 'c3'])
```
</details>
    
<details close>
  <summary>Row 추가하기</summary><br>
    
```python
#2는 마지막 행 number로 변경하기.
df.loc[2]=[ 'Apple', 14, 'Yes' ]
```
</details>

<details close>
  <summary>EDA → 각 컬럼 확인</summary><br>
    
- 삼총사: `head()`, `info()`, `describe()`

    ```python
    df.head()
    df.head(-5)    #마지막 5줄도 추가로 보여준다.

    df.info()      #missing rate, Dtype
    ```

- **continuous** variable

    ```python
    df.describe()  #count, mean, std, min, Q1, Q2, Q3, max
    ```

    **연속형 데이터의 outlier 제거하기**

    ```python
    p1 = df['price'].quantile(0.99)
    p2 = df['price'].quantile(0.1)
    print(p1, p2)

    df = df[(p1 > df['price']) & (df['price'] > p2)]
    ```

    + 추가적으로 NA 값에 평균값 넣어주기.

- **categorical** variable: categorical variable(0 or 1)의 mean 확인하기 → 0.5에 가까울수록 balanced data

    ```python
    df.gender.value_counts()  #category별 count
    df_league['id'].unique()  #category 종류
    ```

    **범주형 데이터를 아래 방법 중 적절히 판단하여 처리하기**

    1. 결손 데이터가 포함된 Row를 제거 → 너무 많은 row가 사라지게 되면 그냥 그 컬럼을 없애기.

    2. 결손 데이터를 others 범주로 변경하기

    3. 지나치게 소수로 이루어진 범주를 others 범주로 변경하기

    ```python
    #어디서부터 others로 할 것인지 보고,
    col = 'paint_color'   #column 이름만 바꾸면서 계속 진행.
    counts = df[col].fillna('others').value_counts()
    plt.grid()
    plt.plot(range(len(counts)), counts)

    #others로 변경하기.
    n_categorical = 7
    others = counts.index[n_categorical:]
    df[col] = df[col].apply(lambda s: s if str(s) not in others else 'others')
    ```

    (4. Classifier를 학습해서, 결손 데이터를 추정하여 채워넣기)

</details>
    
<details close>
  <summary>Column 수정:`mutate`, `arrange`</summary><br>
    
- dType 변경하기

    ```python
    #apply 이용하기
    df_match['home_player_1'].dropna().apply(int)

    #Lambda 함수 이용하기(datetime으로 변경하기)
    df['Date'] = df['Date'].apply(lambda s: pd.to_datetime(str(s)))

    #astype 이용하기
    moon_data_df["kmeans_label"] = moon_data_df["kmeans_label"].astype(str)
    ```

- **continuous variable**: 다중공산성을 고려하여 비율값으로 변경하기

    ```python
    #multicollinearity가 예상되면 비율로 컬럼을 바꿔준다. 
    df_census['Men'] /= df_census['TotalPop']
    df_census['VotingAgeCitizen'] /= df_census['TotalPop']
    df_census['Employed'] /= df_census['TotalPop']
    ```


- **범주형** 대상 Class 컬럼을 수치로 바꾸어 표현하기(`map()` 사용하기!)

    ```python
    category = {"L": -1, "M": 0, "H":1}
    df['Class_value'] = df["Class"].map(lambda x: category[x])

    #또는, dictionary를 인자로 바로 사용할 수 있음
    df['Class_value'] = df["Class"].map({"L": -1, "M": 0, "H":1})

    #map에 dictionary 대신 series를 사용하는 것도 가능
    df_match['home_player_1'].dropna().apply(int).map(df_player_att.groupby('player_api_id').mean()['overall_rating']).isna().sum()
    #series 정의하고(index: column)
    counties_to_fips = df_sample.set_index('County Name/State Abbreviation')['FIPS']
    #map에 인자로 넣어버림.
    fips = counties.map(counties_to_fips)
    ```

- **범주형** 대상 Class 컬럼을 수치로 바꾸어 표현하기(`LabelEncoder()` 사용하기!)

    ```python
    from sklearn import preprocessing

    categorical = ['workclass', 'marital.status', 'occupation', 'relationship', 'race', 'sex', 'native.country']
    for feature in categorical:
            le =  preprocessing.LabelEncoder()
            X_train[feature] =  le.fit_transform(X_train[feature]) 
            X_test[feature] =   le.transform(X_test[feature])

    #test 데이터셋에서 특정 값이 없을 수 있기때문에 train은 fit-transform을 하고, test는 반드시 transform으로 한다. 
    ```

- one-hot vector로 변환하기

    ```python
    # Multicollinearity를 피하기 위해 drop_first=True로 설정(logistic regression의 경우)
    # columns에 categorical variable을 넣음
    X = pd.get_dummies(df,columns = ['gender', 'NationalITy', 'PlaceofBirth', 'StageID', 'GradeID',
           'SectionID', 'Topic', 'Semester', 'Relation', 'ParentAnsweringSurvey','StudentAbsenceDays'], drop_first=True)
    y = df['Class']
    ```

- one-hot vector를 다시 범주형으로 전환하기

    ```python
    conditions_bf= [df['Pastry'],df['Z_Scratch'],df['K_Scatch'],df['Stains'],df['Dirtiness'],df['Bumps'],df['Other_Faults']]
    conditions= list(map(lambda x: x.astype(bool), conditions_bf))

    choices = ['Pastry', 'Z_Scratch', 'K_Scatch', 'Stains', 'Dirtiness', 'Bumps', 'Other_Faults']
    df['class'] = np.select(conditions, choices)
    ```


- 글자수 맞추기
    - 앞에 0 붙이기: `df_sample['State FIPS Code'] = df_sample['State FIPS Code'].apply(lambda x: str(x).zfill(2))`
- 기존의 컬럼 사용해서 새로운 컬럼 만들기

    ```python
    #apply() 쓰기
    df['is_avail_zero'] = df['availability_365'].apply(lambda x: 'Zero' if x==0 else 'Nonzero')

    #더하기: sum 함수 쓰거나 연산자 -> rowwise()하게 연산된다.
    df['_sum'] = df[['score','economy']].sum(axis =1)
    df['_sum'] = df['score'] + df['economy']
    ```

- cumsum, diff

    ```python
    #series의 각 열순으로 cumsum
    d = data[data.columns[4:]].cumsum(axis=1)

    #series의 각 행별 차이
    df_case['Korea, South'].diff()
    ```

---

- 정렬하기

    ```python
    ##series 정렬
    gb_topic_mean = df.groupby('Topic').mean()['Class_value'].sort_values(ascending=False)

    ##dataframe 정렬
    #방법1) value를 기준으로 정렬
    model_coef.sort_values(by="Model coefficient", ascending=False, inplace=True)
    #방법2) index를 기준으로 정렬
    df.sort_index()
    ```

</details>
        
<details close>
  <summary>Indexing and slicing: `select`, `filter`</summary><br>

- column 선택하기

    ```python
    X_cat = df.loc[:,['anaemia', 'diabetes']]
    X_cat = df[['anaemia', 'diabetes']]

    #cf. 컬럼 하나를 선택할때도 대괄호 사용하기. 하나만 쓰면 series indexing이다.
    df[['anaemia']]

    #이런식으로 컬럼의 순서를 반대로 바꿀 수도 있다.
    d = d[d.columns[::-1]]

    #마지막 컬럼 빼고 나머지 다 선택하기.
    X = iris_df.iloc[:, :-1]
    ```

- column 삭제하기

    ```python
    df = df.drop(['ParentschoolSatisfaction', 'Class', 'Class_value'], axis=1)
    df.drop(['ParentschoolSatisfaction', 'Class', 'Class_value'], axis=1, inplace=True)
    ```


---

- row 선택하기
    - loc또는 iloc을 사용하자.

        ```python
        #특정 row 선택
        df.loc[row_index_name]
        df.iloc[row_index_number]
        ```

    - 조건문 사용: 예) 3000미만인 creatine phosphokinase 값만 선택

        ```python
        #loc사용하기. comma를 이용해 column까지 고를 수 있다. 
        df.loc[df["creatinine_phosphokinase"]<3000, "creatinine_phosphokinase"]

        #그냥 사용하기.
        df = df[(p1 > df['price']) & (df['price'] > p2)]
        ```

    - `apply()` 사용: rowwise하게 확인. DEM 또는 REP에 해당되는 경우만 선택

        ```python
        data = df_pres.loc[df_pres['party'].apply(lambda s: str(s) in ['DEM', 'REP'])]

        #위랑 같은 결과. 논리식으로도 작성 가능
        data = df_pres.loc[(df_pres['party'] =='DEM') | (df_pres['party'] =='REP')]
        ```

    - 다른 series의 index 사용하기

        ```python
        top_ten_deaths = df_death.loc[df_death.index[-1]][top_ten_cases.index] #순서 맞춰주기
        ```

- 결측치 가지고 있는 row 제거하기

    ```python
    df_norm.dropna(inplace=True)
    ```

</details>
        
</details>
    
<details close>
  <summary>Aggregate: `groupby`, `summarize`</summary><br>
    
- group by

    ```python
    gb_gender = df.groupby('gender').mean()
    df = df.groupby('Country/Region').sum()
    ```

- summary statistic

</details>

</details>
    
<details close>
  <summary>wide ↔ long table</summary><br>
    
- long → wide

    ```python
    table_pres = pd.pivot_table(data=data, index=['state', 'county'], columns='party', values='total_votes')
    ```
</details>

</details>
    
<details close>
  <summary>Transpose table</summary><br>
    
```python
def fix_dataframe(df):
  #transpose + index 이름 정하고 + 다시 일반 column으로 바꾸기.
  df = df.transpose()
  df.index.name = 'Date'
  df.reset_index(inplace=True)
  return df
```
</details>

</details>
    
<details close>
  <summary>Table 합치기</summary><br>
    
- join
    - left join

        ```python
        df_LEFT_JOIN = pd.merge(dataframe_A, dataframe_B, left_on='key', right_on='key', how='left')
        print(df_LEFT_JOIN)
        ```

- concatenate

    ```python
    X = pd.concat([X_num_scaled, X_cat], axis=1)  #가로로 = cbind
    ```

    ```python
    #df는 dictoinary. dictionary의 key가 index로 설정된다.
    df_all = pd.concat(df, axis=0)  #세로로 = rbind
    ```
</details>



<details close>
  <summary>Tip</summary><br>
    
- Column 이름 바꾸기

    ```python
    #rename 함수 사용하기
    table_pres.rename({'DEM': 'Pres_DEM', 'REP': 'Pres_REP'}, axis=1, inplace=True)
    df_code = df_c.rename(country_to_code, axis=1)  #series를 사용해도 된다. 

    #columns에 바로 리스트 할당하기.
    df.columns = cols
    ```

- index 설정

    ```python
    df_census.set_index(['state', 'county'], inplace=True)

    #index 이름 만들기.
    df_all.index.names = ['year', 'rank']

    #index 없애기
    df_census.reset_index(inplace=True)
    ```

- column이 너무 많아서 확인하기 어려울때는 다음의 방법을 사용하자.

    ```python
    #너무 컬럼이 많아서 잘 안보일때는 다음과 같은 방법을 사용한다. 
    for c, n_na in zip(df_match.columns, df_match.isna().sum()):
      print(c, n_na)
    ```

- 결측치 관련
    - cf. 다른 문자로 결측치가 표현되어 있는경우 바꿔주기: `df[df=='?'] = np.nan`
    - 결측치 확인

        ```python
        df.isna().sum() #0이 아니면 결측치가 있다는 의미.
        df.isnull().sum()
        ```

    - 결측치 제외하고 사용

        ```python
        fips = fips[fips.notna()]  #결측치는 날리고 사용.
        ```

    - 결측치 채우기

        ```python
        df.fillna('n/a') #결측치를 'n/a'로 채우기
        X.fillna(0.0, inplace=True) #결측치를 0로 채우기

        # 최빈값으로 결측치 채우기
        for col in ['workclass', 'occupation', 'native.country']:
            df[col].fillna(df[col].mode()[0], inplace=True)
        ```

- group by를 이용해서, 리스트로 된 컬럼을 만들기.

    ```python
    ##tolist()를 사용하자.
    user_watch_dict_list = rating_df.groupby('user_id')[['user_id', 'movie_id']].apply(lambda x: x['movie_id'].tolist())
    ```
</details>

        

