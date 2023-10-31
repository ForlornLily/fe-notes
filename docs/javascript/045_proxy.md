# 代理与反射

代理允许拦截 JS 的底层操作

通过调用 `new Proxy()`，可以创建一个代理，用于替代另一个对象（target），这个代理对目标对象进行了虚拟，因此该代理与该目标对象表面上可以被当作同一个对象来对待

## new Proxy(target, handler)

### target

```js
let target = {}
let proxy = new Proxy(target, {})
proxy.name = "proxy"
console.log(proxy.name) // "proxy"
console.log(target.name) // "proxy"
target.name = "target"
console.log(proxy.name) // "target"
console.log(target.name) // "target"
```

将所有操作直接转发给 target 对象。

proxy 自身其实并没有存储该属性，它只是简单将值转发给 target 对象

proxy.name 与 target.name 都指向 target.name

### handler 对象

使用代理的主要目的是可以定义捕获器（trap）。一般用来做一些拦截行为，比如鉴权  
即下方的陷阱（trap）函数

### 陷阱函数与 Reflect

Reflect 的存在是为了方便返回原有的实现，避免一样的逻辑需要自己手写一遍

每个函数都有对应的 Reflect，并且同名，函数名一致

比如 get 对应 Reflect.get

同样这类函数也存在一些限制：必须遵循“捕获器不变式”（trap invariant）

```ts
const target: {
  foo?: string
} = {}
Object.defineProperty(target, "foo", {
  configurable: false,
  writable: false,
  value: "bar",
})
const handler = {
  get() {
    return "qux"
  },
}
const proxy = new Proxy(target, handler)
console.log(proxy.foo) // Uncaught TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected 'bar' but got 'qux')
```

#### has

用到关键字 in 或者 with() 的时候会触发 has 函数，比如遍历对象的属性的时候，即使存在这个 key，也可以让他返回 false

has 接受的参数分别是

- target: 目标对象(target)

- key

下面访问目标对象是 true，访问代理是 false

```js
let target = {
  name: "hello",
  age: 12,
}
let proxy = new Proxy(target, {
  has(target, key) {
    if (key == "age") {
      return false
    }
    return Reflect.has(target, key)
  },
})
console.log("name" in target) // true
console.log("age" in target) // true

console.log("name" in proxy) // true
console.log("age" in proxy) // false
```

捕获器不变式

- 如果 target.property 存在且不可配置，则处理程序必须返回 true。
- 如果 target.property 存在且目标对象不可扩展，则处理程序必须返回 true。

#### get

访问某个对象的 key 时，如果不存在，不会报错，而是返回 undefined

通过 get，可以设置成报错

get 函数接受的参数分别是

- target: 目标对象(target)

- key

- receiver: 代理对象(proxy)

下面访问 target，还是返回 undefined，访问 proxy 就会报错，但是可以添加属性

```ts
let target: {
  name: string
  age?: number
} = {
  name: "hello",
}
let proxy = new Proxy(target, {
  get(target, key, receiver) {
    if (!(key in receiver)) {
      throw new Error("不存在该属性")
    }
    // return Reflect.get(target, key, receiver)
    return Reflect.get(target, key, receiver)
  },
})
console.log(target.name) // hello
console.log(proxy.name) // hello

console.log(target.age) // undefined
console.log(proxy.age) // Uncaught Error: 不存在该属性
```

```ts
proxy.age = 12
console.log(proxy.age) // 12，赋值后正常输出
```

捕获器不变式

- 如果 target.property 不可写且不可配置，则处理程序返回的值必须与 target.property 匹配。
- 如果 target.property 不可配置且[[Get]]特性为 undefined，处理程序的返回值也必须是 undefined。

#### set

例：假设创建一个对象，对象的每一个新增的 key 都只能是 Number 类型。

那么每新增一个 key 都必须经过校验，可以通过 set 来实现

set 接受的参数是：

- target: 目标对象(target)

- key

- value

- receiver: 代理对象(proxy)

```ts
let target: {
  name: string
  age?: number
  plan?: string
} = {
  name: "hello",
}
let proxy = new Proxy(target, {
  set(target, key, value, receiver): boolean {
    //如果target本身有key，跳过，本题只是为了校验新增的key
    if (!target.hasOwnProperty(key)) {
      if (isNaN(value)) {
        console.log("不是数字")
        return true
      }
      // 添加属性
      return Reflect.set(target, key, value, receiver)
    }
    return false
  },
})
proxy.age = 12
console.log(proxy.age) // 12
console.log(target) // {name: 'hello', age: 12}
// 不报错，但不会赋值
proxy.plan = "S" // 不是数字
console.log(target, proxy.plan) // {name: 'hello', age: 12} undefined
// 因为最后 return false 所以会报错
proxy.name = "hello" // Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'name'
```

捕获器不变式

- 如果 target.property 不可写且不可配置，则不能修改目标属性的值。
- 如果 target.property 不可配置且[[Set]]特性为 undefined，则不能修改目标属性的值。
- 在严格模式下，处理程序中返回 false 会抛出 TypeError。

#### 其余函数见原文

[understandinges6](https://github.com/nzakas/understandinges6/blob/master/manuscript/12-Proxies-and-Reflection.md)，
[翻译](https://sagittarius-rev.gitbooks.io/understanding-ecmascript-6-zh-ver/content/chapter_12.html)

- defineProperty
- getOwnPropertyDescriptor
- deleteProperty：对应 `delete`
- ownKeys：对应 Object.keys
- getPrototypeOf
- setPrototypeOf
- isExtensible
- preventExtensions
- apply
- construct：对应 `new`

## 撤销代理

调用 `new Proxy()` 生成的代理会一直存在  
通过 revocable 方法可以撤销，并且不可逆

```ts
const target: {
  foo?: string
} = {}
const handler = {
  get() {
    return "qux"
  },
}
const { proxy, revoke } = Proxy.revocable(target, handler)
console.log(target.foo) // undefined
console.log(proxy.foo) // 'qux'

revoke()
revoke() // 幂等，可以调用多次，结果都一样
console.log(target.foo) // undefined
console.log(proxy.foo) // Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
```

## Reflect

Reflect 不一定要和 Proxy 绑定，普通的对象也可以  
比如 Reflect.defineProperty 会返回一个布尔值，表示操作是否成功  
如果是普通写法，可以用 try catch 捕获异常

```ts
const target: {
  foo?: string
} = {}

Object.defineProperty(target, "foo", {
  configurable: false,
  writable: false,
  value: "bar",
})

try {
  Object.defineProperty(target, "foo", {
    value: "test",
  })
} catch (e) {
  console.log(e) // TypeError: Cannot redefine property: foo
}
```

改用 Reflect，不需要 try catch，而是返回一个布尔值

```ts
const target: {
  foo?: string
} = {}

Object.defineProperty(target, "foo", {
  configurable: false,
  writable: false,
  value: "bar",
})

console.log(
  Reflect.defineProperty(target, "foo", {
    value: "test",
  })
) // false
```

应用场景

- 上述的状态标记
- 代替一些操作符，比如遍历用 `in`，可以用 Reflect.has 代替
  - has、get、set
  - deleteProperty：代替 `delete`
  - Reflect.construct()：代替 `new`

```ts
console.log("hello" in target)
console.log(Reflect.has(target, "hello"))
```

```ts
const test = new Array("1", "2", "3")
const arr = Reflect.construct(Array, ["1", "2", "3"])
console.log(test, arr)
```

- 安全的调用函数  
  在通过 apply 方法调用函数时，被调用的函数可能也定义了自己的 apply 属性  
  通常做法是通过原型链覆写`Function.prototype.apply.call(myFunc, thisVal, argumentList);`。
  可以用 Reflect.apply 代替  
  `Reflect.apply(myFunc, thisVal, argumentsList);`

## 缺点

不能很好地兼容 `this`

```ts
const target = new Date()
const proxy = new Proxy(target, {})
console.log(proxy instanceof Date) // true
console.log(target.getTime())
proxy.getTime() // Uncaught TypeError: this is not a Date object.
```

## 基于 proxy 实现响应式

```js
let target = {
  a: 1,
}
function info(obj, key) {
  console.log(`对象的${key}是${obj[key]}`)
}
function change(obj, key, value) {
  obj[key] = value
}
let proxy = new Proxy(target, {
  get(target, key, receiver) {
    info(target, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    //通过改变proxy来改变target的值
    change(target, key, value)
    return Reflect.set(target, key, value, receiver)
  },
})
```

### 数组操作

如果 target 是一个数组，假设值是`[1,2,3]`。实际上 proxy 的值是  
![](../images/proxy_array.jpg)

```js
let target = [1, 2, 3]
function info(obj, key) {
  console.log(`对象的${key}是${obj[key]}`)
}
function change(obj, key, value) {
  console.log(`${key}的值会被改变成${value}`)
  obj[key] = value
}
let proxy = new Proxy(target, {
  get(target, key, receiver) {
    info(target, key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    //通过改变proxy来改变target的值
    change(target, key, value)
    return Reflect.set(target, key, value, receiver)
  },
})
proxy.push(5)
```

`proxy.push(5)`会多次触发`get`和`set`
![](../images/proxy_push.jpg)

### 对象嵌套

嵌套不会触发`set`，但会触发`get`

```js
let target = {
  name: "hello",
  location: {
    three: "west",
  },
}
/* 省略proxy定义 */
proxy.location.three = "east"
```

![](../images/proxy_nest.jpg)

### 更好的响应式

解决两个问题：

1. 多次触发`set`后，反复触发一个事件:  
   可以用[防抖](./022_bom.md#函数防抖与节流)实现；  
   在 Vue 中，根据 key 是否是 target 的自有属性(`hasOwnProperty`)：
   - 不是自有属性，那么应该是新增的 key，走一次逻辑，结束
   - 是自有属性，判断旧值和新值是否一致：不一致，走逻辑，结束；一致，不需要执行，结束
2. 对象嵌套：递归的方式  
   在 Vue 中，用的是`get`会被触发的特性，对 Refelect.get 返回的对象进行 Proxy

```js
function createReactive(target) {
  let proxy = new Proxy(target, handlers)
  return proxy
}
const handlers = {
  get: getters,
  set: setters,
}
function getters(target, key, receiver) {
  const result = Reflect.get(target, key, receiver)
  if (typeof result === "object") {
    //再次调用
    return createReactive(result)
  }
  return result
}
function setters(target, key, value, receiver) {
  const isOwn = target.hasOwnProperty(key)
  if (!isOwn) {
    //新增属性，执行逻辑
    console.log("not own")
  } else {
    //已有属性，判断新值和旧值是否相等
    const currentValue = target[key]
    if (value !== currentValue) {
      console.log("value changed")
    }
  }
  return Reflect.set(target, key, value, receiver)
}
let target = {
  name: "hello",
  location: {
    three: "west",
  },
  arr: [1, 2, 3],
}
let proxy = createReactive(target)
proxy.arr.push(6) // "not own"
proxy.location.three = "east" // "value changed"
```
