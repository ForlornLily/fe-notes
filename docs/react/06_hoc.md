# 高阶组件

HOC(Higher-Order Components): 本质上是个函数，函数内部返回的是一个组件  
适用场景：  
多个组件，大部分逻辑一样，可以封装成一个 HOC，传入组件本身，以及其不同的部分。

HOC 是一个纯函数，不会有副作用。不应该修改原本的组件，也不会有特殊的业务逻辑

```js
HOC
function logProps(WrappedComponent) {
  //返回新组件
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props)
      console.log('Next props: ', nextProps)
    }
    render() {
      //渲染传入的组件
      return <WrappedComponent {...this.props} />
    }
  }
}
//调用
const EnhancedComponent = logProps(InputComponent)
```

常见有 Redux，例

```js
// React Redux 的 `connect` 函数
const ConnectedComment = connect(
  commentSelector,
  commentActions
)(CommentList)
//等价于
// connect 是一个函数，它的返回值为另外一个函数。
const enhance = connect(
  commentListSelector,
  commentListActions
)
// 返回值为 HOC，它会返回已经连接 Redux store 的组件
const ConnectedComment = enhance(CommentList)
```

## 注意事项

1. 不要在 render 内调用 HOC 函数

```js
render() {
  // 每一次的EnhancedComponent都是新的，也就是完全卸载旧的EnhancedComponent
  // 会导致旧的EnhancedComponent组件所有状态全部丢失，性能也差
  const EnhancedComponent = enhance(MyComponent);
  return <EnhancedComponent />;
}
```

2. refs 无法传递，解决方案是通过[forwardRef](./01_jsx.md#forwardref)

## React.memo

高阶组件。只适用于函数组件，和 PureComponent 功能一致  
如果传入第二个参数，根据第二个参数的返回值来确定是否更新。返回 true 不更新  
`React.memo`只比较 props

```js
import React, { Component, memo } from 'react'
import ReactDOM from 'react-dom'
const CustomInput = memo(function CustomInput(props) {
  console.log('111')
  return <input defaultValue={props.value} />
}, areEqual)
function areEqual(prevProps, nextProps) {
  //返回true后不会更新CustomInput
  return true
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '1',
      test: '111'
    }
  }
  changeValue = () => {
    this.setState({
      value: '2'
    })
  }
  render() {
    return (
      <div>
        <CustomInput type="text" value={this.state.value} />
        <button onClick={() => this.changeValue()}></button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
```
