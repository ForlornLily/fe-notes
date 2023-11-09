# 查找

## 二分查找

前提：必须是已经有序的数据

数组来说：

从中间开始，比较大小

中间值比目标值大，从 0\~mid 开始，小的则从 mid\~end

反复以上两个步骤，最差的情况是最后数组只剩下一个的时候

```js
//前提：必须是有序数据
//返回索引
function binarySearch(item, target) {
  //数组的二分查找
  let end = item.length - 1,
    start = 0,
    mid = Math.floor((start + end) / 2); //向下取整
  if (item[mid] == target) {
    return mid;
  }
  while (start <= end) {
    if (item[mid] < target) {
      start = mid + 1;
    } else if (item[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1; //没找到
}
const arr = [1, 2, 3, 4, 5, 6],
  target = 7;
binarySearch(arr, target);
```
