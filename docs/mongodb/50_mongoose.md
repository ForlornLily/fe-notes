# mongoose

参考[学习 Mongodb 之 mongoose](https://juejin.im/entry/5927a3c0a22b9d005725c2a7)  
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

## model

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
