# Context

类似更大范围的 props，作为一个全局的变量，可以直接获取。  
比如组件 A 包含 B，B 包含 C，C 包含 D。D 需要用到 A 的一个属性，那么就需要 A 通过`props`传给 B，B 通过`props`传给 C，C 传给 D  
嵌套深的组件会很繁琐，在不用其他第三方状态管理的情况下，context 是一个选择

```js
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
const GlobalData = React.createContext('hello')

class App extends React.Component {
  render() {
    return (
      // 通过value修改GlobalData的值
      <GlobalData.Provider value="dark">
        <Toolbar />
        <Button />
      </GlobalData.Provider>
    )
  }
}
//hooks用法
function Toolbar(props) {
  const value = useContext(GlobalData)
  return (
    <div>
      <button>{value}</button>
    </div>
  )
}
//class组件用法
class Button extends React.Component {
  /* 
    或者使用实验性质的static写法（必须加上static 关键字）
    等价于Button.contextType = GlobalData;
    static contextType = GlobalData 
  */
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.context)
    return <button></button>
  }
}
//设置`contextType`是GlobalData，必须叫contextType
Button.contextType = GlobalData
ReactDOM.render(<App />, document.getElementById('root'))
```

## createContext

创建`Context`对象: `React.createContext(defaultValue);`  
`defaultValue`可以是任意类型的值，只有不被包裹在`Provider`里面才生效

```js
render() {
  return (
    <>
      <GlobalData.Provider>
        {/* 值是{} */}
        <Toolbar />
      </GlobalData.Provider>

      <GlobalData.Provider value="dark">
        {/* 值是dark */}
        <Toolbar />
      </GlobalData.Provider>

      {/* 值是hello */}
      <Toolbar />
    </>
  );
}
```

## Provider

Provider 的 value 值发生变化时，它内部的用到 React.createContext 生成对象的组件都会重新渲染。  
最大的区别就是，如果内部组件的`shouldComponentUpdate`钩子，写死`return false`  
正常来说修改父组件的值，组件本身不会重新 render；但如果用到了 Provider，就仍然会重新渲染

```js
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'dark'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState({
      value: '1'
    })
  }
  render() {
    return (
      <>
        <GlobalData.Provider value={this.state.value}>
          <Toolbar />
          <Button />
        </GlobalData.Provider>
        <button onClick={this.handleClick}>改变value</button>
      </>
    )
  }
}
class Toolbar extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('1') //不会重新渲染
    return <button>111</button>
  }
}
class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('2') //仍然重新渲染
    return <button>{this.context}</button>
  }
}
Button.contextType = GlobalData
```

## Class.contextType

把`Context`对象赋值给类组件的`contextType`属性  
类组件就可以使用`this.context`来获取全局变量的值

## Consumer

让函数组件也可以使用`Context`对象

```js
const GlobalData = React.createContext('hello')

class App extends React.Component {
  render() {
    return (
      <GlobalData.Provider value="dark">
        <SimpleDiv />
      </GlobalData.Provider>
    )
  }
}
//函数组件
function SimpleDiv() {
  return (
    <GlobalData.Consumer>{value => ConsumerDiv(value)}</GlobalData.Consumer>
  )
}
function ConsumerDiv(value) {
  return <p>{value}</p>
}
```

## displayName

用于 React DevTools 进行调试

```js
const MyContext = React.createContext(/* some value */)
MyContext.displayName = 'MyDisplayName'
//<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
```

## 子组件修改

把修改的方法也作为`Context`的一部分传入
以 Hooks 为例

```js
const GlobalData = React.createContext('hello')

function App() {
  const handleValue = new_value => {
    setData({
      ...data,
      value: new_value
    })
  }
  const [data, setData] = useState({
    value: 'dark',
    changeValue: handleValue
  })

  return (
    // 通过value修改GlobalData的值
    <GlobalData.Provider value={data}>
      <Toolbar />
    </GlobalData.Provider>
  )
}
//hooks用法
function Toolbar(props) {
  const { value, changeValue } = useContext(GlobalData)
  return (
    <div>
      <button onClick={() => changeValue('white')}>{value}</button>
    </div>
  )
}
```
