# 概要

本节大部分是[七天学会 NodeJS](http://nqdeng.github.io/7-days-nodejs/), [《Node.js 实战（第 2 版）》](http://www.ituring.com.cn/book/1993)的笔记;  
包含了少量的后台知识

## 安装(个人兴趣)

npx 启动路径不能带空格，Program Files 要全部替换掉，暂时改成 project\\node

查看全局安装路径：

`npm config ls`

修改全局安装路径，还要修改环境变量

```shell
npm config set prefix "D:\\project\\node\\node_global"
npm config set cache "D:\\project\\node\\node_cache"
```

新建名字为 NODE_PATH

设置值为`D:\\project\\node \\node_global\\node_modules`

在 path 内修改`AppData\\Roaming\\npm`

为`D:\\project\\node\\node_global`

如果遇到 permission not permitted，修改 temp 文件路径

`npm config set tmp`

### CentOS 下安装

```shell
#下载
wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz
#解压
tar xf  node-v10.9.0-linux-x64.tar.xz
#进入解压目录
cd node-v10.9.0-linux-x64/
#执行node命令 查看版本
./bin/node -v
```

重命名
`mv oldname newname`

## 用处

JS 是脚本语言，脚本语言都需要一个解析器才能运行。对于写在 HTML 页面里的 JS，浏览器充当了解析器的角色。而对于需要独立运行的 JS，NodeJS 就是一个解析器。

![](../images/ec4fb3e732d2c723cb22fb7bcd0147fc.png)

## CommonJS

NodeJS 是 CommonJS 规范的一个实现

`require`引入，`module.exports`导出

- 每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见

- CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性

![](../images/3c06c487350e6d8409181caf2a027850.png)

![](../images/cf2f9891e4495b844346771dc726f6ef.png)
