# 代码片段

通过代码片段实现对模板复用

## 注册

通过 `registerPartial` 注册，`unregisterPartial` 注销  
用 `>` 调用

```js
// 方法名是 `myPartial`
Handlebars.registerPartial('myPartial', '{{name}}')

// 调用
const template = Handlebars.compile(`{{> myPartial}}`)
const result = template({
  name: 'hello',
}) // hello
```

或者是一个函数

```js
Handlebars.registerPartial('myPartial', (params) => {
  return params.name
})
const template = Handlebars.compile(`{{> myPartial}}`)
const result = template({
  name: 'hello',
}) // hello
```

## 传参

```js
Handlebars.registerPartial('myPartial', (params) => {
  return params
})
const template = Handlebars.compile(`{{> myPartial job}}`)
const result = template({
  name: 'hello', // 该参数无效
  job: 'developer',
}) // developer
```

代码片段后面只能带一个参数，不能多个  
`> myPartial job age`会报错

### 传递上下文

通过 `key = value` 的形式传入，此时可以传入多个

```js
Handlebars.registerPartial('myPartial', (params, options) => {
  // params.parent 值是 `people`，params.hello 值是 "world"
})
const template = Handlebars.compile(
  `{{#each people}}
    {{> myPartial parent=../people hello="world"}} 
  {{/each}}`
)
const result = template({
  people: [
    { firstname: 'Saber' },
    { firstname: 'Lancer' },
    { secondname: 'Alter' },
  ],
})
```

## 异常处理

如果代码片段没有注册，可以渲染未注册的内容  
注意多了个 `#`，用于包括嵌套

```js
const template = Handlebars.compile(
  `{{#> layout }}
    出错了
  {{/layout}}`
)
const result = template() // 出错了
```

## 嵌套

通过 `@partial-block` 显示嵌套的内容  
`@partial-block` 是内置的代码片段

```js
Handlebars.registerPartial('layout', 'hello {{> @partial-block }}')
const template = Handlebars.compile(
  `{{#> layout }}
    出错了
  {{/layout}}`
)
const result = template() // hello     出错了
```

## inline

用 `inline` 定义代码片段

```js
const template = Handlebars.compile(
  `{{#*inline "myPartial"}}
    My Content
  {{/inline}}
  {{#each people}}
    {{> myPartial}} 
  {{/each}}`
)
const result = template({
  people: [
    { firstname: 'Saber' },
    { firstname: 'Lancer' },
    { secondname: 'Alter' },
  ],
})
/* 
  结果
        My Content
        My Content
        My Content
*/
```

### 嵌套

代码片段内嵌套代码片段

```js
Handlebars.registerPartial('layout', 'hello {{> @partial-block }}')
const template = Handlebars.compile(
  `{{#> layout}}
    {{#*inline "myPartial"}}
      My Content
    {{/inline}}
    {{#each people}}
      {{> myPartial}} 
    {{/each}}
  {{/layout}}`
)
const result = template({
  people: [
    { firstname: 'Saber' },
    { firstname: 'Lancer' },
    { secondname: 'Alter' },
  ],
})
/* 
  结果
  hello             My Content
            My Content
            My Content
*/
```
