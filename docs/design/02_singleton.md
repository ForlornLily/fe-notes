# 单例模式

Singleton Pattern：保证一个类只存在一个实例  
比如点击同一个功能按钮弹出的对话框，应该始终是同一个  
全局变量就可以看做是一种单例模式

## 实现

用一个变量存储实例，如果变量存在则不再创建

```js
function Singleton(name) {
  this.name = name
  this.instance = null
}
Singleton.prototype.getName = function() {
  console.log(this.name)
}
Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}
const testA = Singleton.getInstance('hello')
const testB = Singleton.getInstance('world')
testA.getName() // "hello"
testB.getName() // "hello"
```

## 惰性单例

只在需要的时候创建，并且只存在一个实例

比如某个网站的登录对话框，用户在浏览网站的时候其实用不到，不需要创建。
点击登录的时候才创建  
但是点击登录的时候要判断是否已经创建过，创建过只需要显示即可，不需要反复创建新的。

可以用闭包实现

```js
const getSingle = function(fn) {
  let result
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

function test(name) {
  return name
}
const closureTest = getSingle(test)
const testA = closureTest('hello')
const testB = closureTest('world') // "hello"
```
