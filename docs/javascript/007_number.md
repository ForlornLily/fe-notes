# Number

IEEE-754–based numbers

所有数字都表示为 64 位的浮点数，实际操作基于 32 位整数

```js
1 === 1.0 //true
```

## 浮点数

内存是保存整数的两倍。

小数点后面有数字且不为 0 才会保存为浮点数，没有的话会转成整数

1.和 1.0 都会解析成 1

浮点数计算会存在误差。小数位最多 17 位

0.1 + 0.2 = 0.30000000000000004

## 科学计数法 e

3.12e7 也就是 3.12x10 的 7 次方

312e-7 也就是小数点后面 7 位数

```js
3.12e7 //31200000
312e-7 //0.0000312
```

## 范围

通过 MIN_VALUE, MAX_VALUE 查看

```js
Number.MIN_VALUE //5e-324
```

大于 max，显示为 Infinity。小于 min，显示为-Infinity

```js
Number.MAX_VALUE + Number.MAX_VALUE //Infinity
```

通过`isFinite()`判断，为 false 是 Infinity

## NaN

Not a Number：对 NaN 进行任何加减乘除都返回 NaN

```js
NaN == NaN //false
NaN === NaN //false
```

通过`isNaN()`判断数据是不是 NaN，可以是任意数据类型

## 显式类型转换 Number()

适用于任何数据类型。规则

- Boolean：true 变 1，false 变 0

- null：变 0

- undefined: 变 NaN

- string

  - 只有数字: 变数字，开头的 0 会被忽略。开头是"+"或者"-"看做符号位

  ```js
  Number("012") //12
  Number("012.66") //12.66
  Number(".66") //0.66
  ```

  - 十六进制也转为对应的十进制。十六进制开头有加减号变成 NaN

  ```js
  Number("0xf") //15
  Number("-1") //-1
  Number("-0x2") //NaN
  ```

  - 空字符串变 0, ""和" "都是

  ```js
  Number("") //0
  Number(" ") //0
  Number("hello") //NaN
  ```

  - 其他都是 NaN

- object: 根据 valueOf，进行上面规则转换。如果返回 NaN，再调 toString，进行上面规则转换

## parseInt(值, 进制类型)

建议始终带上第 2 个参数

只适用于字符串 string

忽略字符串开头的空格，从第一个不是空格的字符串开始。

如果第一个字符串不是数字或者+或者-，返回 NaN

否则截取一直到后面不是数字的字符串为止，小数点也算  
可以传入第 2 个参数，指定转换的进制

```js
parseInt("+123") //123
parseInt("-123") //-123
parseInt("-1.2.4") //-1
parseInt("0xf") //15
parseInt("AF", 16) //175
```

## parseFloat()

只会转成十进制。没有第 2 个参数。

忽略第 2 个小数点

```js
parseInt("1.2.1") //1
parseFloat(".233") //0.233
parseFloat(".23.3") //0.23
parseFloat("16.a") //16
parseFloat("16.2a") //16.2
parseFloat("a16") //NaN
```

## Number.isInteger

判断是不是整型

```js
Number.isInteger(25) //true

Number.isInteger(25.0) //true

Number.isInteger(25.1) //false
```

## BigInt

参考[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)  
BigInt 可以是任意大的**整数**  
Number 的范围是-9007199254740991 (`-(2^53-1)`) 和 9007199254740991(`2^53-1`)，任何超出此范围的整数值都会失去精度（四舍五入）

```js
9007199254740992 === 9007199254740993 // true
```

创建`BigInt`类型，在整数后面加`n`即可，或者使用`BigInt()`构造函数

### 构造函数

- Boolean：true 变 1n，false 变 0n
- 不是整数的 Number 类型，会报错

```js
BigInt(10) //10n
BigInt(0.1) //报错：The number 0.1 cannot be converted to a BigInt because it is not an integer
```

- 只有数字的 string 并且是整数的话可以变数字

```js
BigInt("10") //10n
BigInt("0.1") //SyntaxError
```

- 其他，比如 null, undefined, obj 和`Number()`不同，都会报错

### 算术运算

因为数据类型不同，三等号的 BigInt 和 Number 类型的数字肯定是不等的

- 进行`>`, `<`, `==`的时候会进行类型转换
- 无法和 Number 类型进行混合四则运算，因为会存在超出 Number 类型的数字范围情况
- 不允许在 BigInt 上使用一元加号（+）运算符

```js
typeof 10n //"bigint"
10n == 10 //true
10n === 10 //false

10 + 10n // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

可以通过调用 Number()或 BigInt()来转换操作数

```js
BigInt(10) + 10n // 20n
10 + Number(10n) // 20
```
