# 优化

大致上拆成两块：

- 网络
- 页面代码

参考：

- [PageSpeed Insights](https://developers.google.com/speed/docs/insights/rules)

## 网络

常见的有

- 减少重定向
- 资源加载
- 压缩
- 缓存

## 重定向

重定向会触发额外的 HTTP 请求，无法避免的情况下只要一次重定向
比如百度首页是响应式的，PC/移动域名一样  
而哔哩哔哩移动端是 bilibili.com → m.bilibili.com

## 资源加载

比如

- css：放头部，使 CSS 样式表尽早加载，减少@import 的使用，因为需要解析完样式表中所有 import 的资源才会算 CSS 资源下载完  
  而 CSS 是会阻塞浏览器渲染的，因为 Render Tree 依赖 DOM 和 CSSOM，见[浏览器加载过程](#浏览器加载过程)  
  如果 CSS 很小，可以考虑写成内联
- JS：尽可能用 defer/async 进行异步
- 控制单个资源的文件大小(最好小于 14.6kb)

### 不同域名加载

除了 CDN 可以提供最近的资源外，优点还有：

- 突破浏览器并发限制。
  同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在 6 以内。有些资源的请求时间很长，因而会阻塞其他资源的请求
- 跨域不会携带 cookie，节省了带宽

### 资源预加载

参考[前端性能优化 - 资源预加载](https://bubkoo.com/2015/11/19/prefetching-preloading-prebrowsing/)  
预加载表示浏览器在后台（空闲时）获取将来可能用得到的资源，并且将他们存储在浏览器的缓存中  
意味着消耗硬件性能，需要取舍

- DNS 预解析: DNS-Prefetch
  `<link rel="dns-prefetch" href="//example.com">`  
  通过 DNS 预解析来告诉浏览器未来我们可能从某个特定的 URL 获取资源，当浏览器真正使用到该域中的某个资源时就可以尽快地完成 DNS 解析。  
  也就是从这个 URL 请求一个资源时，DNS 解析已经完成了
- 预连接 Preconnect: `<link rel="preconnect" href="http://example.com">`  
  与 DNS 预解析类似，preconnect 不仅完成 DNS 预解析，同时还将进行 TCP 握手和建立传输层协议
- 预获取 Prefetching: `<link rel="prefetch" href="image.png">`  
  预获取是真正请求并下载了资源，并储存在缓存中

### 懒加载/按需加载

比如图片  
监听滚动条，用 data-src 指定 img 的路径，滚动到一定位置的时候替换成 src

## 压缩

任何压缩的都需要更多硬件功能消耗，自行取舍

- 减少 HTTP 请求，将代码压缩合并
- 压缩代码
  ::: tip
  去掉属性名的引号，比如{"foo": "123"}改为{foo: "123"}，方便压缩工具压缩变量
  :::
- 使用 Gzip 编码，服务器端压缩文件。 Nginx：使用 [ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)
- 图片优化

### 图片优化

- 首选矢量图：不会失真，SVG 与 PNG 和 JPG 相比，文件体积更小，可压缩性更强  
  缺点是渲染成本比较高
- 使用`srcset`属性，比如在 2x 显示屏上使用 2x 图像。

```html
<img src="photo.png" srcset="photo@2x.png 2x" src="photo.png" />
```

- 尽可能用 CSS 实现

- 不考虑兼容的情况下可以用 WebP，还支持动图。  
  可以用 JS 先判断浏览器类型，再生成图片的 src  
  或者根据 HTTP Header，让服务器根据`Accept`字段返回对应的文件类型

- 其次图片格式优先 JPEG（如果原图相对高清，可以压缩到 85%）。[图片压缩工具](https://tinypng.com/)

- 如果一定要保留高精度和细节或者透明度，用 PNG  
  PNG 有 PNG-8 和 PNG-24，8 位的 PNG 最多支持 256 种颜色，而 24 位的可以呈现约 1600 万种颜色。
  当然优先 PNG-8

- 不是动图的情况下不要用 GIF

- 雪碧图(CSS Sprites)，webpack 也可以配置，或者使用网站[在线生成](https://www.toptal.com/developers/css/sprite-generator)

- Base64: 用字符串代替图片，那么就不会发送 HTTP 请求  
  缺点是标签字符串会很长，高清文件就不适合编码成 Base64  
  webpack 的 url-loader 可以配置图片编码  
  一般 10kb 以下大小可以用 Base64

- 存在在 oss 服务器上的图片可以在图片后面加 w,h 直接在获取图片时就限制大小，减少了图片大小也减少了浏览器把图片放大缩小的操作

### webpack 打包优化

见[优化：optimization](../webpack4/07_optimization.md)或者官网[Build Performance](https://webpack.js.org/guides/build-performance/)  
常用的有

- tree shaking
- dllplugin
- happypack

### Gzip

参考[前端性能优化-gzip 压缩](https://zhuanlan.zhihu.com/p/37429159)  
需要注意的是 Gzip 并不保证针对每一个文件的压缩都会使其变小  
Gzip 本质上是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小  
文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大

- Gzip 对于文本文件（js、css、ttf...）收益会比较大
- 对于多媒体文件则没有必要采用 Gzip，因为多数多媒体文件本身就是采用了有损压缩。对有损压缩的文件再进行 Gzip 意义不大

扩展阅读：哈夫曼编码

## 缓存

详细内容见[浏览器缓存](./40_cache.md)

- 缓存：使用`Cache-Control`和`Etag`，抽取频繁更新的资源，那么只需要更新这些，其余缓存失效时间可以变长  
  ![cache](../images/http-cache-decision-tree.png)
- CDN

### HTTP/2

由于[HTTP2](../http/08_http_2.md)的优势，以下方案可以弃用  
合并文件、内联资源、雪碧图、域名分片对于 HTTP/2 来说是不必要的，使用 HTTP/2 尽可能将资源细粒化，文件分解地尽可能散，不用担心请求数多

## JS 代码可维护性

### 可读性：加注释

### 命名

- 变量都是名词，比如 name,

- 函数名都是动词, 比如 getName。如果返回的是布尔，用 is 开头

### 数据类型

初始化就确定要数据类型，尽可能避免变量的数据类型改变  
尽可能使用轻量级的 JSON 数据

### 松散耦合

抽取方法

比如监听事件和根据事件内参数进行不同的处理函数，把事件监听和处理函数拆开
::: tip
避免传递 event 对象，只传递 event 内需要的值
:::

### 避免创建多个全局变量

把变量封装在对象内

比如

```js
var name = 'hello'
function sayName() {
  console.log(name) //用到了全局变量name
}
//修改为
var nameObj = {
  name: 'hello',
  sayName() {
    console.log(this.name)
  }
}
```

### 避免和 null 比较

如果需要的值是一个引用类型，用 instanceof；基本类型，用 typeof

### 使用常量

常量一般都大写

```js
const Constants = {
  INVALID_MESSAGE: '错误'
}
```

适用场景

- 重复出现

- 显示给用户的值，方便国际化

## JS 性能

尽可能使用局部变量

减少嵌套（对象/函数嵌套）

少操作 DOM

合理的 for 循环

待整理：[JavaScript 如何工作：在 V8 引擎里 5 个优化代码的技巧](https://juejin.im/post/5a102e656fb9a044fd1158c6)

### O(1)

寻找常量是最快的，将常量放在数组里面访问也一样

用局部对象存全局，用常量存对象

### 最小化语句

单条语句多个操作快，避免多个语句，每个语句只有一个操作。

```js
var foo = 5
var bar = true
//改成
var foo = 5,
  bar = true
```

#### 迭代值（自增、自减）

```js
var name = foo[i]
i++
//改成
var name = foo[i++]
```

### 用数组和对象字面量代替构造函数

### 节流与防抖

见[函数防抖与节流](../js/022_bom.md#函数防抖与节流)

## 浏览器加载过程

渲染由排版引擎（layout engine）执行

1.  解析文件并构建对象模型

- 浏览器加载网站时，接受到一个 HTML 文件，会先把 HTML 文件解析成一个树，也就是 DOM（document
  object model）；

- 当遇到指向 CSS 文件时（不论是 style 还是外部 link），会转成 CSSOM（CSS object
  model, CSS 对象模型）

每个 CSS 选择符都会匹配一个 DOM 节点

![](../images/d44cc893bdfd9e4e9fbaf5104bb35b34.png)

![](../images/ab3cbacc6158d722853d139b940835c1.png)

2.  渲染树(render tree)

构建另外一个树结构，每个节点表示渲染到屏幕上的信息。

类似 DOM，但是不包含隐藏元素，会保存伪类，还有其他表现性信息，比如滚动条。

也就是渲染树内每个节点都知道了自己的颜色、字体等等

![](../images/0889d69189e0c1719f6141123726881f.png)

3.  layout/reflow

计算每个对象的几何信息，确定每个对象显示在浏览器上的位置

元素的几何属性（比如宽、高）会触发 reloflow

4.  绘制(paiting)，合成(compositing), 呈现(drawing)

确定每个对象的位置和属性后，可以得到显示在屏幕的实际像素，这个过程是绘制。

如果最终某个部分不会影响页面的其他内容，浏览器会把绘制拆成不同的任务，每个任务负责不同的部分（layer）

有些复杂元素（比如三维变换），需要经过 GPU 进行硬件加速。有些用了滤镜，需要和其他层混合。也就是拆分和混合的过程为合成

最后可以进行呈现了

### 重绘（Repaint）和回流（Reflow）

重绘：当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

回流/重排发生的情况：页面布局或者集合属性改变

- 可见元素的删除或增加

- 元素位置改变

- 元素尺寸改变（包括 padding、margin、border，宽高等）

- 内容改变（比如文本改变，如偏）

- 获取布局信息（offsetTop, offsetLeft, offsetWidth,
  offsetHeight，还有 scroll 相关，client 相关，getComputeStyle）需要返回最新的布局信息，因为浏览器会触发 reflow

回流要比重绘消耗性能开支更大。

回流必将引起重绘，重绘不一定会引起回流

### DOM 操作

- 批量修改 DOM

让元素脱离文档流，进行操作，最后带回文档中  
脱离文档流 reflow 一次，待会文档中 reflow 一次  
::: tip
常用方式：

- 隐藏 → 修改 → 显示
- 推荐：使用文档片段（document fragment），在当前 DOM 之外创建一个子树，最后拷贝回文档
- 对原始元素拷贝到脱离文档的一个节点，修改后替换原始的元素  
   cloneNode(true)+replaceChild
  :::
- 事件委托，比如很多 li 绑定 click，委托给父元素 ul

- BOM

  对于布局信息（scroll, client, offset）可以事先赋值给局部变量。在布局确定，不会修改之后，再去访问

## CSS 优化

更多规范可以看[mdo/code-guide](https://github.com/mdo/code-guide)  
CSS 属性影响的过程可参考[csstriggers](https://csstriggers.com/)

也可以通过 Chrome 的 Performance

- :hover

避免使用大量的 hover 伪类

- 减少选择器的层级嵌套（控制到三层以内）  
  CSS 引擎查找样式表，对每条规则都按**从右到左**的顺序去匹配
- 避免使用通配符`*`，只对需要用到的元素进行选择。

- 关注可以通过继承实现的属性，避免重复匹配重复定义。

- 少用标签选择器。如果可以，用类选择器替代

### 开启硬件加速

用 css 开启硬件加速，使 GPU (Graphics Processing Unit) 发挥功能。

但是使用 GPU 可能会导致严重的性能问题，因为它增加了内存的使用，而且它会减少移动端设备的电池寿命。需要权衡

CSS animations, transforms 以及 transitions
不会自动开启 GPU 加速，而是由浏览器的渲染引擎来执行。可以通过某些规则来触发 GPU 渲染

比如 3D 变换

哪怕不需要变换，也可以，比如 transform: translateZ(0)

```css
.example {
  transform: translate3d(250px, 250px, 250px) rotate3d(
      250px,
      250px,
      250px,
      -120deg
    )
    scale3d(0.5, 0.5, 0.5);
}
```

在 Chrome and Safari 中，当我们使用 CSS transforms 或者
animations 时可能会有页面闪烁的效果，下面的代码可以修复此情况

backface-visibility: 定义当元素不面向屏幕时是否可见

perspective：元素距离视图的距离

```css
.example {
  backface-visibility: hidden;
  perspective: 1000;
  /* Other transform properties here */
}
```

## 性能监测

Chrome 开发者工具可以用`Performance`和`Audits`  
`Audits`内置的其实是扩展程序`LightHouse`, LightHouse 可以产生一份当前网站的报告  
或者 npm 上安装[LightHouse](https://www.npmjs.com/package/lighthouse)

```bash
npm install -g lighthouse
lighthouse https://www.baidu.com
```

### Performance API

`window.performance`  
参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)
