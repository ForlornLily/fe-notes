# Vuex

只能通过 commit 修改 store 的状态

Vue 的根实例注册 store 属性，所有子组件都可以通过\$store 获取

```html
<div id="app">
  <user-count></user-count>
</div>
<script>
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count++
      }
    }
  })
  const UserCount = {
    template: `<div>{{count}}</div>`,
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
  const app = new Vue({
    store: store,
    components: {
      UserCount
    }
  }).$mount('#app')
  store.commit('increment')
</script>
```

![](../images/288a0dc913bab3fe765baf18fb4bac27.png)

## store.state

先定义好所有属性

后面再用 store.state 新增的属性和 Vue 一样，是不会响应的

为了避免对象引用的问题，和 Vue 的 data 属性一样，也返回一个函数

```js
state () {
  return {
    foo: 'bar'
  }
}
```

### mapState

mapState 返回的是一个对象，也可以用展开运算符`...mapState({})`

```js
//等价于
count() {
  return this.$store.state.count
}
```

```js
import { mapState } from 'vuex'
computed: mapState({
  // 箭头函数可使代码更简练
  count: state => state.count,
  // 传字符串参数 'count' 等同于 `state => state.count`
  countAlias: 'count',
  // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  countPlusLocalState(state) {
    return state.count + this.localCount
  }
})

//如果是computed内的所有属性都和mapState的属性重名，也可以简写
computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])
```

## store.getters

对 state 里面的属性写通用方法，统一封装处理后返回

```js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
//通过store.getters.doneTodos访问
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}
```

### mapGetters

用法和`mapState`一样，也返回一个对象，可以用展开运算符

```js
mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```

## Mutation 定义修改 state 的方法

mutations 里面的方法必须是同步的，不可以有 promise, setTimeout 等

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state, params) {
      // 变更状态
      //params是个对象，对应commit
      state.count++
    }
  }
})
```

### store.commit

调用 mutation 对应的方法

```js
//写法一
//第一个是方法名
store.commit('increment', {
  amount: 10
})
//写法二：全部以对象的形式
store.commit({
  type: 'increment', //type: 方法名
  amount: 10 //其他参数
})
```

### mapMutations

```js
import { mapMutations } from 'vuex'
methods: {
  ...mapMutations({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  })
}
```

## actions 异步触发 mutation

actions 内可以用异步函数

那么可以返回一个 promise，方便组件内使用

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      //context类似store实例
      //可以用context.state 和 context.getters 来获取 state 和 getters
      context.commit('increment')
    }
  }
})
//可以用解构
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

### store.dispatch

调用 actions 内的方法

传参和 store.commit 用法一样

比如异步的时候用 promise

```js
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('someMutation')//是同步的，所以肯定先commit再resolve
      resolve()
    })
  }
}
store.dispatch('actionA').then(() => {
  // ...
})
```

### mapActions

`import { mapActions } from 'vuex'`

用法和 mapMutations 一样

## modules

方便对各个模块进行分割

每个模块都有独立的 state, getters, mutation, actions

```js
const moduleA = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}
const moduleB = {
  state: {}
  ///省略
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

## 双向绑定 v-model

如果在表单上双向绑定的数据用的是 Vuex 的内容

因为 state 只能通过 mutation 修改，用 v-model 是非常不方便的

### 解决方案 setter

在 computed 里面对 v-model 的变量进行监听，然后在 setter 内调用 mutation 或者 action

```html
<input v-model="message" />
```

```js
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```

## 简单实现

参考[用 150 行代码实现 Vuex 80%的功能](https://juejin.im/post/5c62ea95e51d457ffe60c084)  
思路就是利用一个全局变量进行通信

```js
// 全局变量
let EventBus = new Vue()
//用全部变量的on和emit进行事件管理
EventBus.$emit('received', 'from child')
EventBus.$on('received', val => {
  //sth.
})
```

那么挂载在根节点下，同样也可以成为全局变量

```js
var app = new Vue({
  el: '#app',
  bus: bus
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
        state: options.state
      }
    })
    this.install(Vue, bus)
  }
  MyStore.prototype.install = function(Vue, bus) {
    //mixin的形式混入vuex
    Vue.mixin({
      beforeCreate() {
        if (this.$options.myStore) {
          //挂载到原型上
          Vue.prototype.$myStore = bus
        }
      }
    })
  }
  const myStore = new MyStore(Vue, {
    state: {
      count: 0
    }
  })
  // 子组件 a
  const childA = {
    template: '<button @click="handleClick">click me</button>',
    methods: {
      handleClick() {
        this.$myStore.state.count += 1
      }
    }
  }

  // 子组件 b
  const childB = {
    template: '<div>count: {{ count }}</div>',
    computed: {
      count() {
        return this.$myStore.state.count
      }
    }
  }
  var app = new Vue({
    el: '#app',
    components: {
      'child-a': childA,
      'child-b': childB
    },
    myStore: myStore
  })
</script>
```
