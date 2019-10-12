# 单个基本类型

## 对应 JS 的原始数据类型

number, boolean, string

```ts
let num: number = 1,
  str: string = 'hello',
  flag: boolean = true
```

### number

支持二进制、八进制、十进制

### boolean

### string

string 还可以使用字符串模板\`\`

```ts
str: string = `hello, ${num}`
```

### undefined/null

用 undefiend 和 null 标识：

```ts
let u: undefined = undefined
let n: null = null
```

用 void 标识：

```ts
empty: void = null;
```

区别：

undefined 和 null
是所有类型的子类型。也就是其他类型的值，可以被赋值成 null/undefined；

但 void 不可以和其他类型混用。

```ts
// 这样不会报错
let num: number = undefined
// 这样也不会报错
let u: undefined
let seconed: number = u
```

## void

如果函数没有 return 值，可以将函数类型设置为空值(void)

```ts
function myFunction(): void {
  console.log('hello, world')
}
```

## any

变量的类型可以转换。

```ts
let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7 //允许类型改变
```

可以访问任意属性和方法，哪怕不存在。

即声明一个变量为 any 后，对它的任何操作，返回的内容的类型都是任意值。

```ts
// 这样不会报错
let anyThing: any = 'Tom'
anyThing.setName('Jerry')
anyThing.setName('Jerry').sayHello()
console.log(anyThing.myName.firstName)
```

### 未声明类型的变量

注意是变量没有赋值的情况下，默认是 any;

如果有赋值的话，typescript 会进行类型推论

```ts
let something
something = 'seven'
//等价于
let something: any
something = 'seven'
//下面会报错，typescript会认为myFavoriteNumber是string
let myFavoriteNumber = 'seven'
myFavoriteNumber = 7
```