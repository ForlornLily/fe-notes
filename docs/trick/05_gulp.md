# Gulp

## primordials is not defined

原因： gulp 和 NodeJS 版本不匹配。  
3.x 版本的 gulp 依赖了 `graceful-fs` 3.0 版本，对 NodeJS 本身的 fs 做了一些自定义，但 `graceful-fs` 并不支持 Node 12.x 版本  
解决方案：[参考](https://timonweb.com/javascript/how-to-fix-referenceerror-primordials-is-not-defined-error/)  
手动锁定 graceful-fs 版本  
以 npm 为例

1. 新建 `package-lock.json`
2. 输入以下内容

```json
{
  "dependencies": {
    "graceful-fs": {
      "version": "4.2.2"
    }
  }
}
```

3. 重新安装依赖，package-lock.json 将会自动更新
