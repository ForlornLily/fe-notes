# 全局

## 全局配置 Vue.config

Vue.config 是一个对象，包含 Vue 的全局配置

比如`optionMergeStrategies`

## 全局 API

### Vue.extend

Vue.component 是用来创建组件，返回一个 Vue 的实例。

Vue.extend 是在 Vue 的构造函数上增加了自定义的内容，返回的是 Vue 本身。可用的参数和 Vue.component 一样

比如先用 Vue.extend 自定义了 template 属性和 data 属性，再用 Vue.component 注册一个 Vue.extend
