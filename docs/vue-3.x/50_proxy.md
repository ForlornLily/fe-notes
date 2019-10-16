# Vue3.x 中的数据监测

参考[Vue3 中的数据侦测](https://juejin.im/post/5d99be7c6fb9a04e1e7baa34)  
Vue3.x 中的[reactive.ts](https://github.com/vuejs/vue-next/blob/master/packages/reactivity/src/reactive.ts)

## proxy

基础内容见[proxy](../js/031_proxy.md)

## reactive.ts

非完整代码，删掉了 typescript 和少量 utils

```js
//记录日期为2019‎年‎10‎月‎10‎日

const rawToReactive = new WeakMap() //原始数据
const reactiveToRaw = new WeakMap() //响应式数据

//处理只读和非响应式
const rawToReadonly = new WeakMap()
const readonlyToRaw = new WeakMap()
const readonlyValues = new WeakSet()
const nonReactiveValues = new WeakSet()

//判断是否是对象
export const isObject = val => val !== null && typeof val === 'object'

//toString判断对象的具体数据类型
const observableValueRE = /^\[object (?:Object|Array|Map|Set|WeakMap|WeakSet)\]$/
export const objectToString = Object.prototype.toString
export const toTypeString = value => objectToString.call(value)

//是否为观察对象
const canObserve = value => {
  return (
    !value._isVue &&
    !value._isVNode &&
    observableValueRE.test(toTypeString(value)) &&
    !nonReactiveValues.has(value)
  )
}

//入口
export function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (readonlyToRaw.has(target)) {
    return target
  }
  // target is explicitly marked as readonly by user
  if (readonlyValues.has(target)) {
    return readonly(target)
  }
  return createReactiveObject(
    target,
    rawToReactive,
    reactiveToRaw,
    mutableHandlers,
    mutableCollectionHandlers
  )
}
export function readonly(target) {
  // value is a mutable observable, retrieve its original and return
  // a readonly version.
  if (reactiveToRaw.has(target)) {
    target = reactiveToRaw.get(target)
  }
  return createReactiveObject(
    target,
    rawToReadonly,
    readonlyToRaw,
    readonlyHandlers,
    readonlyCollectionHandlers
  )
}

function createReactiveObject(
  target,
  toProxy,
  toRaw,
  baseHandlers,
  collectionHandlers
) {
  if (!isObject(target)) {
    //...
    return target
  }
  // 原数据已经有相应的可响应数据, 返回可响应数据
  let observed = toProxy.get(target)
  if (observed !== void 0) {
    return observed
  }
  // target is already a Proxy
  if (toRaw.has(target)) {
    return target
  }
  // only a whitelist of value types can be observed.
  if (!canObserve(target)) {
    return target
  }
  const handlers = collectionTypes.has(target.constructor)
    ? collectionHandlers
    : baseHandlers
  observed = new Proxy(target, handlers)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  //...
  return observed
}
```
