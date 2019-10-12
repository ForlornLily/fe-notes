# 优化：optimization

## Tree Shaking：只打包用到的模块

只能用在 ES module 上，也就是只能 import, 不能用在 require

mode 是 production 时会自动开启

mode 是 development 需要手动加入

```js
optimization: {
  usedExports: true
},
output: {
  filename: "index.min.js",
  path: path.resolve(__dirname, "dist") //必须是绝对路径
}
```

### package.json

开启 tree shaking 之后 webapck 只解析有导出(export)的模块

像是 babel-pollyfill，并没有导出，而是
全局重写的 promise 等，为了保证类似 pollyfill 模块的正常使用，需要在 package.json 内单独配置这些

常用的比如 import xx.css

```json
"sideEffects": ["*.css"]
```

![](../images/2a5812e0ebf7da17be16c40fb5ab525a.png)

## Code Spliting: splitChunks

![](../images/70183b927751d6822eb33f748fb5a7d2.png)

抽取公共的依赖文件到单个文件里面。适用于同步代码

如果是[异步引入](https://webpack.js.org/guides/code-splitting/#root)，比如 Promise，那么 webpack 会自动处理，不需要配置 optimization，但如果配置了 splitChunks，也会影响异步引入生成的结果

```js
chunks: 'async', //异步代码进行code splitting, 配成"all"打包所有
```

### 配置

![](../images/0ae65c65e1104b74f352d8c99bb3f07b.png)

![](../images/44b762acd81f5026ab44fee1c7c85776.png)

注释内的 webpackChunkName 表示动态引入的插件名字

到时候打包的名字会叫 lodash.bundle.js

splitChunks 的配置见官网[split-chunks-plugin](https://webpack.js.org/plugins/split-chunks-plugin/)

解释见 Dell Lee
[慕课网](https://coding.imooc.com/class/316.html#mid=22363)4.5，4.6 节

## runtimeChunk

![](../images/0625b83ccc4f0430ef3d5b4f8fb6172e.png)

设置为"single"之后，根据提供的选项将运行时代码拆分成单独的块

见[缓存](./10_usage.md#缓存)

## 常见优化手段

1.  更新到最新版本

2.  尽可能使用 include，少用 plugin，比如开发环境不需要压缩

3.  减少[resolve](./04_loader.md#自定义loader)

4.  用[dllplugin](./03_plugins.md#DllPlugin)配置第三方模块，第一次打包后不再反复打包

5.  合理使用[sourceMap](./06_mode.md#cheap-module-eval-source-map)
6.  其他:
    [官网](https://webpack.docschina.org/guides/build-performance/)