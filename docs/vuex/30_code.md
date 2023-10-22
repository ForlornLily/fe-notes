# 简单实现

参考[用 150 行代码实现 Vuex 80%的功能](https://juejin.im/post/5c62ea95e51d457ffe60c084)  
思路就是利用一个全局变量进行通信

```js
// 全局变量
let EventBus = new Vue()
//用全部变量的on和emit进行事件管理
EventBus.$emit("received", "from child")
EventBus.$on("received", (val) => {
  //sth.
})
```

那么挂载在根节点下，同样也可以成为全局变量

```js
var app = new Vue({
  el: "#app",
  bus: bus,
})

// 使用 bus
app.$options.bus
```

```html
<div id="app">
  <child-a></child-a>
  <child-b></child-b>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
  function MyStore(Vue, options) {
    const bus = new Vue({
      data: {
        state: options.state,
      },
    })
    this.install(Vue, bus)
  }
  MyStore.prototype.install = function (Vue, bus) {
    //mixin的形式混入vuex
    Vue.mixin({
      beforeCreate() {
        if (this.$options.myStore) {
          //挂载到原型上
          Vue.prototype.$myStore = bus
        }
      },
    })
  }
  const myStore = new MyStore(Vue, {
    state: {
      count: 0,
    },
  })
  // 子组件 a
  const childA = {
    template: '<button @click="handleClick">click me</button>',
    methods: {
      handleClick() {
        this.$myStore.state.count += 1
      },
    },
  }

  // 子组件 b
  const childB = {
    template: "<div>count: {{ count }}</div>",
    computed: {
      count() {
        return this.$myStore.state.count
      },
    },
  }
  var app = new Vue({
    el: "#app",
    components: {
      "child-a": childA,
      "child-b": childB,
    },
    myStore: myStore,
  })
</script>
```
