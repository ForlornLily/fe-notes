# 混入 minxin

```html
<div id="app">
  <button @click="sayHello">切换页面</button>
</div>
<script>
  var myMix = {
    methods: {
      sayHello() {
        console.log('hello')
      }
    }
  }
  const app = new Vue({
    el: '#app',
    mixins: [myMix]
  })
</script>
```

## mixins 属性合并

### 对象类

如果组件和 mixin 存在重合，比如方法、 data 内的 key 重名，以组件优先

值为对象的选项都以组件为准

```html
<div id="app">
  <button @click="sayHello">hello</button>
  <button @click="sayWorld">world</button>
</div>
<script>
  var myMix = {
    methods: {
      sayHello() {
        console.log('hello')
      },
      sayWorld() {
        console.log('world')
      }
    }
  }
  const app = new Vue({
    el: '#app',
    mixins: [myMix],
    methods: {
      sayHello() {
        //以此为优先
        console.log('Hi!')
      }
    }
  })
</script>
```

### 钩子函数

都会触发，先进 mixins

## 全局合并 Vue.mixin

将影响每一个之后创建的 Vue 实例

比如 vue-router

```js
var myMix = {
  methods: {
    sayHello() {
      console.log('hello')
    },
    sayWorld() {
      console.log('world')
    }
  },
  mounted() {
    console.log('myMix mounted')
  }
}
Vue.mixin(myMix)
```

## 自定义配置 optionMergeStrategies

完整的 optionMergeStrategies 可以通过`Vue.config.optionMergeStrategies`查看。

比如配置 methods

```js
Vue.config.optionMergeStrategies.methods = function(toVal, fromVal) {
  // 先配置再new 实例。 返回合并后的值
  debugger
}
var myMix = {
  methods: {
    sayHello() {
      console.log('hello')
    }
  }
}
Vue.mixin(myMix)
const app = new Vue({
  el: '#app'
})
```
