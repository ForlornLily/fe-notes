# 联合类型(Union Types)

一个变量可以拥有多个类型，多个类型之间用`|`进行分割。

此时这个变量只能在类型范围内取交集的属性。

比如 String 拥有 length, Number 没有，那么在 myFavoriteNumber

- 不确定是哪个类型的时候就不能访问 length；

- 不确定的情况下可以访问共有属性，比如 toString()方法

- 确定的情况下可以正常访问

```ts
myFavoriteNumber.length
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
console.log(myFavoriteNumber.length) // 5，不会报错
myFavoriteNumber = 7
console.log(myFavoriteNumber.length) // 编译时报错

let myFavoriteNumber: string | number
console.log(myFavoriteNumber.length) // 报错，此时不确定是什么类型
```
