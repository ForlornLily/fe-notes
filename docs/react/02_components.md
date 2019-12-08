# 组件

官网[Components and Props](https://reactjs.org/docs/components-and-props.html)  
分为函数组件和类组件。  
组件名必须首字母大写。React 会把小写字母认为是原生的 HTML 标签

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
//或者
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

## props

父组件以属性的形式给子组件传值/函数，子组件通过`props`接收/调用

比如一个 TodoList。用类组件需要注意`this`的指向

```js
//父组件中
import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      list: []
    }
    //this的绑定都放在constructor处理，性能较好
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return <ul>{this.getTodoItem()}</ul>
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList
```

```js
//子组件中
import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return <div onClick={this.handleClick}>{this.props.content}</div>
  }

  handleClick() {
    const { deleteItem, index } = this.props
    //this.props.deleteIem = this.handleItemDelete
    //此时的this执行的是父组件，所以传递的时候用bind把this转为父组件的this
    deleteItem(index)
  }
}
```

## 第三方 PropTypes

[Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)  
类型校验工具，API 见官网[facebook/prop-types](https://github.com/facebook/prop-types)

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    // 省略
  }
}
//报警告，不影响代码后续运行
TodoItem.propTypes = {
  content: PropTypes.string.isRequired, //数据类型是`string`且必输
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
//默认值，对应vue的`default`
TodoItem.defaultProps = {
  content: 'hello' // 父组件没有传值时默认值是`hello`
}
```

## 类组件

官网[React.Component](https://reactjs.org/docs/react-component.html)  
定义类组件必须要调用`render()`方法

### 生命周期

[生命周期图示](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)  
完整图示：
![](../images/lifecycle.jpg)

常用的生命周期
