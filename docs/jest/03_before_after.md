# 通用方法

## 重复内容

比如常见的后台管理系统页面查询：查询列表之前都要获取查询条件（通常是表单数据）  
可以用 `beforeEach` 和 `afterEach`，`beforeAll` 和 `afterAll`

- beforeEach: 每次调用测试方法之前调用
- afterEach：每个测试方法调用结束后调用
- beforeAll / afterAll：只执行一次

```js
import { queryTable } from "./index"

beforeEach(() => {
  console.log("beforeEach") //执行两次
})

beforeAll(() => {
  console.log("beforeAll") //执行一次
})

test("query table", () => {
  expect(queryTable()).toBeTruthy()
})
test("query table", () => {
  expect(queryTable()).toBeTruthy()
})
```

## 作用域

用 `describe` 关键词包裹的内容
before 和 after 的块可以应用到文件中的每个测试。  
当 before 和 after 的块在 describe 块内部时，则其只适用于该 describe 块内的测试  
同一个作用域内，beforeEach 在 beforeAll 之后，afterEach 在 afterAll 之前

```js
beforeEach(() => {
  console.log("beforeEach")
})

beforeAll(() => {
  console.log("beforeAll")
})

afterAll(() => {
  console.log("afterAll")
})
describe("local variable", () => {
  beforeEach(() => {
    console.log("local beforeEach")
  })
  afterAll(() => {
    console.log("local afterAll")
  })
  test("query table", () => {
    expect(queryTable()).toBeTruthy()
  })
  test("query table", () => {
    expect(queryTable()).toBeTruthy()
  })
})

/*
 * 执行顺序，以console.log为标志
 * beforeAll
 * beforeEach
 * local beforeEach
 * local beforeEach
 * local afterAll
 * afterAll
 */
```

### 嵌套

`describe` 可以嵌套 `describe`  
先执行所有的 `describe`，再依次执行 `describe` 内部的 `test` 语句

```js
describe("local variable", () => {
  console.log("start")
  describe("nest", () => {
    console.log("nest")
    test("nest test", () => {
      console.log("nest test")
    })
  })
  test("outer test", () => {
    console.log("outer test")
  })
  describe("nest2", () => {
    console.log("nest2")
    test("nest test2", () => {
      console.log("nest test2")
    })
  })
  test("outer test2", () => {
    console.log("outer test2")
  })
  console.log("end")
})
/*
 * 执行顺序，以console.log为标志
 * start
 * nest
 * nest2
 * end
 * nest test
 * outer test
 * nest test2
 * outer test2
 */
```
