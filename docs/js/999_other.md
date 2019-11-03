# 杂

## 输入框获取 Enter 留下的空格 ↵

通过`\n`获取。比如 indexOf("\\n"), split("\\n")

## 浏览器阻止 window.open

不是用户直接点击超链接的情况下，调用 window.open 会被 chrome 阻止

可以拐个弯

```js
var newWindow = window.open()
newWindow.location.href = src
```

## 正则替换所有匹配项

比如替换所有的"\\n"

raRegExp = new RegExp("\\n","g");

### &lt;pre&gt;标签

可以用`<pre>`标签把文本包起来，就不用处理`\n`和`&nbsp;`了

## 滚动加载

记得及时解绑

```js
const doc = document
// windowHeight 可视区的高度
const windowHeight = doc.documentElement.clientHeight || doc.body.clientHeight
window.addEventListener('scroll', () => {
  let scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop
  // scrollHeight 滚动条的总高度
  let scrollHeight = doc.documentElement.scrollHeight || doc.body.scrollHeight
  // 滚动条到底部的条件
  if (scrollTop + windowHeight >= scrollHeight - 10) {
    // 加载数据
    loadMore()
  }
})
```

### IntersectionObserver

参考[谈谈 IntersectionObserver 懒加载](https://juejin.im/post/5a7973575188257a5911a749)

## MD5 判断文件类型

并不安全，[参考](http://www.izhuyue.com/644.html);

## 监听滚动条

要监听撑出滚动条的 DOM，如果 body 本身没有撑出滚动条，`window.onscroll`不会触发
