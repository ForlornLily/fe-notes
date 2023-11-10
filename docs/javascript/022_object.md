# 引用类型细分

- Array
- Date
- RegExp
- Function
- Global
- Math
- Set
- Map
- Intl: 参考[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)  
  主要用来数字、日期的格式化，比如
  ```js
  Intl.NumberFormat("en-US").format(10000); //10,000
  ```
  兼容性较差
