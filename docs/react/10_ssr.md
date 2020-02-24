# ReactDOMServer

用于 SSR

```js
import ReactDOMServer from 'react-dom/server'
```

## renderToString

renderToString 返回的是 HTML 字符串  
如果客户端对应的元素还调用了`hydrate()`，那么`hydrate`只会进行事件绑定，不会重新渲染 DOM

```js
ReactDOMServer.renderToString(element)
```

```js
//例，在express中根据传入路径渲染
export const render = req => {
  /* 
  location: 路径
  context:
  */
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter context={{}} location={req.path}>
        {Route}
      </StaticRouter>
    </Provider>
  )
  return `<html>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    <body>
    </html>`
}
```

## renderToStaticMarkup

作用和`renderToString`类似，但是不会生成额外的内部标记，比如`data-reactid`(react 组件的一个唯一标识)  
对于服务端渲染而言

- 使用`renderToString`方法渲染的节点会带有`data-reactid`属性，前端 react.js 会认识之前服务端渲染的内容, 不会重新渲染 DOM 节点。  
  前端 react.js 会接管页面, 执行 componentDidMout 绑定浏览器事件等 DOM 操作

- 使用 `renderToStaticMarkup` 渲染出的是不带 data-reactid 的纯 html。会重新渲染

## renderToNodeStream

只能在服务端使用  
返回的是一个 utf-8 的的流。
流生成的 HTML 和`renderToString`结果是一样的

```js
ReactDOMServer.renderToNodeStream(element)
```

## renderToStaticNodeStream

返回的是一个 utf-8 的的流。但是不会生成额外的内部标记。  
类似 renderToString 和 renderToStaticMarkup 区别，
