# 装饰器模式

Decorator pattern（修饰模式）：给对象动态地增加职责  
和继承相对，继承会事先在父类上声明所有可能用到的属性  
装饰器模式是动态增加功能，但也不是改变原对象  
例
街机雷电常见的升级：开始只能发射一排子弹，吃道具后可以三排，后期还可以五排  
在原本的对象上又包装了一层

```js
function Raiden() {}
Raiden.prototype.fire = function() {
  console.log('一排子弹')
}

function RaidenII(plane) {
  this.plane = plane
}
RaidenII.prototype.fire = function() {
  this.plane.fire()
  console.log('多了两排子弹')
}

let plane = new Raiden()
plane = new RaidenII(plane)
plane.fire()
```

## 装饰函数

当想要改动一个函数的逻辑时，通常做法是直接改内部代码  
装饰器的做法是不改变该函数源码的前提下，加入新功能

如果不想要直接修改原型，可以用闭包  
注意此种方法的 `this` 指向，不适合方法调用

```js
const before = function(fn, hack) {
  return function() {
    hack.apply(this, arguments)
    fn.apply(this, arguments)
  }
}
function original() {
  console.log('hello')
}
function hack() {
  console.log('1')
}
var test = before(original, hack)
test()
```
