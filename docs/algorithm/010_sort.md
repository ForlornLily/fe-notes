# 排序

[参考](https://github.com/RayJune/Elegant-JavaScript-Sorting-Algorithms)

## 冒泡排序

依次比较，交换相邻的顺序

```ts
function swapList(list: number[], left: number, right: number) {
  const tmp = list[left];
  list[left] = list[right];
  list[right] = tmp;
}

function bubbleSort(list: number[]) {
  const length = list.length;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - 1; j += 1) {
      if (list[j] > list[j + 1]) {
        swapList(list, j, j + 1);
      }
    }
  }
  console.log("list", list);
}
```

### 复杂度为 O(n^2)

比较稳定

## 选择排序

1. 找到数组中最小的元素，将它和数组的第一个元素交换
2. 在剩下的元素内找到最小的元素，和第二个元素交换，以此类推

```ts
function selectionSort(list: number[]) {
  const length = list.length;
  for (let i = 0; i < length; i += 1) {
    let min = i; // 假设第一个值是最小值
    for (let j = i + 1; j < length; j += 1) {
      if (list[j] < list[min]) {
        // 如果存在更小的值
        min = j;
      }
    }
    if (i !== min) {
      // 将i的位置替换成最小值
      swapList(list, i, min);
    }
  }
  console.log("list", list);
}
```

特点：

- 运行时间和输入无关：第一遍获取到的最小元素，并不能为第二遍获取提供什么。
  这会导致一个已经排序好的数组，和一个乱序数组，消耗的时间是一样的
- 数据移动是最少的：  
  每次交换都会改变两个数组元素的值，最坏的情况下有多少个元素，就交换多少次，是线性关系（增长的数量级为 N）

### 复杂度为 O(n^2)

不稳定。

优点是交换的时候最坏只有 O(n)次

## 插入排序

类似整理扑克牌，把每一张牌插到其他有序的牌当中

假设第一项已经排好序，从后往前一个个比较，如果待插入元素小于已排序元素，则已排序元素往后移动一位。以此类推。

将每个元素向后移动一个位置，以便为要排序的新元素腾出空间。

即索引的左边都是有序的，但最终位置不确定，为了给更小的元素腾出空间，需要进行移动。  
当索引到达右端时，排序就完成了

```ts
function insertSort(list: number[]) {
  const length = list.length;
  let minValue;
  for (let i = 1; i < length; i += 1) {
    minValue = list[i];
    let j = i;
    while (j > 0 && list[j - 1] > minValue) {
      list[j] = list[j - 1];
      j -= 1;
    }
    list[j] = minValue;
  }
  console.log("list", list);
}
```

### 复杂度为 O(n^2)

比较稳定。

特别适合快要排序完成的数组

### 希尔排序

插入排序的改良版本

插入排序每次只能将数据移动一位，希尔排序可以设置移动的位数（`gap`），当 gap = 1 的时候，就相当于插入排序了

```ts
function shellSort(list: number[]) {
  const length = list.length;
  let gap = Math.floor(length / 2);
  while (gap > 0) {
    let minValue;
    for (let i = gap; i < length; i += 1) {
      minValue = list[i];
      let j = i;
      while (j > 0 && list[j - gap] > minValue) {
        list[j] = list[j - gap];
        j -= gap;
      }
      list[j] = minValue;
    }
    gap = Math.floor(gap / 2);
  }
  console.log("list", list);
}
```

## 归并排序

把数组分开，直到最后只剩下每一项只有两个元素

然后对这两个元素排序

再合并另一组，对 4 个元素排序

以此类推

```ts
//将数组分开
function mergeSort(list: number[]): number[] {
  const length = list.length;
  if (length < 2) {
    return list;
  }
  const middle = Math.floor(length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
//合并
function merge(left: number[], right: number[]) {
  const newList: number[] = [];
  while (left.length > 0 && right.length > 0) {
    let minValue = left[0] > right[0] ? right.shift() : left.shift();
    newList.push(minValue!);
  }
  return newList.concat(left, right);
}
```

### 复杂度为 O(nlog(n))

稳定

非常适合于链表排序

## 快速排序

1.  以数组里的某一项作为基准（比如初始数组的第一项）；

2.  所有小于基准的放左边，大于的放基准的右边；

3.  递归左边区域和右边区域

```ts
function quickSort(list: number[]): number[] {
  const length = list.length;
  if (length < 2) {
    return list;
  }
  const base = list[0];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 1; i < length; i += 1) {
    if (list[i] < base) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return quickSort(left).concat([base], quickSort(right));
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
    let baseIndex = Math.floor((left + right) / 2); //基准值为中间值
    let newBase = divide(arr, baseIndex, left, right);
    betterQuick(arr, left, newBase - 1);
    betterQuick(arr, newBase + 1, right);
  }
  return arr;
}
function divide(arr, baseIndex, left, right) {
  let baseValue = arr[baseIndex];
  let newBase = left;
  swap(arr, baseIndex, right);
  for (let i = left; i < right; i++) {
    if (arr[i] < baseValue) {
      swap(arr, i, newBase);
      newBase++;
    }
  }
  swap(arr, right, newBase);
  return newBase;
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
  let length = arr.length;
  //把数组变成最大堆
  for (let i = Math.floor(length / 2); i--; ) {
    heapify(arr, i, length);
  }
  while (length > 1) {
    length--;
    swap(arr, 0, length);
    heapify(arr, 0, length);
  }
}
function heapify(arr, index, size) {
  let currentIndex = index,
    left = 2 * index + 1,
    right = left + 1;
  if (left < size && arr[currentIndex] < arr[left]) {
    currentIndex = left;
  }
  if (right < size && arr[currentIndex] < arr[right]) {
    currentIndex = right;
  }
  if (currentIndex != index) {
    swap(arr, index, currentIndex);
    heapify(arr, currentIndex, size);
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

## V8 中的排序

用的`TimSort`，源码[array-sort.tq](https://github.com/v8/v8/blob/78f2610345fdd14ca401d920c140f8f461b631d1/third_party/v8/builtins/array-sort.tq#L5)  
摘自[wiki](https://zh.wikipedia.org/wiki/Timsort): Timsort 是一种混合稳定的排序算法，源自归并排序和插入排序
