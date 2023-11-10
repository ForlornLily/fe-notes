# jQuery 设计模式

[参考](https://www.kancloud.cn/kancloud/learn-js-design-patterns/56451)

## 组合模式

含义：一组对象可像单个对象一样的对待  
`addClass`实现中直接使用原生的 for 循环、jQuery 的`jQuery.each`、`jQuery.fn.each`来迭代一个集合以达到能同时处理一个或一组元素的目的

```js
// 单一节点
$("#singleItem").addClass("active");
$("#container").addClass("active");

// 一组节点
$("div").addClass("active");
$(".item").addClass("active");
$("input").addClass("active");
```

## 适配器模式（hook）

含义：允许本来由于接口不兼容而不能一起正常工作的对象或者类能够在一起工作  
比如`$( ".container" ).css( { opacity: .5 } )`;  
IE8 下是没有 opacity 这个属性的，JS 内容进行了兼容处理。  
通过`filter:alpha(opacity=60)`

## 门面模式/外观模式

提供了一个更简单的抽象接口  
比如`$.get`，`$.post`封装了`$.ajax`

## 观察者模式/发布订阅模式

可以在关注的事件发生的时候给其他对象发送消息，也可以被其他对象所通知  
比如 jQuery 的绑事件（`on`）、解绑事件（`off`）和触发事件（`trigger`）
