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
  title: "hello", //description可以不传
})
```

## Required<T>

和`Partial<T>`相反，所有都是必须的

```ts
interface Todo {
  title: string
  description?: string
}
function updateTodo(fieldsToUpdate: Required<Todo>) {
  return { ...fieldsToUpdate }
}
//属性必须都传
const todo2 = updateTodo({
  title: "hello",
  description: "world",
})
```

## Readonly<T>

只读，不允许再次赋值
等价于

```ts
type Readonly<T> = { readonly [P in keyof T]: T[P] }
```

```ts
interface servant {
  name: string
}
const saber: Readonly<servant> = {
  name: "Saber",
}
```

## Record<K,T>

将 K 中所有的属性的值转化为 T 类型

```ts
interface PageInfo {
  title: string
}

type Page = "home" | "about" | "contact"

const x: Record<Page, PageInfo> = {
  about: { title: "1" },
  contact: { title: "2" },
  home: { title: "3" },
}
```

## Pick<T,K>

从类型 T 中挑选部分属性 K 来构造类型

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, "title" | "completed">
//title和completed都要有
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}
```

## Omit<T,K>

从类型 T 中获取所有属性，然后从中剔除 K 属性后构造一个类型

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, "description">
//title和completed都要有
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
}
```

## Exclude<T,U>

从 T 中排除 U

```ts
type T0 = Exclude<"a" | "b" | "c", "a"> // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b"> // "c"
type T = Exclude<1 | 2, 1 | 3> // 2
```

## Extract<T,U>

从 T 中提取出 U

## NonNullable<T>

从类型 T 中剔除 null 和 undefined，然后构造一个类型

```ts
type T1 = NonNullable<string[] | null | undefined> // string[]
```

## ReturnType<T>

`T`是一个函数类型，把 T 的返回类型作为类型

```ts
type T0 = ReturnType<() => string> // string
```

```ts
//ReturnType等价于
type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any
```

## 嵌套

工具类型无法处理嵌套。比如`Readonly`

```ts
interface Company {
  id: number
  department: string
}
interface Member {
  id: number
  name: string
  company: Company
}
type member = Readonly<Member>

const data: member = {
  id: 1,
  name: "hello",
  company: {
    id: 1,
    department: "hello",
  },
}
data.company.id = 2 //不报错，无法解析嵌套
data.company = 2 //报错，因为只读
```
