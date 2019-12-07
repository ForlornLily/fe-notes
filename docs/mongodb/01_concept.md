# 基础概念

## 文档

`{"hello": "world"}`，对应 mySQL 的行(row)  
文档(document)就是`{key1: value1, key2: value2}`的一个对象

- `key`和`value`都区分大小写
- key 是字符串，`.`和`$`作为保留字，一般不用
- 和 JS 不同，MongoDB 的`key`是不允许重复声明的
- value 可以是不同的数据类型

## 集合

多个文档组成的一个集合(collection)。对应 mySQL 的表(table)  
collection 可以理解成 vue 的单文件，单文件内会嵌套业务组件(文档)

- 动态模式：集合内的文档类型是任意的，比如文档 A 内的数据类型和 B 不同
- 集合名是字符串
  - 不能是空
  - 不用`$`
  - 不能以`system.`开头，`system.`是系统内部集合的前缀
  - 推荐用`.`来命名子集合，比如写一个博客，用`blog.user`代表用户管理，`blog.posts`代表文章发布

## 数据库

多个集合组成一个数据库(database)  
一个 MongoDB 实例，可以有多个数据库

- 相互独立：数据库拥有各自的权限，存储在不同的文件内
- 数据库名是字符串，最终会变成硬盘上的文件，所以会有较多的限制
  - 不能是空
  - 不能有特殊字符，一般就只剩下数字和字母
  - 区分大小写，建议全部小写
  - 最多 64 字节
  - `admin`, `local`, `config`是 MongoDB 默认就存在的数据库

## 命名空间

针对集合来说。  
命名空间(namespace) = 数据库名.集合名  
比如访问 website 数据库的 blog.user 集合，那么这个集合的命名空间就是`website.blog.user`  
命名空间的长度不要大于 100 字节

## 启动

实际上是启动一个服务器，默认端口号是 27017。浏览器可以通过`http://127.0.0.1:27017/` 来访问  
启动之前需要保证服务器所在的文件夹可读写  
可通过`mongod`设置。比如

```bash
mongod -dbpath=d:/project/database
```

再新打开一个 cmd，找到 MongoDB 的 exe，通过输入`mongo`，进入 [shell](./02_shell.md)

```bash
D:\Program Files\MongoDB\Server\4.2\bin>mongo
MongoDB shell version v4.2.1
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
```
