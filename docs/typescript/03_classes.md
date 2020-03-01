# 类 class
官网[Classes](https://www.typescriptlang.org/docs/handbook/classes.html)  
## 修饰符 public/private/protected

TypeScript 可以使用三种访问修饰符

- public
  修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是
  public 的

- private 修饰的属性或方法是私有的，不能在声明它的类的外部访问

- protected 修饰的属性或方法是受保护的，它和 private
  类似，区别是它在子类中也是允许被访问的

```ts
class Factory {
  private name: string
  public serialNumber: number
  public constructor(name, serialNumber) {
    this.name = name
    this.serialNumber = serialNumber
  }
  public sayName(): string {
    return this.name
  }
}
let person = new Factory('John', 13)
console.log(person.serialNumber) //正常
console.log(person.name) //报错，name是private，只能在Factory访问
```

## 抽象类 abstract

抽象类是供其他类继承的基类

本身不允许被实例化(不能 new)

抽象类中的抽象方法（有 abstract 前缀的）必须在子类中被实现

```ts
abstract class Factory {
  public name: string
  public constructor(name: string) {
    this.name = name
  }
}
let person = new Factory('John') //报错，不允许new
```
``` ts
abstract class Factory {
  protected name: string
  public constructor(name: string) {
    this.name = name
  }
  public sayName() {
    //不是抽象类，不需要子类实现
    console.log(this.name)
  }
  public abstract sayNumber(): void //sayNumber必须在子类中被实现
}
class Plant extends Factory {
  public number: string
  public constructor(name: string, number: string) {
    super(name)
    this.number = number
  }
  public sayNumber() {
    console.log(this.number)
  }
}
let child = new Plant('Emma', '1')
child.sayName() //"Emma"
child.sayNumber() //"1"
```

## 类的接口(interface)和实现（implements）

一个类只能继承自另一个类

不同类之间可能存在共有的特性，可以把共有特性抽象成接口。接口不会涉及实现

用 implements 关键字来实现

例，Servant 和魔法少女都需要签订契约，可以把契约抽象成接口

```ts
//契约
interface Contract {
  appoint(): void
  name: string
}
class Servant {
  public name
  constructor(name) {
    this.name = name
  }
}
class Saber extends Servant implements Contract {
  public name
  appoint() {
    console.log(`${this.name} appoint saber class with master`)
  }
  constructor(name) {
    super(name)
  }
}
class Magica implements Contract {
  name: string
  appoint() {
    console.log(`${this.name} appoint mahou with QB`)
  }
  constructor(name) {
    this.name = name
  }
}
let servant = new Saber('Altria')
console.log(servant.name) //Altria
let girl = new Magica('momo')
girl.appoint() //momo appoint mahou with QB
```

### 继承 extends

接口可以继承别的接口；

接口也可以继承类

```ts
//契约
interface Contract {
  appoint(): void
  name: string
}
//令咒
interface Spell extends Contract {
  command(): string
}
class Servant implements Spell {
  name: string
  appoint() {
    console.log(`servant ${this.name} is appoint with master`)
  }
  command() {
    return `command servant ${this.name} to do sth.`
  }
  constructor(name) {
    this.name = name
  }
}
let saber = new Servant('Altria')
saber.appoint()
console.log(saber.command())
```

继承类

```ts
class Point {
  x: number
  y: number
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = { x: 1, y: 2, z: 3 }
```

## 比较

如果两个类型有`protected`或者`private`关键字时，他们必须来源于同一个声明  
理解为[对象不相等](../js/018_statement.md#对象不相等)

```ts
class Magica {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
class Servant {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
let girl = new Magica('madoka')
const servant = new Servant('saber')
girl = servant //不能赋值，因为两者具有private属性，尽管都叫name
```
