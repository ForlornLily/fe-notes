# Child Process

参考

- [Node.js 中的 child_process 及进程通信](https://www.byvoid.com/zhs/blog/node-child-process-ipc)
- [child_process](https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/child_process.md)
- [API](https://nodejs.org/api/child_process.html)  
  创建子进程的一个模块最基本的是`spawn`  
  `exec`，`execFile`，`fork` 都是对 `spawn` 进行的封装

## 起源

单线程：这里的单线程是指 JavaScript 执行。NodeJS 自身其实是多线程的，比如 I/O 任务会有另外的线程池，并且可以并行  
单线程的好处在于不需要像多线程那样考虑状态的同步问题，不会有死锁，也没有线程上下文交换的性能开销  
但也带来了一些弱点：

- 不能利用多核 CPU
- 一个错误会引起整个应用退出
- 大量占用 CPU 导致不能继续调用异步 I/O：  
  就像浏览器内 JavaScript 会阻塞 UI 渲染一样，NodeJS 内长时间的 CPU 占用会导致后续的异步 I/O 发不出调用，已完成的异步 I/O 回调函数也得不到及时执行

为了解决这个问题，HTML5 提出了 Web Workers 标准，Web Workers 可以创建工作线程来进行计算。  
工作线程为了不阻塞主线程，通过消息传递的形式来传递运行结果。也导致工作线程无法访问主线程的 UI  
NodeJS 采用了和 Web Worker 相同的思路来解决大计算量的问题：child_process

将计算分发到各个子进程，通过进程之间的事件消息来传递结果。即 Master-Worker 的管理方式

## spawn

比如在一个 js 文件内允许 `npm run dev`

```js
const childProcess = require("child_process");

const { spawn } = childProcess;

const projectPath = "D:\\filetest\\rocket-test";
const child = spawn(
  process.platform === "win32" ? "npm.cmd" : "npm", //兼容windows
  ["run", "dev"],
  {
    cwd: projectPath, //执行命令所在的文件路径
  }
);

child.stdout.setEncoding("utf8"); //输出成字符串，默认是 buffer
child.stdout.on("data", function (data) {
  console.log(data);
});
```

## exec

创建一个 shell，然后在 shell 里执行命令  
上述内容相当于

```bash
cd D:\filetest\rocket-test
node start.js
```

```js
//start.js
const child_process = require("child_process");
child_process.exec("npm run dev", function (err, stdout, stderr) {
  console.log(stdout);
});
```

`execSync` 是同步版

## execFile

和 `exec` 的区别在于没有创建 shell，更加轻量

## fork

直接运行 Node.js 文件，比如 `fork("./start.js")`  
相当于 `spawn("node", ["./start.js"])`  
在子进程和父进程之间建立了一个 IPC 管道，可以互相通信  
只能运行 JavaScript 语言

```js
//dist/index.js
process.send({ hello: "world" });
```

```js
const childProcess = require("child_process");

const { fork } = childProcess;

const child = fork("./dist/index.js");
child.on("message", (data) => {
  console.log(data); // { hello: "world" }
});
```
