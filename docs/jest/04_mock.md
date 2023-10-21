# mock

## mock 函数

测试某个函数的内部逻辑

```ts
// index.ts
export function sayHello(str: string, callback: Function) {
  callback(str)
}
```

```js
// index.test.js
import { sayHello } from "./index"

const fn = jest.fn((x) => `${x}, world`)
sayHello("hello", fn)
test("mock function", () => {
  expect(fn.mock.results[0].value).toBe("hello, world")
})
```

## \.mock

所有的 mock 函数都有 `.mock` 属性，保存了函数的一些信息，比如

- mock.results: 执行的结果。返回的是数组，上面的例子结果是`[ { type: 'return', value: 'hello, world' } ]`
- mock.calls：被调用时的参数。也是个数组

```js
import { sayHello } from "./index"

const fn = jest.fn((x) => x)
sayHello("hello", fn)
console.log(fn.mock.calls) // [ [ 'hello' ] ]
test("mock function", () => {
  expect(fn.mock.calls.length).toBe(1)
})
```

- mock.instances：被调用时的 `this`

```js
const fn = jest.fn()
const obj = {
  hello: "world",
}
const mockFn = fn.bind(obj)
mockFn()
console.log(fn.mock.instances) // [ { hello: 'world' } ]
const obj2 = {
  a: "b",
}
const mockFn2 = fn.bind(obj2)
mockFn2()
console.log(fn.mock.instances) // [ { hello: 'world' }, { a: 'b' } ]
test("mock function", () => {
  expect(fn.mock.calls.length).toBe(2)
})
```

## mock 返回值

`jest.fn` 的返回内容是一个函数

```js
const fn = jest.fn()
console.log(fn()) // undefined
test("mock return value", () => {
  expect(fn.mock.calls.length).toBe(1)
})

const fn2 = jest.fn((x) => x + 1)
console.log(fn2(1)) // 2
```

也可以用 `mockReturnValue` 显示地设置返回值，`mockReturnValueOnce` 只赋值一次

```js
const fn = jest.fn()
console.log(fn()) // undefined
fn.mockReturnValue("hello", "world") //第二个参数无效
console.log(fn(), fn(), fn()) // hello hello hello
test("mock return value", () => {
  expect(fn.mock.calls.length).toBe(4)
})

const fn2 = jest.fn((x) => x + 1)
fn2.mockReturnValueOnce("hello")
console.log(fn2(), fn2(), fn2()) // hello NaN NaN

const fn3 = jest.fn()
fn3.mockReturnValueOnce("hello").mockReturnValue("world") // 链式调用
console.log(fn3(), fn3(), fn3()) //  hello world world
```
