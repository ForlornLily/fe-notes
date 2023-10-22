# state

官网[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)  
React 在`state`内定义数据。对应于 Vue 的`data`属性

- 函数组件没有实例，没有生命周期函数，只有类组件才有，要使用`state`需要它转化为 class
- 不要直接修改 state 的值，通过 setState 方法去改变
- React 16.8 之后可以直接在函数组件中使用 Hooks，Hooks 可以在不编写 class 使用 state 以及其他的 React 特性

## 处理表单

官网[Forms](https://reactjs.org/docs/forms.html)  
以简单的输入框查询为例，通过`state`来控制输入框的值  
React 的数据是单向的，在 Vue 中通过`v-model`可以快速实现双向绑定，React 需要改变 state 的值  
并且`this`的指向因为函数的调用，需要手动指定

- 本身的组件是个类
- input 的 value 属性绑定 state 的`value`
- `setState`改变 state 的值
- this.handleChange 作为普通函数调用，严格模式下`this`是`undefined`，要手动绑定`this`为组件 NameForm

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

### 非受控组件和 defaultValue

非受控组件：表单数据通过 DOM（`ref`）直接处理，最常见的就是上传  
如果是受控组件，表单通过`value`属性来进行数据处理。  
如果希望组件初始化有值，但是后续更新不能改变，那么可以用`defaultValue`  
如果是`radio`和`checkbox`，对应的属性是`defaultChecked`

```js
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="hello"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

value 是 `undefined` 将不受控，重置为 defaultValue

```ts
const [value, setValue] = useState<string| undefined>(undefined)

<form>
  <input defaultValue={"1"} value={value} />
  <button type='reset'>reset</button>
</form>
```

### hooks

用 hooks 可以省掉一些麻烦  
涉及到`useState`

- 本身的组件只是一个函数
- input 的 value 属性绑定 state 的`name`
- `setName`改变输入框的值
- handleSubmit 只是一个函数表达式，直接调用即可，不需要`this`

```js
import React, { useState } from "react"

export function NameForm(props) {
  const [name, setName] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault()
    alert(`Submitting Name ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
```

## setState

官网[setState()](https://reactjs.org/docs/react-component.html#setstate)  
setState 第一个值可以是对象，也可以 return 一个方法；使用方法的时候是 React 内部异步更新的。推荐用方法  
第二个值返回的是 state 更新成功之后的回调

```js
const value = e.target.value
this.setState({ inputValue: value })

//等价于
const value = e.target.value //事先用变量存储异步要用到的内容
this.setState(() => {
  return { inputValue: value }
})

//方法本身会提供state和props，第二个值为回调
this.setState(
  (state, props) => {
    return { counter: state.counter + props.step }
  },
  () => {
    //callback
  }
)
```
