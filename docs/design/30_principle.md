# 常见原则

## 单一职责原则

SRP: Single responsibility principle  
一个对象/方法只做一件事情，避免耦合带来的破坏  
实现这一原则的设计模式有：单例模式、代理模式、迭代器模式、装饰器模式

- 如果一个需求变化，两个职责总是一起变化，那这两个职责没必要分离；
- 通常情况下的职责都是一一分离的
- 但从用户层面考虑，有时候违反原来来简化操作也是比较常见的  
  比如jQuery的`attr` 方法，既可以取值又可以赋值

## 最少知识原则

The Principle of Least knowledge，也被称为得墨忒耳定律/迪米特法则 (Law of Demeter)  
尽量减少对象之间的交互。  
如果两个对象之间没有直接通信，那么这两个对象之间就不要有直接联系  
常见的做法是引入第三个对象

实现这一原则的常见模式有：中介者模式

## 开放-封闭原则

Open–closed principle  
当需要改变一个程序的功能时，使用增加代码的方式，而不是直接修改源码  
避免因为修改源码引发新 bug

几乎所有的设计模式都遵循这个原则。但也不是所有功能都可以封闭。合适的方案

- 挑选出最容器变化的地方，然后构造对象来封闭这些变化
- 不可避免修改的时候，挑选容易修改的地方。比如使用第三方库时，修改配置文件，而不是直接改源码

常见手段：

- 钩子
- 回调函数：可以认为是特殊的钩子