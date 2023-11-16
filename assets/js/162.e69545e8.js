(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{656:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("p",[t._v("简单数据类型和对象的区别在于：简单数据类型是不可更改的。"),s("br"),t._v("\n改变数字 1 本身就不可能")]),t._v(" "),s("ul",[s("li",[t._v("基本类型：指保存在栈内存中的数据")]),t._v(" "),s("li",[t._v("引用类型：(对象引用)指保存在堆内存中的对象，传递的是引用的地址")])]),t._v(" "),s("h2",{attrs:{id:"typeof-操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof-操作符"}},[t._v("#")]),t._v(" typeof 操作符")]),t._v(" "),s("p",[t._v("返回的值（都是小写）有")]),t._v(" "),s("ul",[s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("number")]),t._v(" "),s("li",[t._v("string")]),t._v(" "),s("li",[t._v("boolean")]),t._v(" "),s("li",[t._v("symbol")]),t._v(" "),s("li",[t._v("bigint")]),t._v(" "),s("li",[t._v("object: null 也返回 object")]),t._v(" "),s("li",[t._v("function")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "symbol"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "function"')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" notDeclared"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n")])])]),s("p",[t._v('如果一个变量没有被声明，用 typeof 还是返回"undefined"，而不是报错')]),t._v(" "),s("h2",{attrs:{id:"安全的判断数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全的判断数据类型"}},[t._v("#")]),t._v(" 安全的判断数据类型")]),t._v(" "),s("p",[t._v("前提是"),s("code",[t._v("toString")]),t._v("没有修改。必须加 call，否则返回值不对"),s("br"),t._v(" "),s("code",[t._v("Object.prototype.toString.call(value)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" proxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"[object Object]"')]),t._v("\n")])])]),s("p",[t._v('返回的是"[object Number]"')]),t._v(" "),s("ul",[s("li",[t._v("Number")]),t._v(" "),s("li",[t._v("String")]),t._v(" "),s("li",[t._v("Boolean")]),t._v(" "),s("li",[t._v("Null")]),t._v(" "),s("li",[t._v("Undefined")]),t._v(" "),s("li",[t._v("Symbol")]),t._v(" "),s("li",[t._v("BigInt")]),t._v(" "),s("li",[t._v("Object")]),t._v(" "),s("li",[t._v("Array")]),t._v(" "),s("li",[t._v("Function")]),t._v(" "),s("li",[t._v("Date")]),t._v(" "),s("li",[t._v("RegExp")]),t._v(" "),s("li",[t._v("Error")]),t._v(" "),s("li",[t._v("Math")]),t._v(" "),s("li",[t._v("JSON")]),t._v(" "),s("li",[t._v("Set")]),t._v(" "),s("li",[t._v("WeakSet")]),t._v(" "),s("li",[t._v("Map")]),t._v(" "),s("li",[t._v("WeakMap")]),t._v(" "),s("li",[t._v("Intl")])])])}),[],!1,null,null,null);s.default=e.exports}}]);