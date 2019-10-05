# 声明

## 声明合并

定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型

### 函数合并

即函数的[重载](./03_interface.md#重载)

### 接口/类合并

属性相当于对象的覆盖；

方法相当于函数重载

```ts
interface Alarm {
  price: number
  alert(s: string): string
}
interface Alarm {
  weight: number
  alert(s: string, n: number): string
}
//等价于
interface Alarm {
  price: number
  weight: number
  alert(s: string): string
  alert(s: string, n: number): string
}
```

如果属性重名，必须要保证重名属性的类型一致

```ts
interface Alarm {
  price: number
}
interface Alarm {
  price: string // 类型不一致，会报错
  weight: number
}
```

## 声明文件

比如在 ts 内使用 jQuery

需要先声明一个全局变量代表 jQuery

`declare var jQuery: (selector: string) => any;`

declare var 并没有声明变量，在编译后的 js 文件里这一句话是不存在的。

它仅仅是为了编译时的检查，只定义了全局变量 jQuery 的类型

通常把声明语句放到一个单独的文件，文件名后缀必须是.d.ts

一般来说，ts 会解析项目中所有的 \*.ts 文件，当然也包含以 .d.ts
结尾的文件。所以当我们将 jQuery.d.ts 放到项目中时，其他所有 \*.ts
文件就都可以获得 jQuery 的类型定义了

### 第三方声明文件

一般来说主流的插件都会有支持的声明文件，install 即可

推荐使用 \@types
统一管理第三方库的声明文件，搜索可以用[官网](https://microsoft.github.io/TypeSearch/)

`npm install @types/jquery --save-dev`

### 自己写声明文件

不同作用的库写法不同。

- 全局变量：通过 \<script\> 标签引入第三方库，注入全局变量

- npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范

- UMD 库：既可以通过 \<script\> 标签引入，又可以通过 import 导入

- 直接扩展全局变量：通过 \<script\> 标签引入后，改变一个全局变量的结构

- 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD
  库后，改变一个全局变量的结构

- 模块插件：通过 \<script\> 或 import 导入后，改变另一个模块的结构

#### 全局变量

- declare var 声明全局变量

- declare function 声明全局方法

- declare class 声明全局类

- declare enum 声明全局枚举类型

- declare namespace
  声明（含有子属性的）全局对象（跳过，由于 ES6 的模块化优势，不需要命名空间）

- interface 和 type 声明全局类型

##### declare var/let/const

注意所有 declare 都只是声明具体类型，不涉及赋值。

const 的和 var/let 区别在于该变量是否可以更改

const 表示此时的全局变量是一个常量，不允许再去修改它的值

```ts
// src/Animal.d.ts
declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}

declare class Animal {
  name: string
  constructor(name: string)
  sayHi() {
    //报错，不能声明具体实现
    return `My name is ${this.name}`
  }
}
```
