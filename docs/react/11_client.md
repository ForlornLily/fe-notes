# Client

## createRoot

对应 React 17 之前的 React DOM 的 render

```jsx
// 废弃
import { render } from "react-dom"

const domNode = document.getElementById("root")
render(<App />, domNode)
```

```jsx
import { createRoot } from "react-dom/client"

const domNode = document.getElementById("root")
const root = createRoot(domNode)
```

```jsx
// 渲染
root.render(<App />)

// 卸载
root.unmount()
```

如果 root 的元素由 React 服务端渲染生成，用 [hydrateRoot](#hydrateRoot)  
如果完全用 React 写，render 应该只调用一次，也不需要手动调用 unmount

## hydrateRoot

在浏览器渲染由 [react-dom/server](./10_ssr.md) 生成的组件  
服务端生成的组件和 hydrateRoot 应该是完全一样的，也就是不会包含以下内容

- 判断了 typeof window，或者用到了浏览器才有的 API
- 空白行
- data 不一样，比如 new Date()

## suppressHydrationWarning

配置 suppressHydrationWarning 后，严格模式下，两段渲染不一致会有警告

```jsx
export default function App() {
  return (
    <h1 suppressHydrationWarning={true}>
      Current Date: {new Date().toLocaleDateString()}
    </h1>
  )
}
```
