# 队列（queue）

与栈类似，但是队列是先进先出（FIFO）

最新的元素在最底层

用数组创建队列

## 队列常见操作

- enqueue 尾部新增项

- dequeue 移除最前面的项

- front 返回第一项（最先被添加的）

- isFront 是否为空

- size 队列长度

### 代码

```js
class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
}
let queue = new Queue()
queue.size()
```

## 优先队列

每个元素都有各自的优先级。

比如急诊的时候病情严重的优先。

优先级最高的元素最先得到服务；

优先级相同的元素按照队列顺序得到服务

### 代码

```js
class PriorityQueue extends Queue {
  constructor() {
    super()
  }
  enqueue(element, priority) {
    let added = false,
      items = this.items
    let length = items.length
    for (let i = 0; i < length; i++) {
      if (priority < items[i].priority) {
        items.splice(i, 0, {
          element,
          priority,
        })
        added = true
        break
      }
    }
    if (!added) {
      items.push({
        element,
        priority,
      })
    }
  }
}
let priority = new PriorityQueue()
priority.enqueue("Archer", 2)
priority.enqueue("Saber", 1)
priority.enqueue("Lancer", 3)
```

## 双端队列

deque / double-ended que

允许在两端都进行添加/删除的队列。

比如存储撤销操作。

进行一定次数的存储之后，最开始的存储会被删除。

撤销操作则会把队列尾部的内容删除。

双端队列可以有以下操作

- addFront: 在前端进行增加；

- addBack: 在末尾进行增加，同 enqueue

- removeFront 同 dequeue

- removeBack

- peekFront: 返回第一个元素

- peekBack: 返回最后一个元素

### 应用

回文：正读反读都能读通的句子。比如"madam", "自我突破，突破自我"

## 循环队列

首尾相接。

常见例子：

很多人围成一个圈，从一个人开始传花。一直传，直到圈外人喊停。这时候手里有花的人退出。

如此反复，直到只剩一个人。

也就是

1.把初始队列扔进去。

2.指定一个数，在到达这个数之前，一直循环把第一个移到队列最后的操作

循环结束后把第一个数从队列里删除

重复上面的步骤 2，直到最后只剩下一个

### 代码

```js
function cycleQue(list, number) {
  let items = new Queue(),
    length = list.length
  for (let i = 0; i < length; i++) {
    items.enqueue(list[i])
  }
  let size = items.size()
  while (size > 1) {
    for (let j = 0; j < number; j++) {
      items.enqueue(items.dequeue())
    }
    items.dequeue()
    size = items.size()
  }
  return items.dequeue()
}
let name = [
  "Saber",
  "Archer",
  "Lancer",
  "Rider",
  "Caster",
  "Assassin",
  "Berserker",
]
console.log(cycleQue(name, 10))
```

## 时间复杂度

插入 enqueue/删除 dequeue：O(1)

搜索: O(n)
