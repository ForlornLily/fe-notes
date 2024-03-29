# loader

静态资源处理见[Asset Management](https://webpack.js.org/guides/asset-management)

尽可能使用 include 属性，应用于必要的模块，提供性能

loader 内的 use 具有顺序，从后往前

## 图片/字体

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts(x?)|js(x?))$/,
        exclude: /node_modules/,
        loader: "swc-loader",
      },
      {
        test: /\.css$/,
        use: [
          isEnvProduction ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                auto: true,
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "./postcss.config.js"),
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less?$/,
        use: [
          isEnvProduction ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "./postcss.config.js"),
              },
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        generator: {
          filename: "img/[name].[contenthash:7][ext]",
        },
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        generator: {
          filename: "fonts/[name].[contenthash:7][ext]",
        },
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
    ],
  },
};
```

### file-loader

Webpack 5 已废弃，[file-loader](https://v4.webpack.js.org/loaders/file-loader/)，改用 [Asset Modules](https://webpack.js.org/guides/asset-modules/)  
通常用来处理图片和字体，实际上任何类型都可以

file-loader 本质上把文件挪到打包后的目录，并返回 webpack 一个地址

比如还是用 js

更多 options 见官网

```js
const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: "file-loader",
          options: {
            //loader的配置
            name: "[name].[ext]", //和源文件一样的名字，一样的后缀
            outputPath: "images/", //打包后放置的文件夹
          },
        },
      },
    ],
  },
};
```

入口文件内容

![](../images/5229c3340b8eaa2ee1bfca40a0dfbe93.png)

打包后

![](../images/d6ebe3623e1d402136d9cca55a5bcdf8.png)

![](../images/f67281503a4de57e61fb11cc530bcb89.png)

### url-loader

Webpack 5 已废弃
把文件转成 base64。通常就用在图片

可以设置 limit 属性（单位是字节），小于 limit 时进行 Base64 转换，大于时和 file-loader 一样，只是挪文件位置

```js
module: {
    rules: [{
      test: /.js$/,
      use: [{
        loader: "url-loader",
        options: {//loader的配置
          name: "[name].[ext]", //和源文件一样的名字，一样的后缀
          outputPath: "images/", //超过limit后，打包放置的文件夹
          limit: 1024 //以byte为单位
        }
      }]
    }]
  },
```

## CSS

style-loader，css-loader

css-loader 解析样式，style-loader 转成 style 标签

### css-loader 配置项

#### importLoaders

解析 css 文件时，如果当前 css 内还\@import 了别的 css 文件，默认是不会进 loader 的

配置 importLoaders 为 2 以后，确保\@import 的 css 文件也进 loader

#### modules

```js
loader: "css-loader",
options: {
  importLoaders: 2,
  modules: true
}
```

CSS 模块化，让引入的 CSS 只在当前文件生效，避免全局

导入 CSS 的时候，使用.xxx 来当类名

![](../images/f28308e71be3a7b35e34fa9c8a5aeeca.png)

![](../images/005b42639f42b137b3fc2b8fcb8f472f.png)

![](../images/5c6bb18c6a9fe49e7bf6d65fca671b46.png)

### 处理 Sass

安装 node-sass, sass-loader

SCSS 源代码会先交给 sass-loader 把 SCSS 转换成 CSS；

把 sass-loader 输出的 CSS 给 css-loader，找出 CSS 中依赖的资源、压缩 CSS 等；

把 css-loader 输出的 CSS 给 style-loader，转成 style 标签

以 create-react-app 为例

```js
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const isEnvDevelopment = webpackEnv === "development";
const isEnvProduction = webpackEnv === "production";

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    isEnvDevelopment && require.resolve("style-loader"),
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
      // css is located in `static/css`, use '../../' to locate index.html folder
      // in production `paths.publicUrlOrPath` can be a relative path
      options: paths.publicUrlOrPath.startsWith(".")
        ? { publicPath: "../../" }
        : {},
    },
    {
      loader: require.resolve("css-loader"),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve("postcss-loader"),
      options: {
        postcssOptions: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: "postcss",
          config: false,
          plugins: !useTailwind
            ? [
                "postcss-flexbugs-fixes",
                [
                  "postcss-preset-env",
                  {
                    autoprefixer: {
                      flexbox: "no-2009",
                    },
                    stage: 3,
                  },
                ],
                // Adds PostCSS Normalize as the reset css with default options,
                // so that it honors browserslist config in package.json
                // which in turn let's users customize the target behavior as per their needs.
                "postcss-normalize",
              ]
            : [
                "tailwindcss",
                "postcss-flexbugs-fixes",
                [
                  "postcss-preset-env",
                  {
                    autoprefixer: {
                      flexbox: "no-2009",
                    },
                    stage: 3,
                  },
                ],
              ],
        },
        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
      },
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve("resolve-url-loader"),
        options: {
          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
          root: paths.appSrc,
        },
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true,
        },
      }
    );
  }
  return loaders;
};
```

```js
[
  // "postcss" loader applies autoprefixer to our CSS.
  // "css" loader resolves paths in CSS and adds assets as dependencies.
  // "style" loader turns CSS into JS modules that inject <style> tags.
  // In production, we use MiniCSSExtractPlugin to extract that CSS
  // to a file, but in development "style" loader enables hot editing
  // of CSS.
  // By default we support CSS Modules with the extension .module.css
  {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
      modules: {
        mode: "icss",
      },
    }),
    // Don't consider CSS imports dead code even if the
    // containing package claims to have no side effects.
    // Remove this when webpack adds a warning or an error for this.
    // See https://github.com/webpack/webpack/issues/6571
    sideEffects: true,
  },
  // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
  // using the extension .module.css
  {
    test: cssModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
      modules: {
        mode: "local",
        getLocalIdent: getCSSModuleLocalIdent,
      },
    }),
  },
  // Opt-in support for SASS (using .scss or .sass extensions).
  // By default we support SASS Modules with the
  // extensions .module.scss or .module.sass
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        modules: {
          mode: "icss",
        },
      },
      "sass-loader"
    ),
    // Don't consider CSS imports dead code even if the
    // containing package claims to have no side effects.
    // Remove this when webpack adds a warning or an error for this.
    // See https://github.com/webpack/webpack/issues/6571
    sideEffects: true,
  },
  // Adds support for CSS Modules, but using SASS
  // using the extension .module.scss or .module.sass
  {
    test: sassModuleRegex,
    use: getStyleLoaders(
      {
        importLoaders: 3,
        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        modules: {
          mode: "local",
          getLocalIdent: getCSSModuleLocalIdent,
        },
      },
      "sass-loader"
    ),
  },
];
```

### 加前缀

postcss-loader

根据[官方](https://webpack.js.org/loaders/postcss-loader)文档，需要添加一个 postcss.config.js 配置文件

加前缀还要安装 autoprefixer

`npm install postcss-loader autoprefixer --save-dev`

配置文件内引入 autoprefixer

![](../images/e836eac321ee3cb45f975b378338d650.png)

## JS

### swc

[swc-loader](https://swc.rs/docs/usage/swc-loader)  
和 babel 一样的定位，基于 Rust，速度更快些

### babel

`npm install --save-dev babel-loader @babel/core`

`npm install @babel/preset-env --save-dev`

babel-loader 是 babel 和 webpack 之间通信的桥梁

preset-env 是将 JS 转成对应 ECMAScript 版本的工具，包含了转成 ES5 的各种规则

可以在 webpack 配置文件的 options 内直接写，也可以在项目根目录新建一个[.babelrc](https://babeljs.io/setup#installation),
把 options 内的配置都挪到.babelrc 里面

```js
{
  test: /\.js/,
  exclude: /node_modules/,
  use: [{
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }]
}
```

babel 可以解析 ES6 大部分语法特性，但是无法解析 `class` 、静态属性、块级作用域，还有很多大于 ES6 版本的语法特性，如装饰器  
完全转换成 ES5 可以安装对应的插件

```bash
npm i @babel/plugin-proposal-class-properties @babel/plugin-transform-block-scoping @babel/plugin-transform-classes -D
```

然后在`.babelrc`文件中

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-classes"
  ]
}
```

#### pollyfill（适合业务代码）

比如 IE 兼容 Promise 对象。已废弃

`npm install --save @babel/polyfill`

在需要兼容的页面的 JS 顶部引入

```js
import "@babel/polyfill";
```

![](../images/c9f03d94b0a9c0f0f4bb38dc79a23251.png)

[官网说明](https://babeljs.io/docs/en/babel-polyfill)

pollyfill 会通过全局配置的方式进行解析，容易污染其他代码。适合业务代码

自己写插件：可以选择 transform-runtime

#### transform-runtime（适合自己开发库）

[官网](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

`npm install --save @babel/runtime`

如果用到 corejs，目前官网推荐是 2.x 版本

需要额外安装

`npm install --save @babel/runtime-corejs2`

```js
options: {
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "absoluteRuntime": false,
      "corejs": 2,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    }]
  ]
}
```

#### presets

引入安装的\@babel/preset-env

preset 如果有多个配置，同样也是从后往前

##### useBuiltIns

如果不需要所有的语法都转成 ES6，只是用到的语法去处理

不需要再 import

[官网说明](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)

useBuiltIns 还需要依赖 core-js。官网目前推荐的是 2.x

`npm install --save core-js@2`

The polyfill is provided as a convenience but you should use it with
\@babel/preset-env and the useBuiltIns option

```js
options: {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
      },
    ],
  ];
}
```

##### targets

[官网](https://babeljs.io/docs/en/babel-preset-env#targets)

设置浏览器版本

```js
options: {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        targets: {
          ie: "10", //最低版本
        },
      },
    ],
  ];
}
```

## 数据

JSON 本身就支持，不需要安装额外的 loader

如果是其他，CSV、TSV 可以用 csv-loader，XML 用 xml-loader

## 自定义 loader

本质上就是一个函数，但是不能用箭头函数，this 指向会被改变

函数内需要通过 this.query 获取到配置参数

见[Writing a Loader](https://webpack.js.org/contribute/writing-a-loader/)
