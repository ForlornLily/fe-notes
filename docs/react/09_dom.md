# dom

## ref

尽量少用，只能不能用 props 处理的行为才用 ref（比如聚焦，滚动到某个元素）  
[React.createRef](https://reactjs.org/docs/react-api.html#reactcreateref)  
对应 Vue 的`ref`属性，即指向 DOM 元素的引用  
使用`createRef`来创建，或者 ref 直接使用一个函数  
比如初始化后输入框聚焦, 注意 createRef 的时候的`current`  
但更广义的 `ref` 应该是一个容器，和 DOM 挂钩只是很少的一部分，参考[React Hooks 的体系设计之三 - 什么是 ref](https://zhuanlan.zhihu.com/p/109742536)  
ref 和 `key` 一样不是 prop 属性，React 对其做了特殊处理，不会被传递到子组件。  
如果想要转发到内部，可以用 [forwardRef](#forwardref)

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        {/* createRef */}
        <input type="text" ref={this.inputRef} />
        {/* 使用函数 */}
        <input ref={(e) => (this.input = e)} onChange={this.handleChange} />
      </div>
    );
  }

  componentDidMount() {
    //注意current
    this.inputRef.current.focus();
  }

  handleChange() {
    //直接指向，不需要current
    console.log(this.input);
  }
}
```

## forwardRef

把本身的 ref 传递给子组件

```js
const CustomInput = React.forwardRef((props, ref) => {
  //把 CustomInput 的 ref 传递给子组件
  return <input ref={ref} />;
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <CustomInput type="text" ref={this.inputRef} />
      </div>
    );
  }
  componentDidMount() {
    //注意current
    this.inputRef.current.focus();
  }
}
```

## useRef

hooks 用法。返回的是个对象，可以用`current`存储任意变量

```js
const refContainer = useRef(initialValue);
```

```js
const inputEl = useRef(null);
const onButtonClick = () => {
  // `current` 指向已挂载到 DOM 上的文本输入元素
  inputEl.current.focus();
};
```

- 不要反复创建

```jsx
// bad
const playerRef = useRef(new VideoPlayer());

// better
const playerRef = useRef(null);
if (playerRef.current === null) {
  playerRef.current = new VideoPlayer();
}
```

- 不要在 render 时进行读写，可以写在 `useEffect` 或者事件里边

```jsx
function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
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
  }), []);
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

`<FancyInput ref={inputRef} />` 的父组件可以调用`inputRef.current.focus()`

## unmountComponentAtNode

卸载组件，废弃，用 [createRoot](./11_client.md#createRoot)

```js
ReactDOM.unmountComponentAtNode(container);
```

## Portals

官网[Portals](https://react.dev/reference/react-dom/createPortal)  
把组件挂载到指定的 DOM 上，常见的场景是下拉面板和弹框

```js
ReactDOM.createPortal(
  child, //元素
  container //指定的DOM
);
```

### demo

```html
<div id="root"></div>
<div id="modal-root"></div>
```

```jsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

// html 上有一个根节点 "modal-root"
const modalRoot = document.getElementById("modal-root");

function Modal(props) {
  const { children } = props;
  const ref = useRef(document.createElement("div"));
  useEffect(() => {
    modalRoot.appendChild(ref.current);
    return () => {
      modalRoot.removeChild(ref.current);
    };
  }, []);
  return ReactDOM.createPortal(children, ref.current);
}

function Parent() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleClick}>
      <p>Number of clicks: {clicks}</p>
      <Modal>
        <Child />
      </Modal>
    </div>
  );
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

export default Parent;
```

## flushSync

尽量不要使用，存在性能损失  
立即更新 DOM  
一般用在非 React 实现的第三方库，需要实时获取 DOM 处理

```jsx
import { flushSync } from "react-dom";

flushSync(() => {
  setSomething(123); // 立即调用这个函数并同步刷新 dom
});
```
