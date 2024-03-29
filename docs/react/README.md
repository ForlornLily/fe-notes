# 概要

相同的条件（props/state/context）总是返回同样的 JSX

参考

- [React16.4 快速上手](https://www.imooc.com/learn/1023)
- [官网](https://react.dev/)
- [React Hooks 详解](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)

特性

- 声明式开发：区别于 jQuery 的命令式开发
- 单向数据流：避免父组件包含多个子组件的时候，子组件改变公用值影响到其他兄弟组件
- 组件化
- 视图层框架：对于复杂的非父子组件数据管理，需要借助专门的数据层框架（比如 redux）来简化操作
- 函数式编程

## TODO

- [React Fiber 是什么](https://zhuanlan.zhihu.com/p/26027085)
- [为什么要 Fiber](https://zhuanlan.zhihu.com/p/493232443)
- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.cn/post/6844903975112671239)
- 并发：能执行多个任务，不一定同时
- 并行：同时处理多个任务
