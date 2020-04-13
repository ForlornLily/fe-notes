# 高级类型

官网[Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

## 交叉类型

让一个对象拥有多个对象的所有功能

```ts
function extend<T extends object, U extends object>(
  first: T,
  second: U
): T & U {
  let obj = <T & U>{}
  for (let key in first) {
    ;(obj as T)[key] = first[key]
  }
  for (let key in second) {
    ;(obj as U)[key] = second[key]
  }
  return obj
}

const x = extend({ a: 'hello' }, { b: 42 })

const a = x.a
const b = x.b
```

## 联合类型

一个变量可以拥有多个类型，多个类型之间用`|`进行分割。

此时这个变量只能在类型范围内取交集的属性。

比如 String 拥有 length, Number 没有，那么在 myFavoriteNumber

- 不确定是哪个类型的时候就不能访问 length；

- 不确定的情况下可以访问共有属性，比如 toString()方法

- 确定的情况下可以正常访问

```ts
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
console.log(myFavoriteNumber.length) // 5，不会报错
myFavoriteNumber = 7
console.log(myFavoriteNumber.length) // 编译时报错
```

```ts
let myFavoriteNumber: string | number
console.log(myFavoriteNumber.length) // 报错，此时不确定是什么类型
```

此时可以用断言让变量的类型确定。

- 但是断言也只能指定已指定的类型。

```ts
let myFavoriteNumber: string | number
console.log((<string>myFavoriteNumber).length) // 手动指定为string类型
```

（注：上述代码只是个示例，表示在 typescript 是可以编译通过的，但实际上在 js 里面还是会报错，因为 myFavoriteNumber 是个 undefined）

```ts
console.log(<boolean>myFavoriteNumber) // 报错，因为myFavoriteNumber不包含boolean
```

## 类型别名

某个类型比较复杂的时候，先把这个类型用 type 做一个封装，方便后面的变量使用

```ts
type Name = number
type AnotherName = string
type unionName = Name | AnotherName
function myCustom(x: unionName): void {
  console.log(x)
}
```

### 字符串字面量类型

比如指定 string 类型的值只能是"1", "2", "3"

```ts
type str = '1' | '2' | '3'
let x: str
x = '4' //报错，因为x只能是1/2/3
```

### 数字字面量类型

和字符串字面量类型一样

```ts
type num = 1 | 2 | 3
let test_num: num = 4 //报错，只能是1/2/3
```
