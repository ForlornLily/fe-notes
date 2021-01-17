# 常用类型定义

## setTimeout

以 React 为例，浏览器环境下的 `setTimeout` 返回类型是 `number`

```tsx
const timeoutRef = useRef<number>()
function handleDebounce(value: string) {
  const timeoutId = timeoutRef.current
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutRef.current = window.setTimeout(() => {
    // do sth.
  }, 500)
}
```
