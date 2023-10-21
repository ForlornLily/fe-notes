# Vue Router 3.x

```html
<div id="app">
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
</div>
<script>
  const Foo = {
    template: "<div>foo</div>",
  }
  const Bar = {
    template: "<div>bar</div>",
  }
  const routes = [
    {
      path: "/foo",
      component: Foo,
    },
    {
      path: "/bar",
      component: Bar,
    },
  ]
  const router = new VueRouter({
    routes,
  })
  const app = new Vue({
    router,
  }).$mount("#app")
</script>
```

## 声明式 &lt;router-link&gt;

点击 `<router-link :to="...">` 等同于调用 `router.push(...)`

### to

通过传入 `to` 属性指定链接

默认会被渲染成一个 \<a\> 标签

## &lt;router-view&gt;

路由匹配到的组件将渲染在 router-view 中

### 命名视图 name

同级展示多个视图

比如菜单 menu 和中间的区域 center

```html
<div id="app">
  <router-view name="menu"></router-view>
  <router-view></router-view>
</div>
<script>
  const User = {
    template: `
    <div class="user">
      <h2>User</h2>
      <div>bottom</div>
    </div>
    `,
  }
  const menu = {
    template: `<ul><li>菜单</li></ul>`,
  }
  const router = new VueRouter({
    routes: [
      {
        path: "/",
        components: {
          //是components, 不是component
          default: User,
          menu: menu,
        },
      },
    ],
  })
  const app = new Vue({
    router,
  }).$mount("#app")
</script>
```

## 动态路由

"路径参数"使用冒号`:`标记

只有满足路径条件，才会用对应的 component

下面的访问/user/foo 会进 User 组件；/user/foo/bar 不会

```js
const User = {
  template: "<div>User</div>",
  mounted() {
    //访问/user/hello
    //params是{name: "hello"}
    console.log(this.$route.params)
  },
}
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: "/user/:name",
      component: User,
    },
  ],
})
const app = new Vue({
  router,
}).$mount("#app")
```

### \$route.params

匹配到一个路由时，参数值会被设置到 `this.$route.params`

#### props

通常组件都通过`$route.params`来获取参数

也可以在 route 里面设置 props 为 true， 让\$route.params 成为组件内 data 的属性

组件设置 props 属性接收

```js
const User = {
  template: "<div>User {{ $route.params.id }}</div>",
}
const router = new VueRouter({
  routes: [
    {
      path: "/user/:id",
      component: User,
    },
  ],
})
//等价于
const User = {
  props: ["id"], //props接受参数
  template: "<div>User {{ id }}</div>",
}
const router = new VueRouter({
  routes: [
    {
      path: "/user/:id",
      component: User,
      props: true,
    },
  ],
})
```

### 多个路径参数

`path: '/user/:name/:id'`

匹配的是/user/任意值/任意值

比如\#/user/hello/world

params 参数是

```js
{
  name: "hello",
  id: "world"
}
```

`path: '/user/:name/new/:id'`

匹配的是/user/任意值/new/任意值

### 组件复用

用路径参数访问/user/foo 的时候，组件是不会销毁的，也就是 mounted 等生命周期钩子不会触发

可以 watch \$route 来做一些处理，也可以用 beforeRouteUpdate 钩子

注意 beforeRouteUpdate 第一次创建的时候是不会触发的，只有更新才会

```js
const User = {
  template: "<div>User</div>",
  mounted() {
    console.log(this.$route.params)
  },
  beforeRouteUpdate(to, from, next) {},
}
```

### 部分匹配

用`*`

比如`path: "*"` 匹配所有

`path: '/user-*'` 表示以 user-开头，比如\#/user-2

#### \$route.params.pathMatch

用`*`的时候，可以用\$route.params.pathMatch 获取到匹配的内容

比如\#/user-1, pathMatch 的值是"1"

## 嵌套路由

用 children 属性

假设页面结构是 header 和 center

center 又分为公用的 menu 和动态的内容

在根实例\#app 下的 router-view 匹配的是 center

在 center 内配置 router-view 的话，匹配嵌套路由的时候只会刷新动态的内容

```html
<div id="app">
  <router-view></router-view>
</div>
<script>
  const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
      <div>bottom</div>
    </div>
  `,
  }
  const UserProfile = {
    template: "<div>UserProfile</div>",
  }
  const EmptyComponent = {
    template: "<div>empty</div>",
  }
  const router = new VueRouter({
    routes: [
      {
        path: "/user",
        component: User,
        children: [
          {
            path: "", //访问空的子路由#/user/
            component: EmptyComponent,
          },
          {
            path: "profile", //访问#/user/profile，user里面的<router-view>渲染UserProfile
            component: UserProfile,
          },
        ],
      },
    ],
  })
  const app = new Vue({
    router,
  }).$mount("#app")
</script>
```

## 编程式导航

### push(location, onComplete, onAbort)

有 path 的时候 params 是不生效的，query 有效

```js
// 字符串
router.push("home")

// 带查询参数，变成 /register?plan=private
router.push({ path: "register", query: { plan: "private" } })

const userId = "123"
router.push({ name: "user", params: { userId } }) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123

// 这里的 params 不生效
router.push({ path: "/user", params: { userId } }) // -> /user
router.push(
  {
    path: "/user/profile",
  },
  () => {
    //onComplete
  }
)
```

### replace

用法和参数与 push 一样，与 history 的 replaceState 一样，替换记录

### go(number)

## 命名路由 name

```js
    path: '/user',
    name: "User"
```

`router.push({ name: 'user'})`

## 重定向 redirect

url 的显示值也替换成成 redirect 的路径

```js
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/user", //重定向到/user
    },
    {
      path: "/user",
      component: User,
    },
  ],
})
```

也可以用命名路由 name

`redirect: { name: "user" }`

用方法，return 目标路由

```js
redirect: (to) => {
  return "/user"
}
```

### 别名 alias

```js
  path: '/',
  component: User,
  alias: '/hello'//访问#/和#hello，都用的一个组件，hello的显示不会被替换
```

## 路由守卫

### 全局：beforeEach

一定要调用 next()

```js
const router = new VueRouter({})
router.beforeEach((to, from, next) => {
  // ...
})
```

### 单个 beforeEnter

在 route 对象内分别配置

```js
routes: [
  {
    path: "/foo",
    component: Foo,
    beforeEnter: (to, from, next) => {
      // ...
    },
  },
]
```

### 组件内

在组件内进行调用

- beforeRouteEnter: 没有 this，此时组件实例还没有被创建

- beforeRouteUpdate：第一次创建的时候是不会触发的，只有更新才会（也就是被复用的时候）

- beforeRouteLeave

## 滚动条

路由切换的时候可以让滚动条滚回顶部

```js
const router = new VueRouter({
  routes: [
    {
      path: "/user/:id",
      component: User,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
```

## mode

浏览器两种`"hash"`, `"history"`；非浏览器环境还有一种`"abstract"`  
没有浏览器的 API，路由会自动强制进入 abstract
