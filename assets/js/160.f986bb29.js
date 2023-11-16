(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{649:function(t,r,v){"use strict";v.r(r);var a=v(14),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("以 JavaScript 1.1 为基准的建议交由 ECMA 协会（European Computer Manufacturers Association），协会指定 TC39 技术委员会负责制定。最终完成了 ECMAScript（读作"),r("code",[t._v("ek-ma-script")]),t._v("）的标准。"),r("br"),t._v("\n各个浏览器致力于以 ECMAScript 为标准实现各自的 JS 基础实现")]),t._v(" "),r("h2",{attrs:{id:"js-组成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js-组成"}},[t._v("#")]),t._v(" JS 组成")]),t._v(" "),r("p",[t._v("由"),r("code",[t._v("ECMAScript")]),t._v("、"),r("code",[t._v("DOM")]),t._v("（网页操作 API）、"),r("code",[t._v("BOM")]),t._v("（浏览器操作 API）三部分组成"),r("br"),t._v("\n浏览器是实现 ECMAScript 标准的宿主之一。")]),t._v(" "),r("h3",{attrs:{id:"ecmascript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript"}},[t._v("#")]),t._v(" ECMAScript")]),t._v(" "),r("p",[t._v("规定了一些基础。比如语法、类型、语句、关键字、保留字、操作符、对象"),r("br"),t._v("\n提供核心语言功能")]),t._v(" "),r("h3",{attrs:{id:"dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),r("p",[t._v("API"),r("br"),t._v("\n提供访问和操作页面内容的方法和接口")]),t._v(" "),r("h3",{attrs:{id:"bom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),r("p",[t._v("控制浏览器显示页面以外的部分。"),r("br"),t._v("\n提供和浏览器做交互的方法和接口"),r("br"),t._v("\n比如弹出浏览器新窗口，提供浏览器详细信息（"),r("code",[t._v("navigator")]),t._v("），加载页面的信息（"),r("code",[t._v("location")]),t._v("），显示器（"),r("code",[t._v("screen")]),t._v("），"),r("code",[t._v("cookies")]),t._v("，"),r("code",[t._v("performance")]),t._v("，"),r("code",[t._v("XMLHttpRequest")]),t._v("等自定义对象")]),t._v(" "),r("h2",{attrs:{id:"解释型语言-interpreted"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解释型语言-interpreted"}},[t._v("#")]),t._v(" 解释型语言(interpreted)")]),t._v(" "),r("p",[t._v("计算机上的一个特殊工具对于代码进行翻译。转为计算机能理解的语言")]),t._v(" "),r("ul",[r("li",[t._v("解释型：当程序运行的时候逐行解释。如 JS，Python")]),t._v(" "),r("li",[t._v("编译型（compile）：先编译成机器代码，再运行。比如 C，Go"),r("br"),t._v("\nJS 虽然归为解释型语言，但它实际上是 complied language。"),r("br"),t._v("\n但是和传统的编译型语言也不一样，不能很好地提前编译，也不能把编译后的代码放到不同的分布式系统。"),r("br"),t._v("\nJS 在代码执行前几微秒开始编译，也就是先编译再立即运行"),r("br"),t._v("\n更多内容见"),r("RouterLink",{attrs:{to:"/javascript/020_scope.html"}},[t._v("变量和作用域")]),t._v("章节")],1)]),t._v(" "),r("h3",{attrs:{id:"编译粗略过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译粗略过程"}},[t._v("#")]),t._v(" 编译粗略过程")]),t._v(" "),r("ol",[r("li",[t._v("分词(token)/词法(lex)分析：\ntoken: 将一连串字符打断成有意义的片段，称为 token(记号)"),r("br"),t._v("\n比如 var a = 2 可能被拆成 var, a, =, 2"),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("JS 会忽略 token 之间的空格（包括普通空格，换行\\n，换页\\f，制表符）")])])]),t._v(" "),r("li",[t._v("解析：将 token 变成一个嵌套元素的树（抽象语法树 AST: Abstract Syntax Tree）），树代表了程序的语法结构")]),t._v(" "),r("li",[t._v("代码生成：将抽象语法树转换为可执行的代码")])]),t._v(" "),r("h2",{attrs:{id:"动态类型语言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态类型语言"}},[t._v("#")]),t._v(" 动态类型语言")]),t._v(" "),r("p",[t._v("运行期间才会去做数据类型的检查。"),r("br"),t._v("\n会在变量第一次被赋值的时候，在内部将数据类型记录下来。"),r("br"),t._v("\n与此相对的是静态语言：编译期间检查")])])}),[],!1,null,null,null);r.default=_.exports}}]);