# shell 基本命令

在图形化桌面出现之前，和系统交互只能借助 shell 提供的文本命令行界面 - CLI （command line interface）  
 CLI 只能接收文本输入，输出也只有文本和简单的图形

## 终端

即类型 Windows 的 "cmd" 弹出来的控制台。  
在终端内输入 shell 命令  
如果是通过 putty 等虚拟终端登录，会自动打开终端；  
如果是访问 Linux 桌面图形化界面，那需要自行打开，一般是 `Ctrl + Alt + F1`（也可能是 F1 ~ f7 任意一个，不同类型快捷键不同）

## bash shell

如[简介](./01_introduction.md#shell)介绍，大不多 Linux 发行版的默认 shell 都是 `bash shell`

## 提示符

提示符表示 shell 命令输入的地方，`bash shell` 的默认提示符是 `$`，也有可能是别的  
比如登录阿里云服务器的是 `#`

```bash
[root@xxx ~]#
```

## 手册

### man

输入 `man xx` 获取命令对应的 help，比如想要知道 `cd` 命令，那么输入 `man cd`  
输入后通过空格进行翻页，回车进行逐行阅读，方向键进行前后滚动  
输入 `q` 退出手册  
如果不记得命令，可以尝试输入关键字，`man -k 关键字`  
比如获取和终端有关的，可能会显示以下内容

```bash
# 只列举部分内容
[root@xxx ~]# man -k terminal
chvt (1)             - change foreground virtual terminal
clear (1)            - clear the terminal screen
mesg (1)             - control write access to your terminal
namei (1)            - follow a pathname until a terminal point is found
open (1)             - start a program on a new virtual terminal (VT).
```

比如 `clear` 可以清空控制台

### info

除了 `man` 获取手册外，也可以通过输入 `info` 获取信息

### help

大部分命令也可以通过 `命令 -help` 来查看帮助  
或者输入 `help` 命令本身

```bash
# 只列举部分内容
[root@xxx ~]# su -help
Change the effective user id and group id to that of USER.
A mere - implies -l.   If USER not given, assume root.

Options:
 -m, -p, --preserve-environment  do not reset environment variables
 -g, --group <group>             specify the primary group
```

## 执行多个命令

在一行内执行多个命令，可以用 `;` 分号
比如进入 node/bin 文件夹

```bash
[root@xxx ~]# cd node; cd bin;
```
