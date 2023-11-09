# 版本差异

## Promise 内的状态执行

- [New Feature: Automatic Batching](https://react.dev/blog/2022/03/29/react-v18#new-feature-automatic-batching)
- [Automatic batching for fewer renders in React 18](https://github.com/reactwg/react-18/discussions/21)

```tsx
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [flag, setBoolean] = useState<boolean>(false);
  console.log("app render", React.version, count, flag);

  function handlePromise() {
    Promise.resolve().then(() => {
      console.log("before");
      setCount((prev) => prev + 1);
      setBoolean((prev) => !prev);
      console.log("after");
    });
  }

  return (
    <>
      <button onClick={() => handlePromise()}>click</button>
    </>
  );
}
```

React 16 同步输出顺序

```
before
app render 16.14.0 1 false
app render 16.14.0 1 false
app render 16.14.0 1 true
app render 16.14.0 1 true
after
```

React 18 异步

```
before
after
app render 18.2.0 1 true
app render 18.2.0 1 true
```

Class 组件也会有影响

```jsx
handleClick = () => {
  setTimeout(() => {
    this.setState(({ count }) => ({ count: count + 1 }));

    // { count: 1, flag: false }
    console.log(this.state);

    this.setState(({ flag }) => ({ flag: !flag }));
  });
};
```

```jsx
// 18 下拿到的仍然是旧值
handleClick = () => {
  setTimeout(() => {
    this.setState(({ count }) => ({ count: count + 1 }));

    // { count: 0, flag: false }
    console.log(this.state);

    this.setState(({ flag }) => ({ flag: !flag }));
  });
};
```

解决方式是 [flushSync](./09_dom.md#flushSync)

```jsx
handleClick = () => {
  setTimeout(() => {
    ReactDOM.flushSync(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    });

    // { count: 1, flag: false }
    console.log(this.state);

    this.setState(({ flag }) => ({ flag: !flag }));
  });
};
```
