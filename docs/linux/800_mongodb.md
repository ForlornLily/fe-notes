# MongoDB

NOSQL：不再使用 SQL 语句，即不要 select \* fromxxx 等 SQL 语言

参考[学习 Mongodb 之 mongoose](https://juejin.im/entry/5927a3c0a22b9d005725c2a7)

## 运行

cd D:\\Program Files\\MongoDB\\Server\\4.0\\bin

3.6 版本创建 data 路径，4.x 不再需要，安装时已经做好了。

~~mongod --dbpath=d:/data/db~~

## 创建用户

~~先运行 mongod --dbpath=d:/data/db（3.6 版本创建 data 路径，4.x 不再需要）~~

再新打开一个 cmd，进入 cd D:\\Program Files\\MongoDB\\Server\\4.0\\bin

直接输入`mongo`，进入 shell

![](../images/e5445f42c7e589e0a8c118a57eda3536.png)

使用 admin 数据库

\>use admin

![](../images/16cae66d56e666531d9bc73fa367e494.png)

\>db.createUser 创建用户。

\>db.auth 进行用户认证，返回 1 说明认证成功

- roles 用 root 有时候会有权限问题，不能用

db.createUser({user: "Forlorn",pwd: "123",roles:[{role: "readWrite",db:
"later"}]})

db.auth("Forlorn", "123")

## 增删改查

参考菜鸟教程

### 创建数据库

\>use 数据库名

\>db //处于当前新建的数据库

\>db. createCollection(集合名, {key:
value})（配置参数不配也可以跳过，整句话不要也可以，直接下面的 insert）

\>db.集合名(collections).insert({key: value, key:value})

![](../images/74cf17137e0bd722aca33edb54ac51f2.png)

### 插入数据

上面的 insert；

或者用 mongoimport 命令导入现成的 db 文件

## mongoose

model 下的 User 会自动关联数据库名 Users

```js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const newSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
})
const User = mongoose.model('later', newSchema)
const user = new User({
  title: 'hello',
  body: 'world'
})
user.save((err, res) => {
  console.log(res)
})
User.find((err, res) => {
  console.log(res)
})
//不写{ useNewUrlParser: true } 的话会报警告
mongoose.connect('mongodb://Forlorn:123@localhost/later', {
  useNewUrlParser: true
})
```

![](../images/05f643a20b49f6c1956f0cc5b82582b8.png)

![](../images/75b0c639597bedfebe75b2020ec1ff6d.png)

mongodb 内

![](../images/bc02f08ad096cee3d6736a40257b3e57.png)

### model

`mongoose.model("User", newSchema,"userseseseses...")`

也可以选择自定义 collection 的名字

通常 mongodb 是自动加 s，如果要自定义名字，就用第三个参数

或者

```js
var newSchema = new Schema(
  {
    //...
  },
  {
    collection: 'collectionName'
  }
)
```
