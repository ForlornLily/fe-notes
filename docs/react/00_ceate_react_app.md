# 工具

## create-react-app

```bash
npx create-react-app my-app
```

用 create-react-app 创建的项目来进行快速上手  
后续补充自定义配置

## 性能分析

- [React Dev Tools](https://react.dev/learn/react-developer-tools)
- [Profiler](#Profiler)

### Profiler

[官网](https://react.dev/reference/react/Profiler)  
默认生产环境关闭

```jsx
function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  // Aggregate or log render timings...
}

<Profiler id="App" onRender={onRender}>
  <App />
</Profiler>;
```
