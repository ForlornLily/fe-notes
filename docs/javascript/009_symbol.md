# Symbol

可以当做对象的属性，但不可遍历。不是构造函数，不能 `new`

```js
let privateName = Symbol("name")
let tmp = {}
tmp[privateName] = "Emma"
tmp.hello = "world"
for (const key in tmp) {
  console.log("key", key) // 找不到 Symbol 生成的内容
}
```

Object.getOwnPropertySymbols、Reflect.ownKeys() 会返回

```js
const privateName = Symbol("name")
const another = Symbol.for("another")
const tmp = {
  [privateName]: "name",
  [another]: "for",
  hello: "world",
}
Object.getOwnPropertySymbols(tmp) // [Symbol(name), Symbol(another)]
Object.getOwnPropertyNames(tmp) // ['hello']
Object.getOwnPropertyDescriptors(tmp) // {hello: {…}, Symbol(name): {…}, Symbol(another): {…}}
Reflect.ownKeys(tmp) // ['hello', Symbol(name), Symbol(another)]
```

## for

Symbol.for(string)：对每个字符串键都执行幂等操作。  
第一次使用某个字符串调用时，它会检查全局运行时注册表，发现不存在对应的符号，于是就会生成一个新符号实例并添加到注册表中。  
后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例

```js
let privateName1 = Symbol("name")
let privateName2 = Symbol("name")
privateName1 === privateName2 //false
```

```js
const outData = Symbol.for("name")
function testSymbol() {
  const innerData = Symbol.for("name")
  console.log(innerData === outData) // true
}
testSymbol()
```

## keyFor

查询 for 生成的字符串

```js
let privateName1 = Symbol.for("name")
Symbol.keyFor(privateName1) // 'name'
let test = Symbol("name")
Symbol.keyFor(test) // undefined
let notSymbol = "hello"
Symbol.keyFor(notSymbol) // Uncaught TypeError: hello is not a symbol
```

## 类型转换

Symbol 不能转换成字符串或者数字，但可以变成 boolean

```js
var smb = Symbol("hello")
console.log(smb) //Symbol(hello)
console.log(Boolean(smb)) //true

console.log(String(smb)) //Symbol(hello)
console.log("" + smb) //TypeError: Cannot convert a Symbol value to a string

//上面代码报错就不会往下走了，这里为了方便放在一起
console.log(1 + smb) //TypeError: Cannot convert a Symbol value to a number
console.log(Number(smb)) //TypeError: Cannot convert a Symbol value to a number
```

## 更多属性

可以覆写内置的属性。比如要遍历 Symbol 的内容，可以覆写 [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
