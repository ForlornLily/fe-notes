# buffer

处理二进制数据。  
在引入 TypedArray 之前，JavaScript 语言没有用于读取或操作二进制数据流的机制  
但要处理 TCP 流或者文件流时，必须要用到二进制

```js
const buffer = Buffer.from('Hello world') //字符串数据存储入 Buffer 实例

const base64Str = buffer.toString('base64') //转换为base64格式字符串

const buf = Buffer.from(base64Str, 'base64')

console.log(buf.toString('utf8')) // 转换为 UTF-8 格式, 结果是`Hello world`
```
