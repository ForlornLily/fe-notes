# 集合（collection）

无序，但不允许值重复

用对象创建集合

## 集合常见方法

- add

- delete

- has

- clear

- size

- values():返回所有值

### 代码

```js
class Collection {
  constructor() {
    this.items = {};
    this.length = 0;
  }
  has(value) {
    //return value in this.items;
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      this.length++;
      return true;
    }
    return false;
  }
  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      this.length--;
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return this.length;
  }
  values() {
    const items = this.items;
    let arr = [];
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        arr.push(items[key]);
      }
    }
    return arr;
  }
}
let set = new Collection();
set.add("Saber");
set.add("Archer");
```

## 多个集合常见操作

对于两个不同的集合 A 和 B，对于元素 x

- union: A∪ B 并集：x 存在于 A 或者 B

- intersection: A∩B 交集：x 同时存在于 A 和 B

- difference: A-B 差集：x 属于 A 但不属于 B

- subset: 是否为子集：A 属于 B

### 代码

```js
class Container extends Collection {
  constructor() {
    super();
  }
  union(oneSet, anotherSet) {
    let totalSet = new Collection(),
      values = oneSet.values();
    for (let i = 0; i < values.length; i++) {
      totalSet.add(values[i]);
    }
    values = anotherSet.values();
    for (let j = 0; j < values.length; j++) {
      totalSet.add(values[j]);
    }
    return totalSet;
  }
  intersection(oneSet, anotherSet) {
    let totalSet = new Collection(),
      values = oneSet.values();
    for (let i = 0; i < values.length; i++) {
      if (anotherSet.has(values[i])) {
        totalSet.add(values[i]);
      }
    }
    return totalSet;
  }
  difference(oneSet, anotherSet) {
    let totalSet = new Collection(),
      values = oneSet.values();
    for (let i = 0; i < values.length; i++) {
      if (!anotherSet.has(values[i])) {
        totalSet.add(values[i]);
      }
    }
    return totalSet;
  }
  subset(oneSet, anotherSet) {
    let isSub = true;
    if (oneSet.size() > anotherSet.size()) {
      isSub = false;
    } else {
      let values = oneSet.values();
      for (let i = 0; i < values.length; i++) {
        if (!anotherSet.has(values[i])) {
          isSub = false;
          break;
        }
      }
    }
    return isSub;
  }
}
let first = new Collection();
first.add("1");
first.add("2");
first.add("3");
let second = new Collection();
second.add("1");
second.add("3");
second.add("4");
let container = new Container();
let result = container.union(first, second);
let result2 = container.intersection(first, second);
let result3 = container.difference(first, second);
let result4 = container.subset(first, second);
```

## 用 ES6 的 Set 创建集合

```js
class CollectionSet {
  constructor() {
    this.items = new Set();
  }
  has(value) {
    return this.items.has(value);
  }
  add(value) {
    if (this.has(value)) {
      return false;
    }
    this.items.add(value);
    return true;
  }
  delete(value) {
    return this.items.delete(value);
  }
  clear() {
    this.items.clear();
  }
  size() {
    return this.items.size;
  }
  values() {
    let values = [];
    this.items.forEach((key, value) => {
      values.push(value);
    });
    return values;
  }
}
let set2 = new CollectionSet();
set2.add("Saber");
set2.add("Archer");
```
