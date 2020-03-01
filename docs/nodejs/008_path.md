# path

path 可以兼容不同操作系统的路径  
比如 MacOS 路径是`/foo/bar`, windows 是`D:\\foo\\bar`

## \_\_dirname

全局变量`__dirname`，表示当前 js 所在的目录

## dirname

获取当前文件/文件夹所在的父级文件夹

```js
const path = require('path')
path.dirname('/project/node/node_global/node_modules') // `/project/node/node_global`
path.dirname('/project/express-ts/src/index.js') // `/project/express-ts/src`
```

## extname

获取文件的扩展名

```js
const path = require('path')
path.extname('/project/express-ts/src/index.js') // `js`
```

## join

将路径进行拼接

```js
const path = require('path')
path.join('/a', '/b', '/c') // `\a\b\c`
```

## resolve

解析成绝对路径
以`/`开头，取最后一个`/`开头的字符串  
否则是拼接

```js
const path = require('path')
path.resolve('/b') // `D:\b`
path.resolve('/a', './b', '/c') // D:\c
path.resolve('/a', './b') // `D:\a\b`
path.resolve('/a', './b', './c') // `D:\a\b\c`
```

## isAbsolute

是否是绝对路径，返回 true/false  
简单来说是不是以`/`开头

```js
const path = require('path')
path.isAbsolute('/project/express-ts/src/index.js') //true
path.isAbsolute('project/express-ts/src/index.js') //false
```

## normalize

规范化路径，多个`\`或者`/`并存的时候，删掉多余的`/`或`\`

```js
path.normalize('D:projectexpress-tssrc') // `D:projectexpress-tssrc`
path.normalize('D:\\project\\express-ts\\src') // `D:\project\express-ts\src`
```

## parse

解析路径，返回内容:

```
dir <string>: 文件所在路径
root <string>: 根路径
base <string>: 完整的文件名
name <string>: 文件名（不包含扩展名）
ext <string>: 扩展名
```

比如当前文件是`D:\project\express-ts\src\index.js`
`path.parse(__dirname)`结果为

```
{
  root: 'D:\\',
  dir: 'D:\\project\\express-ts\\src',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
```

## format

序列化路径，即 parse 的逆运算。
传入上述的参数(root, dir 等)，返回绝对路径

```js
const path = require('path')
const result = path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
})
path.normalize(result) // `\home\user\dir\file.txt`
```
