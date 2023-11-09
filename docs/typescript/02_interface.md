# 接口

官网[Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## 可选

用`?`表示可选。  
声明变量的时候可选变量允许不存在。但不允许添加未定义的属性

```ts
interface Person {
  name: string;
  age?: number;
}

let tonny: Person = {
  name: "Tony",
};
//报错，sex未声明
let betty: Person = {
  name: "Tony",
  sex: "female",
};
```

## 只读

`readonly`: 只能在创建时赋值，动态赋值会报错

```ts
interface Servant {
  readonly name: string;
}
let saber: Servant = {
  name: "Altria",
};
saber.name = "Arthur"; //报错，不允许再次赋值
let lancer: Servant = {};
lancer.name = "Altria"; //报错，只能在创建的时候赋值
```

## 函数

用接口表示函数：形参可以和接口定义的属性值不同，但是声明的顺序是要一致的  
即`a`对应`x`

```ts
interface customFun {
  (x: string, y: string): void;
}
let myFun: customFun;
myFun = (a: string, b: string): void => {
  console.log(`${a}, ${b}`);
};
```

## 继承接口

接口可以继承多个接口，用`extends`关键字

```ts
interface Shape {
  color: string;
}

interface Another {
  width: number;
}
//同时继承Shape和Another
interface Square extends Shape, Another {
  sideLength: number;
}

let square: Square = {
  color: "hello",
  width: 1,
  sideLength: 1,
};
```

## 继承类

接口还可以继承`Class`

```ts
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
```

## 任意属性 propName

允许添加未定义的属性。

但是所有已定义的属性必须和 propName 类型一致或者是子集

```ts
//不报错
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom: Person = {
  name: "Tom",
  gender: "male",
};
```

```ts
//报错
interface People {
  name: string;
  age?: number; // propName的值只能是string，但是age给了number，不是string的子集
  [propName: string]: string;
}
```

```ts
//不报错
interface People {
  name: string;
  age?: number; // age可选，所以要多个undefined
  [propName: string]: string | number | undefined;
}
```
