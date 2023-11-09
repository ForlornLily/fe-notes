# 组合

官网[Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

## props.children

和`Vue`的插槽差不多。
比如对话框作为一个通用组件，里面的内容是插槽。

```js
function Home() {
  return (
    <div>
      <CommonDialog title="world">hello</CommonDialog>
    </div>
  );
}
function CommonDialog(props) {
  const { title } = props;
  return (
    <div>
      <h1>通用标题: {title}</h1>
      {props.children}
    </div>
  );
}
```
