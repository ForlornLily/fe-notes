# 方法

## 选择器

尽可能以 ID 开头；  
尽量在选择器靠右侧的部分使用 tag.class， 而左侧只有 tag 或者只有 .class  
主要是因为 sizzle 插件 ，他是先查找选择器靠右侧的部分，比如  
div > p，是先找所有 p，再找 p 的父元素是不是 div

```js
//未优化的
$("div.data .gonzalez");
//优化后
$(".data td.gonzalez");
```

### 变量名

ID 内不能包含"."，比如$("#test.1")  
document.getElementById(“test.1")是找得到的，但是$(“#test.1")是找不到的  
querySelector 也不能，会报错

## html()/text()

- html()在获取元素内容时，如果选择器匹配多于一个的元素，那么只有第一个匹配元素的 HTML 内容会被获取。
- text()在获取元素内容时，结果是由所有匹配元素包含的文本内容组合起来的文本

## on 和 bind

on 比 bind 多了一个参数，  
.bind(events [,eventData], handler)  
.on(events [,selector][,data], handler)  
on 可以进行事件委托 ，除此以外没什么区别  
比如 ul 下的 li 进行 click 事件，就可以用 on  
`$("ul").on("click", "li", function(){})`

他们都可以重复绑事件，方法都会执行，也可以同时绑定多个事件。用法：  
`$().bind({event1: function(){}, even2: function(){}})`

### 事件的命名空间

在事件后面加一个点和别名。
比如`$().bind("click.namespace")`  
这个时候的 namespace 就是 click 的命名空间，解绑的时候就

```js
$().unbind("click.namespace"); //解绑click
$().unbind(".namespace"); // 取消这个命名空间中所有事件的绑定
```

## \$.fn.hover

传两个函数。在 mouseenter（第一个）和 mouseleave（第二个）事件触发的时候分别执行，传一个的话 enter 和 leave 的时候都会执行

```js
$("p").hover(
  function () {
    $("p").css("background-color", "yellow");
  },
  function () {
    $("p").css("background-color", "pink");
  }
);
```

## \$.fn.toggle

\$.fn.toggle(fn1, fn2, fn3,…)  
点击的时候第一次执行函数 1，第二次函数 2，以此类推。当函数全部执行结束之后，再从第一个开始执行函数 1…  
可以用 unbind("click")解绑

## widget factory

管理有状态的插件，比如进度条。  
最基本的例子

```js
$.widget("nmk.progressbar", {
  _create: function () {
    var progress = this.options.value + "%";
    this.element.addClass("progressbar").text(progress);
  },
});
```

nmk 是插件的命名空间，只允许一层，也就是不能 nmk.xxx.progressbar  
插件名就是去除命名空间的那部分，也就是\$.fn.progressbar  
this.element 指向实例。还有 this.options  
自带 option 方法，会去调\_setOption，\_setOption 也可以自己写  
自带\_trigger
