# ReactDOMServer  
[How to Upgrade to React 18](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)  

用于 SSR

```js
import ReactDOMServer from 'react-dom/server'
```

## renderToString

renderToString 返回的是 HTML 字符串，不支持 stream    
如果客户端对应的元素还调用了`hydrate()`，那么`hydrate`只会进行事件绑定，不会重新渲染 DOM

```js
import { renderToString } from 'react-dom/server';

const html = renderToString(<MyIcon />);
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
- 不可以被 hydrated，适合纯静态展示内容（不包含可交互的，比如点击）  
- 使用`renderToString`方法渲染的节点会带有`data-reactid`属性，前端 react.js 会认识之前服务端渲染的内容, 不会重新渲染 DOM 节点。  
  前端 react.js 会接管页面, 执行 componentDidMount 绑定浏览器事件等 DOM 操作

- 使用 `renderToStaticMarkup` 渲染出的是不带 data-reactid 的纯 html。会重新渲染

## renderToPipeableStream / renderToReadableStream
只能在服务端使用  
- renderToPipeableStream：Node 环境专用
- renderToReadableStream：[Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) 
返回的是一个 utf-8 的的流。
流生成的 HTML 和`renderToString`结果是一样的

```js
// 已废弃
ReactDOMServer.renderToNodeStream(element)
```
``` js
import { renderToPipeableStream } from 'react-dom/server';

const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ['/main.js'],
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    pipe(response);
  },
  onShellError(error) {
    // 组件渲染失败，同样会触发 onError
  },
  onError(error) {
    // 所有失败都进
  }
});
```

## renderToStaticNodeStream

返回的是一个 utf-8 的的流。但是不会生成额外的内部标记。  
类似 renderToString 和 renderToStaticMarkup 区别  
