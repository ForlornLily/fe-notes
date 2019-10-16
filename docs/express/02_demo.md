# 简单 demo

```js
const express = require('express')
const app = express()
const port = 3000
app.all('*', function(req, res, next) {
  //允许跨域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})
const path = require('path')
const mediaPath = path.join(__dirname, 'src/static/media')
const fs = require('fs')
app.get('/media', (req, res, next) => {
  fs.readdir(mediaPath, (err, data) => {
    if (err) {
      next(err)
      return
    }
    res.send(data)
  })
})
app.get('/single', (req, res, next) => {
  const name = req.query && req.query.name
  if (!name) {
    throw new Error('name is required')
    return
  }
  fs.readFile(`${mediaPath}/${name}`, (err, data) => {
    if (err) {
      next(err)
      return
    }
    res.send(data)
  })
})

app.listen(port, () => console.log(`app running in ${port}`))
```
