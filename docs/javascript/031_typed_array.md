# TypedArray
定形数组（TypedArray）：describes an array-like view of an underlying binary data buffer  
并不是一个具体的对象，只是一个描述二进制的视图，可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的 预分配内存。  

希望浏览器运行复杂的 3D 应用，到现在诞生了 WebGL 来提供一套 API  
图形运行程序通常不需要双精度浮点格式，导致出现性能问题。但 Array 内存刚好就是这么存的，为此提供了一个新的类型，即 Float32Array（TypedArray 的一种）    

## ArrayBuffer
[参考](https://sagittarius-rev.gitbooks.io/understanding-ecmascript-6-zh-ver/content/chapter_10.html)

``` js
const buf = new ArrayBuffer(16);
buf.byteLength // 16
```
一经创建就不能再调整大小。不过，可以使用 slice() 复制  

## DataView
对 ArrayBuffer 进行读写  
``` js
// 在内存中分配两个字节并声明一个DataView 
const buf = new ArrayBuffer(2); 
const view = new DataView(buf);
view.getInt8(0)  // 0
```
## SharedArrayBuffer
ArrayBuffer 的一个变体  
参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

## Atomics 对象

Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作  
Atomics 不是构造函数，因此不能使用 `new` 操作符调用，也不能将其当作函数直接调用