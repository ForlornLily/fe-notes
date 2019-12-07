# shell

通过 MongoDB shell 进行实例的交互，基本上可以通过 shell 实现所有逻辑  
Shell 是一个 JS 解释器，也就是说可以运行 JS，但是和 NodeJS 不一样，没法用`console.log`等  
支持 ES6，可以用`let`, `Promise`

## 数据库

`db`查看当前所在的数据库，默认是`test`

```bash
> db
test
```

`use`使用指定的数据库，如果数据库名不存在，会自动创建

```bash
> use blog
switched to db blog
```

## 插入

`insert`: 插入一条文档到集合里面

```bash
> const post = {
  "title": "hello",
  "date": new Date()
}
> db.blog.insert(post)
WriteResult({ "nInserted" : 1 })
> db.blog.find()
{ "_id" : ObjectId("5deb0878e0820d679e54d495"), "title" : "hello", "date" : ISODate("2019-12-07T02:02:37.582Z") }
>
```

## 查找

`find`: 集合的方法
