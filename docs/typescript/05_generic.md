# 泛型
官网[Generics](https://www.typescriptlang.org/docs/handbook/generics.html)   
定义的时候不指定类型，使用的时候再指定

比如定义一个函数，创建数组。

数组指定了传入的 value 类型必须是 string，返回值可以是任意的

```ts
function createArray(length: number, value: string): any[] {
  let result = []
  for (let i = 0; i < length; i++) {
    result.push(value)
  }
  return result
}
let currentClass = createArray(2, 'Saber') // ["Saber", "Saber"]
```

泛型可以在调用函数的时候指定传入类型和返回类型

上述例子可以改成

```ts
//T相当于一个变量，所有用到T的数据类型都是一样的
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result.push(value)
  }
  return result
}
//T都是string类型
let currentClass = createArray<string>(2, 'Saber') // ["Saber", "Saber"]
```

## 泛型约束

和联合类型相似，因为定义时不确定是什么类型，也就只能用所有类型共有的特性（即交集）

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length) //报错，不一定有length属性
  return arg
}
```

可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量

```ts
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity('hello') //通过
loggingIdentity(1) //报错，number不具有length属性
loggingIdentity({length: 10, value: 3});//通过
```

## 多个参数

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([7, 'seven']) // ['seven', 7]
```

### 继承约束

```ts
function copy<T extends U, U>(target: T, source: U): T {
  for (let key in source) {
    target[key] = (<T>source)[key]
  }
  return target
}
let x = { a: 1, b: 2, c: 3 }
copy(x, { b: 666, c: 888 })
copy(x, { b: '123' }) //报错，类型不匹配
```

## 泛型接口

函数可以用接口表示

```ts
interface customFun {
  (x: string, y: string): void
}
let myFun: customFun
myFun = (a: string, b: string): void => {
  console.log(`${a}, ${b}`)
}
```

接口内也可以使用泛型

```ts
interface customFun {
  <T>(x: T, y: T): void
}
let myFun: customFun
myFun = <T>(a: T, b: T): void => {
  console.log(`${a}, ${b}`)
}
myFun<string>('hello', 'wolrd')
```

进一步，把泛型提升到接口名上

```ts
interface customFun<T> {
  (x: T, y: T): void
}
let myFun: customFun<number>
myFun = <T>(a: T, b: T): void => {
  console.log(`${a}, ${b}`)
}
myFun(1, 2)
```

## 泛型类

```ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}
```

## 默认类型

使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用

```ts
//指定T默认类型是string
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
```
