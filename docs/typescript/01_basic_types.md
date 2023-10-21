# 基本类型

官网[Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)  
注意 TS 的类型都是小写，比如`string`，而不是`String`。`String`是 JS 的内置对象

## boolean

## number

支持 ES6 的所有进制（比如二进制、十六进制）

## bigint

```ts
let big: bigint = 100n
```

::: warning
只有设置 target 是 `ES2020` 以上才支持  
:::

## string

支持模板字符串

## Array

两种写法

1. `类型[]`:

```ts
let list: number[] = [1, 2, 3]
```

2. 使用泛型:`Array<Type>`

```ts
let list: Array<number> = [1, 2, 3]
```

### 只读

`ReadonlyArray<Type>`

```ts
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // 报错，不允许修改
```

## Tuple

元祖：表示混合类型的数组

```ts
let x: [string, number] = ["hello", 1] //必须一一对应
let mixArr: [number, string] = ["1", 2] //报错，第一项匹配应该是number
let mixArr: [number, string] = [1, "2", 3] //报错，数字3超出了范围
```

- 和`类型+[]`有些相似，主要区别在于[联合类型](./06_advanced_types.md#联合类型)的时候:

```ts
let arr: (number | string)[] = [1, "@"]
console.log(arr[1].length) //报错，length不是交集属性
let mixArr: [number, string] = [1, "2"]
console.log(mixArr[1].length) //不报错
```

- 利用索引去一项项赋值，不报错。但数据类型需要一一对应

```ts
//不报错
let mixArr: [number, string]
for (let i = 0; i < mixArr.length; i++) {
  if (i === 0) {
    mixArr[i] = 1
  } else {
    mixArr[i] = "hello"
  }
}
```

- 调用数组方法增加项的时候，项的类型是联合类型

```ts
let mixArr: [number, string] = [1, "2"]
mixArr.push("hi") //不报错，可以加
console.log(mixArr[2]) //虽然加上了，但是不允许访问，因为初始化的长度只有2
mixArr.push(true) //报错，不是number/string
```

可以理解为

```ts
interface Tuple extends Array<string | number> {
  0: string
  1: number
  length: 2
}
```

## enum

枚举: 默认访问时，值是索引，并从 0 开始，也可以手动赋值成其他值
只能用索引访问枚举类型本身

```ts
enum Servant {
  "Saber" = 4,
  "Lancer",
  "Archer" = "hello",
}
console.log(Servant.Saber) //4
console.log(Servant.Lancer) //5
console.log(Servant.Archer) //"hello"

console.log(Servant[4]) //"Saber"
console.log(Servant[6]) //undefined，因为`Archer`被重新赋值
console.log(Servant["hello"]) //报错，只能用数字访问枚举

//编译后的JS
var Servant
;(function (Servant) {
  Servant[(Servant["Saber"] = 4)] = "Saber"
  Servant[(Servant["Lancer"] = 5)] = "Lancer"
  Servant["Archer"] = "hello"
})(Servant || (Servant = {}))
```

### 使用 const

用`const`关键词，会影响编译结果，闭包和映射关系会消失

```ts
const enum Servant {
  "Saber" = 4,
  "Lancer",
  "Archer" = "hello",
}
console.log(Servant.Saber) //4
console.log(Servant.Lancer) //5
console.log(Servant.Archer) //"hello"

//编译后的JS
;("use strict")
console.log(4 /* Saber */) //4
console.log(5 /* Lancer */) //5
console.log("hello" /* Archer */) //"hello"
```

## any

## unknown

[New unknown top type](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)  
和`any`类似，但是类型为 any 的变量可以执行函数、取属性，unknown 不可以

```ts
let not_concerned: unknown
let any_type: any
any_type.hello() //TS不报错，尽管JS执行会报错
not_concerned.hello() // TS报错
```

## void

通常用在函数的返回值。如果函数没有返回值，用 void

```ts
function myFunction(): void {
  console.log("hello, world")
}
```

## null 和 undefined

- 关闭 `strictNullChecks` 情况下 `null` 可以赋值给其他类型

```ts
/** 关闭 strictNullChecks 情况下 */
let type: null
type = "hello" //报错，不能赋值给null
let num: number = 1
num = null //null可以赋值给其他类型
```

- 否则只能赋值给 `unknown` 或者 `any`

```ts
/** 默认情况，即开启 strictNullChecks */
let unknownNum: unknown = 1
unknownNum = null // 不报错
```

- undefined 可以赋值给`void`，但是 void 不可以赋值给 undefined

```ts
/** 返回undefined，但可以赋值给 void */
function myFunction(): void {
  console.log("hello, world")
  return
}
```

### 叹号后缀

声明变量不是`null`和`undefined`

```ts
interface Entity {
  name: string
}
function processEntity(e?: Entity) {
  let s = e!.name // 因为e可选。用感叹号排除e为null和undefined的情况
  let error = e.name //TS报错，对象可能不存在
}
```

## never

从不存在的值类型，属于 TypeScript 的底层

`void` 表示函数没有返回值  
`never` 表示函数不可能有返回值，最常见的是报错；或者函数内部是个死循环  
常见场景是枚举所有可能类型，如果漏了就可以进行提示  
参考[知乎](https://www.zhihu.com/question/354601204)

```ts
type Shape = "square" | "rectangle" | "circle" | "triangle"
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x)
}
function area(s: Shape) {
  switch (s) {
    case "square":
      return `1`
    case "rectangle":
      return 2
    case "circle":
      return 3
    default:
      return assertNever(s) // error here if there are missing cases
  }
}
```

## object

不是 JS 的基本类型对应的类型，都属于`object`，比如`enum`
即除了这些之外的：`number`, `string`, `boolean`,`null`, `undefined`, `symbol`, `bigint`

## 类型断言

目的是为了覆盖 TypeScript 本身的推断，前提是该类型是推断类型的子集  
两种写法

1. 尖括号: `<类型>值`

```ts
const str: string = "hello"
const str_len = (<string>str).length
```

2. `as`: `值 as 类型`

```ts
const str: string = "hello"
const str_len = (str as string).length
```

::: warning
如果是在 tsx 语法，必须用值 as 类型
:::

```ts
function handler(event: Event) {
  const element = event as HTMLElement // Error: HTMLElement 不是 event 的子集
}
```

## 未声明类型的变量

注意是变量没有赋值的情况下，默认是 any;

如果有赋值的话，typescript 会进行类型推论

```ts
let something
something = "seven"
//等价于
let something: any
something = "seven"
//下面会报错，typescript会认为myFavoriteNumber是string
let myFavoriteNumber = "seven"
myFavoriteNumber = 7
```

## 类数组

比如 arguments, NodeList, HTMLCollection

需要使用 typescript 的内置对象

### DOM 和 BOM

Document、HTMLElement、Event、NodeList

```ts
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll("div")
document.addEventListener("click", function (e: MouseEvent) {
  // Do something
})
```
