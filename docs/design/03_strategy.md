# 策略模式

Strategy Pattern：实现某个目的可以有很多方式。策略模式是把定义一系列算法并封装起来，并且使他们可以互相替换
「互相替换」在静态类型语言来说是实现统一的接口确保变量类型一致。  
JS 是动态类型语言，没有这个限制，可以理解为具有相同的目标

## 表单校验

假设有以下情景：
注册用户，存在两个输入框，分别是用户名和密码。

- 用户名不能为空
- 密码不能小于 6 位数

基本写法可能是这样

```html
<form id="userForm">
  <label>用户名：<input type="text" name="username"/></label>
  <label>密码：<input type="password" name="password"/></label>
  <button>提交</button>
</form>
<script>
  const formEle = document.getElementById('userForm')
  formEle.addEventListener('submit', e => {
    const username = formEle.username
    if (!username.value) {
      console.log('用户名必输')
      e.preventDefault()
      return false
    }
    const password = formEle.password
    if (password.value.length < 6) {
      console.log('密码长度不能小于6位')
      e.preventDefault()
      return false
    }
  })
</script>
```

如果存在另一个表单，要实现同样的校验规则，那么就需要把这段代码拷出来，放到对应的表单内部  
更好的做法是把校验逻辑提取出来，方便复用  
于是可以这么做

```js
//复用逻辑
//校验
const strategies = {
  isNotEmpty(value, errMsg) {
    if (!value) {
      return errMsg
    }
  },
  minLength(value, length, errMsg) {
    if (value.length < length) {
      return errMsg
    }
  }
}
//添加规则
function Validator() {
  this.rules = []
}
Validator.prototype.add = function(dom, rule, errMsg) {
  let arr = rule.split(':') //拆分"minLength: 6" 这种校验类型和值都需要的情况
  const strategy = arr.shift() //获取校验类型，比如"isNotEmpty"
  arr.unshift(dom.value) //第一个参数是value
  arr.push(errMsg) //最后一个参数是错误提示
  this.rules.push(() => strategies[strategy].apply(null, arr))
}
Validator.prototype.start = function() {
  const rules = this.rules,
    length = rules.length
  for (let i = 0; i < length; i++) {
    const msg = rules[i]()
    if (msg) {
      return msg
    }
  }
}

//用户调用
const formEle = document.getElementById('userForm')
formEle.addEventListener('submit', e => {
  const username = formEle.username
  const password = formEle.password
  const validator = new Validator()
  validator.add(username, 'isNotEmpty', '用户名必输')
  validator.add(password, 'minLength: 6', '密码不能小于6位数')
  const msg = validator.start()
  if (msg) {
    console.log(msg)
    e.preventDefault()
  }
})
```

如果同个输入框，需要多个校验逻辑，那么调用 `add` 的时候是个数组  
在 add 中对数组进行遍历即可

```js
validator.add(password, [
  {
    strategy: 'isNotEmpty',
    errMsg: '密码必填'
  },
  {
    strategy: 'minLength: 6',
    errMsg: '密码不能小于6位数'
  }
])
```
