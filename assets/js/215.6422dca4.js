(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{733:function(t,e,r){"use strict";r.r(e);var _=r(14),v=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"输入-url-到页面渲染完成的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入-url-到页面渲染完成的过程"}},[t._v("#")]),t._v(" 输入 URL 到页面渲染完成的过程")]),t._v(" "),e("p",[t._v("大致可以拆成 3 部分")]),t._v(" "),e("ul",[e("li",[t._v("网络传输：\n"),e("ul",[e("li",[t._v("DNS、IP、TCP、如果是 HTTPS 还会有 TLS")]),t._v(" "),e("li",[t._v("服务端可能有 nginx、静态资源有 CDN")]),t._v(" "),e("li",[t._v("如果是 SSR，也可以展开讲")])])]),t._v(" "),e("li",[t._v("浏览器缓存")]),t._v(" "),e("li",[t._v("浏览器解析")])]),t._v(" "),e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/24",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 URL 输入到页面展现到底发生什么？"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/t3WM5oGr54-H-7I-7wd3nA?scene=25",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文串联 HTTP、TCP、IP、以太网"),e("OutboundLink")],1)])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("首先做 DNS 查询，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来"),e("br"),t._v("\nDNS 缓存：参考掘金"),e("a",{attrs:{href:"https://juejin.im/post/5ceebb7251882507266414b7",target:"_blank",rel:"noopener noreferrer"}},[t._v("「真 ® 全栈之路 - DNS 篇」故事从输入 URL 开始....."),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("浏览器自身的 DNS 缓存：以 Chrome 为例，缓存时间比较短，默认只有 1 分钟，且只能容纳 1000 条缓存")]),t._v(" "),e("li",[t._v("系统自身的 DNS 缓存")]),t._v(" "),e("li",[e("code",[t._v("hosts")]),t._v("文件")]),t._v(" "),e("li",[t._v("路由器缓存(发送 UDP 协议)")])])]),t._v(" "),e("li",[e("p",[t._v("接下来是 TCP 握手，应用层会下发数据给传输层，这里 TCP\n协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP\n地址，并且指示了数据传输中如何跳转路由器（ARP 协议）。"),e("br"),t._v("\n然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了")])]),t._v(" "),e("li",[e("p",[t._v("TCP 握手结束后开始发送数据，分为两步：先建立安全层（TLS 握手），然后就开始正式的传输数据")])]),t._v(" "),e("li",[e("p",[t._v("数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务端会响应一个\nHTML 文件")])]),t._v(" "),e("li",[e("p",[t._v("首先浏览器会判断状态码是什么，如果是 200 那就继续解析，如果 400 或 500\n的话就会报错，如果 300\n的话会进行重定向，这里会有个重定向计数器，避免过多次的重定向，超过次数也会报错")])]),t._v(" "),e("li",[e("p",[t._v("浏览器开始解析文件，如果是 gzip\n格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件")])]),t._v(" "),e("li",[e("p",[t._v("文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS\n的话会去构建 CSSOM 树。如果遇到 script 标签的话，会判断是否存在 async 或者\ndefer ，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML\n解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS\n执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0\n协议的话会极大的提高多图的下载效率。")])]),t._v(" "),e("li",[e("p",[t._v("初始的 HTML 被完全加载和解析后会触发"),e("RouterLink",{attrs:{to:"/javascript/002_script.html#domcontentloaded"}},[t._v("DOMContentLoaded")]),t._v(" 事件")],1)]),t._v(" "),e("li",[e("p",[t._v("CSSOM 树和 DOM 树构建完成后会开始生成 Render\n树，这一步就是确定页面元素的布局、样式等等诸多方面的东西")])]),t._v(" "),e("li",[e("p",[t._v("在生成 Render 树的过程中，浏览器就开始调用 GPU\n绘制，合成图层，将内容显示在屏幕上了")])])]),t._v(" "),e("h2",{attrs:{id:"href"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#href"}},[t._v("#")]),t._v(" href")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5b88ddca6fb9a019c7717096",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("css 加载不会阻塞 DOM 树的解析")]),t._v(" "),e("li",[t._v("css 加载会阻塞 DOM 树的渲染")]),t._v(" "),e("li",[t._v("css 加载会阻塞后面 js 语句的执行")])]),t._v(" "),e("p",[t._v("原因是 DOM 树和 CSSOM 树的解析是并行执行的，见"),e("RouterLink",{attrs:{to:"/network/50_performance.html"}},[t._v("浏览器加载过程")]),t._v("，但 Rentder Tree 是依赖于 DOM Tree 和 CSSOM Tree 的，所以必须等待到 CSSOM Tree 构建完成，也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后，才能开始渲染"),e("br"),t._v("\n同样 JS 会可能会操作 DOM 和 CSS，所以等 CSS 加载完")],1),t._v(" "),e("h3",{attrs:{id:"css-优化方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-优化方案"}},[t._v("#")]),t._v(" css 优化方案")]),t._v(" "),e("ul",[e("li",[t._v("使用"),e("RouterLink",{attrs:{to:"/network/29_cdn.html"}},[t._v("CDN")])],1),t._v(" "),e("li",[t._v("对 css 进行压缩(比如 webpack,，gzip)")]),t._v(" "),e("li",[t._v("合理的使用缓存(cache-control，expires，E-tag。不过要注意缓存而带来的影响：版本更新时新旧资源的处理)")]),t._v(" "),e("li",[t._v("减少 http 请求数，将多个 css 文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)")])])])}),[],!1,null,null,null);e.default=v.exports}}]);