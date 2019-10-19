# history 版简易路由

核心: `popstate`事件和`pushState`方法。当前路由需要自己手动调用逻辑
::: warning
超链接`<a href="/url">`会请求新页面，想要不刷新页面就必须用`pushState`方法  
只有访问其他页面再返回才会触发 popstate
:::

```html
<div id="link">
  <a>unbecoming</a>
  <a>monster</a>
</div>
<p id="view">content</p>
<script>
  class Router {
    constructor() {
      this.routes = {}
    }
    add(path, callback) {
      this.routes[path] = callback
    }
    refresh(state) {
      this.url = '/' + state.name || ''
      const fun = this.routes[this.url]
      if (Object.prototype.toString.call(fun) === '[object Function]') {
        fun()
      }
    }
    init() {
      //页面后退才进
      window.addEventListener('popstate', e => {
        this.refresh.call(this, e.state)
      })
    }
  }
  const route = new Router()
  route.init()
  const doc = document
  const el = doc.getElementById('view')
  route.add('/unbecoming', () => {
    el.innerHTML = 'unbecoming'
  })
  route.add('/monster', () => {
    el.innerHTML = 'monster'
  })
  doc.getElementById('link').addEventListener('click', e => {
    const target = e.target
    if (target.tagName.toLowerCase() !== 'a') {
      return
    }
    e.preventDefault()
    history.pushState(
      {
        name: e.target.innerHTML
      },
      null,
      `?page=${e.target.innerHTML}`
    )
    //手动调逻辑，因为此时不会触发popstate
    route.refresh({ name: e.target.innerHTML })
  })
</script>
```
