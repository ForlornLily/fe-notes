# 元祖[]

- 和类型+[]有些相似，主要区别在于联合类型的时候:

```ts
let arr: (number | string)[] = [1, '@']
console.log(arr[1].length) //报错，length不是交集属性
let mixArr: [number, string] = [1, '2']
console.log(mixArr[1].length) //不报错
```

- 元祖在赋值必须一一对应，不能多也不能少，也不能乱。不论是声明的时候赋值，还是动态赋值

```ts
let mixArr: [number, string] = ['1', 2] //报错，第一项匹配应该是number
let mixArr: [number, string] = [1, '2', 3] //报错，数字3超出了范围
let mixArr: [number, string]
mixArr = [1, '2', 3] //报错
```

- 利用索引去一项项赋值，不报错。但数据类型需要一一对应

```ts
//不报错
let mixArr: [number, string]
for (let i = 0; i < mixArr.length; i++) {
  if (i === 0) {
    mixArr[i] = 1
  } else {
    mixArr[i] = 'hello'
  }
}
```

- 调用数组方法增加项的时候，项的类型是联合类型

```ts
let mixArr: [number, string] = [1, '2']
mixArr.push('hi') //不报错，可以加
mixArr.push(true) //报错，不是number/string
```
