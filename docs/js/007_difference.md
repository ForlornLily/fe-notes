# 基本包装类型和复杂类型的区别

差别在于生命周期。

基本包装类型在一行代码执行完毕之后就被销毁

所以基本类型上加属性是获取不到的

```js
var s1 = "hello"
s1.color = "red"
alert(s1.color) //undefined
```

过程：

1. s1.color 的时候创建了一个 String 实例，随即被销毁

2. alert 的时候又创建了一个 String 实例，此时新实例是没有 color 的

所以虽然不会报错，但无法加属性

不建议显式地 new 基本包装类型

```js
var value = "16"
var number = Number(value)
typeof number //"number"
var obj = new Number(value)
typeof obj //"object"
```
