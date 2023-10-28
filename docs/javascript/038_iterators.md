# 迭代器和生成器

为了解决循环变量（for 里面用来++的 i）  
循环就是一种简单的迭代

原有的循环（比如 for）遍历有一些缺陷：

- 需要事先知道如何使用数据结构，比如数组，要通过 arr[index] 去取值
- 遍历顺序并不是数据结构固有的： i++ 也只能用在数组上，普通对象就不合适

ES5 新增了 `forEach`，但缺点是没法中断，而且只能用在 Array 类型

## 可迭代功能

实现 Iterable 接口(可迭代协议)要求同时具备两种能力:

- 支持迭代的自我识别能力
- 创建实现 Iterator 接口的对象的能力
  - 必须暴露一个属性作为“默认迭代器”，而 且这个属性必须使用特殊的 Symbol.iterator 作为键。

JS 的数据类型很多都内置了实现：

- 字符串 string
- 数组 Array
- 映射 object
- 集合 Set
- NodeList 等 DOM 集合类型
- arguments 对象

通过 `Symbol.iterator` 可以监测是否存在  
`for...of`会先调 Symbol.iterator 方法，Symbol.iterator 返回一个迭代器，然后 next()被调用

```ts
const str = "hello, world"
console.log(str[Symbol.iterator]()) // StringIterator {}
```

```js
function isIterable(object) {
  return typeof object[Symbol.iterator] === "function"
}
isIterable("12345") //true
isIterable([1, 2, 3]) //true
isIterable(new WeakMap()) //false
```

实际用的时候不需要特意调用 `Symbol.iterator`，支持可迭代协议的类型都自动支持以下特性

- for...of
- 解构
- 扩展运算符 `...`
- Array.from
- 创建 Set

```ts
const str = "hello"
const data = new Set(str)
console.log(data) // Set(4) {'h', 'e', 'l', 'o'}
```

- yield\*操作符，在生成器中使用

## Iterators

都拥有 next 方法

next()调用时返回一个对象，对象有两个属性：

- value 代表下一个值

- done 代表是否完成，是个布尔值。 true 时表示没有下一个 value 可以 return 了

```ts
const str = "hello"
const test = str[Symbol.iterator]()
const second = str[Symbol.iterator]()
console.log(test.next()) // {value: 'h', done: false}
// 互相独立
console.log(second.next()) // {value: 'h', done: false}
```

### 简单实现

为了让一个可迭代对象能够创建多个迭代器，必须每创建一个迭代器就对应一个新计数器。  
为此，可以把计数器变量放到闭包里，然后通过闭包返回迭代器

```ts
function Iterators(items: string[]) {
  var i = 0
  return {
    next: function () {
      var done = items.length < i
      var value = !done ? items[i++] : undefined
      return {
        done: done,
        value: value,
      }
    },
  }
}
const test = Iterators(["hello", "world"])
console.log(test.next()) // {done: false, value: 'hello'}
console.log(test.next()) // {done: false, value: 'world'}
console.log(test.next()) // {done: false, value: undefined}
console.log(test.next()) // {done: true, value: undefined}
```

```ts
class Counter {
  private items: string[]
  constructor(items: string[]) {
    this.items = items
  }
  [Symbol.iterator]() {
    let count = 0
    const items = this.items
    const length = items.length
    return {
      next(): {
        done: boolean
        value: string | undefined
      } {
        const value = items[count]
        count += 1
        if (count <= length) {
          return { done: false, value }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  }
}
let counter = new Counter(["hello", "world"])
for (let i of counter) {
  console.log(i)
}
```

## Generators

拥有在一个函数块内暂停和恢复代码执行的能力。  
使用生成器可以自定义迭代器和实现协程

生成器的形式是一个函数，函数名称前面加一个星号（\*）表示它是一个生成器。

- 函数名前面加`*`表示是一个生成器。可以作为对象的方法。`*` 前后的空格没有影响

```js
// 生成器函数声明
function* generatorFn() {}
// 生成器函数表达式
let generatorFn = function* () {}
// 作为对象字面量方法的生成器函数
let foo = {
  *generatorFn() {},
}
// 作为类实例方法的生成器函数
class Foo {
  *generatorFn() {}
}
// 作为类静态方法的生成器函数
class Bar {
  static *generatorFn() {}
}
```

调用生成器函数会产生一个生成器对象。调用 next 会让生成器开始或恢复执行。

```ts
function* generators() {
  return "hello"
}
const test = generators()
console.log(test.next()) // {value: 'hello', done: true}
```

- 可以使用`yield`关键字， yield 后面指定了 value 的值

  可以传参：next(参数)，第一次调用参数无效

```ts
function* createIterator(): Generator<string, void, string> {
  let first = yield "hello"
  let second = yield first + " world" //2赋值给了first
  let third = yield second //3赋值给了second
}
let iterators = createIterator()
console.log(iterators.next("1")) // {value: 'hello', done: false}
console.log(iterators.next("2")) //  {value: '2 world', done: false}
console.log(iterators.next("3")) // {value: '3', done: false}
console.log(iterators.next("4")) // {value: undefined, done: true}
```

```ts
function* createIterator(): Generator<string, string, string> {
  let first = yield "hello"
  return "finished"
  let second = yield first + " world"
  let third = yield second
}
let iterators = createIterator()
console.log(iterators.next("first")) // {value: 'hello', done: false}
console.log(iterators.next("second")) //  {value: 'finished', done: true}
console.log(iterators.next("third")) // {value: undefined, done: true}
console.log(iterators.next("last")) // {value: undefined, done: true}
```

::: warning
yield 只能放在生成器中，生成器内如果嵌套了函数，也不能放在嵌套函数内部
:::

```js
// 无效
function* invalidGeneratorFnA() {
  function a() {
    yield
  }
}
```

- 不能用箭头函数创建生成器

```js
function *generators(items) {
  items.forEach(function(element) {
    yield element; //报错
  });
}
```

### 星号

相当于去迭代，一次产出一个值

```ts
function* generatorFn() {
  yield* [1, 2]
  yield* [3, 4]
  yield* [5, 6]
}
for (const x of generatorFn()) {
  console.log(x) // 一次一个值，1 2 3 4 5 6，而不是 [1, 2] [3,4] [5,6]
}
```

可以用来实现递归

```ts
function* iterArr(
  arr: (string | string[])[]
): Generator<(string | string[])[], void, unknown> {
  //迭代器返回一个迭代器对象
  if (Array.isArray(arr)) {
    // 内节点
    for (let i = 0; i < arr.length; i++) {
      yield* iterArr(arr[i] as (string | string[])[]) // (*) 递归
    }
  } else {
    // 离开
    yield arr
  }
}
// 使用 for-of 遍历：
const arr = ["a", ["b", "c"], ["d", "e"]]
const result = iterArr(arr)
for (const x of iterArr(arr)) {
  console.log(x) // a  b  c  d  e
}
```

### 提前终止生成器

#### return

所有生成器对象都有 `return` 方法，调用后进入关闭状态，无法恢复

```ts
function* createIterator(): Generator<string, void | string, string> {
  let first = yield "hello"
  let second = yield first + " world" //2赋值给了first
  let third = yield second //3赋值给了second
}
let iterators = createIterator()
console.log(iterators.next("1")) // {value: 'hello', done: false}
console.log(iterators.return("2")) //  {value: '2', done: true}
console.log(iterators.next("3")) // {value: undefined, done: true}
console.log(iterators.next("4")) // {value: undefined, done: true}
```

#### throw

```ts
function* createIterator(): Generator<string, void | string, string> {
  let first = yield "hello"
  let second = yield first + " world" //2赋值给了first
  let third = yield second //3赋值给了second
}
let iterators = createIterator()
console.log(iterators.next("1")) // {value: 'hello', done: false}
console.log(iterators.next("2")) //  {value: '2 world', done: false}
console.log(iterators.throw(new Error("error"))) // Uncaught Error: error
// 直接报错，不会往下走
console.log(iterators.next("4"))
```

如果在生成器里边 try catch 了就能继续往下走

```ts
function* createIterator(): Generator<string, void | string, string> {
  try {
    let first = yield "hello"
    let second = yield first + " world" //2赋值给了first
    let third = yield second //3赋值给了second
  } catch {}
}
let iterators = createIterator()
console.log(iterators.next("1")) // {value: 'hello', done: false}
console.log(iterators.throw(new Error("error"))) // {value: undefined, done: true}
console.log(iterators.next("2")) //  {value: undefined, done: true}
console.log(iterators.next("4")) // {value: undefined, done: true}
```

## 内置的迭代器(Built-in Iterators)

### 集合的迭代器: keys, values, entries

- keys：输出 key

对于数组来说是索引，Set 来说就是 value，Map 来说是 key

- values 输出 value

- entries 输出键值对的集合

```js
let values = [11, 22, 33]
let keys = values.keys()
for (let key of keys) {
  console.log(key) //依次输出索引0, 1, 2
}
```

```js
let values = new Set([11, 22, 33])
let keys = values.keys()
for (let key of keys) {
  console.log(key) //依次11, 22, 33
}
```

```js
let values = new Map([
  [11, "hello"],
  [22, "world"],
])
let keys = values.entries()
for (let key of keys) {
  console.log(key)
}
```

### NodeList（DOM）的迭代器

NodeList 是一个类数组，迭代表现和数组一样

## 委托

生成器做为函数，成为另一个生成器的一部分

```ts
function* createStr() {
  yield "hello"
  yield "world"
}
function* createNum() {
  yield 1
  yield 2
}
function* createIterator() {
  yield* createNum()
  yield* createStr()
}
let iterators = createIterator()
console.log(iterators.next()) // {value: 1, done: false}
console.log(iterators.next()) // {value: 2, done: false}
console.log(iterators.next()) // {value: 'hello', done: false}
console.log(iterators.next()) // {value: 'world', done: false}
console.log(iterators.next()) // {value: undefined, done: true}
```

## await/async

适合场景：回调之间存在依赖（回调地狱）。本质上就是 Generator 的一个语法糖

- 在一个函数前加一个 async，函数会返回一个 Promise
- await 只能在 async 函数中使用

- await 会阻塞代码

- 多个 await 依次执行

- await 后面跟的是个 Promise 对象，如果不是。await 会把它转成 Promise

```js
async function async1() {
  console.log("async1 start")
  await async2()
  console.log("async1 end")
  console.log("a1 end2")
}

//等价于
async function async1() {
  console.log("async1 start")
  Promise.resolve(async2()).then(() => {
    console.log("async1 end")
    console.log("a1 end2")
  })
}
```

- await 执行后的结果就是 resolve 的值

```js
async function myMethod() {
  let y = await 20
  console.log(y)
}
myMethod() //20
function promise(params) {
  return new Promise((resolve, reject) => {
    resolve(params)
  })
}
async function secondMethod() {
  let y = await promise("hello")
  console.log(y)
}
secondMethod() //"hello"
```

### 例子

```js
async function a1() {
  console.log("a1 start")
  await a2()
  console.log("a1 end")
}
async function a2() {
  console.log("a2")
}

console.log("script start")

setTimeout(() => {
  console.log("setTimeout")
}, 0)

Promise.resolve().then(() => {
  console.log("promise1")
})

a1()

let promise2 = new Promise((resolve) => {
  resolve("promise2.then")
  console.log("promise2")
})

promise2.then((res) => {
  console.log(res)
  Promise.resolve().then(() => {
    console.log("promise3")
  })
})
console.log("script end")
```

结果

```
script start
a1 start
a2
promise2
script end
promise1
a1 end
promise2.then
promise3
setTimeout
```

### 异步迭代

让 await 可以和 for...of 循环一起使用，以串行的方式运行异步操作

```js
async function process(array) {
  for await (let i of array) {
    doSomething(i)
  }
}
```
