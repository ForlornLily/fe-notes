# 网络编程

Node 提供了一些模块用来处理网络请求

- [Net](https://nodejs.org/docs/latest/api/net.html)：处理 TCP
- [dgram](https://nodejs.org/docs/latest/api/dgram.html)（UDP/Datagram）：处理 UDP
- [HTTP](https://nodejs.org/docs/latest/api/http.html)
- [HTTPS](https://nodejs.org/docs/latest/api/https.html)
- [HTTP/2](https://nodejs.org/docs/latest/api/http2.html)

## TCP

关于 TCP 的介绍，见[网络](../tcp/01_tcp.md)  
可以用 Node 建立一个服务器

```js
const net = require('net')

const server = net.createServer((socket) => {
  socket.write('hello')

  socket.on('end', () => console.log('end'))
})

server.on('connection', () => console.log('connect'))

server.listen(666, () => console.log('server open'))
```

windows 下打开 cmd，输入

```bash
telnet 127.0.0.1 666
```

在 cmd 内可以看到写入的 "hello" 字符串  
如果提示没有 telnet 这个命令，可以在控制面板打开  
控制面板 → 程序和功能 → 打开或关闭 Windows 功能，勾上 telnet 客户端

Node 也可以自己建立客户端

```js
// server 端
const net = require('net')

const server = net.createServer((socket) => {
  socket.write('hello')

  // data 是 Buffer 对象
  socket.on('data', (data) => console.log(data.toString())) // "hey"
})
server.listen(666, () => console.log('server open'))
```

```js
// client 端
const net = require('net')

const client = net.connect(
  {
    port: 666,
  },
  () => {
    console.log('connect')
    client.write('hey')
  }
)

client.on('data', (data) => console.log(data.toString())) // "hello"

client.on('end', () => console.log('end'))
```

### 事件

对于服务端，具有以下事件

- listen
- connection：连接到该服务端时触发
- close / error

服务端可以和多个客户端连接，每个连接都是一个 Stream 对象，可以使用 `pipe` 等  
这些对象常用的事件：

- data：当一端调用 `write` 发送数据时，另一端会触发 `data`。  
  但不一定每次write都触发，出于性能考虑，可能会合并多个write数据，只触发一次data
- end：任意一端终止
- connect：用于客户端，连接到服务端时触发
- drain：调用`write`时触发
- error / close
- timeout：连接一定时间后不再活跃

## UDP

```js
// 服务端
const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

socket.on('message', (msg, remoteInfo) => {
  console.log(`${msg} from ${remoteInfo.port}`) // port: 发送者端口
  // hello from 62094
})

socket.on('listening', () => console.log('listening'))

socket.bind(666) // 绑定 666 端口
```

```js
// 客户端
const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

// 向 666 端口发送信息
socket.send('hello', 666, () => {
  console.log('send')
  socket.close()
})
```

## HTTP

继承自 net 模块  
HTTP 模块实际上只做两件事情：处理 HTTP 请求（ServerRequest 对象）和发送 HTTP 响应（ServerResponse 对象）

## websocket

对 Websocket 的介绍见[websocket](../network/09_websocket.md)  
Node 没有内置的 Websocket，可以用社区 `ws` 模块
