# 整体设计

[参考](https://www.cnblogs.com/coco1s/p/5261646.html)  
大致分为

- 初始化的变量、正则
- 工具方法\$.fn
- \$.ready()
- 选择器 sizzle
- 回调\$.Callback()
- 异步\$.deffered
- 浏览器功能检测\$.support
- 存储\$.data
- 执行顺序管理 queue()
- 属性操作，比如 attr(), prop(), addClass()
- 事件 on，trigger
- DOM 操作
- CSS 操作
- Ajax
- 动画 animate()
- 位置尺寸 offset()

## 实例

jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype

```js
jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
  },
jQuery.fn = jQuery.prototype = {
  //...
  constructor: jQuery
  //...
  root = root || rootjQuery;
  //...
}

init = jQuery.fn.init = function( selector, context, root ) {
  //...
}
init.prototype = jQuery.fn;
rootjQuery = jQuery( document );
```

不需要通过 new 关键字，直接\$(xxx)即可，是因为
使用 `$('xxx')` 这种实例化方式，其内部调用的是 return new jQuery.fn.init(selector, context)
而 jQuery 内部
`jQuery.fn.init.prototype = jQuery.fn;`
也就是说
$('xxx') = new jQuery() = new jQuery.fn.init
$('xxx)根据原型链就可以使用 jQuery.fn 的所有方法
