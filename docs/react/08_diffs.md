# 性能

相关地址

- 性能检测[Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)
- diff 算法[Reconciliation](https://reactjs.org/docs/reconciliation.html)

## 概要

1. 不同类型的元素生成不同的树
2. 通过 `key` 属性表明哪些子元素在不同的渲染中也是不变的

## diff 算法

只对比同层，不同层级的节点，只有创建和删除操作  
对比两颗树时，最先对比的是两个根元素

- 如果两个根元素类型不同，直接销毁旧的 DOM，渲染新 DOM，对应旧的（包括子元素）所有 state 会丢失
- 两个元素类型相同，会保留相同的属性（attribute），只更新改变的属性。处理完之后对子节点进行递归

当根节点发现子节点中 A 消失了，就会直接销毁 A；当 D 发现多了一个子节点 A，则会创建新的 A （包括子节点）作为其子节点

### key

存在 `key` 时，React 会对比具有相同 `key` 的新旧节点
