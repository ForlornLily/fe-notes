# CSS

属性尽量都简写

推荐阅读

- [我写 CSS 的常用套路](https://juejin.im/post/6844904033405108232)

## 一行文字，多余用省略号显示

```css
display: block;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

### 双行文字，多余用省略号

```css
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

## 去掉默认样式

### button

```css
border: none;
background: none;
```

### 表单

```css
border: 0;

-webkit-appearance: none;
```

## 修改滚动条

- ::-webkit-scrollbar 滚动条整体部分，可以设置宽度啥的

- ::-webkit-scrollbar-button 滚动条两端的按钮

- ::-webkit-scrollbar-track 外层轨道

- ::-webkit-scrollbar-track-piece 内层滚动槽

- ::-webkit-scrollbar-thumb 滚动的滑块

- ::-webkit-scrollbar-corner 边角

- ::-webkit-resizer 定义右下角拖动块的样式

## float 实现三栏布局

左右/上下固定，中间自适应

利用 margin 负值让相邻的元素上来

### demo

```html
<div class="wrapper">
  <div class="main">
    <div class="main-content">中间内容</div>
  </div>
  <div class="left">左边</div>
  <div class="right">右边</div>
</div>
```

```css
.wrapper {
  overflow: hidden;
}
.main,
.left,
.right {
  height: 200px;
  float: left;
}
.main {
  width: 100%;
}
.left,
.right {
  width: 100px;
}
/* center往上提 */
.left {
  margin-left: -100%;
}
/* right自己往上提 */
.right {
  margin-left: -100px;
}
.main-content {
  padding: 0 100px;
}
```

## flex 实现九宫格

- flex-wrap 设置为 wrap，每个 div 宽度都是 33%；

- 图片用 background-image 的形式放在 div 里面

- 因为高度不确定，所以用 padding-top 为 33%（因为 padding、margin 是根据父元素的宽度来的）来撑

- 如果 div 之间需要有间距，可以用 border 来，设置 border-color 是 transparent，设置 box-sizing 是 border-box 让宽度包括 border

- 如果第三、第六等 3 的倍数不需要 border，用:nth-child

## 渐变代替 border

实现虚线:
linear-gradient 设置单根线，一半有色，一半透明  
background-size 控制虚线间隔和线的大小

```css
.border {
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    #000 0%,
    #000 50%,
    transparent 50%
  );
  background-size: 8px;
  background-repeat: repeat-x;
}

/* 实线修改linear-gradient即可 */
/* background-image: linear-gradient(
    to right,
    #000 0%,
    #000 100%
  ); */
```

## 让输入法的 enter 显示为搜索

input `type`设为"search"
并将它包裹在 form 内

## 图片禁用长按复制功能

```css
img {
  user-select: none;
  pointer-events: none;
  -webkit-touch-callout: none;
}
```

## CSS3 实现位移

```html
<div class="danmu-wrapper">
  <img src="../../assets/img/danmu.png" class="loop"></img>
  <img src="../../assets/img/danmu.png" class="loop"></img>
</div>
```

```scss
.loop {
  position: absolute;
  animation: slideshow 10s linear infinite;
}
.loop:last-child {
  left: 100%;
  animation: slideSecond 10s linear infinite;
}
@keyframes slideshow {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
@keyframes slideSecond {
  0% {
    left: 100%;
  }
  100% {
    left: 0;
  }
}
```

## position: sticky

父元素的宽度大于子元素的宽度，横向滚动时子元素才会固定；  
同理竖向滚动条需要父元素高度大于子元素
