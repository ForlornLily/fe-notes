# 函数柯里化

只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数

也就是只传递一部分参数给函数，再由函数自己返回一个函数（也就是闭包）处理别的内容。  
可以理解为用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数  
参考：

- [JS 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
- [JavaScript 专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)

## 手写 curry

通常 curry 传入的参数只有一个

```js
function curry(fn) {
  const that = this
  function inner(...args) {
    const length = args.length
    if (length === fn.length) {
      //传入参数等于函数的形参
      return fn.call(that, ...args)
    }
    return function(...inerArgs) {
      return inner.call(that, ...args, ...inerArgs)
    }
  }
  return inner
}

function test(a, b, c) {
  console.log(a, b, c)
}
const f1 = curry(test)(1)
const f2 = f1(2)
f2(3) //1 2 3
```
