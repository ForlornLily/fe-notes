# Sass

分 sass 和 scss 后缀

以后缀为 scss 的文件为主。有括号包裹

## 在库中

webpack4.x

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "postcss-loader",
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "postcss-loader",
        },
        {
          loader: "sass-loader",
        },
      ],
    },
  ];
}
```

单文件 `*.vue` 中：

```html
<style lang="scss">
  /* 此处写sass */
</style>
```

## 导入和编译（import）

- 只导入普通文件，\@import "normal.css"，编译时不做合并

- 导入后缀是 scss 的文件，可以省略后缀

`@imort "base"`

编译后合并所有 scss（比如 all.scss 导入其他 scss，最终只生产 all.css）

- 导入后缀是 scss 的文件时，如果文件名开头是"\_"，比如"\_basic.scss"

导入的时候也可以省略

`@imort "basic"`

## 注释和编译

/\*\*/双行注释会被编译

//单行注释不会编译

## 变量\$

### 普通变量

### 默认变量!default

变量值没有单独设定，那么就用添加默认值的变量值。

若设定了，那么就用重新设定的变量值

值后面加`!default`

```scss
$color: #66ccff !default; //定义全局变量
.block {
  color: $color; //#66ccff
}
.part-block {
  $color: #ee0000; //定义局部变量
  color: $color; //#ee0000
}
.danger {
  color: $color; //#66ccff
}
```

### 特殊变量#{\$variables}

变量作为属性

\#{\$variables}

```scss
$color: #66ccff !default;
$borderTop: top;
$borderBottom: bottom;
.split {
  border-#{$borderTop}-color: $color;
  border-#{$borderBottom}-color: $color;
}
```

```css
/* 编译结果 */
.split {
  border-top-color: #66ccff;
  border-bottom-color: #66ccff;
}
```

### 多值变量

变量的值有多个。分 list 和 map 类型

list: 可以用逗号或者空格或者括号分隔，nth(\$var, \$index)取值

```scss
$color: #66ccff #ee0000;
.block {
  color: nth($color, 1);
}
.part-block {
  color: nth($color, 2);
}
```

```css
.block {
  color: #66ccff;
}
.part-block {
  color: #ee0000;
}
```

map：以对象的形式存在。{key: value}

```scss
$headings: (
  h1: 2em,
  h2: 1.5em,
  h3: 1em,
);
@each $key, $value in $headings {
  #{$key} {
    font-size: $value;
  }
}
```

```css
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1em;
}
```

### 全局变量!global

跟 var 作用域一样

## 嵌套

### \&

&表示父元素选择器

### \&\&

`&`和`&`之间必须有空格，否则会报错

```scss
.parent {
  .test {
    & .hello {
      color: #66ccff;
    }
    & & .world {
      color: #ee0000;
    }
  }
}

//结果
.parent .test .hello {
  color: #66ccff;
}
.parent .test .parent .test .world {
  color: #ee0000;
}
```

### @at-root

跳出嵌套

默认：\@at-root(without:rule)

但他不会跳出[\@media](#media冒泡)和\@support

```scss
.parent {
  color: #66ccff;
  @at-root .child {
    width: 100px;
  }
}

// 编译结果
.parent {
  color: #66ccff;
}
.child {
  width: 100px;
}
```

```scss
//多个
.parent {
  color: #66ccff;
  @at-root {
    .child {
      width: 100px;
    }
    .child-second {
      width: 200px;
    }
  }
}
//编译结果
.parent {
  color: #66ccff;
}
.child {
  width: 100px;
}
.child-second {
  width: 200px;
}
```

```scss
//@media
@media print {
  .parent {
    color: #66ccff;
    @at-root {
      .child {
        width: 100px;
      }
      .child-second {
        width: 200px;
      }
    }
  }
}
//编译结果
@media print {
  .parent {
    color: #66ccff;
  }
  .child {
    width: 100px;
  }

  .child-second {
    width: 200px;
  }
}
```

### without

值：`all`/`media`/`support`/`rule`

```scss
@media print {
  .parent {
    color: #66ccff;
    @at-root (without: media) {
      .child {
        width: 100px;
      }
    }
  }
}
```

```css
@media print {
  .parent {
    color: #66ccff;
  }
}
.parent .child {
  width: 100px;
}
```

## @media 冒泡

```scss
.sidebar {
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
}
//编译结果
.sidebar {
  width: 200px;
}
@media screen and (max-width: 768px) {
  .sidebar {
    width: 100px;
  }
}
```

```scss
@media screen {
  .sidebar {
    width: 200px;
    @media (max-width: 768px) {
      width: 100px;
    }
  }
}
//编译结果
@media screen {
  .sidebar {
    width: 200px;
  }
}
@media screen and (max-width: 768px) {
  .sidebar {
    width: 100px;
  }
}
```

## @mixin 和@include

类似 ES6 的 function

```scss
@mixin center {
  margin-left: auto;
  margin-right: auto;
}
.center {
  width: 200px;
  @include center;
}
//编译结果
.center {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
```

可以事先赋好默认值

```scss
@mixin line($border: 1px solid #ee0000, $padding: 1em) {
  border-bottom: $border;
  padding-top: $padding;
}
.center {
  width: 200px;
  @include line();
}
.right {
  width: 200px;
  @include line(2px solid #66ccff, 2em);
}
//编译结果
.center {
  width: 200px;
  border-bottom: 1px solid #ee0000;
  padding-top: 1em;
}
.right {
  width: 200px;
  border-bottom: 2px solid #66ccff;
  padding-top: 2em;
}
```

## 自定义方法@function

```scss
@function pixToRem($fontSize) {
  $baseSize: 14px;
  @return $fontSize / $baseSize * 1rem;
}
.center {
  font-size: pixToRem(12px);
}
//编译结果
.center {
  font-size: 0.8571428571rem;
}
```

### 内置函数

darken, lighten 属于 sass 内置函数

```scss
$linkColor: #00a1d6;
.register-txt {
  color: lighten($linkColor, 2%);
}
//编译结果
.register-txt {
  color: #00a9e0;
}
```

## if else

if 不要小括号

可以在 function 内用，也可以单独用

```scss
$linkColor: #00a1d6;
$type: red;
.register-txt {
  @if $type == red {
    color: #ee0000;
  } @else {
    color: $linkColor;
  }
}
//编译结果
.register-txt {
  color: #ee0000;
}
```

```scss
//三元运算: 条件，条件为真的值，条件为假的值
//if($condition, $if_true, $if_false)
$linkColor: #00a1d6;
$type: link;
.register-txt {
  color: if($type == link, $linkColor, #66ccff);
}
//编译结果
.register-txt {
  color: #00a1d6;
}
```

## 循环

### for

`for $var from start to end`

`for $var from start through end`

to 不包括 end, through 包括 end

```scss
@for $i from 1 to 3 {
  h#{$i} {
    font-size: 2em / $i;
  }
}
//编译结果
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1em;
}
```

### @each

\@each key in list/map

list:

```scss
$animals: dog, cat, monkey;
@each $value in $animals {
  .#{$value}-img {
    background: url("./images/#{$value}.jpg");
  }
}
//编译结果
.dog-img {
  background: url("./images/dog.jpg");
}
.cat-img {
  background: url("./images/cat.jpg");
}
.monkey-img {
  background: url("./images/monkey.jpg");
}
```

list:

```scss
$animals: (dog, #66ccff), (cat, #ee0000);
@each $name, $color in $animals {
  .#{$name}-img {
    background: url("./images/#{$name}.jpg");
    color: $color;
  }
}
//编译结果
.dog-img {
  background: url("./images/dog.jpg");
  color: #66ccff;
}
.cat-img {
  background: url("./images/cat.jpg");
  color: #ee0000;
}
```

map:

```scss
$headings: (
  h1: 2em,
  h2: 1.5em,
  h3: 1em,
);
@each $key, $value in $headings {
  #{$key} {
    font-size: $value;
  }
}
```

## 编译

安装好路径以后，直接进入到文件夹，敲命令

sass xxx.scss css/xxx.css

实时编译：

`sass --watch<要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css`

比如

`sass --watch all-14.scss:./css/all.css`

sass 也可以多文件编译。

sass
sass/:css/（表示"sass"文件夹中所有的".scss"文件编译成".css"文件，并且将这些 css 文件放到"css"文件夹中）
