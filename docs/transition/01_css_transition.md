# CSSTransition

为子元素的某些时刻增加指定的`class`。CSSTransition 本身不会形成标签  
比如下面的`my-node-*`类名会加在`target`上

```js
function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div className="target">hello</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}
```

## in

值是 true/false  
为 true 时增加动画过渡

## classNames

注意不是`className`  
类似 vue 内的 transition 的`name`值  
可以是一个值，也可以是个对象

```js
classNames={{
  appear: 'my-appear',
  appearActive: 'my-active-appear',
  appearDone: 'my-done-appear',
  enter: 'my-enter',
  enterActive: 'my-active-enter',
  enterDone: 'my-done-enter',
  exit: 'my-exit',
  exitActive: 'my-active-exit',
  exitDone: 'my-done-exit',
}}
```

如果是对象，那么类名就是对应的值，而不是\*-enter，比如`enterDone`对应的 html

```html
<div class="target my-done-enter">hello</div>
```

### enter

相关样式：

- \*-enter: 入场动画执行的第一个时刻，一直持续到入场动画结束
- \*-enter-active: 入场动画执行的第二个时刻，一直持续到入场动画结束
- \*-enter-done: 动画结束
  比如`classNames="my-node"`

```html
<!-- 入场后对应的html -->
<div class="target my-node-enter my-node-enter-active">hello</div>
<!-- 动画结束后对应的html -->
<div class="target my-node-enter-done">hello</div>
```

此时可以给 div 一个透明度从 0 变 1 的动画

```css
.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
```

### exit

相关样式

- \*-exit
- \*-exit-active
- \*-exit-done

## appear

值是 true/false
组件初始化的时候不会渲染动画  
`appear`为 true 后第一次加载就会渲染  
**注意`in`初始化的值必须设为`true`才有效**  
相关样式

- \*-appear
- \*-appear-active
- \*-appear-done

## timeout

[timeout](https://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout)  
动画时长  
可以是一个数字，也可以是一个对象，比如

```js
timeout={{
  enter: 300, //进入时间，用于 *-enter, *-enter-active
  exit: 500,  //离开时间
}}
```

## unmountOnExit

设置后，只有`in`为 true 的情况下，div 才会被渲染

```js
<CSSTransition in={inProp} timeout={200} classNames="my-node" unmountOnExit>
  <div className="target">hello</div>
</CSSTransition>
```

## 钩子函数

- onEnter
- onEntering
- onEntered: 对应`*-exit-done`
- onExit
- onExiting
- onExited
