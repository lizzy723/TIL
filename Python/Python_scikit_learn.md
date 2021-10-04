# scikit-learn cheatsheet

<details close>
  <summary>Preprocessing</summary><br>
  
### A. Multicollinearity
regression을 진행할 경우 correlation 확인해서 correlation이 1 또는 -1인 경우 제외하기

### B. Continuous variable
- **Standardize features** by removing the mean and scaling to unit variance

    ```python
    from sklearn.preprocessing import StandardScaler

    scaler = StandardScaler()
    scaler.fit(X_num)
    X_num_scaled = scaler.transform(X_num)
    X_num_scaled = pd.DataFrame(X_num_scaled, index = X_num.index, columns=X_num.columns) #다시 datafram으로 만들기
    ```

    - $z = (x - u) / s$
    - scaling(`with_mean=False`)만 하거나 centering(`with_std=False`)만 할 수도 있다.
    - [https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)

    ```python
    #cf. categorical variable 까지 다 scaling 해버리기
    from sklearn.preprocessing import StandardScaler

    scaler =  StandardScaler()
    X_train_scaled = pd.DataFrame(scaler.fit_transform(X_train), columns = X.columns)
    X_test_scaled = pd.DataFrame(scaler.transform(X_test), columns = X.columns)
    ```

- Make zscore: standardized by mean and standard deviation of input array a.

    ```python
    x_train = x_train.apply(zscore)
    x_test = x_test.apply(zscore)
    ```

### C. categorical variable
- 범주형 대상 Class 컬럼을 수치로 바꾸어 표현하기
- one-hot 벡터로 변환하기

### D. Split dataset

```python
#방법1
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.6)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.2, random_state = 1, stratify = y)
#random_state = 1 (seed 설정)
#shuffle = False (순서대로 자름)
#strafy = y(y 범주 비율별로 자름)

#방법2: 순서대로 naive하게 자르기.
from math import floor
def train_test_split_df(df, test_size):
  # TODO: test_size(0 < test_size < 1) 비율에 따라 테스트/학습 데이터프레임으로 나누어 반환
  div = floor(df.shape[0] * (1 - test_size))
  return df.loc[:div], df.loc[div + 1:]

train_df, test_df = train_test_split_df(df, 0.1)
```

</details>


<details close>
  <summary>Models</summary><br>

    

### A. supervised learning
1. classification
  - Logistic regression

      ```python
      from sklearn.linear_model import LogisticRegression

      # LogisticRegression 모델 생성/학습
      model_lr = LogisticRegression()  #iteration error가 뜰 경우 max_iter=1000
      model_lr.fit(X_train, y_train)

      #prediction
      pred = model_lr.predict(X_test)

      #class 순서 확인
      model_lr.classes_

      #class별 coefficient
      model_lr.coef_
      ```

  - RandomForest

      ```python
      from sklearn.ensemble import RandomForestClassifier

      # random forest 모델 생성/학습
      rfc = RandomForestClassifier()
      rfc.fit(X_train, y_train)

      #prediction
      y_pred = rfc.predict(X_test) 
      ```

  - Gradient Boost

      ```python
      from sklearn.ensemble import GradientBoostingClassifier

      gbc =  GradientBoostingClassifier(random_state=0)
      gbc.fit(X_train, y_train)

      y_pred =  gbc.predict(X_test)
      ```

  - LightGBM

      ```python
      from lightgbm import LGBMClassifier

      lgbm =  LGBMClassifier(random_state=0)
      lgbm.fit(X_train, y_train)
      y_pred =  lgbm.predict(X_test)
      ```

      ```python
      import lightgbm as lgb

      params = {
          "max_bin": 512,
          "learning_rate": 0.05 , ### epsilon 
          "boosting_type": "gbdt" , ### gradient boosting 
          "objective": "binary" , ### 
          "metric": "binary_logloss" , ###
          "num_leaves": 10,
          "verbose": -1,
          "min_data": 100,
          "boost_from_average": True
      }

      model = lgb.train(params, d_train, 10000, 
                        valid_sets=[d_test], early_stopping_rounds=50, verbose_eval=1000)
      ```

  - XGBoost

      ```python
      from xgboost import XGBClassifier

      # XGBClassifier 모델 생성/학습
      model_xgb = XGBClassifier()
      model_xgb.fit(X_train, y_train)

      #prediction
      pred = model_xgb.predict(X_test)

      # XGBClassifier 모델의 feature_importances_를 이용하여 중요도 plot
      sns.barplot(x = X.columns, y = model_xgb.feature_importances_)
      #plt.bar(X.columns, model_xgb.feature_importances_)
      ```

2. regression
    - linear regression

        ```python
        from sklearn.linear_model import LinearRegression

        # LinearRegression 모델 생성/학습
        model_lr = LinearRegression()
        model_lr.fit(X_train, y_train)

        #coefficient
        model_lr.coef_
        ```

    - Light GBM regression: microsoft에서 나온 regressor
    → skicit learn에도 구현되어 있다. (classification 부분 참조하기)

        ```python
        from lightgbm import LGBMRegressor

        model_reg = LGBMRegressor()
        model_reg.fit(X_train, y_train)
        ```

    - XGBoost

        ```python
        from xgboost import XGBRegressor

        # XGBRegressor 모델 생성/학습
        model_reg = XGBRegressor()
        model_reg.fit(X_train, y_train)

        pred = model_reg.predict(X_test)

        # model_xgb.feature_importance_ 시각화하기
        plt.bar(X_train.columns, model_xgb.feature_importances_)
        ```

3. 시계열분석(FBProphet)
    - 전처리

        ```python
        # 공식 레퍼런스 참조: https://facebook.github.io/prophet/docs/quick_start.html#python-api
        # 한국의 확진자 수 데이터를 FBProphet에 학습하기 위한 데이터프레임으로 재구성하시오.
        df = pd.DataFrame(df_case.reset_index()[['Date', 'Korea, South']].to_numpy(), columns=['ds', 'y'])
        ```

    - 학습하기

        ```python
        from fbprophet import Prophet

        model = Prophet(changepoint_range=1.0)
        model.fit(train_df)
        ```

    - 학습 모델 결과 시각화

        ```python
        from fbprophet.plot import add_changepoints_to_plot

        model.plot_components(pred);

        #빨간색은 변화시점
        fig = model.plot(pred)
        plt.plot(test_df['ds'], test_df['y'], 'g-', label='actual')
        changes = add_changepoints_to_plot(fig.gca(), model, pred)
        plt.legend()
        ```

    - 미래 30일 예측

        ```python
        # 전체 df를 학습한 후, 향후 30일에 대한 데이터 예측하기
        # Hint) make_future_dataframe() 메소드 활용
        model = Prophet(changepoint_range=1.0)
        model.fit(df)
        future = model.make_future_dataframe(30)
        pred = model.predict(future)
        model.plot(pred);
        ```

### B. unsupervised learning
1. clustering
    - K-means clustering

        ```python
        from sklearn.cluster import KMeans

        km = KMeans(n_clusters = 3, random_state=0)
        km.fit(X_1)

        #결과 확인
        centers = km.cluster_centers_
        y_km = km.labels_   #label -> 클러스터링 결과 확인하기.

        #prediction
        test_cluster = km.fit_predict(test_x)
        ```

        "**K 수 결정하기"**

        - elbow method

            ```python
            distortions = []
            for i in range(1, 11):
              km = KMeans(n_clusters = i, random_state=1)
              km.fit(X_1)
              distortions.append(km.inertia_)

            plt.plot(range(1, 11), distortions, marker = 'o')
            plt.xlabel('Number of clustes')
            plt.ylabel('Distortion value')
            plt.show()
            ```

            ```python
            from yellowbrick.cluster import KElbowVisualizer

            km = KMeans()
            visualizer = KElbowVisualizer(km, k=(1,11))
            visualizer.fit(train_x)
            visualizer.poof()
            ```

            ```python
            !pip install kneed
            # 아래 parameter를 참고하여 kneed 모듈을 사용하여 자동으로 elbow값을 찾아보세요.
            from kneed import KneeLocator

            kneedle = KneeLocator(x=k_range, y=distortions, S=1.0, curve="convex", direction="decreasing")
            print(f"최적의 k : {round(kneedle.elbow, 3)}")
            print(f"최적의 k의 y값 : {round(kneedle.elbow_y, 3)}")

            kneedle.plot_knee()
            ```

        - silhouette method

            <img width="554" alt="Screen Shot 2021-09-24 at 1 58 03 PM" src="https://user-images.githubusercontent.com/43725183/134620604-3f24f466-9f5a-4c69-a873-3a95dfa39d20.png">

            - cluster내의 거리와 cluster간의 거리를 사용한 계수로 Silhouette coefficient(SC)값이 최대가 되는 k를 찾는 방법.
            - 각 cluster 사이의 거리가 멀고 cluster 내 데이터의 거리가 작을수록 군집 분석의 성능이 좋음. Silhouette 값은 -1에서 1까지 가능하며, 0일 경우에는 cluster간의 변별력이 없다는 의미. -1에 가까울수록 clustering의 결과가 좋지 않음을 의미.

            ```python
            # silhouette_score 모듈을 사용해봅니다.
            # [주의!] silhouette_score는 array 형태를 읽을 수 있습니다. 
            # [주의!] 군집간의 거리 계산을 필요로 하기때문에, 최소 2개이상의 label/cluster가 있어야 합니다.
            from sklearn.metrics import silhouette_score

            silhouette_scores = [] 
            k_range = range(2,11)
            for i in k_range:
              km = KMeans(n_clusters = i)
              km.fit(train_x)
              label=km.predict(train_x)
              sc_value = silhouette_score(np.array(train_x), label, metric="euclidean", sample_size=None, random_state=None)
              silhouette_scores.append(sc_value)
              print(f'Silhouette score(n={i}): {sc_value}')
            ```

            ```python
            # SilhouetteVisualizer 사용해서 훈련(training)과 그래프를 한번에 해결해보세요.
            from yellowbrick.cluster import SilhouetteVisualizer

            # k의 범위를 지정해주세요.
            # [주의!] 최소 2개이상의 label/cluster가 있어야 합니다.
            k_range = range(2,6)
            for i in k_range:
                km = KMeans(n_clusters=i, init="k-means++")
                visualizer = SilhouetteVisualizer(km)
                visualizer.fit(train_x)
                visualizer.poof()
            ```

    - Agglomerative clustering
        - 기본 사용방법

            ```python
            from sklearn.cluster import AgglomerativeClustering

            aggl = AgglomerativeClustering(n_clusters=3, linkage="ward", affinity="euclidean").fit(train_x)
            aggl_labels = aggl.labels_  #라벨 확인
            ```

        - AgglomerativeClustering 파라미터 참고사항

            ```
            - linkage 종류 : {‘ward’, ‘complete’, ‘average’, ‘single’}
            - linkage="ward"이면, affinity="euclidean"만 가능.
            - distance_threshold!=None 이면, n_clusters=None 이어야함.
            - distance_threshold!=None 이면, compute_full_tree=True 이어야함.
            ```

        - dendrogram 그리기

            ```python
            from matplotlib import pyplot as plt
            from scipy.cluster.hierarchy import dendrogram, linkage

            sample_arr = [[i] for i in [2, 8, 0, 4, 1, 9, 9, 0]]
            sample_arr  #순서대로 인덱스가 0,1,2,..., 7이다.

            #linkage matrix 만들기
            sample_linkage = linkage(sample_arr, "single")

            #dendrogram 그리기
            fig = plt.figure(figsize=(13, 6))
            dn = dendrogram(sample_linkage)
            plt.show()
            ```
            <img width="400" alt="Screen Shot 2021-09-24 at 1 59 11 PM" src="https://user-images.githubusercontent.com/43725183/134620688-43b09c09-ae0c-4155-abeb-86f203c82cb1.png">
            

            ```python
            def create_linkage(model):
              # 각 노드에 총 point수를 계산하기.
              counts = np.zeros(model.children_.shape[0]) # children 길이만큼 0 채운 array.
              n_samples = len(model.labels_) # 각 point의 cluster label.
              for i, merge in enumerate(model.children_):
                current_count = 0
                for child_idx in merge:
                  if child_idx < n_samples:
                    current_count += 1  # leaf node
                  else:
                    current_count += counts[child_idx - n_samples]
                counts[i] = current_count

              linkage_matrix = np.column_stack([model.children_, model.distances_, counts]).astype(float)
              return linkage_matrix

            plt.title('Agglomerative Clustering Dendrogram')
            linkage_matrix = create_linkage(aggl_dend)
            dendrogram(linkage_matrix, truncate_mode="level", p=3)  
            #3개이상의 샘플을 포함한 cluster만 dendrogram에 나타난다. 
            #샘플 수가 너무 많을 경우 사용.
            plt.show()
            ```

    - DBSCAN
        - parameters

            ```
            - eps(epsilon): 기준점부터의 반경.
            - min_samples: 반경내 있어야할 최소 data points.
            ```

        - 기본 사용방법

            ```python
            from sklearn.cluster import DBSCAN

            dbscan = DBSCAN(eps=0.2, min_samples=6)
            dbscan.fit(moon_data)

            #결과 확인
            dbscan_label = dbscan.labels_
            set(dbscan_label)  #-1은 outlier
            ```

        - ARI로 평가하기(→ label이 있는 경우)

            ```python
            from sklearn.metrics import adjusted_rand_score

            dbscan_ari = adjusted_rand_score(moon_labels, dbscan_new_labels)
            print(f'Adjusted rand index (ARI) of DBSCAN: {round(dbscan_ari,4)}')
            ```

    - HDBSCAN
        - parameters

            ```
            - min_cluster_size (default=5): 군집화를 위한 최소한의 cluster 사이즈.
            - min_samples (default=None) : 반경내 있어야할 최소 data points.
            - cluster_selection_epsilon(default=0.0): 거리 기준. 이 기준보다 아래의 거리는 cluster끼리 merge 됨.
            ```

        - 기본 사용 방법

            ```python
            !pip install hdbscan

            import hdbscan
            hdbscan_model = hdbscan.HDBSCAN(min_cluster_size=5)

            hdbscan_label = hdbscan_model.fit_predict(hdb_data)
            ```

        - 시각화

            ```python
            # [문제 33]에서 최적으로 판단되는 파라미터를 사용해 hdbscan 모델을 훈련시켜보세요.
            # [참고] 시각화 생성을 위해 gen_min_span_tree=True로 훈련시켜야 합니다.
            hdbscan_model = hdbscan.HDBSCAN(min_cluster_size=5, min_samples=None, cluster_selection_epsilon=0.1, gen_min_span_tree=True).fit(hdb_data)

            # 훈련된 모델을 사용해서 minimum_spanning_tree 를 생성해보세요.
            # 각 point를 이어주는 line을 distance를 점수화한 mutual reachabillity를 사용하여 나타낸 그래프입니다.
            # point간의 거리를 나타낸 것이 아닌, line은 그려나가면서 아직 추가되지 않은 point들 중에서 mutual reachabillity가 가장 낮은 point를 하나씩만 추가하는 방식으로 진행.
            hdbscan_model.minimum_spanning_tree_.plot(edge_cmap="viridis", 
                                                  edge_alpha=0.9, 
                                                  node_size=10, 
                                                  edge_linewidth=1)
            ```

            ```python
            # 훈련된 모델을 사용해서 condensed_tree 를 생성해보세요.
            # [참고] cluster도 함께 보기위해 select_clusters=True로 설정해주세요.
            # 가장 오래 버틴 cluster 순으로 cluster을 분류합니다. 
            hdbscan_model.condensed_tree_.plot(select_clusters=True)
            ```

2. PCA

    ```python
    from sklearn.decomposition import PCA

    # PCA를 이용해 Dimensionality Reduction 수행하기
    pca = PCA()
    pca.fit(X_train)
    plt.plot(range(1, len(pca.explained_variance_) + 1), pca.explained_variance_)
    plt.grid()

    #PC score
    pca.transform(X_train)
    ```
</details>
  
<details close>
  <summary>model evaluation</summary><br>
  
### A. 범주형 자료
    - Accuracy score

        ```python
        from sklearn.metrics import accuracy_score

        accuracy_score(y_test, y_pred)
        ```

        범주형 목적변수는 임의 기준으로 분류된 것이기 때문에, 인접한 클래스에 할당되어도 마냥 틀린 분류라고 보긴 어렵다. 따라서 기존의 accuracy 뿐만 아니라 아래와 같은 방법으로 인접 accuracy도 구해보는 것이 좋다. 

        ```python
        precise_accuracy =  np.sum(y_pred==y_test) / len(y_pred)
        adjacent_accuracy =  np.sum(np.abs(y_pred - y_test) <= 1) / len(y_pred)
        ```

    - Confusion matrix

        ```python
        from sklearn.metrics import confusion_matrix

        cm =  confusion_matrix(y_test, y_pred)
        ```

    - classification report

        ```python
        from sklearn.metrics import classification_report

        # Predict를 수행하고 classification_report() 결과 출력하기
        pred = model_lr.predict(X_test)

        print(classification_report(y_test, pred))
        ```

    - precision-recall curve

        ```python
        from sklearn.metrics import plot_precision_recall_curve

        fig = plt.figure()
        ax = fig.gca()

        disp_lr = plot_precision_recall_curve(model_lr, X_test, y_test, ax=ax)
        disp_xgb = plot_precision_recall_curve(model_xgb, X_test, y_test, ax=ax)
        ```

    - ROC curve

        ```python
        from sklearn.metrics import plot_roc_curve

        fig = plt.figure()
        ax = fig.gca()

        disp_lr = plot_roc_curve(model_lr, X_test, y_test, ax=ax)
        disp_xgb = plot_roc_curve(model_xgb, X_test, y_test, ax = ax)
        ```
### B. 연속형 자료
    - MAE, MSE

        ```python
        from sklearn.metrics import mean_absolute_error, mean_squared_error
        from math import sqrt

        pred = model_reg.predict(X_test)

        print(mean_absolute_error(y_test, pred))
        print(sqrt(mean_squared_error(y_test, pred)))
        ```

    - R2

        ```python
        from sklearn.metrics import r2_score
        # test_df와 pred를 비교하여 r2_score 평가
        print('R2 Score: ', r2_score(test_df['y'], pred['yhat']))
        ```

</details>  

