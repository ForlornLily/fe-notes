# 计算属性 computed 和监听属性 watch

## computed

响应式依赖发生改变时它们才会重新求值

```js
computed: {
  // 计算属性的 getter
  reversedMessage() {
    // message改变才会进，message存在data中
    return this.message.split('').reverse().join('')
  }
}
```

### 使用 setter

如果 set 里面涉及到 get 内的属性，又会进一次 get。只进一次

```html
<div id="app">
  <a v-on:[eventname]="handleClick">clcik</a>
  {{ fullName }}
</div>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      eventname: 'click',
      firstName: 'hello',
      lastName: 'world'
    },
    methods: {
      handleClick() {
        //改变fullName，进入computed的set，进而改变firstName和lastName
        this.fullName = 'one two'
      }
    },
    computed: {
      fullName: {
        // getter
        get: function() {
          //进入set之后由于firstName和lastName改变又会进get
          //但只进了一次
          console.log('changed')
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function(newValue) {
          //当fullName的值改变的时候进
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  })
</script>
```

### 缓存

计算属性具有缓存。  
只有在它的相关依赖发生改变时才会重新求值  
更多内容见[响应式](./20_responsive.md)

- 初始化 data，使用 Object.defineProperty 把这些属性全部转 getter/setter。
- 初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 Watcher 实例。每个属性提供的函数作为属性的 getter，使用 Object.defineProperty 转化。
- Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。
- 若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集。

## watch

执行异步或开销较大的操作。

监听的属性值改变时进

只作用于 data 内已定义的属性

### immediate

初始化的时候是不进 watch 的，需要手动调

设置 immediate 为 true 后可以简化操作

```js
created() {
  this.fetchUserList();
},
watch: {
  searchText: 'fetchUserList',
}
//等价于
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true,
  }
}
```

### deep

如果是个对象，内部的 key，只要 value 变了也可以被监听，不管嵌套多深
