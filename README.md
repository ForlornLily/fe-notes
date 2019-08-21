Base on `vuepress`

在线地址：https://forlornlily.github.io/fe-notes/

**本项目为个人在前端路上的一些笔记**

**特别感谢大佬[PanJiaChen](https://github.com/PanJiaChen)的模板**

- [网站/书籍/库](#%E7%BD%91%E7%AB%99%E4%B9%A6%E7%B1%8D%E5%BA%93)
  - [前端](#%E5%89%8D%E7%AB%AF)
    - [HTML&css](#htmlcss)
    - [JS](#js)
      - [vue](#vue)
      - [NodeJS](#nodejs)
    - [设计模式](#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)
    - [代码规范](#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83)
  - [性能](#%E6%80%A7%E8%83%BD)
  - [数据结构](#%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
  - [网络](#%E7%BD%91%E7%BB%9C)
  - [git](#git)
  - [面试](#%E9%9D%A2%E8%AF%95)
  - [测试](#%E6%B5%8B%E8%AF%95)
  - [Linux](#linux)
  - [markdown](#markdown)
  - [博客](#%E5%8D%9A%E5%AE%A2)
  - [常用库](#%E5%B8%B8%E7%94%A8%E5%BA%93)
    - [功能类](#%E5%8A%9F%E8%83%BD%E7%B1%BB)
    - [布局类](#%E5%B8%83%E5%B1%80%E7%B1%BB)
    - [数据类](#%E6%95%B0%E6%8D%AE%E7%B1%BB)
    - [部署类](#%E9%83%A8%E7%BD%B2%E7%B1%BB)
  - [VPS](#vps)
  - [TypeScript](#typescript)
- [网站](#%E7%BD%91%E7%AB%99)
  - [常看的网站](#%E5%B8%B8%E7%9C%8B%E7%9A%84%E7%BD%91%E7%AB%99)
  - [Github](#github)
  - [开发](#%E5%BC%80%E5%8F%91)
  - [设计](#%E8%AE%BE%E8%AE%A1)
  - [有趣](#%E6%9C%89%E8%B6%A3)
  - [交互](#%E4%BA%A4%E4%BA%92)
  - [Css](#css)
  - [教程](#%E6%95%99%E7%A8%8B)
  - [产品](#%E4%BA%A7%E5%93%81)
  - [实用](#%E5%AE%9E%E7%94%A8)
  - [Talk](#talk)
  - [算法](#%E7%AE%97%E6%B3%95)

# 网站/书籍/库

## 前端

- 浏览器兼容性查询: [can i use](https://caniuse.com/)
- [开发者路径图](https://github.com/kamranahmedse/developer-roadmap)
- [Web 前端导航](http://www.alloyteam.com/nav/)

### HTML&css

- canvas
  - 《HTML5 canvas 开发详解（第 2 版）》
  - Three.js
    - 《Three.js 入门指南》, [图灵](http://www.ituring.com.cn/book/1272)
  - [Echarts](https://echarts.baidu.com/)
- [CSS 参考手册](http://css.doyoe.com/): [github](https://github.com/doyoe/css-handbook)
- [normalize.css](https://github.com/necolas/normalize.css): 尽可能保持各个浏览器表现统一
- 纯 CSS 实现
  - [NES](https://github.com/doyoe/css-handbook)
  - [animate](https://github.com/daneden/animate.css)
  - [A Single Div](https://github.com/lynnandtonic/a-single-div)
  - [css3patterns](https://github.com/LeaVerou/css3patterns)
- 博主[Coco](http://www.cnblogs.com/coco1s)
- [css-tricks](https://css-tricks.com)

### JS

- 《JavaScript 高级程序设计（第 3 版）》
- [Understanding ECMAScript 6](https://github.com/nzakas/understandinges6/), 民间翻译可访问[gitbook](https://sagittarius-rev.gitbooks.io/understanding-ecmascript-6-zh-ver/content/)
- ~~[You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)~~: 个人认为看伢羽的博客即可
- [冴羽的博客](https://github.com/mqyqingfeng/Blog)
- [You-Dont-Need-jQuery](https://github.com/nefe/You-Dont-Need-jQuery)
- [《JavaScript 正则表达式迷你书》](https://juejin.im/post/5965943ff265da6c30653879): [github](https://github.com/qdlaoyao/js-regex-mini-book)
  - 正则可视化网站: [regexper](https://regexper.com/)

#### vue

- [learnVue](https://github.com/answershuto/learnVue)
- 后台管理系统[vue-element-admin](https://github.com/PanJiaChen), 花裤衩在[「见识」的分享](https://jianshiapp.com/circles/1209)

#### NodeJS

- 《Node.js 实战（第 2 版）》
- [饿了么 Node.js 面试](https://github.com/ElemeFE/node-interview)
- [Node.js 入门: Express + Mongoose 基础使用](https://github.com/lin-xin/blog/issues/21)
- [网易云音乐 Node.js API service](https://github.com/Binaryify/NeteaseCloudMusicApi)
- [Electron](https://electronjs.org/)

### 设计模式

- 《JavaScript 设计模式与开发实践》

### 代码规范

- 命名规范 BEM: [腾讯对 BEM 的介绍](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
- HTML 和 CSS： [中译](https://codeguide.bootcss.com/), [原文](https://github.com/mdo/code-guide)
- [ESlint](https://github.com/eslint/eslint)

## 性能

- [Front-End-Performance-Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist): 前端性能清单

## 数据结构

- 《学习 JavaScript 数据结构与算法（第 3 版）》: [图灵](http://www.ituring.com.cn/book/2653), [配套源码](https://github.com/loiane/javascript-datastructures-algorithms)
- [面试向](https://yuchengkai.cn/docs/cs/)

## 网络

- 《图解 HTTP》

## git

- [教程](https://git-scm.com/book/zh/v2)
- [git-tips](https://github.com/git-tips/tips)

## 面试

- [CS-Interview-Knowledge-Map](https://github.com/InterviewMap/CS-Interview-Knowledge-Map)

## 测试

- jest
- cypress

## Linux

- [快乐的 Linux 命令行](https://github.com/billie66/TLCL)

## markdown

- [markdown 语法](http://markdown.tw/)
- [个人笔记](../notes/markdown.md)

## 博客

- [凹凸实验室](https://aotu.io/index.html)
- [富途 web 开发团队](https://futu.im/)
- [前端精读周刊](https://github.com/dt-fe/weekly)
- [计算机经典书籍推荐](https://github.com/woai3c/recommended-books)
- [30-seconds](https://github.com/30-seconds)
- [阿里云前端技术周刊](https://github.com/aliyunfe/weekly)

## 常用库

### 功能类

- [CodeMirror](https://codemirror.net/): 代码美化
- [autoprefixer](https://github.com/postcss/autoprefixer): 给 CSS 加前缀
- [throttle-debounce](https://github.com/niksy/throttle-debounce): 防抖和节流

### 布局类

- [Masonry](https://github.com/desandro/masonry): 瀑布图
- [swiper](https://github.com/nolimits4web/swiper): 轮播
  - [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper): 基于 Vue 的 swiper
- [Sortable](https://github.com/SortableJS/Sortable): 拖拽
  - [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable): 基于 Vue 的拖拽

### 数据类

- [axios](https://github.com/axios/axios): 以 Promise 对象为基础，兼容浏览器和 Node.js 的异步请求
- [immutable-js](https://github.com/facebook/immutable-js/): 使数据不可随便更改，避免对象引用造成的各种问题
- [node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js): XML 与 JSON 互转

### 部署类

- [nodemon](https://github.com/remy/nodemon): 监测文件修改并自动重启服务
- [http-server](https://github.com/indexzero/http-server): 最简单的服务器
- [npm-run-all](https://github.com/mysticatea/npm-run-all): 一次运行多个 npm scripts
- [pm2](https://github.com/Unitech/pm2): 进程管理工具
- [cli-highlight](https://github.com/felixfbecker/cli-highlight): 控制台代码高亮

## VPS

- [村网通](https://zoomyale.com/2016/vultr_and_ss/)
- [个人笔记](../notes/vps.md)

## TypeScript

- [入门教程](https://github.com/xcatliu/typescript-tutorial)

# 网站

## 常看的网站

- [awesome-f2e-libs](https://github.com/sorrycc/awesome-f2e-libs) sorrycc 整理的个人关注使用的前端库
- [overreacted](https://overreacted.io/) react Dan 的个人博客，更新频率很高
- [DailyJS](https://medium.com/dailyjs)
- [codeburst](https://codeburst.io/)

## Github

- [github 短域名服务](https://git.io)
- [shields](https://shields.io/) Github README 里面的装逼小图标
- [Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/) 方便平时写查找 emoji
- [emoji.muan](http://emoji.muan.co/#) 同上 而且更全
- [git-awards](http://git-awards.com/users/search?login=panjiachen) github ranking 没事可以查着玩玩
- [http://githubrank.com/](http://githubrank.com/) github 按照 followers 排名
- [github-rank](https://wangchujiang.com/github-rank/)同上，githubrank 基本算挂了已经，只能用这个新的
- [star-history](https://www.timqian.com/star-history/#PanJiaChen/vue-element-admin) 展示一个项目 Stars 增长规矩曲线
- [probot](https://github.com/probot/probot) 基于 github 做一个小机器人。可以做很多 workflow 的事情

## 开发

- [can i use](https://caniuse.com/) 前端常用网站了 查看不同属性和方法的兼容性
- [Squoosh](https://squoosh.app/) 谷歌出品在线免费图片压缩工具 神器
- [codesandbox-client](https://github.com/CompuIves/codesandbox-client) - 在线 web 开发容器
- [astexplorer](https://github.com/fkling/astexplorer) - 一个在线 ast 生成器
- [30 seconds of code](https://30secondsofcode.org/) 收集了许多有用的代码小片段
- [zeplin](https://app.zeplin.io/) 前端和设计师神器，有标注、Style Guide、版本管理、简单的团队协作，重点是前端不用写 css 了，复制就可以了。
- [iconfont](http://www.iconfont.cn/) 阿里出的图标库，非常实用，支持 svg、font、png 多种格式，基本现在所有图标都在上面找。
- [cssicon](http://cssicon.space/#/) 所有的 icon 都是纯 css 画的 缺点：icon 不够多
- [智图](http://zhitu.isux.us/) 腾讯出品 在线图片压缩 支持转成 webP 处理静态图片时候很好用
- [picdiet](https://www.picdiet.com/zh-cn) 另一个图片压缩网站
- [CSS triangle generator](http://apps.eky.hk/css-triangle-generator/) 帮你快速用 css 做出三角形
- [cssarrowplease](http://www.cssarrowplease.com/) 帮你做对话框三角的
- [clippy](http://bennettfeely.com/clippy/) 在线帮你使用 css clip-path 做出各种形状的图形
- [Regular Expressions](https://regex101.com/) 在线正则网站
- [jex](https://jex.im/regulex/) 正则可视化网站，配合上面的 Regular Expressions，写正则方便很多
- [jsfiddle](https://jsfiddle.net/) 在线运行代码网站 很不错，可惜要翻墙
- [codepan](https://codepan.net/) 在线运行代码网站 不用翻墙，可以自己部署
- [fiddle.md](https://fiddle.md/) 一个方便的在线共享 markdown 在线笔试题一般都用这个
- [jsdelivr](https://www.jsdelivr.com/) cdn 服务
- [unpkg](https://unpkg.com) cdn 服务
- [coderpad](https://coderpad.io/) 远程面试的神器，可以让面试者远程写代码 不过需要翻墙
- [icode](http://www.icode.live/) 有赞团队出品的 coderpad 可以互补，它不需要翻墙
- [codeadvice](https://www.codeadvice.io) 又一个让面试者远程写代码的网址
- [snipper](https://snipper.io) 一个代码协同的网站。你新建一个代码片段，然后把网址分享给其他人，就可以看到他们的实时编辑。
- [codesandbox](https://codesandbox.io/) 一个可以在线编辑且提供在线 demo 的网站 支持 vue react angular 多种框架 神器
- [codrops](https://tympanus.net/codrops/) 上面的交互都非常酷炫
- [bgremover](http://www.aigei.com/bgremover) 在线图片去底工具
- [photopea](https://www.photopea.com/) 一个网页端 Photoshop 很变态
- [bestofjs](https://bestofjs.org/) 查看一个项目增长经历，Star 数变化的网站，辅助你判断这个库的质量
- [stackblitz](https://stackblitz.com/) 一款在线 IDE,主要面向 Web 开发者,移植了很多 VS Code 的特性与功能
- [programmingfonts.org ](http://app.programmingfonts.org) 一个专门介绍编程字体的网站
- [早报](https://wubaiqing.github.io/zaobao/) 一个个人开发者的前端开发的分享日报
- [emoji-search](https://emoji.muan.co/#) 帮你快速找到能表达你情感的 emoji
- [gitmoji](https://github.com/carloscuesta/gitmoji) 通过 emoji 表达 git 的操作内容
- [starcharts](https://starcharts.herokuapp.com/PanJiaChen/vue-element-admin) 可以把你一个项目的 stars 增长轨迹当做 svg 放在 readme 中
- [mockapi](https://www.mockapi.io/) 一个还不错的在线 mock 服务（可在线可视化编辑），可以满足大部分简单需求了
- [coder](coder.com) 在线版 VS Code
- [browserstack](https://www.browserstack.com/) 远程调整各种版本浏览器 兼容性问题
- [carbon](https://carbon.now.sh/) 根据源码生成图片 主要作用是让你打代表片段分享的时候更好看一点
- [clipboard2markdown](https://euangoddard.github.io/clipboard2markdown/) 将你所有复制进去的内容都转化为 markdown
- [grammarly](https://www.grammarly.com/) 英语写作检查工具
- [quickchart](https://quickchart.io/) 通过 URL 生成图表的开源服务
- [hipdf](https://www.hipdf.cn/) 一站式在线 PDF 解决方案
- [whimsical](https://whimsical.com) 画路程图
- [Lorem Picsum](https://picsum.photos/) 提供免费的占位图
- [sm.ms](https://sm.ms/) 免费图床
- [webpagetest](https://www.webpagetest.org/) 前端性能分析工具
- [网络安全的教程](hacksplaining.com/lessons)

## 设计

- [uimovement](https://uimovement.com/) 能从这个网站找到不少动画交互的灵感
- [awwwards](https://www.awwwards.com/)是一个一个专门为设计精美的网站以及富有创意的网站颁奖的网站
- [dribbble](https://dribbble.com/) 经常能在上面找到很多有创意好看的 gif 或者图片，基本上我所有的图都是上面招的
- [Bēhance](https://www.behance.net/) dribbble 是设计师的微博，Bēhance 是设计师的博客
- [Logojoy](https://logojoy.com/) 使用 ai 做 logo 的网站，做出来的 logo 质量还不错。
- [brandmark](http://brandmark.io/) 另一个在线制作 logo 网站
- [instant](https://instantlogodesign.com/) 又一个 logo 制作网站
- [logo-maker](https://www.designevo.com/logo-maker/) 又一个 logo 制作网站 这个更简单点 就是选模板之后微调
- [coolors](https://coolors.co/) 帮你在线配色的网站 你能找到不少配色灵感
- [colorhunt](http://colorhunt.co/) 另一个配色网站
- [uigradients](https://uigradients.com/#SummerDog) 渐变色网站
- [designcap](https://www.designcap.com) 在线海报设计
- [Flat UI 色表](https://flatuicolors.com/) Flat UI 色表
- [0to255](https://www.0to255.com/) 颜色梯度
- [Ikonate](https://github.com/mikolajdobrucki/ikonate) 提供免费的图标 icons
- [remixicon](https://remixicon.com/) 又一个提供免费图标 icons
- [feather](https://github.com/feathericons/feather) 免费的 icons
- [nord ](https://github.com/arcticicestudio/nord) 北欧性冷淡风主题配色
- [Unsplash](https://unsplash.com/) 提供免费的高清图片
- [colorkitty](https://colorkitty.com/) 从你的图片中提取配色
- [design.youzan](design.youzan.com) 有赞设计原则

## 有趣

- [帮你百度一下](http://www.baidu-x.com/) 可以 [点我测试一下](http://www.baidu-x.com/?q=%E5%92%8C%E8%B0%90%E6%9C%89%E7%88%B1%E5%AF%8C%E5%BC%BA)-
- [国际版](http://lmgtfy.com/) 同`帮我百度一下`-[点我测试一下](http://lmgtfy.com/?q=a)-
- [wallhaven](https://alpha.wallhaven.cc/) 壁纸网站-
- [URL 地址播放 Emojis 动画](http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/#%F0%9F%8C%96) 在地址栏里面播放 emoji
- [Can't Unsee](https://cantunsee.space/) 强烈建议前端、客户端、UI 开发的同学玩下，检查一下自己对设计稿的敏感度怎么样
- [ggtalk](https://talk.swift.gg/) 平时一直在听的一个技术博客
- [awesome-comment](https://github.com/Blankj/awesome-comment) 里面收集了很多有趣的代码注释
- [text-img](https://www.text-image.com/index.html) 都将图片转化为 ascii 用来写注释
- [weird-fonts](https://github.com/beizhedenglong/weird-fonts) 将普通字母转化为 特殊 unicode
- [snake](https://github.com/epidemian/snake) 在地址栏里面玩贪吃蛇
- [zero-width-lib](https://github.com/yuanfux/zero-width-lib) 利用零宽度字符实现 隐形水印、加密信息分享、逃脱词匹配，很有创意

## 交互

- [微交互](http://aliscued.lofter.com/) 里面收集了市面上很多很好的微交互例子 值得学习
- [Little Big Details](http://littlebigdetails.com/) 同上，一个国外微交互汇集网站
- [cruip](https://cruip.com/) 登录页的各种页面设计，可以免费下载模板
- [Comixify](https://comixify.ii.pw.edu.pl/) 一个波兰团队做了非常好玩的工具，可以把视频自动转成漫画，上图是他们提供的 demo，效果很棒。
- [taiko-web](https://github.com/bui/taiko-web) 太鼓达人网页版 只能说很 6

## Css

- [css-tricks](https://css-tricks.com/) 一个学习 css 不错的网站 有很多有意思的 demo

## 教程

- [npx](https://egghead.io/courses/execute-npm-package-binaries-with-the-npx-package-runner) 教你怎么合理的使用 npx

- [hacksplaining](https://www.hacksplaining.com/lessons) 网络安全学习网站

## 产品

- [产品大牛](http://www.pmdaniu.com/) 什么有很多完整的产品原型可以借鉴

- [磨刀](https://modao.cc/pricing) 快速出 ui 原型

## 实用

[typeform](https://admin.typeform.com/signup) 一个国外的在线调查问卷网站

## Talk

[peerigon-talks](https://github.com/peerigon/talks) 收集了不少有意思的 talks

## 算法

[leetcode](https://github.com/azl397985856/leetcode) 用 js 刷 leetcode
