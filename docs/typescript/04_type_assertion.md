# 类型断言(Type Assertion)

手动指定类型。

写法：

\<类型\>值

或者

值 as 类型

如果是在 tsx 语法，必须用值 as 类型

## 联合类型中

当变量不确定的时候，只能用声明类型的交集。

也就是之前例子里面

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
