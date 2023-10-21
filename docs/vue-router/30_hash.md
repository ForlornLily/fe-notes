# hash 版简易路由

参考[手写一个 router](https://xianyulaodi.github.io/2017/06/18/%E6%89%8B%E5%86%99%E4%B8%80%E4%B8%AArouter/)  
核心: `hashchange`和`load`事件。  
简单思路：

1. 创建一个对象，存储路由和进路由后要执行的方法；
2. 监听事件时调用对应的方法

```html
<div>
  <a href="#/">Starset</a>
  <a href="#/unbecoming">unbecoming</a>
  <a href="#/monster">monster</a>
</div>
<p id="view">content</p>
<script>
  class Router {
    constructor() {
      this.routes = {}
      this.url = ""
    }
    add(path, callback) {
      this.routes[path] = callback
    }
    refresh() {
      this.url = location.hash.slice(1) || "/"
      const fun = this.routes[this.url]
      if (Object.prototype.toString.call(fun) === "[object Function]") {
        fun()
      }
    }
    init() {
      const win = window
      //点击超链接触发
      win.addEventListener("hashchange", this.refresh.bind(this))
      //F5刷新触发
      win.addEventListener("load", this.refresh.bind(this))
    }
  }
  const route = new Router()
  route.init()
  const el = document.getElementById("view")
  route.add("/unbecoming", () => {
    el.innerHTML = "unbecoming"
  })
  route.add("/monster", () => {
    el.innerHTML = "monster"
  })
</script>
```
