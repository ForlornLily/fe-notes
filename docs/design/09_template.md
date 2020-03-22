# 模板方法模式

Template method pattern：基于继承的设计模式  
父类实现公用的部分，子类实现自定义的部分

## 抽象类

模板方法严重依赖抽象类，但 JS 的基本语法并没有直接提供，ES6 的 [new.target](https://github.com/nzakas/understandinges6/blob/master/manuscript/03-Functions.md) 可以模拟实现

### 作用

抽象类对应的是具体类  
区别在于抽象类不可以被实例化。  
以“动画片”为例，当和别人安利动画片时，感兴趣的人肯定会问“是哪一部动画？”  
“动画片”本身是一个抽象的概念，只有明确具体的作品，别人才能看到

### 抽象方法

抽象方法必须在子类中被实现  
比如动画片的名字，必须在子类作品里面写明  
以 TypeScript 为例

```ts
abstract class Anime {
  protected name: string
  protected constructor(name: string) {
    this.name = name
  }
  public sayName() {
    //不是抽象类，不需要子类实现
    console.log(this.name)
  }
  protected abstract sayYear(): void //sayNumber必须在子类中被实现
}
class Bangumi extends Anime {
  public year: number
  public constructor(name: string, year: number) {
    super(name)
    this.year = year
  }
  public sayYear() {
    console.log(this.year)
  }
}
let child = new Bangumi('The Promised Neverland', 2016)
child.sayName() //"The Promised Neverland"
child.sayYear() //2016
```

ES6 模拟，用抛出异常来提示

```js
'use strict'
class Anime {
  constructor(name) {
    if (new.target === Anime) {
      throw new Error('不能实例化')
    }
    this.name = name
  }
  sayName() {
    //不是抽象类，不需要子类实现
    console.log(this.name)
  }
  sayYear() {
    throw new Error('sayYear未实现')
  }
}
class Bangumi extends Anime {
  constructor(name, year) {
    super(name)
    this.year = year
  }
}
let child = new Bangumi('The Promised Neverland', 2016)
child.sayName() //"The Promised Neverland"
child.sayYear() //Uncaught Error: sayYear未实现
```

## 好莱坞原则

Hollywood principle: Don't call us, we'll call you.  
允许底层组件将自己挂钩到高层组件中，由高层组件觉得什么时候、以什么方式调用
应用场景

- 模板方法模式：子类只提供设计上的细节，由父类通知子类
- 发布-订阅模式
- 回调函数：把需要执行的操作封装在回调函数里，把主动权交给另一个函数
