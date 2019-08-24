# 简介

以 JavaScript 1.1 为基准的建议交由 ECMA 协会（European Computer Manufacturers Association），协会指定 TC39 技术委员会负责制定。最终完成了 ECMAScript（读作`ek-ma-script`）的标准。  
各个浏览器致力于以 ECMAScript 为标准实现各自的 JS 基础实现

## JS 组成

由`ECMAScript`、`DOM`（网页操作 API）、`BOM`（浏览器操作 API）三部分组成  
浏览器是实现 ECMAScript 标准的宿主之一。

### ECMAScript

规定了一些基础。比如语法、类型、语句、关键字、保留字、操作符、对象  
提供核心语言功能

### DOM

API  
提供访问和操作页面内容的方法和接口

### BOM

控制浏览器显示页面以外的部分。  
提供和浏览器做交互的方法和接口  
比如弹出浏览器新窗口，提供浏览器详细信息（`navigator`），加载页面的信息（`location`），显示器（`screen`），`cookies`，`XMLHttpRequest`等自定义对象

## 解释型语言(interpreted)

计算机上的一个特殊工具对于代码进行翻译。转为计算机能理解的语言

- 解释型：当程序运行的时候逐行解释。如 JS，Python
- 编译型（compile）：先编译成机器代码，再运行。比如 C，Go  
  JS 虽然归为解释型语言，但它实际上是 complied language。  
  但是和传统的编译型语言也不一样，不能很好地提前编译，也不能把编译后的代码放到不同的分布式系统。  
  JS 在代码执行前几微秒开始编译，也就是先编译再立即运行  
  更多内容见变量和作用域章节

### 编译粗略过程

1. 分词(token)/词法(lex)分析：
   token: 将一连串字符打断成有意义的片段，称为 token(记号)  
   比如 var a = 2 可能被拆成 var, a, =, 2
   ::: tip
   JS 会忽略 token 之间的空格（包括普通空格，换行\n，换页\f，制表符）
   :::
2. 解析：将 token 变成一个嵌套元素的树（抽象语法树 AST: Abstract Syntax Tree）），树代表了程序的语法结构
3. 代码生成：将抽象语法树转换为可执行的代码

## 动态类型语言

运行期间才会去做数据类型的检查。  
会在变量第一次被赋值的时候，在内部将数据类型记录下来。  
与此相对的是静态语言：编译期间检查
