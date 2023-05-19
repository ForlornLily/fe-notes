# 版本差异

## Promise 内的状态执行

```tsx
import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [flag, setBoolean] = useState<boolean>(false)
  console.log('app render', React.version, count, flag)

  function handlePromise() {
    Promise.resolve().then(() => {
      console.log('before')
      setCount((prev) => prev + 1)
      setBoolean((prev) => !prev)
      console.log('after')
    })
  }

  return (
    <>
      <button onClick={() => handlePromise()}>click</button>
    </>
  )
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
