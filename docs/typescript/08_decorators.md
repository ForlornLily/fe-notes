# 装饰器

官网[Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)  
应用在类（`class`）上  
参考

- https://github.com/forthealllight/blog/issues/33
- https://mirone.me/zh-hans/a-complete-guide-to-typescript-decorator/

## 类装饰器

入参：类的构造函数（constructor）
当装饰函数有返回值时，其实是生成了一个新类，该新类通过返回值来定义

```ts
function change<
  T extends { new (...args: any[]): {} } & {
    innerValue: number
  }
>(constructor: T) {
  constructor.innerValue = 100
  return class Proxy extends constructor {
    outValue = 2
  }
}

@change
class FormField {
  static innerValue = 9

  outValue: number

  constructor() {
    this.outValue = 1
  }
}
const test = new FormField()
console.log("test", test.outValue) // 2
console.log("FormField.innerValue", FormField.innerValue) // 100
```

## 函数装饰器

三个入参：
类的构造函数（constructor），属性名，属性的描述（对应 Object.defineProperty 的 option）

```ts
function changeMethod(
  target: any,
  prop: string | symbol,
  descriptor: PropertyDescriptor
) {
  // 重写方法
  switch (prop) {
    case "getFieldValue":
      descriptor.value = () => "hello"
      break
    default:
      break
  }
}

class FormField {
  item: string

  constructor(item: string) {
    this.item = item
  }
  @changeMethod
  getFieldValue() {
    return this.item
  }

  @changeMethod
  getAnther() {
    return "not change"
  }
}

const wm = new FormField("world")
console.log(wm.getFieldValue()) // "hello"
console.log(wm.getAnther()) // "not change"
```

## 属性装饰器

函数装饰器的前两个参数，即类的构造函数（constructor），属性名

```ts
function observable(target: any, key: string): any {
  const targetKey = "on" + capitalizeFirstLetter(key) + "Change"
  target[targetKey] = function (fn: (prev: any, next: any) => void) {
    let prev = this[key]
    Reflect.defineProperty(this, key, {
      set(next) {
        fn(prev, next)
        prev = next
      },
    })
  }
}

class FormField {
  @observable
  hello = -1

  @observable
  world = "bar"
}

const c = new FormField()

;(c as any).onHelloChange((prev: number, next: number) =>
  console.log(`prev: ${prev}, next: ${next}`)
)
;(c as any).onWorldChange((prev: number, next: number) =>
  console.log(`prev: ${prev}, next: ${next}`)
)

c.hello = 100 // -> prev: -1, next: 100
c.hello = -3.14 // -> prev: 100, next: -3.14
c.world = "baz" // -> prev: bar, next: baz
c.world = "sing" // -> prev: baz, next: sing
```

## 访问器属性装饰器

函数装饰器一样的三个参数：类的构造函数（constructor），属性名，属性的描述
即访问器属性，详见[访问器属性](../js/021_oop.md#访问器属性) 即 `getter`、`setter`、`configurable`、`Enumerable`

```ts
function doublePrice(
  target: Object,
  prop: string | symbol,
  descriptor: PropertyDescriptor
) {
  const getter = descriptor.get!
  descriptor.get = function () {
    return getter.call(this) * 2
  }
}

class Watermelon {
  private innerValue = 9

  @doublePrice
  get price() {
    return this.innerValue
  }
}

const wm = new Watermelon()
console.log("wm.price", wm.price) // 18
```

## 参数装饰器

三个参数：类的构造函数（constructor），属性名，参数的索引位置  
比如 [NestJS](https://forlornlily.github.io/server-notes/nest/06_pipe.html#%E5%86%85%E7%BD%AE-pipe)

```ts
import { Controller, Get, Query, ParseIntPipe } from "@nestjs/common"
import { AppService } from "./app.service"

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Query("id", ParseIntPipe) params): Promise<string> {
    return this.appService.sayHi()
  }
}
```
