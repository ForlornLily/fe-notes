# 代理 proxy 与反射 Reflection 的 API

代理允许拦截 JS 的底层操作

通过调用 `new Proxy()`，可以创建一个代理，用于替代另一个对象（target），这个代理对目标对象进行了虚拟，因此该代理与该目标对象表面上可以被当作同一个对象来对待

## new Proxy(target, hanlder)

### target

```js
let target = {}
let proxy = new Proxy(target, {})
proxy.name = 'proxy'
console.log(proxy.name) // "proxy"
console.log(target.name) // "proxy"
target.name = 'target'
console.log(proxy.name) // "target"
console.log(target.name) // "target"
```

将所有操作直接转发给 target 对象。

proxy 自身其实并没有存储该属性，它只是简单将值转发给 target 对象

proxy.name 与 target.name 都指向 target.name

### handler 对象

handler 首先是个对象，包含了多个陷阱(trap)函数

### 陷阱函数与 Reflect

每个陷阱函数都有对应的 Reflect，并且同名，函数名一致

比如 get 对应 Reflect.get

#### 陷阱函数 has

用到关键字 in 的时候会触发 has 函数，比如遍历对象的属性的时候，即使存在这个 key，也可以让他返回 false

has 陷阱接受的参数分别是

- target: 目标对象(target)

- key

下面访问目标对象是 true，访问代理是 false

```js
let target = {
  name: 'hello',
  age: 12
}
let proxy = new Proxy(target, {
  has(target, key) {
    if (key == 'age') {
      return false
    }
    return Reflect.has(target, key)
  }
})
```

![](../images/c012fe7367394c5af066cc039f20ac61.png)

#### 陷阱函数 get

访问某个对象的 key 时，如果不存在，不会报错，而是返回 undefined

通过 get，可以设置成报错

get 陷阱函数接受的参数分别是

- target: 目标对象(target)

- key

- receiver: 代理对象(proxy)

下面访问 target，还是返回 undefined，访问 proxy 就会报错，但是可以添加属性

```js
let target = {
  name: 'hello'
}
let proxy = new Proxy(target, {
  get(target, key, receiver) {
    if (!(key in receiver)) {
      throw new Error('不存在该属性')
    }
    return Reflect.get(target, key, receiver)
  }
})
```

![](../images/3c48697c5a347af6bcb4bbd25b4a7060.png)
![](../images/bde9a4e2f37cb338324bd2d0ca0e074e.png)

#### 陷阱函数 set

例：假设创建一个对象，对象的每一个新增的 key 都只能是 Number 类型。

那么每新增一个 key 都必须经过校验，可以通过 set 陷阱函数来实现

set 陷阱函数接受的参数是：

- target: 目标对象(target)

- key

- value

- receiver: 代理对象(proxy)

```js
let target = {
  name: 'hello'
}
let proxy = new Proxy(target, {
  set(target, key, value, receiver) {
    //如果target本身有key，跳过，本题只是为了校验新增的key
    if (!target.hasOwnProperty(key)) {
      if (isNaN(value)) {
        console.log('不是数字')
        return
      }
      // 添加属性
      return Reflect.set(target, key, value, receiver)
    }
  }
})
```

![](../images/5d68e2bac00153d424a86783b5805c00.png)

#### 其余函数见原文

[understandinges6](https://github.com/nzakas/understandinges6/blob/master/manuscript/12-Proxies-and-Reflection.md)，
[翻译](https://sagittarius-rev.gitbooks.io/understanding-ecmascript-6-zh-ver/content/chapter_12.html)

## 基于 proxy 实现响应式

```js
let target = {
  a: 1
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
  }
})
```

![](../images/1f0a992c676775d6dacf94a491244927.png)
