# 杂

## 输入框获取 Enter 留下的空格 ↵

通过`\n`获取。比如 indexOf("\\n"), split("\\n")

## 设计模式

待补充

## 性能优化

- 移除无用代码

- 减少请求次数：比如 JS、CSS 合并压缩，图片可用雪碧图，字体图标

- 尽可能使用轻量级的 JSON 数据

- 按需加载

### CSS 硬件优化

用 css 开启硬件加速，使 GPU (Graphics Processing Unit) 发挥功能。

但是使用 GPU 可能会导致严重的性能问题，因为它增加了内存的使用，而且它会减少移动端设备的电池寿命。需要权衡

CSS animations, transforms 以及 transitions
不会自动开启 GPU 加速，而是由浏览器的渲染引擎来执行。可以通过某些规则来触发 GPU 渲染

比如 3D 变换

哪怕不需要变换，也可以，比如 transform: translateZ(0)

```css
.example {
  transform: translate3d(250px, 250px, 250px) rotate3d(
      250px,
      250px,
      250px,
      -120deg
    )
    scale3d(0.5, 0.5, 0.5);
}
```

在 Chrome and Safari 中，当我们使用 CSS transforms 或者
animations 时可能会有页面闪烁的效果，下面的代码可以修复此情况

backface-visibility: 定义当元素不面向屏幕时是否可见

perspective：元素距离视图的距离

```css
.example {
  backface-visibility: hidden;
  perspective: 1000;
  /* Other transform properties here */
}
```

### 图片懒加载

监听滚动条，用 data-src 指定 img 的路径，滚动到一定位置的时候替换成 src

imgs.src = imgs.getAttribute("data-src");

同时注意给个延时，避免反复调用

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
