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

### WebP

img src 的后缀'?x-oss-process=image/format,webp'会被转成 WebP 格式, Safari 都不兼容  
[WebP 参考链接](https://juejin.im/post/5bad996ef265da0ab915d260)
