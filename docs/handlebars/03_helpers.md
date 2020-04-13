# 助手代码

## 自定义

调用 `registerHelper` 方法进行注册，`unregisterHelper` 注销

```js
Handlebars.registerHelper('loop', (arr) => {
  let result = ''
  arr.forEach((value) => {
    result += ' ' + value
  })
  return result
  // return new Handlebars.SafeString(result)
})
const template = Handlebars.compile(`{{loop people }}`)
const result = template({
  people: ['Saber & ', 'Lancer', 'Archer'],
}) // Saber &amp;  Lancer Archer
```

### SafeString

可以用 `SafeString` 防止被转义，对应的 `escapeExpression` 可以进行转义  
`return new Handlebars.SafeString(result)`  
`Handlebars.escapeExpression(str)`

## 多个参数

```js
Handlebars.registerHelper('introduce', (str, name) => {
  return `${str} ${name}`
})

const template = Handlebars.compile(`{{introduce "Her name is" name}}`)
const result = template({
  name: 'Saber',
}) // Her name is Saber
```

## 最后一个参数

完整内容见[API](http://handlebarsjs.com/api-reference/helpers.html)

```js
Handlebars.registerHelper('introduce', (target, options) => {
  // options 会包含额外的内容
})

const template = Handlebars.compile(`{{introduce servant}}`)
const result = template({
  servant: {
    type: 'Saber',
    name: 'Altria',
  },
})
```

## 重名

助手代码的名称和已有的变量名称重复，会以助手代码优先  
如果想用变量名，加上 `./` 或者 `this.`

```js
Handlebars.registerHelper('introduce', (str, name, options) => {
  return `${str}`
})

const template = Handlebars.compile(`{{introduce ./introduce}}`)
// 等价于 const template = Handlebars.compile(`{{introduce this.introduce}}`);
const result = template({
  introduce: 'Saber',
}) // Saber
```

## 括号

指定生效范围

```js
Handlebars.registerHelper('outer', (str, name) => {
  return `${str} ${name}`
})
Handlebars.registerHelper('inner', (str, options) => {
  return `${str} name is`
})
const template = Handlebars.compile(`{{outer (inner "Her") name}}`)
const result = template({
  name: 'Saber',
}) // Her name is Saber
```

## this

```js
Handlebars.registerHelper('bold', function (options) {
  // this 是 { body: "hello" }
  return new Handlebars.SafeString(
    '<div class="mybold">' + options.fn(this) + '</div>'
  )
})
const template = Handlebars.compile(
  `<div>
    {{#bold}}{{content}}{{/bold}}
  </div>`
)
const result = template({
  body: 'hello',
})
```

## 内置助手代码

### with

传递参数，可以减少内部的嵌套取值

```js
const template = Handlebars.compile(
  `{{#with servant}}
    name: {{name}}
    class: {{class}}
  {{/with}}`
)
const result = template({
  servant: {
    name: 'Altria',
    class: 'Saber',
  },
})
/* 
  结果
    name: Altria
    class: Saber
*/
```

### each

迭代，例子见[更改上下文](./01_expressions.md#更改上下文)

### else

在 `each` 中使用 `else`  
如果迭代的内容为空，可以显示 `else` 的内容

```js
const template = Handlebars.compile(
  `{{#each people}}
    {{else}}
      empty 
  {{/each}}`
)
const result = template({
  people: [],
}) // empty
```

### if

条件判断，后面  
`else` 在内部，也可以使用 `else if`

```js
const template = Handlebars.compile(
  `{{#if result}}
    world
    {{else}}
    hello
  {{/if}}`
)
const result = template({
  result: false,
}) // hello
```

### unless

`if` 的反义词，值是 `false` 的时候渲染内容  
也可以和 `else` 一起用

```js
const template = Handlebars.compile(
  `{{#unless result}}
    world
    {{else if nest}}
      hello
  {{/unless}}`
)
const result = template({
  result: true,
  nest: true,
}) // hello
```

### lookup

适用于不同参数之间共享参数  
比如共享 index

```js
const template = Handlebars.compile(
  `{{#each users as | user |}}
    id: {{id}}
    {{lookup ../infos @index}}
  {{/each}}`
)
const result = template({
  users: [{ id: 11 }, { id: 22 }, { id: 33 }],
  infos: ['a', 'b', 'c'],
})
/* 
  结果
  id: 11
  a
  id: 22
  b
  id: 33
  c
*/
```

```js
const template = Handlebars.compile(
  `{{#each persons as | person |}}
  {{name}} lives in {{#with (lookup ../cities [resident-in])~}}
    {{name}} ({{country}})
  {{/with}}
{{/each}}`
)
const result = template({
  persons: [
    {
      name: 'Nils',
      'resident-in': 'darmstadt',
    },
    {
      name: 'Yehuda',
      'resident-in': 'san-francisco',
    },
  ],
  cities: {
    darmstadt: {
      name: 'Darmstadt',
      country: 'Germany',
    },
    'san-francisco': {
      name: 'San Francisco',
      country: 'USA',
    },
  },
})
/* 
  结果
  Nils lives in Darmstadt (Germany)
  Yehuda lives in San Francisco (USA)
*/
```

## 特殊参数

### \@index

遍历数组时的索引

```js
const template = Handlebars.compile(
  `{{#each array}}
    {{@index}}. {{firstname}}
  {{/each}}`
)
const result = template({
  array: [
    { firstname: 'Saber' },
    { firstname: 'Lancer' },
    { secondname: 'Alter' },
  ],
})
/* 
  结果
    0. Saber
    1. Lancer
    2. 
*/
```

### \@key

遍历对象时候的 `key`

### as

类似 ES6 的 `as`，给参数取别名，避免命名冲突

```js
const template = Handlebars.compile(
  `{{#each user as |userContent|}}
    {{userContent.userId}}
    {{userContent.userName}}
  {{/each}}`
)
const result = template({
  user: [
    {
      userId: 1,
      userName: 'hello',
    },
  ],
})
/* 
  结果
    1
    hello
*/
```
