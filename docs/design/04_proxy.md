# 代理模式

Proxy pattern：为一个对象提供占位符或者代用品。

## 保护代理

代理过滤掉一些请求。  
常见应用是权限

## 虚拟代理

把一些开销大的操作，等到需要时再去执行本体操作

## 缓存代理

比如下面的乘法

```js
function multi() {
  const length = arguments.length
  let a = 1
  for (let i = 0; i < length; i++) {
    a = a * arguments[i]
  }
  return a
}
var proxyMulti = (function () {
  var cache = {}
  return function () {
    const params = Array.prototype.join(arguments, ",")
    if (cache[params]) {
      return cache[params]
    }
    return (cache[params] = multi.apply(null, arguments))
  }
})()
proxyMulti(1, 4, 5, 6)
console.log(proxyMulti(1, 4, 5, 6)) //第二次调用的时候值已经缓存
```

更多见 [Proxy](../js/031_proxy.md)
