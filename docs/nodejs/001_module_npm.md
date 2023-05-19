# 包与 npm

包和 npm 是将模块联系起来的一种机制

## CommonJS 包规范

由包结构和包描述文件两部分组成

- 包结构：完全符合 CommonJS 规范的包目录应该符合如下这些文件

  - package.json：包描述文件
  - bin：用于存放可执行二进制文件的目录
  - lib：用于存放 JavaScript 代码的目录
  - doc：存放文档
  - test：单元测试用例

- 包描述文件：用于描述非代码相关的信息，即 package.json，位于包的根目录  
  各个字段的含义可以参考[The package.json guide](https://nodejs.dev/the-package-json-guide)

## npm

CommonJS 包规范是理论，npm 是对它的一种实践  
npm 帮助完成第三方模块的发布、安装、依赖等

### 查看帮助

运行 `npm` 可以查看帮助

- `npm init`：初始化项目
- `npm init –y`: 一路 yes，用默认的 package.json
-

### 安装依赖

- `npm install sth.`
- `npm install sth. -g`：将一个包安装为全局可用的执行命令
- `npm install sth. --registry=otherurl`：设置安装源

### 钩子

package.json 的 scripts 字段就是为了让包在安装或者卸载过程中提供钩子机制

```json
"scripts": {
  "preinstall": "preinstall. js",
  "install": "install. js",
  "uninstall": "uninstall. js",
  "test": "test. js"
}
```

### 发布

- 注册：`npm adduser`
- 发布：`npm publish <folder>`
- 权限管理：一般来说一个包只有一个人拥有权限发布。如果要多人进行发布，通过 `npm owner` 进行管理

### 包分析

- `npm ls`：分析当前路径下能通过模块路径找到的所有包，生成依赖树  
  部分显示如下

```
+-- gray-matter@4.0.2
| +-- js-yaml@3.13.1
| | +-- argparse@1.0.10
| | | `-- sprintf-js@1.0.3
| | `-- esprima@4.0.1
| +-- kind-of@6.0.3
| +-- section-matter@1.0.0
| | +-- extend-shallow@2.0.1
| | | `-- is-extendable@0.1.1
| | `-- kind-of@6.0.3 deduped
| `-- strip-bom-string@1.0.0
```

### npx

在当前文件夹的执行 node_modules/.bin 下的本地命令，如果没有的话会从 npm 下载然后执行。

```bash
#全局安装下的webpack
webpack –v
```

```bash
#运行当前目录的webpack
npx webpack –v
```

## 语义版本号 X.Y.Z

参考[Semantic Versioning](https://semver.org/)  
主版本号.次版本号.修订号

1. 主版本号：当你做了不兼容的 API 修改
2. 次版本号：当你做了向下兼容的功能性新增
3. 修订号：当你做了向下兼容的问题修正
   - \^X.Y.Z：升级次版本号和修订号，表示选择 X.Y.Z 到 X+1.0.0 之间最新的版本
   - \~X.Y.Z：只升级修订号，表示选择 X.Y.Z 到 X.Y+1.0 之间最新的版本
   - \*：升级到最新版本
