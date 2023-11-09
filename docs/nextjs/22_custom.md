# 用户自定义

## 自定义 server

[Custom Server](https://nextjs.org/docs/advanced-features/custom-server)

```js
// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/a") {
      app.render(req, res, "/b", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/a", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
```

项目启动修改为启用该 js

```json
"scripts": {
  "dev": "node server.js",
  "build": "next build"
},
```

## \_app.js

相当于整个项目的容器
[Custom App](https://nextjs.org/docs/advanced-features/custom-app)

## \_error.js

自定义 404/500 页面
[Custom Error Page](https://nextjs.org/docs/advanced-features/custom-error-page)
