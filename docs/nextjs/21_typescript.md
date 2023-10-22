# TypeScript

## 安装

```bash
yarn add --dev typescript @types/react @types/react-dom @types/node
```

Next 会在根目录自动创建 next-env.d.ts，不可以删除  
根目录下新建`tsconfig.json`作为 TS 的配置文件，next 通常会自动写入一些默认项

## 函数组件

在 TS 内使用函数组件，需要把`NextPage`作为函数组件的类型

```js
import React from "react"
import { NextPage } from "next"

const HomePage: NextPage = () => {
  return (
    <div className="wrapper">
      <img src="/test.jpg" alt="test" />
    </div>
  )
}
export default HomePage
```

::: warning
设置为 `NextPage` 类型组件后，无法使用 DOM 相关的 API，因为服务端是没有 DOM 的  
如果需要 DOM 操作，使用常规的 React 类型，比如 `FunctionComponent`
:::

## 类组件

在 TS 内使用函数组件，需要把`NextPageContext`作为类组件的类型

```js
import React from "react"
import { NextPageContext } from "next"

interface Props {
  userAgent?: string;
}

export default class Page extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent
    return { userAgent }
  }

  render() {
    const { userAgent } = this.props
    return <main>Your user agent: {userAgent}</main>
  }
}
```
