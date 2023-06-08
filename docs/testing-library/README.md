# Testing Library

UI 测试库  
参考  
- [Testing Library](https://testing-library.com/docs/)

## 推荐设计
[Guiding Principles](https://testing-library.com/docs/guiding-principles)  
- 用真实 DOM 代替组件实例。比如测试某个 state 是否生效，如果有类名变化，可以查询类名是否存在

## 常见 API

- [render](https://testing-library.com/docs/react-testing-library/api#render)
  - container
  - rerender
- [screen](https://testing-library.com/docs/queries/about#debugging)
  - screen.debug()
- [fireEvent](https://testing-library.com/docs/dom-testing-library/api-events)