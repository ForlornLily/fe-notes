# 边框

## border-radius

可以是 1 个值，2 个值(左上/右下 右上/左下)，4 个值

拆分，比如`border-top-left-radius`

百分比是相对于元素宽度和高度

## border-image

## box-shadow

用法与 text-shadow 类似

多了一个阴影位置的关键字 inset，可以让阴影在在内侧

只有实线，没有虚线

不会影响布局，因为不属于盒模型

## 生成三角形

```css
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  /* 如果需要向上的箭头的话, 就把border-top改为border-bottom */
  border-top: 20px solid;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
}
```
