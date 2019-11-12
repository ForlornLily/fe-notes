# 插件开发

## $和$.fn

`$.fn.abc()`是绑定在页面元素上的插件，`$`是绑定在 jquery 上的插件  
$(“#test”).abc()和$.trim()  
`jQuery.fn = jQuery.prototype = {}`

## IIFEs

IIFE 并不是闭包

```js
;(function($) {
  $.fn.myFunction = function() {
    return this.each(function() {
      //逻辑
    })
  }
})
```

用立即执行函数保证变量不会污染。  
`this.each`是因为插件肯定会涉及到多个 DOM

## \$.extend(object)

相当于直接在 jQuery 对象上加一个方法。  
使用直接`$.xxx`

## \$.fn.extend(object)

相当于为每个 jQeury 实例加一个方法。  
使用是`$(xxx).xxx`
本质上 jQuery.extend = jQuery.fn.extend = function() {}走的方法一样  
但效果不一样主要是因为`this`指向，一个指向 jQuery，一个指向 jQuery.fn  
而`jQuery.prototype = jQuery.fn`

## \$冲突

调用`noConflict`，让出\$

```js
var query = jQuery.noConflict(true)
;(function($) {
  // 用query表示jQuery
})(query)
//其他地方用$
```

noConflict 内部

```js
var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
  // Map over the $ in case of overwrite
  _$ = window.$

jQuery.noConflict = function(deep) {
  if (window.$ === jQuery) {
    window.$ = _$
  }

  if (deep && window.jQuery === jQuery) {
    window.jQuery = _jQuery
  }

  return jQuery
}
```
