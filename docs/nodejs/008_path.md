# path

path 可以兼容不同操作系统的路径  
比如 MacOS 路径是"/foo/bar", windows 是"D:\\foo\bar"

## \_\_dirname

全局变量`__dirname`，表示当前 js 所在的目录

## join

将路径进行拼接

`path.join("/a", "/b", "/c")`

结果是/a/b/c

## resolve

`path. resolve("/a", "/b")`

解析成绝对路径`D:/a`

if(当 path.resolve 参数中不存在最开头带/的参数时) return 绝对路径

else return /+"最后一个前面加/的文件文件名’+"剩下文件夹

![](../images/9bbcd840e0cab0f636681c093f1c1eb3.png)
