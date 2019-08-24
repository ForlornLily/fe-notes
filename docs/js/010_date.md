# Date

注意`new Date()`时 IE 和 Safari 的兼容性

没有兼容问题的是

```js
new Date(yyyy, MM, dd, HH, mm, ss) //月份要减1。比如设3月，MM是2
```

计算的是 1970.01.01 开始经过的毫秒数

## 常用方法

getTime() //返回毫秒数

getYear

getMonth :0 表示 1 月

getDate

getHours

getMinutes

getSeconds

## 兼容性

大部分浏览器：年/月/日 时:分:秒

完全兼容，将日期完全拆开

注意月份要减 1

```js
value = value.split(/\D/)
for (var i = 0; i < 6; i++) {
  if (i == 1) {
    value[i] = value[i] ? Number(value[i]) - 1 : '' //月份需要减1
  } else {
    value[i] = value[i] ? Number(value[i]) : ''
  }
}
d = new Date(value[0], value[1], value[2], value[3], value[4], value[5])
```
