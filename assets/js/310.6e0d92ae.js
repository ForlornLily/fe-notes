(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{863:function(l,e,a){"use strict";a.r(e);var r=a(14),i=Object(r.a)({},(function(){var l=this,e=l._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("h1",{attrs:{id:"loader-和-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin"}},[l._v("#")]),l._v(" loader 和 plugin")]),l._v(" "),e("p",[l._v("loader，它就是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程；")]),l._v(" "),e("p",[l._v("对于 plugin，它就是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点")]),l._v(" "),e("p",[l._v("例如")]),l._v(" "),e("ul",[e("li",[e("p",[l._v("run：开始编译")])]),l._v(" "),e("li",[e("p",[l._v("make：从 entry 开始递归分析依赖并对依赖进行 build")])]),l._v(" "),e("li",[e("p",[l._v("build-module：使用 loader 加载文件并 build 模块")])]),l._v(" "),e("li",[e("p",[l._v("normal-module-loader：对 loader 加载的文件用 acorn 编译，生成抽象语法树 AST")])]),l._v(" "),e("li",[e("p",[l._v("program：开始对 AST 进行遍历，当遇到 require 时触发 call require 事件")])]),l._v(" "),e("li",[e("p",[l._v("seal：所有依赖 build 完成，开始对 chunk 进行优化（抽取公共模块、加 hash 等）")])]),l._v(" "),e("li",[e("p",[l._v("optimize-chunk-assets：压缩代码")])]),l._v(" "),e("li",[e("p",[l._v("emit：把各个 chunk 输出到结果文件")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);