# 滚动条

## better-scroll

一些官网配置容易忽视的点。比如`click: true`以及`finishPullUp`

```js
import BScroll from 'better-scroll'
//在vue中，确保DOM渲染结束再调用
this.$nextTick(() => {
  if (!this.scroll) {
    this.scroll = new BScroll(this.$refs.scroll, {
      mouseWheel: true,
      pullUpLoad: true,
      click: true //响应容器内的点击事件
    })
    this.scroll.on('scroll', pos => {
      // 监听滚动
      //做一些操作
      // this.handleSortFix(pos);
    })
    this.scroll.on('pullingUp', pos => {
      // 下拉动作
      //获取数据
      // this.pageNumber++;
      // this.getList();
    })
  } else {
    if (!this.disabled) {
      this.scroll.finishPullUp() //必须，否则只能加载两页数据
    }
    this.scroll.refresh()
  }
})
```
