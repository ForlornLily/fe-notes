# Event loop

和浏览器不同

## 异步编程

如果 err 就直接 return，这样比较优雅

## 回调

一般用来表示一次性响应的逻辑

## 事件监听器

本质上也是回调

![](../images/7a763b53e2951ed4922b48ff811ce186.png)

server.on 就是一个监听器，每次有 request 事件发出的时候，就会触发

## 自定义事件发射器（Event Emitter）

用`EventEmitter`创建自己的实例

on 监听，emit 触发，removeListener 删除监听

```js
const EventEmitter = require('events').EventEmitter
const myEvent = new EventEmitter()
myEvent.on('join', (msg, msg2) => {
  console.log(`${msg} + ${msg2}`)
})
myEvent.emit('join', 'hello', 'world')
//myEvent.removeListener ("join");
```

![](../images/2e68b435c61d4dde9113b1916c9832bf.png)

removeAllListeners 删除所有对应的监听器，用法同 removeListener
