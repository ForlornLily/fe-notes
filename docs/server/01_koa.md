# koa 脚手架

## app.js

```js
/*
 * 将 public 文件夹注册为静态资源，可以直接访问
 * 比如 css，http://localhost:3000/stylesheets/style.css
 */
app.use(require('koa-static')(__dirname + '/public'))
```

## 路由

### 动态路由

```js
router.get('/user/:userName/:pageNumber', async (ctx, next) => {
  const { userName, pageNumber } = ctx.params
  ctx.body = {
    title: 'hello',
    user_name: userName,
    page: pageNumber,
  }
})
```

### post

```js
router.post('/login', function (ctx, next) {
  const { user_name, password } = ctx.request.body
  ctx.body = {
    user_name,
    password,
  }
})
```

## 模板引擎 ejs

完整内容：[ejs](https://github.com/mde/ejs)

### 变量

- 变量获取: `<%= 变量名 %>`，例：`<h1><%= title %></h1>`
- 可选变量：`<p><%= locals.变量名 %></p>`，例：`<p><%= locals.name %></p>`

### 条件判断

```js
// 异步请求
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    user: {
      name: '111',
    },
  })
})
```

```
<% if (locals.user) { %>
  <h2><%= user.name %></h2>
<% } else {%>
  <button>点击登录</button>
<% } %>
```

### 组件引用

```
<%- include("./widgets/login", {
  user: locals.user
}) %>
```

### 循环

```
<ul>
  <% list.forEach(item => { %>
    <li><%= item %></li>
  <% }) %>
</ul>
```
