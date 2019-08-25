# 插件

## 注册：Vue.use

在 new Vue 之前使用。多次调用也只会注册一次该插件。

`Vue.use(myPlugin, options)`

会调用 myPlugin 的 install 方法，并传入 Vue 对象

`MyPlugin.install(Vue)`

## 插件的开发方式

没有限制，常见的思路有

1.  做为 Vue 的全局方法或者属性

`Vue.myMethod = funtion()`

2.  directive 添加全局的自定义指令

```js
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
})
```

3.  mixin 混入公用方法

`Vue.mixin(myMix)`

4.  做为 Vue 的实例的方法或者属性

`Vue.prototype.$myMethod = function()`

### toast

用第四种方式

```js
var Toast = {}
Toast.install = function(Vue, options) {
  Vue.prototype.$msg = 'Hello World'
}
Vue.use(Toast) // 注册
let app = new Vue({
  el: '#app',
  mounted() {
    console.log(this.$msg) // Hello World
  }
})
```

## 私有方法处理

为了避免和其他插件或者 Vue 的本身变量/函数名冲突

- 插件的私有方法最好限定作用域在自己的 js 中

用 ES6 module 的时候不导出内部的函数名/变量名

- 无法限定的话就加前缀，比如\$\_myInnterMethod
