# Hook

- 只能用在 React 的函数组件或者自定义的 hook 内
- 必须是最外层，不能放在判断（if）、循环等等的内部
- 本质上是个函数

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

### useLayoutEffect

使用方式和`useEffect`一致，但是会阻塞浏览器渲染  
优先使用`useEffect`  
useLayoutEffect 和原来 componentDidMount&componentDidUpdate 一致，在 react 完成 DOM 更新后马上同步调用的代码，会阻塞页面渲染。  
而 useEffect 是会在整个页面渲染完才会调用的代码。

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

返回的是个对象，可以用`current`存储任意变量

```js
const refContainer = useRef(initialValue)
```

```js
const inputEl = useRef(null)
const onButtonClick = () => {
  // `current` 指向已挂载到 DOM 上的文本输入元素
  inputEl.current.focus()
}
```

## useImperativeHandle

useImperativeHandle 应当与 forwardRef 一起用

```js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

`<FancyInput ref={inputRef} />` 的父组件可以调用`inputRef.current.focus()`

## 自定义 hook

本质上就是一个函数，封装了 React 自带的 hooks  
必须用`useSomething`进行命名，否则 React 会无法识别
