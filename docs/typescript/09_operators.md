# 关键字和操作符

## in

和 JS 的`in`一致

## is

判断一个变量属于某个接口|类型  
通常用于依赖布尔值的判断来缩小参数的类型范围

```ts
//is没有作用
function isString(str: number | string): str is string {
  return str.length //报错，不是交集的属性
}
```

```ts
function isString(str: number | string): str is string {
  return typeof str === "string"
}
function myMethod(param: any) {
  if (isString(param)) {
    //不报错
    console.log(param.length)
  }
}
```

## keyof

相当于 JS 的`for...in`

```ts
interface Arr {
  hello: string
  name: string
}
type index = keyof Arr //"hello" | "name"
```

## extends

[Conditional Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html)

```ts
T extends U ? X : Y
```

如果 T 能被赋值给 U，那么结果是 X，否则为 Y

```ts
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object"
type test = TypeName<"hello"> // "string"
type T0 = TypeName<string | boolean> // "string" | "boolean"
//等价于
type T1 = TypeName<string> | TypeName<boolean>
```

## infer

表示在 `extends` 条件语句中待推断的类型变量
参考[深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/infer.html)

```ts
//infer P 表示待推断的函数参数
type ParamType<T> = T extends (param: infer P) => any ? P : T

interface User {
  name: string
  age: number
}
type Func = (user: User) => any

type Param = ParamType<Func> // User
type AA = ParamType<string> // string
```

例子: turple 转 union, `[string, number] -> string | number`

```ts
type TTuple = [string, number]
type TArray = Array<string | number>

type Res = TTuple extends TArray ? true : false // true
type ResO = TArray extends TTuple ? true : false // false
```

```ts
type ElementOf<T> = T extends Array<infer P> ? P : never

type TTuple = [string, number]
type ToUnion = ElementOf<TTuple>
```
