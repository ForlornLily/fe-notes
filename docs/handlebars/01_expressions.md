# 表达式

通过 `Handlebars.compile` 创建模板函数

## 对象

不关心书写顺序

```js
const template = Handlebars.compile("{{who}} {{greet}}")

const result = template({
  greet: "hello",
  who: "world",
})
console.log(result) // "world hello"
```

### 路径表达式

可以用 `/` 代替 `.`

```js
const template2 = Handlebars.compile("{{obj.greet}} {{obj.who}}")

const result2 = template2({
  obj: {
    greet: "hello",
    who: "world",
  },
})
console.log(result2) // "hello world"
```

### 中括号

用于包裹不是字符串（`string`）类型的内容

```js
const template = Handlebars.compile(`{{ people.[0] }} `)
const result = template({
  people: ["Saber", "Lancer"],
}) // Saber
```

## 更改上下文

`#each` 叫[助手代码](./03_helpers.md)，助手代码可以做一些逻辑操作，`#each` 的作用是遍历对象

```js
const template = Handlebars.compile(
  `{{#each people}}
    {{firstname}} 
  {{/each}}`
)
const result = template({
  people: [
    { firstname: "Saber" },
    { firstname: "Lancer" },
    { secondname: "Alter" },
  ],
})
console.log(result)
/* 
  result 结果：
    Saber 
    Lancer  

*/
```

注：第三行是空内容，因为不包含 `firstname`
::: warning
`{{` 和 `#each` 之间不能有空格，同理 `{{/` 也不能
:::

### 井号

`#helpers` 和 `/helpers` 表示嵌套的内容区域

### 路径

`/` ，和文件夹的路径含义一致

- `../` 表示上级

```js
const template = Handlebars.compile(
  `{{#each people}}
    {{../prefix}}  {{firstname}} 
  {{/each}}`
)
const result = template({
  people: [{ firstname: "Saber" }, { firstname: "Lancer" }],
  prefix: "Hello",
})
console.log(result)
/* 
  result 结果：
    Hello  Saber 
    Hello  Lancer 
*/
```

## 转义

- 双括号会把特殊符号进行转义
- 三括号 不会

```js
const template = Handlebars.compile(`{{people}}`)
const result = template({
  people: "You & me",
}) // "You &amp; me"
```

## 删除空格

`~` 可以删除空格

```js
const template = Handlebars.compile(
  `{{#each people}}
    {{~firstname}} 
  {{/each}}`
)
```

## 注释

```handlebars
{{! 注释不会渲染}}
<!-- 注释会被渲染到 HTML -->
```
