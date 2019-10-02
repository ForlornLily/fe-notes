# 时间复杂度

通常使用最差的时间复杂度来衡量一个算法的好坏

## O(1)

例如四则运算

```js
function increament(num) {
  return num + 1
}
```

假设传入 num 值为 1 和值为 2，increament 执行的时间都是一样的。也就是程序执行时间与数据量无关，那么这个算法复杂度是 O(1)

## O(n)

比如给定一个数组，要查找数组里的某一项并返回对应的索引

```js
function searArr(arr, num) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    if (arr[i] === num) {
      return i
    }
  }
}
const tmp = [1, 2, 3, 4, 5, 6]
searArr(tmp, 6)
```

那么最差的情况下，if 语句要判断 arr.length 次。

10 个值 10 次，1000 个值 1000 次，那么算法复杂度是 O(n);

## O(n^2)

n 的平方。比如冒泡排序

```js
for (let i = 0; i < length; i++) {
  for (let j = 0; j < length - 1; j++) {
    if (arrs[j] > arrs[j + 1]) swap(arrs, j, j + 1)
  }
}
```

if 语句最差的情况下要判断 n \* n 次

## 复杂度对比

![](../images/607269bd16eef554d1d5a35d616404ef.png)

### 排序复杂度概览

![](../images/575aabcd751f933f72b4173d37ab680b.png)

### 查找复杂度概览

![](../images/f2944de705d0826afe2e2c6216a8aafb.png)
