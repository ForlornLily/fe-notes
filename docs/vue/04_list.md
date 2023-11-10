# 列表渲染

## 数组

修改原本数组内容的方法会被 Vue 检测到

### 无法检测的内容

- 不修改数组的方法，比如 filter, concat

解决方案：再次完整赋值

```js
items = items.filter(function (item) {
  return item.message.match(/Foo/);
});
```

- 直接修改数组的索引，比如 item[1] = "123"

解决方法：

1.  \$set

2.  splice: items.splice(index, 1, newValue)

- 直接修改数组的 length 属性

解决方法：splice

## 对象

### 无法检测的内容

对象 key 的新增或者删除

解决方案：

1.  \$set

2.  再次完整赋值

```js
userProfile = Object.assign({}, userProfile, {
  age: 27,
  favoriteColor: "Vue Green",
});
```

### 原因

Vue 通过`Object.defineProperty`来将对象的 key 转成 getter/setter 的形式来追踪变化。

所以只能检测值的改变，不能追踪新增和删除
