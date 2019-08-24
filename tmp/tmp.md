是一个 API

Chrome 渲染页面 DOM 使用 Webkit 的 WebCore，但 JS 引擎是 V8

就像两座岛屿，中间是收费的桥梁，JS（ECMAScript）每一次操作 DOM 就要经过这座桥梁

**node 类型**

比如 Node.ELEMENT_NODE，指元素

**nodeType**

只读

有些被废弃，以[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)为准

元素(element)=1，文本(text)=3，注释(comment)=8，DocumentFragment=11

\<div class="wrapper"\>

\<p class="content"\>hello, world\</p\>

\</div\>

document.querySelector(".wrapper").nodeType // 1, 等于 Node.ELEMENT_NODE

**nodeName**

nodeType 等于 1 的时候，nodeName 是元素的标签名

![](media/10b2287799ffaa2cffb9aed469a5ae3c.png)

**父子关系/只读**

**childNodes**

每个 node 都有的属性。返回一个 NodeList，有 length 属性，可以方括号访问里面的项，但他不是 Array 的实例

并且随着元素的变化会实时更新（比如遍历地 append 一个个节点，不先存 NodeList 的长度，在循环量直接 NodeList.length，会进死循环）

![](media/51fa446f40d5e064c3ba877137e612dc.png)

**parentNode**

父节点

document.querySelector(".content").parentNode

**nextSibling/previousSibling**

兄弟节点，不存在则为 null

**firstChild/lastChild**

![](media/81f3b95183249d90565508df4d0b9bd9.png)

**hasChildNodes()**

是否有子节点

**操作方法**

节点都是唯一的，一个文档内不可能存在多个完全一样的节点

**appendChild/removeChild(目标节点)**

append 放到父节点的最后。如果本身就有节点，那么相当于移动，将原有节点删除，放到最后

remove 删除目标节点

var newEle = document.createElement("div");

newEle.innerHTML = "hello";

document.querySelector(".wrapper").append(newEle)

**insertBefore(新节点，目标节点)**

放在目标节点之前

\<div class="wrapper"\>

\<p class="content"\>hello\</p\>

\<p id="world" class="content"\>world\</p\>

\</div\>

var newEle = document.createElement("div"),

target = document.querySelector("\#world");

newEle.innerHTML = "Neverland";

document.querySelector(".wrapper").insertBefore(newEle, target)

**replaceChild（新节点，目标节点）**

代替目标节点

用法和 insertBefore 一样

**cloneNode(flag)**

flag 为 true，会复制该节点的所有子节点

\<div class="wrapper" onclick="handleClick()"\>

123

\<p class="content"\>hello\</p\>

\</div\>

function handleClick() {

console.log("hello")

}

const doc = document;

const clones = doc.querySelector(".wrapper").cloneNode();

doc.body.appendChild(clones);

![](media/0c7c16cd0244f8a60c14f9a7ea8451b8.png)

cloneNode(true)的时候

![](media/f38aeca0fc8735418a7bc5acecec0ba9.png)

**Document 类型**

document.nodeName 为"\#document", nodeType 是 9

document.documentElement 指 HTML，document.body 指 body

document.title 获取\<title\>的值，可以对其修改

document.URL：地址栏完整的值，修改无效

**元素相关的方法**

**getElementById**

返回第一个匹配，只有 document 有这个方法

\<div class="wrapper"\>

123

\<p class="content" id="hello"\>hello\</p\>

\<p class="content"\>word\</p\>

\</div\>

![](media/5498cf86e477417afb4c6f5e5a283278.png)

**getElementsByTagName**

与 NodeList 类似，也不是 Array 实例，并随 DOM 更新而更新

Element 类型也可以使用

![](media/5a8bd4414806ce33a699d673e2a2f3a8.png)

**createElement(标签名)**

创建元素，要添加到 DOM 里面，还需要调用[操作方法](#_操作方法)

**createTextNode(内容)**

const doc = document;

var newEl = doc.createElement("div");

newEl.className="container";

var newTxt = doc.createTextNode("\<p\>hi\</p\>");

newEl.appendChild(newTxt);

doc.body.appendChild(newEl)

![](media/d08ad676de69a58fc0e57ec40c3fd649.png)

**Element 类型**

nodeType 是 1,

nodeName 是标签名，和 tagName 一样。值始终大写

![](media/fbc128e747bb88c4d4a802640ee52e5b.png)

**常用属性**

id, title, className

\<p class="content custom" id="hello"\>hello\</p\>

![](media/941ae8e67130869aca0c0e164c0421f3.png)

**常用方法**

**特性：getAttribute/setAttribute/removeAttribute**

写在标签上的都可以 get，哪怕是自定义的比如 data-options

获取到的是字符串，比如 onclick, style。

所以一般都用来获取自定义的属性。其他都通过 .属性名 直接拿

\<p class="content custom" id="hello" onclick="alert('1')"\>hello\</p\>

![](media/b45e97c17a3a2c5567447aea76d61725.png)

![](media/6dc63cf347ce1fb6609dd0632662d2f9.png)

**property 和 attribute**

- property 是 DOM 中的属性，是 JavaScript 里的对象；一般是固有属性

比如 nodeName, nodeType。

比如 checkbox 的 checked

- attribute 是 HTML 标签上的特性，它的值只能够是字符串。比如在标签上自定义属性名

也就是 boolean 型的不行

**DocumentFragment 类型**

用 createDocumentFragment()创建，通常当做仓库使用。

最常见的就是遍历循环，先把循环生成的节点放在 fragment，在 fragment 被 append 到文档之前不会引起浏览器渲染。

一旦 fragment 被 append，这个 fragment 里面的所有子节点就会从 fragment 内删除

const doc = document;

let newFragment = doc.createDocumentFragment(),

target = doc.querySelector(".wrapper");

for(let i=0;i\<2;i++) {

var el = doc.createElement("p");

var elTxt = doc.createTextNode("hi"+i);

el.appendChild(elTxt);

newFragment.appendChild(el);

}

console.log(newFragment.childNodes);

doc.body.appendChild(newFragment);

console.log(newFragment.childNodes);

![](media/0807d4298975d2f794fb95f0fcf4f5a4.png)

**选择器相关**

不像 getElementById，只存在 document

documents, element, DocumentFragment 都有

**querySelector/querySelectorAll**

all 返回匹配的 NodeList。实际上是一组快照，不也就是不会实时更新。也就不会引起死循环

但是性能上还是 getElementBy 系列更好，见[知乎](https://www.zhihu.com/question/24702250)

因为 query 系列所有元素都可以使用，自行做取舍

**getElementsByClassName**

可以传多个类名，空格分隔。顺序可以调换

\<div class="wrapper"\>

\<p class="content child"\>hello\</p\>

\</div\>

![](media/d4399716f57dec8849843ce165e1ebc5.png)

返回匹配的 HTMLCollection ，会引起死循环

**children 属性**

子元素，不包括 text

![](media/d2d57d3ce515053758d809f3cb79045c.png)

![](media/60bf2b63f2df7673652ee1719d3bbb9f.png)

**contains 方法**

是否后代

let target = doc.querySelector(".wrapper");

let child = target.querySelector(".content");

target.contains(child)//true

**classList 属性**

**方法**

- add

- contains

- remove

- toggle

**style 对象**

可以获取或者修改内联样式，要加"px"

![](media/d890a44ce06df6e65e925b7f84aeea1b.png)

**focus()**

聚焦元素

**innerHTML/innerText 属性**

innerText 只会生成一个文本节点

\<div class="wrapper"\>

\<p class="content child"\>hello\</p\>

\<input type="text"\>

\</div\>

target = document.querySelector(".wrapper");

![](media/10fb98f1a66ac223a4a95e57a2136933.png)

![](media/8f625f119ff0821d169da872e40f1533.png)

可以用 innerHTML 代替 createElement 进行元素操作

![](media/b4961e15df34c312f6a90aaea1e134cd.png)

![](media/d9d8e80704cb9263290713ae554974b9.png)

**尺寸**

**偏移 offset**

只读。

offsetWidth 包括滚动条，不包括伪类::before，包括 border

如果 display 是 none, width 和 height 返回 0

![Image:Dimensions-offset.png](media/a2fa4f1d4ed273b47f13661786a242cd.png)

![](media/6184d71c5f13af3294d480b5fbb2bd0c.png)

**client**

不包括滚动条，不包括 border, margin。包括 padding

![Image:Dimensions-client.png](media/2ea6f5ca837ca8b21e3edacc00bcc193.png)

**滚动 scroll**

没滚动条的情况下 scrollWidth 等于 clientWidth

有滚动条的情况下，父元素（被撑出滚动条的元素）scrollWidth\>clientWidth

![](media/b7b387d63986a109167cb3286878b757.png)

scrollHeight 也就是被实际内容撑出来的高度

\<style\>

.wrapper {

height: 200px;

overflow: auto;

margin: 0;

}

.child {

height: 300px;

margin: 0;

}

\</style\>

\<div class="wrapper"\>

\<p class="content child"\>hello\</p\>

\</div\>

![](media/8a1d0e8936daf7f4fb1aa4c8fd5fe79c.png)

**getBoundingClientRect()**

获取完整的尺寸信息。但是会忽略缩放。比如 windows 文本放大 125%，浏览器内获取到值实际上是 100%时候的

**性能**

- 利用 DocumentFragment 创建 DOM，最后放到 DOM 中

- 或者使用 innerHTML 代替 appendChild
