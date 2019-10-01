# 响应式

参考: [剖析 Vue.js 内部运行机制](https://juejin.im/book/5a36661851882538e2259c0f)  
更多内容: [answershuto/learnVue](https://github.com/answershuto/learnVue)  
[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)  
响应式概览
![](../images/33f72cc561e3f368215ee8bf252a69b8.png)

## new Vue

Vue 本质上只是个构造函数，`new Vue`的时候通过调用`_init`开始初始化

```js
//src\core\instance\index.js
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

\_init: 实际上是直接写在`prototype`上的, 它会初始化生命周期、事件、 props、 methods、 data、 computed 与 watch 等

```js
//部分代码，省略静态类型检查
//src\core\instance\init.js
Vue.prototype._init = function(options) {
  //...
  initLifecycle(vm) //初始化生命周期
  initEvents(vm) //事件
  initRender(vm)
  callHook(vm, 'beforeCreate') //调用钩子
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callHook(vm, 'created')
  //...
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}
```

### Object.defineProperty

可以说是`_init`最重要的部分，通过 `Object.defineProperty` 设置 setter 与 getter 函数，用来实现「响应式」以及「依赖收集」

## \$mount

初始化之后调用 \$mount 会挂载组件;

```js
//部分代码，省略静态类型检查
//runtime only下
//src\platforms\web\runtime\index.js
Vue.prototype.$mount = function(el, hydrating) {
  return mountComponent(this, el && query(el, this.$document), hydrating)
}
```

如果是运行时编译，即不存在 render function 但是存在 template 的情况，需要进行「编译」(compile)步骤

```js
//部分代码，省略静态类型检查
//runtime-compiler下
//src\platforms\web\entry-runtime-with-compiler.js
Vue.prototype.$mount = function(el, hydrating) {
  //...
  const options = this.$options
  // 如果render不存在，处理template
  if (!options.render) {
    let template = options.template
    if (template) {
      //如果存在template，那么把template转成DOM对象
    } else if (el) {
      //如果不存在template，那么直接拿el的父元素作为template
      template = getOuterHTML(el)
    }
    if (template) {
      //...
      const { render, staticRenderFns } = compileToFunctions(
        template,
        {
          outputSourceRange: process.env.NODE_ENV !== 'production',
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        },
        this
      )
      options.render = render
      options.staticRenderFns = staticRenderFns
      //...
    }
  }
  //...
  return mount.call(this, el, hydrating)
}
```

### Runtime Only 和 Runtime + Compiler

Vue 的渲染最终都是通过`render`函数进行的，可以用户自定义，也可以通过 compiler 编译生成

```js
// 需要编译器
new Vue({
  template: '<div>{{ hi }}</div>'
})

// 不需要编译器
new Vue({
  render(h) {
    return h('div', this.hi)
  }
})
```

### mountComponent

mount 的核心方法
主要是两个方法：  
先调用 vm.\_render 方法先生成虚拟 Node，再实例化一个渲染 Watcher，在它的回调函数中会调用 `updateComponent` 方法，最终调用 vm.\_update 更新 DOM

```js
//部分代码，省略静态类型检查
//src\core\instance\lifecycle.js
export function mountComponent(vm, el, hydrating) {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
    //...
  }
  callHook(vm, 'beforeMount')
  let updateComponent
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    //...
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate')
        }
      }
    },
    true
  )
  hydrating = false

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```

## compile

compile 编译可以分成 parse、optimize 与 generate 三个阶段，最终需要得到 render function

### parse

parse 会用正则等方式解析 template 模板中的指令、class、style 等数据，形成 AST（Abstract Syntax Tree：表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构）。

### optimize

optimize 的主要作用是标记 static 静态节点，这是 Vue 在编译过程中的一处优化，后面当 update 更新界面时，会有一个 patch 的过程， diff 算法会直接跳过静态节点，从而减少了比较的过程，优化了 patch 的性能。  
根据 node 的 type 来，如果 type 是 2，那么是表达式节点，static 是 false。
type 是 3，那么是静态节点

### generate

generate 是将 AST 转化成 render function 字符串的过程，得到结果是 render 的字符串以及 staticRenderFns 字符串。
在经历过 parse、optimize 与 generate 这三个阶段以后，组件中就会存在渲染 VNode 所需的 render function 了
