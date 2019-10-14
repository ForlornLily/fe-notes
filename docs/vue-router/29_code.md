# 实现思路

www.test.com 跳转到 www.test.com/#hash

- 如果是浏览器历史跳转或者点击跳转，触发 `hashchange` 事件
- 如果是手动刷新，不会触发 hashchange，可以触发 load。

上述事件触发以后匹配到对应的路由规则，跳转到 hash 页面，替换 DOM 内容。

www.test.com 跳转到 www.test.com/history

- 如果是浏览器动作，比如 go(-1)，触发 popstate 事件
- 如果是点击跳转，调用 pushState 函数，但不会向服务器请求
- 如果是刷新页面或者输入 url，会向服务器请求，用 history 需要后端配合重定向

上述处理以后跳转到 history 页面，替换 DOM 内容。
