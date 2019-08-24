# Sass

分 sass 和 scss 后缀

以后缀为 scss 的文件为主。有括号包裹

## 在 vue 中

vue-cli 生成的项目结构：

webpack.base.conf.js

![webpack](../images/267f103fa9ee81a78f17bdb7c33dccfd.png)

单文件 vue 中：

![vue](../images/7d5a005f0ccac065b9f3cbc52d4a34c9.png)

## 导入和编译（import）

- 只导入普通文件，\@import “normal.css”，编译时不做合并

- 导入后缀是 scss 的文件，可以省略后缀

`@imort “base”`

编译后合并所有 scss（比如 all.scss 导入其他 scss，最终只生产 all.css）

- 导入后缀是 scss 的文件时，如果文件名开头是”\_”，比如”\_basic.scss”

导入的时候也可以省略

`@imort “basic”`

## 注释和编译

/\*\*/双行注释会被编译

//单行注释不会编译

## 变量\$

### 普通变量

### 默认变量!default

变量值没有单独设定，那么就用添加默认值的变量值。

若设定了，那么就用重新设定的变量值

值后面加!default

![default](../images/b58fac5ed68d19606a2cd149a2bb4367.png)

### 特殊变量\#{\$variables}

变量作为属性

\#{\$variables}

![$variables](../images/794df2086d04ef6a5652f968f8dc7cd6.png)

![效果图](../images/b9c55c2d074b4ece3b479740feff374e.png)

### 多值变量

变量的值有多个。分 list 和 map 类型

list: 可以用逗号或者空格或者括号分隔，nth(\$var, \$index)取值

![list](../images/effd9c918e8090f17bc31d279ab8e89e.png)

![效果图](../images/47640dbc477b0299fa66603b778402f3.png)

map：以对象的形式存在。{key: value}

![map](../images/e1386824ddc88e1aeea55b1c5fba865a.png)

![效果图](../images/fdea804b2ab8b9bba793fd109566cd9a.png)

### 全局变量!global

跟 var 作用域一样

## 嵌套

### &

&表示父元素选择器

### @at-root

跳出嵌套

默认：\@at-root(without:rule)

但他不会跳出[\@media](#media冒泡)和\@support

![单个](../images/108ca064a8f7889c7f72107ca817e688.png)

![多个](../images/8b8db2f9a3b502327f36d0af205fc5c2.png)

![多个效果](../images/a111854d75f11b6d2eecdab9109905bd.png)

### without

值：`all`/`media`/`support`/`rule`

![](../images/14748f5eccaac31401920ef46c9a5268.png)

## @media 冒泡

![@media](../images/e21e71e7c4008c9073b6a115455e5b0e.png)

![效果](../images/89599450e8099c918afec7240d295f53.png)

## @mixin 和@include

类似 ES6 的 function

![mixin](../images/f25ee35b3ac992a4166281a18b5c4277.png)

可以事先赋好默认值

![默认值](../images/b134776748de2fa711075588a2985e48.png)

## 自定义方法@function

![@function](../images/76c027914eb0e1b1fd9c6db4f065e5ae.png)
![效果](../images/62e4dcbd257b5af7ac45f372ab869e4f.png)

darken, lighten 属于 sass 内置函数

## if else

if 不要小括号

可以在 function 内用，也可以单独用

![if](../images/13e852184f53c8cfc8eb2e84f89788af.png)

## 循环

### for

`for $var from start to end`

`for $var from start through end`

to 不包括 end, through 包括 end

![for](../images/7f1ab396097f4041c9b46bbdb8a3bf78.png)

### @each

\@each key in list/map

list:

![list](../images/b5beaca5125aff8138020b52c10e3d78.png)

list:

![list](../images/c4435eeba4eae64600d62a14064bcdbc.png)

map:

![map](../images/94557d126c20a9647d75c694b1878260.png)

## 编译

安装好路径以后，直接进入到文件夹，敲命令

sass xxx.scss css/xxx.css

实时编译：

`sass --watch<要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css`

比如

`sass --watch all-14.scss:./css/all.css`

sass 也可以多文件编译。

sass
sass/:css/（表示“sass”文件夹中所有的".scss"文件编译成".css"文件，并且将这些 css 文件放到“css”文件夹中）
