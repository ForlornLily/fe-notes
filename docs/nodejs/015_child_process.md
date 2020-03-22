# Child Process

参考

- [Node.js 中的 child_process 及进程通信](https://www.byvoid.com/zhs/blog/node-child-process-ipc)
- [child_process](https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/child_process.md)
- [API](https://nodejs.org/api/child_process.html)  
  创建子进程的一个模块
  最基本的是 `spawn`  
  `exec`，`execFile`，`fork` 都是对 `spawn` 进行的封装

## spawn

比如在一个 js 文件内允许 `npm run dev`

```js
const childProcess = require('child_process')

const { spawn } = childProcess

const projectPath = 'D:\\filetest\\rocket-test'
const child = spawn(
  process.platform === 'win32' ? 'npm.cmd' : 'npm', //兼容windows
  ['run', 'dev'],
  {
    cwd: projectPath //执行命令所在的文件路径
  }
)

child.stdout.setEncoding('utf8') //输出成字符串，默认是 buffer
child.stdout.on('data', function(data) {
  console.log(data)
})
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
const child_process = require('child_process')
child_process.exec('npm run dev', function(err, stdout, stderr) {
  console.log(stdout)
})
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
process.send({ hello: 'world' })
```

```js
const childProcess = require('child_process')

const { fork } = childProcess

const child = fork('./dist/index.js')
child.on('message', data => {
  console.log(data) // { hello: "world" }
})
```
