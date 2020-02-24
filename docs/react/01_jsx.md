# JSX

官网[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)  
React 的专用语法，一定要引入 React 才能编译  
JSX 通过`React.createElement`生成 JS 对象，生成虚拟 DOM，虚拟 DOM 生成真实 DOM

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
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
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

## ref

[React.createRef](https://reactjs.org/docs/react-api.html#reactcreateref)  
对应 Vue 的`ref`属性，即指向 DOM 元素的引用  
使用`createRef`来创建，或者 ref 直接使用一个函数  
比如初始化后输入框聚焦, 注意 createRef 的时候的`current`

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div>
        {/* createRef */}
        <input type="text" ref={this.inputRef} />
        {/* 使用函数 */}
        <input ref={e => (this.input = e)} onChange={this.handleChange} />
      </div>
    )
  }

  componentDidMount() {
    //注意current
    this.inputRef.current.focus()
  }

  handleChange() {
    //直接指向，不需要current
    console.log(this.input)
  }
}
```

## forwardRef

把本身的 ref 传递给子组件

```js
const CustomInput = React.forwardRef((props, ref) => {
  //把CustomInput的ref传递给子组件
  return <input ref={ref} />
})
class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  render() {
    return (
      <div>
        <CustomInput type="text" ref={this.inputRef} />
      </div>
    )
  }
  componentDidMount() {
    //注意current
    this.inputRef.current.focus()
  }
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
