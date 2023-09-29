# 命令

完整见 [commands](https://docs.npmjs.com/cli/v7/commands)

## list

展示依赖（包括 devDependencies）

- `depth` 指定深度，为 0 只展示第一层

```bash
npm list --depth=0
```

- 获取某个包的依赖，比如 `react`

```bash
npm list react
```

## view

浏览某个包的信息

```bash
npm view react

# 获取包在 npm 源的最新信息
npm view react version

# 获取包在 npm 源的所有版本
npm view react versions
```

## version

指定预发布版本

```
npm version prerelease
```

## dist-tag

指定 tag

```
npm dist-tag add rc-select@3.0.1-beta.0  beta
```

## 清除缓存
```
npm cache clean --force
```