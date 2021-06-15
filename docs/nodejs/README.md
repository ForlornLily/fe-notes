# 概要

参考

- [七天学会 NodeJS](http://nqdeng.github.io/7-days-nodejs/)
- [《Node.js 实战（第 2 版）》](http://www.ituring.com.cn/book/1993)
- [Node.js 入门指南和实践](https://juejin.im/post/5e0006c251882512795675f9)
- [《深入浅出 Node.js》](https://www.ituring.com.cn/book/1290)

## 安装

见[官网](https://nodejs.org/en/download/package-manager/)

## windows 安装(个人偏好)

npx 启动路径不能带空格，Program Files 要全部替换掉，暂时改成 project\\node

查看全局安装路径：

`npm config ls`

修改全局安装路径，还要修改环境变量

```bash
npm config set prefix "D:\\project\\node\\node_global"
npm config set cache "D:\\project\\node\\node_cache"
```

新建名字为 NODE_PATH

设置值为`D:\\project\\node \\node_global\\node_modules`

在 path 内修改`AppData\\Roaming\\npm`

为`D:\\project\\node\\node_global`

如果遇到 permission not permitted，修改 temp 文件路径

`npm config set tmp`

## CentOS 下安装

```bash
#下载xz
wget https://nodejs.org/dist/v12.13.1/node-v12.13.1-linux-x64.tar.xz
#解压
xz -d node-v12.13.1-linux-x64.tar.xz
tar -xvf  node-v12.13.1-linux-x64.tar
#进入解压目录
cd node-v10.9.0-linux-x64/
#执行node命令 查看版本
./bin/node -v
#建立软连接，方便全局使用
#在这之前用`pwd`查看node文件夹的完整目录
pwd
#拿到完整目录后ln建立软连接。假设完整路径是/root/node/bin/node
ln -s /root/node/bin/node /usr/local/bin/node
#建立npm软连接。目录同node
ln -s /root/node/bin/npm /usr/local/bin/npm
#检查是否关联。如果软连接成功，node -v会输出对应的nodejs版本。同样npm -v也是
node -v
```

重命名
`mv oldname newname`

### 删除软连接

`ln`命令如果在上述步骤关联失败或者重新关联的时候提示方式已存在：`failed to create symbolic link '/usr/local/bin/node': File exists`  
可以通过删除文件重新建立来解决

```bash
#删除关联的文件夹
rm -rf /usr/local/bin
#新建关联的文件夹
mkdir /usr/local/bin
#建立软连接
ln -s /root/node/bin/node /usr/local/bin/node
```

### Ubuntu 下 nvm 安装

使用 `nvm` 进行安装

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.4/install.sh | bash
source ~/.bashrc
```

执行命令查看是否安装成功

```bash
nvm --version
```

安装 nodejs

```bash
nvm install v12.8.3
```

## 用处

JS 是脚本语言，脚本语言都需要一个解析器才能运行。对于写在 HTML 页面里的 JS，浏览器充当了解析器的角色。而对于需要独立运行的 JS，NodeJS 就是一个解析器。

![](../images/ec4fb3e732d2c723cb22fb7bcd0147fc.png)

- libuv：作为跨平台的基础组件
