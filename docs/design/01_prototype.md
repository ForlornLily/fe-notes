# 原型模式

基于一个对象，克隆出另一个对象  
可以说所有的 JavaScript 对象都是从某个对象克隆出来的  
比如用 `Object.create` 实现

```js
const mama = {
  name: "Isabella",
  job: "sister",
}
function factory(o) {
  function plant() {}
  plant.prototype = o
  return new plant()
}
const base = factory(mama)

//改用 create
const base2 = Object.create(mama)
```

## 原型链

当对象本身无法完成响应某个请求时，会把该请求委托给自己的构造器原型  
更多原型链的内容参考[原型](../js/006_complex_data.md#原型)
