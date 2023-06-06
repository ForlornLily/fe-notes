# Hook

- 只能用在 React 的函数组件或者自定义的 hook 内
- 必须是最外层，不能放在判断（if）、循环等等的内部
- 本质上是个函数
- 依赖的比较都是 Object.is  

## state

`useState`，对应`this.state`和`setState`方法  
但是它不会把新的 state 和旧的 state 进行合并  
也就是变量是个对象的话，需要全部重新赋值  
useState()只有一个参数，值是初始值

### 复杂计算

如果初始化的值需要进行复杂计算，可以传入一个函数，返回计算后的值

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

## effect
只能用在客户端渲染。  
`useEffect`，适用于带有副作用的场景，比如 ajax、延时等操作  
理解为`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`的结合体  
也就是初始化和组件每次的更新，都会进 useEffect  
当 effect 返回一个函数，React 将会在执行清除操作时调用它，
即相当于在 componentWillUnmount 调用`return`里的内容

```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
  }
}, [props.friend.id]) // 仅在 props.friend.id 发生变化时，重新订阅
```

如果只想初始化调一次，而不是每次更新都调，传入空数组`[]`即可  
::: warning
注意：effect 的依赖默认值需要是同一个引用  
例

```js
// 死循环
function Child(props) {
  const {
    data = [], // 对象不相等，每次生成的 `[]` 都不等，导致 useEffect 依赖每次都会更新
  } = props
  const [map, setMap] = useState({})
  useEffect(() => {
    let tmp_map = {}
    data.forEach((item) => {
      tmp_map[1] = 'hello'
    })
    setMap(tmp_map)
  }, [data])
  console.log(111)
  return <div className="modal">11</div>
}
```

```js
// 正常
const empty_arr = []
function Child(props) {
  const { data = empty_arr } = props
  const [map, setMap] = useState({})
  useEffect(() => {
    let tmp_map = {}
    data.forEach((item) => {
      tmp_map[1] = 'hello'
    })
    setMap(tmp_map)
  }, [data])
  console.log(111)
  return <div className="modal">11</div>
}
```

:::

### useLayoutEffect

使用方式和`useEffect`一致，但是会阻塞浏览器渲染  
优先使用`useEffect`  
useLayoutEffect 和原来 componentDidMount&componentDidUpdate 一致，在 react 完成 DOM 更新后马上同步调用的代码，会阻塞页面渲染。  
而 useEffect 是会在整个页面渲染完才会调用的代码。

### useInsertionEffect  
使用方式和`useEffect`一致。  
一般用在动态插入标签上，比如 CSS-in-JS。  
不要在  useInsertionEffect 内更新状态，此时 ref 也拿不到。  
``` js
import { useInsertionEffect } from 'react';

// Inside your CSS-in-JS library
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inject <style> tags here ...
  });
  return rule;
}
```
## Context

`useContext`，例子见[Context](./05_Context.md)  
useContext 的参数必须是`context`对象本身

## reducer

`useReducer`适合 state 比较复杂，或者 state 依赖之前的旧值

```js
//第三个值也是一个函数
//初始化的值是`init(initialArg)`
//不传init函数，初始值是`initialArg`
const [state, dispatch] = useReducer(reducer, initialArg, init)
```

```js
const initialState = { count: 0 }
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

## useCallback

`useCallback(fn, deps)`等价于`useMemo(() => fn, deps)`
只有依赖数组里面的`[a, b]`改变了，memoizedCallback 才会更新  
适合传递给子组件的方法

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

## useMemo

如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值  
避免使用具有副作用的函数，副作用的函数都应该在`effect`的 hook 里面

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

## useRef

见[useRef](./09_dom.md#useRef)

## useId 

生成 string 类型的唯一值，每次 render 生成的值都一样。但不应该当做 key。  
[好处](https://react.dev/reference/react/useId#why-is-useid-better-than-an-incrementing-counter)是比起自己维护一个自增的 id，服务端渲染能保证一致性   

## 自定义 hook

本质上就是一个函数，封装了 React 自带的 hooks  
必须用`useSomething`进行命名，否则 React 会无法识别

## 渲染保证数量一致

以下是错误示范：在 return 之后才声明 hook。

```js
if (!list.length) {
  return ''
}
const [page_num, setNum] = useState(1)
```
