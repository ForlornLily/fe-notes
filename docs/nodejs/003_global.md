# 全局对象和全局变量

Node.js 全局对象：`global`

所有全局变量（除了 global 本身）都是 global 对象的属性

直接可以使用的，比如`console`

## require

判断当前服务是否为 master 进程

```js
console.log(require.main === module); // false 表示是通过 require 引入的
```

## cluster

判断 node 集群中当前服务器是否为主服务

```js
const cluster = require("cluster");
// cluster.isMaster 为 true 表示是 master 服务
```
