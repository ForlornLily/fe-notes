(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{650:function(t,r,a){"use strict";a.r(r);var e=a(14),n=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[t._v("#")]),t._v(" HTTP/2")]),t._v(" "),r("p",[t._v("参考"),r("a",{attrs:{href:"https://juejin.im/post/5b88a4f56fb9a01a0b31a67e",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP2 详解"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"http-1-1-问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-问题"}},[t._v("#")]),t._v(" HTTP/1.1 问题")]),t._v(" "),r("ol",[r("li",[t._v("连接数限制：对于"),r("strong",[t._v("同一个域名")]),t._v("的请求，浏览器同时只能创建 6~8 个 TCP 连接。"),r("br"),t._v("\n解决方案是域名分片: 请求资源使用不同的域名，比如 CDN 或者二级域名"),r("br"),t._v("\n缺点是创建不同的域名意味着各个请求都要从 DNS 解析开始、然后三次握手等等走一个完整的流程")]),t._v(" "),r("li",[t._v("同一个 TCP 阻塞：一个 TCP 连接一次只能处理一个请求，如果该请求没响应，基于该连接的后续请求都会受阻\n解决方案是管线化(pipelining)。管线化要求客户端和服务器（包括代理服务器）都支持该设置")]),t._v(" "),r("li",[t._v("请求头 Header 内容较多的时候也无法优化")]),t._v(" "),r("li",[t._v("为了优化，需要减少请求数，常见的优化手段比如合并文件、雪碧图。这也导致了单个文件会比较大")])]),t._v(" "),r("h2",{attrs:{id:"http2-优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http2-优势"}},[t._v("#")]),t._v(" HTTP2 优势")]),t._v(" "),r("ul",[r("li",[t._v("HTTP2 支持二进制传送（实现方便且健壮），HTTP1.x 是字符串传送\nHTTP2 中帧(frame)是数据传输的最小单位")]),t._v(" "),r("li",[t._v("支持多路复用：\n每个请求看做一个流，每个流有自己的唯一值可识别。可以让不同的流交错地发送，这样就不会阻塞\n那么对于同一域名只需要创建一个连接")]),t._v(" "),r("li",[t._v("采用 HPACK 压缩算法压缩头部，减小了传输的体积")]),t._v(" "),r("li",[t._v("支持服务端推送，即主动向客户端推送内容")])])])}),[],!1,null,null,null);r.default=n.exports}}]);