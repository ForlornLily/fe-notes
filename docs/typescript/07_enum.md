# 枚举 enum

限定范围用，比如一周只有 7 天。

```ts
enum Week {
  Mon,
  Tue,
  Wed,
  Thur,
  Fri,
  Sat,
  Sun
}
console.log(Week[0]) //Mon
console.log(Week['Mon']) //0
```
