# 排序

[参考](https://github.com/RayJune/Elegant-JavaScript-Sorting-Algorithms)

## 冒泡排序

```js
let arrs = [3, 6, 1, 2, 8]
function bubbleSort() {
  let length = arrs.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arrs[j] > arrs[j + 1]) swap(arrs, j, j + 1)
    }
  }
}
function swap(array, index, index2) {
  let tmp = array[index]
  array[index] = array[index2]
  array[index2] = tmp
}
```

### 复杂度为 O(n^2)

比较稳定

## 选择排序

找出数组的最小值，放在第一位。然后再找第二小，放第二位

```js
function selectionSort() {
  let minIndex,
    length = arrs.length
  for (let i = 0; i < length; i++) {
    minIndex = i //假设第一个值是最小值
    for (let j = i; j < length; j++) {
      if (arrs[minIndex] > arrs[j]) {
        //如果存在更小的值
        minIndex = j
      }
    }
    if (i != minIndex) {
      //将i的位置替换成最小值
      swap(arrs, i, minIndex)
    }
  }
}
```

### 复杂度为 O(n^2)

不稳定。

优点是交换的时候最坏只有 O(n)次

## 插入排序

假设第一项已经排好序，从后往前一个个比较，如果待插入元素小于已排序元素，则已排序元素往后移动一位。以此类推。

也就是移动的是已排序的元素。

```js
function insertSort(arr) {
  let tmp = arr.slice()
  const length = tmp.length
  let minValue
  for (let i = 1; i < length; i++) {
    minValue = tmp[i]
    let j = i
    while (j > 0 && tmp[j - 1] > minValue) {
      tmp[j] = tmp[j - 1]
      j--
    }
    tmp[j] = minValue
  }
  return tmp
}
```

### 复杂度为 O(n^2)

比较稳定。

特别适合快要排序完成的数组

### 希尔排序

插入排序的改良版本

插入排序每次只能将数据移动一位，希尔排序可以设置移动的位数（`gap`），当 gap = 1 的时候，就相当于插入排序了

```js
function shellSort(arr) {
  let tmp = arr.slice()
  const length = tmp.length
  let gap = Math.floor(length / 2)
  let minValue
  while (gap > 0) {
    for (let i = gap; i < length; i++) {
      minValue = tmp[i]
      let j = i
      while (j > 0 && tmp[j - gap] > minValue) {
        tmp[j] = tmp[j - gap]
        //j = j - gap;
        j -= gap
      }
      tmp[j] = minValue
    }
    gap = Math.floor(gap / 2)
  }
  return tmp
}
```

## 归并排序

把数组分开，直到最后只剩下每一项只有两个元素

然后对这两个元素排序

再合并另一组，对 4 个元素排序

以此类推

```js
//将数组分开
function mergeSort(arr) {
  const length = arr.length
  if (length < 2) {
    return arr
  }
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
//合并
function merge(left, right) {
  let tmp = []
  while (left.length > 0 && right.length > 0) {
    let minValue = left[0] <= right[0] ? left.shift() : right.shift()
    tmp.push(minValue)
  }
  return tmp.concat(left, right)
}
```

### 复杂度为 O(nlog(n))

稳定

非常适合于链表排序

## 快速排序

1.  以数组里的某一项作为基准（比如初始数组的第一项）；

2.  所有小于基准的放左边，大于的放基准的右边；

3.  递归左边区域和右边区域

```js
function quickSort(arr) {
  let base = arr[0] //基准元素
  let left = [],
    right = []
  const length = arr.length
  if (length < 2) {
    return arr
  }
  for (let i = 1; i < length; i++) {
    if (arr[i] < base) {
      //小于基准元素的放左边
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([base], quickSort(right))
}
```

### 复杂度为 O(nlogn)

通常是 O(nlogn)，最坏是 O(n\^2)

### 改良

设置基准值是数组的中间值。

边递归边交换，减少临时数组的创建。

```js
function betterQuick(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let baseIndex = Math.floor((left + right) / 2) //基准值为中间值
    let newBase = divide(arr, baseIndex, left, right)
    betterQuick(arr, left, newBase - 1)
    betterQuick(arr, newBase + 1, right)
  }
  return arr
}
function divide(arr, baseIndex, left, right) {
  let baseValue = arr[baseIndex]
  let newBase = left
  swap(arr, baseIndex, right)
  for (let i = left; i < right; i++) {
    if (arr[i] < baseValue) {
      swap(arr, i, newBase)
      newBase++
    }
  }
  swap(arr, right, newBase)
  return newBase
}
```

## 堆排序

把数组做成堆，然后移动数组的第一项到堆的末尾（已排序区域），再把剩余的数据重新堆化。

堆化的方法见[堆](./007_heap.md)的`shiftDown`方法

比如把一个数组升序排序：

1.  先创建一个最大堆

2.  最大堆的根节点就会是最大值。把这个最大值移动到堆的末尾，并让堆的长度减 1

3.  重新调整移动后根节点，再重复步骤 2

```js
function heapSort(arr) {
  let length = arr.length
  //把数组变成最大堆
  for (let i = Math.floor(length / 2); i--; ) {
    heapify(arr, i, length)
  }
  while (length > 1) {
    length--
    swap(arr, 0, length)
    heapify(arr, 0, length)
  }
}
function heapify(arr, index, size) {
  let currentIndex = index,
    left = 2 * index + 1,
    right = left + 1
  if (left < size && arr[currentIndex] < arr[left]) {
    currentIndex = left
  }
  if (right < size && arr[currentIndex] < arr[right]) {
    currentIndex = right
  }
  if (currentIndex != index) {
    swap(arr, index, currentIndex)
    heapify(arr, currentIndex, size)
  }
}
```

### 复杂度 O(nlogn)

不稳定

## 适用场景总结

- 数据几乎快排序完成时：插入排序

- 数据量小，对效率要求不高，代码简单时：

性能大小：希尔排序 \> 插入排序 \> 冒泡排序 \> 选择排序

- 数据量大，要求稳定：堆排序

- 数据量大，要求效率高，而且要相对稳定：归并排序

- 数据量大，要求最好的平均效率

性能大小：快速排序 \> 堆排序 \> 归并排序

选择排序绝对没用吗？

选择排序只需要 O(n) 次交换，这一点好于冒泡排序
