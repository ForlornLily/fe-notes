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
