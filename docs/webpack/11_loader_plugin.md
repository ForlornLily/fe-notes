# loader 和 plugin

loader，它就是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程；

对于 plugin，它就是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点

例如

- run：开始编译

- make：从 entry 开始递归分析依赖并对依赖进行 build

- build-module：使用 loader 加载文件并 build 模块

- normal-module-loader：对 loader 加载的文件用 acorn 编译，生成抽象语法树 AST

- program：开始对 AST 进行遍历，当遇到 require 时触发 call require 事件

- seal：所有依赖 build 完成，开始对 chunk 进行优化（抽取公共模块、加 hash 等）

- optimize-chunk-assets：压缩代码

- emit：把各个 chunk 输出到结果文件
