(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{805:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器兼容性"}},[t._v("#")]),t._v(" 浏览器兼容性")]),t._v(" "),a("h2",{attrs:{id:"新窗口被阻止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新窗口被阻止"}},[t._v("#")]),t._v(" 新窗口被阻止")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/tangjiao/p/10287640.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1),a("br"),t._v("\n目前只能用"),a("code",[t._v("window.location.href")]),t._v("代替")]),t._v(" "),a("h2",{attrs:{id:"webp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webp"}},[t._v("#")]),t._v(" webP")]),t._v(" "),a("p",[t._v("webp 格式的图片兼容性较差")]),t._v(" "),a("h2",{attrs:{id:"字体不居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体不居中"}},[t._v("#")]),t._v(" 字体不居中")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/39516424",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1),a("br"),t._v("\n结论：不要让字体小于 12px")]),t._v(" "),a("h2",{attrs:{id:"上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传"}},[t._v("#")]),t._v(" 上传")]),t._v(" "),a("p",[t._v("多选情况下，input 触发的 change 无法按照用户选择的先后顺序")]),t._v(" "),a("h2",{attrs:{id:"safari"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safari"}},[t._v("#")]),t._v(" safari")]),t._v(" "),a("h3",{attrs:{id:"cookie-跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-跨域"}},[t._v("#")]),t._v(" cookie 跨域")]),t._v(" "),a("p",[t._v("Safari 默认会阻止存取跨域的 cookie。例："),a("br"),t._v("\n用户访问的是"),a("code",[t._v("www.baidu.com")]),t._v("，此为网站 A；网站 A 内用 iframe 嵌套了一个网站 B"),a("code",[t._v("www.google.com")]),t._v("；"),a("br"),t._v("\n此时在网站 B 内是无法存储 google 自己的 cookie 的。"),a("br"),t._v("\n替代解决方案："),a("br"),t._v("\nlocalStorage")]),t._v(" "),a("h3",{attrs:{id:"日期-nan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期-nan"}},[t._v("#")]),t._v(" 日期 NaN")]),t._v(" "),a("p",[t._v("见"),a("RouterLink",{attrs:{to:"/javascript/024_date.html"}},[t._v("Date")]),t._v(";")],1),t._v(" "),a("h3",{attrs:{id:"fixed-定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-定位"}},[t._v("#")]),t._v(" fixed 定位")]),t._v(" "),a("ol",[a("li",[t._v("ios： input 输入时弹出软键盘，页面整体上移。软键盘小时后页面显示回到原位，但实际不能点击"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/weblxlx/p/10760392.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1),a("br"),t._v("\n解决方案： 失焦的时候滚至顶部")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("最外层 div fixed 定位，输入框靠近底部，IOS 可以聚焦，但无法输入。"),a("br"),t._v("\n替代方案："),a("br"),t._v("\n聚焦输入框的时候，div 改回 static，再让滚动条滚到底部，让它看起来效果和正常一致")]),t._v(" "),a("li",[t._v("IOS 下 fixed 定位的元素，快速滑动时抖动：加上"),a("code",[t._v("transform: translateZ(0);")])])]),t._v(" "),a("h3",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" input")]),t._v(" "),a("ol",[a("li",[t._v('Safari 下 input type="search"按 Enter 不会隐藏搜索框'),a("br"),t._v("\n替代方案："),a("br"),t._v("\n手动失焦")]),t._v(" "),a("li",[t._v("input 只读的时候 IOS 软键盘还是会弹起")]),t._v(" "),a("li",[t._v("Vue 中：ios 输入中文，不点完成时候的，对失焦的校验"),a("br"),t._v("\n替代方案：blur 的时候获取 input 的 value 值（不用 Vue 的 v-model 对应的变量）")])]),t._v(" "),a("h2",{attrs:{id:"微信内置浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信内置浏览器"}},[t._v("#")]),t._v(" 微信内置浏览器")]),t._v(" "),a("h3",{attrs:{id:"上传-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传-2"}},[t._v("#")]),t._v(" 上传")]),t._v(" "),a("p",[a("code",[t._v('accept="image/jpeg, image/png, image/bmp"')]),t._v("会导致上传失败；"),a("br"),t._v("\n替代方案："),a("br"),t._v('\n改为 accept="image/*"，在上传前进行自定义图片校验')]),t._v(" "),a("h2",{attrs:{id:"复制粘贴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制粘贴"}},[t._v("#")]),t._v(" 复制粘贴")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000019525962",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下是Vue内的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择文本。createTextRange(setSelectionRange)是input方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("textbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stopIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createTextRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ie")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" range "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" textbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("collapse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"character"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//起始光标")]),t._v("\n    range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"character"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stopIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结束光标")]),t._v("\n    range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不兼容苹果")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//firefox/chrome")]),t._v("\n    textbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSelectionRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stopIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    textbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"复制成功"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("blur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"浏览器不支持，请手动复制"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"iphonex-适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iphonex-适配"}},[t._v("#")]),t._v(" iphoneX 适配")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://aotu.io/notes/2017/11/27/iphonex/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1),a("br"),t._v(" "),a("code",[t._v("<meta>")]),t._v("指定 viewport 的时候，设置"),a("code",[t._v("viewport-fit=cover")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,initial-scale=1.0, viewport-fit=cover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("指定 safe-area-inset-bottom")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@supports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bottom-position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 兼容 iOS < 11.2 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 兼容 iOS >= 11.2 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1px"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1px"}},[t._v("#")]),t._v(" 1px")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34908005",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎么画一条 0.5px 的边"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),a("p",[t._v("iframe 的问题见"),a("a",{attrs:{href:"https://www.yuque.com/kuitos/gky7yw/gesexv",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why Not Iframe"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("比如：iframe 内的路由跳转，会影响到外部的浏览器前进/后退。"),a("br"),t._v("\n又比如不居中 iframe 里面想要弹出一个居中在整个浏览器的对话框")]),t._v(" "),a("h2",{attrs:{id:"chrome-跨域没带-cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-跨域没带-cookie"}},[t._v("#")]),t._v(" Chrome 跨域没带 cookie")]),t._v(" "),a("p",[a("code",[t._v("chrome://flags/")]),t._v(" 禁用 "),a("code",[t._v("SameSite by default cookies")])])])}),[],!1,null,null,null);a.default=e.exports}}]);