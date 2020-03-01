# Query String

解析和格式化 url 参数的工具模块

```js
const queryString = require('querystring')
```

## parse()

将字符串转 JSON

```js
const result = queryString.parse('foo=bar&abc=xyz')
JSON.stringify(result) //{"foo":"bar","abc":"xyz"}
```

## stringify

parse 的反操作，对象转为字符串

```js
const queryString = require('querystring')
const obj = {
  hello: 'word'
}
queryString.stringify(obj) //"hello=word"
```

## escape

对字符串进行编码，类似 encodeURI

```js
queryString.escape('hello=word') //"hello%3Dword"
```

## unescape

解码，`escape`的泥操作
