# 调试

以下基于 [VS Code](https://code.visualstudio.com/)  
参考

- [VSCode 调试中 launch.json 配置不完全指南](https://www.barretlee.com/blog/2019/03/18/debugging-in-vscode-tutorial/)

## 调试 JavaScript

在根文件下新建配置文件：.vscode/launch.json  
JSON 内容如下

```json
{
  "name": "调试 Node.js 程序 - args",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "node",
  "args": ["${workspaceFolder}/src/index.js"]
}
```

## typescript

确保安装了依赖 `typescript` 以及 `ts-node`

```json
{
  "name": "调试 TS Node 程序 - args",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "node",
  "runtimeArgs": ["-r", "ts-node/register"],
  "args": ["${workspaceFolder}/src/index.ts"]
}
```

上述实际执行代码为

```bash
node --inspect-brk=DEBUG_PORT -r ts-node/register ./src/index.ts
```
