# Handlebars

一种简易的模板语言  
参考

- [官网](https://github.com/wycats/handlebars.js)

用双括号包裹，与 `Vue` 的文本插值规则相似，都基于 [mustache](https://github.com/mustache)

```js
const template = Handlebars.compile('hello {{who}}')
template({ who: 'world' }) // "hello world"
```

## noConflict

Handlebars.noConflict()：类似 jQuery 的 noConflict，当 `Handlebars` 这个全局变量冲突时，可以改名
