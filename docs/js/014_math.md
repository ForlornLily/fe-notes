# Math

## 最大最小值：max/min

## 舍入：ceil, floor, round

ceil：向上取整

![](../images/fa63d67f6b3b4706a423c7cd2e17b5e8.png)
![](../images/c382dadfc6c39b95b029350d3e41b221.png)
![](../images/7c8cf2f08d3609d50831ea9f03625e59.png)

floor：向下

round：四舍五入

包含非数字都会是 NaN

## random

不包括 0 和 1 的随机数

![](../images/2a677be65674cd728a7b4d0fc395b1b8.png)

## 幂运算

比如 5 的平方

可以用 pow 函数，也可以用`**`

```js
Math.pow(5, 2)
//等价于
5 ** 2
```

::: tip
\*\* 优先级低于一元运算符。
:::

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
