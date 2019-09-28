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
