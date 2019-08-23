# 兼容性

## 只能加前缀使用的属性

### user-select

元素不被选中

非标准的。使用的时候必须加前缀

```css
.el {
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
```

### appearance

只有火狐和 Chrome 加了前缀以后才支持，否则不支持
