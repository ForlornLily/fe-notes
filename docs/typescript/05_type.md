# type

type 同样只能指定类型，不能赋值

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

## 字符串指定值

比如指定 string 类型的值只能是"1", "2", "3"

```ts
type str = '1' | '2' | '3'
let x: str
x = '4' //报错，因为x只能是1/2/3
```
