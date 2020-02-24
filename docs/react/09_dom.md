# React Dom

提供对 DOM 操作的一些方法

## render

首次调用 render 会替换 container 的所有内容，再次调用则根据 diff 算法局部更新  
对服务端渲染容器改用[hydrate](#hydrate)

```js
ReactDOM.render(element, container[, callback])
```

```js
//例
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
```

## hydrate

和 render 用法一样，只不过用在[ReactDOMServer](./10_ssr.md)对象上，ReactDOMServer 通常存在 Node 服务端

```js
ReactDOM.hydrate(element, container[, callback])
```

## unmountComponentAtNode

卸载组件

```js
ReactDOM.unmountComponentAtNode(container)
```

## Portals

官网[Portals](https://reactjs.org/docs/portals.html)
把组件挂载到指定的 DOM 上，常见的场景是下拉面板

```js
ReactDOM.createPortal(
  child, //元素
  container //指定的DOM
)
```
