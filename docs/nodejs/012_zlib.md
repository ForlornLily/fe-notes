# zlib

压缩模块，对流进行压缩以减少传输体积

## gzip

用 gzip 压缩的 HTTP 数据流，返回头中使用`Content-Encoding：gzip`作为标识

### 压缩和解压

压缩: `zlib.createGzip`  
解压 unzip: `zlib.createGunzip`  
比如下方，访问`http://localhost:666/`后, 页面的`Response Header`里面可以看到`Content-Encoding：gzip`

```js
const fs = require("fs")
const http = require("http")
const zlib = require("zlib")
const filepath = "./src/index.html"

const server = http.createServer((req, res) => {
  const acceptEncoding = req.headers["accept-encoding"]
  if (acceptEncoding.includes("gzip")) {
    const gzip = zlib.createGzip()
    res.writeHead(200, {
      "Content-Encoding": "gzip",
    })
    fs.createReadStream(filepath).pipe(gzip).pipe(res)
  } else {
    fs.createReadStream(filepath).pipe(res)
  }
})

server.listen(666)
```
