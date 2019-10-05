# 对象：接口(interface)

使用接口（Interfaces）来定义对象的类型。

## 简单的对象{key: value}

js 声明的对象，包含的 key 和对应的值必须一一对应。key 不可以多也不能少

```ts
interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
}
//报错，缺少age
let tonny: Person = {
  name: 'Tony'
}
```

## 可选属性？

声明变量的时候可选变量允许不存在。但不允许添加未定义的属性

```ts
interface Person {
  name: string
  age?: number
}

let tonny: Person = {
  name: 'Tony'
}
//报错，sex未声明
let betty: Person = {
  name: 'Tony',
  sex: 'female'
}
```

## 任意属性 propName

允许添加未定义的属性。

但是所有已定义的属性必须和 propName 类型一致或者是子集

```ts
//不报错
interface Person {
  name: string
  age?: number
  [propName: string]: any
}
let tom: Person = {
  name: 'Tom',
  gender: 'male'
}
//报错
interface People {
  name: string
  age?: number // propName的值只能是string，但是age给了number，不是string的子集
  [propName: string]: string
}
```

## 只读 readonly

只能在创建时赋值，动态赋值会报错

```ts
interface Servant {
  readonly name: string
}
let saber: Servant = {
  name: 'Altria'
}
saber.name = 'Arthur' //报错，不允许再次赋值
let lancer: Servant = {}
lancer.name = 'Altria' //报错，只能在创建的时候赋值
```

## 数组

### 类型+[]

数组的每一项只能是对应的类型

```ts
let intArr: number[] = [1, 2, 3]
intArr.push('4') //报错，只能是number

let mixArr: (number | string)[] = [1, 2, 3]
mixArr.push('4') //正常

let anyArr: any[] = ['hello', 1, { custom: 'value' }]
```

### 数组泛型(Array Generic): Array\<elemType\>

```ts
let fibonacci: Array<number> = [1, 1, 2, 3, 5]
```

### 接口 interface

比如只要 index 类型是 number，值就必须是 string

```ts
interface myArray {
  [index: number]: string
}
let arr: myArray = ['1', '2', '3']
```

### 类数组

比如 arguments, NodeList, HTMLCollection

需要使用 typescript 的内置对象

## 内置对象

js 中的有 Date, RegExp 等等，在 typescript 一一对应

```ts
let myDate: Date = new Date(),
  flag: Boolean = new Boolean(1)
```

### DOM 和 BOM

Document、HTMLElement、Event、NodeList

```ts
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
})
```

## 函数

### 函数声明

如果没有返回值，函数本身类型为 void

```ts
function myFunction(x: string, y: string): void {
  console.log(`${x}+${y}`)
}
myFunction('hello', 'world')
```

和对象类似，函数的形参个数不能多也不能少

```ts
function sum(x: number, y: number): number {
  return x + y
}
sum(1, 2, 3) //报错，参数多了一个
```

### 函数表达式=>

注意 typescript 的箭头=\>，不是 ES6 的箭头函数

typescript 中箭头左边是输入类型，右边是输出类型

```ts
let myFun: (x: string, y: string) => void = function(
  x: string,
  y: string
): void {
  console.log(`${x}, ${y}`)
}
```

js 用箭头函数

```ts
let mySum: (x: number, y: number) => number = (x: number, y: number): number =>
  x + y
```

### 接口表示

参数可以

```ts
interface customFun {
  (x: string, y: string): void
}
let myFun: customFun
myFun = (a: string, b: string): void => {
  console.log(`${a}, ${b}`)
}
```

### 可选参数?

没有默认值的情况下，函数内的可选参数必须在最后面

```ts
function myCustom(score: number, flag?: boolean): number {
  if (flag) {
    return score + 1
  }
  return score
}
```

### 默认值

设置默认值后，typescript 会将添加了默认值的参数识别为可选参数

那么其他无默认值的可选参数位置，就没限制了

```ts
function myCustom(score: number, flag: boolean = false): number {
  if (flag) {
    return score + 1
  }
  return score
}
```

### 剩余参数...rest

ES6 中的剩余参数，是放在函数的最后的

本质上剩余参数就是个数组

```ts
function myCustom(score: number, flag?: boolean, ...items: any[]): number {
  const data: any[] = items,
    length: number = data.length
  let total: number = 0
  for (let i = length; i--; ) {
    total += data[i]
  }
  if (flag) {
    return score + total
  }
  return total
}
console.log(myCustom(1, true, 1, 2, 3))
```

### 重载

根据函数的参数类型不同，进行不同的逻辑处理，可以用重载进行精确的表达。

比如传入的参数类型是 number, 希望 return 的也是 number

传入的参数类型是 string, return 也是 string

为了进行精确表达，typescript 内可以重复声明同一个函数

```ts
function myCustom(x: number): number
function myCustom(x: string): string
function myCustom(x: number | string): number | string {
  if (typeof x === 'number') {
    return x + 1
  }
  return x + ' world'
}
console.log(myCustom(1))
console.log(myCustom('hello'))
```

前几次都是函数定义，最后一次是函数实现。

TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数如果有包含关系，需要把精确的定义写在前面
