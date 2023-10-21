# 匹配器

Matchers：Jest 主要利用“匹配器”测试代码

- 官网[Using Matchers](https://jestjs.io/docs/zh-Hans/using-matchers)

## toBe

精确比较

```ts
// index.ts
export function add(x: number, y: number): number {
  return x + y
}
```

```js
// index.test.js
import { add } from "./index"

test("add", () => {
  expect(add(1, 2)).toBe(3)
})
```

上述的 `expect` 表示期望的内容，`toBe` 代表期望的结果，`toBe` 用 `Object.is` 进行等价比价

## toEqual

适用于比较对象的字段是否相等

```js
test("object is equal", () => {
  const data = { hello: "world" }
  expect(data).toEqual({ hello: "world" }) // 通过
  expect(data).toBe({ hello: "world" }) // 不通过，对象不相等
})
```

## not

相反的匹配，比如 `not.toBe`，`not.toEqual`，`not.toBeUndefined`

```js
test("add", () => {
  expect(add(1, 2)).not.toBe(4)
})
```

## falsy

- toBeNull 只匹配 `null`
- toBeUndefined 只匹配 `undefined`
- toBeDefined 与 `toBeUndefined` 相反
- toBeTruthy 匹配任何 `if` 语句为真
- toBeFalsy 匹配任何 `if` 语句为假

```ts
// index.ts
export const zero = 0
```

```js
import { zero } from "./index"

test("object is falsy", () => {
  expect(zero).toBeFalsy() //测试通过
  expect(zero).toBeNull() //不通过
})
```

## 数字

### toBeCloseTo

因为 `0.1 + 0.2` 不等于 `0.3`，所以浮点数比较用 `toBeCloseTo`，而不是`toEqual`

```js
test("number is equal", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})
```

## 比较

- toBeGreaterThan

```js
test("number is equal", () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3) // 通过
})
```

- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual
- toBe / toEqual：对于数字来说两者等价

## 字符串

正则：

- toMatch：只能用于字符串

```js
test("string match", () => {
  expect("hello world").toMatch("hello") // 通过
})
```

## 迭代器

- toContain：是否包含某一项

```js
test("iterables", () => {
  expect(["hello", "world"]).toContain("hello")
})
```

## 异常

- toThrow：匹配异常

```ts
// index.ts
export function errorCatch() {
  throw new Error("error msg")
}
```

```js
// index.test.js
import { errorCatch } from "./index"

test("catch errors", () => {
  expect(errorCatch).toThrow("error msg") // 通过
  expect(errorCatch).toThrow("hello") // 不通过，抛出的内容不对
})
```

## 其他

参考[API Reference-Expect](https://jestjs.io/docs/zh-Hans/expect)
