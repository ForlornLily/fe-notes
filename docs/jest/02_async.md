# 测试异步代码

- 官网[Testing Asynchronous Code](https://jestjs.io/docs/zh-Hans/asynchronous)

## Promise

- 一定要把 `promise` 作为返回值，否则 `promise` 被 `resolve`、`then` 有机会执行之前，测试就已经被视为已经完成了

```ts
// index.ts
export function asynceDemo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello")
    }, 1000)
  })
}
```

```js
// index.test.js
import { asynceDemo } from "./index"

test("promise", () => {
  return asynceDemo().then((data) => {
    expect(data).toBe("hello")
  })
})
```

用 `.resolves` / `.rejects` 改写

```js
// 上面等价于
import { asynceDemo } from "./index"

test("promise", () => {
  return expect(asynceDemo()).resolves.toBe("hello")
})
```

## async

- 在测试中用 async / await

```js
// 上面等价于
import { asynceDemo } from "./index"

test("promise", async () => {
  await expect(asynceDemo()).resolves.toBe("hello")
})
```
