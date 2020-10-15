# 后端开发入门

## 工具/库

- NodeJS
- koa2
- postman

## 环境兼容 cross-env

```json
"dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon bin/www",
"prd": "cross-env NODE_ENV=prd pm2 start bin/www",
```
