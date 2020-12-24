# npm

参考

- [npm](https://docs.npmjs.com/)

## npmrc

下方的权重高于上方

```bash
registry=http://localhost:4874
# @custom 高于无限制的registry
@custom:registry=http://localhost:4874
```

## 预发布版本

```
npm version prerelease
```

## 指定 tag

npm dist-tag

```
npm dist-tag add rc-select@3.0.1-beta.0  beta
```
