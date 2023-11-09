# 错误处理

## throw 和 try catch

throw 用来抛出异常，try/catch 捕获异常

```js
function jude(x) {
  if (x < 0) {
    throw new Error("x不能小于0"); //Uncaught Error: x不能小于0
  }
  try {
    console.log(x);
  } catch (e) {
    console.log(e);
  }
}
```

try..catch 只能是同步的，无法用于异步代码模式。  
参考[try/catch 无法捕获 promise.reject 的问题](https://segmentfault.com/q/1010000014905440)，[try-catch 捕获不到哪些异常和错误](https://www.xiabingbao.com/post/error/try-catch-cant-error.html)

```js
//报错，Uncaught (in promise)
function f2() {
  try {
    Promise.reject("出错了");
  } catch (e) {
    console.log(e);
  }
}
//正常
function f2() {
  try {
    Promise.reject("出错了").catch((err) => {
      console.log("2", err);
    });
    console.log("1");
  } catch (e) {
    console.log(e);
  }
}
```

### finally

try catch 一定会执行 finally，哪怕 return

```js
function testFinally() {
  try {
    return "try";
  } catch (error) {
    return "error";
  } finally {
    return "finally";
  }
}
testFinally(); // 'finally'
```

## 错误类型

- Error：其他错误类型都继承 Error
- InternalError：浏览器抛出（比如堆栈溢出），业务不会主动用
- EvalError：eval() 异常，但一般都抛出 TypeError
- RangeError：几乎用不到
- ReferenceError：找不到对象， xx is not defined
- SyntaxError
- TypeError
- URIError：encodeURI()或 decodeURI() 异常，几乎用不到

## 抛出异常

即 throw，可以是任意值（基本类型、引用类型都可以）  
常用的错误类型是 Error、ReferenceError 和 TypeError

## error 事件

try catch 了就不会触发 error  
image 也支持 error

```js
const image = new Image();
image.addEventListener("load", (event) => {
  console.log("Image loaded!");
});
image.addEventListener("error", (event) => {
  console.log("Image not loaded!");
});
```
