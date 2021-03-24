# 数据类型

简单数据类型和对象的区别在于：简单数据类型是不可更改的。  
改变数字 1 本身就不可能

- 基本类型：指保存在栈内存中的数据
- 引用类型：(对象引用)指保存在堆内存中的对象，传递的是引用的地址

## typeof 操作符

返回的值（都是小写）有

- undefined
- number
- string
- boolean
- symbol
- bigint
- object: null 也返回 object
- function

```js
var test = Symbol('1')
console.log(typeof test) // "symbol"
class Hello {
  constructor(value) {
    this.value = value
  }
}
console.log(typeof Hello) // "function"
console.log(typeof notDeclared) // "undefined"
```

如果一个变量没有被声明，用 typeof 还是返回"undefined"，而不是报错

## 安全的判断数据类型

前提是`toString`没有修改。必须加 call，否则返回值不对  
`Object.prototype.toString.call(value)`

```js
let target = {}
let proxy = new Proxy(target, {})
Object.prototype.toString(proxy) //"[object Object]"
```

返回的是"[object Number]"

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt
- Object
- Array
- Function
- Date
- RegExp
- Error
- Math
- JSON
- Set
- WeakSet
- Map
- WeakMap
