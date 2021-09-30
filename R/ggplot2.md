# ggplot2


```
ggplot(data = DATA) +
	
	GEOM_FUNCTIONS(mapping = aes(MAPPING),
				   stat = STAT,
				   position = POSITION) +
	
	COORDINATE_FUNCTION +
	
	FACET_FUNCTION +

	THEME + 

	SCAILING +

	LABELING
```



1. CREAT CANVAS 
  `ggplot(data= ,mapping= )`
  
2. GEOM_FUNCTIONS(x only => y축 "count")
	
	- `geom_point(mapping = aes(x=, y=, color=, alpha=, size=, shape=),alpha=       )`

	- `geom_line()`

	- `geom_smooth(mapping = aes(x=, y=),se=F,method= 'lm')`

	- `geom_bar(mapping = aes(x=, fill="2nd variable"),position=c("fill", "dodge", 'stack'))`
	  cf. 이렇게 안되어 있어도 자동으로 bar plot을 그려주는게 geom_bar의 매력
	  `ggplot(for_bar_chart, aes(x=class, y=N)) + geom_bar(stat="identity")`     cf. default는 count

	- `geom_boxplot(mapping = aes(x=, y=),notch = TRUE)`
	  cf. `geom_dotplot(binaxis='y', stackdir='center', dotsize=0.5, binwidth=.1)`
	
	- `geom_histogram(mapping = aes(x=, y=..density..),bins=)`
	
	- `geom_density(mapping = aes(x=)`
	
	- `geom_polygon()`
	
	- `geom_map()`

	- `geom_path()`
	

3. COORDINATE_FUNCTION

	- `coord_cartesian(xlim=c(0,10))` : x,y 값을 zoom or not
	- `coord_flip()` : x,y축 바꾸기
	- `coord_fixed()`
	- `coord_polar()` 
	- `coord_quickmap()`

4. FACET_FUNCTION

	- `facet_wrap(~v1, nrow=)`
	- `facet_grid(v1~v2, nrow=)`

5. THEME

	- `theme(aspect.ratio=1,legend.position = c(0.8, 0.8))`
	- `theme_bw()`

6. SCAILING

	- `scale_y_continuous(breaks = seq(0,1,by=0.2), labels = scales::percent)`
	- `scale_x_continuous(breaks=1:12)`

7. LABELING

	- `labs(title= "",subtitle="",x="",y="",color="")`
	- `xlab("")`
	- `ylab("")`

8. 그 외

    - cowplot : `plot_grid(p1, p2, labels="AUTO")`
    - gridExtra : `grid.arrange(p1, p2, p3, p4, ncol=2)`
    - cf. `qplot(x, y, data, geom, fill)`
