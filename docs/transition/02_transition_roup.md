# TransitionGroup

包裹多个`CSSTransition`的父组件，方便实现内部每个`CSSTransition`的动画效果  
TransitionGroup 本身会形成一个 div

```js
<TransitionGroup>
  {this.state.list.map((item, index) => {
    return (
      <CSSTransition timeout={3000} classNames="my-node" key={index}>
        <div>hello</div>
      </CSSTransition>
    )
  })}
</TransitionGroup>
```
