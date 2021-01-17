# 插件收集

- supervisor: `supervisor myscript.js` 实时渲染
- pm2
- nodemon
- xml2js: 将 xml 转换成 json
- http-server: 全局安装 http-server, 用 nodejs 创建一个服务器
- body-parser: 解析 header
- cross-env: 跨平台地设置和使用环境变量`NODE_ENV`
- autocannon: 压测

```json
"scripts": {
  "dev": "cross-env NODE_ENV=dev nodemon ./index.js",
  "prod": "cross-env NODE_ENV=production nodemon ./index.js"
}
```

- xss: 预防 XSS 攻击
- morgan: 主要用来写日志(log)
