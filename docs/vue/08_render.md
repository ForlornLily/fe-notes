# 渲染函数 Render

```html
<div id="app"></div>
<script>
  const app = new Vue({
    el: "#app",
    render: function (createElement, context) {
      return createElement("div", "123");
    },
  });
</script>
```

## createElement

创建 VNode

参数：

第一个是标签类型，也可以是.vue 组件，比如 div, h1, input 等

第二个是节点本身的属性

第三个是子节点的属性

### 注意事项

如果 vNode 是组件或含有组件的 slot，那么 vNode 必须唯一

错误示例：（两个一样的 ChildNode）

```js
// 局部声明组件
const Child = {
  render: (h) => {
    return h("p", "text");
  },
};
export default {
  render: (h) => {
    // 创建一个子节点，使用组件 Child
    const ChildNode = h(Child);

    return h("div", [ChildNode, ChildNode]);
  },
};
```

## context

相当于局部组件内的`this`

this.props -\> context.props

## render 适用场景

1. template 里面不允许使用两个同样的 slot（可以用具名插槽），也可以改用 render，进行克隆

2. 通过 Vue.extend 和 new Vue 构造来生成的组件实例，在 SSR 下是编译不过的。Node 环境内没有 document，也不能操作 DOM

3. runtime 版本，是不支持 template 模板的

4. 父组件用 v-html 可能会有 XSS 攻击，需要深度自定义子组件内容的情况下
