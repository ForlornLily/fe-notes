# Jest

参考

- [官网](https://jestjs.io/)

## debug

```
- .vscode
  - launch.json
```

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/node_modules/jest/bin/jest.js ",
      "console": "integratedTerminal"
    }
  ]
}
```
