# 组合模式

Composite Pattern：树形结构  
好处是隐藏各个叶子节点之间的差异，让整棵树的使用和叶子节点的使用具有一致性

比如[命令模式的宏命令](./07_command.md#宏命令)的例子  
调用命令都使用 `excute` 方法，只不过各个小对象的 `excute` 执行逻辑不同

## 请求传递

遵循的逻辑：

- 传递到叶子节点则执行命令
- 如果不是叶子节点，则往下传递

仍然以命令模式为例。这次要做的事情是

- 打开浏览器，并访问 GitHub
- 打开 steam，并启动《奥里与迷失森林》

```js
function MacroCommand() {
  this.list = []
}
MacroCommand.prototype.add = function (fn) {
  this.list.push(fn)
}
MacroCommand.prototype.excute = function () {
  const list = this.list,
    length = list.length
  for (let i = 0; i < length; i++) {
    list[i].excute()
  }
}

//浏览器
const openBrowser = {
  excute() {
    console.log("打开浏览器")
  },
}
const visitGithub = {
  excute() {
    console.log("访问github")
  },
}
const browserCommand = new MacroCommand()
browserCommand.add(openBrowser)
browserCommand.add(visitGithub)

//steam
const openSteam = {
  excute() {
    console.log("打开steam")
  },
}
const playOri = {
  excute() {
    console.log("打开Ori and the Blind Forest")
  },
}

const steamCommand = new MacroCommand()
steamCommand.add(openSteam)
steamCommand.add(playOri)

const command = new MacroCommand()
command.add(browserCommand)
command.add(steamCommand)

command.excute()
```

## 注意点

1. 组合模式不是父子关系。能执行是因为具有相同的接口，即上述的 `excute` 方法
2. 一致性：操作一致，所有的叶子对象都会执行。而不能只执行其中部分
3. 一对一：叶子对象不可以映射对个组合对象，这样会导致执行两次甚至多次
