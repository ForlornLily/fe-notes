# plugins

webpack 运行到某一时刻会调用的方法

插件都需要手动引入

## html-webpack-plugin

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin): 管理 HTML

```bash
npm install --save-dev html-webpack-plugin
```

```js
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
}
```

在文件打包后自动在 output 目录生成 html 文件，并引入 js

filename 默认就是"index.html"。上面的配置生成的代码如下:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
```

### 配置项

#### template

设置打包时的 html 模板。

```js
plugins: [
  new HTMLWebpackPlugin({
    filename: "index.html",
    template: "./index.html"
  }),
  new CleanWebpackPlugin()
],
output: {
  filename: "index.min.js",
  path: path.resolve(__dirname, "dist") //必须是绝对路径
}
```

### 多页面文件打包

配置 chunks

```js
new HTMLWebpackPlugin({
  filename: "index.html",
  template: "./index.html",
  chunks: ["foo"], //只引入需要的js
}),
  new HTMLWebpackPlugin({
    filename: "main.html",
    template: "./main.html",
    chunks: ["bar"], //比如foo.js只在index.html用到, bar只在main.html用到
  })
```

## clean-webpack-plugin

清理文件。生产用

### 配置

clean-webpack-plugin 只能清除根目录下的文件

假设目录结构如下，要清除 dist 目录（`new CleanWebpackPlugin()`）会报错，因为此时 build 是根目录

![](../images/0d580715e455c906d3e874cc2db71c85.png)

需要增加配置，见[官网](https://github.com/johnagan/clean-webpack-plugin)

```js
new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ["**/*", "!static-files*"],
})
```

## mini-css-extract-plugin

抽取 CSS：[官网](https://webpack.js.org/plugins/mini-css-extract-plugin)  
生产环境用

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isEnvProduction = process.env.NODE_ENV === 'development'

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: isEnvProduction ? 'style-loader' : MiniCssExtractPlugin.loader
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
}
```

## css-minimizer-webpack-plugin

压缩 css：用于生产环境。  
类似的有 `optimize-css-assets-webpack-plugin`，但 webpack 5 以上官方建议用 `css-minimizer-webpack-plugin`

```js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const isEnvProduction = process.env.NODE_ENV === "development"

const config = {
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        styles: {
          test: /\.(scss|css|less)$/,
          chunks: "all",
          enforce: true,
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name(module) {
            // 获取包名，比如 node_modules/packageName/not/this/part.js
            // 或者 node_modules/packageName
            const pkgNameMatcher = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )
            let packageName = pkgNameMatcher && pkgNameMatcher[1]
            if (!packageName) {
              return "vendors"
            }
            return `third_party.${packageName}`
          },
        },
      },
    },
  },
}
if (!isEnvProduction) {
  config.optimization.minimize = true
  config.optimization.minimizer = [
    // This is only used in production mode
    new TerserPlugin({
      terserOptions: {
        parse: {
          // We want terser to parse ecma 8 code. However, we don't want it
          // to apply any minification steps that turns valid ecma 5 code
          // into invalid ecma 5 code. This is why the 'compress' and 'output'
          // sections only apply transformations that are ecma 5 safe
          // https://github.com/facebook/create-react-app/pull/4234
          ecma: 8,
        },
        compress: {
          ecma: 5,
          warnings: false,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebook/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false,
          // Disabled because of an issue with Terser breaking valid code:
          // https://github.com/facebook/create-react-app/issues/5250
          // Pending further investigation:
          // https://github.com/terser-js/terser/issues/120
          inline: 2,
        },
        mangle: {
          // 支持低版本 safari
          safari10: true,
        },
        // Added for profiling in devtools
        keep_classnames: isEnvProductionProfile,
        keep_fnames: isEnvProductionProfile,
        output: {
          ecma: 5,
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebook/create-react-app/issues/2488
          ascii_only: true,
        },
      },
    }),
    // This is only used in production mode
    new CssMinimizerPlugin(),
  ]
}
```

## terser-webpack-plugin

压缩 js，用法见上。生产用  
fork 了 `uglify-es`（uglify-es 已不再维护）

## 内置

直接 require('webpack')

在 plugins 内使用 webpack.xxx

```js
const webpack = require("webpack")

const isEnvProduction = process.env.NODE_ENV === "development"

const config = {
  plugins: [
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
  ],
}
if (isEnvProduction) {
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ])
}
```

### HMR

webpack.HotModuleReplacementPlugin(): 模块热替换

回调等方法见[API](https://webpack.js.org/api/hot-module-replacement)

devServer 设置为 true 之后可以避免每次更新刷新整个页面，只进行局部更新

### DefinePlugin

[webpack.DefinePlugin](https://webpack.js.org/plugins/define-plugin/#root): 编译的时候创建的一个全局变量（比如上述的 `process.env.NODE_ENV`）。
可以变量的不同进行不同的配置  
这个变量必须有引号，所以一般都会用 `JSON.stringify`

### ProvidePlugin

[ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/#root):
自动加载插件，不需要手动 import。比如加载 jQuery

```js
//自动加载 jquery，将两个变量都指向jquery
plugins: [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
]
```

### HashedModuleIdsPlugin

该插件会根据模块的相对路径生成一个四位数的 hash 作为模块 id, 用于生产环境

见[缓存](./10_usage.md#缓存)

### DllPlugin

例子见 Vue。

插件会生成一个名为 manifest.json 的文件，这个文件是用来让 DLLReferencePlugin
映射到相关的依赖上去的

## copy-webpack-plugin

[copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin): 复制文件

```bash
npm install copy-webpack-plugin --save-dev
```

比如把 src 下的 doc 文件夹全部复制到 dist 目录中的 doc 文件夹

```js
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: path.join(srcPath, "doc"), to: path.join(distPath, "doc") },
      { from: "other", to: "public" },
    ]),
  ],
}
```

## webpack-bundle-analyzer

分析构建产物

```js
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

// 省略
config.plugins = config.plugins.concat(new BundleAnalyzerPlugin())
```

## eslint-webpack-plugin

配合 [eslint](../eslint/README.md) 使用

## duplicate-package-checker-webpack-plugin

警告是否一个包有多个版本

## case-sensitive-paths-webpack-plugin

保证路径正确，可能系统大小写不敏感，即使文件名大小写错误，也被引用。  
这个插件确保引用文件的大小写一定和实际的文件名一致

## webpack-filter-warnings-plugin

过滤掉某个 warning 。生产用

```js
new FilterWarningsPlugin({
  // suppress conflicting order warnings from mini-css-extract-plugin.
  // ref: https://github.com/ant-design/ant-design/issues/14895
  // see https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
  exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
}),
```

## 手写 plugin

官网:[Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)

例子可以参考 antd 的 tools：[CleanUpStatsPlugin](https://github.com/ant-design/antd-tools/blob/master/lib/utils/CleanUpStatsPlugin.js)
