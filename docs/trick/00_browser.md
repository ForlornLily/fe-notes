# 浏览器兼容性

## 新窗口被阻止

[参考链接](https://www.cnblogs.com/tangjiao/p/10287640.html)  
目前只能用`window.location.href`代替

## webP

webp 格式的图片兼容性较差

## 字体不居中

[参考链接](https://www.zhihu.com/question/39516424)  
结论：不要让字体小于 12px

## safari

### cookie 跨域

Safari 默认会阻止存取跨域的 cookie。例：  
用户访问的是`www.baidu.com`，此为网站 A；网站 A 内用 iframe 嵌套了一个网站 B`www.google.com`；  
此时在网站 B 内是无法存储 google 自己的 cookie 的。  
替代解决方案：  
localStorage

### 日期 NaN

见[Date](../js/010_date.md);

### fixed 定位

1. ios： input 输入时弹出软键盘，页面整体上移。软键盘小时后页面显示回到原位，但实际不能点击  
   [参考链接](https://www.cnblogs.com/weblxlx/p/10760392.html)  
   解决方案： 失焦的时候滚至顶部

```js
setTimeout(function() {
  var scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop || 0
  window.scrollTo(0, Math.max(scrollHeight - 1, 0))
}, 100)
```

2. 最外层 div fixed 定位，输入框靠近底部，IOS 可以聚焦，但无法输入。  
   替代方案：  
   聚焦输入框的时候，div 改回 static，再让滚动条滚到底部，让它看起来效果和正常一致
3. IOS 下 fixed 定位的元素，快速滑动时抖动：加上`transform: translateZ(0);`

### input

1. Safari 下 input type="search"按 Enter 不会隐藏搜索框  
   替代方案：  
   手动失焦
2. input 只读的时候 IOS 软键盘还是会弹起
3. Vue 中：ios 输入中文，不点完成时候的，对失焦的校验  
   替代方案：blur 的时候获取 input 的 value 值（不用 Vue 的 v-model 对应的变量）

## 微信内置浏览器

### 上传

`accept="image/jpeg, image/png, image/bmp"`会导致上传失败；  
替代方案：  
改为 accept="image/\*"，在上传前进行自定义图片校验

## 复制粘贴

[参考链接](https://segmentfault.com/a/1190000019525962)

```js
//以下是Vue内的代码
// input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
// 选择文本。createTextRange(setSelectionRange)是input方法
function selectText(textbox, startIndex, stopIndex) {
  if (textbox.createTextRange) {
    //ie
    const range = textbox.createTextRange()
    range.collapse(true)
    range.moveStart('character', startIndex) //起始光标
    range.moveEnd('character', stopIndex - startIndex) //结束光标
    range.select() //不兼容苹果
  } else {
    //firefox/chrome
    textbox.setSelectionRange(startIndex, stopIndex)
    textbox.focus()
  }
}
const input = this.$refs.input
selectText(input, 0, this.url.length)
if (document.execCommand('copy')) {
  document.execCommand('copy')
  console.log('复制成功')
  input.blur()
} else {
  console.log('浏览器不支持，请手动复制')
}
```

### iphoneX 适配

[参考](https://aotu.io/notes/2017/11/27/iphonex/index.html)  
`<meta>`指定 viewport 的时候，设置`viewport-fit=cover`

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0, viewport-fit=cover"
/>
```

指定 safe-area-inset-bottom

```css
@supports (bottom: constant(safe-area-inset-bottom)) or
  (bottom: env(safe-area-inset-bottom)) {
  .bottom-position {
    padding-bottom: constant(safe-area-inset-bottom);
    /* 兼容 iOS < 11.2 */
    padding-bottom: env(safe-area-inset-bottom);
    /* 兼容 iOS >= 11.2 */
  }
}
```

## 1px

参考[怎么画一条 0.5px 的边](https://zhuanlan.zhihu.com/p/34908005)

## iframe

iframe 的问题见[Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)

比如：iframe 内的路由跳转，会影响到外部的浏览器前进/后退。  
又比如不居中 iframe 里面想要弹出一个居中在整个浏览器的对话框
