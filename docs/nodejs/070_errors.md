# 踩坑

## windows 下运行某些脚本报错：不是内部或外部命令

windows 下运行命令会出现报错，可以安装 `cross-env` 包进行平台兼容，然后在脚本执行前加上 `cross-env`

```json
"scripts": {
  "dev": "cross-env ts-node index.ts"
}
```
