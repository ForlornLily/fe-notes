# 工具函数

`Handlebars.Utils.xx`

## isEmpty

判断给定的值是否为空
空的情况：

- 数组长度为 0
- 除了 `0` 之外，和 JavaScript 的 `falsy` 一致：即 null, undefined, "", NaN

```js
const isEmpty = Handlebars.Utils.isEmpty
console.log(isEmpty(0)) // false
console.log(isEmpty("")) // true
```

## extend

即 `Object.assign`

## toString

转字符串

## isArray

和 `Array.isArray` 作用一样，判断是否为数组

## isFunction

是否是函数
