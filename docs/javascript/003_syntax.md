# 语法

无论变量、函数还是操作符，都区分大小写

## 标识符

标识符：指变量、函数、属性或者参数的名称  
必须以 `$` 或者 `_` 或者字母开头。后面可以跟字母、数字、`$` 和 `_`  
推荐驼峰式命名  
弱类型(weak typing)：允许标识符在任意时刻持有任意类型的值。不建议赋值时给不同的数据类型  
声明对象的时候可以给 null

## 关键字

比如 `typeof`

## 严格模式

```js
"use strict";
```

严格模式下

1. 给未声明的变量赋值将报错

```js
function doSomething() {
  "use strict";
  // 函数体
  test = "hello";
}
doSomething(); // Uncaught ReferenceError: test is not defined
```

2. 不能定义名为 eval 和 arguments 的变量

## 变量

三个关键字：`var`、`const`、`let`

## var 变量提升

var 声明的变量，变量会被自动添加到最接近的上下文

- 在函数中，都会在所在函数的顶部。不在函数内部，就认为是全局作用域的顶部
- 全局变量会成为 window 的属性
- 同一个变量可以声明多次（严格模式下也支持）

在代码的任何部分被执行之前，所有的声明（变量和函数声明），都会首先被处理。函数表达式不会

`var a = 2;`实际上认为这是两个语句：`var a;` 和 `a = 2;`

- 声明，在编译阶段被处理的。

- 赋值，为了执行阶段而留在原处

- 提升是以作用域为单位（见[函数表达式](./020_scope.md#函数表达式)）

```js
function hoisting() {
  var condition = true;
  console.log(value); // undefined
  if (condition) {
    var value = "hello";
    console.log(value); // hello
  }
  console.log(value); // hello
}
//等价于
var value;
console.log(value); // undefined
if (condition) {
  value = "hello";
  console.log(value); // hello
}
```

[为什么要变量提升](https://segmentfault.com/q/1010000013591021)

- 解析和预编译过程中的声明提升可以提高性能，让函数可以在执行时预先为变量分配栈空间  
  比如函数声明本身是不会变的，没有必要每次执行的时候都重新解析一边声明

- 声明提升还可以提高 JS 代码的容错性，使一些不规范的代码也可以正常执行

## let

let 声明的范围是块作用域，而 var 声明的范围是函数作用域。

- 不会有变量提升；（暂时性死区 temporal dead zone，简称 TDZ）
- 也不允许反复声明同一个变量
- 在全局声明也不会成为 `window` 的属性

```js
function hoisting() {
  var condition = true;
  let value = "world";
  if (condition) {
    console.log(value); // Uncaught ReferenceError: Cannot access 'value' before initialization
    let value = "hello";
  }
}
```

```js
//暂时性死区
let result = typeof value; // ReferenceError: value is not defined
let value = "world";
```

```js
//不在块级
var condition = true;
let result = typeof value; //不报错，因为不在块级作用域内
if (condition) {
  let value = "world";
}
```

```js
"use strict";
var test = 1;
let another = 2;
console.log(window.test); // 1
console.log(window.another); // undefined
```

```js
var value = "world";
let value = "hello"; // Uncaught SyntaxError: Identifier 'value' has already been declared
```

### for

每次迭代都会创建一个同名变量并初始化

```js
function a() {
  for (let i = 0; i < 5; i++) {
    this.i = i;
    setTimeout(function () {
      console.log(i);
    }, 0);
    console.log(this.i);
  }
}

a(); // 0 1 2 3 4 0 1 2 3 4
```

## const

- 声明的时候必须赋值
- 改变自身的值会报错。不可以改变引用本身，但是可以改变引用内部的值

```js
const values  // Uncaught SyntaxError: Missing initializer in const declaration
```

```js
const values = {};
values = 12; // Uncaught TypeError: Assignment to constant variable.

values.name = "hi"; // 正常赋值
```

### for

for 循环会报错（因为 `i++` 相当于在改自身的值）

for(const key in obj)不会报错

for of 也不会
