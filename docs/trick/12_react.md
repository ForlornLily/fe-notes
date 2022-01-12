# React

## placeholder 换行

表单元素的 `placeholder` 内换行需要用转义字符

```tsx
<textarea placeholder="1&#10;2"><textarea>
```

使用 jsx 需要手动给转义字符

```tsx
<textarea placeholder={1`${String.fromCharCode(10)}2}`><textarea>
```

## 状态变更

推荐写法

```js
setState((prev) => ({
  ...prev,
  newKey: newValue,
}))
```

以下写法可能在并发时引起崩溃（比如父子状态关联，联动等）

```js
setState({
  ...prev,
  newKey: newValue,
})
```
