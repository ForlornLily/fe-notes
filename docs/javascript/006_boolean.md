# Boolean

## falsy

false, null, undefined, 0（+0，-0）, "", NaN

## 显式类型转换 Boolean()

用 Boolean()的情况下（不是用==等操作符）

```js
Boolean(""); //false
Boolean(" "); //true
Boolean(NaN); //false
Boolean(0); //false
Boolean(1); //true
```

- string 类，除了""其他都是 true
- number 类，除了 0、-0 和 NaN 其他都是 true
- object 都是 true
- null， undefined 为 false
- symbol 是 true, BigInt 是 true
