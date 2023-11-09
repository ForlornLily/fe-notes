# 函数

官网[Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

## 函数表达式

注意 typescript 的箭头`=>`，不是 ES6 的箭头函数  
typescript 中箭头左边是输入类型，右边是输出类型  
函数的形参可以和声明的属性

```ts
let myFun: (baseValue: string, another: string) => void = function (
  x: string,
  y: string
): void {
  console.log(`${x}, ${y}`);
};
```

js 用箭头函数

```ts
let mySum: (x: number, y: number) => number = (x: number, y: number): number =>
  x + y;
```

## 接口表示

参数可以

```ts
interface customFun {
  (x: string, y: string): void;
}
let myFun: customFun;
myFun = (a: string, b: string): void => {
  console.log(`${a}, ${b}`);
};
```

## 可选参数?

没有默认值的情况下，函数内的可选参数必须在最后面

```ts
function myCustom(score: number, flag?: boolean): number {
  if (flag) {
    return score + 1;
  }
  return score;
}
```

## 默认值

设置默认值后，typescript 会将添加了默认值的参数识别为可选参数

那么其他无默认值的可选参数位置，就没限制了

```ts
function myCustom(score: number, flag: boolean = false): number {
  if (flag) {
    return score + 1;
  }
  return score;
}
```

## 剩余参数...rest

ES6 中的剩余参数，是放在函数的最后的

本质上剩余参数就是个数组

```ts
function myCustom(score: number, flag?: boolean, ...items: any[]): number {
  const data: any[] = items,
    length: number = data.length;
  let total: number = 0;
  for (let i = length; i--; ) {
    total += data[i];
  }
  if (flag) {
    return score + total;
  }
  return total;
}
console.log(myCustom(1, true, 1, 2, 3));
```

## 重载

根据函数的参数类型不同，进行不同的逻辑处理，可以用重载进行精确的表达。

比如传入的参数类型是 number, 希望 return 的也是 number

传入的参数类型是 string, return 也是 string

为了进行精确表达，typescript 内可以重复声明同一个函数

```ts
function myCustom(x: number): number;
function myCustom(x: string): string;
function myCustom(x: number | string): number | string {
  if (typeof x === "number") {
    return x + 1;
  }
  return x + " world";
}
console.log(myCustom(1));
console.log(myCustom("hello"));
```

前几次都是函数定义，最后一次是函数实现。

TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数如果有包含关系，需要把精确的定义写在前面
