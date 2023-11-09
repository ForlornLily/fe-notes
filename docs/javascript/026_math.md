# Math

完整的内置方法见 [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## 最大最小值：max/min

## 舍入

- ceil：向上取整

```js
Math.ceil(18.9) //19
Math.ceil(18) //18
```

- floor：向下

```js
Math.floor(18.9) //18
Math.floor(18) //18
```

- round：四舍五入

```js
Math.round("18.5") //19
Math.round("18.5b") //NaN
```

- fround：最接近的单精度(32 位)浮点值

```js
Math.fround(18.5) // 18.5
Math.fround("18.5b") // NaN
Math.fround(18.1) // 18.100000381469727
Math.fround(18.9) // 18.899999618530273
```

包含非数字都会是 NaN

## random

包括 0，不包括 1 的随机数

## 幂运算

比如 5 的平方

可以用 pow 函数，也可以用`**`

```js
Math.pow(5, 2)
//等价于
5 ** 2
```

```js
2 * 5 ** 2 //50
```

左边只能用++或者--的一元运算符，否则会产生歧义。

通过加括号进行区别

```js
let result = -5 ** 2; // 语法错误
(-5) ** 2              // 25
let num1 = 2;
++num1 ** 2            // 9
```

::: tip
\*\* 优先级低于一元运算符。
:::
