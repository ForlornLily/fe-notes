# JSX

官网[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)  
React 的专用语法，一定要引入 React 才能编译  
本质上 JSX 只是 `React.createElement` 的语法糖

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}
```

- `return`必须返回单个父元素
- 标签必须闭合
- 如果是组件，为了避免和原生 HTML 重名，组件名需要是 CamelCase（首字母也大写）
- 原生的 HTML 属性如果和 JS 关键字冲突，需要改写，比如`class`→`className`
- JS 内容用`{}`包裹
- 更多内容：[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)

## Fragment

占位符，类似 vue 的`template`，不会被渲染成真实 DOM，通常用来充当包裹的父元素

```js
import React, { Fragment } from 'react'

return (
  <Fragment>
    <ChildA />
    <ChildB />
  </Fragment>
)
```

### 简写

官网[React v16.2.0: Improved Support for Fragments](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)  
直接用`<></>`表示

```js
return (
  <>
    <ChildA />
    <ChildB />
  </>
)
```

### 传递 key

React.Fragment 只能接受 key 作为属性，其他属性无效

```jsx
function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}
```

## DOM 元素

完整内容见官网[DOM Elements](https://reactjs.org/docs/dom-elements.html)

### className

用`className`代表原生 HTML 属性`class`

```js
<ul className="nav"></ul>
```

### dangerouslySetInnerHTML

`dangerouslySetInnerHTML = {__html: 内容}`: 等于`v-html`，内容不会被转义

```js
function createMarkup() {
  return { __html: 'First &middot; Second' }
}
function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />
}
```

### htmlFor

用`htmlFor`代表原生 HTML 属性`for`

```js
<label htmlFor></label>
```

### style

style 内的 css 属性，在 JSX 中都以驼峰式的命名来书写（首字母小写），对应于 JS 的 API

```js
const logo = require(`../../assets/img/header.png`)
return (
  <div
    className="banner-wrapper"
    style={{ backgroundImage: 'url(' + backgroudUrl + ')' }}
  ></div>
)
```

注意的是对于 css 前缀（比如`webkit`等）也要自己加进去

```js
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
}

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>
}
```

### 注释

```js
return `{/*注释的内容*/}`
```

```js
return {
  //换行注释。换行是为了避免`}`成为注释的一部分
}
```

## 关于 falsy

`null`, `undefined`, `true`, `false`放在标签内，都不会被渲染  
但数字`0`会

```js
//以下内容结果都一样
<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

### 数字 0

数字 0 会被渲染，如果做条件渲染，确保条件一定是布尔值

```jsx
{
  list.length > 0 && <input />
}
```

## React 17
[Introducing the New JSX Transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)  
[React18 源码解析之fiber等几个重要的数据结构](https://www.xiabingbao.com/post/react/react-element-jsx-rfl0yh.html)  
``` js
import React from 'react';

function App() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div onClick={handleClick}>
      <p>hello world</p>
    </div>
  );
}
```
React 16 需要引入 React，本质上是用 createElement 转成 js  
children 做为第三个参数传入  
``` js
import React from 'react';

function App() {
  return React.createElement('div', { onClick: handleClick }, React.createElement('p', null, 'hello world'));
}
```
17 后不再需要手动引入，内部实现为
``` js
// Inserted by a compiler (don't import it yourself!)
import {jsx as _jsx} from 'react/jsx-runtime';

function App() {
  return jsx('div', {
    children: jsx('p', {
      children: [
        jsx('span', {
          className: 'dd',
          children: 'hello world',
        }),
        _jsx('span', {
          children: '123',
        }),
      ],
    }),
  });
}
```
children 变成了第二个参数  

## createElement
[ReactElement.js](https://github.com/facebook/react/blob/main/packages/react/src/ReactElement.js#L151)  
React 节点会有一个 `$$typeof`，值是一个 Symbol（`Symbol.for('react.element')`），用来标记这是一个 React Element  
目的是为了防止 XSS 攻击：React 会对大部分内容做转义，因为 JSON 不支持 Symbol，当判断 `$$typeof` 不是  Symbol 时，对这个节点不作处理  

``` js
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 */
function ReactElement(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };

  // 省略其他内容

  return element;
}
```