# 语句

## 关系表达式

### 对象不相等

对象和本身相等；

但是和其他的任何对象都不相等

即使拥有相同数量的属性，属性名和属性值相等

```js
var obj = { servant: "saber" }
var obj2 = obj
obj === obj2 //true

var servant = { servant: "saber" }
var fakeServant = { servant: "saber" }
servant === fakeServant // false
```

## if

if 内条件会根据 Boolean()方法进行转换

### 优化

if else 的时候判断顺序最好从最大概率开始

如果 else if 特别多，最好用 if else 嵌套的形式来代替 else
if。用二分法把内容一分为二，内部再进行二分

但是如果它不是均匀的，不太容易平均分，那么推荐用`switch`

```js
if(){
} else if(){
} else if() {
} else if() {
}
//改成
if () {
  if () {} else if () {} else {}
} else {}
```

## switch

switch 不会发生类型转换，用的全等===

条件数量少时 if else 可读性好，多时推荐用 switch

如果条件语句内执行的操作一样，只是参数不同，那么可以用数组存起来，不用条件语句

## 循环

for, while, do while（至少会执行一次，即使条件是 false）

三者的性能差不多

倒序循环性能比正序要高一些

```js
for (var i = 0, len = item.length; i < len; i++) {
  //do sth.
}
//可以变为
for (var i = item.length; i--; ) {
  //do sth.
}
```

当 i— 到 0 的时候，因为 0 是`falsy`，循环就会停止

while 和 do-while 同理

### break 和 continue

break 退出 for；continue 继续下一个 for
::: warning
只能在循环内使用，forEach 等数组迭代方法不可以
:::

### for 和 while 适用情景

见[stackoverflow](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript/39969215)

while 适合迭代次数未知的情况。
例:

```js
var servant = "Lancer"
while (servant !== "Saber") {
  if (seihai()) {
  } else {
    servant = "Saber"
  }
}
```

### for-in

迭代：不能保证返回对象属性的顺序，不包含 key 是 `Symbol` 的值，包含`prototype`上的值

```js
const symbolName = Symbol("hello")
Object.prototype.b = 2
const test = {
  a: "1",
  [symbolName]: "world",
}
let tmp = {}
for (let key in test) {
  tmp[key] = test[key]
}
console.log(tmp) //{a: '1', b: 2}
```

### for-of

用 `for..of` 直接遍历某个集合时，不同集合有不同的迭代器  
用于可迭代对象（不能循环普通的对象，需要通过和 Object.keys()搭配使用）。  
可以使用 `break`、`continue`、`return` 或者 `throw` 中断  
值是 next()返回的 value; done 是 true 的时候结束

数组和 Set 是 values

Map 是 entries

```js
let arr = [11, 22, 33]
for (let key of arr) {
  //等价于key of arr.values()
  console.log(key)
}
```

### 性能

- 尽可能减值迭代，从最大值开始

- 终止条件尽可能是 O(1)

尽可能用 do-while

```js
let i = arr.length - 1
//数组为空时没必要进循环
if (i > -1) {
  do {
    //sth
  } while (--i >= 0)
}
```

- 用 switch 代替 if else

- 如果 value 和执行的方法存在稳定的逻辑关系是，可以用数组代替

```js
switch (value) {
  case 0:
    return value0
  case 1:
    return value1
  default:
    return value10
}
//改成数组
var results = [value0, value1, value10]
return results[value]
```

- 多用位运算

- 多用原生方法，比如 Math 自带的

## throw 和 try catch

throw 用来抛出异常，try/catch 捕获异常

```js
function jude(x) {
  if (x < 0) {
    throw new Error("x不能小于0") //Uncaught Error: x不能小于0
  }
  try {
    console.log(x)
  } catch (e) {
    console.log(e)
  }
}
```

try..catch 只能是同步的，无法用于异步代码模式。  
参考[try/catch 无法捕获 promise.reject 的问题](https://segmentfault.com/q/1010000014905440)

```js
//报错，Uncaught (in promise)
function f2() {
  try {
    Promise.reject("出错了")
  } catch (e) {
    console.log(e)
  }
}
//正常
function f2() {
  try {
    Promise.reject("出错了").catch((err) => {
      console.log("2", err)
    })
    console.log("1")
  } catch (e) {
    console.log(e)
  }
}
```

## 递归，迭代和缓存

- 递归是自己调用自己

- 迭代是把输出做为输入

尽可能用迭代取代递归

迭代通常包括几个循环。循环比反复调用一个函数开销少

```js
//递归实现阶乘：
function factorial(n) {
  if (n == 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
//阶乘先做个缓存
function memfactorial(n) {
  if (!memfactorial.cache) {
    memfactorial.cache = {
      0: 0,
      1: 1,
    }
  }
  if (!memfactorial.cache.hasOwnProperty(n)) {
    memfactorial.cache[n] = n * memfactorial(n - 1)
  }
  return memfactorial.cache[n]
}
```

## 函数

完整内容见 [Function](./025_function.md)
