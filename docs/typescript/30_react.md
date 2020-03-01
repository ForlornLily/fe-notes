# React

介绍一些 React 相关的 TS 类型

## SFC

Stateless Functional Components: 即无状态组件
::: warning
由于`React Hooks`的出现，函数组件不再是无状态
该属性已经废弃，改用`FunctionComponent`
:::

## FunctionComponent

以`function`形式创建的组件

```ts
import React, { FunctionComponent } from 'react'
interface TestProps {
  title?: string
}
const Test: FunctionComponent<TestProps> = props => {
  const { title } = props
  return <h1>{title}</h1>
}
export default Test
```

## 事件类型

常见的有 MouseEvent, ChangeEvent  
可以看 VS Code 的插件提示

```ts
import React, { FunctionComponent } from 'react'
interface TestProps {
  title?: string
}

type MouseEvent = React.MouseEvent<HTMLInputElement>
type ChangeEvent = React.ChangeEvent<HTMLInputElement>

const Test: FunctionComponent<TestProps> = props => {
  const { title } = props
  const handleClick: (event: MouseEvent) => void = (e: MouseEvent) => {
    console.log('click')
  }
  const handleChange: (event: ChangeEvent) => void = (e: ChangeEvent) => {
    console.log('change')
  }
  return <input onClick={handleClick} onChange={handleChange} />
}
export default Test
```
