# process

进程相关，和操作系统的一个接口。  
提供有关当前 Node.js 进程的信息并对其进行控制  
是一个全局变量，不需要 require，就可以直接使用

process.argv：数组。第一个是 node 进程，第二个是 JS 路径，第三个之后是各种参数。

比如运行任意一个 JS

![](../images/0d2b050614f4fd3eb88ace1164824afc.png)

## process.env

一个对象，可以进行赋值，比如常见的`NODE_ENV`其实是个自定义的对象，只不过大家都公认这个 NODE_ENV 是 NodeJS 的环境，已经成为了开发规范  
最常见的值是`"development"`和`"production"`  
也可能有 dev, prod 等等，取决于项目  
设置值通常用 cross-env 库
