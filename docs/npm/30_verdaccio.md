# verdaccio

- github: [verdaccio](https://github.com/verdaccio/verdaccio)

## 配置文件

`config.yaml`  
windows 路径在 `C:\Users\xx\AppData\Roaming\verdaccio`

### 本地发包失败

修改配置文件 config.yaml  
在最后设置允许离线发布

```yaml
publish:
  ## This will allow the publisher to publish packages even if any uplink is down.
  allow_offline: true
```

## deprecate 失败

verdaccio 版本较低，需要升级至 4.7 +  
见 github release，[PR](https://github.com/verdaccio/verdaccio/pull/1842)
