# buffer

处理二进制数据。  
在引入 TypedArray 之前，JavaScript 语言没有用于读取或操作二进制数据流的机制  
但要处理 TCP 流或者文件流时，必须要用到二进制

```js
const buffer = Buffer.from("Hello world"); //字符串数据存储入 Buffer 实例

const base64Str = buffer.toString("base64"); //转换为base64格式字符串

const buf = Buffer.from(base64Str, "base64");

console.log(buf.toString("utf8")); // 转换为 UTF-8 格式, 结果是`Hello world`
```

由于 Buffer 太常用，Node 在启用的时候就已经加载了这个模块，并放在全局对象上  
所以使用 Buffer 对象的时候不需要特地 require()

## 结构

Buffer 对象类似数组，它的元素是 16 进制的的两位数，即 0~255 的数值

```js
Buffer.from("Hello world");
```

结果

```
<Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
```

使用方式和 Array 也有些像，比如通过 `length` 获取长度，也可以通过索引访问

## 字符串转换

- 字符串转 Buffer：`Buffer.from`
- Buffer 转字符串：`toString`  
  toString 支持不同的编码类型，默认是`utf-8`  
  通过`Buffer.isEncoding(encoding)` 查看支持的编码类型，`GBK` 目前不支持

### 乱码处理

通常处理流拼接，可能是用 `+=` 进行字符串拼接

```js
const fs = require("fs");

const rs = fs.createReadStream("./hello.md");

let data = "";
rs.on("data", (chunk) => (data += chunk));

rs.on("end", () => console.log(data));
```

如果遇到少数中文，可能会乱码  
比如 windows 下用 `dir` 命令生成的文件夹目录，以 ANSI 编码保存到 txt 里面。
内容：

```txt
hello.txt
我
是
```

此时上述输出的内容会乱码

```
hello.txt
��
��
```

需要借助第三方库进行转码，比如 iconv-lite

```js
const fs = require("fs");
const iconv = require("iconv-lite");

const rs = fs.createReadStream("./test/hello.txt");

let data = "";

rs.on("data", (chunk) => {
  data += iconv.decode(chunk, "gbk");
});

rs.on("end", () => {
  console.log(data);
});
```
