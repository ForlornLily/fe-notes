# 内置的工具类型

提供了一些快捷方式
官网[Utility Types](http://www.typescriptlang.org/docs/handbook/utility-types.html)  
参考

- [TS 一些工具泛型的使用及其实现](https://zhuanlan.zhihu.com/p/40311981)

## Partial<T>

传入的类型属性全都是可选的，等价于

```ts
type Partial<T> = { [P in keyof T]?: T[P] }
```

```ts
interface Todo {
  title: string
  description: string
}
function updateTodo(fieldsToUpdate: Partial<Todo>) {
  return { ...fieldsToUpdate }
}
const todo2 = updateTodo({
  title: 'hello' //description可以不传
})
```
