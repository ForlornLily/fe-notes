# 函数

## var

自定义属性，存在类似 JS 的变量提升，即使层级在后面或者在不同文件，也能生效

- 属性名要以 `--` 开头
- 第二个参数用来变量不合法时的兜底

```css
.test {
  color: var(--main-text-color);
  background: var(--not-exist, #ff0000);
  font-size: var(--not-exist, var(--normal-size));
}

:root {
  --main-text-color: #66ccff;
  --normal-size: 14px;
}
```
