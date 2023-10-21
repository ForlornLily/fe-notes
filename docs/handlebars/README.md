# Handlebars

一种简易的模板语言  
参考

- [官网](https://github.com/wycats/handlebars.js)

用双括号包裹，与 `Vue` 的文本插值规则相似，都基于 [mustache](https://github.com/mustache)

```js
const template = Handlebars.compile("hello {{who}}")
template({ who: "world" }) // "hello world"
```

## noConflict

Handlebars.noConflict()：类似 jQuery 的 noConflict，当 `Handlebars` 这个全局变量冲突时，可以改名

## 基本 demo

```handlebars
const template = Handlebars.compile(`
  <ul>
    {{#each tours}}
      {{! 现在在一个新的代码块里了，上下文已经改变了 }}
      <li>
        {{name}} - {{price}}
        ({{../currency.abbrev}})
      </li>
    {{/each}}
  </ul>
  {{#unless currencies}}
    <p>All prices in {{currency.name}}.</p>
  {{/unless}}
  {{#if specialsUrl}}
    {{! 现在在一个新的代码块里了，但上下文基本上没有改变 }}
    <p>Check out our <a href="{{specialsUrl}}">specials!</p>
  {{else}}
    <p>Please check back often for specials.</p>
  {{/if}}
  <p>
    {{#each currencies}}
      <a href="#" class="currency">{{.}}</a>
    {{else}}
      Unfortunately, we currently only accept {{currency.name}}.
    {{/each}}
  </p>
`);

const result = template({
  currency: {
    name: '1',
    abbrev: '2',
  },
  tours: [
    { name: 'Hood River', price: '$99.95' },
    { name: 'Oregon Coast', price: '$159.95' },
  ],
  specialsUrl: '/january-specials',
  currencies: ['USD', 'GBP', 'BTC'],
})
console.log(result);
```

结果

```html
  <ul>
      <li>
        Hood River - $99.95
        ()
      </li>
      <li>
        Oregon Coast - $159.95
        ()
      </li>
  </ul>
    <p>Check out our <a href="/january-specials">specials!</p>
  <p>
      <a href="#" class="currency">USD</a>
      <a href="#" class="currency">GBP</a>
      <a href="#" class="currency">BTC</a>
  </p>
```

## express 中使用

见 [express-handlebars](https://forlornlily.github.io/server-notes/express/30_views.html#handlebars)
