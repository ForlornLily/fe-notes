# Prettier

## 读取文件报错

报错：No files matching the pattern were found  
单引号需要转义为双引号

```json
"lint": "prettier --write 'docs/**/*.md'",
```

变成

```json
"lint": "prettier --write \"docs/**/*.md\"",
```
