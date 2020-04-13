# 子 shell

## 创建

1. 通过 `/bin/dash` 启动 bash shell，然后再输入 `bash` 就会启动一个子 shell，输入 `exit` 退出  
   可以通过`ps -f` 查看进程列表
2. 括号包裹 shell 命令，会自动创建子 Shell

```bash
[root@xxx ~]# ps -f
UID        PID  PPID  C STIME TTY          TIME CMD
root     23714 23712  0 20:17 pts/0    00:00:00 -bash
root     23734 23714  0 20:18 pts/0    00:00:00 ps -f
[root@xxx ~]# (sleep 10)
# 10秒内输入内容无法执行, 10秒后会执行
```

3. 协程 `coproc`，创建子 shell 并使用后台模式，还可以给子 shell 取名

```bash
[root@xxx ~]# coproc sleep 10
[1] 24012
[root@xxx ~]# ps -f
UID        PID  PPID  C STIME TTY          TIME CMD
root     23714 23712  0 20:17 pts/0    00:00:00 -bash
root     24012 23714  0 20:33 pts/0    00:00:00 sleep 10
root     24013 23714  0 20:33 pts/0    00:00:00 ps -f
```

取名需要用 `{}` 包括命令，并用 `;` 表示结束

```bash
[root@xxx ~]# coproc test { sleep 10 ;}
```

4. [外部命令](#外部命令)

## 后台模式

创建子 shell 可以使用后台模式：也就是在后台处理命令，把当前的输入让给其他用。  
如果想要变成后台模式，在命令后面加 `&`  
括号创建，则在括号后面加：`(sleep 10) &`

## sleep

暂停一段时间，以秒为单位

```bash
# 命令执行后的第一行内容分别是后台作业号（background job）和进程 ID
[root@xxx bin]# sleep 10 &
[1] 23399
[root@xxx bin]# ps -f
UID        PID  PPID  C STIME TTY          TIME CMD
root     23216 23214  0 19:41 pts/0    00:00:00 -bash
root     23255 23216  0 19:44 pts/0    00:00:00 /bin/bash
root     23331 23255  0 19:49 pts/0    00:00:00 bash
root     23399 23331  0 19:56 pts/0    00:00:00 sleep 10
root     23400 23331  0 19:56 pts/0    00:00:00 ps -f
```

10 秒以后

```bash
[root@xxx bin]# ps -f
UID        PID  PPID  C STIME TTY          TIME CMD
root     23216 23214  0 19:41 pts/0    00:00:00 -bash
root     23255 23216  0 19:44 pts/0    00:00:00 /bin/bash
root     23331 23255  0 19:49 pts/0    00:00:00 bash
root     23411 23331  0 19:56 pts/0    00:00:00 ps -f
[1]+  Done                    sleep 10
```

## jobs

显示所有后台作业

## 相关变量

- `$BASH_SUBSHELL`

## 外部与内建命令

判断内外可以用 `type`

```bash
[root@xxx ~]# type ps
ps is /usr/bin/ps
[root@xxx ~]# type cd
cd is a shell builtin
```

### 外部命令

也被称为文件系统命令  
存在于 bash shell 程序之外的命令，并不属于 shell。比如 `ps`  
通过 `which` 或者 `type` 查看所在位置  
一般位于 `/bin`，`/usr/bin`，`/sbin`或者 `/usr/bin`

```bash
[root@xxx ~]# which ps
/usr/bin/ps
```

外部命令会创建一个子进程，这种操作称之为 `forking`（衍生）  
大致过程是 父进程发出命令 `ps` → 创建子进程 → 子进程执行命令

### 内建命令

不会创建子进程

### 混合

有些命令既有内建，也有外部实现。
可以通过 `type -a` 查看

```bash
[root@xxx ~]# type -a echo
echo is a shell builtin
echo is /usr/bin/echo

```

默认使用内建命令  
如果要用外部实现，通过路径指定即可，如 `/usr/bin/echo "hello"`
