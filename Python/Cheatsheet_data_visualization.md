# matplotlib & seaborn

<img width="450" alt="Screen Shot 2021-09-13 at 10 00 07 PM" src="https://user-images.githubusercontent.com/43725183/133088026-42213682-6d21-4a32-ab2e-6e7c4648caea.png">

<details close>
  <summary>Import module</summary><br>
    
    
```python
import matplotlib.pyplot as plt
import seaborn as sns
```
</details>

<details close>
  <summary>Distributions</summary><br>
  
### A. histogram-based(+ scatterplot)
- continuous variable
- bar graph 높이가 없을때는 bin수를 조정해보기.
- hue 순서 조정하기(`hue_order=['L', 'M', 'H']`)

    ```python
    # one variable
    sns.histplot(df["age"])  
    sns.histplot(x="age", hue="DEATH_EVENT", data=df, kde=True)
    sns.histplot(x="raisedhands",hue="Class", data=df, kde=True, hue_order=['L', 'M', 'H'])
    sns.histplot(x="ejection_fraction", data=df, bins=13)

    #two variables
    sns.jointplot(df["age"], df["creatinine_phosphokinase"]) 
    sns.jointplot(x='platelets', y="creatinine_phosphokinase", hue="DEATH_EVENT", data=df, alpha=0.3)

    #multiple variables
    sns.pairplot(df)  
    ```

- 값의 범위가 너무 넓을 경우 `histplot()` 등이 잘 동작하지 않으므로, `rugplot`을 활용

    ```python
    fig = plt.figure(figsize=(8, 2))
    sns.rugplot(x='price', data=df, height=1)
    ```

- pandas로 pairplot 그리기

    ```python
    pd.plotting.scatter_matrix(df.loc[:, df.columns!="class"], 
                                c = color_list, 
                                figsize= [30,30], 
                                alpha=0.3,
                                s = 50, 
                                diagonal = 'hist')
    ```

### B. boxplot-based
- x: categorical, y: continuous, hue: categorical
- 보고할때는 boxplot을 쓰는 것이 좋다!

  ```python
  sns.boxplot(df["age"])
  sns.violinplot(df["age"])
  sns.swarmplot(df["age"])
  ```

- Boxplot + jitter + hue

  ```python
  fig = plt.figure(figsize=(15, 8))

  sns.stripplot(x = df["genotype"], y = df["ID132"], hue=df["Dx"], dodge=True)
  ax = sns.boxplot(x = df["genotype"], y = df["ID132"], hue=df["Dx"], width = 0.4)

  handles, labels = ax.get_legend_handles_labels()
  l = plt.legend(handles[0:2], labels[0:2], fontsize="x-large")

  plt.xticks(size=15)
  plt.xlabel("Genotype", size=16)
  plt.ylabel("Metabolite(ID132)", size=16)
  plt.title("ID132(PC aa C42:4) & chr5:108748416:C:G", size = 20)
  plt.savefig("/Users/lizzychoi/Downloads/ID132_chr5_108748416_C_G_genotype.pdf.pdf", transparent=True)
  ```

### C. bar graph
- categorical variable

  ```python
  sns.countplot(x="Class", data=df, order=["L", "M", "H"])
  sns.countplot(x="gender", hue="Class", data=df, hue_order=["L", "M", "H"])
  #y축은 count

  #그래프 방향을 바꾸고 싶다면 x대신 y argument를 넣어준다.
  #NA 값은 다음과 같이 처리해서 확인한다. 
  sns.countplot(y='manufacturer', data=df.fillna('n/a'), order=df.fillna('n/a')['manufacturer'].value_counts().index)
  ```

### D. heatmap

```python
# DataFrame의 corr() 메소드와 Seaborn의 heatmap() 메소드를 이용하여 Pearson's correlation 시각화하기

sns.heatmap(df.corr())
sns.heatmap(df.corr()[['blueWins']], annot=True)
```

```python
# upper triangle 다 True로 만들기
mask = np.zeros_like(corr, dtype=np.bool)
mask[np.triu_indices_from(mask)] = True

f, ax = plt.subplots(figsize=(11, 9))
cmap = sns.diverging_palette(1,200, as_cmap=True)

sns.heatmap(corr, mask = mask, cmap = cmap, vmax = 1, vmin = -1, center = 0, linewidths=2)
```

</details>
 
 
<details close>
  <summary>그 외의 그래프 그리기</summary><br>
  
- 산포도(scatter plot)

  ```python
  plt.scatter(x=y_test, y=pred, alpha=0.005)
  sns.histplot(x=y_test, y=pred)  #이름이 histplot이지만 scatter plot을 그려준다. 
  ```

- 라인 더하기

  ```python
  plt.plot([0,60000], [0,60000], 'r-')
  ```

- 누적 바 그래프

    ```python
    #culmulative sum을 구해준다. 
    d = data[data.columns[4:]].cumsum(axis=1)
    d = d[d.columns[::-1]]

    colors = ['r', 'g', 'b', 'c', 'm', 'y', 'purple'][::-1]
    for idx, c in enumerate(d.columns[:-1]):
      sns.barplot(x=c, y='country', data=d, label=c, color=colors[idx])
    ```

- 바 그래프 + count annotation

    ```python
    g = sns.factorplot(x = 'class', data = df, kind = 'count', palette = 'YlGnBu', size = 6)
    g.ax.xaxis.set_label_text("Type of Defect")
    g.ax.yaxis.set_label_text("Type of Count")
    g.ax.set_title("The number of Defects by Defect type")
    plt.plot()
    # (문제) Barplot의 bar 상단에 값을 text로 달아줍니다.
    for p in g.ax.patches:
      g.ax.annotate((p.get_height()), (p.get_x() + 0.2, p.get_height() + 10))
    ```

- ploty-Choropleth
    - 미국 지도

        ```python
        # ff.create_choropleth() 메소드를 이용하여 Choropleth 플랏하기
        # Hint) 공식 레퍼런스 참조: https://plotly.com/python/county-choropleth/#the-entire-usa
        import plotly.figure_factory as ff

        fig = ff.create_choropleth(
            fips=fips, values=data,
            show_state_data=False,
            colorscale=colorscale,
            binning_endpoints=list(np.linspace(0.0, 1.0, len(colorscale) - 2)),
            show_hover=True, centroid_marker={'opacity': 0},
            asp=2.9, title='USA by Voting for DEM Presient'
        )

        fig.layout.template = None
        fig.show()
        ```

    - 세계 지도

        ```python
        # 공식 레퍼런스 참조: https://plotly.com/python/choropleth-maps/#world-choropleth-map
        def get_choropleth_data(date):
          # TODO: date에 해당하는 날짜로 데이터 생성
          data = go.Choropleth(
              locations = df_code.columns,
              z = df_code.loc[date],
              text = df_c.columns,
              colorscale = 'Blues',
              autocolorscale=False,
              reversescale=True,
              marker_line_color='darkgray',
              marker_line_width=0.5,
              colorbar_tickprefix = '',
              colorbar_title = 'Confirmed Cases',
          )
          return data

        # 공식 레퍼런스 참조: https://plotly.com/python/choropleth-maps/#world-choropleth-map
        date = df_case.index[-1]
        data = get_choropleth_data(date)
        fig = go.Figure(data=data)
        fig.update_layout(
            title_text='Confirmed Cases in ' + str(date),
            geo=dict(
                showframe=False,
                showcoastlines=False,
                projection_type='equirectangular'
            )
        )

        fig.show()
        ```

</details>


<details close>
  <summary>그래프 정돈하기</summary><br>
  
  
- 그래프 여러개 그리기
    - 한 그래프에 여러개 그리기

        ```python
        # 두 모델의 Precision-Recall 커브를 한번에 그리기 (힌트: fig.gca()로 ax를 반환받아 사용)
        fig = plt.figure()
        ax = fig.gca()

        disp_lr = plot_precision_recall_curve(model_lr, X_test, y_test, ax=ax)
        disp_xgb = plot_precision_recall_curve(model_xgb, X_test, y_test, ax=ax)
        ```

    - 한 그래프에 3개 이상의 그래프 그리기

        ```python
        plt.figure(figsize=(18, 15))

        plt.subplot(2, 2, 1)
        #그래프 1
        plt.subplot(2, 2, 2)
        #그래프 2
        plt.subplot(2, 2, 3)
        #그래프 3
        plt.subplot(2, 2, 4)
        #그래프 4
        plt.show()
        ```

    - x축은 공유하지만 y축의 scale은 다른 그래프를 한 그래프에 그리기

        ```python
        #그래프 1 그리고

        #그래프 2 아래 방법으로 그리기
        ax = plt.gca()
        ax2 = ax.twinx()  #x축은 공유하지만, y축은 서로 다름
        ax2.plot(top_ten_deaths.index, top_ten_deaths, 'r--')
        ax2.set_ylabel('Total Deaths', color='red', size=15)
        ```



- line style
    - 점으로 연결된 라인: `plt.plot(t.index, t, '.-')`
- tick
    - x 축 tick 없애기: `plt.xticks([])`
- 축 방향

    ```python
    ax = plt.gca()   #get current axis
    ax.invert_yaxis(). #yaxis 위아래 바꾸기

    #y axis 위치를 오른쪽으로 옮기기
    ax.yaxis.set_label_position('right')  
    ax.yaxis.tick_right()
    ```

- 축 범위

    ```python
    plt.xlim(-100, 100)
    plt.xlim(['2015', '2020']) #left, right 입력
    plt.xlim(right=df_case.index[-1])

    plt.ylim([0, rank_table.max().max() + 1])
    plt.ylim(0, df_case[country].max()*1.1)
    ```

- 축 라벨
    - 축 라벨 바꾸기 + 글자 크기: `plt.xlabel('error ($)', size=15)`
    - 축 라벨 없애기: `plt.xlabel('')`
    - x 축 라벨 글자 90도 회전: `plt.xticks(rotation=90)`
    - x 축 라벨 글자 크기: `plt.xticks(size=15)`
    - Y축 라벨 글자 숫자에서 글자로 바꾸기(첫번째 인자를 숫자, 두번째 인자를 그 숫자 위치에 넣을 글자): `plt.yticks(rank2020, rank2020.index)`
- 그래프 사이즈

    ```python
    fig = plt.figure(figsize=(15, 8))
    ```

- 색깔
    - 팔레트 색깔 바꾸기: `palette = "RdBu"`  e.g. `sns.histplot(x = "blueAvgLevel", bins= 10, data = df, hue = 'blueWins', palette = "RdBu")`
    → 오타를 내면 리스트를 확인할 수 있다.
    - 7개 색깔 추천: `colors = ['r', 'g', 'b', 'c', 'm', 'y', 'purple']`
    - muted tone으로 바꾸기: `sns.set_color_codes('muted')`
- 스타일 설정하기

    ```python
    sns.set_style("white")
    ```

- 글자 넣기

    ```python
    g = sns.barplot(y = "most severe consequence", x = "counts", data = df, orient = 'h')
    for i in range(len(df)):
        x = df.iloc[i]['counts']
        g.text(x+1000, i+0.3, x, fontsize = 10)
    ```

- tip
    - 마지막에 `plt.show()` 붙여주기
    - 그리드 그리기: `plt.grid()`
    - 데이터 포인트가 너무 많을때: `alpha=0.2`, `kind='hex'`로 지정하기
    - 패딩 자동으로 조절: `plt.tight_layout()`
    - 범례(legend) 위치: `plt.legend(loc='lower right')`
    - 그래프 제목: `plt.title('Top 20 Happiness Scores in Details')`
    - 그래프 프레임 제거: `sns.despine(left=True, bottom=True)`
    - 가장 큰 스케일로 그리기: `sns.set_context('poster')`
    - 그림 저장하기: `plt.savefig("file_name.pdf", transparent=True)`
    - 라벨이 잘릴때(margin 조절하기) : `plt.tight_layout()`

</details>


 
