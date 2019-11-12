# 元素

HTML 中的属性是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符

## 标签语义化

常见标签参考网站：[http://html5doctor.com](http://html5doctor.com/)

- header
- section
- footer
- nav
- article: 独立内容(stand-alone content)
- aside
- main: 只能出现一次
- i: 表示与周围元素不一样的内容，表现为斜体(italic)
- b:与 i 语义差不多，表现为粗体(boldface)
- time: 表示时间
- q: 引用
- em/strong：语义上表示斜体/强调

### ARIA

accessible rich Internet application

针对无障碍阅读

- role 属性

标签内增加，方便设备解析。常见的值有 navigation, banner, form, main, search,
application

写在任意标签上比如`<a href=”#” role=”navigation”></a>`

- 其他属性

通常都是 aria-开头，可以自定义

## SEO

摘自[biaochenxuying/blog](https://github.com/biaochenxuying/blog/blob/master/interview/fe-interview.md)

- 了解搜索引擎如何抓取网页和如何索引网页。  
  需要知道一些搜索引擎的基本工作原理，各个搜索引擎之间的区别，搜索机器人（SE robot 或叫 web cra 何进行工作，搜索引擎如何对搜索结果进行排序等等。
- Meta 标签优化  
  主要包括主题（Title)，网站描述(Description)，和关键词（Keywords）。还有一些其它的隐藏文字比如 Author，Category（目录），Language（编码语种）等。
- 如何选取关键词并在网页中放置关键词。  
  搜索就得用关键词。关键词分析和选择是 SEO 最重要的工作之一。首先要给网站确定主关键词（一般在 5 个上后针对这些关键词进行优化，包括关键词密度（Density），相关度（Relavancy），突出性（Prominency）等等。
- 了解主要的搜索引擎。  
  虽然搜索引擎有很多，但是对网站流量起决定作用的就那么几个。主要有 Google，Yahoo，Bing，百度，搜狗，有道等。  
  不同的搜索引擎对页面的抓取和索引、排序的规则都不一样。
  还要了解各搜索门户和搜索的关系，比如 AOL 网页搜索用的是 Google 的搜索技术，MSN 用的是 Bing 的技术。
- 主要的互联网目录。  
  Open Directory 自身不是搜索引擎，而是一个大型的网站目录，他和搜索引擎的主要区别是网站内容的收集方目录是人工编辑的，主要收录网站主页；  
  搜索引擎是自动收集的，除了主页外还抓取大量的内容页面。
- 按点击付费的搜索引擎。  
  随着互联网商务的越来越成熟，收费的搜索引擎也开始大行其道。最典型的有 Overture 当然也包括 Google 的广告项目 Google Adwords。越来越多的人通过搜索引擎的点击广告来定位商业网站，学会用最少的广告投入获得最多的点击。
- 搜索引擎登录。  
  网站做完了以后，将网站提交（submit）引擎。  
  如果是商业网站，主要的搜索引擎和目录都会要求你付费来获得收录（比如 Yahoo 要 299 美元）， Google 目前还是免费。
- 链接交换和链接广泛度（Link Popularity）。  
  网页内容都是以超文本（Hypertext）的方式来互相链接的，网站之间也是如此。除了搜索引擎以外，人们也不同网站之间的链接来 Surfing（“冲浪”）。  
  其它网站到你的网站的链接越多，你也就会获得更多的访问量。网站的外部链接数越多，会被搜索引擎认为它的重要性越大，从而给你更高的排名。
- 标签的合理使用。
