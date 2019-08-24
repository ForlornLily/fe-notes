# HTML 内使用

## &lt;script&gt;

常用属性：`async`，`defer`，`src`

- 立即加载并执行指定的脚本，“立即”指的是读到 script 就加载并执行，script 之后的文档暂停
- 代码从上到下依次解释。
- 解释结束之前其余内容不会被浏览器加载。  
  ::: tip
  浏览器遇到`<body>`标签才会开始渲染(render)
  :::
- 遇到`</script>`的时候会认为是结束标签。如果代码要用到，则对这个字符串用`\`进行转义。
- 使用 src 加载外部文件后，如果`<script>`之间还有代码，会被忽略
- HTTP 请求会带来额外的性能开销，所以下载单个 100kb 文件比下载 4 个 25kb 文件快

### async 和 defer

图片来自[参考](https://segmentfault.com/q/1010000000640869)  
蓝色线代表网络读取，红色线代表执行时间；绿色线代表 HTML 解析  
![async和defer](../images/244a0c3246f534e96ce88124e3978261.jpg)

没有这两个属性，那么根据 script 出现的先后顺序解析代码。

只适用于 src，本地代码会被无视。

和浏览器渲染是并行的

- defer:先下载，等浏览器解析到`</html>`标签后执行。理论上早于[DOMContentLoaded](#DOMContentLoaded)，defer 也按照顺序执行。但实际上不一定早于 DOM

- async: 加载后就执行。执行顺序不定，谁先加载好谁就先执行

#### DOMContentLoaded

HTML document 加载和解析后触发。不会等待 style, img 加载

等于 jQuery 的`$(document).ready`。参考[官网](https://api.jquery.com/ready/)

加了 defer/async 的 script 可能在 DOMContentLoaded 之前或者之后

#### load

完全加载。script 不论是 defer 还是 async，肯定都在 load 之前执行。

### src 跨域

即 src 不受同源策略的限制

## doctype

分为 quirks mode 和 standands mode  
声明`<!DOCTYPE html>` 即为 standands mode
