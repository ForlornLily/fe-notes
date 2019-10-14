# 常用

属性尽量都简写

## 一行文字，多余用省略号显示

```css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
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

## 渐变代替 border 虚线的间隔

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
  background-size: 8px 1px;
  background-repeat: repeat-x;
}
```

## 让输入法的 enter 显示为搜索

input `type`设为"search"
并将它包裹在 form 内

## 修改 placeholder

```css
.info-input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ccc;
}

.info-input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #ccc;
}

.info-input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #ccc;
}
```
