# 选择器

## > 子选择器

选择直接的子元素(不止一个)

```css
.parent > .child {
  color: red;
}
```

```html
<section class="parent">
  <div class="child">red</div>
  <div class="child">red</div>
  <div class="nest">
    <div class="child">nest child</div>
  </div>
  <div class="child">red</div>
</section>
```

## + 相邻选择器

adjacent sibling selector

元素后面的第一个兄弟元素。由于浏览器渲染都是自上向下的，考虑到性能，不会选择向前

## ~ 一般同辈组合子

general sibling combinator

与`>`类似，作用于兄弟节点。会选择所有匹配元素。**只会往下找**

```css
.child ~ .child {
  color: blue;
}
```

```html
<section class="parent">
  <div class="child">child1</div>
  <div class="child">blue</div>
  <div class="nest">
    <div class="child">nest child</div>
  </div>
  <div class="child">blue</div>
</section>
```

## []属性选择器

```css
input[type="submit"] {
}
```

- 标签 abbr

abbr 标记一个缩写

```html
The <abbr title="People's Republic of China">PRC</abbr> was founded in 1949.
```

## 伪元素

pseudo elements  
伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过`::before` 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中  
语法：双冒号（旧写法是单冒号，CSS3 规范的要求使用双冒号用于区分。如果要做兼容性处理，还是单冒号）

### ::before/::after

常用在 content 属性设置内容

### 生效元素

参考知乎[为什么 input 不支持伪元素(:after,:before)？](https://www.zhihu.com/question/21296044/answer/27011625)  
简而言之是规范说明伪元素所在的元素，是可以插入`content`内容，那么无法插入内容的元素，比如`input`, `img`, `iframe`是无法生效的。
::: tip
注意是存在伪元素，但无法生效
:::
![](../images/pesdo_element.jpg)

## 伪类

伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的  
pseudo classes  
语法：单冒号  
更多伪类参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

### 标签 a/表单元素/按钮具有的伪类

写样式时按照下面的顺序，避免覆盖

1.  :link 未访问

2.  :visited 已访问

3.  :hover 悬浮。触摸屏无法触发，要避免使用

4.  :focus 聚焦

5.  :active 激活

### where

```css
main h1,
main h2 {
  color: red;
}

/* 等价于 */
main :where(h1, h2) {
  color: orange;
}
```

where 的优先级更低一些

```css
main h1,
main h2,
main h3 {
  color: red;
}

main :where(h1, h2) {
  color: orange;
}

main .wrapper :where(h2, h3) {
  color: pink;
}
```

```html
<main>
  <div class="wrapper">
    <h1>red</h1>
    <h2>pink</h2>
    <h3>pink</h3>
  </div>
</main>
```

### is

is 优先级正常排

```css
main h1,
main h2,
main h3 {
  color: red;
}

main :is(h1, h2) {
  color: orange;
}

main .wrapper :is(h2, h3) {
  color: pink;
}
```

```html
<main>
  <div class="wrapper">
    <h1>orange</h1>
    <h2>pink</h2>
    <h3>pink</h3>
  </div>
</main>
```

## 结构化伪类

structural pseudo classes

CSS3 增加

### :nth-child

## 表单专用伪类

### :required

`<input type="text" required>`

```css
input:required {
  color: #fa0000;
}
```

![表现](../images/ebf0ab96276f201597e464f2b1817dd8.png)

## 层叠优先级/权重

[参考网站](https://juejin.im/post/5ce607a7e51d454f6f16eb3d)  
!important 最高

之后

内联 style(权重 1000)，id(权重 100)，类/伪类/属性(权重 10)，其他(包括伪元素，权重 1)，最后是继承，为 0  
简而言之

1. 权重 100 数量 = a
2. 权重 10 的数量 = b
3. 权重 1 = c  
   计算出(a1, b1, c1)和(a2, b2, c2)的结果。  
   那么先比较 a，a 相同则比较 b，b 又相同则比较 c，c 相同则优先级相同

![权重规则](../images/f17a5fa6839e6883c8734b01f6616d22.png)
::: warning
注意：十一个 class 选择器的权重仍然低于一个 ID 选择器

低等级的选择器，个数再多也不会超过高等级的优先级
:::

```css
body#god div.dad span.son {
  width: 200px;
}

body#god span#test {
  width: 250px;
}
```

第二个值有两个 id 选择器，所以第二个的权重高。

并不是因为权重(100 _ 2 + 10 _ 2)计算相加的总数大。

### 特例

宽高有例外

宽高会被 max-width/min-width 覆盖

`width: 100px!important; min-width: 200px;`等价于`width: 200px;`

## 文件引入

推荐 link

`<link href="xxx.css" rel="stylesheet">`
或者`<style>`标签内`@import url("xx/xxx.css")`

- `rel` 属性规定当前文档与被链接文档之间的关系  
  rel 有很多值，但只有 stylesheet 兼容所有浏览器

### link 与@import

总体来说，`link`是 HTML 标签，`@import`是 CSS 专用的语法

- `@import`只有导入样式表的作用;  
  `link`还可以指定其他，比如[预加载](../network/50_performance.md#资源预加载)
- `@import`是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；`link`标签作为 HTML 元素，不存在兼容性问题
- `link`作为 HTML 标签，就可以用 JS 动态生成
