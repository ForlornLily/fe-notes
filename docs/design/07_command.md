# 命令模式

command pattern：执行某些特定事情的指令  
常见场景： 发送请求，但是不知道接收方  
比如顾客点餐，客人向厨师发送请求，但完全不知道厨师的身份信息  
把订餐请求封装成一个 command，让请求可以在程序中被四处传递

## 宏命令

宏命令是一组命令的集合。  
假设有一个软件，在启动电脑之后，可以自动运行微信、浏览器、steam  
大致上可能这么实现

```js
const openWechat = {
  excute() {
    console.log("打开微信");
  },
};
const openBrowser = {
  excute() {
    console.log("打开浏览器");
  },
};
const openSteam = {
  excute() {
    console.log("打开steam");
  },
};

function MacroCommand() {
  this.list = [];
}
MacroCommand.prototype.add = function (fn) {
  this.list.push(fn);
};
MacroCommand.prototype.excute = function () {
  const list = this.list,
    length = list.length;
  for (let i = 0; i < length; i++) {
    list[i].excute();
  }
};

const command = new MacroCommand();
command.add(openWechat);
command.add(openBrowser);
command.add(openSteam);

command.excute(openSteam);
```
