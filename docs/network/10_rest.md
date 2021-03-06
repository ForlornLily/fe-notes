# REST

Representational State Transfer: 表现层状态转换

一种约定，不是标准

如果一个架构符合 REST 原则，就称它为 RESTful 架构

表单层："资源"是一种信息实体，它可以有多种外在表现形式。我们把"资源"具体呈现出来的形式，叫做它的"表现层"

比如图片可以用 JPG 格式表现，也可以用 PNG 格式

HTTP 请求的头信息中的 Accept 和 Content-Type 字段是对“表现层”的描述。

HTTP 是一个无状态协议，状态都存在服务端

想要服务端发生状态转换，就需要建立在表现层上

## RESTful

1.  每一个 URI 代表一种资源；

2.  客户端和服务器之间，传递这种资源的某种表现层；

3.  客户端通过四个 HTTP 动词（get, post, put,
    delete），对服务器端资源进行操作，实现"表现层状态转化"。

URI 应该使用名词，不是 getSth.而是 sth.

在 HTTP 里面使用动词，明确 get，post，put，delete 的作用，不要混着用

使用正确的状态码。

也就是每次访问同一个接口，只要明确请求方法，就知道要做什么，不需要 URI 指明
